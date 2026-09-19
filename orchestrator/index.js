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
// Import path CONFIRMED by actually running this (2026-09-19, Node v24.19.0):
// `@modelcontextprotocol/sdk/server/mcp.js` / `.../server/stdio.js` are correct —
// npm install + execution both succeeded on these imports. The earlier draft flagged
// this as unverified rather than guessing; now it's verified, not guessed.

import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { z } from 'zod';
import { readFile } from 'node:fs/promises';
import { createMapper } from './agent-mapper.js';
import 'dotenv/config';

const mapper = createMapper({
  supabaseUrl: process.env.SUPABASE_URL,
  serviceRoleKey: process.env.SUPABASE_SERVICE_ROLE_KEY,
  publishExternalUrl: process.env.PUBLISH_EXTERNAL_URL
});

// BUG FOUND AND FIXED by actually running this: Node's native fetch() does not
// support file:// URLs ("not implemented... yet" from undici) — fetch() here was
// copied from ip-layer.js's browser-side pattern without checking it also works in
// Node. It doesn't. This reads the local manifest file directly instead.
async function loadManifest() {
  for (const name of ['../ip_layer_manifest.local.json', '../ip_layer_manifest.json']) {
    try {
      const text = await readFile(new URL(name, import.meta.url), 'utf8');
      return JSON.parse(text);
    } catch (e) { /* try next candidate — a missing local override is expected, not an error */ }
  }
  return { estate_agents_enabled: false, bodies_of_work: [], protocols: {} }; // same safe default as ip-layer.js
}

async function main() {
  // estate_agents_enabled read from the SAME manifest file every other part of this
  // system reads — not re-derived, not hardcoded. A licensed deployment's manifest is
  // empty, so buildAgentDefinitions() naturally returns only core-layer agents.
  const manifest = await loadManifest();

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
