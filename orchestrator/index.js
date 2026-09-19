// orchestrator/index.js — Hotel NEXUS as an MCP server.
//
// CORRECTION from the previous plan: Ruflo has no documented programmatic SDK to
// import (verified by fetching its repo directly — it's CLI/MCP-server-first, built
// to sit on top of Claude Code). So this process doesn't "run Ruflo" as a library.
// Instead it exposes Hotel NEXUS's own tools as an MCP server — the same shape as
// every other MCP server already visible in a Claude Code session (this repo's own
// session has a dozen of them). Ruflo/Claude Code then orchestrates by connecting to
// THIS server, the same way it connects to any other MCP tool provider.
//
// UNVERIFIED PACKAGE PATH — flagging rather than guessing silently: training data and
// a live fetch of the MCP TypeScript SDK's docs disagreed on the exact import path
// (`@modelcontextprotocol/sdk/server/mcp.js` vs `@modelcontextprotocol/server`).
// Confirm the current package name/import path against the SDK's actual npm listing
// before `npm install` — do not assume either is right without checking.

import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js'; // VERIFY this import path before install
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { z } from 'zod';
import { createMapper } from './agent-mapper.js';
import 'dotenv/config';

const mapper = createMapper({
  supabaseUrl: process.env.SUPABASE_URL,
  serviceRoleKey: process.env.SUPABASE_SERVICE_ROLE_KEY,
  publishExternalUrl: process.env.PUBLISH_EXTERNAL_URL
});

async function main() {
  // estate_agents_enabled read from the SAME manifest file every other part of this
  // system reads — not re-derived, not hardcoded. A licensed deployment's manifest is
  // empty, so buildAgentDefinitions() naturally returns only core-layer agents.
  const manifestRes = await fetch(new URL('../ip_layer_manifest.local.json', import.meta.url)).catch(() => null)
    ?? await fetch(new URL('../ip_layer_manifest.json', import.meta.url));
  const manifest = await manifestRes.json();

  const agents = await mapper.buildAgentDefinitions(manifest.estate_agents_enabled === true);
  const agentIds = new Set(agents.map((a) => a.id));

  const server = new McpServer({ name: 'hotel-nexus', version: '0.1.0' });

  server.registerTool(
    'listActiveAgents',
    { description: 'List agents currently instantiated in this deployment (already filtered by ip_layer_manifest).' },
    async () => ({
      content: [{ type: 'text', text: JSON.stringify(agents.map((a) => ({ id: a.id, name: a.name, autonomyClass: a.autonomyClass })), null, 2) }]
    })
  );

  // The one external-output tool, shared across every agent — same rule as everywhere
  // else in this system: no per-adapter reimplementation of the publish gate.
  server.registerTool(
    'publishExternal',
    {
      description: 'Send content outside the system (Slack, video render, canvas). Server-side gate decides send/refuse — this tool does not.',
      inputSchema: z.object({
        agent_id: z.string(),
        requested_action_type: z.enum(['slack_post', 'video_render', 'canvas_publish']),
        content_ref: z.string(),
        content_hash: z.string(),
        ip_disclosure_level: z.enum(['public', 'licensed-partner', 'private']),
        approval_request_id: z.string().optional(),
        destination: z.object({ channel: z.string().optional(), provider: z.string().optional() }).optional(),
        payload: z.record(z.unknown())
      })
    },
    async (params) => {
      if (!agentIds.has(params.agent_id)) {
        return { content: [{ type: 'text', text: JSON.stringify({ sent: false, reason: 'unknown or inactive agent_id' }) }] };
      }
      const res = await fetch(process.env.PUBLISH_EXTERNAL_URL, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(params)
      });
      const result = await res.json();
      return { content: [{ type: 'text', text: JSON.stringify(result) }] };
    }
  );

  const transport = new StdioServerTransport();
  await server.connect(transport);
}

main().catch((err) => {
  console.error('hotel-nexus orchestrator failed to start:', err);
  process.exit(1);
});
