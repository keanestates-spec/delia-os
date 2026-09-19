// orchestrator/night-shift.js — scheduled entrypoint for the Night Shift phase
// (brain doc §23, SCHEMA.md §5 Operating Loop). Runs on NIGHT_SHIFT_CRON.
//
// Honest scope: this wires up the schedule and the audit trail. It does NOT implement
// the actual multi-agent reasoning loop (compress StateSnapshots into MemoryItems,
// run Examiner coherence checks, draft VideoScripts) — that requires the Ruflo/Claude
// Code orchestration side (connecting to this repo's MCP server, index.js) to actually
// exist and be configured, which is infrastructure the always-on host needs to run,
// not something this file can fake. Marked as a stub explicitly, same pattern as
// publish-external's video_render/canvas_publish handlers — not silently pretending
// to run a loop that isn't there.

import cron from 'node-cron';
import { createClient } from '@supabase/supabase-js';
import 'dotenv/config';

const db = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);

async function runNightShift() {
  const startedAt = new Date().toISOString();

  await db.from('audit_log').insert({
    agent_id: 'archivist', // Night Shift compression is Archivist's role per estate index §9
    action_type: 'night_shift:started',
    target_table: 'state_snapshot',
    target_id: startedAt,
    proprietary_content_touched: false
  });

  // TODO, not implemented: the actual reasoning loop.
  //   1. fetch state_snapshot rows since last Night Shift run
  //   2. have the orchestrated agents (via the MCP server in index.js) compress them
  //      into memory_item rows, evidence_class set honestly per SCHEMA.md §5
  //   3. run an Examiner-role coherence pass
  //   4. draft (not render — render still needs canPublishExternally + approval)
  //      VideoScript summaries for the Morning Board
  // This requires the Ruflo/Claude Code side to be connected and configured against
  // this MCP server first — see adapters/ruflo.md.
  console.log('[night-shift] schedule fired; reasoning loop not yet implemented — see TODO above');

  await db.from('audit_log').insert({
    agent_id: 'archivist',
    action_type: 'night_shift:completed_stub',
    target_table: 'state_snapshot',
    target_id: startedAt,
    proprietary_content_touched: false
  });
}

const schedule = process.env.NIGHT_SHIFT_CRON || '0 2 * * *';
cron.schedule(schedule, () => {
  runNightShift().catch((err) => console.error('[night-shift] failed:', err));
});

console.log(`[night-shift] scheduled: ${schedule}`);
