-- NEXUS Hotel — Copilot persistent memory
-- Run this in your Supabase project: SQL Editor → New query → paste → Run.
-- Free tier is plenty for this.

-- 1. The conversations table: every copilot message, with role, content,
--    a session id (one per browser load), and a timestamp.
create table if not exists conversations (
  id          bigint generated always as identity primary key,
  session_id  text        not null,
  role        text        not null check (role in ('user','system')),
  content     text        not null,
  created_at  timestamptz not null default now()
);

-- 2. Indexes for fast history loads.
create index if not exists conversations_created_at_idx on conversations (created_at);
create index if not exists conversations_session_id_idx on conversations (session_id);

-- 3. Row Level Security.
--    This is a single-user personal app using the public 'anon' key in the
--    browser, so we grant the anon role full access to this one table.
--    Tradeoff: anyone who has BOTH your project URL and anon key could
--    read/write this table. For a personal OS that's acceptable. To lock it
--    down later, add Supabase Auth and scope rows to auth.uid().
alter table conversations enable row level security;

drop policy if exists "anon full access to conversations" on conversations;
create policy "anon full access to conversations"
  on conversations
  for all
  to anon
  using (true)
  with check (true);
