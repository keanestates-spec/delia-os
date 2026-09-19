# AGENT_PERMISSIONS.md — Hotel NEXUS Agent Read/Write/Proprietary Matrix

Implements build-order item 4 from [SCHEMA.md](SCHEMA.md) ("Agent
read/write scopes enforced against Section 3's table"). This is the
enforceable version of the founder estate index's §9 agent roster —
every row here corresponds to an `AgentProfile` record in
`agent_profile` (core roster) or the estate seed
(`supabase-estate-agents-seed.sql`).

**System-wide invariant, applies to every agent below without
exception:** no agent has delete permission on any table, full stop.
Mutation happens only via `superseded_by` (memory_item), `active=false`
(agent_profile, opportunity_record, etc.), or a new append-only row.
This is not re-stated per role.

**Schema addition this document required:** `AgentProfile` gains a
`proprietary_read_access` field — read/write *scope* (which tables) and
proprietary *visibility* (whether `[PROPRIETARY]`-tagged content within
those tables is visible) are different axes, and the existing schema
only modeled the first one.

```ts
type ProprietaryReadAccess = "full" | "denied" | "metadata-only";
// added to AgentProfile (SCHEMA.md §1.3)
```

**Vocabulary addition:** "decisions," "flags," and "evidence_grades" in
the roles below are not new tables — they're `memory_item` rows with a
controlled `memory_type` value. One table, tagged consistently, per
§41.5's own instruction not to let record types sprawl:

| memory_type | written by | typical evidence_class |
|---|---|---|
| `decision` | Cartographer, Product Architect | WORKING-SYNTHESIS |
| `contradiction_flag` | Examiner | WORKING-SYNTHESIS |
| `evidence_grade` | Researcher | EXTERNAL-EVIDENCE |
| `provenance_record` | Archivist | SOURCE-DOCUMENTED |

**`contradiction_flag` is now load-bearing, not just descriptive.** Per
the estate index's Examiner description ("protect Delia from being
flattered into false coherence"), `publish-external` enforces this as a
real veto (added after the fact, see the Edge Function's
`verifyNoUnresolvedVeto`): any `content_ref` with an unresolved
`contradiction_flag` (`superseded_by is null`) is blocked from sending,
approval or no approval. This requires the flag's `topics` array to
contain the exact `content_ref` it's about — Examiner must tag it that
way for the veto to actually find it. Resolving a flag means writing a new `memory_item` row, then updating
the *original* flag's `superseded_by` field to point at it —
`superseded_by` is the one field ever touched after a row is created;
`summary`, `evidence_class`, and every other content field on the
original flag stay exactly as Examiner wrote them.
| `ip_status_record` | IP Steward | FOUNDER-STATED (until independently verified) |

**`audit_log` addition:** every role below writes to `audit_log`. This
is a genuinely new core table (not estate-specific — core agents log
too), separate from `memory_item` because it's a mechanical action
trace (who did what, when, to what record), not a knowledge item:

```ts
interface AgentActionLog {
  log_id: string;
  agent_id: string;
  action_type: string;          // "read" | "write" | "flag" | "recommend" | ...
  target_table: string;
  target_id: string;
  proprietary_content_touched: boolean;
  timestamp: string;
}
```

---

## Agent Roster

### Archivist
- **Read:** `state_snapshot`, `memory_item`, `ip_body_of_work`, `agent_profile` (all layers)
- **Write:** `agent_profile` (role/status fields only), `memory_item` (`memory_type: provenance_record`), `audit_log`
- **Proprietary read access:** `full` — provenance tracking requires seeing everything to attest to it
- **Purpose:** provenance, versioning, canonical-source protection, chronology. Per estate rule 1, the Archivist is the role most directly bound by "never silently edit an original source file" — it *attests* to originals, never modifies them.

### Cartographer
- **Read:** `state_snapshot`, `memory_item`, `ip_body_of_work`, `agent_profile`
- **Write:** `memory_item` (`memory_type: decision` — cross-reference notes), `audit_log`
- **Proprietary read access:** `full` — cross-referencing requires seeing content across bodies of work
- **Purpose:** semantic cross-reference, concept graphing, relationship detection. Output distinguishes strong match / weak analogy / speculation per estate rule 9 ("new ideas should first be checked against the estate").

### Examiner / Skeptic
- **Read:** `state_snapshot`, `memory_item`, `ip_body_of_work`, `agent_profile`, `workflow_run`
- **Write:** `memory_item` (`memory_type: contradiction_flag`), `audit_log`
- **Proprietary read access:** `full` — "to find contradictions within it," matching your draft exactly. Contradiction search is meaningless with partial visibility.
- **Purpose:** disconfirmation, assumption testing, falsifiability. Protects against the estate's own named failure mode: "protect Delia from being flattered into false coherence."

### Researcher
- **Read:** `state_snapshot`, `memory_item` (external-sourced only)
- **Write:** `memory_item` (`memory_type: evidence_grade`, `evidence_class: EXTERNAL-EVIDENCE` only), `audit_log`
- **Proprietary read access:** `denied` — matches your draft exactly, and matches the existing seed's `ip_layer_dependency: reference-only`. A Researcher's job is independent verification; giving it estate visibility would let it "verify" claims by reading the claims themselves, which is circular.
- **Purpose:** literature review, evidence grading, current external research.

### IP Steward
- **Read:** `ip_body_of_work` (full, including `patent_status`, `source_files`), `memory_item` (`memory_type: ip_status_record`), `audit_log` history for anything IP-tagged
- **Write:** `ip_body_of_work` (`patent_status`, `access_tier` fields only — never `source_files` or `licensable`, the latter is a hardcoded-false DB constraint per `supabase-ip-registry-schema.sql`), `memory_item` (`memory_type: ip_status_record`), `audit_log`
- **Proprietary read access:** `full`
- **Purpose:** invention registry, confidentiality, prior-art workflow, filing-status verification. Estate rule, verbatim: "never call an invention patented/patent-pending without evidence." This is the one role with write access to `patent_status` — every other agent, including Archivist and Cartographer, is read-only on that field.

### Editor
- **Read:** `memory_item`, `ip_body_of_work` (text bodies, when authorized)
- **Write:** `memory_item` (new versioned entries only — never edits `ip_body_of_work.source_files` in place, per estate rule 1)
- **Proprietary read access:** `full`, write access gated by an explicit authorization flag (not implicit from role alone) — estate rule: "remove duplicated AI residue **when authorised**"
- **Purpose:** preserve authorial voice, structure manuscripts, maintain source/derivative separation.

### Product Architect
- **Read:** `state_snapshot`, `memory_item`, `opportunity_record`, `ip_body_of_work`
- **Write:** `opportunity_record`, `workflow_run` (framing decisions), `memory_item` (`memory_type: decision`), `audit_log`
- **Proprietary read access:** `full` — deciding whether a work becomes book/protocol/software/license requires seeing the work
- **Purpose:** decide expression format per work. Estate rule, verbatim: "must not turn every concept into an app."

### Finisher
- **Read:** `workflow_run`, `opportunity_record`
- **Write:** `workflow_run` (scope-freeze / status only), `audit_log`
- **Proprietary read access:** `metadata-only` — needs to know *that* a body of work is involved to scope a shipping checklist, not its content
- **Purpose:** scope freeze, definition of done, shipping checklist. Must be able to say "future version, not entering this build" per estate rule — the one role whose entire function is saying no to scope.

---

## Reconciliation with existing files

- `supabase-core-schema.sql` needs `proprietary_read_access` added to `agent_profile`, plus the new `audit_log` table (core, not estate — applies to every agent).
- `supabase-estate-agents-seed.sql` needs Archivist, IP Steward, and Editor added — it only seeded 5 of the 8 estate roles.
- No changes needed to `memory_item`'s structure — the `memory_type` vocabulary above is a convention, not a schema change.
