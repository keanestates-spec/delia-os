-- Hotel NEXUS — append-only enforcement, replacing the "for all" RLS policies from
-- supabase-core-schema.sql with real add-don't-rewrite rules.
--
-- Two different mechanisms, because "no rewriting" means different things per table:
--   - Pure logs (state_snapshot, audit_log): insert + select only. No update policy
--     exists, so Postgres denies UPDATE/DELETE outright once RLS is on — there's
--     nothing to bypass, the operation has no matching policy.
--   - Tables with ONE legitimate mutable field (memory_item.superseded_by,
--     approval_request.decision_*): RLS alone can't express "this column may change,
--     the rest may not" — that needs a BEFORE UPDATE trigger comparing OLD vs NEW and
--     rejecting anything that touches a protected column. Built below.
--
-- Run this AFTER supabase-core-schema.sql. Replaces, not appends to, the earlier
-- "anon full access" policies on these tables.

-- ────────────────────────────────────────────────────────────────
-- state_snapshot — pure log, insert + select only
-- ────────────────────────────────────────────────────────────────
drop policy if exists "anon full access to state_snapshot" on state_snapshot;

create policy "insert state_snapshot" on state_snapshot
  for insert to anon with check (true);

create policy "select state_snapshot" on state_snapshot
  for select to anon using (true);
-- no update/delete policy — those operations are denied, not just unpermissioned

-- ────────────────────────────────────────────────────────────────
-- audit_log — pure log, same rule, no exceptions ever (it's the record of everything
-- else, including attempts to violate this exact rule elsewhere)
-- ────────────────────────────────────────────────────────────────
drop policy if exists "anon full access to audit_log" on audit_log;

create policy "insert audit_log" on audit_log
  for insert to anon with check (true);

create policy "select audit_log" on audit_log
  for select to anon using (true);

-- ────────────────────────────────────────────────────────────────
-- memory_item — insert + select allowed; update allowed ONLY on superseded_by.
-- This is the actual mechanism behind every "resolve a flag" / "supersede a version"
-- pattern described throughout AGENT_PERMISSIONS.md and SCHEMA.md — it was previously
-- just a convention agents were supposed to follow. Now the database refuses anything
-- else, regardless of what any agent's code does or doesn't check.
-- ────────────────────────────────────────────────────────────────
drop policy if exists "anon full access to memory_item" on memory_item;

create policy "insert memory_item" on memory_item
  for insert to anon with check (true);

create policy "select memory_item" on memory_item
  for select to anon using (true);

create policy "update memory_item only for supersede" on memory_item
  for update to anon using (true) with check (true);
  -- RLS permits the UPDATE attempt; the trigger below is what actually restricts which
  -- columns may change. Both are needed — RLS alone can't do column-level checks.

create or replace function reject_memory_item_content_changes()
returns trigger as $$
begin
  if NEW.memory_type      is distinct from OLD.memory_type
  or NEW.title             is distinct from OLD.title
  or NEW.summary           is distinct from OLD.summary
  or NEW.evidence_class    is distinct from OLD.evidence_class
  or NEW.entities          is distinct from OLD.entities
  or NEW.topics            is distinct from OLD.topics
  or NEW.tier              is distinct from OLD.tier
  or NEW.provenance        is distinct from OLD.provenance
  or NEW.permissions_scope is distinct from OLD.permissions_scope
  then
    raise exception 'memory_item content is immutable after creation — only superseded_by may change. Write a new row instead.';
  end if;
  return NEW;
end;
$$ language plpgsql;

drop trigger if exists memory_item_content_immutable on memory_item;
create trigger memory_item_content_immutable
  before update on memory_item
  for each row execute function reject_memory_item_content_changes();

-- ────────────────────────────────────────────────────────────────
-- approval_request — insert + select allowed; update allowed ONLY on the decision
-- fields. A founder (or whatever grants approvals) needs to move pending -> approved,
-- but requested_action_type/content_ref/content_hash/requested_by_agent must never
-- change after the fact — that's exactly the field publish-external's content_hash
-- check relies on being trustworthy.
-- ────────────────────────────────────────────────────────────────
drop policy if exists "anon full access to approval_request" on approval_request;

create policy "insert approval_request" on approval_request
  for insert to anon with check (true);

create policy "select approval_request" on approval_request
  for select to anon using (true);

create policy "update approval_request only for decision" on approval_request
  for update to anon using (true) with check (true);

create or replace function reject_approval_request_content_changes()
returns trigger as $$
begin
  if NEW.requested_action_type is distinct from OLD.requested_action_type
  or NEW.requested_by_agent     is distinct from OLD.requested_by_agent
  or NEW.risk_tier               is distinct from OLD.risk_tier
  or NEW.content_ref             is distinct from OLD.content_ref
  or NEW.content_hash            is distinct from OLD.content_hash
  or NEW.spend_ceiling           is distinct from OLD.spend_ceiling
  or NEW.reversible              is distinct from OLD.reversible
  then
    raise exception 'approval_request terms are immutable after creation — only decision_status, decision_at, decision_by, and expires_at may change.';
  end if;
  return NEW;
end;
$$ language plpgsql;

drop trigger if exists approval_request_terms_immutable on approval_request;
create trigger approval_request_terms_immutable
  before update on approval_request
  for each row execute function reject_approval_request_content_changes();

-- ────────────────────────────────────────────────────────────────
-- agent_profile — genuinely different: this is configuration, not a log. Roles get
-- reassigned, agents get deactivated, scopes get corrected. Keeping full update access
-- here, but insert/select/update only — still no delete. An agent is retired via
-- active = false, never removed, so audit_log's agent_id foreign key never dangles.
-- ────────────────────────────────────────────────────────────────
drop policy if exists "anon full access to agent_profile" on agent_profile;

create policy "insert agent_profile" on agent_profile
  for insert to anon with check (true);

create policy "select agent_profile" on agent_profile
  for select to anon using (true);

create policy "update agent_profile" on agent_profile
  for update to anon using (true) with check (true);

-- ────────────────────────────────────────────────────────────────
-- ip_body_of_work — IP Steward legitimately updates patent_status/access_tier as
-- filings progress. source_files may also legitimately grow (Source-Recovery Queue —
-- more originals get located over time). licensable is already forced false by a CHECK
-- constraint in supabase-ip-registry-schema.sql, so no trigger needed here beyond that.
-- ────────────────────────────────────────────────────────────────
drop policy if exists "anon full access to ip_body_of_work" on ip_body_of_work;

create policy "insert ip_body_of_work" on ip_body_of_work
  for insert to anon with check (true);

create policy "select ip_body_of_work" on ip_body_of_work
  for select to anon using (true);

create policy "update ip_body_of_work" on ip_body_of_work
  for update to anon using (true) with check (true);
