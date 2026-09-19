# Hotel NEXUS — HeyGen Adapter

Build order item 5. HeyGen has a confirmed, documented API
(docs.heygen.com) — this is the adapter closest to actually being
buildable, unlike GenSpark.

## 1. Data flow

```json
{
  "source": "state_snapshot | protocol | causal_recipe | agent_reasoning",
  "source_ref": "UUID",
  "content": "string (narration script)",
  "ip_disclosure_level": "public | licensed-partner | private",
  "approval_request_id": "string | null",
  "narrator_voice": "string (HeyGen avatar/voice id)",
  "visuals": "state_transition_graph | protocol_sequence",
  "duration_target_sec": 60
}
```

Same correction as Slack: `[PROPRIETARY]_included: BOOLEAN` → `ip_disclosure_level`.
This *is* `VideoScript` from SCHEMA.md §4 — not a parallel schema, the
same record. `source` maps to `VideoScript.source_type`, `source_ref` to
`VideoScript.source_ref`.

## 2. Trigger rules

| Event | Agent | Output | `ip_disclosure_level` |
|---|---|---|---|
| Protocol recommended | Cartographer | explainer_video | **computed** — same rule as `adapters/slack.js`'s `resolveDisclosureLevel()`, reused, not reimplemented |
| State breakthrough (`CausalRecipe` outcome) | Product Architect | narrative_video | inherits from `CausalRecipe.ip_disclosure_level` (SCHEMA.md §8) — already computed upstream by the causal engine |
| Daily synthesis | Archivist | daily_recap | `public` |
| Licensing protocol walkthrough | Product Architect | internal_only | `private`, always |

## 3. Script generation → render

```
INPUT: source, source_ref
FETCH: underlying content + its ip_disclosure_level (never re-derive from
       scratch — CausalRecipe and protocol lookups already compute this,
       reuse it)
BUILD: VideoScript { ..., ip_disclosure_level, approval_request_id? }
CALL:  IPLayer.canPublishExternally(script, manifest)   -- local fast-fail only
POST:  supabase/functions/publish-external
       { requested_action_type: "video_render", ...script }
```

**No sanitize step.** The original draft's "IF `[PROPRIETARY]`=true AND
agent.proprietary_read_access=DENIED: SANITIZE remove IP-specific
language" is replaced by the same refuse-or-allow logic as Slack: the
Edge Function either has a valid `approval_request_id` on file for this
exact `content_hash`, or the render is refused. There's no
runtime-redaction path — if content needs a public-safe version, that
version is generated from public-safe source data in the first place
(e.g. `CausalRecipe.ip_disclosure_level = "public"` because no
`protocol_refs` touched a `[PROPRIETARY]` body), not produced by
stripping a private one after the fact.

## 4. Output types

The three-tier idea from the original draft (`internal_video` /
`public_video` / `licensee_video`) is correct and useful, but it's not
a new concept — it's `AssetRecord.ip_disclosure_level` read back:

| Tier | `ip_disclosure_level` | `accessible_by` |
|---|---|---|
| `internal_video` | `private` | requesting agent + Product Architect + Finisher |
| `licensee_video` | `licensed-partner` | the specific licensed tenant it was generated for |
| `public_video` | `public` | anyone (YouTube/Vimeo), attribution `© Delia Keane / Hotel NEXUS` |

One enum, reused, rather than a second vocabulary that could drift out
of sync with `VideoScript`'s.

## 5. Audit record

Handled by `publish-external`'s `logAttempt()` — one `audit_log` row per
attempt (`video_render:sent` or `video_render:blocked`), not a separate
per-adapter audit format. `content_hash` on the row lets a later check
confirm the rendered video actually matches what was approved.

## 6. Licensing transition

The original draft said: "when core OS licensed, regenerate all videos
with sanitized scripts." That's unnecessary work solving the wrong
problem. Licensing an instance means deleting `hotel-nexus-estate/` and
emptying `ip_layer_manifest.json` (SCHEMA.md's core rule) — existing
`internal_video` assets are estate-side records to begin with and
simply aren't part of what gets copied into a licensed package.
Nothing needs regenerating; it needs to never have been included.
