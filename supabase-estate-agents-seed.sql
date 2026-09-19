-- Hotel NEXUS — estate agent seed data
-- Implements the full 8-role roster from AGENT_PERMISSIONS.md (supersedes the earlier
-- 5-role seed, which was missing Archivist, IP Steward, and Editor entirely).
--
-- Run this ONLY on the founder's own deployment, after supabase-core-schema.sql AND
-- supabase-ip-registry-schema.sql (IP Steward's write scope references ip_body_of_work).
-- Do NOT ship this file as part of a licensed core.
--
-- These rows are role/permission definitions, not proprietary content themselves —
-- but their presence signals an estate deployment, so they stay out of the core file.

insert into agent_profile
  (agent_id, role_name, layer, autonomy_class, read_scopes, write_scopes, ip_layer_dependency, proprietary_read_access, active)
values
  ('archivist', 'Archivist', 'estate', 1,
    '{state_snapshot,memory_item,ip_body_of_work,agent_profile}',
    '{agent_profile,memory_item,audit_log}',
    'required', 'full', true),

  ('cartographer', 'Cartographer', 'estate', 1,
    '{state_snapshot,memory_item,ip_body_of_work,agent_profile}',
    '{memory_item,audit_log}',
    'required', 'full', true),

  ('examiner', 'Examiner / Skeptic', 'estate', 1,
    '{state_snapshot,memory_item,ip_body_of_work,agent_profile,workflow_run}',
    '{memory_item,audit_log}',
    'required', 'full', true),

  ('researcher', 'Researcher', 'estate', 1,
    '{state_snapshot,memory_item}',
    '{memory_item,audit_log}',
    'reference-only', 'denied', true),

  ('ip-steward', 'IP Steward', 'estate', 2,
    '{ip_body_of_work,memory_item,audit_log}',
    '{ip_body_of_work,memory_item,audit_log}',
    'required', 'full', true),

  ('editor', 'Editor', 'estate', 1,
    '{memory_item,ip_body_of_work}',
    '{memory_item,audit_log}',
    'required', 'full', true),

  ('product-architect', 'Product Architect', 'estate', 2,
    '{state_snapshot,memory_item,opportunity_record,ip_body_of_work}',
    '{opportunity_record,workflow_run,memory_item,audit_log}',
    'required', 'full', true),

  ('finisher', 'Finisher', 'estate', 1,
    '{workflow_run,opportunity_record}',
    '{workflow_run,audit_log}',
    'reference-only', 'metadata-only', true)

on conflict (agent_id) do update set
  role_name = excluded.role_name,
  read_scopes = excluded.read_scopes,
  write_scopes = excluded.write_scopes,
  ip_layer_dependency = excluded.ip_layer_dependency,
  proprietary_read_access = excluded.proprietary_read_access,
  updated_at = now();

-- IP Steward is the only role with write access to ip_body_of_work.patent_status —
-- enforced at the application layer (this table doesn't do column-level SQL grants
-- under the shared anon-key posture); worth revisiting with real per-agent DB roles
-- once this moves off single-key RLS.
