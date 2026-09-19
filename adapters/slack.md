# Hotel NEXUS — Slack Adapter

Not part of the core build order (SCHEMA.md build order item 6 names
Slack/Discord/Email/GitHub as candidate future adapters). Specified
here because it was asked for directly; the implementation still slots
into item 6, after Supabase/Ruflo/HeyGen.

## 1. Data flow

```json
{
  "agent": "string",
  "decision_type": "recommendation | flag | synthesis | completion",
  "content": "string",
  "state_summary": "JSONB (mood, energy, intention)",
  "protocol_suggested": "string | null",
  "ip_disclosure_level": "public | licensed-partner | private",
  "approval_request_id": "string | null",
  "timestamp": "ISO-8601"
}
```

Two changes from the first draft:

- `[PROPRIETARY]_included: BOOLEAN` → `ip_disclosure_level`, matching
  `VideoScript` (SCHEMA.md §4) exactly. A boolean loses the
  `licensed-partner` middle tier and gives adapters two different
  vocabularies for the same concept.
- Every outbound message goes through `IPLayer.canPublishExternally()`
  before the Slack webhook fires. `ip_disclosure_level` and
  `approval_request_id` on the payload are what that function reads —
  they're not decorative fields, the send is refused without them.

## 2. Trigger rules

| Event | Agent | Channel | `ip_disclosure_level` |
|---|---|---|---|
| State anomaly detected | Examiner | `#flags` | `public` — metadata about the anomaly, not body content |
| Protocol recommended | Cartographer | `#protocols` | **computed, not fixed** — see below |
| Contradiction found | Examiner | `#alerts` | `public` if the flag doesn't name proprietary source text; `private` if it quotes it |
| Daily synthesis | Archivist | `#daily-brief` | `public` — state/task summary only |
| Licensing decision | Product Architect | `#decisions` | `private` |
| IP filing status | IP Steward | `#ip-steward-only` (restricted channel, founder + IP Steward only) | `private`, always — `patent_status` is the single most legally sensitive field in the whole schema |

**"Protocol recommended" is computed per message:**

```js
function disclosureLevelForRecommendation(protocolSuggested, manifest) {
  if (!protocolSuggested) return 'public';
  var body = /* look up which IPBodyOfWork, if any, protocolSuggested resolves to */;
  if (!body) return 'public';  // generic core suggestion, no estate content involved
  return IPLayer.isBodyEnabled(body.body_id, manifest) ? body.access_tier_as_disclosure : 'private';
  // fails closed: an unrecognized or disabled body defaults to 'private', not 'public'
}
```

The static table above can't express this because Cartographer's
recommendations are only sometimes proprietary — hardcoding `#protocols`
as blanket-safe was the actual bug in the original draft, not a
formatting issue.

## 3. Channel permissioning assumption

This whole design assumes `#ip-steward-only` and `#decisions` are
genuinely restricted Slack channels (private, founder + explicitly
invited members). The adapter enforces *whether a message is sent*; it
has no control over who's in a channel once it's sent. Get the Slack
channel privacy settings right before wiring this up — `ip_disclosure_level`
gates the payload, not the audience.

## 4. Enforcement is server-side, not client-side

This app is a static browser page with no server of its own. Two
consequences that change the implementation from a single client-side
file to two pieces:

- **The Slack webhook URL is a bearer secret** — same category as the
  Supabase key that got removed from `delia-os-v5.html` earlier. It
  cannot live in client JS; anyone viewing page source could post to
  Slack as the app.
- **`approval_request_id` cannot be trusted from the client alone.**
  Devtools can call `fetch()` directly with a forged payload — a fake
  `public` disclosure level, or any string as an approval id. The check
  has to be re-run against the real `approval_request` table somewhere
  the client can't skip.

Implementation, in two files:

- **`adapters/slack.js`** (client) — builds the payload, computes
  `ip_disclosure_level` for protocol recommendations per §2, runs
  `IPLayer.canPublishExternally()` as a local fast-fail (saves a round
  trip on the obvious cases), then POSTs to the Edge Function. Holds no
  secrets and makes no final decision.
- **`supabase/functions/publish-external/index.ts`** (server) — the
  actual boundary. Looks up `approval_request_id` against the database
  (`decision_status = 'approved'`, not expired, agent and content match),
  holds the real webhook URL as a Supabase secret, and only then calls
  Slack. Logs every attempt — allowed or blocked — to `audit_log`.

The permission-check pseudocode from the first draft ("strip
`[PROPRIETARY]` if channel is public") is superseded by this: there is
no strip-after-the-fact step. A message is either allowed to send as-is
(public, or approved) or it is refused outright. Redacting proprietary
content from an already-assembled message is exactly the failure mode
flagged earlier — content can be proprietary in ways that aren't
confined to a removable block.
