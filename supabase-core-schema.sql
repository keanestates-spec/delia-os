-- Hotel NEXUS — Core schema, build unit 1
-- Implements SCHEMA.md §1 (Core State Model): state_snapshot, memory_item, agent_profile.
-- Run in Supabase SQL Editor. Contains no [PROPRIETARY] content — safe to ship in a licensed core.
--
-- Depends on nothing. Everything else (ip_layer_manifest, IPBodyOfWork registry, adapters)
-- is built on top of these tables per SCHEMA.md's build order.

create extension if not exists vector;

-- ────────────────────────────────────────────────────────────────
-- 1. state_snapshot  (SCHEMA.md §1.1)
-- ────────────────────────────────────────────────────────────────
create table if not exists state_snapshot (
  snapshot_id             uuid primary key default gen_random_uuid(),
  person_id               text not null,
  estate_id               text not null,
  "timestamp"             timestamptz not null default now(),

  location                jsonb not null default '{}'::jsonb,   -- { room_id?, lat?, lon?, label? }
  physiology              jsonb not null default '{}'::jsonb,   -- { sleep_hours?, recovery_score?, energy_level?, heart_rate_rest?, breath_rhythm? }
  mood                    jsonb not null default '{}'::jsonb,   -- { emoji?, valence?, arousal_score? }
  intention               jsonb not null default '{}'::jsonb,   -- { stated_focus?, top_task_id? }

  readiness_score         numeric check (readiness_score between 0 and 100),
  friction_score          numeric check (friction_score between 0 and 100),
  overload_risk_score     numeric check (overload_risk_score between 0 and 100),
  confidence_score        numeric check (confidence_score between 0 and 100),
  readiness_band          text check (readiness_band in ('red','amber','green','blue')),
  work_suitability_profile text[] not null default '{}',

  source_signals          text[] not null default '{}',
  explanation_summary     text,

  -- embeds a summary of location+physiology+mood+intention for "moments resembling
  -- current intention" semantic queries (SCHEMA.md §7). Populated by the app layer,
  -- not generated in SQL — dimension matches OpenAI/most common embedding models.
  state_embedding         vector(1536)
);

create index if not exists state_snapshot_person_time_idx on state_snapshot (person_id, "timestamp" desc);
create index if not exists state_snapshot_estate_idx on state_snapshot (estate_id);
create index if not exists state_snapshot_embedding_idx on state_snapshot
  using hnsw (state_embedding vector_cosine_ops);

-- ────────────────────────────────────────────────────────────────
-- 2. memory_item  (SCHEMA.md §1.2)
-- ────────────────────────────────────────────────────────────────
create table if not exists memory_item (
  memory_id               uuid primary key default gen_random_uuid(),
  memory_type             text not null,
  title                   text not null,
  summary                 text not null,
  source_uri              text,
  source_type             text,
  provenance              text,

  -- load-bearing: every memory carries its evidence class, never inferred implicitly
  evidence_class          text not null check (evidence_class in (
                             'SOURCE-DOCUMENTED','FOUNDER-STATED','WORKING-SYNTHESIS',
                             'EXTERNAL-EVIDENCE','UNVERIFIED-OPEN'
                           )),

  entities                text[] not null default '{}',
  topics                  text[] not null default '{}',
  tier                    text not null default 'hot' check (tier in ('hot','warm','cold')),

  temporal_valid_from     timestamptz not null default now(),
  temporal_valid_to       timestamptz,                 -- null = still valid; Graphiti syncs against this

  permissions_scope       text not null default 'founder-only',
  embedding                vector(1536),                -- default local vector store (pgvector, same DB as everything else)
  embedding_ref            text,                        -- optional pointer if/when Mem0 is added as an upgrade path
  graph_ref                text,                        -- Graphiti node/edge pointer, if/when added

  importance_score        numeric default 0,
  freshness_score         numeric default 0,

  created_at              timestamptz not null default now(),
  superseded_by           uuid references memory_item(memory_id)  -- append-only versioning, never overwrite in place
);

create index if not exists memory_item_tier_idx on memory_item (tier);
create index if not exists memory_item_evidence_idx on memory_item (evidence_class);
create index if not exists memory_item_validity_idx on memory_item (temporal_valid_from, temporal_valid_to);
create index if not exists memory_item_embedding_idx on memory_item
  using hnsw (embedding vector_cosine_ops);

-- ────────────────────────────────────────────────────────────────
-- 3. agent_profile  (SCHEMA.md §1.3)
-- ────────────────────────────────────────────────────────────────
create table if not exists agent_profile (
  agent_id                text primary key,
  role_name               text not null,
  layer                   text not null check (layer in ('core','estate')),
  autonomy_class          smallint not null check (autonomy_class between 0 and 5),
  read_scopes             text[] not null default '{}',
  write_scopes            text[] not null default '{}',
  ip_layer_dependency     text not null default 'none' check (ip_layer_dependency in ('none','reference-only','required')),

  -- AGENT_PERMISSIONS.md: read/write *scope* (which tables) and proprietary *visibility*
  -- (whether [PROPRIETARY]-tagged content within those tables is visible) are different
  -- axes. 'full' still respects read_scopes/write_scopes — it doesn't grant blanket access.
  proprietary_read_access text not null default 'denied' check (proprietary_read_access in ('full','denied','metadata-only')),

  reports_to              text references agent_profile(agent_id),
  active                  boolean not null default true,

  created_at              timestamptz not null default now(),
  updated_at              timestamptz not null default now()
);

-- Enforce the licensing invariant at the database level, not just in application code:
-- a core-layer agent can never declare a required dependency on the IP layer.
alter table agent_profile
  add constraint core_agents_have_no_ip_dependency
  check (not (layer = 'core' and ip_layer_dependency = 'required'));

-- A core-layer agent (ships in every licensed instance) can never default to seeing
-- proprietary content either — same invariant, applied to the visibility axis.
alter table agent_profile
  add constraint core_agents_have_no_proprietary_access
  check (not (layer = 'core' and proprietary_read_access = 'full'));

-- ────────────────────────────────────────────────────────────────
-- 4. approval_request  (brain doc §42, SCHEMA.md §41.2/§49)
-- Built ahead of its original build-order slot because it's what makes
-- canPublishExternally()'s approval_request_id check real. A client can claim any
-- string as an approval_request_id; only a server-side lookup against this table
-- (decision_status = 'approved', ids and content_hash match) makes that claim a
-- real boundary instead of a client-trusted flag. References agent_profile, so it
-- must be created after it.
-- ────────────────────────────────────────────────────────────────
create table if not exists approval_request (
  approval_request_id      uuid primary key default gen_random_uuid(),
  requested_action_type    text not null,        -- 'video_render' | 'slack_post' | 'canvas_publish' | ...
  requested_by_agent       text not null references agent_profile(agent_id),
  risk_tier                text not null check (risk_tier in ('0','1','2','3','4','5')),  -- autonomy_class scale, §42.1
  content_ref              text,                 -- id of the VideoScript/message/canvas this covers
  content_hash             text,                 -- server re-derives and compares before honoring an approval on send
  spend_ceiling            numeric,
  reversible               boolean not null default true,
  evidence_refs            text[] not null default '{}',
  recommended_decision     text,
  decision_status          text not null default 'pending' check (decision_status in ('pending','approved','rejected','expired')),
  decision_at              timestamptz,
  decision_by              text,                 -- 'founder' or a specific human identifier — never an agent_id
  expires_at               timestamptz,

  created_at               timestamptz not null default now()
);

create index if not exists approval_request_status_idx on approval_request (decision_status);
create index if not exists approval_request_content_idx on approval_request (content_ref);

-- ────────────────────────────────────────────────────────────────
-- 5. audit_log  (AGENT_PERMISSIONS.md) — every agent action, core and estate alike
-- ────────────────────────────────────────────────────────────────
create table if not exists audit_log (
  log_id                   uuid primary key default gen_random_uuid(),
  agent_id                 text not null references agent_profile(agent_id),
  action_type              text not null,        -- 'read' | 'write' | 'flag' | 'recommend' | ...
  target_table             text not null,
  target_id                text not null,
  proprietary_content_touched boolean not null default false,
  "timestamp"              timestamptz not null default now()
);

create index if not exists audit_log_agent_time_idx on audit_log (agent_id, "timestamp" desc);
create index if not exists audit_log_target_idx on audit_log (target_table, target_id);

-- ────────────────────────────────────────────────────────────────
-- Row Level Security
-- Same posture as supabase-setup.sql: single-user personal deployment on the anon key.
-- Before this ships to a second licensee, swap these for auth.uid()-scoped policies.
-- ────────────────────────────────────────────────────────────────
alter table state_snapshot   enable row level security;
alter table memory_item      enable row level security;
alter table agent_profile    enable row level security;
alter table approval_request enable row level security;
alter table audit_log        enable row level security;

drop policy if exists "anon full access to state_snapshot" on state_snapshot;
create policy "anon full access to state_snapshot" on state_snapshot
  for all to anon using (true) with check (true);

drop policy if exists "anon full access to memory_item" on memory_item;
create policy "anon full access to memory_item" on memory_item
  for all to anon using (true) with check (true);

drop policy if exists "anon full access to agent_profile" on agent_profile;
create policy "anon full access to agent_profile" on agent_profile
  for all to anon using (true) with check (true);

drop policy if exists "anon full access to approval_request" on approval_request;
create policy "anon full access to approval_request" on approval_request
  for all to anon using (true) with check (true);

drop policy if exists "anon full access to audit_log" on audit_log;
create policy "anon full access to audit_log" on audit_log
  for all to anon using (true) with check (true);
