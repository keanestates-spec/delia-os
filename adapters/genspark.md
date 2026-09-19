# Hotel NEXUS — GenSpark Adapter

**Status: spec only, not buildable yet.** GenSpark has no confirmed
programmatic/developer API as of the research done for this schema
(checked directly — it reads as a no-code AI workspace product, not a
documented REST API like HeyGen). Every `genspark_api.*` call below is
a placeholder for an API that hasn't been verified to exist.
SCHEMA.md's build order already says: don't build a live adapter
against GenSpark on spec. This document exists so the design is ready
the moment (if) a real API shows up — not as something to implement now.

## 1. Data flow

```json
{
  "source": "protocol | decision_tree | causal_recipe",
  "source_ref": "UUID",
  "canvas_type": "interactive | flowchart | dashboard",
  "content": "JSONB (structured for canvas)",
  "ip_disclosure_level": "public | licensed-partner | private",
  "approval_request_id": "string | null",
  "audience": "internal | licensee | public"
}
```

Same correction as the other two adapters: `[PROPRIETARY]_included: BOOLEAN` → `ip_disclosure_level`.

## 2. Trigger rules

| Event | Agent | Canvas type | `ip_disclosure_level` |
|---|---|---|---|
| Protocol sequence | Product Architect | interactive | **computed** — reuses the same resolver as Slack/HeyGen |
| Decision tree | Examiner | flowchart | `public` unless it traces through a `[PROPRIETARY]` body |
| State dashboard | Finisher | dashboard | `public` — aggregate/anonymized only, per Finisher's `metadata-only` proprietary access (AGENT_PERMISSIONS.md) |
| TILT board simulation | Cartographer | interactive | `private` — TILT is a named `[PROPRIETARY]` body, this is never computed as public |
| Agent workflow | Product Architect | flowchart | `public` |

## 3. Canvas generation

The original draft's audience-based branching (`internal` /
`licensee` / `public` each with their own "REMOVE `[PROPRIETARY]`"
step) has the right shape — audience-scoped generation is better than a
single canvas redacted per-viewer — but the removal step is still
runtime redaction of already-fetched proprietary content, the same
issue flagged on Slack and HeyGen. Corrected version:

```
INPUT: source, source_ref, audience
IF audience != "internal":
  FETCH only nodes/content whose own ip_disclosure_level already
  matches the audience tier — never fetch [PROPRIETARY] nodes and
  filter them out afterward
ELSE:
  FETCH full content (audience = internal, requires an agent whose
  proprietary_read_access = 'full')
BUILD canvas_json
CALL IPLayer.canPublishExternally(...)   -- local fast-fail
POST supabase/functions/publish-external
     { requested_action_type: "canvas_publish", ... }
     -- currently returns 501 not-implemented; no live GenSpark API to call
```

## 4. Interaction tracking — blocked, not built

The original draft's §7 (`interactions_logged`, `learning_signal: "this
interaction teaches agents about user behavior"`) is the cross-tenant
learning loop from SCHEMA.md §9 (`synthesis-ip`, `predictive-signal`),
arriving here as a feature request rather than an explicit design
decision. Both of those offering types are marked
`status: "blocked-pending-consent-terms"` in §9 for a reason: logging
and feeding back a *licensee's* or *public viewer's* interactions to
improve founder-owned frameworks requires explicit consent terms that
don't exist yet. Do not implement `interactions_logged` or
`learning_signal` for any `audience != "internal"` canvas until that's
resolved — internal-audience interaction logging (the founder's own
usage) is fine, since no cross-tenant question applies to it.

## 5. Licensing transition

Same correction as HeyGen: no "regenerate canvases with `[PROPRIETARY]`
nodes removed" step needed. Canvases built for `internal` audience are
estate-side by construction and excluded from a licensed package the
same way `hotel-nexus-estate/` is — not regenerated, not shipped.
