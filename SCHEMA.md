# SCHEMA.md — Hotel NEXUS Canonical Schema v0.1

This is the build unit. Everything downstream — which plugins get sourced,
what agents are allowed to touch, what a licensee receives — derives from
this file, not the other way around.

**Relationship to existing documents:** `NEXUS_BRAIN.md` and the `docs/`
master documents remain canonical *vision* — per the estate's own rule,
originals are immutable and this file does not replace them. `SCHEMA.md`
is the build-ready distillation: the subset of that vision reduced to
records, fields, and access rules an engineer or an agent can implement
against today. Where this file and the brain document ever disagree, the
brain document wins and this file should be corrected.

**Core rule that makes licensing trivial:** nothing in Section 1 (Core
State Model) may reference, import, or depend on anything in Section 2
(IP Layer). The IP layer depends on the core; the core never depends on
the IP layer. Licensing an instance of Hotel NEXUS = delete
`hotel-nexus-estate/` and empty `ip_layer_manifest.json`. If that
deletion ever breaks the core, the schema has been violated somewhere
and needs fixing before the build continues.

---

## 1. Core State Model

*Universal. Contains no proprietary content. This is what any licensee
gets, empty, on day one.*

### 1.1 State snapshot

Time-bounded estimate of the human + environment, fused from
heterogeneous signals (brain doc §39.7). Drives the readiness doctrine
(§39.2) that everything else in the core reads.

```ts
interface StateSnapshot {
  snapshot_id: string;
  person_id: string;
  estate_id: string;
  timestamp: string;               // ISO 8601

  // "time, location, physiology, mood, intention"
  location: { room_id?: string; lat?: number; lon?: number; label?: string };
  physiology: {
    sleep_hours?: number;
    recovery_score?: number;       // 0-100
    energy_level?: number;         // 1-5, matches existing Wellness Tracker
    heart_rate_rest?: number;
    breath_rhythm?: string;        // ties to The Hum's breath/resonance work when the IP layer is enabled — core field, no [PROPRIETARY] content itself
  };
  mood: { emoji?: string; valence?: number; arousal_score?: number };
  intention: { stated_focus?: string; top_task_id?: string };

  // derived scores (brain doc §49 state_snapshot record)
  readiness_score: number;         // 0-100
  friction_score: number;
  overload_risk_score: number;
  confidence_score: number;        // confidence in this snapshot itself
  readiness_band: "red" | "amber" | "green" | "blue";  // §39.3
  work_suitability_profile: string[];  // e.g. ["routine_admin","recovery_supportive"]

  source_signals: string[];        // which inputs contributed (calendar, wearable, self-report...)
  explanation_summary: string;     // human-readable "why this score"
}
```

### 1.2 Memory layer

Every memory item carries an **evidence class** — this is load-bearing,
not optional metadata. It's how the system avoids the estate's own
failure mode of "turning a working synthesis into source history merely
because it is elegant."

```ts
type EvidenceClass =
  | "SOURCE-DOCUMENTED"   // present in an original file
  | "FOUNDER-STATED"      // stated, original not yet ingested
  | "WORKING-SYNTHESIS"   // inferred by comparing sources
  | "EXTERNAL-EVIDENCE"   // independently verified research
  | "UNVERIFIED-OPEN";    // plausible, not established

type MemoryTier = "hot" | "warm" | "cold";  // brain doc §16.2

interface MemoryItem {
  memory_id: string;
  memory_type: string;             // personal_fact | preference | health | decision | ...
  title: string;
  summary: string;
  source_uri?: string;
  source_type: string;
  provenance: string;
  evidence_class: EvidenceClass;
  entities: string[];
  topics: string[];
  tier: MemoryTier;
  temporal_valid_from: string;
  temporal_valid_to?: string;      // Graphiti-backed: facts expire
  permissions_scope: string;       // which agents/roles may read this
  embedding_ref?: string;          // Mem0 vector pointer
  graph_ref?: string;              // Graphiti node/edge pointer
  importance_score: number;
  freshness_score: number;
}
```

**Retrieval rules:**
1. Never surface `WORKING-SYNTHESIS` to a user-facing agent without labeling it as such.
2. `UNVERIFIED-OPEN` items require a Researcher/Examiner pass before they can back a Class 3+ approval (§42.1).
3. Hot tier is queried by default; warm/cold require an explicit retrieval reason logged against the requesting agent.
4. Backing stores: vector similarity via **Mem0**, temporal/relational truth via **Graphiti** — vetted previously, both Apache-2.0.

### 1.3 Agent registry

```ts
type AutonomyClass = 0 | 1 | 2 | 3 | 4 | 5;   // brain doc §42.1, 0=observe-only, 5=highest-risk

interface AgentProfile {
  agent_id: string;
  role_name: string;               // "General Manager" | "Revenue Director" | ...
  layer: "core" | "estate";        // which side of the license boundary this agent lives on
  autonomy_class: AutonomyClass;
  read_scopes: string[];           // record types / memory tags this agent may query
  write_scopes: string[];          // record types this agent may create/mutate
  ip_layer_dependency: "none" | "reference-only" | "required";
  reports_to?: string;             // handoff-matrix parent (§40, §51.9)
  active: boolean;
}
```

Rule: any `AgentProfile` with `layer: "core"` must have
`ip_layer_dependency: "none"`. If a core agent (e.g. Studio Head) needs
to *use* estate content (e.g. render a SUBTRACTION explainer video), it
does so by reading a `[PROPRIETARY]` record through the injection
interface in §2.4 — it never hardcodes estate knowledge itself.

---

## 2. IP Layer Injection Points

*Everything below is `[PROPRIETARY]`. This is what gets deleted, as a
whole directory, when the core ships to a licensee.*

### 2.1 SUBTRACTION protocols `[PROPRIETARY]`

```ts
interface SubtractionProtocol {          // [PROPRIETARY]
  protocol_id: string;
  protocol_name: "SUBTRACTION";
  trigger_conditions: string[];          // e.g. overload_risk_score above threshold
  steps: { step_id: string; instruction: string; removal_target: string }[];
  removal_criteria: string;              // "removing everything that isn't extraordinary"
  output_state: string;                  // what StateSnapshot field this is meant to move
}
```

### 2.2 The 9 bodies of work `[PROPRIETARY]`

One registry entry per body, per the founder estate index (§2 A–J,
excluding NEXUS itself and the IPOI reference forms, which aren't IP):

```ts
type IPBodyType =
  | "navigation_model"      // TILT
  | "calibration_framework" // Book of Dials / Pulse
  | "reframing_protocol"    // Book of Attainment
  | "law_set"               // Book of Laws / Laws Beneath the Laws
  | "mechanism"             // The Hum
  | "physio_protocol"       // Cortisol / Cortisol Nation
  | "reasoning_operator"    // Landlords of Landlords
  | "invention_estate";     // SAVA / TouchSphere / BeamPresence

interface IPBodyOfWork {                  // [PROPRIETARY]
  body_id: string;
  name: string;
  type: IPBodyType;
  source_files: string[];                 // pointers into hotel-nexus-estate/, never inlined elsewhere
  access_tier: "founder-only" | "estate-agents" | "licensed-partner";
  patent_status?: "unverified" | "provisional-claimed" | "filed-verified";  // never assert without evidence (estate rule)
  licensable: false;                      // hardcoded — this table is never part of a license grant
}
```

Registry seed (from the estate index):

| body_id | name | type |
|---|---|---|
| `tilt` | TILT — Navigation System | navigation_model |
| `dials` | The Book of Dials / Pulse | calibration_framework |
| `attainment` | The Book of Attainment | reframing_protocol |
| `laws` | The Book of Laws | law_set |
| `laws-beneath` | The Laws Beneath the Laws | law_set |
| `the-hum` | The Hum | mechanism |
| `cortisol-nation` | Cortisol / Cortisol Nation | physio_protocol |
| `landlords` | Landlords of Landlords | reasoning_operator |
| `sava` | SAVA / Invention Estate (TouchSphere, BeamPresence, ...) | invention_estate |

### 2.3 Peptide tracking, breathwork, calibration loops `[PROPRIETARY]`

```ts
interface PeptideProtocol {              // [PROPRIETARY]
  protocol_id: string;
  compound: string;
  dosing_schedule: string;
  stacking_notes: string;
  source_body_id: "sava" | null;
}

interface BreathworkProtocol {           // [PROPRIETARY] — ties to The Hum
  protocol_id: string;
  pattern: string;
  source_body_id: "the-hum";
}

interface CalibrationLoop {              // [PROPRIETARY] — ties to Book of Dials
  loop_id: string;
  dial_name: string;
  position_to_polarity_map: string;      // "position → polarity → calibration → drift → return"
  source_body_id: "dials";
}
```

These are distinct from the generic **Peptide Garage** and **Wellness
Tracker** modules already in `app.js` (inventory, stock alerts, sleep
logs) — those stay in the core as empty, generic tracking UIs. Only the
specific protocol *content* (which compound, which dosing logic, which
breath pattern) is proprietary and lives here.

### 2.4 Injection mechanism

The core never imports estate content directly. It reads one manifest:

```json
// ip_layer_manifest.json — present (populated) in founder's own deployment,
// absent or empty in a licensed core
{
  "bodies_of_work": ["tilt", "dials", "attainment", "laws", "laws-beneath", "the-hum", "cortisol-nation", "landlords", "sava"],
  "protocols": { "subtraction": true, "peptide": true, "breathwork": true, "calibration_loops": true },
  "estate_agents_enabled": true
}
```

Core code only ever asks "does an `IPBodyOfWork` with this `body_id`
exist in the manifest?" — never "what does SUBTRACTION say?" Deleting
`hotel-nexus-estate/` and emptying this manifest is the entire licensing
operation.

---

## 3. Agent Interface Contract

What any given agent — core or estate — may read vs. write, and whether
a record is a legal candidate for video export.

| Record type | Immutable (read-only) | Mutable | Video-exportable |
|---|---|---|---|
| Original source files (`SOURCE_FILES/*`, patent drafts, manuscripts) | **Yes, always** — estate rule 1: "never silently edit an original source file" | No | No — source documents are never rendered directly |
| `PersonProfile` core identity fields | Yes (agents read, only the founder/Editor mutate) | Founder-only write | No |
| `IPBodyOfWork` law/protocol text | Yes | Estate agents only (Editor, with authorization) | Only via `VideoScript` derivation, never verbatim |
| `StateSnapshot` | No | Yes — any core agent with matching `write_scopes` | Only aggregated/anonymized (e.g. "readiness trend"), not raw |
| `MemoryItem` | No (append new items; never overwrite in place — versioned) | Yes, append-only | No |
| `WorkflowRun`, `ApprovalRequest`, `OpportunityRecord` | No | Yes, by owning agent | No |
| `AssetRecord` (`asset_type = video`) | No | Yes — Studio Head only, via approval | **Yes — this is the export target** |

Rule of thumb: **immutability tracks provenance risk, not just data
type.** Anything that could later be needed as evidence (source files,
patent drafts, identity) is read-only to agents. Anything that is the
system's own working state is mutable but append-only where auditability
matters (memory, approvals).

---

## 4. Video Export Schema

*What actually becomes a HeyGen/GenSpark render, and the gate that
stops proprietary content leaking into a licensee's output by accident.*

```ts
type VideoProvider = "heygen" | "genspark";   // genspark: no verified programmatic API as of this schema — treat as manual-only until confirmed

type IPDisclosureLevel = "public" | "licensed-partner" | "private";

interface VideoScript {
  script_id: string;
  source_type: "state_summary" | "protocol" | "memory_item" | "opportunity_record" | "founder_message";
  source_ref: string;                 // id of the record this script was derived from
  ip_disclosure_level: IPDisclosureLevel;
  scenes: {
    scene_id: string;
    voiceover_text: string;
    visual_direction: string;
    duration_sec: number;
  }[];
  avatar_profile: string;             // HeyGen avatar/voice id
  provider: VideoProvider;
  render_status: "draft" | "approved" | "rendering" | "complete" | "failed";
  approval_request_id?: string;       // Class 2 minimum per brain doc §7515 render table
  output_asset_id?: string;           // -> AssetRecord
}
```

**Which state feeds HeyGen (public by default):**
- Morning Board / Night Shift summaries
- `wins[]` / `goals[]` (already tracked in `app.js`)
- Milestone and course-delivery progress

**Which protocols become scripts (proprietary — gated):**
- SUBTRACTION walkthroughs, TILT navigation sessions, Book excerpts — any `VideoScript` with `source_type: "protocol"` where `source_ref` resolves to an `IPBodyOfWork` **must** carry `ip_disclosure_level: "private"` or `"licensed-partner"`, never `"public"`, unless a human explicitly reclassifies it.

**Enforcement rule:** the HeyGen/GenSpark adapter refuses to render any
`VideoScript` where `ip_disclosure_level != "public"` unless the
requesting deployment has `estate_agents_enabled: true` in its
`ip_layer_manifest.json` **and** the script carries an
`approval_request_id`. This is the one runtime check that prevents a
licensed core from ever being able to render founder IP, even by
accident — it fails closed, not open.

**This rule is not video-specific.** `ip-layer.js` implements it as
`canPublishExternally(payload, manifest)` — any `ip_disclosure_level` +
optional `approval_request_id` shape. Every adapter that sends anything
outside the system (video render, Slack post, email, future Discord/
GitHub touchpoints) calls this one function rather than reimplementing
the check. `canRenderVideoScript` still exists as an alias for the
video call site specifically.

---

## 5. Operating Loop

The founder's own core loop (brain doc: "state snapshot → Morning Board
→ approval → evidence trail → memory write-back → Night Shift"),
expressed against the records above:

```
Morning Board:
  StateSnapshot created
  → agents read StateSnapshot (read_scopes permitting)
  → estate agents may recommend a protocol from an enabled IPBodyOfWork
    (gated by isProtocolEnabled() / isBodyEnabled() — never hardcoded)
  → intention logged back onto StateSnapshot
  → any resulting action becomes a WorkflowRun, gated by ApprovalRequest

Night Shift:
  → compress the day's StateSnapshots into MemoryItem entries (evidence_class set honestly, not assumed)
  → AgentProfile.write_scopes may be updated based on outcomes (agent "learning" = new MemoryItem rows, not silent prompt mutation)
  → coherence check: an Examiner-layer agent flags StateSnapshot/intention contradictions as a MemoryItem, not a deletion
  → eligible summaries become VideoScript drafts (§4) — draft only; render still goes through the fail-closed gate
```

### 5.1 State transition triggers

Expressed against real field names, not pseudo-code shorthand:

- `StateSnapshot.mood` changes materially → emit `state.updated` event (brain doc §41.3), core agents with matching `read_scopes` may alert.
- `StateSnapshot.physiology.energy_level < 3` **and** `isProtocolEnabled("calibration_loops", manifest)` → estate agent may surface a `CalibrationLoop`-derived suggestion. On a licensed core, `isProtocolEnabled` is always `false`, so this branch never fires — no special-casing needed at the call site.
- `StateSnapshot.intention.stated_focus` present with no matching `WorkflowRun` for 24h → Examiner-role agent creates a `MemoryItem` (`evidence_class: "WORKING-SYNTHESIS"`) flagging the gap. It flags; it does not act.
- A `VideoScript` is safe to render iff `canRenderVideoScript()` returns `allowed: true` (§4) — this is the only "is it safe to publish" check that exists. There is no separate sanitize-and-ship path.

### 5.2 The 9 bodies as state injectors

Each `IPBodyOfWork` (§2.2) follows the same interaction pattern when enabled:

| Stage | Mechanism |
|---|---|
| Entry trigger | A `StateSnapshot` or explicit user action references the body (e.g. `intention.stated_focus` matches a `body_id`) |
| State read/write | Estate agent reads `StateSnapshot`, may write a new `MemoryItem` tagged with `topics: [body_id]` |
| Agent visibility | Gated by `AgentProfile.read_scopes` — core agents never see body-specific content, only that *a* recommendation exists |
| Video export flag | Any derived `VideoScript` inherits `ip_disclosure_level` from the source body's `access_tier` (§2.2), never defaults to `"public"` |

This is one pattern implemented once, not nine separate integrations —
adding a 10th body of work later means a new `IPBodyOfWork` registry row,
not new code.

## 6. Estate Agent Registry (seed data)

Concrete `AgentProfile` rows for the estate-side roster already spec'd
in the founder index (§9), shown against the real schema so the
permission matrix is enforceable rather than descriptive:

| agent_id | role_name | layer | autonomy_class | ip_layer_dependency | write_scopes |
|---|---|---|---|---|---|
| `cartographer` | Cartographer | estate | 1 | required | `memory_item` (cross-reference notes only) |
| `examiner` | Examiner / Skeptic | estate | 1 | required | `memory_item` (contradiction flags — never deletes) |
| `researcher` | Researcher | estate | 1 | reference-only | `memory_item` (`evidence_class: "EXTERNAL-EVIDENCE"` only) |
| `product-architect` | Product Architect | estate | 2 | required | `opportunity_record`, `workflow_run` (framing decisions) |
| `finisher` | Finisher | estate | 1 | reference-only | `workflow_run` (scope-freeze / status only) |

Note `researcher` and `finisher` are `reference-only`, not `required` —
they consult estate content but their core function (evidence grading,
shipping checklists) still works with the IP layer off. Worth keeping
that distinction sharp: `required` should be reserved for agents whose
entire purpose *is* the estate (Cartographer, Examiner, Product
Architect), not applied by default.

## 7. Retrieval Query Catalog

Concrete query shapes `MemoryItem`/`StateSnapshot` retrieval needs to
support — this is what "retrieval rules" in §1.2 has to actually serve:

- **Temporal:** snapshots in a date range matching a `mood` value.
- **Semantic:** nearest-neighbor on `state_embedding` / `MemoryItem.embedding_ref` against a current `intention`.
- **Protocol-scoped:** memory items where `topics` contains a given `body_id`, within a validity window.
- **Agent-authored:** memory items filtered by an agent-attribution field (add `authored_by_agent_id` to `MemoryItem` if this query pattern is needed in v1 — not in the current table, flagged here rather than added silently).

---

## 8. Reverse Causal Engine

When an outcome is achieved, reconstruct *why* — turning the founder's
own history into a durable, reusable artifact instead of a one-off
insight that evaporates. This is the mechanism that makes the estate
self-documenting: every good outcome becomes evidence, not just a memory.

```ts
interface CausalRecipe {
  recipe_id: string;
  outcome_summary: string;
  trace_window: { from: string; to: string };   // typically last 72h, configurable

  state_snapshot_refs: string[];                 // StateSnapshot ids in the traced window
  protocol_refs: string[];                       // IPBodyOfWork body_ids implicated, if any
  agent_decision_refs: string[];                 // WorkflowRun / ApprovalRequest ids that mattered

  causal_chain: { step: string; evidence_ref: string; confidence: number }[];
  evidence_class: EvidenceClass;                 // almost always starts WORKING-SYNTHESIS — it's a reconstruction, not a source fact

  // inherited, not chosen freely: if any protocol_refs point at a [PROPRIETARY] body,
  // this recipe cannot be public regardless of how the outcome itself would otherwise be classified
  ip_disclosure_level: IPDisclosureLevel;

  video_script_id?: string;                      // -> VideoScript, draft only until approved
  licensing_approval_request_id?: string;         // -> ApprovalRequest — required, not optional, before any external use
}
```

**Pipeline (steps 1–5 are internal, Class 0–1, no approval needed —
they only read history and write a draft record):**

1. Trace `StateSnapshot` history over `trace_window`.
2. Identify which `IPBodyOfWork` protocols (if any) appear in that window via `MemoryItem.topics`.
3. Identify the `WorkflowRun` / `ApprovalRequest` records that were causally load-bearing (not every action in the window — the ones the outcome actually depended on).
4. Reconstruct `causal_chain` with a confidence score per step. Estate rule applies here directly: this is a reconstruction, so `evidence_class` starts at `WORKING-SYNTHESIS`, not `SOURCE-DOCUMENTED`, until independently checked.
5. Package as a `CausalRecipe` row.

**Step 6 (video) and step 7 (licensing) are where the automation stops:**

6. A `VideoScript` may be *drafted* from the recipe (`source_type: "protocol"` if `protocol_refs` is non-empty), but rendering still goes through `canRenderVideoScript()` in §4 — unchanged.
7. "Flag for licensing" = create an `ApprovalRequest` (risk tier scales with whether `protocol_refs` touches `[PROPRIETARY]` content and whether the traced `StateSnapshot`s contain health/physiology data). Nothing leaves draft status without a human decision on that request. There is no path from "outcome achieved" to "published" that skips a person.

Result: a personal OS that surfaces candidate IP for a human to evaluate — not one that ships it unattended.

---

## Build order this schema implies

1. ~~`StateSnapshot` + `MemoryItem` + `AgentProfile` tables (Section 1)~~ — **done**, `supabase-core-schema.sql`.
2. ~~`ip_layer_manifest.json` loader + the fail-closed check in §4~~ — **done and traced against 9 test cases**, `ip-layer.js` + `ip_layer_manifest.json` + `.gitignore`'d local override.
3. `IPBodyOfWork` registry, populated from the estate zip already on disk (§2.2 table) — data entry, not architecture. **Next.**
4. `AgentProfile` seed rows (§6 above) + read/write scope enforcement.
5. Integration adapters, in the order vetted earlier: Supabase (already live) → Ruflo/LangGraph for orchestration → HeyGen for video. GenSpark stays a manual fallback until a real programmatic API is confirmed — do not build an automated adapter against it on spec.
6. Slack/Discord/Email/GitHub touchpoints (notification and reporting only) are candidate future adapters, not part of this build — none of them should get write access to the estate content or auto-commit anything without an explicit approval step, per the autonomy classes in §42 of the brain doc.

---

## 9. Licensable Offering Types

A taxonomy for what can actually be sold — distinct from whether the
cross-tenant learning loop (below) exists yet.

```ts
type OfferingType =
  | "core-license"        // delia-os-core/, IP layer empty — buildable today
  | "protocol-license"     // a single CausalRecipe or IPBodyOfWork, individually licensed
  | "synthesis-ip"         // a pattern discovered across multiple tenants — BLOCKED, see below
  | "agency"               // agents pre-trained to implement a licensed protocol
  | "video-subscription"   // recurring VideoScript generation against a licensed offering
  | "predictive-signal";   // state-anticipation output — BLOCKED, see below

interface Offering {
  offering_id: string;
  type: OfferingType;
  source_ref: string;               // -> IPBodyOfWork | CausalRecipe | AgentProfile
  status: "buildable" | "blocked-pending-consent-terms" | "blocked-pending-ip-ownership-review";
}
```

`core-license`, `protocol-license`, `agency`, and `video-subscription`
are buildable against records that already exist in this schema —
they license one tenant's own `IPBodyOfWork`/`CausalRecipe` content,
no cross-tenant data involved.

`synthesis-ip` and `predictive-signal` both require the cross-tenant
aggregation layer described in the exchange above this section, which
is intentionally **not** designed yet: it depends on (a) explicit
data-sharing consent terms for licensees whose usage data would train
it, and (b) resolving whether an autonomously-discovered pattern with
no human originator is ownable IP at all in the relevant jurisdictions.
Marking these `status: "blocked-pending-*"` rather than building the
pipeline and adding the caveat later — building it first and
retrofitting consent tends to produce a pipeline shaped wrong for
whatever terms eventually get decided.
