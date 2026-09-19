# Hotel NEXUS — AI Integration Library

Reconciled against what's already been vetted and built this session.
Three corrections from the first draft, in order of how much they
matter:

1. **Consent/confidentiality gap, not a schema issue.** Eleven Labs
   (voice clone described as "trained on hypnotherapy sessions"),
   Otter.ai, and Rev.com ("archive of old coaching calls") all involve
   sending client-session audio to third-party SaaS APIs. If those
   sessions include client voices or identifiable client content, this
   needs client consent verified *before* any of it touches an
   external vendor — independent of everything else in this document.
   Not blocking the entries below, but they're marked, and none of
   this should get wired up until that's confirmed.
2. **Ruflo was missing.** It's the already-vetted, already-verified
   orchestration pick (build order item 5: MIT, 31k+ stars, built
   specifically for Claude Code) — LangChain/n8n below are
   complementary to it, not replacements for it.
3. **External writes need the same gate as Slack/HeyGen.** Asana,
   Linear, Buffer, and Brand24 all push content somewhere outside the
   system. If a task title, a scheduled post, or a listening query
   could contain `[PROPRIETARY]`-sourced content, it goes through
   `publish-external` like everything else — "it's just a task tracker"
   isn't an exemption.

---

## 1. LLM & Reasoning

### Anthropic Claude API (primary)
- **Use:** agent reasoning, decision generation, protocol synthesis
- **Scope:** all 8 estate agents + core agents
- **Note:** already the de facto reasoning layer for this whole build (this document itself was produced via Claude Code) — not a new integration decision, a confirmation of the existing one

### OpenAI GPT (fallback only)
- **Use:** fallback reasoning when Claude is unavailable, non-proprietary work only
- **Constraint, made explicit:** this is a second data processor. Never call it with anything where `ip_disclosure_level != "public"` — same gate, same rule, no proprietary content leaves for a fallback call

---

## 2. Voice & Speech — consent flag applies to this entire section

### Eleven Labs
- **Use:** narration for HeyGen videos, breathwork audio
- **Before wiring up:** confirm the voice clone's training material is Delia's own voice only, not client-session audio. A clone trained on session recordings that include client speech raises both consent and clone-fidelity issues
- **Disclosure note:** synthetic voice used in any licensee-facing or public content should be disclosed as AI-generated where required by the relevant jurisdiction — worth checking now, not after distribution starts

### Otter.ai / Rev.com (transcription)
- **Use:** session recording → state snapshot / archive
- **Scope, as originally scoped:** "hypnotherapy, coaching calls" — this is the consent flag from the top of this document. Client-session audio to a third-party transcription vendor needs verified consent first.

### Google Speech-to-Text
- **Use:** real-time voice commands ("log state", "suggest protocol")
- **Scope:** mobile/wearable input, no consent concern beyond the founder's own voice

---

## 3. Video & Visual

### RunwayML
- **Use:** post-processing HeyGen output (transitions, B-roll)
- **Note:** operates on already-approved `AssetRecord` video, doesn't need its own `ip_disclosure_level` check — it's downstream of one that already happened

### Synthesia (alternative avatar provider)
- **Use:** multilingual narration, licensee-facing content
- **Correction from original:** "sanitized `[PROPRIETARY]`" → built from `ip_disclosure_level: "licensed-partner"` source only, same rule as HeyGen's `licensee_video` tier (`adapters/heygen.md` §4) — one enum, not a separate sanitize step

### Jasper Vision (image generation)
- **Use:** GenSpark canvas backgrounds, state visualization
- **Verified real** — part of Jasper's 2026 suite, image API confirmed at jasper.ai/api. Gated behind a Business-plan + API subscription, not free-tier — factor into cost before committing

---

## 4. Biometric & Health Data

### Oura Ring API
- **Use:** HRV, sleep, heart rate → `StateSnapshot.physiology`
- **Real, well-documented.** Direct match for brain doc's Health Interop Layer intent.

### Apple HealthKit (iOS)
- **Use:** steps, workouts → state context
- **Scope:** mobile app only, standard integration

### Cronometer API
- **Use:** peptide/supplement logging → `PeptideProtocol` entries
- **Caveat, correctly hedged in the original:** Cronometer's API access is historically partner-gated, not open self-serve — confirm availability before committing to this over manual entry

---

## 5. Knowledge & Memory

### Ruflo — **added, was missing from the original draft**
- **Use:** the orchestration layer itself (build order item 5), swarm coordination, plugin/skill injection across the 8-agent roster
- MIT, github.com/ruvnet/ruflo, purpose-built for Claude Code — already vetted earlier this session, not a new pick

### Mem0
- Already vetted (Apache-2.0) as the optional upgrade path for vector memory beyond pgvector — `memory_item.embedding_ref` exists for exactly this

### LlamaIndex
- **Use:** RAG queries against the 9 bodies of work ("what does SUBTRACTION say about X")
- Complementary to Ruflo/LangGraph, not competing — reasonable addition for the retrieval-specific use case

### Pinecone
- **Deferred, correctly** — `supabase-core-schema.sql` already runs pgvector natively. Revisit only if scale genuinely outgrows it (thousands of tenants, not one founder deployment)

---

## 6. Automation & Orchestration

### n8n
- **License correction:** n8n is under the **Sustainable Use License** (fair-code, source-available), not MIT/permissive open source. That matters specifically because this is meant to become a licensable core — check n8n's terms before embedding it inside something resold, rather than assuming open-source-equivalent freedom
- **Use, if terms check out:** conditional trigger chains ("energy < 3 → auto-post GenSpark canvas")

### LangChain
- **Use:** agent call chaining
- Same org as LangGraph (already picked for durable state/approvals) — complementary, not redundant with the Ruflo/LangGraph decision already made

---

## 7. Social & Distribution

### Brand24, Buffer
- Real products, reasonable for licensee-validation signal and public-video distribution
- **Both route through `publish-external`** before anything goes out — a scheduled social post built from licensee/founder content is still an external write

---

## 8. Project & Task Management

### Asana, Linear
- **Use:** agent decisions → execution tickets
- **Same gate applies:** a ticket titled "IP Steward: file TouchSphere patent by [date]" in a workspace with contractors is a `[PROPRIETARY]` leak through a side door. Route ticket creation through `publish-external` when the decision references estate content, same as a Slack post would.

---

## 9. Analytics & Insights

### Posthog (self-hosted) — **recommended default over Mixpanel**
- **Why the change from the original's "either/or" framing:** Posthog self-hosted keeps interaction data out of a third-party processor entirely, which matters given the consent-terms question is already open (SCHEMA.md §9, `adapters/genspark.md` §4) for anything beyond internal/founder-only usage. Mixpanel is a second unresolved-consent data processor before that question is even settled.
- Use Mixpanel only if/when the consent terms are actually decided and a specific business reason favors it over self-hosting.

---

## Initialization order

Reconciled with the build order already in `SCHEMA.md` (items 1–4 done,
item 5 in progress) rather than restarting numbering from zero:

1. ~~Supabase + pgvector~~ — done (`supabase-core-schema.sql`)
2. ~~Approval/audit infrastructure~~ — done (`approval_request`, `audit_log`, `publish-external`)
3. **Claude API** — already the reasoning layer; formalize as an explicit adapter if agent calls move out of manual/interactive use
4. **Ruflo** — orchestration, next per the existing build order
5. **Slack** — spec'd and client-coded; needs real webhook secrets + Edge Function deployment to go live
6. **HeyGen** — spec'd, closest to buildable after Slack
7. **Eleven Labs** — only after the consent question on training/session data is resolved
8. **Oura/HealthKit** — biometric ingestion, no blockers
9. **Mem0, LlamaIndex** — memory/retrieval upgrades, optional, not blocking anything else
10. **GenSpark, RunwayML, Synthesia, Jasper Vision, n8n, Asana/Linear, Buffer/Brand24, Posthog** — genuinely later-stage; several (GenSpark) are blocked on external factors (no confirmed API), others (n8n) need a license check first, none are load-bearing for the core loop
