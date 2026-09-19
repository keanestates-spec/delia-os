-- Hotel NEXUS — real per-user auth scoping, replacing the anon-key-wide-open model.
-- Run AFTER supabase-core-schema.sql, supabase-ip-registry-schema.sql, and
-- supabase-append-only-policies.sql. Supersedes their RLS policies on the tables
-- touched below (drops the anon-role policies, replaces with authenticated-role ones).
--
-- Two different scoping rules, matching the two different kinds of table:
--   - Personal data (state_snapshot, memory_item): owner_id + auth.uid() row-level
--     scoping. Nobody, not even another authenticated user, can read/write a row
--     they don't own.
--   - System/config tables (agent_profile, approval_request, audit_log,
--     ip_body_of_work): require an authenticated session (not the anon key) but no
--     per-row owner check — this is still a single-founder deployment, not
--     multi-tenant. Real per-tenant scoping (estate_id) is a separate, bigger build
--     for when this actually ships to a second licensee, not done here.
--
-- Prerequisite this migration does NOT do: creating the actual Supabase Auth user
-- (sign up in the Supabase dashboard or via the app's own sign-in flow) and updating
-- the client app to authenticate rather than just hold the publishable key. See
-- supabase-auth.js for the client half.

-- ────────────────────────────────────────────────────────────────
-- state_snapshot — add owner_id, defaulted from the session so the app can't forget
-- to set it and can't successfully spoof a different one (WITH CHECK still verifies)
-- ────────────────────────────────────────────────────────────────
alter table state_snapshot add column if not exists owner_id uuid not null default auth.uid() references auth.users(id);

drop policy if exists "insert state_snapshot" on state_snapshot;
drop policy if exists "select state_snapshot" on state_snapshot;
drop policy if exists "anon full access to state_snapshot" on state_snapshot;

create policy "insert own state_snapshot" on state_snapshot
  for insert to authenticated with check (auth.uid() = owner_id);

create policy "select own state_snapshot" on state_snapshot
  for select to authenticated using (auth.uid() = owner_id);
-- still no update/delete policy — same append-only rule, now also auth-gated

-- ────────────────────────────────────────────────────────────────
-- memory_item — same pattern. The existing content-immutability trigger
-- (reject_memory_item_content_changes) is untouched; this only changes who can
-- insert/select/update-for-supersede in the first place.
-- ────────────────────────────────────────────────────────────────
alter table memory_item add column if not exists owner_id uuid not null default auth.uid() references auth.users(id);

drop policy if exists "insert memory_item" on memory_item;
drop policy if exists "select memory_item" on memory_item;
drop policy if exists "update memory_item only for supersede" on memory_item;
drop policy if exists "anon full access to memory_item" on memory_item;

create policy "insert own memory_item" on memory_item
  for insert to authenticated with check (auth.uid() = owner_id);

create policy "select own memory_item" on memory_item
  for select to authenticated using (auth.uid() = owner_id);

create policy "update own memory_item for supersede" on memory_item
  for update to authenticated using (auth.uid() = owner_id) with check (auth.uid() = owner_id);
  -- reject_memory_item_content_changes trigger still enforces column-level immutability

-- ────────────────────────────────────────────────────────────────
-- System/config tables — authenticated required, no per-row owner (single-founder
-- deployment; see note at top for why this isn't estate_id-scoped yet)
-- ────────────────────────────────────────────────────────────────
drop policy if exists "insert agent_profile" on agent_profile;
drop policy if exists "select agent_profile" on agent_profile;
drop policy if exists "update agent_profile" on agent_profile;
drop policy if exists "anon full access to agent_profile" on agent_profile;

create policy "authenticated insert agent_profile" on agent_profile
  for insert to authenticated with check (true);
create policy "authenticated select agent_profile" on agent_profile
  for select to authenticated using (true);
create policy "authenticated update agent_profile" on agent_profile
  for update to authenticated using (true) with check (true);

drop policy if exists "insert approval_request" on approval_request;
drop policy if exists "select approval_request" on approval_request;
drop policy if exists "update approval_request only for decision" on approval_request;
drop policy if exists "anon full access to approval_request" on approval_request;

create policy "authenticated insert approval_request" on approval_request
  for insert to authenticated with check (true);
create policy "authenticated select approval_request" on approval_request
  for select to authenticated using (true);
create policy "authenticated update approval_request for decision" on approval_request
  for update to authenticated using (true) with check (true);
  -- reject_approval_request_content_changes trigger still enforces column-level immutability

drop policy if exists "insert audit_log" on audit_log;
drop policy if exists "select audit_log" on audit_log;
drop policy if exists "anon full access to audit_log" on audit_log;

create policy "authenticated insert audit_log" on audit_log
  for insert to authenticated with check (true);
create policy "authenticated select audit_log" on audit_log
  for select to authenticated using (true);

drop policy if exists "insert ip_body_of_work" on ip_body_of_work;
drop policy if exists "select ip_body_of_work" on ip_body_of_work;
drop policy if exists "update ip_body_of_work" on ip_body_of_work;
drop policy if exists "anon full access to ip_body_of_work" on ip_body_of_work;

create policy "authenticated insert ip_body_of_work" on ip_body_of_work
  for insert to authenticated with check (true);
create policy "authenticated select ip_body_of_work" on ip_body_of_work
  for select to authenticated using (true);
create policy "authenticated update ip_body_of_work" on ip_body_of_work
  for update to authenticated using (true) with check (true);

-- ────────────────────────────────────────────────────────────────
-- publish-external's Edge Function is unaffected — it already runs as the
-- service-role key (supabase-service-role, bypasses RLS entirely, which is why it
-- was always the real enforcement boundary rather than these policies). This
-- migration only changes what the CLIENT app can do directly.
-- ────────────────────────────────────────────────────────────────
