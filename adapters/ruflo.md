# Hotel NEXUS — Ruflo Orchestration Integration

Build order item 5, second half (Supabase done; this is "Ruflo/LangGraph
for orchestration," before HeyGen gets an actual caller). Unlike
Slack/HeyGen, this isn't a thing the browser app calls — it's the
runtime that would call *them*, and the 8 agents currently only exist
as `agent_profile` rows with no process actually acting as them.

## 1. What Ruflo is in this architecture — corrected

**Original plan was wrong and got corrected mid-build:** the first draft
of this document assumed Ruflo exposes a programmatic SDK you `import`
and call methods on. Fetching the actual repo directly showed that's
not true — Ruflo (github.com/ruvnet/ruflo, MIT, vetted earlier) is
CLI/MCP-server-first, built to sit on top of Claude Code, not a library.

The corrected shape: **`orchestrator/index.js` is an MCP server**
exposing Hotel NEXUS's own tools (`listActiveAgents`, `publishExternal`)
— the same shape as every other MCP server a Claude Code session
already connects to. Ruflo/Claude Code orchestrates by connecting to
*this* server, not the other way around. So:

- `orchestrator/agent-mapper.js` reads `agent_profile` rows and turns
  them into tool-access scopes
- `orchestrator/index.js` serves those as MCP tools over stdio
- Ruflo (or Claude Code directly) is the orchestrator that calls them
- `publishExternal` routes to `supabase/functions/publish-external`
  regardless of which side initiates the call

It does not replace anything already built — `state_snapshot`,
`memory_item`, `approval_request`, `publish-external` all stay exactly
as they are. The orchestrator is the process that *exposes* them to
whatever is doing the actual agent reasoning.

## 2. `agent_profile` → Ruflo agent mapping

| `agent_profile` field | Ruflo concept |
|---|---|
| `agent_id`, `role_name` | agent name/identity |
| `autonomy_class` (0–5) | which actions the agent can take without a human in the loop — maps to Ruflo's hook system as a pre-action check, not a replacement for `approval_request`. An agent at class 2 can create a draft `approval_request`; nothing above class 0 can call `publish-external` and skip one. |
| `read_scopes` / `write_scopes` | the Supabase table access the agent's tools are allowed to touch — enforced by scoping which Supabase client credentials/RPC functions the agent's Ruflo tool definitions expose, not by trusting the agent to self-limit |
| `proprietary_read_access` | whether `ip_body_of_work` full-content reads are in the agent's toolset at all. `denied` means the tool literally isn't registered for that agent — not registered-but-refused, absent |
| `ip_layer_dependency` | whether the agent is even instantiated when `ip_layer_manifest.estate_agents_enabled` is false. A licensed core simply doesn't spin up the 8 estate agents — same manifest check as everywhere else, applied at agent-instantiation time instead of content-render time |

## 3. `publish-external` as a Ruflo tool, not a bypass

Every agent that can reach Slack/HeyGen/GenSpark output does so through
one tool definition wrapping a call to
`supabase/functions/publish-external` — the same Edge Function the
browser-side `adapters/slack.js` calls. Ruflo runs with more trust than
a browser tab (it holds its own service credentials), which is exactly
why it must **not** get a shortcut around the Edge Function's
`approval_request` verification — a more-trusted caller with a bypass
is a worse security posture than a less-trusted one without one. One
enforcement point, regardless of which side calls it.

## 4. Where this actually runs — open question, not a code decision

`delia-os` today is a static browser page with no server process. Ruflo
needs a persistent Node runtime somewhere, and that's an infrastructure
choice, not something to default silently:

- **Local, on-demand** — runs on your own machine via CLI when you're
  actively working, agents are only "alive" while you're running it.
  Cheapest, matches the current "zero dependencies, fully offline"
  posture of the rest of the app, but Night Shift / overnight agent
  work (brain doc §23) can't happen unless your machine is on and the
  process is running.
- **Small persistent host** (a VPS, Railway/Fly/Render, etc.) — agents
  can run overnight, Morning Board is ready when you wake up, but it's
  a new always-on cost and a new thing to secure (it would hold the
  Supabase service-role key and provider secrets).
- **Supabase Edge Functions alone, no Ruflo host** — Deno-based, would
  mean *not* using Ruflo for the actual orchestration loop (Ruflo is
  Node-targeted) and instead hand-rolling the agent loop as more Edge
  Functions. Loses Ruflo's swarm/memory/hook features, gains "no new
  host to run."

I'm not picking one — it's a real cost/complexity tradeoff and only you
know whether overnight agent runs (the Night Shift concept from the
brain doc) matter enough to justify an always-on host versus running
this locally when you're at the computer.

## 5. Mechanical setup, for whenever this is unblocked

Not runnable in this session — no Node.js/npm on this machine. `orchestrator/`
now exists (`package.json`, `agent-mapper.js`, `index.js`, `night-shift.js`,
`Dockerfile`) — written but untested. Before running:

1. **Verify the MCP SDK import path.** `index.js` flags this explicitly —
   training data and a live doc fetch disagreed on
   `@modelcontextprotocol/sdk/server/mcp.js` vs `@modelcontextprotocol/server`.
   Check the current npm listing before `npm install`.
2. `cd orchestrator && npm install` — pulls `@modelcontextprotocol/sdk`,
   `@supabase/supabase-js`, `node-cron`, `zod`, `dotenv`.
3. Copy `.env.example` to `.env`, fill in real values (service-role key,
   Anthropic key, the deployed `publish-external` Edge Function URL).
4. `npm start` runs the MCP server (stdio) — connect Ruflo/Claude Code
   to it as an MCP provider, the same way this repo's own Claude Code
   session connects to its other MCP servers.
5. `npm run night-shift` (or the Docker container, which runs this by
   default) is the actual always-on process for the hosting decision
   from the previous turn — it's a scheduler + audit stub right now,
   not the full reasoning loop (marked as TODO in the file itself).
