// orchestrator/agent-loop.js — the first real agent loop, not a stub.
//
// Deliberately minimal: reads recent state_snapshot rows, asks Claude for ONE
// observation, writes it as a memory_item. This is "Archivist" in spirit (per
// AGENT_PERMISSIONS.md — provenance/synthesis role), not a full multi-agent system.
// The point is proving the loop is real end to end, not building all 8 agents at once.
//
// Runs on the service-role key (bypasses RLS), which means it does NOT get the
// owner_id = auth.uid() default that browser-authenticated inserts get — there's no
// user JWT in this context, auth.uid() resolves to null. So this script looks up the
// real founder user id via the admin API once, and sets owner_id explicitly.

import { createClient } from '@supabase/supabase-js';
import { pathToFileURL } from 'node:url';
import 'dotenv/config';

const SUPABASE_URL = process.env.SUPABASE_URL;
const SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;
const ANTHROPIC_API_KEY = process.env.ANTHROPIC_API_KEY;

const db = createClient(SUPABASE_URL, SERVICE_ROLE_KEY);

async function getFounderUserId() {
  const res = await fetch(`${SUPABASE_URL}/auth/v1/admin/users`, {
    headers: { apikey: SERVICE_ROLE_KEY, Authorization: `Bearer ${SERVICE_ROLE_KEY}` }
  });
  if (!res.ok) throw new Error(`admin/users lookup failed: ${res.status}`);
  const body = await res.json();
  const users = body.users || body; // API shape has varied across supabase-js/auth versions — handle both
  if (!Array.isArray(users) || users.length === 0) {
    throw new Error('No Supabase auth users found — sign in via the app at least once before running this.');
  }
  if (users.length > 1) {
    console.warn(`[agent-loop] ${users.length} users found, using the first one. This assumes single-founder use.`);
  }
  return users[0].id;
}

async function fetchRecentSnapshots(ownerId, hours = 72) {
  const since = new Date(Date.now() - hours * 3600 * 1000).toISOString();
  const { data, error } = await db
    .from('state_snapshot')
    .select('intention, physiology, mood, readiness_band, timestamp')
    .eq('owner_id', ownerId)
    .gte('timestamp', since)
    .order('timestamp', { ascending: false })
    .limit(20);
  if (error) throw new Error(`fetchRecentSnapshots failed: ${error.message}`);
  return data;
}

async function askClaude(snapshots) {
  const summary = snapshots.length === 0
    ? 'No state snapshots logged in the last 72 hours.'
    : snapshots.map(s =>
        `${s.timestamp}: intention="${s.intention?.stated_focus || '—'}" energy=${s.physiology?.energy_level ?? '—'} mood=${s.mood?.score ?? '—'} band=${s.readiness_band ?? '—'}`
      ).join('\n');

  const res = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'x-api-key': ANTHROPIC_API_KEY,
      'anthropic-version': '2023-06-01',
      'content-type': 'application/json'
    },
    body: JSON.stringify({
      model: 'claude-sonnet-5',
      max_tokens: 300,
      messages: [{
        role: 'user',
        content: `Here are recent logged state snapshots (intention/energy/mood) for a founder using a personal operating system:\n\n${summary}\n\nWrite ONE short, concrete observation (2-3 sentences max) about a pattern, gap, or notable signal in this data. Be specific and grounded in the actual numbers/text given — do not invent claims the data doesn't support. If there's not enough data, say so plainly rather than speculating.`
      }]
    })
  });

  if (!res.ok) {
    const errBody = await res.text().catch(() => '');
    throw new Error(`Anthropic API failed: ${res.status} ${errBody}`);
  }
  const body = await res.json();
  return body.content?.[0]?.text || '(no text in response)';
}

async function writeMemoryItem(ownerId, observationText, snapshotCount) {
  const { data, error } = await db.from('memory_item').insert({
    memory_type: 'night_shift_observation',
    title: 'Night Shift observation',
    summary: observationText,
    source_type: 'agent_loop',
    provenance: 'orchestrator/agent-loop.js (Archivist-role synthesis)',
    evidence_class: 'WORKING-SYNTHESIS', // this is an LLM synthesis over logged data, never SOURCE-DOCUMENTED
    entities: [],
    topics: ['night-shift'],
    tier: 'hot',
    permissions_scope: 'founder-only',
    owner_id: ownerId
  }).select().single();
  if (error) throw new Error(`writeMemoryItem failed: ${error.message}`);
  return data;
}

async function logAudit(ownerId, targetId, success, detail) {
  // audit_log has no owner_id column and requires a valid agent_id FK — 'archivist'
  // must exist in agent_profile (it does, from the estate seed) for this to succeed.
  await db.from('audit_log').insert({
    agent_id: 'archivist',
    action_type: success ? 'agent_loop:completed' : 'agent_loop:failed',
    target_table: 'memory_item',
    target_id: targetId || detail || 'n/a',
    proprietary_content_touched: false
  });
}

export async function runAgentLoop() {
  console.log('[agent-loop] starting...');
  const ownerId = await getFounderUserId();
  console.log(`[agent-loop] founder user id resolved: ${ownerId}`);

  const snapshots = await fetchRecentSnapshots(ownerId);
  console.log(`[agent-loop] found ${snapshots.length} state_snapshot rows in the last 72h`);

  const observation = await askClaude(snapshots);
  console.log(`[agent-loop] Claude observation: ${observation}`);

  const row = await writeMemoryItem(ownerId, observation, snapshots.length);
  console.log(`[agent-loop] wrote memory_item ${row.memory_id}`);

  await logAudit(ownerId, row.memory_id, true);
  console.log('[agent-loop] done.');
  return row;
}

// Allow running directly: node agent-loop.js
// Bug found by actually running this on Windows: comparing import.meta.url (always
// forward-slashed, file:///C:/...) against a manually-built `file://${argv[1]}` string
// (backslashed on Windows) never matches, so the loop silently never ran. pathToFileURL
// does the OS-correct conversion instead of string-building it by hand.
if (import.meta.url === pathToFileURL(process.argv[1]).href) {
  runAgentLoop().catch((err) => {
    console.error('[agent-loop] failed:', err.message);
    process.exit(1);
  });
}
