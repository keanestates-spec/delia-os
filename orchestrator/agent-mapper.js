// orchestrator/agent-mapper.js — pulls agent_profile rows from Supabase and produces
// Ruflo agent definitions per the mapping table in adapters/ruflo.md §2.
//
// Deliberately does NOT hardcode which agents exist (no "cartographer", "examiner" etc.
// literals) — it reads whatever is active in agent_profile and builds definitions from
// that. This is what keeps the orchestrator identical between the founder's deployment
// and a licensed core: a licensed core's agent_profile simply won't have the 8 estate
// rows (supabase-estate-agents-seed.sql was never run against it), so this mapper
// produces fewer agents automatically, not via a special-cased check.

import { createClient } from '@supabase/supabase-js';

export function createMapper({ supabaseUrl, serviceRoleKey, publishExternalUrl }) {
  const db = createClient(supabaseUrl, serviceRoleKey);

  async function loadActiveAgents() {
    const { data, error } = await db
      .from('agent_profile')
      .select('*')
      .eq('active', true);
    if (error) throw new Error(`agent-mapper: failed to load agent_profile: ${error.message}`);
    return data;
  }

  // ip_layer_dependency: 'required' agents are only instantiated when the deployment's
  // manifest has estate_agents_enabled — checked here, not left to the agent to self-police.
  function shouldInstantiate(agentRow, manifestEstateAgentsEnabled) {
    if (agentRow.ip_layer_dependency === 'required') return manifestEstateAgentsEnabled === true;
    return true; // 'none' and 'reference-only' agents run regardless
  }

  // The one tool every agent gets for anything leaving the system — never a per-agent
  // reimplementation, never a direct Slack/HeyGen call that skips the Edge Function.
  function publishExternalTool(agentRow) {
    return {
      name: 'publishExternal',
      description: 'Send content outside the system (Slack, video render, canvas). Refused server-side unless public or approved.',
      handler: async (payload) => {
        const res = await fetch(publishExternalUrl, {
          method: 'POST',
          headers: { 'content-type': 'application/json' },
          body: JSON.stringify({ ...payload, agent_id: agentRow.agent_id })
        });
        return res.json();
      }
    };
  }

  function toRufloAgentDefinition(agentRow) {
    return {
      id: agentRow.agent_id,
      name: agentRow.role_name,
      // read_scopes/write_scopes become the allowlist for which Supabase tables this
      // agent's tools may touch — enforced by only registering tools for scopes present
      // here, not by trusting the agent's own judgment about what it should access.
      allowedReadTables: agentRow.read_scopes,
      allowedWriteTables: agentRow.write_scopes,
      autonomyClass: agentRow.autonomy_class,
      // proprietary_read_access === 'denied' means the estate-content tool is simply
      // absent from this agent's toolset, not present-but-blocked.
      tools: agentRow.proprietary_read_access === 'denied'
        ? [publishExternalTool(agentRow)]
        : [publishExternalTool(agentRow), /* estate-content read tool, not yet built */],
      reportsTo: agentRow.reports_to
    };
  }

  async function buildAgentDefinitions(manifestEstateAgentsEnabled) {
    const rows = await loadActiveAgents();
    return rows
      .filter((row) => shouldInstantiate(row, manifestEstateAgentsEnabled))
      .map(toRufloAgentDefinition);
  }

  return { loadActiveAgents, buildAgentDefinitions };
}
