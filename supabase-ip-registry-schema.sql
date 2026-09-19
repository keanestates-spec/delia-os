-- Hotel NEXUS — IP body-of-work registry, table structure (SCHEMA.md §2.2)
-- Core-safe: this is the *mechanism* for pluggable IP layers, not Delia's IP itself.
-- A licensee could seed this table with their own proprietary bodies of work using
-- the same structure. Ships empty with the licensed core.
--
-- The actual 9 rows for Hotel NEXUS live in ip-body-registry.local.sql, which is
-- gitignored and never committed — those rows reference real patent-draft filenames.

create table if not exists ip_body_of_work (
  body_id           text primary key,
  name              text not null,
  type              text not null check (type in (
                      'navigation_model','calibration_framework','reframing_protocol',
                      'law_set','mechanism','physio_protocol','reasoning_operator','invention_estate'
                    )),
  source_files      text[] not null default '{}',   -- pointers into hotel-nexus-estate/, never inlined content
  access_tier       text not null default 'founder-only' check (access_tier in ('founder-only','estate-agents','licensed-partner')),
  patent_status     text check (patent_status in ('unverified','provisional-claimed','filed-verified')),

  -- hardcoded false at the schema level, not just convention — this table is never
  -- part of what a license grant includes, regardless of what the app layer does
  licensable        boolean not null default false,

  created_at        timestamptz not null default now(),
  updated_at        timestamptz not null default now()
);

alter table ip_body_of_work
  add constraint ip_body_of_work_never_licensable check (licensable = false);

alter table ip_body_of_work enable row level security;

drop policy if exists "anon full access to ip_body_of_work" on ip_body_of_work;
create policy "anon full access to ip_body_of_work" on ip_body_of_work
  for all to anon using (true) with check (true);
