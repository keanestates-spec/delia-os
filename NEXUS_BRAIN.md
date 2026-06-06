<!--
NEXUS_BRAIN.md
This is the canonical source-of-truth brain for the NEXUS Hotel / Hotel Nexus.
It is NOT a plan for an external dev team. It is the founder's own master design,
authored by Delia Keane, to be implemented by Delia + Claude together.

HOW TO USE THIS FILE (instruction for Claude Code / the hotel):
- Treat this document as the authoritative specification of what the hotel is,
  what it must preserve, and what it must become.
- When building any feature, check it against this brain first.
- Implement in small, verified steps. Build forward on the existing live v5 build.
  Do not start a parallel codebase.
- Preserve the founder thesis: state-first, memory-grounded, approval-aware,
  low-friction (ADHD-first), economically generative, future-extendable.
- The full vision is held as direction. The first dependable loop comes first:
  state snapshot -> Morning Board -> one approval -> evidence trail ->
  one memory write-back -> stubbed Night Shift.

Source: Hotel Nexus GenSpark Final Handover Pack 1.0 + full master document (113 sections).
Placed: keanestates-spec/delia-os
-->

# Hotel Nexus / Nexus Hotel / Hotel Nexus Estate

## Founder-to-Technical-Team Handover Document

**Date:** 2026-06-04

---

## Final Handover Pack 1.0

### Purpose of this pack

This section is the **transfer-ready wrapper** for the much larger
living Hotel Nexus master document. It is intended for:

- a new engineer or small builder team,

- a technical operator joining the project mid-stream,

- another model such as Claude that needs fast orientation,

- or the founder returning later and needing the shortest correct
re-entry path.

The goal here is **not to replace the master document**. The goal is
to make the master document usable by telling a new reader:

- what Hotel Nexus actually is,

- what is stable enough to assume for v1,

- what to read first,

- what to build first,

- what is explicitly out of scope,

- and what must not be accidentally optimized away.

### Hotel Nexus in one page

Hotel Nexus is a **state-first human operating system** that is
intended to evolve into a **human estate operating system**.

The simplest correct description is:

> Hotel Nexus is a closed-loop system that helps a human think, decide,
remember, act, create, and eventually coordinate environments and
physical embodiments — with state awareness, memory continuity,
approvals, and automation designed to reduce activation energy rather
than add more software overhead.

For v1, the project should be interpreted much more concretely:

- **not** as a humanoid robotics project,

- **not** as a broad consumer platform,

- **not** as a generic chatbot wrapper,

- **not** as a thousand-agent science experiment,

- but as a **founder-facing operating layer** that can:

- accept low-friction intent,

- maintain grounded memory,

- run durable workflows,

- generate a useful Morning Board,

- queue safe approvals,

- produce at least one meaningful overnight output,

- and visibly degrade rather than fail silently.

### The minimum correct mental model

A new builder should hold the following mental model:

1. **State comes before tasks.** The system is supposed to
understand readiness, friction, overload, and context before it decides
how aggressively to orchestrate work.

2. **Memory comes before magic.** If memory, provenance, and
evidence trails are weak, the rest of the system becomes untrustworthy.

3. **Approvals come before autonomy.** Hotel Nexus is designed to
act with increasing leverage, but high-consequence actions must remain
permissioned.

4. **Founder trust is the real product.** The Morning Board,
approval queue, evidence path, and degraded-mode honesty matter more
than flashy automation.

5. **Overnight leverage is the first wedge.** Night Shift,
opportunity discovery, asset generation, and
wake-up-to-prepared-decisions are central early loops.

6. **Embodiment is a future envelope, not the first implementation
target.** The architecture should remain extensible toward ambient and
robotic systems, but v1 should not get dragged into premature hardware
complexity.

### What success looks like for v1

A practical v1 is real when the founder can:

- speak or enter intent naturally,

- trust that the system remembers the right context with provenance,

- wake up to a ranked Morning Board that is actually useful,

- review a clear approval queue with evidence and risk framing,

- see workflow status and degraded-mode truth,

- and receive at least one meaningful overnight recommendation, memo,
asset, or build packet on a regular cycle.

If those behaviors are not working, the project is still infrastructure,
not yet product.

### Read this first

A new builder should read in this order:

1. **This Final Handover Pack 1.0** — orientation, scope,
assumptions, build order.

2. **Section 1: Executive Summary** — core thesis and platform
intent.

3. **Sections 8-14** — design principles, ADHD-first rules,
architecture overview, layered stack, agent taxonomy, shared capability
spine.

4. **Sections 16-20** — memory, ingestion, sensing/state, health
interoperability, execution architecture.

5. **Sections 23, 29-31, 36-43** — Night Shift, governance,
permissions, observability, positioning, state engine, agent
coordination, schemas, approvals, product surfaces.

6. **Appendix M + U** — repository topology and repo-by-repo plan.

7. **Appendix V + W + X + Y + Z** — agent contracts, canonical
schemas, endpoints, event/command/approval contracts, workflow graphs.

8. **Appendix AH-AK + AL** — stack defaults, CI/CD and release
governance, deployment/runtime ownership, incident layer, milestone
roadmap.

9. **Appendix BN + BO + BP + BQ** — DDL, seed data, dashboards,
alerts, real migration bundle, concrete dashboard specs.

10. **Appendix BJ-BM** — ready-to-copy contracts, manifests,
SLO/SLI starter packs, founder-prod smoke tests.

If someone only has one sitting to understand the project, the
highest-value reading set is:

- Section 1,

- Section 10 / 11 / 12,

- Section 29 / 30 / 31,

- Section 39 / 40 / 41 / 42 / 43,

- Appendix V,

- Appendix W / X / Y / Z,

- Appendix AL,

- Appendix BN / BO / BP / BQ,

- Appendix BL / BM.

### What to build first

The first implementation priority is **not** breadth. It is a
dependable founder loop.

#### Build-first vertical slice

Build this exact slice first:

1. **Identity and estate spine**

- founder identity,

- estate record,

- membership and permission profile,

- environment separation,

- baseline auth/session behavior.

2. **Memory spine v1**

- document/source ingestion,

- provenance-aware memory records,

- retrieval for founder board and approvals,

- evidence references that can actually resolve.

3. **Workflow spine v1**

- durable workflow runtime,

- observable runs,

- event emission,

- explicit pause/resume on approvals,

- retry and degraded-mode behavior.

4. **Approval system v1**

- approval request object,

- risk tier and autonomy class handling,

- approve / reject / snooze path,

- audit trail,

- evidence and spend/risk visibility.

5. **Morning Board v1**

- state snapshot input,

- recommended moves,

- approval queue summary,

- freshness/completeness/degraded indicators,

- founder-web surface.

6. **Night Shift v1**

- one scheduled overnight workflow,

- one meaningful output class,

- morning delivery into board + memory + workflow trace.

That is the first credible product loop.

#### Recommended first meaningful output classes

Choose one or two only for the earliest loop:

- content opportunity brief,

- capital/watchlist memo,

- synthetic media build packet,

- or app-foundry preview packet.

Do **not** try to deliver all four at once.

### Current assumed v1 decisions

Unless deliberately changed, a new builder should assume the following
decisions are currently in force for v1:

#### Product assumptions

- Hotel Nexus is a **founder-first** system before it becomes a
broader platform.

- The primary surface is the **Morning Command Board** plus
approval flows.

- Voice-first matters, but **founder-web and mobile approval
flows** are sufficient for the first serious version.

- The product should remain **ADHD-friendly**: low friction, low
clutter, ranked choices, clear defer/snooze paths, visible partial
states.

- The system should prefer a **few strong agents** over many weak
ones.

#### Architecture assumptions

- Start from a **well-governed monorepo** with strong package
boundaries and shared contracts.

- Treat **contracts as first-class artifacts**: schemas, events,
commands, approval payloads, examples, and versioning rules live in
repo.

- Use a **durable workflow layer** for Night Shift, approvals, and
other resumable founder-critical flows.

- Use an **operational relational core** with PostgreSQL-style
schema discipline, JSONB for extensibility, and explicit migrations.

- Maintain an **evented architecture** for async side effects,
workflow state transitions, and observability hooks.

- Keep provider integrations behind **adapter contracts** so
external tools can change without contaminating the core model.

#### Governance assumptions

- No public publishing without approval.

- No capital deployment without approval.

- No irreversible spend above threshold without approval.

- No high-confidence claim without evidence trail.

- No automation without rollback or containment logic.

- Every meaningful workflow must produce a trace and founder-visible
status.

#### Initial agent assumptions

The first serious agent pack should center on:

- **General Manager**,

- **Archivist**,

- **Approval Governor**,

- **Revenue Director**,

- **Studio Head**,

- **Portfolio Voice**.

Anything beyond that is secondary until the founder-visible loop is
dependable.

#### Environment assumptions

Assume these environment layers unless changed:

- local-dev,

- shared-dev,

- staging,

- founder-prod,

- pilot-prod later.

Founder-prod is special: it needs smoke tests, release checklists,
dashboard coverage, alert routing, and degraded-mode honesty.

### Explicitly out of scope for v1

The following are important strategically but should be treated as
**out of scope for core v1 delivery** unless they directly unblock
the founder loop:

- humanoid execution and physical robotics deployment,

- advanced ambient sensing hardware rollouts,

- broad white-label multi-tenant commercialization,

- autonomous capital execution,

- autonomous public content publishing,

- full-room actuation across home/estate systems,

- complex energy/bitcoin infrastructure,

- large-scale third-party marketplace packaging,

- overbuilt multi-agent societies before core trust loops work,

- polishing investor-style surfaces before the founder product is
reliable.

These are future envelopes, not current gates.

### The most likely failure modes

A new builder should actively guard against these:

- building too much before the first trustworthy daily loop exists,

- producing flashy outputs without evidence grounding,

- treating memory as a vector-search accessory instead of a system of
record with provenance,

- hiding workflow state so failures become silent,

- letting approvals become unclear, slow, or bypassed,

- shipping too many agents and too few dependable services,

- confusing prototype flexibility with permission to avoid contracts,

- over-optimizing for future robotics at the expense of present
software usefulness.

### The first 30 working days

A new team should spend the first month roughly like this:

#### Days 1-5

- read the sections and appendices listed above,

- confirm the v1 assumptions explicitly,

- choose the reference stack from the existing execution packs,

- lock repo shape, contract directory, migration naming, and
environment model.

#### Days 6-10

- stand up identity, memory, workflow, and approval service skeletons,

- wire base schemas and example payloads into CI validation,

- establish local-dev and shared-dev bootstrap paths,

- create the first founder-visible board shell.

#### Days 11-20

- implement state snapshot ingestion,

- implement Morning Board generation flow,

- implement approval queue and evidence drawer path,

- implement workflow traces and dashboard visibility,

- seed demo data so the full path is testable end-to-end.

#### Days 21-30

- run one Night Shift workflow end-to-end,

- deliver one meaningful overnight artifact or memo,

- validate founder-prod-style smoke checks in lower environments,

- tune degraded states, retries, and evidence visibility,

- prepare the first founder demo that shows a real daily loop.

### If another model is taking over

If this document is handed to another model such as Claude, the correct
instruction is:

1. Treat the large master document as the source of truth.

2. Use this Final Handover Pack 1.0 as the navigation and
prioritization layer.

3. Preserve the founder thesis: **state-first, memory-grounded,
approval-aware, low-friction, economically generative,
future-extendable**.

4. Do not expand the system sideways until the founder loop is
dependable.

5. When making technical choices, prefer the option that improves:

- trust,

- clarity,

- observability,

- evidence grounding,

- rollback safety,

- and founder-visible usefulness.

6. When uncertain, optimize for the question already established in the
master document:

> Does this make the estate more capable of sensing, thinking, acting,
creating, and evolving on behalf of the human — while remaining
permissioned, evidence-aware, and friction-reducing?

### Final handoff summary

If a new builder remembers only ten things, they should remember these:

1. Hotel Nexus is a **state-first founder operating layer**, not
just an assistant.

2. The first real product is the **Morning Board + approvals +
memory + workflow trace** loop.

3. Memory must be grounded, inspectable, and provenance-aware.

4. Durable workflows and explicit approval pauses are core
infrastructure, not optional nice-to-haves.

5. Founder trust matters more than surface cleverness.

6. One dependable overnight output beats many speculative subsystems.

7. v1 is founder-first, not broad consumer or multi-tenant.

8. Robotics, ambient estates, and deep embodiment remain strategic
future envelopes.

9. The architecture should stay extensible, but implementation should
stay brutally prioritized.

10. The master document is the long-form brain; this section is the
quick-start map.

---

## Table of Contents

0. [Final Handover Pack 1.0](#final-handover-pack-10)

1. [Executive Summary](#1-executive-summary)

2. [Project Identity and Naming](#2-project-identity-and-naming)

3. [Founder Intent](#3-founder-intent)

4. [Core Thesis](#4-core-thesis)

5. [Vision Statement](#5-vision-statement)

6. [What This Project Is](#6-what-this-project-is)

7. [What This Project Is Not](#7-what-this-project-is-not)

8. [Design Principles](#8-design-principles)

9. [ADHD-First Product Principles](#9-adhd-first-product-principles)

10. [Architecture Overview](#10-architecture-overview)

11. [Primary System Framings](#11-primary-system-framings)

- [11.1 The 5 Super-Systems](#111-the-5-super-systems)

- [11.2 The 15-Layer / 19-Layer
Thinking](#112-the-15-layer--19-layer-thinking)

- [11.3 The Three-Body System](#113-the-three-body-system)

- [11.4 The Operating Loop](#114-the-operating-loop)

12. [Layered Stack](#12-layered-stack)

13. [Agent Taxonomy](#13-agent-taxonomy)

14. [Shared Agent Capability
Spine](#14-shared-agent-capability-spine)

15. [GitHub/Open-Source Upskilling
Strategy](#15-githubopen-source-upskilling-strategy)

16. [Knowledge, Memory, and Personal State
Model](#16-knowledge-memory-and-personal-state-model)

17. [Document and Data Ingestion
Architecture](#17-document-and-data-ingestion-architecture)

18. [Ambient Sensing and State
Intelligence](#18-ambient-sensing-and-state-intelligence)

19. [Health, Biofeedback, and
Interoperability](#19-health-biofeedback-and-interoperability)

20. [Execution and Automation
Architecture](#20-execution-and-automation-architecture)

21. [Content Opportunity Engine](#21-content-opportunity-engine)

22. [Capital Analysis Engine](#22-capital-analysis-engine)

23. [The Overnight Foundry / Night
Shift](#23-the-overnight-foundry--night-shift)

24. [Autonomous App Foundry](#24-autonomous-app-foundry)

25. [Synthetic Media Foundry /
Workhorse](#25-synthetic-media-foundry--workhorse)

26. [Embodiment Roadmap](#26-embodiment-roadmap)

27. [World Model, Shadow Layer, and
Simulation](#27-world-model-shadow-layer-and-simulation)

28. [Energy Arbitrage and Optional Bitcoin
Layer](#28-energy-arbitrage-and-optional-bitcoin-layer)

29. [Governance, Approvals, and Control
Rules](#29-governance-approvals-and-control-rules)

30. [Permissions, Identity, and Security
Boundaries](#30-permissions-identity-and-security-boundaries)

31. [Observability, Evaluation, and Continuous
Improvement](#31-observability-evaluation-and-continuous-improvement)

32. [Monetization and
Productization](#32-monetization-and-productization)

33. [Implementation Priorities and
Phasing](#33-implementation-priorities-and-phasing)

34. [Open Questions](#34-open-questions)

35. [Known Risks, Ethics, Privacy, and Compliance
Considerations](#35-known-risks-ethics-privacy-and-compliance-considerations)

36. [Current Architectural Positioning
Summary](#36-current-architectural-positioning-summary)

37. [Strategic Differentiators and Category
Thesis](#37-strategic-differentiators-and-category-thesis)

38. [Founder Operating Modes and Estate
Modes](#38-founder-operating-modes-and-estate-modes)

39. [State Engine, Transition Engine, and Readiness
Doctrine](#39-state-engine-transition-engine-and-readiness-doctrine)

40. [Agent Communication Topology and Coordination
Model](#40-agent-communication-topology-and-coordination-model)

41. [Data Contracts, System Records, and Core
Schemas](#41-data-contracts-system-records-and-core-schemas)

42. [Approval Architecture and Autonomy
Classes](#42-approval-architecture-and-autonomy-classes)

43. [Product Surfaces and User Experience
Surfaces](#43-product-surfaces-and-user-experience-surfaces)

44. [12- to 24-Month Strategic Build
Narrative](#44-12--to-24-month-strategic-build-narrative)

45. [Appendix A: Named Platforms, Frameworks, and
Repositories](#45-appendix-a-named-platforms-frameworks-and-repositories)

46. [Appendix B: Source Links by
Function](#46-appendix-b-source-links-by-function)

47. [Appendix C: Draft Build Order
Summary](#47-appendix-c-draft-build-order-summary)

48. [Appendix D: Non-Negotiable Rules
Summary](#48-appendix-d-non-negotiable-rules-summary)

49. [Appendix E: Canonical System Records and Minimal
Schemas](#49-appendix-e-canonical-system-records-and-minimal-schemas)

50. [Appendix F: Event Taxonomy, Queues, and Workflow
Contracts](#50-appendix-f-event-taxonomy-queues-and-workflow-contracts)

51. [Appendix G: Agent Operational Specs and
Handoffs](#51-appendix-g-agent-operational-specs-and-handoffs)

52. [Appendix H: Approval Matrix, Risk Tiers, and Spend
Controls](#52-appendix-h-approval-matrix-risk-tiers-and-spend-controls)

53. [Appendix I: Night Shift Runbook and Morning Board
Contract](#53-appendix-i-night-shift-runbook-and-morning-board-contract)

54. [Appendix J: Integration Registry, Secrets, and Permission
Ownership](#54-appendix-j-integration-registry-secrets-and-permission-ownership)

55. [Appendix K: Environments, Release Rings, SLOs, and Observability
Targets](#55-appendix-k-environments-release-rings-slos-and-observability-targets)

56. [Appendix L: Immediate Engineering Backlog, Team Topology, and
Delivery
Cadence](#56-appendix-l-immediate-engineering-backlog-team-topology-and-delivery-cadence)

57. [Appendix M: Proposed Repository Topology and Service
Boundaries](#57-appendix-m-proposed-repository-topology-and-service-boundaries)

58. [Appendix N: Core API Surfaces and Interface
Contracts](#58-appendix-n-core-api-surfaces-and-interface-contracts)

59. [Appendix O: Data Platform, Retrieval, and Indexing
Architecture](#59-appendix-o-data-platform-retrieval-and-indexing-architecture)

60. [Appendix P: Founder Product Surface
Specification](#60-appendix-p-founder-product-surface-specification)

61. [Appendix Q: External Provider Adapter
Strategy](#61-appendix-q-external-provider-adapter-strategy)

62. [Appendix R: Delivery Pipeline, Testing Strategy, and Migration
Discipline](#62-appendix-r-delivery-pipeline-testing-strategy-and-migration-discipline)

63. [Appendix S: Ambient, Estate, and Robotics Interface
Envelope](#63-appendix-s-ambient-estate-and-robotics-interface-envelope)

64. [Appendix T: 90-Day Scoping Checklist and Acceptance
Criteria](#64-appendix-t-90-day-scoping-checklist-and-acceptance-criteria)

65. [Appendix U: Repo-by-Repo Architecture
Plan](#65-appendix-u-repo-by-repo-architecture-plan)

66. [Appendix V: Formal Agent Contract
Pack](#66-appendix-v-formal-agent-contract-pack)

67. [Appendix W: Systems Contract Pack — Canonical JSON
Schemas](#67-appendix-w-systems-contract-pack--canonical-json-schemas)

68. [Appendix X: Internal Endpoint Definitions and Service
Interfaces](#68-appendix-x-internal-endpoint-definitions-and-service-interfaces)

69. [Appendix Y: Event, Command, and Approval Payload
Contracts](#69-appendix-y-event-command-and-approval-payload-contracts)

70. [Appendix Z: Workflow Graph
Specifications](#70-appendix-z-workflow-graph-specifications)

71. [Appendix AA: Execution Pack v4 — Database Physical Design and
Index
Strategy](#71-appendix-aa-execution-pack-v4--database-physical-design-and-index-strategy)

72. [Appendix AB: Execution Pack v4 — Queue, Topic, and Streaming
Contracts](#72-appendix-ab-execution-pack-v4--queue-topic-and-streaming-contracts)

73. [Appendix AC: Execution Pack v4 — Retry, Idempotency, and
Dead-Letter
Policies](#73-appendix-ac-execution-pack-v4--retry-idempotency-and-dead-letter-policies)

74. [Appendix AD: Execution Pack v4 — Founder Cockpit Screen
Specification](#74-appendix-ad-execution-pack-v4--founder-cockpit-screen-specification)

75. [Appendix AE: Execution Pack v4 — Deployment, Environment, and
Runtime
Blueprint](#75-appendix-ae-execution-pack-v4--deployment-environment-and-runtime-blueprint)

76. [Appendix AF: Execution Pack v5 — Database Migration Planning and
Draft DDL
Direction](#76-appendix-af-execution-pack-v5--database-migration-planning-and-draft-ddl-direction)

77. [Appendix AG: Execution Pack v5 — Formal OpenAPI and JSON Schema
Style
Definitions](#77-appendix-ag-execution-pack-v5--formal-openapi-and-json-schema-style-definitions)

78. [Appendix AH: Execution Pack v6 — Concrete Stack Choices and
Reference
Defaults](#78-appendix-ah-execution-pack-v6--concrete-stack-choices-and-reference-defaults)

79. [Appendix AI: Execution Pack v6 — CI/CD, Contract Enforcement, and
Release
Governance](#79-appendix-ai-execution-pack-v6--cicd-contract-enforcement-and-release-governance)

80. [Appendix AJ: Execution Pack v6 — Deployment Matrix and Runtime
Ownership](#80-appendix-aj-execution-pack-v6--deployment-matrix-and-runtime-ownership)

81. [Appendix AK: Execution Pack v6 — Incident Response and Runbook
Layer](#81-appendix-ak-execution-pack-v6--incident-response-and-runbook-layer)

82. [Appendix AL: Execution Pack v6 — Milestone-Based Implementation
Roadmap](#82-appendix-al-execution-pack-v6--milestone-based-implementation-roadmap)

83. [Appendix AM: Execution Pack v7 — Practical Repo Tree
Pack](#83-appendix-am-execution-pack-v7--practical-repo-tree-pack)

84. [Appendix AN: Execution Pack v7 — Migration Stub Conventions and
File
Patterns](#84-appendix-an-execution-pack-v7--migration-stub-conventions-and-file-patterns)

85. [Appendix AO: Execution Pack v7 — Founder Cockpit UX Flows and
Spec
Layers](#85-appendix-ao-execution-pack-v7--founder-cockpit-ux-flows-and-spec-layers)

86. [Appendix AP: Execution Pack v8 — Migration Stub
Bundle](#86-appendix-ap-execution-pack-v8--migration-stub-bundle)

87. [Appendix AQ: Execution Pack v8 — CI Policy and Config
Examples](#87-appendix-aq-execution-pack-v8--ci-policy-and-config-examples)

88. [Appendix AR: Execution Pack v8 — Contract Registry
Pack](#88-appendix-ar-execution-pack-v8--contract-registry-pack)

89. [Appendix AS: Execution Pack v9 — Wireframe-Level Founder Cockpit
Screen
Maps](#89-appendix-as-execution-pack-v9--wireframe-level-founder-cockpit-screen-maps)

90. [Appendix AT: Execution Pack v9 — Founder Cockpit Component
Contracts](#90-appendix-at-execution-pack-v9--founder-cockpit-component-contracts)

91. [Appendix AU: Execution Pack v9 — Milestone-by-Milestone
Engineering Task
Breakdown](#91-appendix-au-execution-pack-v9--milestone-by-milestone-engineering-task-breakdown)

92. [Appendix AV: Execution Pack v10 — Real Example Payload
Bundles](#92-appendix-av-execution-pack-v10--real-example-payload-bundles)

93. [Appendix AW: Execution Pack v10 — TypeScript-Style Founder
Cockpit
Interfaces](#93-appendix-aw-execution-pack-v10--typescript-style-founder-cockpit-interfaces)

94. [Appendix AX: Execution Pack v10 — Practical Epic and Backlog
Templates](#94-appendix-ax-execution-pack-v10--practical-epic-and-backlog-templates)

95. [Appendix AY: Execution Pack v11 — Implementation Kickoff
Pack](#95-appendix-ay-execution-pack-v11--implementation-kickoff-pack)

96. [Appendix AZ: Execution Pack v11 — Service-by-Service Operational
Runbooks](#96-appendix-az-execution-pack-v11--service-by-service-operational-runbooks)

97. [Appendix BA: Execution Pack v12 — Service Ownership
Matrix](#97-appendix-ba-execution-pack-v12--service-ownership-matrix)

98. [Appendix BB: Execution Pack v12 — Environment Bootstrap
Checklists](#98-appendix-bb-execution-pack-v12--environment-bootstrap-checklists)

99. [Appendix BC: Execution Pack v12 — Detailed 30/60/90 Day Sprint
Packs](#99-appendix-bc-execution-pack-v12--detailed-306090-day-sprint-packs)

100. [Appendix BD: Execution Pack v13 — Actual Repo Bootstrap File
Examples](#100-appendix-bd-execution-pack-v13--actual-repo-bootstrap-file-examples)

101. [Appendix BE: Execution Pack v13 — Environment Config and Secret
Template
Guidance](#101-appendix-be-execution-pack-v13--environment-config-and-secret-template-guidance)

102. [Appendix BF: Execution Pack v13 — Sprint Board and Review
Ceremony
Templates](#102-appendix-bf-execution-pack-v13--sprint-board-and-review-ceremony-templates)

103. [Appendix BG: Execution Pack v14 — Finalized Contract
Artifacts](#103-appendix-bg-execution-pack-v14--finalized-contract-artifacts)

104. [Appendix BH: Execution Pack v14 — Per-Service Environment
Manifest
Examples](#104-appendix-bh-execution-pack-v14--per-service-environment-manifest-examples)

105. [Appendix BI: Execution Pack v14 — Release Checklist Packs by
Environment](#105-appendix-bi-execution-pack-v14--release-checklist-packs-by-environment)

106. [Appendix BJ: Execution Pack v15 — Ready-to-Copy Contract and
Example
Files](#106-appendix-bj-execution-pack-v15--ready-to-copy-contract-and-example-files)

107. [Appendix BK: Execution Pack v15 — Expanded Service Manifest
Bundles for Core
Services](#107-appendix-bk-execution-pack-v15--expanded-service-manifest-bundles-for-core-services)

108. [Appendix BL: Execution Pack v15 — Service-Level SLO/SLI Starter
Packs](#108-appendix-bl-execution-pack-v15--service-level-slosli-starter-packs)

109. [Appendix BM: Execution Pack v15 — Founder-Production Smoke Test
Packs](#109-appendix-bm-execution-pack-v15--founder-production-smoke-test-packs)

110. [Appendix BN: Execution Pack v16 — Fully Expanded DDL and
Seed-Data Starter
Bundle](#110-appendix-bn-execution-pack-v16--fully-expanded-ddl-and-seed-data-starter-bundle)

111. [Appendix BO: Execution Pack v16 — Service-by-Service Dashboard
and Alert Definition
Pack](#111-appendix-bo-execution-pack-v16--service-by-service-dashboard-and-alert-definition-pack)

112. [Appendix BP: Execution Pack v17 — Real SQL Migration Bundle for
First Migration
Sets](#112-appendix-bp-execution-pack-v17--real-sql-migration-bundle-for-first-migration-sets)

113. [Appendix BQ: Execution Pack v17 — Concrete Dashboard
Specification
Pack](#113-appendix-bq-execution-pack-v17--concrete-dashboard-specification-pack)

---

# 1. Executive Summary

Hotel Nexus is evolving into a **state-first human operating
system** and ultimately a **human estate operating system**. The
platform is intended to orchestrate human life, work, cognition, health,
environment, opportunity discovery, memory, and eventually embodiment
through a future humanoid interface.

This is not a simple assistant. It is not just a chatbot, a dashboard,
or an automation tool. It is intended to become a **closed-loop estate
OS** that:

- understands human state,

- stores and retrieves deep personal memory,

- automates workflows with low-friction voice input,

- mines opportunities in attention markets and capital markets,

- generates assets overnight,

- surfaces ranked approvals in the morning,

- adapts rooms, environments, and workflows to the user,

- and eventually inhabits ambient systems and humanoid robotics.

The founder’s direction is explicit:

- **state first**

- **human optimization first**

- **ADHD-friendly by design**

- **voice-first**

- **deeply automated**

- **multi-agent but not fragmented**

- **economically generative**

- **capable of white-label commercialization**

- **future-ready for humanoid embodiment**

The codebase is already evolving. The founder has already built and
designed in GitHub, including a project referred to as **Ruflo /
Rufflo**, and wants Hotel Nexus to become meaningfully stronger by
inheriting the best ideas from GitHub agent frameworks, orchestration
engines, skill libraries, automation platforms, observability tools, and
robotics ecosystems.

This document is the initial master handover file for the technical
team. It is designed as a living document and should continue to expand
as architecture hardens.

---

# 2. Project Identity and Naming

The project has been discussed under multiple names:

- **Hotel Nexus**

- **Nexus Hotel**

- **Hotel Nexus Estate**

These should be treated as the same strategic program, with naming
evolution reflecting scope expansion.

## Recommended interpretation of naming

### Hotel Nexus

The original conceptual frame: an “estate” or “hotel” of agents, rooms,
capabilities, and subsystems.

### Nexus Hotel

A variation on the same concept, emphasizing the platform as a nexus of
tools, data, rooms, agents, and systems.

### Hotel Nexus Estate

The strongest current name for the long-term platform vision. It
conveys:

- system depth,

- estate-level orchestration,

- environmental control,

- identity continuity,

- inheritance of memory, policy, and automation across contexts.

## Naming implication

The system should be designed with the semantic model of an estate:

- rooms,

- zones,

- residents,

- states,

- permissions,

- staff,

- memory,

- routines,

- operations,

- assets,

- schedules,

- and eventually a physical embodied concierge.

---

# 3. Founder Intent

The founder intent, as expressed across the conversation, is clear:

1. Build a **second brain**, but more than a second brain.

2. Build a **truth-called-code system** grounded in files, memory,
and operational intelligence.

3. Replace fragmented paid human and software dependencies where
possible with higher-order agents:

- productivity assistant,

- doctor-style analyzer,

- lawyer-style reviewer,

- accountant/CFO-style interpreter,

- chief of staff,

- market analyst,

- content engine.

4. Enable the system to read:

- files,

- notes,

- analytics,

- health data,

- blood results,

- future biofeedback,

- business data,

- market data,

- content performance data.

5. Use agents that can do the work of many smaller agents by being
**upskilled**, not merely multiplied.

6. Make the system as automated as possible because the founder has
ADHD and wants friction removed “right down to workflow.”

7. Make it **voice activated** and low-friction.

8. Make it capable of:

- finding niches,

- scraping analytics,

- building content,

- remixing content,

- deploying apps,

- registering domains,

- producing ready-to-approve deliverables overnight.

9. Make it capable of economic generation:

- content alpha,

- app alpha,

- market alpha,

- stock analysis,

- white-label products.

10. Prepare for a future where this system is implemented into a
**humanoid** planned for acquisition in **Japan in 2027**.

---

# 4. Core Thesis

**Hotel Nexus is a state-first human operating system with autonomous
alpha engines for health, execution, memory, content, wealth, and
eventual embodiment.**

A more expanded thesis:

- The best human OS should begin from **state**, not tasks.

- State determines readiness, cognition, energy, action quality, and
decision quality.

- Therefore the system should sense, interpret, and act on human state
before orchestrating work.

- Memory should not be flat storage; it should be a **temporal,
evidence-grounded memory spine**.

- Agents should be powerful, orchestrated, and upskilled rather than
fragmented into brittle micro-personas.

- Automation should run ahead of the user and present **ranked
approvals**, not blank canvases.

- The home/estate itself should become a sensing body.

- Future embodiment should allow the same OS to inhabit physical agents
and humanoids.

---

# 5. Vision Statement

Build the first **state-first human estate operating system** for
optimizing human life, work, health, cognition, opportunity, and
embodiment.

The platform should eventually function as:

- a **deep memory system**,

- an **executive function scaffold**,

- a **health and readiness interpreter**,

- an **ambient sensing environment**,

- a **market and content alpha engine**,

- an **overnight production and launch foundry**,

- a **digital twin and shadow simulation system**,

- and a **future humanoid control and memory stack**.

---

# 6. What This Project Is

Hotel Nexus is intended to be all of the following:

- a **state-first OS**

- a **voice-first OS**

- a **personal executive OS**

- a **memory OS**

- a **health/biofeedback fusion system**

- a **content and opportunity mining engine**

- a **stock-analysis support engine**

- a **workflow automation estate**

- a **room- and transition-aware environment**

- a **future robotics/humanoid memory-and-control layer**

- a **product platform with subscription and white-label
potential**

---

# 7. What This Project Is Not

This system is **not** intended to be:

- just a chatbot

- just a Notion overlay

- just a personal dashboard

- just a content planner

- just a health tracker

- just an app builder

- just a home automation platform

- just a robot controller

It is also **not** a justification for reckless autonomy. The
founder wants maximum automation, but with intelligent control surfaces
and approval gates.

Cautions already surfaced in conversation:

- RF sensing is promising but not universally medical-grade.

- Brainwave interpretation and medical diagnosis are
aspirational/high-risk.

- Health, legal, and financial domains require stricter permissions and
evidence thresholds.

- No high-risk autonomous action should bypass approvals.

- No public publishing, capital deployment, or irreversible spend
should occur without controls.

---

# 8. Design Principles

## 8.1 State first

Everything starts with human state:

- recovery,

- stress,

- focus,

- readiness,

- transition,

- room context,

- cognitive load.

## 8.2 Voice first

The ideal interface is spoken intent, not heavy manual setup.

## 8.3 ADHD-first

The product must reduce activation energy:

- fewer decisions,

- fewer blank pages,

- more ranked next steps,

- lower friction.

## 8.4 Evidence first

Memory and output should be grounded where possible:

- source citations,

- file references,

- traceable reasoning,

- confidence scores.

## 8.5 Orchestrated, not fragmented

Prefer a smaller number of heavyweight super-agents with shared memory
and strong skill systems over dozens of weak disconnected personas.

## 8.6 Ambient and embodied

The system should eventually live in:

- software,

- rooms,

- devices,

- ambient sensors,

- future robots,

- future humanoids.

## 8.7 Approval gated

Autonomy is desired. Blind autonomy is not.

## 8.8 Economic generation matters

The system should not only optimize the founder’s life; it should help
create wealth through:

- content,

- market opportunities,

- apps,

- financial analysis,

- productization.

## 8.9 Locality and sovereignty where useful

Sensitive domains may require self-hosting, permission isolation, or
estate-local control.

## 8.10 Continuous evolution

This is a living system that should:

- learn,

- write back,

- score itself,

- improve skill packs,

- evolve architecture.

---

# 9. ADHD-First Product Principles

This project has a strong ADHD context. That is not a side note; it is a
core design constraint.

## Must-have UX outcomes

- Reduce blank-page syndrome.

- Make voice the easiest starting point.

- Convert fuzzy user intent into structured plans automatically.

- Present pre-ranked morning approvals instead of overwhelming
dashboards.

- Keep the number of choices low.

- Scaffold executive function:

- prioritize,

- sequence,

- remind,

- reduce friction,

- defer non-essential complexity.

- Use nudges carefully.

- Detect overload before failure.

- Translate large goals into immediately actionable units.

## Ideal morning experience

Every morning the user should receive a simple command board with four
sections:

### Body

- sleep/recovery/readiness

- state warnings

- ideal work intensity

### Money

- top content opportunity

- top market opportunity

- biggest risk

### Moves

- 3 recommended actions

- each already prepared and awaiting approval

### Momentum

- what worked yesterday

- what is compounding

- what should stop

---

# 10. Architecture Overview

The system architecture has evolved through several useful framings.
These are not contradictory; they are complementary lenses on the same
platform.

At its highest level, Hotel Nexus should be understood as:

- an **estate OS**

- built around **state intelligence**

- powered by **shared memory**

- executed via **agent orchestration**

- grounded by **tools and workflows**

- extended by **ambient sensing**

- monetized through **alpha generation**

- and projected into the future through **embodiment**

Core architecture themes:

- multimodal interface,

- intent compilation,

- executive function support,

- permissioned memory,

- stateful workflows,

- long-running jobs,

- browser/system automation,

- content/app/media creation,

- health and estate interop,

- market intelligence,

- evaluation,

- simulation,

- eventual robotics.

---

# 11. Primary System Framings

## 11.1 The 5 Super-Systems

This is the clearest top-level framing to preserve.

### 1. State OS

Covers:

- human state,

- recovery,

- focus,

- readiness,

- environment,

- room intelligence,

- sensing,

- health/biofeedback,

- regulation.

### 2. Execution OS

Covers:

- tasks,

- workflows,

- approvals,

- automation,

- browser/system actions,

- scheduling,

- delivery.

### 3. Memory OS

Covers:

- notes,

- files,

- documents,

- sources,

- meetings,

- structured and temporal memory,

- retrieval,

- write-back,

- indexed experience.

### 4. Alpha OS

Covers:

- content niches,

- market gaps,

- app opportunities,

- monetization,

- stock analysis,

- attention arbitrage,

- opportunity scoring,

- overnight research/build loops.

### 5. Embodiment OS

Covers:

- voice,

- home systems,

- room-level intelligence,

- telepresence,

- future robotics,

- future humanoid interface.

---

## 11.2 The 15-Layer / 19-Layer Thinking

The architecture also evolved into richer layer models. These are useful
because they describe control flow.

Important layers raised across the conversation include:

1. Presence / Interface

2. Intent Compiler

3. Executive Function Layer

4. Permission Fabric

5. Memory Spine

6. Document Refinery

7. Model Gateway

8. Swarm Orchestration

9. Event Mesh

10. Action Layer

11. Creation Studio

12. Ambient Estate Layer

13. Health Interop Layer

14. Notification/Nudge Layer

15. Experimentation Layer

16. App Factory

17. Evaluation Layer

18. Shadow/Simulation Layer

19. Evolution Layer

These should be treated as a working reference architecture.

---

## 11.3 The Three-Body System

A key later framing:

### Ambient Body

The house, rooms, sensors, RF presence, environment, Wi‑Fi sensing, room
transitions, ambient intelligence.

### Digital Body

The memory spine, agent graph, workflows, app/data layer, identity,
permissions, analytics, narratives.

### Physical Body

Future humanoid, robot platforms, telepresence, embodied concierge.

All three should eventually share:

- one identity model,

- one memory spine,

- one permission fabric,

- one state model,

- one orchestration brain.

---

## 11.4 The Operating Loop

A core loop explicitly articulated in the conversation:

**Speak → Compile → Authorize → Load state → Plan → Act → Create →
Notify → Measure → Evolve**

This is the high-level behavior model for the whole OS.

---

# 12. Layered Stack

This section consolidates all major layers and associated technologies
referenced in the conversation.

## 12.1 Presence / Voice / Multimodal Interface

Purpose:

- real-time conversation,

- voice-first control,

- multimodal presence,

- future telephony/video interaction.

Tools referenced:

- LiveKit Agents

- Pipecat

Role:

- front door to the estate,

- spoken intent capture,

- multimodal streaming,

- eventual humanoid conversational channel.

---

## 12.2 Intent Compiler

Purpose:

- turn spoken or messy user intent into structured plans, tasks,
workflows, or build briefs.

Tools/concepts referenced:

- DSPy

- prompt engineering systems

- model routing

- structured output patterns

Role:

- the bridge between “I describe what I want” and machine-executable
plans.

---

## 12.3 Executive Function Layer

Purpose:

- prioritize,

- sequence,

- triage,

- reduce overwhelm,

- surface top actions,

- scaffold ADHD-heavy workflows.

Tools/concepts referenced:

- LangGraph

- Trigger.dev

- Novu

- approval routing

- prioritization logic

Role:

- converts many possible actions into the smallest next useful set.

---

## 12.4 Permission Fabric / Identity

Purpose:

- control access,

- scope agent rights,

- isolate sensitive domains,

- manage SSO/OAuth/authorization.

Tools referenced:

- Authentik

- OpenFGA

Role:

- enforce separate permission zones for:

- health,

- finance,

- legal,

- content,

- environment,

- robotics.

---

## 12.5 Memory Spine

Purpose:

- create deep, durable, evidence-grounded personal and operational
memory.

Tools referenced:

- NotebookLM

- Notion AI

- Mem0

- Graphiti

Role:

- source-grounded reading,

- workspace context,

- multi-level persistent memory,

- temporal knowledge graph,

- provenance tracking,

- write-back after action.

---

## 12.6 Document Refinery

Purpose:

- parse, clean, chunk, transform, and normalize complex files and
documents for LLM/agent consumption.

Tools referenced:

- Docling

- Unstructured

Role:

- make the founder’s files, PDFs, presentations, tables, scans, and
mixed media usable to the rest of the stack.

---

## 12.7 Model Gateway

Purpose:

- route across model providers,

- manage spend,

- enable policy-based model selection,

- centralize access.

Tools referenced:

- LiteLLM

Role:

- multi-provider gateway,

- spend tracking,

- fallback routing,

- model abstraction.

---

## 12.8 Swarm Orchestration

Purpose:

- coordinate multiple agents and long-running processes.

Tools referenced:

- Ruflo / Rufflo

- LangGraph

- Trigger.dev

- Temporal

- CrewAI

- AutoGen

- Microsoft Agent Framework

- OpenHands

Role:

- durable execution,

- swarm coordination,

- human-in-the-loop checkpoints,

- role-based collaboration,

- retryable tasks,

- background workers,

- deterministic + autonomous flow composition.

---

## 12.9 Event Mesh

Purpose:

- real-time internal messaging between agents and services.

Tools referenced:

- NATS

Role:

- event-driven architecture,

- decoupled communication,

- state and task broadcast.

---

## 12.10 Action Layer

Purpose:

- turn plans into real work on the web, system, and connected apps.

Tools referenced:

- browser-use

- Open Interpreter

- n8n

- Activepieces

Role:

- browser automation,

- computer control,

- mainstream SaaS automation,

- agent-triggered web execution.

---

## 12.11 Creation Studio

Purpose:

- create and remix visual, audio, and video assets.

Tools referenced:

- ComfyUI

- Remotion

- HeyGen

- Workhorse concept

- video remix/reswap ideas

Role:

- long-form and short-form generation,

- avatar-driven media,

- synthetic media,

- programmatic video,

- graphics pipeline,

- automated content packaging.

---

## 12.12 Ambient Estate Layer

Purpose:

- integrate rooms, devices, sensors, and local-first home automation.

Tools referenced:

- Home Assistant

Role:

- room state,

- routines,

- environmental context,

- ambient triggers,

- spatial behavior integration.

---

## 12.13 Health Interop Layer

Purpose:

- make health data interoperable and machine-usable.

Tools referenced:

- FHIR

- Open mHealth

Role:

- lab data,

- blood test results,

- wearable and patient-generated data,

- future biofeedback normalization.

---

## 12.14 Notification / Nudge Layer

Purpose:

- deliver reminders, alerts, and nudges across channels.

Tools referenced:

- Novu

Role:

- multi-channel notification fabric,

- digesting,

- preferences,

- ADHD-safe routing.

---

## 12.15 Experimentation Layer

Purpose:

- feature flags, staged rollout, remote config, experiments.

Tools referenced:

- Flagsmith

Role:

- gradual release,

- A/B tests,

- policy toggles,

- rollout safety.

---

## 12.16 App Factory

Purpose:

- generate, deploy, and monetize apps.

Tools referenced:

- Expo

- Supabase

- RevenueCat

Role:

- mobile/web frontend generation,

- backend scaffolding,

- auth/database/storage,

- subscription management,

- app build and submission pipelines.

---

## 12.17 Evaluation Layer

Purpose:

- monitor agent performance, prompts, traces, outputs, failures.

Tools referenced:

- Langfuse

- OpenTelemetry

Role:

- observability,

- tracing,

- evaluation datasets,

- prompt versioning,

- instrumentation.

---

## 12.18 Shadow / Simulation Layer

Purpose:

- pre-execution simulation, digital twins, world models, and future
robotics simulation.

Tools referenced:

- NVIDIA Omniverse

- Isaac Sim

- LangGraph

- Temporal

- Trigger.dev

Role:

- simulate future plans,

- test alternate schedules,

- build digital twins,

- generate synthetic training data,

- robot simulation.

---

## 12.19 Evolution Layer

Purpose:

- self-improvement, policy adaptation, skill upgrades, memory
refinement.

Tools referenced:

- DSPy

- PydanticAI

- Prompt-Engineering-Guide

- skill libraries

- Mem0

- Graphiti

Role:

- optimize prompts/graphs,

- improve agent behavior,

- grow reusable skill packs,

- score and refine system outputs.

---

## 12.20 Alpha Layer / Attention Arbitrage Engine / Autonomous
Operations Layer

Purpose:

- generate economic asymmetry,

- detect mispriced attention,

- detect mispriced opportunity,

- orchestrate overnight hunts and builds.

Concepts referenced:

- Alpha Layer

- Attention Arbitrage Engine

- Autonomous Operations Layer

- Night Shift

- Overnight Foundry

- Media Alpha Desk

- Capital Alpha Desk

Role:

- economic generation engine of the platform.

---

## 12.21 Embodiment / Robotics Layer

Purpose:

- future robotic and humanoid interface.

Tools referenced:

- ROS 2

- NVIDIA Isaac GR00T

- LeRobot

- OpenVLA

Role:

- physical world action,

- future robot memory/control,

- humanoid integration.

---

## 12.22 Energy Arbitrage Layer

Purpose:

- optimize when compute, mining, rendering, or heating should run.

Concepts referenced:

- Bitcoin mining

- heat reuse

- optional mining/compute nodes

- energy-aware runtime scheduling

Role:

- estate-level compute and energy strategy.

---

# 13. Agent Taxonomy

The project consistently moved toward a smaller number of
**heavyweight super-agents** with shared memory, instead of many
narrow agents. This must remain a core design choice.

## 13.1 Core Sovereign Agents

### 1. General Manager / Chief of Staff

Role:

- executive operations,

- planning,

- coordination,

- delegation,

- daily/weekly review,

- reminders,

- inbox/task triage,

- meeting prep,

- KPI follow-up,

- morning command board orchestration.

### 2. Archivist

Role:

- memory engine,

- ingest files, notes, videos, documents,

- summarize with citations,

- tag, deduplicate, detect contradictions,

- maintain hot/warm/cold memory,

- write back outcomes,

- preserve provenance.

### 3. Revenue Director

Role:

- market and niche hunter,

- competitor scanning,

- trend detection,

- opportunity scoring,

- pricing hypotheses,

- monetization mapping.

### 4. Studio Head

Role:

- content machine,

- scripts,

- clipping,

- remixing,

- channel adaptation,

- title/hook/thumbnail ideation,

- content calendar,

- production packet generation.

### 5. Finance Controller / AI CFO

Role:

- accounting interpretation,

- runway,

- cash flow,

- forecasting,

- expense anomalies,

- tax prep support,

- P&L interpretation,

- Xero-connected finance analysis.

### 6. Medical Director

Role:

- health and biohacking interpretation,

- labs,

- wearables,

- symptom correlation,

- protocol reminders,

- readiness interpretation,

- pattern detection.

### 7. General Counsel

Role:

- legal risk review,

- contract review,

- obligation tracking,

- clause extraction,

- risk flags,

- deadline awareness.

### 8. Estate Steward

Role:

- family/estate operations,

- environment, routines, estate logistics,

- potentially home/room/automation oversight.

---

## 13.2 Media Alpha Desk

This is a sub-organization inside Alpha OS, not a single agent.

### Trend Scout

Finds:

- rising topics,

- audience demand shifts,

- early breakout niches,

- underserved questions.

Inputs:

- trend data,

- YouTube signals,

- competitor patterns,

- search interest.

### Analytics Miner

Finds:

- what content performs economically,

- what topics retain,

- what packaging patterns work,

- what failed due to packaging versus topic weakness.

Inputs:

- watch time,

- retention,

- CTR,

- upload patterns,

- title/thumbnail patterns,

- channel performance.

### Opportunity Scorer

Scores ideas by:

- demand velocity,

- monetization potential,

- production difficulty,

- brand fit,

- repurposability,

- competition density,

- speed to publish,

- confidence.

### Content Architect

Decides:

- video type,

- short-form vs long-form,

- landing page angle,

- newsletter angle,

- micro-app opportunity,

- lead magnet,

- community post,

- multi-asset conversion.

### Workhorse Builder

Executes:

- scripts,

- shot lists,

- B-roll prompts,

- clip plans,

- title/hook packages,

- draft generation,

- creator packet assembly.

### Approval Governor

Enforces:

- no publishing without approval,

- brand safety,

- spend limits,

- claim/risk review,

- confidence thresholds.

### Distribution Operator

Handles:

- scheduling,

- cross-platform adaptation,

- A/B variants,

- post queueing,

- performance feedback ingestion.

### Learning Loop Agent

Asks:

- what made money,

- what got attention without conversion,

- what retained,

- what died,

- what to stop doing,

- what to double down on.

---

## 13.3 Capital Alpha Desk

Another sub-organization inside Alpha OS.

### Macro Watcher

Tracks:

- rates,

- inflation,

- regime shifts,

- sector rotation,

- macro backdrop.

### Filing Reader

Reads:

- 10-K,

- 10-Q,

- 8-K,

- company facts,

- filing history,

- language changes,

- key disclosures.

### Quality Analyst

Scores:

- revenue quality,

- margins,

- debt profile,

- cash conversion,

- dilution,

- consistency.

### Valuation Analyst

Interprets:

- multiples vs history,

- peer comps,

- implied expectations,

- scenarios.

### Technical / Flow Analyst

Monitors:

- trend structure,

- breakout/failure,

- support/resistance,

- volatility,

- flow signals.

### Risk Sentinel

Flags:

- balance-sheet risk,

- governance concerns,

- event risk,

- concentration risk,

- narrative fragility.

### Catalyst Hunter

Looks for:

- earnings,

- guidance changes,

- regulatory shifts,

- launches,

- M&A possibilities,

- sector tailwinds.

### Portfolio Voice

Communicates simply:

- what changed,

- what matters,

- what needs review,

- best asymmetric idea,

- greatest risk.

---

# 14. Shared Agent Capability Spine

All major agents should inherit a shared capability spine. This is more
important than endlessly adding personas.

Core shared skills:

1. Context loading

2. Memory classification

3. Evidence-grounded retrieval

4. Workflow decomposition

5. Deterministic vs autonomous decision boundary awareness

6. Tool routing

7. Exception handling

8. Approval routing

9. Confidence scoring

10. Structured output

11. Cross-agent handoff

12. Memory write-back

13. Narrative reporting

14. Trigger awareness

15. Audit trace generation

16. Risk flagging

17. Verification and post-action review

18. Prioritization and scoring

19. Human-in-the-loop pause/resume support

20. Learning loop participation

---

# 15. GitHub/Open-Source Upskilling Strategy

A major founder instruction was that these agents should be improved
“fifty times” by drawing from the best GitHub ecosystems rather than
merely inventing new labels.

## Strategic principle

Do not create many weak agents.

Create a smaller set of strong agents, then **upskill them using
proven open-source patterns**.

## Core repositories/pattern sources referenced

### Ruflo / Rufflo

Use for:

- orchestration,

- swarm topologies,

- reusable workflows,

- vector memory,

- background workers,

- plugin/skill injection,

- zero-trust federation.

### LangGraph

Use for:

- durable state,

- long-running workflows,

- human-in-the-loop approvals,

- memory management,

- resumable graph execution.

### CrewAI

Use for:

- role-based crews,

- deterministic vs autonomous task decomposition.

### OpenHands

Use for:

- execution environment,

- tool use,

- development automation,

- permissions boundaries.

### agent-skills

Use for:

- structured skill definitions,

- triggers,

- process steps,

- verification,

- red flags.

### awesome-agent-skills

Use for:

- curated production-grade skill packs,

- cross-team best practices.

### Prompt-Engineering-Guide

Use for:

- context engineering,

- ReAct,

- tree/search styles,

- routing,

- RAG patterns.

### DSPy / PydanticAI

Use for:

- programmatic LLM systems,

- structured outputs,

- optimization,

- typed agent building.

## Mandate

Hotel Nexus should maintain its own internal skill library, but that
library should be informed by the strongest GitHub precedents and
workflow standards.

---

# 16. Knowledge, Memory, and Personal State Model

Memory is central to Hotel Nexus. This must not be treated as a generic
vector store problem.

## 16.1 Memory as a living spine

The system requires:

- grounded memory,

- temporal memory,

- personal memory,

- operational memory,

- decision memory,

- provenance.

## 16.2 Proposed memory tiers

Preserve the prior concept:

- **Hot memory**: current active context, current projects,
today/week state

- **Warm memory**: recent patterns, open loops, recurring themes

- **Cold memory**: archives, legacy documents, dormant knowledge,
historical traces

## 16.3 Memory categories

- Personal facts

- Preferences

- Health history

- Labs and biometrics

- Documents

- Meetings

- Content analytics

- Market notes

- Legal and finance artifacts

- Environment patterns

- Transition patterns

- Automation history

- Recommendation history

- Approval history

## 16.4 Memory write-back requirement

Every meaningful agent action should generate memory traces:

- what was observed,

- what was decided,

- why,

- confidence,

- evidence,

- outcome,

- follow-up.

## 16.5 Temporal graph importance

Graphiti was introduced because the system needs a **temporal
knowledge graph**, not just static memory:

- facts change,

- contexts expire,

- humans evolve,

- states transition,

- relevance depends on time.

---

# 17. Document and Data Ingestion Architecture

Hotel Nexus will consume a wide range of inputs:

- files,

- PDFs,

- websites,

- audio,

- video,

- YouTube links,

- spreadsheets,

- health results,

- business reports,

- SEC filings,

- content analytics,

- operational documents.

## Core ingestion chain

1. Ingest source

2. Parse/refine

3. Chunk and structure

4. Extract entities, themes, obligations, metrics

5. Attach provenance

6. Index into memory spine

7. Surface to agents by role and permission

## Platforms referenced

### NotebookLM

Best suited for:

- grounded source reading,

- summarization,

- source citation,

- research companion behavior.

### Notion AI

Best suited for:

- active workspace integration,

- recurring work,

- search,

- workspace context.

### Docling / Unstructured

Best suited for:

- preprocessing complex source materials into GenAI-ready formats.

---

# 18. Ambient Sensing and State Intelligence

One of the largest conceptual expansions in the conversation was the
move from wearable-centric tracking toward **ambient contactless
sensing**.

## 18.1 Ambient RF / Wi‑Fi sensing

A key idea introduced by the founder:

- the Wi‑Fi router / RF environment can potentially sense breathing,
HR-style variability proxies, presence, and room activity without
requiring a wearable.

This led to the concept of an **Ambient RF Sensing Layer**.

Potential uses discussed:

- breathing detection,

- motion signatures,

- occupancy,

- sleep disturbance,

- stress proxies,

- fall detection,

- room-level state inference.

Important caution:

- promising, but not universally medical-grade.

- accuracy and robustness vary.

- should be treated as probabilistic and fused with other signals.

## 18.2 Voice biomarker layer

Voice should be both:

- interface,

- biomarker stream.

Potential features:

- stress markers,

- strain,

- energy level,

- dysregulation,

- overload,

- cognitive fatigue,

- urgency patterns.

## 18.3 Neuroadaptive layer

Potential future integration:

- EEG,

- EMG,

- EDA,

- PPG,

- eye tracking,

- biosensing rigs like OpenBCI/Galea.

Use case:

- focus estimation,

- arousal,

- recovery,

- deep state tracking.

Caution:

- high sensitivity domain,

- high interpretation risk,

- should begin as optional and experimental.

## 18.4 Micro-location / UWB layer

Purpose:

- detect not just location, but transitions between locations and
room-entry patterns.

Use case:

- hallway to office,

- bed to desk,

- hesitation before entering work space,

- zone-specific routines and interventions.

## 18.5 Environmental psychophysiology

Inputs proposed:

- CO2

- temperature

- humidity

- VOCs

- lighting spectrum

- noise profile

- sound pressure

- screen glare

- ambient load

Use case:

- cognitive weather mapping,

- detect hidden environmental causes of poor state.

## 18.6 Friction telemetry

A powerful software-native sensing layer:

- typing cadence,

- backspace rate,

- app hopping,

- tab switching,

- unfinished drafts,

- repeated reopening,

- hesitation before task start.

This provides behavioral signals of:

- executive friction,

- overwhelm,

- avoidance,

- state instability.

## 18.7 Transition intelligence

Hotel Nexus should reason not only over state, but **state
transitions**:

- what state is ending,

- what state is beginning,

- whether the transition is healthy,

- what intervention is needed before the next mode starts.

## 18.8 Pre-threshold detection

This is a major design idea:

Do not wait until the user is obviously overloaded. Detect drift before
failure:

- trend toward overload,

- trend toward task avoidance,

- trend toward dysregulation,

- insufficient recovery for work type.

## 18.9 Human-energy market

The system should learn:

- who energizes or drains the user,

- which tasks create flow,

- which contexts collapse attention,

- which digital environments fragment focus,

- what times support best output.

This is a model of personal energy economics.

## 18.10 State fusion and confidence

Critical requirement:

No single signal should dominate.The system should fuse multiple inputs
and attach confidence:

- ambient RF,

- voice,

- environment,

- behavior,

- schedule,

- health signals,

- labs/wearables if present.

## 18.11 Room intelligence

Rooms should become purposeful and adaptive:

- Deep Work room

- Recovery room

- Creative room

- Admin room

The system should align room behavior with state.

## 18.12 Pre-work readiness

Before high-friction work begins, the system should ask:

- is the user ready,

- should workload be simplified,

- should activation/regulation occur first,

- should work be deferred or broken down.

## 18.13 Behavioral drift

The system should detect long-term drift:

- worsening sleep patterns,

- more hesitation,

- reduced output quality,

- increased agitation,

- increasing avoidance.

---

# 19. Health, Biofeedback, and Interoperability

Health is a major estate domain, but also a high-risk one.

## Intended health data sources

- blood test results

- labs

- wearables

- optional bioresonance/other alternative devices mentioned by founder

- future biofeedback machines

- ambient sensing

- voice

- environmental context

## Standards and interoperability

Use:

- FHIR

- Open mHealth

Purpose:

- structured ingest,

- interoperability,

- future health connectors.

## Medical Director scope

Should focus on:

- interpretation support,

- pattern detection,

- reminders,

- protocol support,

- trend summaries,

- correlation insights.

## Caution

This system should not be treated as a replacement for licensed
diagnosis. The conversation strongly indicated a desire to “replace”
paid functions, but in health especially, outputs must be framed
carefully with evidence, uncertainty, and escalation logic.

---

# 20. Execution and Automation Architecture

Automation is not a side feature. It is central.

The founder’s requirement:

> automation is key to the whole build.

## Execution stack goals

- accept spoken intent,

- translate to plans,

- schedule work,

- run long jobs,

- pause for approval,

- recover from failure,

- log everything,

- summarize by morning.

## Key execution functions

- browser tasks

- SaaS automation

- local/system tasks

- build pipelines

- media generation

- reporting jobs

- recurring overnight jobs

- approval routing

- memory write-back

## Tools referenced

- Trigger.dev

- Temporal

- n8n

- Activepieces

- browser-use

- Open Interpreter

- LangGraph

- Ruflo / Rufflo

---

# 21. Content Opportunity Engine

This is the **Media Alpha Desk** within Alpha OS.

## Mission

Find where attention is going and convert that into:

- videos,

- remixes,

- assets,

- products,

- apps,

- monetizable opportunities.

## Data sources discussed

- YouTube Analytics

- YouTube Reporting API

- Google Trends

- competitor/public analytics

- comments/questions

- search interest

- packaging patterns

- user’s own content performance

## Core questions

- What topics are rising?

- Where is attention cheap?

- Where is content weak but demand strong?

- Which of the founder’s strengths fit the opportunity?

- What can be repackaged?

- What should become app/product instead of only content?

## Outputs

- ranked opportunity list

- safe win

- asymmetric bet

- scripts

- drafts

- thumbnails/hooks/titles

- short- and long-form plans

- landing page idea

- micro-app suggestion

- morning approval package

---

# 22. Capital Analysis Engine

This is the **Capital Alpha Desk**.

## Mission

While the founder sleeps, analyze:

- stocks,

- filings,

- risk,

- macro conditions,

- watchlists,

- notable thesis changes.

## Data sources discussed

- SEC EDGAR APIs

- company facts

- submission history

- market context

- narrative/catalyst monitoring

## Outputs

- top watchlist change

- biggest risk

- best asymmetric setup

- filing that needs review

- conviction upgrades/downgrades

- morning brief

## Important boundary

The conversation framed this as analysis and recommendation support.
Capital deployment remains approval-gated.

---

# 23. The Overnight Foundry / Night Shift

One of the most important product/architecture concepts.

## Night Shift mission

While the founder sleeps, the system should:

- sense,

- hunt,

- build,

- launch,

- and prepare approvals.

## 23.1 Night Shift master loop

### Loop A — Sense

Collect:

- state signals,

- ambient signals,

- environment signals,

- task debt,

- calendar load,

- finance/watchlist alerts.

### Loop B — Hunt

Search for:

- rising niches,

- monetizable app gaps,

- creator opportunities,

- product pain points,

- stock setups,

- content arbitrage.

### Loop C — Build

Create:

- scripts,

- videos,

- remixes,

- app prototypes,

- landing pages,

- dashboards,

- research briefs,

- automation flows.

### Loop D — Launch

Handle:

- domain search,

- backend provisioning,

- deployment,

- build packaging,

- internal preview links.

### Loop E — Wake Up With Decisions

Present:

- top 3 opportunities,

- what was built,

- what is ready,

- what needs approval,

- what should be ignored.

---

## 23.2 Overnight content loop

Preserve this exact logical sequence:

**Ingest → Detect → Decide → Build → Morning Approval**

### Ingest

- pull channel metrics,

- pull bulk reports,

- scrape signals where APIs are incomplete,

- ingest trends,

- cluster topics.

### Detect

- identify rising themes,

- detect gaps,

- compare monetization patterns,

- find reusable formats.

### Decide

- rank top opportunities,

- attach confidence,

- discard weak ideas.

### Build

- script top concepts,

- package assets,

- create variations,

- prepare media packets.

### Morning approval

User wakes to:

- strongest opportunities,

- one safe win,

- one asymmetric bet,

- ready-to-approve assets.

---

## 23.3 Overnight capital loop

Preserve this sequence:

**Fetch → Analyze → Decide → Brief**

### Fetch

- watchlists,

- prices,

- filings,

- company facts,

- sector context,

- catalyst scan.

### Analyze

- refresh company scores,

- compare against prior views,

- detect narrative shifts.

### Decide

- watch,

- hold,

- investigate,

- upgrade,

- downgrade,

- alert.

### Brief

Return:

- top opportunity,

- top risk,

- thesis change,

- action needed today.

---

# 24. Autonomous App Foundry

A major founder request was to have agents generate apps overnight based
on niches and market opportunities.

## Mission

Convert niche signals into working software prototypes with minimal
founder input.

## Flow

**Niche → MVP definition → App scaffold → Domain → Backend → Deploy →
Preview URL**

## Expected outputs

- working web prototype,

- backend schema,

- auth,

- storage,

- functions,

- landing page,

- branded preview,

- optional mobile build staging.

## App types implied

- micro-apps

- niche apps

- AI tools

- dashboards

- lead-gen utilities

- white-labelable vertical products

## Tooling referenced

- Supabase

- Expo

- EAS Build / EAS Submit

- Cloudflare Registrar API

- Namecheap API

## Reality boundary

Web apps can be near-fully automated.

Mobile apps can be mostly automated through build and submission prep,
but public release still often requires store-level metadata/review
work.

---

# 25. Synthetic Media Foundry / Workhorse

The founder explicitly wants “Workhorse” behavior: the system should
create, remix, reswap, and push content without manual effort, subject
to approval.

## Mission

Turn opportunities into media assets at scale.

## Capabilities requested

- script generation

- avatar videos

- remixes

- reswaps

- clips

- shorts

- long-form

- multi-platform variants

- voiceover generation

- translation

- lipsync

- title and thumbnail packages

## Tool references

- HeyGen

- Remotion

- ComfyUI

- Open Interpreter

- Workhorse concept

- video remix pipeline

## HeyGen relevance

Specifically mentioned as a tool the founder may provide access to. It
should be integrated as a rendering endpoint inside the synthetic media
foundry.

## Output pattern

**Opportunity detected → Scripted → Rendered → Variant-packaged →
Approval queued**

---

# 26. Embodiment Roadmap

A major future direction is embodiment into a robot/humanoid.

## Explicit founder milestone

The founder stated an intention to go to **Japan in 2027** to buy a
humanoid and implement the system into it.

## Implication

Embodiment is not an abstract future layer; it should shape architecture
now.

## Embodiment principles

- same identity model,

- same memory spine,

- same permissions,

- same tone/persona,

- same state model,

- same orchestration brain.

## Robotics stack references

- ROS 2

- NVIDIA Isaac GR00T

- Omniverse

- Isaac Sim

- LeRobot

- OpenVLA

## Embodied concierge concept

The humanoid should eventually act as a:

- physical concierge,

- estate operator,

- task executor,

- memory-bearing interface,

- room-aware embodied extension of the OS.

## Additional embodiment concepts raised

- telepresence/proxy capabilities

- humanoid persona inheriting memory and policies

- physical body as part of the three-body system

---

# 27. World Model, Shadow Layer, and Simulation

Hotel Nexus should not only act; it should simulate.

## Shadow layer purpose

- test alternate schedules,

- pre-run workflows,

- simulate action consequences,

- test room-state logic,

- test robot scenarios,

- pre-threshold alert simulations.

## Digital twin purpose

- model the human,

- model routines,

- model the house,

- model workflows,

- eventually model robot embodiment.

## Tools referenced

- Omniverse

- Isaac Sim

- LangGraph

- Temporal

- Trigger.dev

---

# 28. Energy Arbitrage and Optional Bitcoin Layer

The founder explicitly raised Bitcoin mining and related possibilities.

## Positioning

This should not be the center of the platform.

It should exist as an optional **Energy Arbitrage Layer**.

## Concept

Use estate compute capacity intelligently:

- mine when it makes economic sense,

- reuse heat where practical,

- separate mining nodes from core critical runtime,

- prioritize render/build/AI workloads over mining when needed.

## Founder-aligned framing

The system could treat:

- compute,

- electricity price,

- heat demand,

- rendering demand,

- mining demand

as parts of an estate-level resource allocation strategy.

---

# 29. Governance, Approvals, and Control Rules

This project requires high autonomy with clear boundaries.

## Non-negotiable rules

- No public publishing without approval.

- No capital deployment without approval.

- No high-confidence claim without evidence trail.

- No automation without rollback path.

- Every agent writes memory traces.

- Every recommendation includes confidence + rationale.

- Every overnight job produces a morning summary.

- Spend caps apply.

- Threshold-based approvals must exist.

- Separate permission zones are required for health, legal, and
finance.

## Additional governance expectations

- brand/style compliance checks

- risk review for regulated topics

- escalation logic

- evidence and provenance requirements

- action logging

---

# 30. Permissions, Identity, and Security Boundaries

Because this system spans personal, financial, legal, health, and
eventually robotics domains, identity and permissions are first-class
architecture.

## Permission zones explicitly needed

- Health zone

- Legal zone

- Finance zone

- Content/Publishing zone

- Estate/Home zone

- Robotics zone

- Experimental/Shadow zone

## Identity expectations

- durable user identity

- role-based access

- service-to-service auth

- ability to scope agent powers

- approval signatures

- guest modes for ambient sensing environments if needed

---

# 31. Observability, Evaluation, and Continuous Improvement

The platform is too complex to run blind.

## Observability requirements

- traces,

- sessions,

- prompt versions,

- tool call logs,

- workflow state,

- latency/cost metrics,

- agent decision logs,

- error classification.

## Evaluation goals

- which recommendations were useful,

- which automations failed,

- what content converted,

- what niches were false positives,

- what state predictions were wrong,

- where models hallucinated or overreached.

## Evolution expectations

- improve skill packs,

- improve prompts/programs,

- improve routing,

- improve scoring,

- improve handoffs,

- prune what is noisy.

---

# 32. Monetization and Productization

This project is intended not only as a personal OS but also as a product
platform.

## Product lines explicitly discussed

### Personal OS

For individuals who want state, memory, execution, and automation.

### Health OS

For users who want human-state and health optimization support.

### Executive OS

For founders/operators needing chief-of-staff + memory + automation.

### Estate OS

For families, family offices, or estate-level management.

### Practitioner / Advisor White-Label

For professionals who want a white-label client-facing version.

### Nexus Creator Alpha

Automated niche finding, content drafting, media pipelines.

### Nexus Investor Alpha

Overnight watchlist and filing intelligence.

### Nexus Operator Alpha

Market scanning + build recommendations for founders.

### Nexus State Alpha

State/recovery/focus aligned execution.

## Business models implied

- subscriptions

- premium dashboards

- concierge tiers

- white-label licensing

- family-office/estate products

- premium health/productivity configurations

- AI coworker/copilot offerings

---

# 33. Implementation Priorities and Phasing

The conversation gave clear sequencing guidance. Preserve it.

## Phase 1 — Core agent launch

Launch first:

1. Archivist

2. General Manager

3. Revenue Director

Reason:

These establish memory, executive scaffolding, and monetizable
opportunity detection.

## Phase 2 — Production and finance

Add:

4. Studio Head

5. Finance Controller

Reason:

This turns opportunity into content and adds financial intelligence.

## Phase 3 — Sensitive professional domains

Add:

6. Medical Director

7. General Counsel

Reason:

These are valuable but require tighter permissions and evidence
handling.

## Phase 4 — Core OS platform

Build:

- voice interface

- memory spine

- orchestration

- automation

- knowledge ingestion

- approval framework

## Phase 5 — Health + finance integrations

Integrate:

- FHIR/Open mHealth

- Xero

- labs/biofeedback inputs

- state fusion systems

## Phase 6 — Monetization

Launch:

- creator alpha

- investor alpha

- state products

- white-label options

## Phase 7 — Network effects / estate / white-label

Expand to:

- family-office use cases

- practitioner white-label

- estate tiers

- concierge products

## Phase 8 — Embodiment

Prepare:

- ROS 2 compatibility

- simulation stack

- robot memory/control abstraction

- future humanoid integration

---

# 34. Open Questions

The following remain open and should be tracked explicitly:

1. What is the exact current state of the existing codebase?

2. How much of Ruflo / Rufflo is already reusable directly?

3. Which services are intended to be self-hosted vs cloud-managed?

4. What is the initial source-of-truth datastore?

5. What is the initial approval UX?

6. What is the exact state model schema?

7. What room taxonomy will be used initially?

8. Which ambient sensors are actually available in the first
deployment?

9. Will Wi‑Fi sensing be experimental-only in v1?

10. Which health inputs are real at launch versus aspirational?

11. What content channels are in scope first?

12. What app verticals are preferred for the overnight foundry?

13. What is the threshold for autonomous domain purchase?

14. What is the initial portfolio/watchlist universe for Capital Alpha?

15. How will evidence and uncertainty be communicated in
health/legal/finance outputs?

16. What is the initial morning command board UI?

17. What is the initial mobile strategy versus web-first?

18. How much local-first estate control is required from day one?

19. What persona/tone should the system embody across voice, text, and
future humanoid form?

20. What is the minimum viable embodiment abstraction needed now to
avoid rework later?

---

# 35. Known Risks, Ethics, Privacy, and Compliance Considerations

## 35.1 Health risk

- RF sensing, voice biomarkers, and neuroadaptive signals are powerful
but high-risk.

- They should not be positioned as definitive diagnosis.

- Medical-grade claims require stronger validation.

## 35.2 Privacy risk

- Ambient sensing is highly sensitive.

- Voice and room-state logging can be invasive.

- Household/guest consent considerations matter.

## 35.3 Financial risk

- Stock analysis can influence decisions; approval gating is essential.

- No autonomous deployment of capital.

## 35.4 Legal risk

- Contract analysis and legal flags are helpful; final legal judgment
must be clearly framed.

## 35.5 Publishing risk

- Automated content generation can create misinformation or brand
damage if ungated.

## 35.6 Security risk

- Broad tool access across browser, domains, hosting, and systems
creates high blast radius if poorly permissioned.

## 35.7 Over-automation risk

- Too much autonomy without crisp morning summaries and approvals will
create chaos rather than leverage.

## 35.8 Model reliability risk

- Confidence and evidence trail must be present.

- High-risk claims require citations and uncertainty handling.

---

# 36. Current Architectural Positioning Summary

At this point in the conversation, the strongest synthesis is:

**Hotel Nexus Estate is a state-first human estate operating system
composed of five super-systems—State OS, Execution OS, Memory OS, Alpha
OS, and Embodiment OS—running on a layered architecture that combines
voice interaction, intent compilation, permissioned memory, ambient
sensing, durable orchestration, content and capital alpha generation,
overnight automation, and future robotics embodiment.**

It should:

- reduce friction,

- think ahead,

- build ahead,

- sense ahead,

- and present ranked approvals instead of demands for activation
energy.

---

# 37. Strategic Differentiators and Category Thesis

Hotel Nexus is not simply trying to be a better productivity assistant,
a better biohacking dashboard, or a better automation engine. The
ambition is materially larger: build a system that can become the
operating substrate for a human life, a digital estate, and eventually a
physically embodied estate.

This matters because the likely competitive landscape will contain many
point solutions that do one of the following reasonably well:

- personal task management,

- AI note-taking,

- LLM agents,

- health dashboards,

- content automation,

- stock research,

- smart-home control,

- digital twins,

- or robotics.

Hotel Nexus becomes category-defining only if it combines these into a
coherent operating philosophy rather than a pile of integrations.

## 37.1 The deepest differentiation

The strongest differentiator described across the conversation is this:

**Hotel Nexus starts with human state, not software workflow.**

That sounds subtle, but strategically it changes everything.

Most systems assume the user is already ready to act. Hotel Nexus
assumes readiness is variable and that software should adapt to the
human nervous system, context, cognitive load, room, recovery status,
and current opportunity field.

## 37.2 Why this can become a category of its own

Hotel Nexus can become its own category if it successfully merges:

- state intelligence,

- memory continuity,

- executive-function scaffolding,

- autonomous production,

- economic opportunity generation,

- ambient sensing,

- and embodiment.

A useful shorthand:

**From assistant → to operating system → to estate → to embodied
estate.**

## 37.3 The category thesis

A strong category thesis for builders to preserve:

> The next meaningful personal computing platform will not merely
answer questions. It will maintain continuity of identity, understand
readiness, act across tools and environments, generate economic upside,
and inhabit both digital and physical surfaces.

Hotel Nexus is aimed at that category.

## 37.4 Why “estate” matters strategically

The “estate” framing should not be treated as branding fluff. It encodes
the architecture.

An estate has:

- rooms,

- zones,

- rules,

- staff,

- schedules,

- assets,

- memory,

- permissions,

- residents,

- operations,

- surveillance/sensing,

- maintenance,

- and governance.

That maps almost perfectly to the system being built.

## 37.5 Core strategic moats if executed well

Potential long-term moats include:

### A. Personal state graph

A highly individualized, longitudinal model of the founder’s energy,
cognition, routines, transitions, preferences, constraints, and
opportunity patterns.

### B. Estate memory continuity

A system that remembers not just files and chats, but why decisions were
made, what worked, what failed, what state preceded success, and how the
estate behaved under different conditions.

### C. Closed-loop execution

Most systems stop at insight. Hotel Nexus must continue through:

- scoring,

- planning,

- building,

- packaging,

- approval,

- launch,

- measurement,

- write-back.

### D. Ambient awareness

The estate itself becomes a sensing and adaptive body.

### E. Embodied future compatibility

The same memory and orchestration model can one day inhabit a humanoid.

## 37.6 What would make Hotel Nexus feel unmistakably different

The system should eventually feel like:

- it already knows the context,

- it already knows the state,

- it has already prepared the options,

- it has already reduced the decision space,

- it has already built the first version,

- and it already knows what should happen next.

That is a much higher bar than “helpful AI.”

## 37.7 Builder instruction

Every new feature should be tested against a harder strategic question
than “is this cool?”

Ask instead:

- Does this increase estate intelligence?

- Does this reduce founder friction?

- Does this strengthen continuity of memory and state?

- Does this create compounding advantage?

- Does this move the system toward ambient and eventual embodied
operation?

If not, it is likely noise.

---

# 38. Founder Operating Modes and Estate Modes

Hotel Nexus should not be designed as a single flat mode. The founder’s
needs, state, and desired degree of automation vary significantly. The
estate itself should therefore support explicit operating modes.

## 38.1 Founder operating modes

These are human-centric modes the system should eventually infer and
support.

### Recovery mode

Used when:

- low readiness,

- poor sleep,

- post-overload,

- illness,

- travel recovery,

- emotional strain.

System behavior:

- reduce notification load,

- simplify tasks,

- elevate restorative routines,

- lower cognitive demand,

- avoid hard commitments,

- shift work to maintenance/admin or deferment.

### Deep Work mode

Used when:

- readiness is high,

- context is clean,

- interruption cost is high.

System behavior:

- suppress low-value interruptions,

- optimize room/environment,

- queue only essential communications,

- decompose large work into clear progression,

- provide focus-protective guardrails.

### Build mode

Used when:

- there is strong momentum,

- founder is generating ideas,

- product creation is the primary activity.

System behavior:

- capture fast voice input,

- translate rough intent into executable build briefs,

- keep context windows wide,

- create drafts rapidly,

- preserve decision trail.

### Operator mode

Used when:

- the founder is reviewing the system as CEO/chief architect.

System behavior:

- surface dashboards,

- show bottlenecks,

- show priority approvals,

- summarize what the estate is doing,

- present risks and unresolved questions.

### Creative mode

Used when:

- ideation, storytelling, brand, or media generation are primary.

System behavior:

- expand associative suggestions,

- lower structure early,

- keep capture friction low,

- route promising concepts into Workhorse production pipelines.

### Capital mode

Used when:

- reviewing financial opportunities, portfolio thinking, or capital
preservation.

System behavior:

- simplify signal from noise,

- enforce evidence presentation,

- preserve clear approval boundaries,

- distinguish analysis from execution.

## 38.2 Estate operating modes

These are system-wide modes that change how the estate behaves.

### Concierge mode

Light-touch assistance, summarization, orchestration, reminders.

### Command mode

Higher-tempo operational mode with more explicit routing, more
dashboards, and more execution.

### Night Shift mode

Low-human-presence high-autonomy mode where background work continues
while the founder sleeps.

### Shadow mode

Simulation-heavy mode for testing strategies, schedules, workflows,
build ideas, or automation policies before live execution.

### Travel mode

Estate adapts to travel, remote work, shifting time zones, changed
room/sensor availability, and reduced local control.

### Embodiment mode

Future mode in which a physical robot or humanoid becomes an execution
surface.

## 38.3 Why modes matter architecturally

Modes are not merely UX labels. They should alter:

- agent aggressiveness,

- notification thresholds,

- approval thresholds,

- automation scope,

- task decomposition style,

- visual/UI density,

- room behavior,

- background job scheduling,

- spending tolerance,

- and evidence thresholds.

## 38.4 Implementation guidance

Builders should consider mode as a first-class context object available
to:

- the General Manager,

- the Executive Function Layer,

- the Notification Layer,

- the Action Layer,

- and the approval system.

A suggested early schema might include:

- `human_mode`

- `estate_mode`

- `readiness_level`

- `notification_budget`

- `autonomy_class_limit`

- `focus_protection_level`

- `risk_tolerance_profile`

---

# 39. State Engine, Transition Engine, and Readiness Doctrine

If memory is the spine of Hotel Nexus, then the **State Engine** is
the metabolism.

This section matters because the founder’s central insight is that task
systems fail when they ignore human state.

## 39.1 State Engine purpose

The State Engine should infer, maintain, and update a working estimate
of:

- recovery,

- arousal,

- regulation,

- focus viability,

- overload risk,

- cognitive friction,

- work suitability,

- transition quality,

- and environmental fit.

## 39.2 Readiness doctrine

Readiness should become a formal doctrine inside the platform.

Suggested principle:

> The estate should not ask for the same kind of work from the human in
every condition. It should match the work to the state, or modify the
state before the work.

## 39.3 Suggested readiness bands

### Red

- low capacity,

- high overload risk,

- recovery prioritized,

- no high-stakes work unless explicitly overridden.

### Amber

- mixed capacity,

- structured work possible,

- reduced complexity recommended,

- stronger guidance and decomposition required.

### Green

- strong readiness,

- deeper work and higher-stakes output possible,

- more autonomy allowed around preparation and packaging.

### Blue / Recovery-creative hybrid

- not ideal for analytical grind,

- but useful for ideation, storytelling, associative thinking,
low-pressure creation.

## 39.4 Transition Engine purpose

The Transition Engine should model and intervene across boundary moments
such as:

- waking,

- arriving at desk,

- entering work room,

- switching from social mode to build mode,

- post-meeting decompression,

- end-of-day shutdown,

- pre-sleep wind-down.

These moments are disproportionately important for ADHD-heavy workflows
because failure often occurs in transitions rather than in the middle of
momentum.

## 39.5 Transition questions the system should ask

- What state is ending?

- What state is beginning?

- Is the user resisting the transition?

- Is the room/context suitable for the next mode?

- Should the next mode be delayed, softened, or scaffolded?

- Is an intervention needed before work begins?

## 39.6 Example interventions

- simplify first task,

- trigger a voice check-in,

- adjust lighting/music/environment,

- move a demanding task later,

- offer a 3-minute activation routine,

- present a “smallest useful next step,”

- suppress distracting notifications.

## 39.7 State fusion model

The system should not hardcode state from a single source. It should
fuse heterogeneous signals such as:

- ambient RF inference,

- voice biomarkers,

- friction telemetry,

- environmental readings,

- calendar load,

- health records,

- previous-night sleep or recovery data,

- wearable/biosensing inputs if available.

A confidence-weighted fusion approach is required.

## 39.8 Suggested internal state objects

Builders may eventually need formal internal records such as:

- `state_snapshot`

- `transition_event`

- `readiness_score`

- `environmental_context`

- `friction_profile`

- `risk_of_overload`

- `recommended_work_profile`

- `intervention_plan`

## 39.9 State-to-work mapping

The estate should classify work types in relation to state. Example
categories:

- deep analytical,

- routine admin,

- creative ideation,

- communication,

- learning/research,

- physical/errand,

- recovery-supportive.

Then map state to work accordingly.

## 39.10 Builder note

The State Engine should begin pragmatically. Even if early versions rely
on simpler heuristics, the architecture should allow later replacement
with richer inference pipelines.

---

# 40. Agent Communication Topology and Coordination Model

A critical architectural warning surfaced implicitly in the
conversation: if all agents talk to all agents freely, the system
becomes noisy, expensive, and unstable.

Hotel Nexus therefore needs a deliberate communication topology.

## 40.1 Recommended communication classes

### Signal agents

Gather raw observations.

Examples:

- Trend Scout

- Filing Reader

- RF sensing collectors

- environmental data collectors

- friction telemetry collectors

### Interpretation agents

Transform observations into meaning.

Examples:

- Opportunity Scorer

- Quality Analyst

- State Fusion Engine

- Readiness interpreter

- Risk Sentinel

### Decision agents

Choose what matters or what should happen next.

Examples:

- General Manager

- Approval Governor

- Content Architect

- Portfolio Voice

- Executive Function Layer

### Execution agents

Take action.

Examples:

- Workhorse Builder

- Distribution Operator

- browser/system automation runners

- App Foundry runners

### Memory agents

Preserve, compress, index, and summarize what occurred.

Examples:

- Archivist

- narrative/reporting agents

- learning loop agents

## 40.2 Communication rules

Recommended rules:

- Signal agents should not generally trigger irreversible actions
directly.

- Interpretation agents should emit scored findings, not commands.

- Decision agents should route tasks to execution agents.

- Execution agents must report outcomes back to memory and
observability layers.

- Sensitive-domain outputs should always pass through permission and
approval checks.

## 40.3 Event-driven coordination

The conversation already pointed toward event mesh thinking.
Practically, agent coordination should prefer:

- events,

- tasks,

- queues,

- resumable workflows,

- explicit handoff payloads,

- structured state.

Avoid hidden conversational spaghetti between agents.

## 40.4 Handoff contract idea

Each agent handoff should eventually include structured fields such as:

- `source_agent`

- `target_agent`

- `task_type`

- `objective`

- `context_refs`

- `risk_level`

- `confidence`

- `approval_required`

- `deadline_or_window`

- `expected_output_type`

## 40.5 Strategic benefit

A disciplined coordination model produces:

- clearer debugging,

- better observability,

- lower hallucinated coordination,

- safer autonomy,

- cleaner product behavior,

- and easier future embodiment.

## 40.6 Multi-agent philosophy to preserve

This project is not trying to maximize the number of agents. It is
trying to maximize the quality of coordination and the power of shared
memory.

That distinction is foundational.

---

# 41. Data Contracts, System Records, and Core Schemas

The current handover is still visionary, but builders will need a deeper
implementation frame. The most important next step is to think in terms
of system records and durable contracts.

## 41.1 Why this matters

Without clear records, Hotel Nexus will devolve into prompt chains and
tool calls without stable memory or governance.

The estate needs durable objects.

## 41.2 Candidate first-class records

The following records are strongly implied by the conversation and
should likely become top-level schema concepts.

### Person / identity record

Contains:

- canonical user identity,

- preferences,

- communication tone,

- routines,

- constraints,

- permission profile,

- health/privacy settings,

- embodiment preferences.

### Estate record

Contains:

- rooms,

- devices,

- zones,

- automations,

- environment capabilities,

- estate-level policies.

### Room record

Contains:

- room purpose,

- sensors,

- outputs/actuators,

- allowed interventions,

- ideal states,

- transition rules.

### State snapshot

Contains:

- inferred state values,

- confidence,

- contributing signals,

- timestamp,

- relevant environment context,

- recommended work profile.

### Memory item

Contains:

- source,

- content summary,

- provenance,

- entities,

- tags,

- temporal validity,

- retrieval ranking hints,

- permissions.

### Workflow run

Contains:

- workflow type,

- initiator,

- inputs,

- actions,

- approvals,

- outputs,

- failures,

- cost,

- result summary.

### Opportunity record

Contains:

- opportunity type,

- source signals,

- demand indicators,

- monetization estimate,

- build complexity,

- confidence,

- owner agent,

- status.

### Approval request

Contains:

- action summary,

- risk level,

- spend impact,

- evidence,

- reversible/irreversible flag,

- expiration window,

- user decision.

### Asset record

Contains:

- media/app/document identifier,

- source opportunity,

- production status,

- preview URL,

- variants,

- performance tracking.

### Thesis / memo record

Particularly for Capital Alpha and strategic product work.

## 41.3 Event types that likely matter

Examples:

- `state.updated`

- `transition.detected`

- `opportunity.created`

- `approval.requested`

- `approval.granted`

- `workflow.failed`

- `workflow.completed`

- `asset.rendered`

- `asset.deployed`

- `memory.written`

- `risk.flagged`

## 41.4 Suggested storage philosophy

The exact database stack is open, but the philosophy should be:

- strong canonical records,

- append-only audit for sensitive actions,

- event history for reconstruction,

- derived views for UI,

- permissions embedded deeply rather than bolted on.

## 41.5 Builder note

If the team does nothing else, define the top 10 record types early.
That will create architectural gravity and prevent later chaos.

---

# 42. Approval Architecture and Autonomy Classes

A major theme across the conversation is that Hotel Nexus should be
highly autonomous, but never recklessly autonomous.

The best way to preserve that intent is to define autonomy classes.

## 42.1 Proposed autonomy classes

### Class 0 — Observe only

The system can ingest, summarize, analyze, and prepare drafts, but
cannot take any external action.

### Class 1 — Reversible low-risk actions

The system can perform low-risk reversible actions such as:

- drafting,

- staging,

- internal tagging,

- queue preparation,

- internal environment adjustments within policy,

- report generation.

### Class 2 — Controlled operational actions

The system can take bounded operational actions such as:

- creating preview builds,

- provisioning temporary resources,

- running browser collection jobs,

- generating assets,

- creating approval packets.

### Class 3 — Spend-bound actions

The system can spend within predefined small thresholds or reserve
resources, but only under explicit policy.

### Class 4 — External publication or public-facing launch

Includes:

- public publishing,

- store submission finalization,

- domain purchase above threshold,

- irreversible brand actions.

Always approval-heavy.

### Class 5 — High-risk professional domain actions

Includes:

- legal actions,

- financial execution,

- medical-style recommendations with consequence,

- robotics actions affecting safety.

Highest evidence and approval threshold.

## 42.2 Approval packet design

Every meaningful approval should present:

- what is proposed,

- why it was proposed,

- confidence,

- source evidence,

- spend/time cost,

- risk level,

- reversibility,

- deadline/window,

- recommended decision.

## 42.3 Morning approvals philosophy

The system should never wake the founder with 40 ambiguous options. It
should compress approvals into:

- ranked decisions,

- clear tradeoffs,

- recommended default path,

- easiest yes/no/hold actions.

## 42.4 Domain-specific approval amplification

Health, legal, finance, and robotics should automatically increase
scrutiny. This can be implemented by policy rather than ad hoc prompt
wording.

## 42.5 Why this is essential

Autonomy without classes becomes either timid or dangerous. Autonomy
classes allow the estate to be productively bold while staying
governable.

---

# 43. Product Surfaces and User Experience Surfaces

Hotel Nexus should not be thought of as a single interface. It is a
multi-surface system.

## 43.1 Primary surfaces implied by the conversation

### Voice front door

The fastest and most natural input surface.

### Morning Command Board

The high-leverage daily decision surface.

### Workspace / operator dashboard

For reviewing agents, workflows, memory, risks, and approvals.

### Mobile companion

For quick capture, approvals, and state-aware guidance on the move.

### Ambient room layer

The house itself as interface via lights, sound, environment, and
presence.

### Notification surface

Digest-style nudges, approvals, and alerts.

### Future embodied surface

Robot/humanoid interface and telepresence layer.

## 43.2 Morning Command Board as flagship UX

This is likely the single most important early user-facing artifact.

It should become the place where the estate hands the founder a
compressed view of:

- body,

- money,

- moves,

- momentum,

- and critical approvals.

## 43.3 Approval UI principles

- fast,

- unambiguous,

- evidence-linked,

- preview-first,

- reversible where possible,

- one-tap or one-voice-command response.

## 43.4 Builder note on product discipline

Because the project is extremely expansive, builders should resist
turning every subsystem into a different product before the core
experience is coherent.

The early flagship experience should likely be:

1. voice capture,

2. memory continuity,

3. morning command board,

4. Night Shift outputs,

5. a small number of high-trust approval flows.

## 43.5 White-label implication

If the surfaces are well-separated, later white-label products become
easier:

- Creator Alpha can expose mostly Alpha OS and Media Foundry surfaces.

- State Alpha can expose readiness, routines, and command board
surfaces.

- Executive OS can expose operations, memory, and approvals.

---

# 44. 12- to 24-Month Strategic Build Narrative

This section is intentionally more strategic than technical. It
describes how the platform should compound if built well.

## 44.1 First horizon: make the estate useful daily

Success in the first horizon means the founder genuinely prefers using
Hotel Nexus for:

- capturing intent,

- managing complexity,

- remembering context,

- and waking up to prepared decisions.

If the system does not become a trusted daily operating surface, later
ambition will not matter.

## 44.2 Second horizon: make the estate economically generative

Next, the estate should prove it can generate leverage, not just
convenience.

Success indicators:

- surfaced content opportunities that convert,

- overnight production of useful assets,

- viable micro-app experiments,

- meaningful market insight summaries,

- reduced founder overhead.

## 44.3 Third horizon: make the estate ambient

Then the system should increasingly integrate with rooms, transitions,
environment, and passive sensing.

Success indicators:

- readiness-aware task shaping,

- room-state adaptation,

- lower founder friction during transitions,

- useful pre-threshold nudges,

- increasing sense that the environment is coordinated.

## 44.4 Fourth horizon: make the estate productizable

Once internal utility and economic leverage are real, external product
lines become more credible.

Success indicators:

- one or more narrow public SKUs,

- repeatable deployment patterns,

- white-label architecture,

- stable billing and permissions,

- opinionated but reusable workflows.

## 44.5 Fifth horizon: make the estate embodied

Only after the digital and ambient bodies are mature should physical
embodiment become a primary effort.

Success indicators:

- stable memory/persona layer,

- robotics-safe task abstraction,

- simulation-backed policies,

- clear separation between analysis and actuation,

- portable estate brain architecture.

## 44.6 The compounding vision

If executed correctly, the system compounds in four directions at once:

- it remembers more,

- senses more,

- builds more,

- and requires less founder activation energy.

That compounding is the real product.

## 44.7 Final strategic instruction to builders

Do not interpret the breadth of this handover as permission to build
everything simultaneously.

Interpret it as a mandate to build in a way that preserves the full
future.

That means:

- clear abstractions,

- durable records,

- permission boundaries,

- strong approval flows,

- mode-aware orchestration,

- event-driven coordination,

- and interfaces that reduce rather than increase friction.

Hotel Nexus should feel like a system that is always becoming more
itself.

---

# 45. Appendix A: Named Platforms, Frameworks, and Repositories

Grouped by role.

## Knowledge / Workspace / Memory

- NotebookLM

- Notion AI

- Mem0

- Graphiti

## Orchestration / Agents / Skills

- Ruflo / Rufflo

- LangGraph

- CrewAI

- AutoGen

- Microsoft Agent Framework

- OpenHands

- addyosmani/agent-skills

- VoltAgent/awesome-agent-skills

- Prompt-Engineering-Guide

- DSPy

- PydanticAI

## Voice / Real-Time / Multimodal

- LiveKit Agents

- Pipecat

## Automation / Actions / Workflows

- n8n

- Trigger.dev

- Temporal

- Activepieces

- browser-use

- Open Interpreter

- Flowise

- Sim

## Identity / Authorization

- Authentik

- OpenFGA

## Notifications / Experimentation / Messaging

- Novu

- Flagsmith

- NATS

## Data / Backend / App Factory

- Supabase

- Expo

- RevenueCat

## Content / Media / Creation

- ComfyUI

- Remotion

- HeyGen

## Home / Estate / Ambient

- Home Assistant

## Health / Interop / Biosensing

- FHIR

- Open mHealth

- OpenBCI

## Evaluation / Observability

- Langfuse

- OpenTelemetry

## Simulation / Robotics / Embodiment

- ROS 2

- NVIDIA Omniverse

- Isaac Sim

- NVIDIA Isaac GR00T

- LeRobot

- OpenVLA

## Finance / Accounting / Market Inputs

- Xero

- SEC EDGAR APIs

---

# 46. Appendix B: Source Links by Function

## Core knowledge and workspace

- https://notebooklm.google/

-
https://support.google.com/notebooklm/answer/16215270?hl=en&co=GENIE.Platform%3DDesktop

- https://www.notion.com/

- https://www.notion.com/product/ai

- https://www.notion.com/help/guides/category/ai

## Accounting / finance

- https://www.xero.com/us/accounting-software/app-integrations/

- https://apps.xero.com/

- https://www.xero.com/us/pricing-plans/

## GitHub agent ecosystems and skills

- https://github.com/ruvnet/ruflo

- https://github.com/ruvnet/ruflo/wiki

- https://github.com/langchain-ai/langgraph

- https://docs.langchain.com/oss/python/langgraph/workflows-agents

- https://github.com/crewaiinc/crewai

- https://github.com/crewAIInc/crewAI-examples

- https://github.com/microsoft/autogen

- https://github.com/microsoft/agent-framework

- https://github.com/OpenHands/openhands

- https://openhands.dev/

- https://github.com/addyosmani/agent-skills

- https://github.com/VoltAgent/awesome-agent-skills

- https://github.com/dair-ai/Prompt-Engineering-Guide

- https://www.promptingguide.ai/

## Voice / real-time multimodal

- https://github.com/livekit/agents

- https://docs.livekit.io/agents/

- https://github.com/pipecat-ai/pipecat

- https://docs.pipecat.ai/

## Workflow automation / low-code / long-running tasks

- https://github.com/n8n-io/n8n

- https://docs.n8n.io/

- https://github.com/triggerdotdev/trigger.dev

- https://trigger.dev/docs

- https://github.com/temporalio/temporal

- https://github.com/simstudioai/sim

- https://docs.sim.ai/

- https://github.com/flowiseai/flowise

- https://docs.flowiseai.com/

- https://github.com/activepieces/activepieces

## Health interoperability

- https://www.hl7.org/fhir/overview.html

- https://www.hl7.org/fhir/resourcelist.html

- https://www.openmhealth.org/

- https://www.openmhealth.org/docs/

## Memory / graph / gateway / observability

- https://github.com/BerriAI/litellm

- https://docs.litellm.ai/

- https://github.com/mem0ai/mem0

- https://mem0.ai/

- https://docs.mem0.ai/

- https://github.com/getzep/graphiti

- https://help.getzep.com/graphiti

- https://github.com/langfuse/langfuse

- https://langfuse.com/docs

- https://github.com/open-telemetry/opentelemetry-collector

- https://github.com/open-telemetry

## Identity / authorization / notifications / flags / messaging

- https://github.com/goauthentik/authentik

- https://docs.goauthentik.io/

- https://github.com/openfga/openfga

- https://github.com/novuhq/novu

- https://docs.novu.co/

- https://github.com/flagsmith/flagsmith

- https://github.com/nats-io/nats-server

## Document processing / structured AI development

- https://github.com/docling-project/docling

- https://docling-project.github.io/docling/

- https://github.com/Unstructured-IO/unstructured

- https://github.com/stanfordnlp/dspy

- https://dspy.ai/

- https://github.com/pydantic/pydantic-ai

## Backend / productization / app stack

- https://github.com/supabase/supabase

- https://supabase.com/docs

- https://supabase.com/auth

- https://supabase.com/docs/guides/functions

- https://github.com/expo/expo

- https://docs.expo.dev/

- https://docs.expo.dev/eas/

- https://docs.expo.dev/build/introduction/

- https://docs.expo.dev/submit/introduction/

- https://github.com/revenuecat/react-native-purchases

- https://github.com/revenuecat/purchases-ios

- https://github.com/RevenueCat/purchases-android

## Browser and system automation

- https://github.com/browser-use/browser-use

- https://docs.browser-use.com/

- https://github.com/vercel-labs/agent-browser

- https://github.com/openinterpreter/open-interpreter

- https://docs.openinterpreter.com/

## Home / ambient / local-first estate

- https://github.com/home-assistant/core

- https://www.home-assistant.io/

- https://github.com/home-assistant

- https://github.com/frenck/awesome-home-assistant

## Creation / visual / video / avatar systems

- https://github.com/Comfy-Org/ComfyUI

- https://www.comfy.org/

- https://github.com/Comfy-Org/ComfyUI-Manager

- https://github.com/ComfyUI-Workflow/awesome-comfyui

- https://github.com/remotion-dev/remotion

- https://www.remotion.dev/

- https://docs.heygen.com/

- https://developers.heygen.com/

- https://developers.heygen.com/reference/create-video

- https://developers.heygen.com/generate-avatar-video

## Content analytics and trends

- https://developers.google.com/youtube/analytics

- https://developers.google.com/youtube/analytics/metrics

- https://developers.google.com/youtube/reporting/v1/reports

- https://developers.google.com/youtube/reporting

- https://trends.google.com/trends/

## Market / filings / financial data

-
https://www.sec.gov/search-filings/edgar-application-programming-interfaces

- https://www.sec.gov/search-filings

- https://data.sec.gov/submissions/

- https://data.sec.gov/api/xbrl/companyfacts/

## Domain registration / launch

- https://developers.cloudflare.com/registrar/registrar-api/

- https://developers.cloudflare.com/registrar/

- https://www.cloudflare.com/products/registrar/

- https://www.namecheap.com/support/api/intro/

- https://www.namecheap.com/support/api/methods/

- https://www.namecheap.com/support/api/methods/domains/create/

- https://www.namecheap.com/support/api/methods/domains/check/

## Wi‑Fi / RF / ambient health sensing references

-
https://www.media.mit.edu/publications/smart-homes-that-monitor-breathing-and-heart-rate/

- https://pmc.ncbi.nlm.nih.gov/articles/PMC9830631/

- https://b5g-mints.eu/blog36/

- https://www.mdpi.com/1424-8220/24/7/2111

- https://pubmed.ncbi.nlm.nih.gov/35254990/

- https://ubicomplab.cs.washington.edu/publications/wibreathe/

- https://dl.acm.org/doi/full/10.1145/3582079

## Voice biomarkers / stress / speech health

- https://pmc.ncbi.nlm.nih.gov/articles/PMC8138221/

- https://www.sondehealth.com/stress

-
https://www.cambridge.org/core/journals/acta-neuropsychiatrica/article/voice-as-objective-biomarker-of-stress-association-of-speech-features-and-cortisol/DDA1DA4B356A5177C77377700F90A613

-
https://www.psychiatry.org/news-room/apa-blogs/vocal-biomarkers-for-mental-health

## OpenBCI / biosensing

- https://openbci.com/

- https://openbci.com/about

- https://docs.openbci.com/GettingStarted/Biosensing-Setups/EEGSetup/

## Indoor positioning / transitions / UWB

- https://navigine.com/open-source/

- https://github.com/jremington/UWB-Indoor-Localization_Arduino

## Robotics / humanoids / simulation

- https://www.ros.org/

- https://github.com/ros2

- https://developer.nvidia.com/isaac/gr00t

- https://github.com/NVIDIA/Isaac-GR00T

- https://www.nvidia.com/en-us/omniverse/

- https://docs.nvidia.com/omniverse/index.html

- https://developer.nvidia.com/isaac/sim

- https://github.com/huggingface/lerobot

- https://huggingface.co/docs/lerobot/index

- https://github.com/openvla/openvla

- https://openvla.github.io/

## Referenced YouTube inspiration links from discussion

- https://www.youtube.com/watch?v=KK_abJ3kfi4

- https://www.youtube.com/watch?v=rYJvb-A-AX0

- https://www.youtube.com/watch?v=pMWL1MEI-gE

- https://www.youtube.com/watch?v=m1CH-mgpdYg

---

# 47. Appendix C: Draft Build Order Summary

## Immediate foundation

- Identity and permission scaffolding

- Voice front door

- Memory spine

- Document refinery

- Orchestration core

- Approval framework

- Morning command board

## First agent wave

- Archivist

- General Manager

- Revenue Director

## Second wave

- Studio Head

- Finance Controller

## Third wave

- Medical Director

- General Counsel

- Estate Steward

## Parallel infrastructure threads

- Alpha/Night Shift framework

- App Foundry

- Synthetic Media Foundry

- Home/estate sensing foundation

- Evaluation and tracing layer

## Future threads

- Advanced ambient sensing

- state fusion maturity

- Shadow simulation

- robotics abstraction

- humanoid embodiment

---

# 48. Appendix D: Non-Negotiable Rules Summary

1. No public publishing without approval.

2. No capital deployment without approval.

3. No irreversible spend above thresholds without approval.

4. No high-confidence claim without evidence trail.

5. No automation without rollback path.

6. Every agent writes memory traces.

7. Every recommendation includes confidence and rationale.

8. Every overnight workflow produces a morning summary.

9. Health, legal, and finance require separate permission zones.

10. The system must remain ADHD-friendly: low-friction, low-overwhelm,
high-leverage.

11. Prefer a few upskilled super-agents over many weak agents.

12. State comes before task orchestration.

13. Architecture must remain extendable to ambient environments and
future humanoid embodiment.

---

# 49. Appendix E: Canonical System Records and Minimal Schemas

This appendix translates the strategic architecture into build-oriented
system records. These are not final database definitions, but they
should function as the minimum canonical object model for engineering
alignment.

## 49.1 Core principle

Every important action in Hotel Nexus should be representable as one or
more durable records plus one or more events. If a behavior cannot be
reduced to records, permissions, and events, it will be difficult to
audit, replay, simulate, or productize.

## 49.2 Recommended canonical records

### `person_profile`

**Purpose:** master record for the primary user/founder.

Suggested fields:

- `person_id`

- `display_name`

- `timezone`

- `preferred_language`

- `communication_style`

- `voice_preferences`

- `neurotype_notes`

- `working_preferences`

- `privacy_profile_id`

- `default_approval_profile_id`

- `risk_profile_id`

- `embodiment_profile_id`

- `created_at`

- `updated_at`

### `estate_profile`

**Purpose:** root record for the estate as a managed system.

Suggested fields:

- `estate_id`

- `estate_name`

- `estate_mode`

- `geography`

- `primary_timezone`

- `policy_bundle_id`

- `sensing_enabled`

- `robotics_enabled`

- `night_shift_enabled`

- `created_at`

- `updated_at`

### `room_profile`

**Purpose:** represent rooms/zones as first-class operational
entities.

Suggested fields:

- `room_id`

- `estate_id`

- `room_name`

- `room_type` (deep_work, recovery, creative, admin, mixed)

- `sensor_capabilities`

- `actuator_capabilities`

- `default_intervention_policy_id`

- `allowed_modes`

- `privacy_level`

- `created_at`

- `updated_at`

### `state_snapshot`

**Purpose:** time-bounded state estimate for human + environment.

Suggested fields:

- `snapshot_id`

- `person_id`

- `estate_id`

- `timestamp`

- `readiness_score`

- `arousal_score`

- `friction_score`

- `recovery_score`

- `overload_risk_score`

- `confidence_score`

- `work_suitability_profile`

- `source_signals[]`

- `environment_context_id`

- `explanation_summary`

### `transition_event`

**Purpose:** capture movement between states or zones.

Suggested fields:

- `transition_id`

- `person_id`

- `from_mode`

- `to_mode`

- `from_room_id`

- `to_room_id`

- `detected_at`

- `transition_quality`

- `intervention_triggered`

- `intervention_id`

- `confidence_score`

### `memory_item`

**Purpose:** normalized memory unit.

Suggested fields:

- `memory_id`

- `memory_type`

- `title`

- `summary`

- `source_uri`

- `source_type`

- `provenance`

- `entities[]`

- `topics[]`

- `temporal_valid_from`

- `temporal_valid_to`

- `permissions_scope`

- `embedding_ref`

- `graph_ref`

- `importance_score`

- `freshness_score`

### `workflow_run`

**Purpose:** durable execution record for jobs, graphs, or
orchestrations.

Suggested fields:

- `run_id`

- `workflow_type`

- `initiator_type`

- `initiator_id`

- `status`

- `priority`

- `started_at`

- `ended_at`

- `cost_estimate`

- `actual_cost`

- `approval_state`

- `result_summary`

- `failure_class`

- `trace_ref`

### `opportunity_record`

**Purpose:** normalized representation of monetizable opportunity.

Suggested fields:

- `opportunity_id`

- `opportunity_domain` (content, app, market, product, estate)

- `title`

- `hypothesis`

- `source_signals[]`

- `demand_score`

- `supply_gap_score`

- `monetization_score`

- `build_complexity_score`

- `confidence_score`

- `recommended_asset_types[]`

- `status`

- `owner_agent`

### `asset_record`

**Purpose:** any created output.

Suggested fields:

- `asset_id`

- `asset_type` (video, script, thumbnail, app, landing_page, memo,
report)

- `source_opportunity_id`

- `status`

- `preview_url`

- `production_metadata`

- `variant_group_id`

- `approval_request_id`

- `performance_metrics_ref`

### `approval_request`

**Purpose:** standardized approval object.

Suggested fields:

- `approval_request_id`

- `requested_action_type`

- `requested_by_agent`

- `risk_tier`

- `autonomy_class`

- `spend_ceiling`

- `reversible`

- `expires_at`

- `evidence_refs[]`

- `recommended_decision`

- `decision_status`

- `decision_at`

- `decision_by`

### `integration_profile`

**Purpose:** per-system connector contract.

Suggested fields:

- `integration_id`

- `provider_name`

- `integration_domain`

- `credential_owner`

- `permission_scope`

- `environment`

- `rate_limit_notes`

- `sync_strategy`

- `last_health_check_at`

- `status`

## 49.3 Minimal derived views

Engineering should expect to build derived views rather than overload
canonical tables:

- `morning_command_board_view`

- `night_shift_summary_view`

- `state_timeline_view`

- `opportunity_pipeline_view`

- `approval_queue_view`

- `asset_factory_dashboard_view`

- `capital_watchlist_brief_view`

## 49.4 Design instruction

If the first implementation cuts corners, it should cut on UI polish
before it cuts on record quality. Weak records will poison everything
later.

---

# 50. Appendix F: Event Taxonomy, Queues, and Workflow Contracts

This appendix defines the operational nervous system. The estate should
be event-driven wherever possible.

## 50.1 Event classes

### State events

- `state.snapshot.created`

- `state.risk_changed`

- `state.readiness_band_changed`

- `state.overload_risk_detected`

### Transition events

- `transition.detected`

- `transition.intervention_recommended`

- `transition.intervention_executed`

### Memory events

- `memory.ingested`

- `memory.normalized`

- `memory.promoted`

- `memory.deprecated`

- `memory.linked_to_graph`

### Workflow events

- `workflow.requested`

- `workflow.started`

- `workflow.paused_for_approval`

- `workflow.resumed`

- `workflow.failed`

- `workflow.completed`

### Opportunity events

- `opportunity.detected`

- `opportunity.scored`

- `opportunity.promoted_to_build`

- `opportunity.rejected`

### Asset events

- `asset.draft_created`

- `asset.render_requested`

- `asset.render_completed`

- `asset.packaged_for_approval`

- `asset.published`

### Approval events

- `approval.requested`

- `approval.expired`

- `approval.approved`

- `approval.rejected`

- `approval.overridden`

### Integration events

- `integration.sync_started`

- `integration.sync_failed`

- `integration.rate_limited`

- `integration.credential_expiring`

## 50.2 Queue design recommendation

Suggested queue families:

- `state-low-latency`

- `memory-ingestion`

- `night-shift-batch`

- `asset-render`

- `approval-awaiting`

- `integration-sync`

- `robotics-sim`

- `observability-export`

## 50.3 Workflow contract pattern

Every workflow should expose at minimum:

- `workflow_name`

- `trigger_type`

- `input_schema`

- `output_schema`

- `approval_policy`

- `side_effects`

- `rollback_strategy`

- `observability_requirements`

- `owner_team`

## 50.4 Mandatory workflow families

### A. Morning Command Board generation

Trigger:

- scheduled daily by timezone

- manual on demand

Inputs:

- latest `state_snapshot`

- open approvals

- top opportunities

- risk alerts

- momentum summaries

Outputs:

- one ranked board object

- one concise narrative summary

### B. Night Shift content sweep

Trigger:

- nightly schedule

Inputs:

- YouTube analytics

- trend signals

- competitor summaries

- prior asset performance

Outputs:

- scored opportunities

- build packet candidates

- approval-ready assets or briefs

### C. Night Shift capital sweep

Trigger:

- nightly schedule

Inputs:

- filings

- watchlist set

- market context

- previous conviction map

Outputs:

- brief

- risk changes

- flagged names

- memos

### D. App Foundry launch candidate

Trigger:

- promoted opportunity + sufficient confidence

Inputs:

- opportunity record

- template selection

- monetization hypothesis

- domain naming policy

Outputs:

- scaffolded app repo

- preview deployment

- launch packet

## 50.5 Workflow philosophy

A workflow is not complete when it “finishes running.” It is complete
when:

- outcomes are summarized,

- traces are stored,

- state is updated,

- memory is written back,

- and any needed approval is queued.

---

# 51. Appendix G: Agent Operational Specs and Handoffs

This appendix converts agent identities into operational
responsibilities.

## 51.1 General Manager

**Mandate:** orchestrate the founder-facing operating day.

Primary inputs:

- state snapshot

- open loops

- approvals queue

- calendar context

- top opportunities

Primary outputs:

- morning board

- daily priority stack

- escalation summary

- delegation tasks

Must never do without approval:

- irreversible external actions

- spend beyond policy

Must always write back:

- what was prioritized

- what was deferred

- why

## 51.2 Archivist

**Mandate:** preserve coherence and evidence.

Primary inputs:

- documents

- meeting notes

- generated outputs

- workflow traces

Primary outputs:

- normalized memory items

- source-grounded retrieval sets

- contradiction flags

- hot/warm/cold memory placement

Failure mode to guard against:

- over-compression that destroys nuance.

## 51.3 Revenue Director

**Mandate:** detect and rank commercial opportunity.

Primary inputs:

- trends

- analytics

- competitor patterns

- product signals

Primary outputs:

- opportunity records

- monetization hypotheses

- build promotions

## 51.4 Studio Head

**Mandate:** convert opportunity into media assets.

Primary inputs:

- opportunity records

- brand rules

- channel strategy

- prior performance

Primary outputs:

- scripts

- production packs

- rendered assets

- distribution proposals

## 51.5 Finance Controller

**Mandate:** interpret finance and operating economics.

Primary inputs:

- accounting data

- cash flow data

- runway and expense data

- capital desk findings

Primary outputs:

- financial summaries

- anomaly flags

- forecasts

- suggested reviews

## 51.6 Medical Director

**Mandate:** interpret health-related patterns conservatively.

Primary inputs:

- labs

- health records

- wearable/biofeedback

- environmental and state context

Primary outputs:

- trend summaries

- reminder logic

- pattern flags

- escalation recommendations

Constraint:

- never present unsupported certainty.

## 51.7 General Counsel

**Mandate:** surface obligations and risk.

Primary inputs:

- contracts

- legal documents

- obligations calendar

- policy library

Primary outputs:

- obligation summaries

- clause flags

- deadline alerts

- legal risk notes

## 51.8 Estate Steward

**Mandate:** coordinate estate operations and room logic.

Primary inputs:

- room profiles

- device state

- routines

- occupant context

Primary outputs:

- room interventions

- estate status summaries

- routine recommendations

## 51.9 Handoff matrix

| From | To | Typical handoff |

| ----------------- | --------------- |
-------------------------------------------- |

| Revenue Director | Studio Head | opportunity promoted to content
build |

| Revenue Director | App Foundry | opportunity promoted to product
experiment |

| State Engine | General Manager | readiness and workload
recommendation |

| Medical Director | General Manager | cautionary state modifier for
work intensity |

| Filing Reader | Portfolio Voice | filing findings requiring
simplified summary |

| Archivist | All agents | grounded retrieval context |

| Approval Governor | Founder UI | approval packet |

## 51.10 Builder instruction

For every agent, engineering should eventually maintain a short
operational contract containing:

- mission,

- allowed tools,

- forbidden actions,

- required evidence standards,

- expected outputs,

- write-back rules,

- escalation rules.

---

# 52. Appendix H: Approval Matrix, Risk Tiers, and Spend Controls

This appendix turns governance into an implementable control plane.

## 52.1 Risk tiers

### Tier 1 — low consequence

Examples:

- internal summaries

- draft generation

- tagging

- internal queueing

### Tier 2 — moderate operational consequence

Examples:

- preview deployment

- asset rendering

- low-cost temporary resource creation

### Tier 3 — financial or brand consequence

Examples:

- domain reservation

- paid API/rendering above thresholds

- public scheduling of content

### Tier 4 — regulated or irreversible consequence

Examples:

- legal-sensitive actions

- health-sensitive recommendations framed too strongly

- public publishing

- production store release

- trading or capital movement

- physical robot execution in risky contexts

## 52.2 Spend control model

Recommended spend policy fields:

- `per_action_soft_limit`

- `per_action_hard_limit`

- `night_shift_total_limit`

- `monthly_experiment_budget`

- `domain_purchase_limit`

- `media_render_limit`

- `model_spend_limit`

## 52.3 Approval routing examples

| Action | Default class | Approval requirement |

| ----------------------------------- | ------------- |
-------------------------------------------------------------- |

| Generate internal research memo | Class 1 | none |

| Render HeyGen draft asset | Class 2 | none if budget safe |

| Purchase domain under low threshold | Class 3 | optional depending
on policy |

| Publish video publicly | Class 4 | explicit approval required |

| Submit app to production store | Class 4 | explicit approval
required |

| Execute trade | Class 5 | explicit approval + external confirmation
strongly recommended |

## 52.4 Escalation rule

Any action with low confidence and high consequence should escalate
automatically, even if the raw autonomy class might otherwise allow it.

## 52.5 Golden rule

Low confidence should reduce autonomy. High consequence should reduce
autonomy. Only high-confidence, low-consequence, reversible actions
should become highly automated.

---

# 53. Appendix I: Night Shift Runbook and Morning Board Contract

This appendix is the clearest expression of the overnight estate
behavior.

## 53.1 Night Shift phases

### Phase 0 — guardrail check

Before any night run:

- validate integrations

- validate budget ceilings

- validate approval policy snapshots

- validate backlog priorities

- validate observability sink health

### Phase 1 — sensing and synchronization

- refresh state inputs

- ingest late-arriving data

- sync integrations

- detect failures from prior runs

### Phase 2 — hunting

- run niche detection

- run market scans

- run filing scans

- run anomaly detection

### Phase 3 — promotion logic

- score opportunities

- discard weak signals

- promote strongest candidates to build paths

### Phase 4 — build and package

- scripts

- app scaffolds

- media renders

- memos

- briefs

- launch packets

### Phase 5 — approval compression

- compress all outcomes into ranked packets

- deduplicate overlapping recommendations

- produce one coherent morning board

## 53.2 Morning Board contract

The board should be a first-class object, not a loose UI assembly.

Suggested fields:

- `board_id`

- `generated_at`

- `state_summary`

- `body_section`

- `money_section`

- `moves_section`

- `momentum_section`

- `critical_alerts[]`

- `approval_packets[]`

- `recommended_order`

- `narrative_summary`

## 53.3 Night Shift failure handling

If critical integrations fail, the estate should degrade gracefully:

- do not pretend confidence

- mark missing signals

- still deliver a partial board

- explicitly say what was unavailable

## 53.4 Quality bar

The founder should wake up feeling:

- reduced burden,

- increased clarity,

- fewer decisions,

- more leverage.

If the board increases overwhelm, Night Shift failed even if the
workflows technically succeeded.

---

# 54. Appendix J: Integration Registry, Secrets, and Permission
Ownership

This appendix exists because the platform will touch many external
systems.

## 54.1 Integration registry expectation

Every external system should have an internal record specifying:

- owner team

- credential storage location

- scopes granted

- read/write capability

- budget implications

- failure behavior

- renewal cadence

- data sensitivity

## 54.2 Suggested integration ownership examples

| Integration | Primary use | Sensitivity | Write capability |

| -------------------- | ----------------------- | ----------- |
-------------------------------- |

| Notion AI | workspace context | medium | yes |

| NotebookLM | source-grounded reading | medium | limited |

| Xero | accounting insights | high | preferably read-mostly
initially |

| YouTube Analytics | content performance | medium | read |

| SEC EDGAR | market filings | low | read |

| HeyGen | asset rendering | medium | write/render |

| Supabase | product backend | high | write |

| Home Assistant | estate automation | high | write |

| OpenBCI / biosensing | health-state inputs | very high | read |

## 54.3 Secret handling principles

- segregate by environment

- segregate by domain sensitivity

- keep provider keys out of prompts wherever possible

- prefer short-lived tokens when supported

- log access without logging raw secrets

## 54.4 Permission ownership rule

No integration should be attached without an identified human owner and
a declared policy bundle.

---

# 55. Appendix K: Environments, Release Rings, SLOs, and Observability
Targets

## 55.1 Recommended environments

- `local-dev`

- `shared-dev`

- `staging`

- `founder-prod`

- `white-label-prod` (future)

## 55.2 Release rings

### Ring 0

Internal engineering only.

### Ring 1

Founder sandbox / shadow mode only.

### Ring 2

Founder live but approval-heavy.

### Ring 3

Trusted operator or white-label pilot.

## 55.3 Minimum observability targets

Every critical workflow should emit:

- start/end status

- duration

- cost

- failed step

- approval state

- evidence refs

- output refs

- memory write-back status

## 55.4 Example SLO-style targets for early maturity

These are directional rather than final:

- Morning Board delivered before founder wake window: **99% of
scheduled days**

- Night Shift critical failure rate: **\<5%**

- Approval packet missing evidence rate: **\<1%**

- Memory write-back completion on critical workflows: **>99%**

- Duplicate opportunity packets in same board: **\<10%**

## 55.5 Product quality targets

- board must be skimmable in under 3 minutes

- top recommendation must be understandable in under 30 seconds

- approvals must be executable in one tap/click/voice phrase

---

# 56. Appendix L: Immediate Engineering Backlog, Team Topology, and
Delivery Cadence

This appendix is intended to make the handover executable.

## 56.1 Recommended initial engineering workstreams

### Workstream 1 — Core platform spine

- identity

- permissions

- canonical records

- event bus

- workflow runtime

### Workstream 2 — Memory and ingestion

- document refinery

- memory normalization

- temporal linking

- retrieval interfaces

### Workstream 3 — Founder UX

- voice front door

- morning board

- approvals UI

- operator dashboard skeleton

### Workstream 4 — Alpha OS

- content opportunity ingestion

- scoring models

- capital desk ingest and memo generation

- build promotion logic

### Workstream 5 — Foundries

- media pipeline

- app scaffold pipeline

- domain and deployment hooks

### Workstream 6 — State OS

- initial state model

- basic friction telemetry

- environmental inputs

- transition detection

## 56.2 Suggested team topology

Even a small team should think in functional ownership terms:

- platform/orchestration

- memory/data

- founder product UX

- alpha/foundry systems

- sensing/state systems

- security/governance/observability

## 56.3 Suggested first 6 sprints

### Sprint 1

- define canonical records

- establish event taxonomy

- set up workflow runtime skeleton

- stand up approval object

### Sprint 2

- implement Archivist v1

- implement memory ingestion path

- implement source provenance handling

### Sprint 3

- implement General Manager v1

- implement Morning Board v1

- implement approval queue UI

### Sprint 4

- implement Revenue Director v1

- ingest trend/content signals

- produce first opportunity scoring pipeline

### Sprint 5

- implement Studio Head draft pipeline

- generate scripts and build packets

- integrate first render provider

### Sprint 6

- implement Night Shift scheduler

- run end-to-end overnight trial

- produce first complete founder morning experience

## 56.4 Definition of “v1 real”

Hotel Nexus v1 should be considered real when the founder can:

- speak intent naturally,

- trust the system to remember,

- wake up to a genuinely useful board,

- review ranked approvals,

- and see at least one meaningful overnight build/output per cycle.

That is the threshold where the estate stops being a concept and starts
being a lived operating system.

---

# 57. Appendix M: Proposed Repository Topology and Service Boundaries

This appendix translates the architecture into an initial codebase
shape. The exact structure may evolve, but engineering should begin from
an explicit repository strategy rather than letting integrations,
prompts, and workflows accumulate without boundaries.

## 57.1 Repository philosophy

Recommended default: **start as a well-governed monorepo with strong
package boundaries**, not as many disconnected repositories.

Why:

- shared schemas and event definitions will change quickly,

- agent contracts need centralized versioning,

- frontend and backend product surfaces are tightly coupled early,

- integration adapters will be reused across multiple workflows,

- and a monorepo better supports platform coherence while the system is
still architecturally fluid.

A future split into multiple repositories can happen later for scaling,
compliance, or white-label separation.

## 57.2 Suggested top-level repository layout

```text

hotel-nexus/

apps/

founder-web/

founder-mobile/

operator-console/

ambient-hub/

services/

api-gateway/

identity-service/

memory-service/

state-service/

workflow-service/

approval-service/

opportunity-service/

asset-foundry-service/

capital-service/

estate-service/

integration-service/

notification-service/

observability-service/

packages/

domain-models/

event-contracts/

api-contracts/

ui-design-system/

agent-contracts/

policy-engine/

prompts-and-skills/

provider-adapters/

common-telemetry/

testing-fixtures/

infrastructure/

terraform/

cloud/

queues/

secrets/

monitoring/

workflows/

night-shift/

morning-board/

content-alpha/

capital-alpha/

app-foundry/

state-fusion/

data-models/

migrations/

warehouse/

views/

graph/

docs/

architecture/

runbooks/

product-specs/

security/

```

## 57.3 Service boundary recommendation

### `api-gateway`

Purpose:

- unify founder-facing APIs,

- enforce auth and tenancy,

- route to domain services,

- provide a single stable surface for web/mobile/operator clients.

### `identity-service`

Purpose:

- users,

- sessions,

- identities,

- estate membership,

- role resolution,

- policy bundle lookup.

### `memory-service`

Purpose:

- memory ingestion,

- normalization,

- retrieval,

- provenance,

- graph linking,

- summarization write-back.

### `state-service`

Purpose:

- state snapshots,

- transition events,

- readiness scoring,

- environmental context,

- friction telemetry processing.

### `workflow-service`

Purpose:

- durable job execution,

- scheduled jobs,

- resumable graphs,

- human-in-the-loop pauses,

- workflow tracing.

### `approval-service`

Purpose:

- approval packets,

- routing,

- expiration,

- decisions,

- escalation.

### `opportunity-service`

Purpose:

- trend ingestion,

- scoring,

- ranking,

- promotion to build paths,

- backlog of economic bets.

### `asset-foundry-service`

Purpose:

- scripts,

- media generation,

- app scaffolds,

- deployment packaging,

- preview asset registry.

### `capital-service`

Purpose:

- watchlists,

- filings ingestion,

- memo generation,

- thesis state,

- catalyst/risk change tracking.

### `estate-service`

Purpose:

- rooms,

- devices,

- estate modes,

- actuator policies,

- transition-aware room logic.

### `integration-service`

Purpose:

- connector lifecycle,

- adapter health,

- sync status,

- retries,

- credential metadata,

- rate limit management.

### `notification-service`

Purpose:

- digests,

- push/email/chat/in-app routing,

- attention budgets,

- delivery policy by mode.

### `observability-service`

Purpose:

- workflow traces,

- metrics rollups,

- quality signals,

- failure classification,

- evaluation exports.

## 57.4 Package strategy

Shared packages should be versioned and treated as product-critical:

- `domain-models`: canonical TypeScript/Python DTOs or equivalent

- `event-contracts`: topic names, payload shapes, version metadata

- `api-contracts`: REST/GraphQL/OpenAPI definitions

- `agent-contracts`: mission, input, output, escalation, forbidden
actions

- `policy-engine`: autonomy classes, approval rules, budget limits

- `provider-adapters`: standard interfaces and provider-specific
implementations

- `prompts-and-skills`: versioned prompt packs, skill markdown,
evaluation references

## 57.5 Repo boundary rules

- No workflow should define its own ad hoc event names outside
`event-contracts`.

- No service should silently write to another service’s tables.

- No provider-specific response shape should leak into product APIs.

- No sensitive-domain logic should bypass `approval-service` or
`policy-engine`.

- No UI should directly depend on raw provider payloads.

## 57.6 Build-ready decision

If the team must choose one immediate structural bet, it should choose:

**monorepo + strong contracts + domain services + event-driven
orchestration.**

---

# 58. Appendix N: Core API Surfaces and Interface Contracts

This appendix describes the high-level application interface surfaces
engineering can scope immediately.

## 58.1 API style guidance

Recommended pattern:

- external/product APIs: REST or GraphQL with typed contracts,

- internal service-to-service APIs: typed RPC or REST,

- workflow triggers: command objects,

- async side effects: event bus,

- real-time founder UI updates: WebSocket / realtime channels.

The main architectural point is not the protocol choice; it is that
**commands, queries, and events should be intentionally separated**.

## 58.2 Founder-facing domains

### A. Identity and session endpoints

Examples:

- `POST /auth/session`

- `GET /me`

- `GET /estate/context`

- `GET /modes/current`

### B. Morning Board endpoints

Examples:

- `GET /boards/today`

- `POST /boards/generate`

- `GET /boards/{board_id}`

- `POST /boards/{board_id}/acknowledge`

### C. Approval endpoints

Examples:

- `GET /approvals`

- `GET /approvals/{approval_request_id}`

- `POST /approvals/{approval_request_id}/approve`

- `POST /approvals/{approval_request_id}/reject`

- `POST /approvals/{approval_request_id}/snooze`

### D. Memory endpoints

Examples:

- `POST /memory/ingest`

- `GET /memory/search`

- `GET /memory/{memory_id}`

- `POST /memory/{memory_id}/promote`

- `GET /memory/timeline`

### E. State endpoints

Examples:

- `GET /state/current`

- `GET /state/timeline`

- `POST /state/check-in`

- `GET /transitions/recent`

- `GET /work-suitability/current`

### F. Opportunity endpoints

Examples:

- `GET /opportunities`

- `GET /opportunities/top`

- `POST /opportunities/scan`

- `POST /opportunities/{opportunity_id}/promote`

- `POST /opportunities/{opportunity_id}/archive`

### G. Asset / Foundry endpoints

Examples:

- `POST /foundry/content/build`

- `POST /foundry/apps/build`

- `GET /assets/{asset_id}`

- `GET /assets/{asset_id}/preview`

- `POST /assets/{asset_id}/package-for-approval`

### H. Estate endpoints

Examples:

- `GET /estate/rooms`

- `GET /estate/rooms/{room_id}`

- `POST /estate/mode`

- `POST /estate/interventions/preview`

- `POST /estate/interventions/execute`

### I. Capital endpoints

Examples:

- `GET /capital/watchlist`

- `POST /capital/watchlist/refresh`

- `GET /capital/memos/latest`

- `GET /capital/filings/recent`

- `POST /capital/theses/{thesis_id}/re-score`

## 58.3 Internal command contracts

Suggested command objects:

- `GenerateMorningBoardCommand`

- `RunNightShiftContentSweepCommand`

- `RunNightShiftCapitalSweepCommand`

- `PromoteOpportunityToBuildCommand`

- `RenderSyntheticMediaCommand`

- `ScaffoldAppExperimentCommand`

- `RequestApprovalCommand`

- `ExecuteEstateInterventionCommand`

- `GenerateStateSnapshotCommand`

- `IngestMemorySourcesCommand`

## 58.4 Query contract principles

Every query response should clearly identify:

- canonical ID,

- freshness timestamp,

- confidence or completeness indicator where relevant,

- evidence/provenance refs for sensitive domains,

- whether fields are directly observed, inferred, or generated.

## 58.5 Example response envelope

```json

{

"data": {},

"meta": {

"generated_at": "2026-06-04T08:00:00Z",

"confidence": 0.82,

"provenance_refs": ["memory_123", "workflow_456"],

"completeness": "partial"

},

"errors": []

}

```

## 58.6 Real-time surface contract

Real-time updates should be pushed for:

- approval queue changes,

- workflow progress,

- render completion,

- board generation,

- integration failures requiring attention,

- Night Shift completion.

## 58.7 Interface governance

The team should maintain:

- OpenAPI or equivalent definitions,

- versioned event schemas,

- contract tests for critical consumers,

- and a changelog for any breaking interface changes.

---

# 59. Appendix O: Data Platform, Retrieval, and Indexing Architecture

This appendix turns memory and analytics ambition into concrete storage
thinking.

## 59.1 Recommended storage layers

Hotel Nexus should treat data as multi-layered rather than forcing all
concerns into one database.

### Layer 1 — operational relational store

Use for:

- identities,

- approvals,

- workflows,

- opportunities,

- assets,

- room/device records,

- integration metadata.

### Layer 2 — object/file storage

Use for:

- raw source files,

- rendered assets,

- transcripts,

- exports,

- generated reports,

- media artifacts.

### Layer 3 — vector/semantic index

Use for:

- retrieval augmentation,

- semantic memory recall,

- clustering,

- contextual grounding.

### Layer 4 — graph / temporal knowledge layer

Use for:

- entities,

- relationships,

- changing truths over time,

- state relationships,

- decision lineage,

- person-estate-asset-context links.

### Layer 5 — analytical warehouse / marts

Use for:

- trend analysis,

- historical performance,

- opportunity scoring features,

- board analytics,

- failure analytics,

- white-label reporting later.

## 59.2 Retrieval architecture recommendation

Retrieval should not be a single search function. It should support at
least four modes:

### A. Source-grounded retrieval

For:

- legal,

- health,

- finance,

- high-confidence work.

Behavior:

- prioritize provenance,

- prefer exact source snippets,

- surface uncertainty.

### B. Operational context retrieval

For:

- daily execution,

- founder preferences,

- recent tasks,

- current opportunities,

- active approvals.

Behavior:

- prioritize freshness and relevance to current mode.

### C. Narrative retrieval

For:

- summaries,

- weekly reviews,

- history of decisions,

- storytelling of progress.

Behavior:

- prioritize chronology and theme continuity.

### D. State retrieval

For:

- readiness comparisons,

- transition history,

- environmental-state correlations,

- drift detection.

Behavior:

- prioritize time-series integrity and confidence.

## 59.3 Memory pipeline stages

1. ingest raw source

2. parse/normalize

3. classify

4. chunk or structure

5. extract entities and topics

6. attach permissions and provenance

7. embed and index

8. optionally link into graph

9. assign memory tier

10. expose via retrieval API

## 59.4 Data marts engineering should plan for early

- `morning_board_metrics_mart`

- `opportunity_performance_mart`

- `night_shift_run_mart`

- `approval_latency_mart`

- `state_and_friction_mart`

- `content_asset_outcome_mart`

- `capital_signal_change_mart`

## 59.5 Retention philosophy

Not all data should be treated equally.

Suggested classes:

- ephemeral operational logs,

- medium-term workflow traces,

- long-term personal memory,

- long-term regulatory/sensitive records,

- derived analytics safe for aggregation.

## 59.6 Engineering instruction

The data team should define early:

- canonical IDs,

- time standards,

- lineage metadata,

- deletion and redaction paths,

- and how cross-store references are resolved.

Without this, the estate cannot mature into a trustworthy memory system.

---

# 60. Appendix P: Founder Product Surface Specification

This appendix turns product vision into surface-level scoping for design
and frontend engineering.

## 60.1 Primary founder surfaces

### Surface 1 — Morning Command Board

Mission:

- compress the estate into one high-leverage daily view.

Required modules:

- body/state summary,

- money/opportunity summary,

- moves/recommended actions,

- momentum/learning summary,

- approvals queue,

- critical alerts.

Minimum success criterion:

- founder can process it in under 3 minutes.

### Surface 2 — Voice Front Door

Mission:

- capture rough intent with minimal friction.

Required behaviors:

- accept messy speech,

- infer likely category,

- route to structured commands or draft workflows,

- ask clarification only when necessary,

- preserve transcript plus interpreted intent.

### Surface 3 — Approval Center

Mission:

- make approvals fast, legible, and safe.

Required modules:

- ranked approvals,

- risk tier badges,

- spend visibility,

- evidence links,

- preview actions,

- approve/reject/snooze.

### Surface 4 — Memory and Context Console

Mission:

- let the founder inspect what the estate knows.

Required modules:

- memory search,

- timeline,

- source links,

- entity graph views,

- contradictions / stale items,

- recent ingest status.

### Surface 5 — Opportunity and Foundry Workspace

Mission:

- move from detected opportunity to draft asset or app.

Required modules:

- opportunity list,

- scoring details,

- build promotion controls,

- asset previews,

- performance feedback loops.

### Surface 6 — Estate and Room Console

Mission:

- visualize and tune ambient/estate logic.

Required modules:

- rooms,

- sensors,

- interventions,

- mode settings,

- transition logic previews.

## 60.2 Navigation recommendation

A practical founder web navigation could initially be:

- Home

- Approvals

- Memory

- Opportunities

- Foundry

- Estate

- Capital

- Settings

## 60.3 Mobile priority order

Mobile should focus on:

1. Morning Board

2. approvals

3. quick voice capture

4. key alerts

5. compact opportunity summaries

## 60.4 UI state annotations

The UI should visibly distinguish:

- observed facts,

- inferred states,

- generated recommendations,

- simulated outcomes,

- pending external actions.

This is essential for trust.

## 60.5 ADHD-specific UI rules

- default to ranked lists, not blank canvases,

- keep calls to action singular or tightly prioritized,

- avoid dense dashboard clutter on the home surface,

- offer “smallest next step” framing,

- support voice-first escape hatches,

- make snooze/defer an intentional first-class action.

---

# 61. Appendix Q: External Provider Adapter Strategy

This appendix makes external dependency management concrete.

## 61.1 Adapter philosophy

Each provider should be wrapped behind an internal adapter contract so
the rest of the estate depends on Hotel Nexus abstractions, not
vendor-specific shapes.

## 61.2 Standard adapter interface

Each adapter should ideally implement methods or equivalents for:

- `healthCheck()`

- `getCapabilities()`

- `validateCredentials()`

- `sync()`

- `fetch()`

- `create()`

- `update()`

- `execute()`

- `normalizeResponse()`

- `classifyFailure()`

Not every provider will implement all methods, but the pattern should
hold.

## 61.3 Priority adapters to scope first

### Workspace / memory

- Notion

- NotebookLM-facing ingestion helpers

- document parsers (Docling / Unstructured style layer)

### Opportunity / content

- YouTube Analytics

- YouTube Reporting

- Google Trends access layer

- browser automation adapter

### Finance / capital

- SEC EDGAR

- Xero

### Media / foundry

- HeyGen

- render/pipeline tools

- future ComfyUI / Remotion bridges

### Estate / sensing

- Home Assistant

- room/environment sensors

- RF/Wi-Fi sensing ingest layer

- optional OpenBCI/biosensing bridge

## 61.4 Adapter normalization principle

Provider payloads should be normalized into internal objects such as:

- `analytics_signal`

- `filing_signal`

- `trend_signal`

- `render_job`

- `room_telemetry`

- `finance_ledger_snapshot`

- `health_signal`

## 61.5 Adapter quality requirements

Every adapter should support:

- retries,

- rate limit awareness,

- partial failure reporting,

- health status exposure,

- observability hooks,

- safe redaction in logs.

## 61.6 Provider switching rule

The estate should assume providers can change. This is especially
important for:

- video generation,

- LLM/model routing,

- browser automation,

- vector stores,

- notifications,

- and auth/identity layers over time.

---

# 62. Appendix R: Delivery Pipeline, Testing Strategy, and Migration
Discipline

This appendix exists so the system can scale without turning brittle.

## 62.1 Testing stack recommendation

Engineering should treat Hotel Nexus as requiring multiple testing
layers.

### Unit tests

For:

- scoring logic,

- policy rules,

- parsers,

- adapters,

- DTO validation,

- utility libraries.

### Contract tests

For:

- service APIs,

- event schemas,

- provider adapters,

- frontend/backend interface guarantees.

### Workflow tests

For:

- Night Shift runs,

- approval pauses,

- retries,

- rollback paths,

- degraded-mode behavior.

### Evaluation tests

For:

- prompt/skill quality,

- retrieval grounding,

- board usefulness,

- summarization fidelity,

- recommendation quality.

### End-to-end tests

For:

- voice capture to workflow creation,

- opportunity to asset preview,

- nightly run to morning board,

- approval to publish/package transitions.

## 62.2 Migration discipline

For operational records, migrations should be:

- versioned,

- reviewed,

- reversible where possible,

- and tied to release notes.

For event contracts, versioning should include:

- topic version,

- deprecation windows,

- consumer compatibility notes.

## 62.3 Prompt and skill versioning

Prompt packs and agent skills should be treated like code:

- versioned,

- changelogged,

- evaluated,

- reversible.

## 62.4 Staging discipline

Before risky live rollout, the team should run:

- sandbox integrations,

- shadow mode workflows,

- spend-capped provider tests,

- and founder-only release ring validation.

## 62.5 Release checklist for high-consequence features

- contracts updated

- migrations applied

- policy reviewed

- spend controls set

- observability active

- rollback path documented

- founder approval obtained if required

---

# 63. Appendix S: Ambient, Estate, and Robotics Interface Envelope

This appendix gives engineering a practical boundary around
physical-world interaction.

## 63.1 Interface classes

### Class A — passive sensing

Examples:

- RF/Wi-Fi sensing ingest

- voice biomarker capture

- environmental telemetry

- friction telemetry

### Class B — low-risk environment actuation

Examples:

- lighting changes

- soundscape changes

- notification routing changes

- room mode changes

### Class C — moderate-risk environment actuation

Examples:

- locking/unlocking certain estate automations

- device power actions

- HVAC or environmental overrides

### Class D — robotics / physical actuation

Examples:

- humanoid task execution

- telepresence movement

- physical manipulation

## 63.2 Safety principle

As the system moves from Class A toward Class D, required confidence,
policy strictness, observability, and approval all increase.

## 63.3 Simulation-first instruction

Any non-trivial physical policy should be simulated or previewed before
live deployment where feasible.

This matters especially for:

- humanoid tasks,

- room-transition interventions,

- routines that affect safety or privacy,

- and automated physical workflows.

## 63.4 Ambient event examples

- `room.entered`

- `room.exited`

- `environment.threshold_exceeded`

- `ambient.intervention_recommended`

- `ambient.intervention_executed`

- `robot.task_requested`

- `robot.task_simulated`

- `robot.task_blocked`

## 63.5 Estate abstraction rule

Robotics and estate features should depend on internal abstractions
like:

- `room`

- `zone`

- `device`

- `intervention`

- `task_envelope`

- `safety_policy`

—not on raw hardware vendor assumptions.

## 63.6 Humanoid readiness note

The future humanoid plan is real and should shape abstractions now, but
engineering should avoid prematurely overbuilding. The right near-term
move is to build abstractions and simulations that preserve an
embodiment path without forcing immediate robotics complexity into every
service.

---

# 64. Appendix T: 90-Day Scoping Checklist and Acceptance Criteria

This appendix is designed for engineering/product leadership to use
immediately.

## 64.1 First 30 days — architecture and contracts

Required outcomes:

- repository strategy chosen

- canonical records documented

- event taxonomy documented

- service boundaries documented

- identity and permissions approach chosen

- API surface draft created

- first provider adapter contracts created

- Morning Board object shape finalized

Acceptance criteria:

- engineering can point to owned services,

- product can point to owned surfaces,

- data can point to owned records,

- no critical domain is still “implicit only.”

## 64.2 Days 31–60 — first runnable spine

Required outcomes:

- workflow runtime skeleton live

- memory ingestion v1 live

- approval service v1 live

- Morning Board v1 live

- opportunity ingestion v1 live

- observability v1 live

Acceptance criteria:

- founder can see a board,

- founder can review approvals,

- at least one overnight workflow completes end to end,

- traces and memory write-backs are visible.

## 64.3 Days 61–90 — first true estate loop

Required outcomes:

- Night Shift content sweep active

- first synthetic media or build packet active

- state snapshot pipeline active

- initial estate or environmental context active

- first “wake up to prepared decisions” experience active

Acceptance criteria:

- founder receives a genuinely useful morning board,

- at least one recommendation is grounded and actionable,

- at least one overnight asset/build packet is delivered,

- failures are visible rather than silent,

- approval boundaries hold.

## 64.4 Executive kill criteria

The team should pause and re-scope if any of the following become true:

- the board becomes noisy and cognitively expensive,

- provider complexity overwhelms internal contracts,

- approvals are bypassed or unclear,

- memory loses provenance,

- workflows act without adequate observability,

- or the product becomes exciting but not useful daily.

## 64.5 Executive success criteria

The first phase is successful when Hotel Nexus feels less like a
prototype and more like a dependable operating layer for the founder’s
day.

That means:

- it remembers,

- it prepares,

- it ranks,

- it explains,

- it waits where it should,

- and it acts where it safely can.

---

# 65. Appendix U: Repo-by-Repo Architecture Plan

This appendix is intended to make the platform directly scoppable for a
builder or small team. It translates the service and repository model
into concrete implementation units, ownership expectations, initial
responsibilities, interfaces, and definition-of-done signals.

## 65.1 Recommended working model

For a small team, the recommended delivery model is:

- one primary monorepo,

- clear application and service folders,

- shared typed contracts,

- strong package boundaries,

- explicit internal ownership,

- and a bias toward shipping vertical slices rather than infrastructure
theater.

In practical terms, that means the team should be able to build one
founder-visible feature by touching:

- one UI surface,

- one or two domain services,

- one workflow,

- one or two provider adapters,

- and shared contracts.

## 65.2 Proposed top-level repo map

The following plan assumes one main monorepo named something like
`hotel-nexus`, with logically separated modules.

### Repo unit: `apps/founder-web`

**Purpose:** primary desktop/web product for the founder.

Core responsibilities:

- Morning Command Board

- approvals center

- opportunity workspace

- memory console

- capital brief surface

- estate console

Primary dependencies:

- api-gateway

- realtime channels

- ui-design-system

- api-contracts

Definition of done for v1:

- founder can open the app and see today’s board,

- open approvals,

- inspect memory-backed context,

- and view at least one generated overnight output.

### Repo unit: `apps/founder-mobile`

**Purpose:** low-friction capture and approval surface.

Core responsibilities:

- quick voice capture

- morning board mobile summary

- approval interactions

- urgent alerts

- quick state check-in

Primary dependencies:

- api-gateway

- realtime notification transport

- voice capture stack

Definition of done for v1:

- founder can approve/reject/snooze from mobile,

- submit voice notes,

- and review a compressed daily board.

### Repo unit: `apps/operator-console`

**Purpose:** internal admin/ops console for engineering/product.

Core responsibilities:

- integration health views

- workflow run inspection

- failure triage

- adapter status

- policy inspection

- queue status

Primary dependencies:

- observability-service

- integration-service

- workflow-service

- approval-service

Definition of done for v1:

- team can debug Night Shift failures,

- inspect runs,

- view approval bottlenecks,

- and verify provider health.

### Repo unit: `apps/ambient-hub`

**Purpose:** estate/room-facing ambient control and telemetry UI.

Core responsibilities:

- room status

- environment telemetry

- intervention previews

- mode transitions

- estate device summaries

Definition of done for v1:

- room context can be viewed and a low-risk intervention previewed.

## 65.3 Domain service implementation plan

### Repo unit: `services/api-gateway`

**Purpose:** public application API aggregation layer.

Should own:

- authentication boundary enforcement

- request validation

- response envelopes

- BFF-style aggregation for founder UI

- rate limits for user-facing surfaces

Should not own:

- business logic that properly belongs in downstream services

- provider-specific payload shaping

Initial endpoints to implement first:

- `/boards/today`

- `/approvals`

- `/state/current`

- `/memory/search`

- `/opportunities/top`

### Repo unit: `services/identity-service`

**Purpose:** identity, roles, estate membership, and policy lookup.

Should own:

- user/session metadata

- estate-role mapping

- permission scopes

- policy bundle attachment

- integration ownership mapping

Must integrate with:

- authentik/OpenFGA-style policy layer or chosen equivalent

Initial deliverables:

- founder identity record

- estate membership record

- policy resolution API

### Repo unit: `services/memory-service`

**Purpose:** ingestion, normalization, retrieval, provenance.

Should own:

- memory item creation

- source metadata handling

- chunking and structuring

- entity/topic extraction pipelines

- retrieval APIs

- memory tiering logic

Must integrate with:

- document parsers

- vector indexing

- graph/temporal memory layer

Initial deliverables:

- file/document ingest endpoint

- search endpoint

- source-grounded retrieval mode

- timeline view backing API

### Repo unit: `services/state-service`

**Purpose:** state estimation and transition tracking.

Should own:

- state snapshot generation

- transition event storage

- readiness scoring

- friction telemetry summarization

- environmental context mapping

Initial deliverables:

- current state API

- readiness band output

- transition events table/API

- first low-complexity heuristic model

### Repo unit: `services/workflow-service`

**Purpose:** durable orchestration runtime.

Should own:

- scheduled jobs

- resumable execution

- workflow state transitions

- run tracing and correlation IDs

- pause/resume around approvals

Initial deliverables:

- schedule Night Shift

- schedule Morning Board generation

- persist workflow runs

- emit workflow events

### Repo unit: `services/approval-service`

**Purpose:** all approval packets and decisions.

Should own:

- approval object lifecycle

- decision states

- escalation rules

- expiration logic

- approval audit trail

Initial deliverables:

- list approvals

- resolve approval

- attach evidence refs

- attach cost/risk metadata

### Repo unit: `services/opportunity-service`

**Purpose:** detect and rank monetizable opportunities.

Should own:

- trend signals

- analytics normalization

- scoring and ranking logic

- promotion decisions to build paths

- opportunity history

Initial deliverables:

- opportunity record schema

- ingest pipeline for content trend signals

- top opportunities API

- promote-to-build command

### Repo unit: `services/asset-foundry-service`

**Purpose:** convert opportunities into assets and product
artifacts.

Should own:

- script creation jobs

- media render requests

- app scaffold jobs

- preview URL handling

- asset registry and statuses

Initial deliverables:

- create content build packet

- trigger first render provider

- produce asset record with preview link

### Repo unit: `services/capital-service`

**Purpose:** market/filing analysis and memo generation.

Should own:

- watchlists

- filing ingestion normalization

- thesis records

- risk/catalyst deltas

- morning capital brief components

Initial deliverables:

- SEC EDGAR ingest adapter hook

- watchlist record model

- memo generation pipeline

- latest brief endpoint

### Repo unit: `services/estate-service`

**Purpose:** rooms, devices, estate modes, interventions.

Should own:

- room profiles

- room modes

- intervention policies

- low-risk actuation previews

- telemetry normalization from ambient layer

Initial deliverables:

- room registry

- current estate mode API

- intervention preview API

### Repo unit: `services/integration-service`

**Purpose:** provider lifecycle management.

Should own:

- integration profiles

- sync health

- credential metadata

- adapter execution envelopes

- rate-limit and retry bookkeeping

Initial deliverables:

- integration registry table/API

- last sync health endpoint

- adapter execution logs

### Repo unit: `services/notification-service`

**Purpose:** delivery and attention policy.

Should own:

- digest composition

- push/email/chat routing

- mode-aware notification suppression

- approval nudges

- failure escalation nudges

Initial deliverables:

- morning board delivery route

- approval available notification

- critical failure alert route

### Repo unit: `services/observability-service`

**Purpose:** workflow and quality visibility.

Should own:

- trace aggregation

- quality metrics

- board usefulness metrics

- adapter failure classification

- evaluation exports

Initial deliverables:

- run trace lookup

- board generation status

- integration failure dashboard feed

## 65.4 Shared package implementation plan

### Package: `packages/domain-models`

Must contain:

- canonical DTOs

- IDs and enums

- typed interfaces for records

- serializable cross-service payload shapes

### Package: `packages/event-contracts`

Must contain:

- topic names

- payload schemas

- version metadata

- deprecation status

### Package: `packages/api-contracts`

Must contain:

- OpenAPI definitions or generated schemas

- command and query shapes

- error envelopes

- realtime message contracts

### Package: `packages/agent-contracts`

Must contain:

- all agent mission statements

- allowed actions

- forbidden actions

- escalation rules

- expected outputs

- evidence rules

### Package: `packages/policy-engine`

Must contain:

- autonomy classes

- risk tiers

- spend thresholds

- domain-specific approval rules

- policy evaluation helpers

### Package: `packages/provider-adapters`

Must contain:

- adapter interfaces

- provider client wrappers

- normalization helpers

- retry/error classification helpers

### Package: `packages/prompts-and-skills`

Must contain:

- prompt packs

- skill definitions

- evaluation notes

- change history

- version tags

## 65.5 Suggested repo ownership matrix

| Unit | Primary owner | Secondary owner |

| --------------------- | ---------------------- |
------------------- |

| founder-web | product/frontend | platform |

| api-gateway | platform | product/frontend |

| memory-service | data/memory | platform |

| state-service | sensing/state | product |

| workflow-service | platform/orchestration | observability |

| approval-service | platform | product |

| opportunity-service | alpha systems | data |

| asset-foundry-service | alpha systems | product |

| capital-service | alpha systems | finance domain lead |

| estate-service | sensing/estate | platform |

| integration-service | platform | security |

| observability-service | platform | all teams |

## 65.6 First vertical slice recommendation

The best first vertical slice is:

1. ingest founder inputs and contextual data,

2. write memory,

3. generate state snapshot,

4. run one overnight opportunity workflow,

5. produce one Morning Board,

6. produce one approval packet,

7. show the result in founder-web and founder-mobile.

If that works, the estate has a real spine.

---

# 66. Appendix V: Formal Agent Contract Pack

This appendix is the build-ready contract pack for the first wave of
sovereign agents and desk sub-agents. These are not marketing personas.
They are operational components with mission boundaries.

## 66.1 Standard agent contract template

Every agent spec should eventually include at minimum:

- `agent_name`

- `mission`

- `primary_inputs`

- `primary_outputs`

- `required_context`

- `allowed_tools`

- `forbidden_actions`

- `approval_triggers`

- `write_back_requirements`

- `failure_modes`

- `evaluation_metrics`

- `owner_service_or_team`

## 66.2 Sovereign agent contracts

### Agent Contract: General Manager

**Mission:** orchestrate the founder’s day, compress complexity, and
present ranked action.

**Primary inputs:**

- state snapshot

- open approvals

- calendar/task context

- top opportunities

- unresolved risks

**Primary outputs:**

- Morning Board

- daily recommended priority stack

- deferral suggestions

- escalation notices

**Required context:**

- founder mode

- estate mode

- current readiness

- priority policy bundle

**Allowed tools:**

- board generation workflows

- memory retrieval

- approval queue lookup

- notification dispatch

**Forbidden actions:**

- irreversible external publication

- direct capital execution

- direct legal/medical final claims

**Approval triggers:**

- any recommendation that implies irreversible external action

- any spend-bound suggestion above threshold

**Write-back requirements:**

- what was prioritized

- what was deprioritized

- why

- confidence summary

**Failure modes:**

- overwhelming board composition

- weak prioritization under ambiguous state

- excessive generic advice

**Evaluation metrics:**

- board usefulness rating

- time-to-first-action

- founder acceptance of top recommendation

### Agent Contract: Archivist

**Mission:** preserve coherence, provenance, and retrievability
across all estate knowledge.

**Primary inputs:**

- documents

- chats

- generated outputs

- workflow traces

- notes and files

**Primary outputs:**

- memory items

- source-grounded retrieval sets

- timeline entries

- contradiction/staleness flags

**Required context:**

- memory schema

- permission scopes

- provenance rules

- graph linking ontology

**Allowed tools:**

- ingestion pipelines

- chunking/classification

- vector index

- graph linking

**Forbidden actions:**

- silently rewriting source truth

- discarding provenance

- creating unsupported certainty in summaries

**Approval triggers:**

- destructive memory cleanup affecting long-term stores

**Write-back requirements:**

- memory tier

- provenance refs

- extraction notes

- confidence of normalization

**Failure modes:**

- lossy compression

- duplicate memory sprawl

- stale items masquerading as current truth

**Evaluation metrics:**

- retrieval relevance

- provenance completeness

- duplicate rate

- contradiction detection rate

### Agent Contract: Revenue Director

**Mission:** detect and rank market, content, and product
opportunities.

**Primary inputs:**

- trend signals

- analytics

- competitor signals

- prior asset outcomes

- demand indicators

**Primary outputs:**

- opportunity records

- monetization hypotheses

- recommended build paths

**Required context:**

- founder brand fit

- current product priorities

- monetization policy

- scoring model version

**Allowed tools:**

- trend adapters

- analytics queries

- scoring pipelines

- opportunity promotion workflows

**Forbidden actions:**

- direct public launch

- unreviewed claims of guaranteed monetization

**Approval triggers:**

- promotion to paid experiment above threshold

- domain purchase proposals

**Write-back requirements:**

- source signals

- score breakdown

- confidence summary

- reason for promotion or rejection

**Failure modes:**

- chasing novelty over economics

- weak confidence calibration

- repetitive low-value opportunities

**Evaluation metrics:**

- opportunity-to-build conversion rate

- build-to-performance signal quality

- founder acceptance rate of top opportunities

### Agent Contract: Studio Head

**Mission:** convert opportunities into creator-ready media and
packaging.

**Primary inputs:**

- opportunity records

- brand rules

- channel strategy

- prior media performance

**Primary outputs:**

- scripts

- shot/structure briefs

- render jobs

- titles/hooks

- packaging packets

**Required context:**

- style guide

- platform constraints

- approval policy

- budget policy

**Allowed tools:**

- prompt packs

- render providers

- template libraries

- media build workflows

**Forbidden actions:**

- public publishing without approval

- unsupported factual claims in regulated domains

**Approval triggers:**

- public schedule/publish steps

- high-cost renders beyond threshold

**Write-back requirements:**

- asset record creation

- source opportunity linkage

- performance hypothesis

**Failure modes:**

- brand drift

- low-quality packaging

- excessive asset duplication

**Evaluation metrics:**

- asset approval rate

- render completion success

- downstream engagement/performance signals

### Agent Contract: Finance Controller

**Mission:** interpret business finance and operating economics.

**Primary inputs:**

- accounting ledgers

- expense data

- cash flow signals

- budget policy

- alpha desk outputs where relevant

**Primary outputs:**

- summaries

- anomalies

- forecast notes

- spend warnings

**Required context:**

- accounting mappings

- business entity context

- forecast assumptions

**Allowed tools:**

- ledger adapters

- summary workflows

- anomaly heuristics

**Forbidden actions:**

- direct fund movement

- tax/legal certainty beyond evidence

**Approval triggers:**

- recommendations implying commitments above threshold

**Write-back requirements:**

- forecast version

- evidence refs

- assumptions notes

**Failure modes:**

- weak anomaly thresholds

- misleading certainty

- stale financial snapshots

**Evaluation metrics:**

- anomaly precision

- timeliness of summaries

- founder trust score on finance briefs

### Agent Contract: Medical Director

**Mission:** conservatively interpret health and biofeedback trends.

**Primary inputs:**

- health records

- lab summaries

- wearable/biosignal inputs

- ambient state cues

- routines and reminders

**Primary outputs:**

- trend summaries

- reminder logic

- pattern flags

- escalation suggestions

**Required context:**

- health permission policy

- evidence constraints

- non-diagnostic framing rules

**Allowed tools:**

- health record ingestion

- trend comparison

- reminder engines

- source-grounded summarization

**Forbidden actions:**

- diagnosis claims

- medication/treatment certainty without explicit evidence and review

**Approval triggers:**

- any message framed as high-stakes recommendation

- any sharing outside health permission scope

**Write-back requirements:**

- source refs

- uncertainty notes

- pattern basis

**Failure modes:**

- overclaiming

- alarmist summaries

- weak separation of observation vs inference

**Evaluation metrics:**

- evidence completeness

- false alarm rate

- clarity of uncertainty communication

### Agent Contract: General Counsel

**Mission:** surface legal obligations and risk signals.

**Primary inputs:**

- contracts

- legal documents

- deadlines

- policy libraries

**Primary outputs:**

- obligation summaries

- clause flags

- deadline alerts

- legal risk briefs

**Required context:**

- contract taxonomy

- legal permission zone

- obligation calendar

**Allowed tools:**

- document parsers

- clause extraction

- timeline mapping

- source-grounded retrieval

**Forbidden actions:**

- legal advice certainty beyond evidence and role

- silent contractual modification or action

**Approval triggers:**

- any action with legal consequence

- any outbound legal communication suggestion

**Write-back requirements:**

- clause refs

- document provenance

- obligation mapping

**Failure modes:**

- missing obligation deadlines

- weak nuance in clause interpretation

**Evaluation metrics:**

- deadline capture rate

- citation completeness

- false confidence rate

### Agent Contract: Estate Steward

**Mission:** coordinate rooms, routines, devices, and estate
behavior.

**Primary inputs:**

- room profiles

- telemetry

- estate modes

- routines

- transition events

**Primary outputs:**

- intervention suggestions

- room-state adjustments

- estate summaries

**Required context:**

- safety policy

- device capabilities

- privacy rules

- mode context

**Allowed tools:**

- estate APIs

- sensor reads

- intervention preview engine

- low-risk automation hooks

**Forbidden actions:**

- risky physical actions without policy and approval

- privacy-invasive sensing changes without explicit permission

**Approval triggers:**

- moderate or high-risk device actions

- privacy-sensitive changes

**Write-back requirements:**

- intervention logs

- before/after context

- policy used

**Failure modes:**

- inappropriate intervention timing

- noisy automation

- room policy conflicts

**Evaluation metrics:**

- intervention usefulness

- override rate

- comfort/disruption signal

## 66.3 Desk sub-agent contracts

### Trend Scout

Mission: detect rising themes and underserved demand.

Outputs: trend signals, niche clusters, early breakout indicators.

Forbidden: direct promotion to publish.

### Analytics Miner

Mission: mine performance and packaging patterns.

Outputs: performance deltas, topic cluster strength,
underperforming-assets-with-good-thesis list.

Forbidden: treating noisy metrics as certainty.

### Opportunity Scorer

Mission: score opportunities consistently.

Outputs: ranked opportunity scorecards.

Forbidden: free-form ranking without model version trace.

### Content Architect

Mission: select best format to attack an opportunity.

Outputs: recommended asset mix.

Forbidden: skipping brand fit or resource constraints.

### Workhorse Builder

Mission: create production-ready outputs fast.

Outputs: scripts, briefs, derivatives, build packets.

Forbidden: publishing or spending outside policy.

### Approval Governor

Mission: enforce policy boundaries and escalate when required.

Outputs: approval packets, blocked-action notices.

Forbidden: bypassing policy engine.

### Distribution Operator

Mission: package and route approved assets.

Outputs: schedules, distribution packets, post-launch tracking hooks.

Forbidden: public release without resolved approval state.

### Learning Loop Agent

Mission: close the loop between outcome and future behavior.

Outputs: what worked, what failed, model update suggestions.

Forbidden: self-modifying production policy without approval.

### Macro Watcher

Mission: maintain macro backdrop context.

Outputs: regime notes, backdrop shifts, macro risk flags.

### Filing Reader

Mission: normalize and extract filing intelligence.

Outputs: filing signals, noteworthy changes, source-grounded excerpts.

### Quality Analyst

Mission: evaluate business quality.

Outputs: quality score components and rationale.

### Valuation Analyst

Mission: compare pricing vs expectations.

Outputs: valuation notes and scenario ranges.

### Technical / Flow Analyst

Mission: monitor flow/technical regime shifts.

Outputs: technical state notes, anomaly flags.

### Risk Sentinel

Mission: increase caution where downside rises.

Outputs: risk alerts, downgrade rationales.

### Catalyst Hunter

Mission: identify asymmetric upcoming events.

Outputs: catalyst calendar, confidence-ranked catalysts.

### Portfolio Voice

Mission: compress capital complexity into founder-usable language.

Outputs: clear watchlist brief, top setup, top risk, thesis-change
summary.

## 66.4 Mandatory agent handoff envelope

All agent-to-agent handoffs should eventually serialize a minimum
envelope such as:

```json

{

"handoff_id": "uuid",

"source_agent": "RevenueDirector",

"target_agent": "StudioHead",

"task_type": "promote_opportunity_to_content_build",

"objective": "Create build packet for ranked niche",

"context_refs": ["opportunity_123", "memory_456"],

"risk_level": "tier_2",

"confidence": 0.81,

"approval_required": false,

"expected_output_type": "content_build_packet",

"created_at": "2026-06-04T02:10:00Z"

}

```

## 66.5 Formal agent acceptance criteria

An agent should not be considered production-ready until:

- its mission is unambiguous,

- its inputs and outputs are typed,

- its forbidden actions are explicit,

- its approval triggers are implemented,

- its write-back behavior is observable,

- and its quality is evaluated on real runs.

## 66.6 Recommended first contract pack to implement

If engineering can only formalize a subset immediately, start with:

1. General Manager

2. Archivist

3. Revenue Director

4. Studio Head

5. Approval Governor

6. Portfolio Voice

That set is enough to produce the first compelling founder-visible
operating loop.

---

# 67. Appendix W: Systems Contract Pack — Canonical JSON Schemas

This appendix is the next implementation layer: concrete JSON-style
system contracts. These are reference schemas for engineering alignment,
not final validator files. They should become the basis for DTOs,
OpenAPI contracts, event payload schemas, workflow contracts, and test
fixtures.

## 67.1 Schema conventions

Recommended conventions across all system contracts:

- all IDs are strings, typically UUIDs unless explicitly
external/provider IDs

- all timestamps use ISO-8601 UTC

- all enums are lowercase snake_case unless external protocol requires
otherwise

- every payload includes `schema_version`

- every sensitive-domain payload includes `permission_scope` or a
reference to one

- every generated or inferred payload can include `confidence`

- every source-grounded payload can include `provenance_refs`

Suggested meta envelope:

```json

{

"schema_version": "1.0.0",

"data": {},

"meta": {

"generated_at": "2026-06-04T08:00:00Z",

"confidence": 0.84,

"provenance_refs": ["memory_1", "workflow_2"]

}

}

```

## 67.2 Canonical record schemas

### `PersonProfile`

```json

{

"schema_version": "1.0.0",

"person_id": "person_001",

"display_name": "Founder",

"timezone": "Europe/London",

"preferred_language": "en",

"communication_style": "direct_supportive",

"voice_preferences": {

"input_mode": "voice_first",

"output_style": "concise_ranked",

"wake_word_enabled": true

},

"neurotype_notes": {

"adhd_first": true,

"blank_page_sensitivity": true,

"prefers_ranked_choices": true

},

"working_preferences": {

"default_work_block_minutes": 45,

"prefers_morning_brief": true,

"notification_budget": "low"

},

"privacy_profile_id": "privacy_default",

"default_approval_profile_id": "approval_founder_default",

"risk_profile_id": "risk_balanced",

"embodiment_profile_id": "embodiment_future_humanoid",

"created_at": "2026-06-04T00:00:00Z",

"updated_at": "2026-06-04T00:00:00Z"

}

```

### `EstateProfile`

```json

{

"schema_version": "1.0.0",

"estate_id": "estate_001",

"estate_name": "Hotel Nexus Estate",

"estate_mode": "command",

"primary_timezone": "Europe/London",

"policy_bundle_id": "estate_policy_default",

"night_shift_enabled": true,

"sensing_enabled": true,

"robotics_enabled": false,

"integration_modes": {

"health": "restricted",

"finance": "restricted",

"legal": "restricted",

"content": "active"

},

"created_at": "2026-06-04T00:00:00Z",

"updated_at": "2026-06-04T00:00:00Z"

}

```

### `RoomProfile`

```json

{

"schema_version": "1.0.0",

"room_id": "room_deep_work_01",

"estate_id": "estate_001",

"room_name": "Deep Work Studio",

"room_type": "deep_work",

"sensor_capabilities": ["temperature", "co2", "light", "presence"],

"actuator_capabilities": ["lighting", "audio_scene",
"notification_routing"],

"default_intervention_policy_id": "policy_room_deep_work",

"allowed_modes": ["deep_work", "build", "operator"],

"privacy_level": "high",

"created_at": "2026-06-04T00:00:00Z",

"updated_at": "2026-06-04T00:00:00Z"

}

```

### `StateSnapshot`

```json

{

"schema_version": "1.0.0",

"snapshot_id": "state_2026_06_04_0800",

"person_id": "person_001",

"estate_id": "estate_001",

"timestamp": "2026-06-04T08:00:00Z",

"readiness_band": "amber",

"readiness_score": 0.63,

"recovery_score": 0.49,

"arousal_score": 0.71,

"friction_score": 0.56,

"overload_risk_score": 0.34,

"confidence": 0.78,

"work_suitability_profile": {

"deep_analytical": "moderate",

"creative_ideation": "high",

"admin": "high",

"communication": "moderate"

},

"source_signals": [

"voice_biomarker_summary_123",

"environment_context_456",

"calendar_load_789"

],

"environment_context_id": "env_2026_06_04_0800",

"explanation_summary": "Moderate readiness with elevated friction; best
suited to ranked tasks and guided build work."

}

```

### `TransitionEvent`

```json

{

"schema_version": "1.0.0",

"transition_id": "transition_001",

"person_id": "person_001",

"from_mode": "recovery",

"to_mode": "build",

"from_room_id": "room_bedroom",

"to_room_id": "room_deep_work_01",

"detected_at": "2026-06-04T08:35:00Z",

"transition_quality": "fragile",

"confidence": 0.81,

"intervention_triggered": true,

"intervention_id": "intervention_002"

}

```

### `MemoryItem`

```json

{

"schema_version": "1.0.0",

"memory_id": "memory_001",

"memory_type": "document_summary",

"title": "Hotel Nexus stack synthesis",

"summary": "Summary of state-first estate OS architecture and agent
stack.",

"source_uri": "notion://page/hotel_nexus_architecture",

"source_type": "workspace_document",

"provenance": {

"ingested_from": "Notion",

"ingested_at": "2026-06-04T01:00:00Z",

"source_hash": "sha256:abc123"

},

"entities": ["Hotel Nexus", "General Manager", "Night Shift"],

"topics": ["architecture", "agents", "automation"],

"temporal_valid_from": "2026-06-04T01:00:00Z",

"temporal_valid_to": null,

"permissions_scope": "estate_internal",

"embedding_ref": "vec_001",

"graph_ref": "graph_node_001",

"importance_score": 0.92,

"freshness_score": 0.88

}

```

### `OpportunityRecord`

```json

{

"schema_version": "1.0.0",

"opportunity_id": "opp_001",

"opportunity_domain": "content",

"title": "Underserved niche in AI health automation",

"hypothesis": "Search demand and creator supply are mispriced in this
niche.",

"source_signals": ["trend_signal_1", "analytics_signal_2",
"competitor_signal_3"],

"demand_score": 0.84,

"supply_gap_score": 0.73,

"monetization_score": 0.78,

"build_complexity_score": 0.41,

"confidence_score": 0.76,

"recommended_asset_types": ["youtube_video", "short_series",
"landing_page"],

"status": "promoted_to_build",

"owner_agent": "RevenueDirector"

}

```

### `AssetRecord`

```json

{

"schema_version": "1.0.0",

"asset_id": "asset_001",

"asset_type": "video_build_packet",

"source_opportunity_id": "opp_001",

"status": "awaiting_approval",

"preview_url": "https://preview.hotelnexus.local/assets/asset_001",

"production_metadata": {

"provider": "heygen",

"aspect_ratio": "16:9",

"language": "en"

},

"variant_group_id": "variant_group_001",

"approval_request_id": "approval_001",

"performance_metrics_ref": null

}

```

### `ApprovalRequest`

```json

{

"schema_version": "1.0.0",

"approval_request_id": "approval_001",

"requested_action_type": "publish_video",

"requested_by_agent": "ApprovalGovernor",

"risk_tier": "tier_3",

"autonomy_class": "class_4",

"spend_ceiling": 50,

"currency": "USD",

"reversible": false,

"expires_at": "2026-06-05T08:00:00Z",

"evidence_refs": ["asset_001", "opp_001", "workflow_123"],

"recommended_decision": "approve",

"decision_status": "pending",

"decision_at": null,

"decision_by": null

}

```

### `WorkflowRun`

```json

{

"schema_version": "1.0.0",

"run_id": "workflow_123",

"workflow_type": "night_shift_content_sweep",

"initiator_type": "scheduler",

"initiator_id": "night_shift_cron",

"status": "paused_for_approval",

"priority": "high",

"started_at": "2026-06-04T01:00:00Z",

"ended_at": null,

"cost_estimate": 18.25,

"actual_cost": 12.10,

"approval_state": "awaiting_founder",

"result_summary": "Three opportunities promoted; one asset packet
awaiting approval.",

"failure_class": null,

"trace_ref": "trace_789"

}

```

## 67.3 Founder UI object schemas

### `MorningBoard`

```json

{

"schema_version": "1.0.0",

"board_id": "board_2026_06_04",

"generated_at": "2026-06-04T07:45:00Z",

"state_summary": {

"readiness_band": "amber",

"headline": "Moderate readiness; strong for guided build work, weaker
for deep analytical grind."

},

"body_section": {

"sleep_recovery_summary": "Recovery below ideal baseline.",

"state_warning": "Elevated friction likely during task initiation.",

"recommended_workload": "moderate"

},

"money_section": {

"top_content_opportunity_id": "opp_001",

"top_market_opportunity_id": "capital_opp_002",

"biggest_risk": "Market memo confidence is reduced due to missing one
provider sync."

},

"moves_section": [

{

"rank": 1,

"action_type": "approve_asset_packet",

"title": "Approve overnight video build packet",

"reason": "Highest score and lowest build complexity among current
opportunities."

}

],

"momentum_section": {

"what_worked": ["AI automation niche content overperformed packaging
baseline"],

"what_to_stop": ["low-confidence broad-topic video drafts"]

},

"critical_alerts": [],

"approval_packets": ["approval_001"],

"recommended_order": ["approval_001", "opp_001_review"],

"narrative_summary": "You have one strong content opportunity and one
moderate market brief. Start with the prepared asset approval."

}

```

### `ApprovalPacket`

```json

{

"schema_version": "1.0.0",

"approval_request_id": "approval_001",

"headline": "Publish AI health automation video",

"summary": "Night Shift generated a ranked asset packet for a
high-scoring content niche.",

"risk_tier": "tier_3",

"autonomy_class": "class_4",

"recommended_decision": "approve",

"cost_summary": {

"estimated_spend": 18.25,

"currency": "USD",

"budget_status": "within_limit"

},

"evidence_refs": ["opp_001", "asset_001", "workflow_123"],

"reversible": false,

"expires_at": "2026-06-05T08:00:00Z",

"decision_options": ["approve", "reject", "snooze"]

}

```

---

# 68. Appendix X: Internal Endpoint Definitions and Service Interfaces

This appendix defines internal-facing API contracts that engineering can
use to scope service interfaces immediately. These are intentionally
implementation-oriented and should later be formalized in OpenAPI/JSON
Schema/Protobuf or the chosen interface definition system.

## 68.1 API envelope standard

All internal service responses should use a common response envelope.

```json

{

"data": {},

"meta": {

"request_id": "req_123",

"generated_at": "2026-06-04T08:00:00Z",

"service": "memory-service",

"schema_version": "1.0.0"

},

"errors": []

}

```

## 68.2 `identity-service` endpoints

### `GET /internal/identity/{person_id}`

Purpose: resolve a person profile and core policy references.

Response `data` shape:

```json

{

"person_id": "person_001",

"display_name": "Founder",

"estate_roles": ["founder", "super_admin"],

"policy_bundle_id": "estate_policy_default",

"approval_profile_id": "approval_founder_default",

"privacy_profile_id": "privacy_default"

}

```

### `GET /internal/identity/{person_id}/permissions`

Purpose: return evaluated permission scopes for current environment.

## 68.3 `memory-service` endpoints

### `POST /internal/memory/ingest`

Purpose: ingest normalized or raw source content.

Request:

```json

{

"source_type": "workspace_document",

"source_uri": "notion://page/abc",

"content_ref": "object://bucket/file.md",

"permissions_scope": "estate_internal",

"ingest_mode": "normalize_and_index"

}

```

Response:

```json

{

"memory_id": "memory_001",

"status": "ingested",

"embedding_status": "queued",

"graph_linking_status": "queued"

}

```

### `POST /internal/memory/search`

Purpose: run source-grounded or operational search.

Request:

```json

{

"query": "Hotel Nexus Night Shift approval rules",

"retrieval_mode": "source_grounded",

"top_k": 5,

"permission_scope": "estate_internal"

}

```

### `GET /internal/memory/{memory_id}`

Purpose: retrieve canonical memory item and provenance.

## 68.4 `state-service` endpoints

### `POST /internal/state/snapshots/generate`

Purpose: create a state snapshot from recent signals.

Request:

```json

{

"person_id": "person_001",

"estate_id": "estate_001",

"signal_refs": ["voice_signal_1", "env_signal_2",
"calendar_signal_3"],

"mode_context": {

"human_mode": "build",

"estate_mode": "command"

}

}

```

Response:

```json

{

"snapshot_id": "state_2026_06_04_0800",

"readiness_band": "amber",

"confidence": 0.78,

"work_suitability_profile": {

"creative_ideation": "high",

"deep_analytical": "moderate"

}

}

```

### `GET /internal/state/current/{person_id}`

Purpose: return latest state snapshot.

### `POST /internal/transitions/detect`

Purpose: persist or evaluate a transition event.

## 68.5 `workflow-service` endpoints

### `POST /internal/workflows/start`

Purpose: start a workflow run.

Request:

```json

{

"workflow_type": "night_shift_content_sweep",

"initiator_type": "scheduler",

"initiator_id": "night_shift_cron",

"input_ref": "workflow_input_123",

"priority": "high"

}

```

### `POST /internal/workflows/{run_id}/pause-for-approval`

Purpose: pause a run and bind it to an approval request.

### `POST /internal/workflows/{run_id}/resume`

Purpose: resume a paused workflow after approval.

### `GET /internal/workflows/{run_id}`

Purpose: inspect current run state and trace reference.

## 68.6 `approval-service` endpoints

### `POST /internal/approvals`

Purpose: create an approval request.

Request:

```json

{

"requested_action_type": "publish_video",

"requested_by_agent": "ApprovalGovernor",

"risk_tier": "tier_3",

"autonomy_class": "class_4",

"spend_ceiling": 50,

"currency": "USD",

"evidence_refs": ["asset_001", "opp_001", "workflow_123"],

"recommended_decision": "approve",

"reversible": false,

"expires_at": "2026-06-05T08:00:00Z"

}

```

### `POST /internal/approvals/{approval_request_id}/decision`

Purpose: resolve approval.

Request:

```json

{

"decision": "approve",

"decision_by": "person_001",

"decision_note": "Looks good, proceed.",

"approved_at": "2026-06-04T08:10:00Z"

}

```

## 68.7 `opportunity-service` endpoints

### `POST /internal/opportunities/scan`

Purpose: trigger opportunity detection.

### `POST /internal/opportunities/{opportunity_id}/score`

Purpose: calculate or recalculate score.

### `POST /internal/opportunities/{opportunity_id}/promote`

Purpose: move opportunity into a build path.

Promotion request:

```json

{

"promote_to": "content_build",

"requested_by": "RevenueDirector",

"reason": "Top content opportunity with favorable monetization/build
complexity ratio"

}

```

## 68.8 `asset-foundry-service` endpoints

### `POST /internal/foundry/content/build`

Purpose: build a content packet from an opportunity.

Request:

```json

{

"opportunity_id": "opp_001",

"asset_types": ["script", "thumbnail_brief", "render_request"],

"brand_profile_id": "brand_default",

"budget_profile_id": "budget_content_default"

}

```

### `POST /internal/foundry/apps/build`

Purpose: scaffold app/landing-page experiments.

### `GET /internal/assets/{asset_id}`

Purpose: inspect current asset status and preview URL.

## 68.9 `capital-service` endpoints

### `POST /internal/capital/watchlist/refresh`

Purpose: refresh capital desk inputs.

### `POST /internal/capital/memos/generate`

Purpose: create latest watchlist memo.

### `GET /internal/capital/memos/latest`

Purpose: fetch most recent memo packet.

## 68.10 `estate-service` endpoints

### `GET /internal/estate/rooms`

Purpose: list room registry and capabilities.

### `POST /internal/estate/interventions/preview`

Purpose: generate safe preview for environment intervention.

Request:

```json

{

"room_id": "room_deep_work_01",

"intervention_type": "focus_scene",

"state_snapshot_id": "state_2026_06_04_0800"

}

```

### `POST /internal/estate/interventions/execute`

Purpose: apply low-risk permitted intervention.

## 68.11 Internal interface rule

No internal endpoint should return ambiguous mixed-domain payloads.
Cross-domain composition belongs either in:

- api-gateway,

- Morning Board assembly layer,

- or explicit workflow outputs.

---

# 69. Appendix Y: Event, Command, and Approval Payload Contracts

This appendix formalizes the async nervous system and command layer.

## 69.1 Event envelope

All emitted events should follow a standard event envelope.

```json

{

"event_id": "evt_001",

"event_name": "opportunity.promoted_to_build",

"schema_version": "1.0.0",

"occurred_at": "2026-06-04T02:00:00Z",

"producer": "opportunity-service",

"correlation_id": "workflow_123",

"causation_id": "cmd_456",

"tenant_ref": "estate_001",

"payload": {}

}

```

## 69.2 Command envelope

```json

{

"command_id": "cmd_456",

"command_name": "PromoteOpportunityToBuildCommand",

"schema_version": "1.0.0",

"issued_at": "2026-06-04T01:55:00Z",

"issued_by": "RevenueDirector",

"target_service": "asset-foundry-service",

"correlation_id": "workflow_123",

"payload": {}

}

```

## 69.3 Core event contracts

### Event: `state.snapshot.created`

```json

{

"snapshot_id": "state_2026_06_04_0800",

"person_id": "person_001",

"readiness_band": "amber",

"confidence": 0.78,

"work_suitability_profile": {

"creative_ideation": "high",

"deep_analytical": "moderate"

}

}

```

### Event: `opportunity.detected`

```json

{

"opportunity_id": "opp_001",

"opportunity_domain": "content",

"title": "Underserved AI health automation niche",

"source_signals": ["trend_signal_1", "analytics_signal_2"],

"confidence_score": 0.72

}

```

### Event: `opportunity.promoted_to_build`

```json

{

"opportunity_id": "opp_001",

"promote_to": "content_build",

"requested_by": "RevenueDirector",

"reason": "Top-ranked overnight content opportunity"

}

```

### Event: `asset.render.completed`

```json

{

"asset_id": "asset_001",

"provider": "heygen",

"status": "completed",

"preview_url": "https://preview.hotelnexus.local/assets/asset_001",

"duration_seconds": 84,

"cost": 12.1,

"currency": "USD"

}

```

### Event: `approval.requested`

```json

{

"approval_request_id": "approval_001",

"requested_action_type": "publish_video",

"risk_tier": "tier_3",

"autonomy_class": "class_4",

"recommended_decision": "approve",

"expires_at": "2026-06-05T08:00:00Z"

}

```

### Event: `workflow.paused_for_approval`

```json

{

"run_id": "workflow_123",

"workflow_type": "night_shift_content_sweep",

"approval_request_id": "approval_001",

"paused_at": "2026-06-04T03:10:00Z"

}

```

### Event: `board.generated`

```json

{

"board_id": "board_2026_06_04",

"generated_at": "2026-06-04T07:45:00Z",

"approval_count": 1,

"critical_alert_count": 0,

"state_snapshot_id": "state_2026_06_04_0800"

}

```

## 69.4 Core command contracts

### `GenerateMorningBoardCommand`

```json

{

"command_id": "cmd_board_001",

"command_name": "GenerateMorningBoardCommand",

"issued_by": "scheduler",

"target_service": "workflow-service",

"payload": {

"person_id": "person_001",

"estate_id": "estate_001",

"board_date": "2026-06-04",

"include_sections": ["body", "money", "moves", "momentum",
"approvals"]

}

}

```

### `RunNightShiftContentSweepCommand`

```json

{

"command_id": "cmd_night_content_001",

"command_name": "RunNightShiftContentSweepCommand",

"issued_by": "scheduler",

"target_service": "workflow-service",

"payload": {

"estate_id": "estate_001",

"budget_profile_id": "budget_night_shift",

"scan_domains": ["youtube", "trends", "competitor_signals"],

"max_promotions": 3

}

}

```

### `RunNightShiftCapitalSweepCommand`

```json

{

"command_id": "cmd_night_capital_001",

"command_name": "RunNightShiftCapitalSweepCommand",

"issued_by": "scheduler",

"target_service": "workflow-service",

"payload": {

"estate_id": "estate_001",

"watchlist_id": "watchlist_core",

"max_memos": 5

}

}

```

### `PromoteOpportunityToBuildCommand`

```json

{

"command_id": "cmd_promote_opp_001",

"command_name": "PromoteOpportunityToBuildCommand",

"issued_by": "RevenueDirector",

"target_service": "asset-foundry-service",

"payload": {

"opportunity_id": "opp_001",

"promotion_target": "content_build",

"requested_outputs": ["script", "thumbnail_brief", "approval_packet"]

}

}

```

### `RequestApprovalCommand`

```json

{

"command_id": "cmd_approval_001",

"command_name": "RequestApprovalCommand",

"issued_by": "ApprovalGovernor",

"target_service": "approval-service",

"payload": {

"requested_action_type": "publish_video",

"requested_by_agent": "ApprovalGovernor",

"risk_tier": "tier_3",

"autonomy_class": "class_4",

"evidence_refs": ["asset_001", "workflow_123"],

"recommended_decision": "approve"

}

}

```

## 69.5 Approval payload contract

This should be treated as a first-class packet shape across
web/mobile/operator surfaces.

```json

{

"approval_request_id": "approval_001",

"headline": "Publish overnight content packet",

"summary": "Highest-ranked overnight output for the current opportunity
window.",

"requested_action_type": "publish_video",

"risk_tier": "tier_3",

"autonomy_class": "class_4",

"requested_by_agent": "ApprovalGovernor",

"decision_options": [

{"value": "approve", "label": "Approve and continue"},

{"value": "reject", "label": "Reject and archive"},

{"value": "snooze", "label": "Snooze for later"}

],

"cost_summary": {

"estimated_spend": 18.25,

"currency": "USD",

"budget_status": "within_limit"

},

"evidence_refs": ["opp_001", "asset_001", "workflow_123"],

"reversible": false,

"expires_at": "2026-06-05T08:00:00Z",

"recommended_decision": "approve"

}

```

## 69.6 Contract governance rule

Every event and command schema must carry:

- version,

- producer/owner,

- example payload,

- validation rules,

- and deprecation policy.

If it does not, it is not a production contract yet.

---

# 70. Appendix Z: Workflow Graph Specifications

This appendix turns the major founder-visible workflows into graph-style
execution specs. These are implementation guides for orchestration
systems such as LangGraph, Trigger.dev flows, Temporal workflows, or
equivalent.

## 70.1 Workflow graph notation

Use the following conceptual node types:

- `input`: ingest or hydrate context

- `decision`: branching logic or score threshold

- `action`: concrete work step or provider call

- `approval`: human-in-the-loop pause

- `writeback`: persist records and memory

- `notify`: founder-facing output

- `end`: terminal state

## 70.2 Graph Spec: Morning Board Generation

### Objective

Create one coherent board that compresses current state, opportunities,
approvals, and momentum.

### Nodes

1. `input.load_identity_and_policies`

2. `input.load_latest_state_snapshot`

3. `input.load_open_approvals`

4. `input.load_top_opportunities`

5. `input.load_recent_momentum_signals`

6. `decision.detect_missing_signals`

7. `action.compose_board_sections`

8. `action.rank_moves`

9. `writeback.persist_board`

10. `notify.deliver_board`

11. `end.board_ready`

### Branch logic

- if critical signals missing → mark board as partial, continue

- if no approvals and no strong opportunities → still generate board
with smallest next step recommendation

### Outputs

- `MorningBoard`

- `board.generated` event

## 70.3 Graph Spec: Night Shift Content Sweep

### Objective

Detect, score, and promote overnight content opportunities, then build
packets or assets for approval.

### Nodes

1. `input.load_budget_policy`

2. `input.sync_content_providers`

3. `input.load_prior_asset_performance`

4. `action.collect_trend_signals`

5. `action.collect_analytics_signals`

6. `action.collect_competitor_signals`

7. `action.normalize_signals`

8. `decision.cluster_and_filter_topics`

9. `action.score_opportunities`

10. `decision.select_top_opportunities`

11. `action.promote_opportunities_to_build`

12. `action.generate_build_packets`

13. `decision.requires_render`

14. `action.render_assets_if_allowed`

15. `decision.requires_approval`

16. `approval.request_founder_approval`

17. `writeback.persist_opportunities_assets_and_runs`

18. `notify.attach_to_morning_board`

19. `end.content_sweep_complete`

### Branch logic

- if budget exhausted → skip rendering, create briefs only

- if signal confidence low → archive or hold, do not promote

- if asset render fails → downgrade to build packet and continue

### Outputs

- `OpportunityRecord[]`

- `AssetRecord[]`

- optional `ApprovalRequest[]`

## 70.4 Graph Spec: Night Shift Capital Sweep

### Objective

Refresh watchlist, ingest filings, score changes, and generate a
founder-usable capital brief.

### Nodes

1. `input.load_watchlist_and_policy`

2. `action.sync_edgar_and_market_inputs`

3. `action.normalize_filing_signals`

4. `action.generate_macro_backdrop`

5. `action.score_quality_valuation_and_risk`

6. `decision.detect_thesis_changes`

7. `action.generate_memos`

8. `writeback.persist_capital_brief`

9. `notify.attach_to_morning_board`

10. `end.capital_sweep_complete`

### Branch logic

- if provider unavailable → brief marked partial with missing data
annotation

- if confidence below threshold → output watch-only note rather than
assertive recommendation

## 70.5 Graph Spec: Approval Resolution and Workflow Resume

### Objective

Resolve approval, update audit trail, and continue or terminate paused
workflow.

### Nodes

1. `input.load_approval_request`

2. `input.load_bound_workflow_run`

3. `decision.evaluate_founder_decision`

4. `action.update_approval_status`

5. `decision.approve_or_reject_or_snooze`

6. `action.resume_workflow_if_approved`

7. `action.archive_or_cleanup_if_rejected`

8. `action.defer_if_snoozed`

9. `writeback.persist_decision_audit`

10. `notify.update_founder_surfaces`

11. `end.approval_resolved`

## 70.6 Graph Spec: App Foundry Experiment

### Objective

Take a promoted product opportunity and scaffold a build-ready
experiment with preview deployment.

### Nodes

1. `input.load_opportunity_and_policy`

2. `decision.validate_build_threshold`

3. `action.select_template_family`

4. `action.generate_product_brief`

5. `action.generate_schema_and_app_scaffold`

6. `action.configure_backend_resources`

7. `action.generate_preview_deployment`

8. `decision.domain_purchase_allowed`

9. `action.reserve_or_suggest_domain`

10. `writeback.persist_asset_and_preview`

11. `decision.requires_approval_for_launch`

12. `approval.request_founder_approval`

13. `end.app_foundry_packet_ready`

## 70.7 Graph Spec: State Snapshot and Transition Intervention

### Objective

Convert signals into state and optionally recommend or execute a
low-risk intervention.

### Nodes

1. `input.collect_recent_signals`

2. `action.normalize_state_features`

3. `action.compute_readiness_and_risk`

4. `action.persist_state_snapshot`

5. `decision.detect_transition`

6. `decision.intervention_needed`

7. `action.generate_intervention_preview`

8. `decision.auto_execute_low_risk_or_request_approval`

9. `action.execute_low_risk_intervention_if_allowed`

10. `writeback.persist_intervention_log`

11. `notify.optional_state_nudge`

12. `end.state_cycle_complete`

## 70.8 Workflow graph implementation rules

Every workflow graph should specify:

- owning service/team

- trigger type

- required input schemas

- emitted events

- persisted records

- approval pause points

- rollback strategy

- degraded-mode behavior

- observability requirements

## 70.9 Practical orchestration guidance

For the first implementation wave:

- use durable workflows for Night Shift and approvals,

- keep graph nodes small and testable,

- emit explicit state transitions,

- and never hide meaningful side effects inside prompt-only agent
steps.

The graph should be inspectable by humans.

---

# 71. Appendix AA: Execution Pack v4 — Database Physical Design and
Index Strategy

This appendix moves from logical records to physical persistence. The
goal is not to lock the team into one database vendor forever; the goal
is to make sure the system is physically modeled in a way that preserves
speed, provenance, temporal reasoning, and founder-facing
responsiveness.

## 71.1 Storage pattern

Recommended physical pattern for early production:

- **primary relational database** for operational truth

- **object storage** for large artifacts and raw files

- **vector index** for semantic recall

- **graph/temporal layer** for relationship memory and changing
truth over time

- **warehouse/marts** for analytics and retrospective analysis

The first implementation can run with one primary relational store plus
object storage and one vector layer, but schemas should preserve a
future graph and warehouse path.

## 71.2 Suggested operational schema groups

### Identity and policy schema

Tables:

- `person_profiles`

- `estate_profiles`

- `estate_memberships`

- `policy_bundles`

- `permission_scopes`

- `approval_profiles`

- `integration_ownerships`

### Memory schema

Tables:

- `memory_items`

- `memory_sources`

- `memory_chunks`

- `memory_entities`

- `memory_topics`

- `memory_edges`

- `memory_access_log`

### State schema

Tables:

- `state_snapshots`

- `state_signal_refs`

- `transition_events`

- `environment_contexts`

- `friction_profiles`

- `intervention_logs`

### Workflow schema

Tables:

- `workflow_runs`

- `workflow_steps`

- `workflow_inputs`

- `workflow_outputs`

- `workflow_failures`

- `workflow_bindings` (e.g. to approvals or assets)

### Approval schema

Tables:

- `approval_requests`

- `approval_decisions`

- `approval_evidence_refs`

- `approval_policy_snapshots`

### Opportunity and foundry schema

Tables:

- `opportunity_records`

- `opportunity_scores`

- `opportunity_source_signals`

- `asset_records`

- `asset_variants`

- `render_jobs`

- `preview_deployments`

### Capital schema

Tables:

- `watchlists`

- `watchlist_members`

- `filing_signals`

- `capital_memos`

- `thesis_records`

- `risk_changes`

- `catalyst_events`

### Estate schema

Tables:

- `room_profiles`

- `device_profiles`

- `room_telemetry`

- `estate_modes`

- `intervention_policies`

- `estate_actions`

### Integration and operations schema

Tables:

- `integration_profiles`

- `integration_sync_runs`

- `integration_failures`

- `queue_messages_audit`

- `dlq_events`

- `provider_cost_events`

## 71.3 Table design notes by critical object

### `memory_items`

Recommended columns:

- `memory_id` PK

- `memory_type`

- `title`

- `summary`

- `source_id`

- `permissions_scope`

- `importance_score`

- `freshness_score`

- `created_at`

- `updated_at`

- `deleted_at` nullable

Recommended indexes:

- `(permissions_scope, created_at desc)`

- `(memory_type, created_at desc)`

- GIN/FTS index on summary/title where supported

- partial index on `deleted_at is null`

### `memory_chunks`

Recommended columns:

- `chunk_id` PK

- `memory_id` FK

- `chunk_order`

- `chunk_text`

- `token_estimate`

- `embedding_ref`

- `graph_ref`

Recommended indexes:

- `(memory_id, chunk_order)` unique

- `(embedding_ref)`

### `state_snapshots`

Recommended columns:

- `snapshot_id` PK

- `person_id`

- `estate_id`

- `timestamp`

- `readiness_band`

- `readiness_score`

- `recovery_score`

- `friction_score`

- `overload_risk_score`

- `confidence`

- `environment_context_id`

Recommended indexes:

- `(person_id, timestamp desc)`

- `(estate_id, timestamp desc)`

- `(readiness_band, timestamp desc)`

Partition recommendation:

- time partition by month if volume becomes significant

### `workflow_runs`

Recommended columns:

- `run_id` PK

- `workflow_type`

- `initiator_type`

- `initiator_id`

- `status`

- `priority`

- `started_at`

- `ended_at`

- `trace_ref`

- `approval_state`

- `cost_estimate`

- `actual_cost`

Recommended indexes:

- `(workflow_type, started_at desc)`

- `(status, started_at desc)`

- `(approval_state, started_at desc)`

- `(trace_ref)`

### `approval_requests`

Recommended columns:

- `approval_request_id` PK

- `requested_action_type`

- `requested_by_agent`

- `risk_tier`

- `autonomy_class`

- `decision_status`

- `expires_at`

- `created_at`

- `decision_at`

- `decision_by`

Recommended indexes:

- `(decision_status, created_at desc)`

- `(expires_at)`

- `(risk_tier, decision_status)`

### `opportunity_records`

Recommended columns:

- `opportunity_id` PK

- `opportunity_domain`

- `title`

- `status`

- `owner_agent`

- `confidence_score`

- `created_at`

- `updated_at`

Recommended indexes:

- `(opportunity_domain, created_at desc)`

- `(status, updated_at desc)`

- `(confidence_score desc)`

### `asset_records`

Recommended columns:

- `asset_id` PK

- `asset_type`

- `source_opportunity_id`

- `status`

- `preview_url`

- `approval_request_id`

- `created_at`

- `updated_at`

Recommended indexes:

- `(source_opportunity_id)`

- `(status, created_at desc)`

- `(approval_request_id)`

## 71.4 Cross-table design rules

- all externally visible records use immutable IDs

- use soft-delete or tombstone patterns for audit-sensitive tables

- keep provider raw payloads in append-only side tables or object
storage, not mixed into canonical columns

- treat policy snapshotting as first-class for approvals and sensitive
actions

- use foreign keys for integrity where operationally safe

- use audit tables for decision and action history rather than
overwriting critical fields with no trail

## 71.5 Suggested materialized views / denormalized read models

To keep founder surfaces fast, engineering should build read models
rather than overloading transaction tables.

Recommended read models:

- `mv_morning_board_inputs`

- `mv_open_approvals`

- `mv_top_opportunities`

- `mv_recent_state_profile`

- `mv_recent_capital_brief_inputs`

- `mv_room_status_current`

- `mv_night_shift_last_run`

## 71.6 Vector and search indexing guidance

Vector store metadata should minimally include:

- `memory_id`

- `chunk_id`

- `permissions_scope`

- `memory_type`

- `source_type`

- `created_at`

- `importance_score`

- `freshness_score`

Filtering requirements:

- permission scope filtering before response

- optional memory type filtering

- optional date filtering

- optional source-grounded-only mode

## 71.7 Graph / temporal memory design guidance

Whether the graph lives in a dedicated store or relational side tables
initially, it should support:

- entity ↔ memory item relations

- entity ↔ entity relations

- person ↔ state relations over time

- opportunity ↔ asset ↔ outcome relations

- document ↔ claim ↔ evidence relations

Minimum edge fields:

- `edge_id`

- `from_node`

- `to_node`

- `edge_type`

- `valid_from`

- `valid_to`

- `confidence`

- `provenance_ref`

## 71.8 Database performance rules

- founder-facing queries must prefer pre-joined read models or caches

- Night Shift writes should not starve founder UI reads

- long analytical scans should go to marts/warehouse, not hot
operational tables

- high-churn telemetry should be summarized before long-term
persistence when possible

## 71.9 Physical design acceptance criteria

This appendix is satisfied when engineering can answer all of the
following:

- where does each canonical record physically live?

- what is the source of truth for each domain?

- what indexes make founder UX fast?

- what data is append-only vs mutable?

- how are sensitive deletions/redactions handled?

- how are provider raw payloads preserved without polluting canonical
tables?

---

# 72. Appendix AB: Execution Pack v4 — Queue, Topic, and Streaming
Contracts

This appendix defines the async transport layer in a more
execution-ready way.

## 72.1 Messaging model

Hotel Nexus should use a mixed pattern:

- **commands** for directed intent

- **events** for facts that occurred

- **queues** for work distribution and retries

- **topics/streams** for fan-out notifications and state changes

## 72.2 Queue families

### `queue.workflow.high`

Use for:

- Morning Board generation

- approval resume paths

- founder-triggered critical workflows

Message contract:

```json

{

"message_type": "workflow_command",

"workflow_type": "generate_morning_board",

"priority": "high",

"correlation_id": "workflow_123",

"payload_ref": "cmd_board_001"

}

```

### `queue.workflow.batch`

Use for:

- Night Shift content sweep

- Night Shift capital sweep

- scheduled sync jobs

### `queue.memory.ingest`

Use for:

- raw document ingestion

- transcript normalization

- graph linking tasks

- embedding generation requests

### `queue.asset.render`

Use for:

- media render jobs

- thumbnail generation

- audio generation

- post-processing jobs

### `queue.approval.awaiting`

Use for:

- queued approval packets for delivery and tracking

### `queue.integration.sync`

Use for:

- provider sync executions

- backfills

- health checks

### `queue.estate.low_risk_actions`

Use for:

- low-risk room interventions

- notification routing changes

- environment scene changes where policy allows

## 72.3 Topic families

### `topic.state`

Event names include:

- `state.snapshot.created`

- `state.risk_changed`

- `state.readiness_band_changed`

### `topic.workflow`

Event names include:

- `workflow.started`

- `workflow.paused_for_approval`

- `workflow.completed`

- `workflow.failed`

### `topic.approval`

Event names include:

- `approval.requested`

- `approval.approved`

- `approval.rejected`

- `approval.expired`

### `topic.opportunity`

Event names include:

- `opportunity.detected`

- `opportunity.scored`

- `opportunity.promoted_to_build`

### `topic.asset`

Event names include:

- `asset.draft_created`

- `asset.render.completed`

- `asset.packaged_for_approval`

### `topic.integration`

Event names include:

- `integration.sync_started`

- `integration.sync_failed`

- `integration.credential_expiring`

### `topic.estate`

Event names include:

- `room.entered`

- `ambient.intervention_recommended`

- `ambient.intervention_executed`

## 72.4 Topic naming rule

Use `{domain}.{event_name}` as the event name and map it to a physical
topic/stream per domain or per environment. Do not let teams invent
opaque topic names ad hoc.

## 72.5 Message headers

Every message should carry standard headers where the transport supports
them:

- `message_id`

- `schema_version`

- `correlation_id`

- `causation_id`

- `tenant_ref`

- `priority`

- `emitted_by`

- `environment`

## 72.6 Ordering guidance

Strict ordering should only be required within scoped streams where it
actually matters, such as:

- approval decisions for a single approval request

- state snapshots for one person within a short time window

- workflow step transitions for one run

Avoid global ordering assumptions.

## 72.7 Consumer groups

Recommended consumer groups:

- `cg.board_assembly`

- `cg.memory_enrichment`

- `cg.opportunity_scoring`

- `cg.render_completion`

- `cg.approval_dispatch`

- `cg.operator_console_updates`

- `cg.audit_persistence`

## 72.8 Queue/topic contract acceptance criteria

This appendix is satisfied when engineering can answer:

- what is a command vs an event in this system?

- what queues exist and who owns them?

- what topics exist and which consumers subscribe?

- what headers are mandatory?

- where is ordering required and where is it intentionally not
required?

---

# 73. Appendix AC: Execution Pack v4 — Retry, Idempotency, and
Dead-Letter Policies

This appendix formalizes fault tolerance. A platform with this many
integrations and overnight jobs cannot be credible without disciplined
retry and failure handling.

## 73.1 Failure classes

Recommended universal failure classes:

- `transient_network_failure`

- `provider_rate_limited`

- `provider_auth_failure`

- `validation_failure`

- `policy_blocked`

- `insufficient_budget`

- `workflow_dependency_missing`

- `irrecoverable_provider_error`

- `timeout`

- `partial_data_unavailable`

## 73.2 Retry policy matrix

| Failure class | Retry? | Notes |

| ---------------------------- | ------------------ |
---------------------------------------- |

| transient_network_failure | yes | exponential backoff |

| provider_rate_limited | yes | respect provider-specific cooldown |

| provider_auth_failure | no immediate retry | require credential or
scope intervention |

| validation_failure | no | fix payload/contract |

| policy_blocked | no | requires human or policy change |

| insufficient_budget | no immediate retry | await budget refresh or
approval |

| workflow_dependency_missing | limited retry | after upstream
readiness check |

| irrecoverable_provider_error | no | DLQ with operator review |

| timeout | yes, bounded | require idempotency key |

| partial_data_unavailable | maybe | continue in degraded mode where
allowed |

## 73.3 Exponential backoff guidance

Suggested defaults for retriable jobs:

- attempt 1: immediate or short delay

- attempt 2: 30 seconds

- attempt 3: 2 minutes

- attempt 4: 10 minutes

- attempt 5: 30 minutes

Night Shift jobs may use longer backoff if they remain within founder
wake-window constraints.

## 73.4 Idempotency requirements

Idempotency is mandatory for:

- approval creation

- render job creation

- publish/package requests

- domain reservation attempts

- app scaffold creation requests

- workflow resume requests

- decision writes

Standard idempotency key shape:

```json

{

"idempotency_key": "approval_001_publish_video_v1",

"scope": "approval-service:create-approval",

"issued_at": "2026-06-04T03:00:00Z"

}

```

## 73.5 Dead-letter queue policy

A message should go to DLQ when:

- retries exhausted,

- schema invalid and cannot be normalized,

- required dependency persistently missing,

- provider returned irrecoverable response,

- policy makes execution impossible without redesign.

DLQ payload should include:

```json

{

"dlq_id": "dlq_001",

"original_message_id": "msg_123",

"failure_class": "irrecoverable_provider_error",

"failed_at": "2026-06-04T03:15:00Z",

"producer": "asset-foundry-service",

"queue_name": "queue.asset.render",

"payload_ref": "render_job_456",

"retry_count": 5,

"operator_action_required": true

}

```

## 73.6 Degraded mode rules

If a workflow can still provide founder value with missing non-critical
dependencies, it should degrade rather than fail fully.

Examples:

- Night Shift content sweep can still produce briefs if rendering fails

- capital sweep can still produce watch-only notes if one provider is
missing

- Morning Board can still render if one section is partial and
explicitly marked

## 73.7 Operator review loop

DLQ and retry exhaustion should feed:

- operator-console alerts

- weekly reliability review

- provider health scoring

- candidate adapter hardening backlog

## 73.8 Reliability principle

The founder should never be forced to guess whether something failed.
The system must:

- show what completed,

- show what degraded,

- show what failed,

- and show whether founder action is required.

---

# 74. Appendix AD: Execution Pack v4 — Founder Cockpit Screen
Specification

This appendix upgrades the product surface spec into a screen-level
founder cockpit plan.

## 74.1 Cockpit philosophy

The founder cockpit is not a generic dashboard. It is the **operating
bridge of the estate**. It must feel calm, ranked, evidence-aware, and
mode-sensitive.

## 74.2 Core founder-web screens

### Screen 1: Home / Morning Command Board

Purpose:

- the single highest-leverage entry point into the estate each day.

Primary regions:

- top bar: current mode, readiness band, open critical alerts

- left column: Body section

- center column: Moves section and top approvals

- right column: Money and Momentum sections

- bottom strip: Night Shift status / last successful run / partial data
warnings

Primary actions:

- approve top item

- open board details

- ask voice question

- snooze recommendation

- enter focus mode

Success condition:

- founder can understand the day and take the first action within 60–90
seconds.

### Screen 2: Approval Center

Purpose:

- act on all pending decisions quickly and safely.

Primary regions:

- queue list with risk tier badges

- approval detail panel

- evidence drawer

- spend impact block

- action footer (approve / reject / snooze)

Required behaviors:

- keyboard and mobile-friendly rapid triage

- decision audit preview

- clear reversibility indicator

### Screen 3: Opportunity Cockpit

Purpose:

- inspect the live opportunity pipeline.

Primary regions:

- ranked opportunity list

- score breakdown panel

- source signals panel

- build promotion controls

- asset linkage panel

Required views:

- content opportunities

- app/product opportunities

- capital opportunity summaries (or linked surface)

### Screen 4: Foundry Console

Purpose:

- inspect builds, renders, app scaffolds, and launch packets.

Primary regions:

- current jobs list

- asset previews

- provider status indicators

- package-for-approval actions

- deployment preview links

### Screen 5: Memory Console

Purpose:

- inspect what the estate knows and why.

Primary regions:

- search bar with retrieval mode selector

- results list

- source pane

- provenance pane

- timeline / related entity panel

### Screen 6: State and Estate Console

Purpose:

- inspect readiness, transitions, room state, and interventions.

Primary regions:

- latest state card

- recent transitions timeline

- room telemetry cards

- intervention recommendations

- mode control panel

### Screen 7: Capital Briefing Surface

Purpose:

- present the overnight capital desk output in compressed form.

Primary regions:

- market backdrop

- watchlist changes

- top setup

- top risk

- latest memo cards

## 74.3 Mobile screens

Minimum mobile screens:

- Board summary

- Approval queue

- Quick voice capture

- Alerts

- Top opportunities digest

## 74.4 Design annotations every screen should support

Each major object should be visually tagged as one of:

- `observed`

- `inferred`

- `generated`

- `simulated`

- `awaiting_approval`

That visual trust layer is critical.

## 74.5 Cockpit interaction rules

- never force blank-state planning when ranked suggestions exist

- keep top-level navigation stable

- keep the number of simultaneous critical actions low

- preserve “smallest next step” affordances

- show degraded mode explicitly

- preserve voice-first escape hatches from every core screen

## 74.6 Founder cockpit acceptance criteria

The founder cockpit is working when:

- the board is trusted,

- approvals are fast,

- evidence is one click away,

- failures are visible,

- and the UI feels like leverage, not management overhead.

---

# 75. Appendix AE: Execution Pack v4 — Deployment, Environment, and
Runtime Blueprint

This appendix translates the platform into deployable runtime shape.

## 75.1 Environment strategy

Recommended environments:

- `local-dev`

- `shared-dev`

- `staging`

- `founder-prod`

- `pilot-prod` (future white-label / trusted pilot)

Recommended environment rules:

- all integrations start in sandbox or read-only modes where available

- founder-prod has stronger secret and spend controls than staging

- pilot-prod should never share tenant data paths with founder-prod

## 75.2 Runtime tiers

### Tier 1 — user-facing applications

- founder-web

- founder-mobile backend surfaces

- operator-console

- ambient-hub

### Tier 2 — core services

- api-gateway

- identity-service

- memory-service

- state-service

- workflow-service

- approval-service

- opportunity-service

- asset-foundry-service

- capital-service

- estate-service

- integration-service

- notification-service

- observability-service

### Tier 3 — infrastructure dependencies

- relational database

- object storage

- queue/stream broker

- vector index

- graph/temporal store (or transitional equivalent)

- secret manager

- monitoring/logging stack

## 75.3 Deployment pattern

Recommended early deployment pattern:

- containerized services

- one shared cluster or managed runtime per environment

- managed relational DB where possible

- managed object storage

- managed secret storage

- managed queue/stream layer if team size is small

The goal is not maximum infra novelty; it is fast reliability.

## 75.4 Networking and trust boundaries

Recommended trust boundaries:

- public ingress only through api-gateway and approved UI surfaces

- internal service-to-service traffic on private network

- sensitive providers accessed only from approved integration runtime

- secrets never exposed to frontend clients

- health/legal/finance domains enforced via policy and backend checks,
not UI hints alone

## 75.5 Background execution blueprint

Night Shift and similar workloads require dedicated background execution
capacity.

Recommended runtime separation:

- user-facing request workloads

- batch/scheduled workflow workers

- render/adaptor workers

- telemetry/ingestion workers

This prevents overnight jobs from degrading live founder experience.

## 75.6 Config and secret handling

Config classes:

- environment config

- provider config

- budget/spend config

- policy config

- feature flag config

- notification routing config

Secret handling rules:

- per-environment secret sets

- least privilege scopes

- rotation policy documented

- no raw secret values in logs, prompts, or artifacts

## 75.7 Deployment blueprint by service criticality

### Critical path services

Must have stronger uptime and alerting:

- api-gateway

- identity-service

- workflow-service

- approval-service

- memory-service

### Degradable-but-important services

Can degrade gracefully if necessary:

- opportunity-service

- capital-service

- estate-service

- notification-service

### Async-heavy services

Can recover from backlog with bounded lag:

- asset-foundry-service

- integration-service

- observability-service

## 75.8 Release blueprint

Recommended release sequence:

1. contract changes

2. data migrations

3. backend services

4. workers

5. UI surfaces

6. feature flags enablement

7. founder-only validation

8. wider ring rollout

## 75.9 Backup and recovery guidance

Engineering should define early:

- relational DB backup cadence

- object storage retention/versioning

- workflow run replay strategy

- queue replay strategy where supported

- secret recovery and rotation procedures

- environment restore runbook

## 75.10 Deployment acceptance criteria

This appendix is satisfied when the team can answer:

- where does every service run?

- what scales independently?

- what happens if Night Shift spikes load?

- how are secrets isolated?

- how are environments separated?

- how does the system recover from partial outage or provider failure?

---

# 76. Appendix AF: Execution Pack v5 — Database Migration Planning and
Draft DDL Direction

This appendix extends the physical design into migration practice and
draft DDL direction. The goal is not to prematurely freeze a full
database implementation, but to make the database layer real enough that
engineering can start migration files, review table ownership, and
establish production-safe change discipline.

## 76.1 Migration philosophy

Hotel Nexus should treat schema changes as product changes, not
incidental backend edits.

That means:

- every schema change is versioned,

- every migration has an owner,

- every destructive change has a rollback or mitigation plan,

- every sensitive-domain change is reviewed for audit and retention
impact,

- and every schema change is reflected in contracts, code, tests, and
read models.

## 76.2 Migration categories

Recommended migration classes:

### Class A — additive safe changes

Examples:

- new nullable columns

- new tables

- new indexes created safely

- new enum values when supported without downtime risk

### Class B — backfill-requiring changes

Examples:

- new non-null columns introduced through staged backfill

- new derived read models

- partition introduction

- data normalization moves

### Class C — contract-impacting changes

Examples:

- column renames

- enum semantics changes

- event payload reference changes

- primary key strategy changes

### Class D — destructive or highly sensitive changes

Examples:

- dropping columns/tables

- changing permission semantics

- changing approval audit paths

- rewriting history-bearing tables

Class C and D changes should require explicit review across platform,
data, and product owners.

## 76.3 Migration sequence pattern

For most meaningful schema evolution, follow this sequence:

1. add new structure

2. dual-write if needed

3. backfill historical data

4. shift readers to new path

5. verify metrics and correctness

6. deprecate old path

7. remove old path only after safe window

This pattern is especially important for:

- approval data,

- workflow state,

- memory records,

- and founder-facing read models.

## 76.4 Suggested first migration sets

### Migration set 001 — identity and estate foundation

Create:

- `person_profiles`

- `estate_profiles`

- `estate_memberships`

- `policy_bundles`

- `approval_profiles`

- `permission_scopes`

### Migration set 002 — memory spine foundation

Create:

- `memory_sources`

- `memory_items`

- `memory_chunks`

- `memory_entities`

- `memory_topics`

- `memory_access_log`

### Migration set 003 — state and transitions foundation

Create:

- `environment_contexts`

- `state_snapshots`

- `state_signal_refs`

- `transition_events`

- `intervention_logs`

### Migration set 004 — workflow and approvals foundation

Create:

- `workflow_runs`

- `workflow_steps`

- `workflow_failures`

- `approval_requests`

- `approval_decisions`

- `approval_evidence_refs`

### Migration set 005 — opportunities and assets foundation

Create:

- `opportunity_records`

- `opportunity_scores`

- `opportunity_source_signals`

- `asset_records`

- `asset_variants`

- `render_jobs`

### Migration set 006 — capital and estate operations foundation

Create:

- `watchlists`

- `watchlist_members`

- `filing_signals`

- `capital_memos`

- `room_profiles`

- `device_profiles`

- `room_telemetry`

## 76.5 Draft DDL direction

The following examples are directional DDL drafts. They should be
adapted to the chosen relational engine and migration framework.

### Draft DDL: `person_profiles`

```sql

CREATE TABLE person_profiles (

person_id TEXT PRIMARY KEY,

display_name TEXT NOT NULL,

timezone TEXT NOT NULL,

preferred_language TEXT NOT NULL DEFAULT 'en',

communication_style TEXT NOT NULL,

privacy_profile_id TEXT NOT NULL,

approval_profile_id TEXT NOT NULL,

risk_profile_id TEXT NOT NULL,

created_at TIMESTAMPTZ NOT NULL DEFAULT now(),

updated_at TIMESTAMPTZ NOT NULL DEFAULT now()

);

CREATE INDEX idx_person_profiles_timezone

ON person_profiles (timezone);

```

### Draft DDL: `memory_items`

```sql

CREATE TABLE memory_items (

memory_id TEXT PRIMARY KEY,

memory_type TEXT NOT NULL,

title TEXT,

summary TEXT NOT NULL,

source_id TEXT NOT NULL,

permissions_scope TEXT NOT NULL,

importance_score NUMERIC(5,4),

freshness_score NUMERIC(5,4),

created_at TIMESTAMPTZ NOT NULL DEFAULT now(),

updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),

deleted_at TIMESTAMPTZ NULL

);

CREATE INDEX idx_memory_items_scope_created

ON memory_items (permissions_scope, created_at DESC)

WHERE deleted_at IS NULL;

CREATE INDEX idx_memory_items_type_created

ON memory_items (memory_type, created_at DESC)

WHERE deleted_at IS NULL;

```

### Draft DDL: `memory_chunks`

```sql

CREATE TABLE memory_chunks (

chunk_id TEXT PRIMARY KEY,

memory_id TEXT NOT NULL REFERENCES memory_items(memory_id),

chunk_order INTEGER NOT NULL,

chunk_text TEXT NOT NULL,

token_estimate INTEGER,

embedding_ref TEXT,

graph_ref TEXT,

created_at TIMESTAMPTZ NOT NULL DEFAULT now(),

UNIQUE (memory_id, chunk_order)

);

CREATE INDEX idx_memory_chunks_embedding_ref

ON memory_chunks (embedding_ref);

```

### Draft DDL: `state_snapshots`

```sql

CREATE TABLE state_snapshots (

snapshot_id TEXT PRIMARY KEY,

person_id TEXT NOT NULL REFERENCES person_profiles(person_id),

estate_id TEXT NOT NULL,

snapshot_at TIMESTAMPTZ NOT NULL,

readiness_band TEXT NOT NULL,

readiness_score NUMERIC(5,4),

recovery_score NUMERIC(5,4),

friction_score NUMERIC(5,4),

overload_risk_score NUMERIC(5,4),

confidence NUMERIC(5,4),

environment_context_id TEXT,

created_at TIMESTAMPTZ NOT NULL DEFAULT now()

);

CREATE INDEX idx_state_snapshots_person_time

ON state_snapshots (person_id, snapshot_at DESC);

CREATE INDEX idx_state_snapshots_estate_time

ON state_snapshots (estate_id, snapshot_at DESC);

```

### Draft DDL: `workflow_runs`

```sql

CREATE TABLE workflow_runs (

run_id TEXT PRIMARY KEY,

workflow_type TEXT NOT NULL,

initiator_type TEXT NOT NULL,

initiator_id TEXT NOT NULL,

status TEXT NOT NULL,

priority TEXT NOT NULL,

approval_state TEXT,

started_at TIMESTAMPTZ NOT NULL,

ended_at TIMESTAMPTZ NULL,

cost_estimate NUMERIC(12,2),

actual_cost NUMERIC(12,2),

trace_ref TEXT,

created_at TIMESTAMPTZ NOT NULL DEFAULT now()

);

CREATE INDEX idx_workflow_runs_type_started

ON workflow_runs (workflow_type, started_at DESC);

CREATE INDEX idx_workflow_runs_status_started

ON workflow_runs (status, started_at DESC);

```

### Draft DDL: `approval_requests`

```sql

CREATE TABLE approval_requests (

approval_request_id TEXT PRIMARY KEY,

requested_action_type TEXT NOT NULL,

requested_by_agent TEXT NOT NULL,

risk_tier TEXT NOT NULL,

autonomy_class TEXT NOT NULL,

decision_status TEXT NOT NULL DEFAULT 'pending',

spend_ceiling NUMERIC(12,2),

currency TEXT,

reversible BOOLEAN NOT NULL DEFAULT false,

expires_at TIMESTAMPTZ NULL,

created_at TIMESTAMPTZ NOT NULL DEFAULT now(),

decision_at TIMESTAMPTZ NULL,

decision_by TEXT NULL

);

CREATE INDEX idx_approval_requests_status_created

ON approval_requests (decision_status, created_at DESC);

CREATE INDEX idx_approval_requests_expires_at

ON approval_requests (expires_at)

WHERE decision_status = 'pending';

```

### Draft DDL: `opportunity_records`

```sql

CREATE TABLE opportunity_records (

opportunity_id TEXT PRIMARY KEY,

opportunity_domain TEXT NOT NULL,

title TEXT NOT NULL,

hypothesis TEXT,

status TEXT NOT NULL,

owner_agent TEXT NOT NULL,

confidence_score NUMERIC(5,4),

created_at TIMESTAMPTZ NOT NULL DEFAULT now(),

updated_at TIMESTAMPTZ NOT NULL DEFAULT now()

);

CREATE INDEX idx_opportunity_records_domain_created

ON opportunity_records (opportunity_domain, created_at DESC);

CREATE INDEX idx_opportunity_records_status_updated

ON opportunity_records (status, updated_at DESC);

```

### Draft DDL: `asset_records`

```sql

CREATE TABLE asset_records (

asset_id TEXT PRIMARY KEY,

asset_type TEXT NOT NULL,

source_opportunity_id TEXT REFERENCES
opportunity_records(opportunity_id),

status TEXT NOT NULL,

preview_url TEXT,

approval_request_id TEXT NULL REFERENCES
approval_requests(approval_request_id),

created_at TIMESTAMPTZ NOT NULL DEFAULT now(),

updated_at TIMESTAMPTZ NOT NULL DEFAULT now()

);

CREATE INDEX idx_asset_records_source_opp

ON asset_records (source_opportunity_id);

CREATE INDEX idx_asset_records_status_created

ON asset_records (status, created_at DESC);

```

## 76.6 Migration review checklist

Every migration PR should answer:

- what domain owns this schema change?

- what contracts are affected?

- what indexes are added or changed?

- is backfill required?

- what is the rollback path?

- what founder surfaces depend on this change?

- does this affect health/legal/finance permission behavior?

## 76.7 Migration testing requirements

At minimum, migration validation should include:

- migration-up test

- migration-down test where feasible

- seed data compatibility test

- application boot test against migrated schema

- critical query performance smoke test

- contract compatibility check for APIs/events touching changed tables

## 76.8 Redaction and deletion guidance

Because Hotel Nexus may hold sensitive memory and state data, migrations
must preserve a path for:

- hard deletion where legally or explicitly required

- soft deletion where audit trail is required

- redaction of sensitive payload fragments without breaking referential
integrity

- anonymization for analytics use where needed

## 76.9 Practical v5 goal

This appendix is complete enough for engineering when the team can begin
creating actual migration files with confidence about:

- migration ordering,

- naming conventions,

- critical tables,

- index direction,

- and operational review discipline.

---

# 77. Appendix AG: Execution Pack v5 — Formal OpenAPI and JSON Schema
Style Definitions

This appendix formalizes the contract layer one step further. These are
still draft-style definitions, but they are intentionally shaped to
resemble the kinds of artifacts that can be directly converted into
OpenAPI components, JSON Schemas, generated DTOs, and contract tests.

## 77.1 OpenAPI style conventions

Recommended conventions:

- OpenAPI 3.1 or equivalent

- JSON Schema compatible component definitions

- stable operation IDs

- common response envelopes

- reusable `Error`, `Meta`, and pagination components

- security schemes declared per surface rather than implied

## 77.2 Draft component schemas

### Component: `Meta`

```yaml

Meta:

type: object

required: [generated_at, schema_version]

properties:

generated_at:

type: string

format: date-time

schema_version:

type: string

confidence:

type: number

minimum: 0

maximum: 1

provenance_refs:

type: array

items:

type: string

```

### Component: `Error`

```yaml

Error:

type: object

required: [code, message]

properties:

code:

type: string

message:

type: string

field:

type: string

retryable:

type: boolean

```

### Component: `ApiEnvelope_MorningBoard`

```yaml

ApiEnvelope_MorningBoard:

type: object

required: [data, meta, errors]

properties:

data:

\$ref: '#/components/schemas/MorningBoard'

meta:

\$ref: '#/components/schemas/Meta'

errors:

type: array

items:

\$ref: '#/components/schemas/Error'

```

### Component: `MorningBoard`

```yaml

MorningBoard:

type: object

required:

- board_id

- generated_at

- state_summary

- body_section

- money_section

- moves_section

- momentum_section

- approval_packets

- narrative_summary

properties:

board_id:

type: string

generated_at:

type: string

format: date-time

state_summary:

type: object

properties:

readiness_band:

type: string

enum: [red, amber, green, blue]

headline:

type: string

body_section:

type: object

additionalProperties: true

money_section:

type: object

additionalProperties: true

moves_section:

type: array

items:

\$ref: '#/components/schemas/RecommendedMove'

momentum_section:

type: object

additionalProperties: true

critical_alerts:

type: array

items:

type: string

approval_packets:

type: array

items:

type: string

narrative_summary:

type: string

```

### Component: `RecommendedMove`

```yaml

RecommendedMove:

type: object

required: [rank, action_type, title, reason]

properties:

rank:

type: integer

minimum: 1

action_type:

type: string

title:

type: string

reason:

type: string

```

### Component: `ApprovalPacket`

```yaml

ApprovalPacket:

type: object

required:

- approval_request_id

- headline

- requested_action_type

- risk_tier

- autonomy_class

- decision_options

properties:

approval_request_id:

type: string

headline:

type: string

summary:

type: string

requested_action_type:

type: string

risk_tier:

type: string

enum: [tier_1, tier_2, tier_3, tier_4]

autonomy_class:

type: string

enum: [class_0, class_1, class_2, class_3, class_4, class_5]

requested_by_agent:

type: string

decision_options:

type: array

items:

type: object

required: [value, label]

properties:

value:

type: string

label:

type: string

reversible:

type: boolean

expires_at:

type: string

format: date-time

```

### Component: `OpportunityRecord`

```yaml

OpportunityRecord:

type: object

required:

- opportunity_id

- opportunity_domain

- title

- status

- owner_agent

properties:

opportunity_id:

type: string

opportunity_domain:

type: string

enum: [content, app, market, product, estate, capital]

title:

type: string

hypothesis:

type: string

status:

type: string

owner_agent:

type: string

confidence_score:

type: number

minimum: 0

maximum: 1

```

### Component: `StateSnapshot`

```yaml

StateSnapshot:

type: object

required:

- snapshot_id

- person_id

- estate_id

- timestamp

- readiness_band

properties:

snapshot_id:

type: string

person_id:

type: string

estate_id:

type: string

timestamp:

type: string

format: date-time

readiness_band:

type: string

enum: [red, amber, green, blue]

readiness_score:

type: number

minimum: 0

maximum: 1

recovery_score:

type: number

minimum: 0

maximum: 1

friction_score:

type: number

minimum: 0

maximum: 1

overload_risk_score:

type: number

minimum: 0

maximum: 1

confidence:

type: number

minimum: 0

maximum: 1

```

## 77.3 Draft internal OpenAPI paths

### Path: `GET /boards/today`

```yaml

/boards/today:

get:

operationId: getTodayBoard

summary: Get the founder's current morning board

responses:

'200':

description: Morning board returned successfully

content:

application/json:

schema:

\$ref: '#/components/schemas/ApiEnvelope_MorningBoard'

'401':

description: Unauthorized

'503':

description: Board unavailable or partial generation failure

```

### Path: `GET /approvals`

```yaml

/approvals:

get:

operationId: listApprovals

summary: List pending or recent approval packets

parameters:

- in: query

name: status

schema:

type: string

- in: query

name: risk_tier

schema:

type: string

responses:

'200':

description: Approval list returned

```

### Path: `POST /approvals/{approval_request_id}/decision`

```yaml

/approvals/{approval_request_id}/decision:

post:

operationId: decideApproval

summary: Approve, reject, or snooze an approval request

parameters:

- in: path

name: approval_request_id

required: true

schema:

type: string

requestBody:

required: true

content:

application/json:

schema:

type: object

required: [decision]

properties:

decision:

type: string

enum: [approve, reject, snooze]

decision_note:

type: string

responses:

'200':

description: Decision recorded

'409':

description: Approval already resolved or expired

```

### Path: `POST /memory/search`

```yaml

/memory/search:

post:

operationId: searchMemory

summary: Search memory with retrieval mode controls

requestBody:

required: true

content:

application/json:

schema:

type: object

required: [query, retrieval_mode]

properties:

query:

type: string

retrieval_mode:

type: string

enum: [source_grounded, operational_context, narrative, state]

top_k:

type: integer

minimum: 1

maximum: 50

responses:

'200':

description: Search results returned

```

### Path: `POST /state/check-in`

```yaml

/state/check-in:

post:

operationId: createStateCheckIn

summary: Create manual founder state input

requestBody:

required: true

content:

application/json:

schema:

type: object

properties:

mood_label:

type: string

energy_level:

type: integer

minimum: 1

maximum: 10

notes:

type: string

responses:

'201':

description: Check-in recorded

```

### Path: `POST /foundry/content/build`

```yaml

/foundry/content/build:

post:

operationId: buildContentPacket

summary: Create a content build packet from an opportunity

requestBody:

required: true

content:

application/json:

schema:

type: object

required: [opportunity_id, asset_types]

properties:

opportunity_id:

type: string

asset_types:

type: array

items:

type: string

responses:

'202':

description: Build accepted and queued

```

## 77.4 Draft JSON Schema style definitions for commands

### `GenerateMorningBoardCommand`

```json

{

"\$id":
"https://schemas.hotelnexus.io/commands/generate-morning-board.json",

"\$schema": "https://json-schema.org/draft/2020-12/schema",

"title": "GenerateMorningBoardCommand",

"type": "object",

"required": ["command_id", "command_name", "issued_by", "payload"],

"properties": {

"command_id": {"type": "string"},

"command_name": {"const": "GenerateMorningBoardCommand"},

"issued_by": {"type": "string"},

"payload": {

"type": "object",

"required": ["person_id", "estate_id", "board_date"],

"properties": {

"person_id": {"type": "string"},

"estate_id": {"type": "string"},

"board_date": {"type": "string", "format": "date"},

"include_sections": {

"type": "array",

"items": {"type": "string"}

}

}

}

}

}

```

### `RequestApprovalCommand`

```json

{

"\$id": "https://schemas.hotelnexus.io/commands/request-approval.json",

"\$schema": "https://json-schema.org/draft/2020-12/schema",

"title": "RequestApprovalCommand",

"type": "object",

"required": ["command_id", "command_name", "payload"],

"properties": {

"command_id": {"type": "string"},

"command_name": {"const": "RequestApprovalCommand"},

"payload": {

"type": "object",

"required": [

"requested_action_type",

"requested_by_agent",

"risk_tier",

"autonomy_class",

"recommended_decision"

],

"properties": {

"requested_action_type": {"type": "string"},

"requested_by_agent": {"type": "string"},

"risk_tier": {"type": "string"},

"autonomy_class": {"type": "string"},

"evidence_refs": {

"type": "array",

"items": {"type": "string"}

},

"recommended_decision": {

"type": "string",

"enum": ["approve", "reject", "snooze"]

}

}

}

}

}

```

## 77.5 Draft JSON Schema style definitions for events

### `approval.requested`

```json

{

"\$id": "https://schemas.hotelnexus.io/events/approval-requested.json",

"\$schema": "https://json-schema.org/draft/2020-12/schema",

"title": "approval.requested",

"type": "object",

"required": ["event_id", "event_name", "occurred_at", "payload"],

"properties": {

"event_id": {"type": "string"},

"event_name": {"const": "approval.requested"},

"occurred_at": {"type": "string", "format": "date-time"},

"payload": {

"type": "object",

"required": [

"approval_request_id",

"requested_action_type",

"risk_tier",

"autonomy_class"

],

"properties": {

"approval_request_id": {"type": "string"},

"requested_action_type": {"type": "string"},

"risk_tier": {"type": "string"},

"autonomy_class": {"type": "string"},

"recommended_decision": {"type": "string"}

}

}

}

}

```

### `board.generated`

```json

{

"\$id": "https://schemas.hotelnexus.io/events/board-generated.json",

"\$schema": "https://json-schema.org/draft/2020-12/schema",

"title": "board.generated",

"type": "object",

"required": ["event_id", "event_name", "occurred_at", "payload"],

"properties": {

"event_id": {"type": "string"},

"event_name": {"const": "board.generated"},

"occurred_at": {"type": "string", "format": "date-time"},

"payload": {

"type": "object",

"required": ["board_id", "generated_at"],

"properties": {

"board_id": {"type": "string"},

"generated_at": {"type": "string", "format": "date-time"},

"approval_count": {"type": "integer", "minimum": 0},

"critical_alert_count": {"type": "integer", "minimum": 0}

}

}

}

}

```

## 77.6 Contract generation direction

Engineering should aim to derive the following from one contract
source-of-truth where feasible:

- backend DTOs

- request validators

- API docs

- mock payloads

- test fixtures

- consumer contract tests

## 77.7 Practical v5 outcome

This appendix is successful when engineering can begin:

- creating formal OpenAPI files,

- generating validators,

- generating typed clients,

- and enforcing schema compatibility in CI.

That is the bridge from visionary architecture to enforceable platform
contracts.

---

# 78. Appendix AH: Execution Pack v6 — Concrete Stack Choices and
Reference Defaults

This appendix converts the architecture into a practical default stack.
These are not eternal truths and should not be mistaken for dogma. They
are **reference implementation defaults** intended to reduce
ambiguity, accelerate repo setup, and give a small team a coherent
starting point.

## 78.1 Stack selection principles

The stack should favor:

- fast iteration,

- typed contracts,

- strong developer ergonomics,

- good support for async workflows,

- good support for browser and media automation,

- manageable operational burden,

- and a clear path from founder-only deployment to white-label pilots.

The goal is not to assemble the most fashionable stack. The goal is to
choose a stack that can support:

- state-first orchestration,

- durable workflows,

- high-context memory,

- content and capital alpha workflows,

- approval-heavy automation,

- and future estate/robotics integration.

## 78.2 Reference language choices

### Primary backend language

**TypeScript** should be the default for the first implementation
wave.

Why:

- strong alignment with modern web/mobile stacks,

- good support for workflow tools and automation platforms,

- excellent developer velocity,

- shared schema types across frontend and backend,

- and strong integration fit with Trigger.dev, Node-based services, and
many SaaS/provider SDKs.

### Secondary language

**Python** should be used selectively for:

- data extraction,

- document parsing pipelines,

- model-heavy processing,

- certain analytics tasks,

- robotics simulation bridges,

- and experimental research modules.

Recommended principle:

- TypeScript for core platform and service contracts

- Python for specialist jobs, workers, parsers, and ML-oriented modules

## 78.3 Frontend stack defaults

### Founder web

- **Next.js** or equivalent React app framework

- TypeScript

- shared design system package

- realtime client support

- server actions or BFF-compatible patterns where appropriate

### Founder mobile

- **Expo / React Native**

- shared TypeScript domain contracts

- push notification support

- secure auth/session handling

- voice capture and quick-approval focused UX

### Operator console

- same React/TypeScript family as founder web for shared UI components
and faster reuse

## 78.4 Backend and service stack defaults

### API layer

- Node.js + TypeScript

- Fastify, NestJS, or similarly typed service framework

- OpenAPI generation from source contracts where possible

### Workflow/orchestration runtime

Reference default:

- **Trigger.dev** for rapid early implementation of scheduled and
long-running jobs

Keep the orchestration abstraction clean enough that later evolution to
or coexistence with:

- Temporal,

- LangGraph-backed orchestration,

- or other durable engines

remains possible.

### Queue/stream broker

Reference default:

- managed queue/stream service or **NATS** if self-managed event
mesh maturity is wanted

Small-team recommendation:

- start with the simplest broker that supports retries, DLQ, and clear
routing

- do not overbuild distributed messaging too early

## 78.5 Data layer defaults

### Operational relational database

Reference default:

- **Postgres** (managed if possible)

Why:

- mature,

- relational integrity,

- JSON support,

- strong indexing,

- analytics-friendly,

- broad tooling support.

### Object storage

Reference default:

- S3-compatible object storage

Use for:

- raw files,

- media assets,

- transcripts,

- reports,

- provider payload archives,

- preview artifacts.

### Vector layer

Reference default:

- Postgres vector extension if acceptable early,

- or a dedicated vector store only when operational need justifies it.

### Graph/temporal layer

Reference default:

- start with relational side tables and graph references,

- evolve to Graphiti/Zep-style temporal graph approach when
relationship complexity justifies it.

### Warehouse / marts

Reference default:

- start lightweight with SQL read models and analytics marts,

- introduce a dedicated warehouse when Night Shift, white-label
reporting, or historical analytics volumes require it.

## 78.6 Identity and authorization defaults

### Identity

Reference default:

- **Authentik** or equivalent standards-based identity provider

### Fine-grained authorization

Reference default:

- **OpenFGA** style policy engine for explicit permission modeling

Recommended principle:

- authentication and authorization are separate concerns

- policy must not live only in UI logic or prompt wording

## 78.7 Memory and document pipeline defaults

### Document normalization

Reference default:

- **Docling** or **Unstructured** style document refinement
layer

### Personal and temporal memory

Reference default:

- NotebookLM / Notion-connected knowledge sources externally

- internal memory-service as the canonical control plane

- optional Mem0/Graphiti-inspired patterns for memory evolution

## 78.8 Alpha and media stack defaults

### Content and opportunity inputs

- YouTube Analytics / Reporting adapters

- Google Trends adapter

- browser automation adapter

### Media foundry

Reference default:

- HeyGen for first avatar/video pipeline

- Remotion / ComfyUI path preserved for richer future media operations

### App foundry

Reference default:

- Next.js / Expo app templates

- Supabase-compatible starter backend patterns

- preview deploy path as a first-class step

## 78.9 Estate and ambient defaults

### Estate integration

Reference default:

- Home Assistant as the ambient and automation bridge

### Sensing

Reference default:

- environmental telemetry first,

- Wi‑Fi/RF/contactless sensing later via ingestion adapters,

- OpenBCI-like or biosensing adapters only behind strong permission
boundaries.

## 78.10 Observability defaults

Reference default:

- OpenTelemetry instrumentation

- Langfuse or equivalent LLM/workflow observability layer

- centralized logs + metrics + trace IDs across services

## 78.11 Infrastructure-as-code defaults

Reference default:

- Terraform or equivalent IaC for shared environments

- repo-local service manifests for application deployment

## 78.12 Reference stack summary table

| Layer | Reference default |

| ------------------- |
----------------------------------------------- |

| Frontend web | Next.js + TypeScript |

| Mobile | Expo / React Native |

| Core backend | Node.js + TypeScript |

| Specialist workers | Python |

| Relational DB | Postgres |

| Object storage | S3-compatible |

| Vector/search | Postgres vector or dedicated vector layer later |

| Workflow runtime | Trigger.dev first |

| Queue/stream | Managed queue or NATS-style mesh |

| Identity | Authentik |

| Authorization | OpenFGA |

| Observability | OpenTelemetry + Langfuse |

| Estate bridge | Home Assistant |

| Media foundry | HeyGen first, Remotion/ComfyUI path later |

| App foundry backend | Supabase-compatible patterns |

## 78.13 Stack decision rule

A stack choice is acceptable if it:

- preserves typed contracts,

- preserves approval boundaries,

- supports Night Shift reliability,

- supports fast founder-facing iteration,

- and does not trap the team in brittle provider coupling.

---

# 79. Appendix AI: Execution Pack v6 — CI/CD, Contract Enforcement, and
Release Governance

This appendix defines how the team prevents architectural drift. Hotel
Nexus is too contract-heavy and too workflow-dependent to rely on
informal release practice.

## 79.1 CI/CD philosophy

CI/CD should enforce five truths:

1. code compiles,

2. contracts remain valid,

3. migrations are safe,

4. workflows remain observable,

5. release risk is explicit.

## 79.2 Recommended pipeline stages

### Stage 1 — static verification

Run on every pull request:

- linting

- type-checking

- formatting checks

- dependency policy checks

- secret scanning

### Stage 2 — contract verification

Run on every pull request affecting contracts or APIs:

- JSON Schema validation

- OpenAPI validation

- event schema compatibility checks

- contract diff review

- generated client regeneration check

### Stage 3 — database verification

Run when schema or migrations change:

- migration-up test

- rollback feasibility test where possible

- seed-and-boot test

- key query explain-plan smoke checks

### Stage 4 — service and workflow tests

Run on all core service changes:

- unit tests

- integration tests

- workflow execution tests

- approval pause/resume tests

- degraded-mode tests

### Stage 5 — build artifacts

- build containers or deployable artifacts

- generate SBOM or dependency inventory where appropriate

- attach version metadata

### Stage 6 — environment promotion checks

Before staging or prod promotion:

- release notes generated

- migration review attached

- feature flags declared

- rollback notes present

- owner approval recorded for high-consequence changes

## 79.3 Contract enforcement rules

Changes to the following must trigger heightened review:

- approval payloads

- Morning Board shape

- identity or permission schemas

- workflow event envelopes

- public or internal API contracts consumed by multiple services

- any health/legal/finance domain object

## 79.4 Schema compatibility policy

Recommended default:

- additive non-breaking changes are preferred

- removals require deprecation period

- event name changes require migration plan

- enum semantics changes require explicit consumer review

- public-facing contract changes require changelog entry

## 79.5 CI gating levels

### Standard gate

Applies to most services.

Requirements:

- tests pass

- contracts valid

- no secret leakage

- build succeeds

### Elevated gate

Applies to approvals, workflow core, memory, identity, and sensitive
domains.

Requirements:

- all standard gate checks

- migration review

- contract compatibility review

- observability coverage check

- designated reviewer sign-off

### Restricted gate

Applies to health/legal/finance/robotics-affecting changes.

Requirements:

- elevated gate checks

- domain-specific review

- explicit release note

- feature-flag or controlled rollout plan

## 79.6 Suggested pipeline artifacts

Each pipeline run should persist or expose:

- commit SHA

- artifact version

- contract bundle version

- migration bundle version

- changed schemas list

- changed endpoints list

- changed workflow graphs list

- release ring target

## 79.7 Release governance rules

- no migration reaches founder-prod without staging verification

- no approval contract changes reach prod without UI verification

- no workflow graph changes reach prod without trace visibility

- no provider adapter changes reach prod without degraded-mode test

- no high-risk features launch without feature flag or rollout control

## 79.8 Contract registry recommendation

Maintain a contract registry inside the repo or artifact store
containing:

- JSON Schemas

- OpenAPI files

- event definitions

- command schemas

- version history

- deprecation notes

- generated docs

## 79.9 CI/CD acceptance criteria

This appendix is satisfied when the team can answer:

- what breaks a build?

- what blocks a release?

- what contract changes are allowed automatically?

- what requires human review?

- how are schema and API regressions caught before founder impact?

---

# 80. Appendix AJ: Execution Pack v6 — Deployment Matrix and Runtime
Ownership

This appendix adds a concrete deployment ownership view so the team can
answer not just “what exists,” but “where does it run, who owns it, and
how critical is it?”

## 80.1 Deployment matrix model

Each runtime component should be described by:

- deployment unit

- environment presence

- scaling behavior

- owner team

- data sensitivity

- recovery expectation

- release ring

## 80.2 Deployment matrix

| Deployment unit | Environments | Scaling pattern | Owner |
Sensitivity | Criticality |

| ------------------------------ |
--------------------------------------------- |
--------------------------- | --------------------------- |
----------- | -------------------- |

| founder-web | shared-dev, staging, founder-prod, pilot-prod |
horizontal as needed | product/frontend | medium | high |

| founder-mobile backend surface | shared-dev, staging, founder-prod,
pilot-prod | moderate | product/frontend + platform | medium | high
|

| operator-console | shared-dev, staging, founder-prod | low/moderate
| platform | medium | medium |

| api-gateway | shared-dev, staging, founder-prod, pilot-prod |
horizontal | platform | high | critical |

| identity-service | shared-dev, staging, founder-prod, pilot-prod |
moderate | platform/security | very high | critical |

| memory-service | shared-dev, staging, founder-prod, pilot-prod |
horizontal + worker support | data/memory | high | critical |

| state-service | shared-dev, staging, founder-prod | moderate |
sensing/state | high | high |

| workflow-service | shared-dev, staging, founder-prod, pilot-prod |
worker-scaled | platform/orchestration | high | critical |

| approval-service | shared-dev, staging, founder-prod, pilot-prod |
moderate | platform | very high | critical |

| opportunity-service | shared-dev, staging, founder-prod |
worker-scaled | alpha systems | medium | high |

| asset-foundry-service | shared-dev, staging, founder-prod | bursty
worker-scaled | alpha systems | medium | high |

| capital-service | shared-dev, staging, founder-prod | moderate |
alpha systems | high | high |

| estate-service | shared-dev, staging, founder-prod | moderate |
sensing/estate | high | medium/high |

| integration-service | shared-dev, staging, founder-prod, pilot-prod
| worker-scaled | platform | high | high |

| notification-service | shared-dev, staging, founder-prod, pilot-prod
| moderate | platform/product | medium | high |

| observability-service | shared-dev, staging, founder-prod,
pilot-prod | moderate | platform | medium | critical-operational |

## 80.3 Worker pool recommendations

Separate worker pools by job type:

- `workers.interactive` for founder-triggered quick jobs

- `workers.batch` for Night Shift and scheduled scans

- `workers.render` for media-heavy workloads

- `workers.ingest` for documents and telemetry

- `workers.integrations` for provider syncs

## 80.4 Environment-specific behavior

### shared-dev

- mocks and sandbox credentials preferred

- lower budgets

- debug logging allowed within policy

### staging

- near-production contract checks

- representative data shapes

- pre-prod workflow validation

- shadow Night Shift runs

### founder-prod

- strongest approval and spend policies

- real workflows

- live founder-facing surfaces

- strict observability and alerting

### pilot-prod

- explicit tenancy isolation

- no shared secrets with founder-prod

- white-label readiness constraints

## 80.5 Runtime ownership rules

Every runtime unit must have:

- primary owner,

- backup owner,

- escalation path,

- dashboard link,

- runbook link,

- release approval path.

## 80.6 Runtime readiness checklist

A runtime component is production-eligible when:

- health checks exist,

- metrics exist,

- logs are correlated,

- deployment is repeatable,

- rollback is defined,

- and an owner is named.

---

# 81. Appendix AK: Execution Pack v6 — Incident Response and Runbook
Layer

This appendix formalizes operational response. A founder-facing estate
OS must not fail silently or leave operators improvising during
incidents.

## 81.1 Incident philosophy

The incident layer should optimize for:

- fast detection,

- clear ownership,

- graceful degradation,

- explicit founder communication when necessary,

- and learning loops after recovery.

## 81.2 Incident severity levels

### Sev 1 — critical founder-impacting outage

Examples:

- founder cannot access board or approvals

- workflow core unavailable

- approval decisions not persisting

- major identity/auth failure

### Sev 2 — major partial degradation

Examples:

- Night Shift missed wake window

- key provider unavailable causing degraded board

- memory retrieval heavily degraded

- approval notifications delayed materially

### Sev 3 — contained service issue

Examples:

- one provider adapter failing

- render job backlog elevated

- non-critical console outage

### Sev 4 — minor issue or defect

Examples:

- minor UI inconsistency

- non-blocking metric gap

- degraded internal operator convenience

## 81.3 Mandatory runbook classes

Engineering should maintain runbooks for at least:

- Morning Board failure or missing board

- approval service outage

- Night Shift partial or total failure

- provider credential expiration

- queue backlog or stuck consumer group

- render provider outage

- migration failure during release

- founder-prod rollback

- secret rotation emergency

- high-risk domain policy misconfiguration

## 81.4 Minimum runbook template

Every runbook should contain:

- issue name

- symptoms

- likely causes

- dashboards/queries to inspect

- immediate containment actions

- degraded-mode fallback

- recovery steps

- communication guidance

- post-incident follow-up tasks

## 81.5 Example runbook stub: missing Morning Board

### Symptoms

- `/boards/today` returns unavailable

- founder home screen empty or stale

- no `board.generated` event in expected window

### Immediate checks

- inspect latest workflow run for board generation

- inspect latest state snapshot availability

- inspect approval query latency

- inspect downstream dependency health

### Containment

- generate partial board from last known good inputs if allowed

- notify founder that board is partial, not absent

- flag operator console alert

### Recovery

- rerun board generation workflow

- verify persistence and delivery

- confirm UI cache refresh

## 81.6 Example runbook stub: queue backlog spike

### Symptoms

- Night Shift jobs not draining

- render completion events delayed

- approval packets created too late

### Immediate checks

- worker health

- queue depth

- DLQ counts

- provider latency spikes

### Containment

- scale relevant worker pool

- suspend non-critical batch queues if necessary

- protect interactive founder-facing workloads

### Recovery

- drain high-priority workloads first

- replay safe messages

- verify no duplicate external side effects

## 81.7 Post-incident review rules

Every Sev 1 and Sev 2 incident should produce:

- timeline of events

- affected workflows/services

- root cause statement

- whether founder experienced confusion or trust damage

- corrective actions

- contract/runbook/alerting updates

## 81.8 Reliability culture note

Because the founder experience is deeply trust-based, operational
reliability is not just an SRE concern. It is part of product quality
and brand quality.

---

# 82. Appendix AL: Execution Pack v6 — Milestone-Based Implementation
Roadmap

This appendix turns the architecture into a milestone-based execution
path. It complements the earlier phasing and 90-day checklist by giving
the team a practical delivery ladder.

## 82.1 Roadmap philosophy

Milestones should be judged by whether they create a more real operating
system for the founder, not by whether they maximize internal technical
novelty.

The best milestone question is:

**What new dependable behavior does the founder gain at the end of
this milestone?**

## 82.2 Milestone 0 — Architecture Lock and Contract Base

Objective:

- finalize repo layout, service boundaries, schemas, workflow
contracts, and migration discipline.

Deliverables:

- monorepo skeleton

- contract registry

- first migration bundles

- OpenAPI/JSON Schema baseline

- CI contract checks

Founder-visible outcome:

- none directly, but the platform becomes buildable without chaos.

## 82.3 Milestone 1 — Core Spine Online

Objective:

- stand up identity, memory, workflow, approval, and board assembly
spine.

Deliverables:

- identity-service v1

- memory-service v1

- workflow-service v1

- approval-service v1

- founder-web shell

Founder-visible outcome:

- one working home surface,

- one working approval queue,

- one working memory-backed board draft.

## 82.4 Milestone 2 — First Real Morning Board

Objective:

- deliver a board the founder can actually use every day.

Deliverables:

- board generation workflow

- state snapshot v1

- board read model

- mobile approval path

- observability for board failures

Founder-visible outcome:

- wakes up to a ranked board with at least body, moves, and approvals
sections.

## 82.5 Milestone 3 — Content Alpha Loop

Objective:

- create the first overnight economic loop.

Deliverables:

- trend + analytics adapters

- opportunity-service v1

- Studio Head / build packet workflow

- first asset record pipeline

- approval packet integration

Founder-visible outcome:

- overnight content opportunity detection and one approval-ready build
packet.

## 82.6 Milestone 4 — Capital Brief Loop

Objective:

- add a second overnight intelligence loop for market analysis.

Deliverables:

- watchlist model

- filing ingestion adapter

- capital memo generation

- capital briefing surface

Founder-visible outcome:

- wakes up to a usable capital brief with top setup, top risk, and
thesis changes.

## 82.7 Milestone 5 — Foundry and Preview Launch

Objective:

- move from ideas to previewable assets and product experiments.

Deliverables:

- media render path

- app scaffold path

- preview deployment tracking

- domain suggestion or reservation path behind policy

Founder-visible outcome:

- receives previewable artifacts, not just memos and briefs.

## 82.8 Milestone 6 — State and Estate Intelligence

Objective:

- begin true state-first orchestration.

Deliverables:

- stronger state fusion

- transition tracking

- room profiles

- low-risk intervention previews

- estate console v1

Founder-visible outcome:

- system starts adapting recommendations and environment based on state
and room context.

## 82.9 Milestone 7 — Reliability and Pilot Readiness

Objective:

- make the system dependable enough for serious founder reliance and
possible pilot isolation.

Deliverables:

- incident runbook set

- stronger DLQ and replay tooling

- pilot-prod environment plan

- tenant-safe boundaries

- release governance maturity

Founder-visible outcome:

- higher trust, fewer silent failures, more confidence in delegation.

## 82.10 Milestone 8 — Embodiment Readiness Layer

Objective:

- preserve the path toward ambient and robotic embodiment without
destabilizing the core platform.

Deliverables:

- estate abstraction hardening

- simulation-friendly task envelopes

- robotics-safe event and policy surfaces

- ambient sensing adapters behind permission boundaries

Founder-visible outcome:

- the estate becomes physically extensible rather than purely digital.

## 82.11 Milestone success criteria

Each milestone should declare:

- objective

- founder-visible gain

- service and contract changes

- migration bundle

- new risks introduced

- release ring

- rollback strategy

## 82.12 Practical sequencing note

A small team should likely work in this order:

1. Milestone 0

2. Milestone 1

3. Milestone 2

4. Milestone 3

5. Milestone 5

6. Milestone 4

7. Milestone 6

8. Milestone 7

9. Milestone 8

Reason:

- founder trust and daily usage come first,

- then the first economic loop,

- then previewable asset leverage,

- then broader intelligence and embodiment readiness.

## 82.13 v6 completion signal

This appendix is successful when a builder or small team can use the
document not just to imagine Hotel Nexus, but to:

- choose a stack,

- create repos,

- define contracts,

- run pipelines,

- deploy environments,

- respond to incidents,

- and execute milestones with founder-visible outcomes.

At that point, the document is functioning as a real infra-and-delivery
companion to the founder vision.

---

# 83. Appendix AM: Execution Pack v7 — Practical Repo Tree Pack

This appendix makes the monorepo shape more concrete. It is intended as
the practical repo tree companion to the earlier repo-by-repo
architecture plan. The aim is to give a builder or small team enough
structure to initialize the repository without inventing the file system
from scratch.

## 83.1 Practical monorepo tree

```text

hotel-nexus/

├── apps/

│ ├── founder-web/

│ │ ├── app/

│ │ │ ├── (home)/

│ │ │ ├── approvals/

│ │ │ ├── opportunities/

│ │ │ ├── foundry/

│ │ │ ├── memory/

│ │ │ ├── capital/

│ │ │ ├── estate/

│ │ │ └── settings/

│ │ ├── components/

│ │ ├── lib/

│ │ ├── hooks/

│ │ ├── styles/

│ │ └── tests/

│ ├── founder-mobile/

│ │ ├── src/

│ │ │ ├── screens/

│ │ │ ├── components/

│ │ │ ├── flows/

│ │ │ ├── services/

│ │ │ └── stores/

│ │ └── tests/

│ ├── operator-console/

│ │ ├── app/

│ │ ├── components/

│ │ ├── lib/

│ │ └── tests/

│ └── ambient-hub/

│ ├── app/

│ ├── components/

│ ├── lib/

│ └── tests/

├── services/

│ ├── api-gateway/

│ │ ├── src/

│ │ │ ├── routes/

│ │ │ ├── handlers/

│ │ │ ├── middleware/

│ │ │ ├── presenters/

│ │ │ └── clients/

│ │ └── tests/

│ ├── identity-service/

│ │ ├── src/

│ │ │ ├── domain/

│ │ │ ├── application/

│ │ │ ├── infrastructure/

│ │ │ └── interfaces/

│ │ └── tests/

│ ├── memory-service/

│ │ ├── src/

│ │ │ ├── ingest/

│ │ │ ├── retrieval/

│ │ │ ├── graph/

│ │ │ ├── storage/

│ │ │ └── interfaces/

│ │ └── tests/

│ ├── state-service/

│ │ ├── src/

│ │ │ ├── scoring/

│ │ │ ├── transitions/

│ │ │ ├── telemetry/

│ │ │ └── interfaces/

│ │ └── tests/

│ ├── workflow-service/

│ │ ├── src/

│ │ │ ├── workflows/

│ │ │ ├── runners/

│ │ │ ├── bindings/

│ │ │ └── interfaces/

│ │ └── tests/

│ ├── approval-service/

│ │ ├── src/

│ │ │ ├── requests/

│ │ │ ├── decisions/

│ │ │ ├── policies/

│ │ │ └── interfaces/

│ │ └── tests/

│ ├── opportunity-service/

│ │ ├── src/

│ │ │ ├── ingestion/

│ │ │ ├── scoring/

│ │ │ ├── promotion/

│ │ │ └── interfaces/

│ │ └── tests/

│ ├── asset-foundry-service/

│ │ ├── src/

│ │ │ ├── content/

│ │ │ ├── apps/

│ │ │ ├── renders/

│ │ │ ├── packaging/

│ │ │ └── interfaces/

│ │ └── tests/

│ ├── capital-service/

│ │ ├── src/

│ │ │ ├── filings/

│ │ │ ├── watchlists/

│ │ │ ├── memos/

│ │ │ └── interfaces/

│ │ └── tests/

│ ├── estate-service/

│ │ ├── src/

│ │ │ ├── rooms/

│ │ │ ├── devices/

│ │ │ ├── interventions/

│ │ │ └── interfaces/

│ │ └── tests/

│ ├── integration-service/

│ │ ├── src/

│ │ │ ├── adapters/

│ │ │ ├── health/

│ │ │ ├── sync/

│ │ │ └── interfaces/

│ │ └── tests/

│ ├── notification-service/

│ │ ├── src/

│ │ │ ├── channels/

│ │ │ ├── digests/

│ │ │ ├── policies/

│ │ │ └── interfaces/

│ │ └── tests/

│ └── observability-service/

│ ├── src/

│ │ ├── traces/

│ │ ├── metrics/

│ │ ├── evals/

│ │ └── interfaces/

│ └── tests/

├── packages/

│ ├── domain-models/

│ ├── api-contracts/

│ ├── event-contracts/

│ ├── command-contracts/

│ ├── json-schemas/

│ ├── openapi/

│ ├── agent-contracts/

│ ├── prompts-and-skills/

│ ├── provider-adapters/

│ ├── policy-engine/

│ ├── ui-design-system/

│ ├── analytics-marts/

│ ├── testing-fixtures/

│ └── shared-config/

├── workflows/

│ ├── morning-board/

│ ├── night-shift-content/

│ ├── night-shift-capital/

│ ├── app-foundry/

│ ├── state-cycle/

│ └── approval-resolution/

├── infrastructure/

│ ├── terraform/

│ ├── kubernetes/

│ ├── secrets/

│ ├── monitoring/

│ ├── networking/

│ └── ci/

├── database/

│ ├── migrations/

│ ├── seeds/

│ ├── views/

│ ├── ddl-drafts/

│ └── performance/

├── contracts/

│ ├── openapi/

│ ├── json-schema/

│ ├── events/

│ ├── commands/

│ └── examples/

├── runbooks/

│ ├── incidents/

│ ├── operations/

│ ├── releases/

│ └── migrations/

└── docs/

├── architecture/

├── product/

├── delivery/

├── security/

└── founder-handover/

```

## 83.2 Directory intent rules

- `apps/` contains founder and operator-facing products.

- `services/` contains deployable backend services.

- `packages/` contains reusable code and typed contracts.

- `workflows/` contains orchestrated graph definitions, worker
bindings, and workflow-specific tests.

- `infrastructure/` contains deploy/runtime definitions, not
application logic.

- `database/` contains migrations, DDL drafts, seed data, and
performance notes.

- `contracts/` is the machine-readable contract registry.

- `runbooks/` is the human-operated reliability layer.

- `docs/` is the explanatory layer, of which this living document is
the strategic master.

## 83.3 Suggested repo bootstrap order

For a small team, initialize in this order:

1. `packages/domain-models`

2. `packages/json-schemas`

3. `packages/api-contracts`

4. `services/api-gateway`

5. `services/workflow-service`

6. `services/approval-service`

7. `services/memory-service`

8. `apps/founder-web`

9. `database/migrations`

10. `workflows/morning-board`

This order gives the fastest path to a real founder-facing loop.

## 83.4 Example package manifest expectations

Every major unit should declare:

- owner team

- public API surface

- dependent packages

- environment variables used

- test strategy

- release path

## 83.5 Repo tree acceptance criteria

This appendix is complete when a builder can:

- clone one repo,

- understand where each concern lives,

- create a new service or workflow without inventing conventions,

- and know where contracts, migrations, and runbooks belong.

---

# 84. Appendix AN: Execution Pack v7 — Migration Stub Conventions and
File Patterns

This appendix turns the migration plan into practical file conventions.
The goal is to make schema evolution boring, reviewable, and safe.

## 84.1 Migration naming convention

Recommended file naming pattern:

```text

YYYYMMDDHHMM__domain__intent.sql

```

Examples:

- `202606041015__identity__create_person_profiles.sql`

- `202606041130__memory__create_memory_items.sql`

- `202606041245__workflow__create_workflow_runs.sql`

- `202606041330__approval__add_expires_index.sql`

Why this pattern:

- chronological ordering,

- visible domain ownership,

- human-readable intent,

- easy diff scanning.

## 84.2 Migration folder layout

```text

database/

migrations/

identity/

memory/

state/

workflow/

approvals/

opportunities/

capital/

estate/

integration/

seeds/

ddl-drafts/

rollback-notes/

```

## 84.3 Migration stub template

Every migration file should begin with a standard comment header.

```sql

-- Migration: 202606041130__memory__create_memory_items.sql

-- Domain: memory

-- Owner: data/memory

-- Intent: create canonical memory_items table

-- Risk class: B

-- Requires backfill: no

-- Rollback strategy: drop table if not yet depended upon in production

-- Related contracts: MemoryItem, memory-service ingest/search

```

## 84.4 Migration PR checklist block

Recommended companion markdown file or PR template fields:

- migration name

- domain owner

- related services

- related contracts

- backward compatibility note

- rollback note

- seed/test note

- expected query impact

- founder-visible surfaces affected

## 84.5 Seed file conventions

Suggested seed naming pattern:

- `seed__identity__default_policy_bundles.sql`

- `seed__estate__default_room_types.sql`

- `seed__workflow__default_statuses.sql`

Seeds should distinguish between:

- required system bootstrap data,

- local development fixtures,

- staging test fixtures,

- and demo/sample data.

## 84.6 Draft migration stubs

### Stub: create `person_profiles`

```sql

-- Migration: 202606041015__identity__create_person_profiles.sql

-- Domain: identity

-- Owner: platform/security

-- Intent: create base person_profiles table for founder and future
tenants

-- Risk class: A

-- Requires backfill: no

-- Rollback strategy: DROP TABLE person_profiles;

CREATE TABLE person_profiles (

person_id TEXT PRIMARY KEY,

display_name TEXT NOT NULL,

timezone TEXT NOT NULL,

preferred_language TEXT NOT NULL DEFAULT 'en',

communication_style TEXT NOT NULL,

privacy_profile_id TEXT NOT NULL,

approval_profile_id TEXT NOT NULL,

risk_profile_id TEXT NOT NULL,

created_at TIMESTAMPTZ NOT NULL DEFAULT now(),

updated_at TIMESTAMPTZ NOT NULL DEFAULT now()

);

```

### Stub: create `approval_requests`

```sql

-- Migration: 202606041245__approval__create_approval_requests.sql

-- Domain: approvals

-- Owner: platform

-- Intent: create canonical approval request table for all
high-consequence decisions

-- Risk class: A

-- Requires backfill: no

-- Rollback strategy: DROP TABLE approval_requests;

CREATE TABLE approval_requests (

approval_request_id TEXT PRIMARY KEY,

requested_action_type TEXT NOT NULL,

requested_by_agent TEXT NOT NULL,

risk_tier TEXT NOT NULL,

autonomy_class TEXT NOT NULL,

decision_status TEXT NOT NULL DEFAULT 'pending',

spend_ceiling NUMERIC(12,2),

currency TEXT,

reversible BOOLEAN NOT NULL DEFAULT false,

expires_at TIMESTAMPTZ NULL,

created_at TIMESTAMPTZ NOT NULL DEFAULT now(),

decision_at TIMESTAMPTZ NULL,

decision_by TEXT NULL

);

```

### Stub: create `workflow_runs`

```sql

-- Migration: 202606041330__workflow__create_workflow_runs.sql

-- Domain: workflow

-- Owner: platform/orchestration

-- Intent: create durable workflow run registry for Night Shift and
approval-bound jobs

-- Risk class: A

-- Requires backfill: no

-- Rollback strategy: DROP TABLE workflow_runs;

CREATE TABLE workflow_runs (

run_id TEXT PRIMARY KEY,

workflow_type TEXT NOT NULL,

initiator_type TEXT NOT NULL,

initiator_id TEXT NOT NULL,

status TEXT NOT NULL,

priority TEXT NOT NULL,

approval_state TEXT,

started_at TIMESTAMPTZ NOT NULL,

ended_at TIMESTAMPTZ NULL,

cost_estimate NUMERIC(12,2),

actual_cost NUMERIC(12,2),

trace_ref TEXT,

created_at TIMESTAMPTZ NOT NULL DEFAULT now()

);

```

### Stub: add non-blocking index

```sql

-- Migration:
202606041415__memory__add_memory_scope_created_index.sql

-- Domain: memory

-- Owner: data/memory

-- Intent: improve founder memory search and board assembly read
performance

-- Risk class: A

-- Requires backfill: no

-- Rollback strategy: DROP INDEX idx_memory_items_scope_created;

CREATE INDEX idx_memory_items_scope_created

ON memory_items (permissions_scope, created_at DESC)

WHERE deleted_at IS NULL;

```

## 84.7 Rollback note convention

Where rollback cannot be automated safely, a corresponding note file
should exist:

```text

database/rollback-notes/202606041330__workflow__create_workflow_runs.md

```

This file should state:

- rollback conditions

- manual recovery steps

- any data-loss warnings

- downstream services to check after rollback

## 84.8 Migration acceptance criteria

This appendix is satisfied when the team has:

- one agreed naming convention,

- one agreed stub template,

- one agreed PR checklist,

- and at least the first foundation migrations scaffolded.

---

# 85. Appendix AO: Execution Pack v7 — Founder Cockpit UX Flows and
Spec Layers

This appendix deepens the founder cockpit from screen inventory into
flow-level specification. The founder cockpit is where the estate
becomes real as a day-to-day operating environment.

## 85.1 UX specification philosophy

The founder cockpit must obey four principles:

- **rank before asking**

- **show evidence before confidence theater**

- **make action smaller than overwhelm**

- **make state visible without making the user manage the system**

## 85.2 Primary founder flows

### Flow 1: Wake → Board → First Action

Goal:

- founder wakes up and enters the estate through the Morning Command
Board.

Entry points:

- founder-web home

- mobile board summary

- voice “what matters today?”

Flow steps:

1. load current board

2. show readiness + one-sentence state summary

3. show top 1–3 ranked moves

4. show highest-priority approval if present

5. allow immediate action or defer

Success metric:

- founder reaches first meaningful action in under 90 seconds.

Failure mode:

- board is noisy, generic, or cognitively expensive.

### Flow 2: Approval Triage

Goal:

- approve, reject, or snooze with confidence and low friction.

Flow steps:

1. open approval queue

2. tap/click approval packet

3. inspect summary, spend, risk, and evidence

4. choose decision

5. receive clear next-state confirmation

Required UX properties:

- no hidden consequences

- evidence one click away

- reversibility clearly marked

- decision state updates immediately

### Flow 3: Opportunity Review → Build Promotion

Goal:

- review opportunities and convert one into a concrete build path.

Flow steps:

1. open Opportunity Cockpit

2. inspect ranked opportunity

3. inspect score breakdown and source signals

4. choose “promote to build” or “archive” or “hold”

5. route to Foundry Console or approval path as needed

### Flow 4: Voice Capture → Structured Action

Goal:

- founder speaks messy intent and the system turns it into a usable
workflow or note.

Flow steps:

1. capture raw transcript

2. infer likely domain (memory, opportunity, task, foundry, capital,
estate)

3. preview interpreted intent

4. either confirm or minimally clarify

5. create command, note, or queued workflow

Required UX properties:

- transcript preserved

- interpretation visible

- minimal clarification burden

- never lose the raw founder intent

### Flow 5: Memory Search → Evidence Drilldown

Goal:

- allow the founder to ask “why does the system think this?”

Flow steps:

1. open memory search or evidence drawer

2. query or inspect linked evidence refs

3. view source snippets and provenance

4. jump to related memories or workflow runs

Required UX properties:

- source-grounded mode easy to access

- provenance visible

- stale/partial markers visible

### Flow 6: State Review → Mode Adjustment

Goal:

- inspect current state and shift the day accordingly.

Flow steps:

1. open State and Estate Console

2. inspect readiness, friction, and transition context

3. view recommended work profile

4. optionally shift founder mode or trigger safe intervention preview

Required UX properties:

- state shown as guidance, not as oppressive scorekeeping

- interventions feel supportive, not controlling

## 85.3 Screen spec layering model

Every founder-facing screen should be spec’d in four layers:

### Layer A — intent

Why the screen exists.

### Layer B — information model

What objects and relationships it renders.

### Layer C — action model

What the founder can do from this screen.

### Layer D — trust model

How the screen communicates confidence, evidence, uncertainty, and
approval state.

## 85.4 Example layered spec: Morning Command Board

### Layer A — intent

Reduce morning activation energy by compressing the estate into one
ranked action surface.

### Layer B — information model

Objects rendered:

- MorningBoard

- StateSnapshot summary

- top RecommendedMove[]

- ApprovalPacket[]

- momentum summary

- critical alerts

### Layer C — action model

Primary actions:

- approve top item

- open board details

- snooze recommendation

- ask a voice question

- enter focus mode

### Layer D — trust model

Must visibly show:

- whether board is complete or partial

- evidence links for important recommendations

- generated vs observed distinctions

- last successful Night Shift time

## 85.5 Example layered spec: Approval Center

### Layer A — intent

Make high-consequence decisions fast and safe.

### Layer B — information model

Objects rendered:

- ApprovalPacket list

- selected ApprovalPacket detail

- evidence refs

- cost/risk block

- workflow linkage

### Layer C — action model

Primary actions:

- approve

- reject

- snooze

- open evidence

- open source asset or workflow run

### Layer D — trust model

Must visibly show:

- risk tier

- autonomy class

- reversibility

- expiry time

- whether spend is within policy

## 85.6 UX annotation system

Recommended UI labels or badges:

- `observed`

- `inferred`

- `generated`

- `partial`

- `awaiting_approval`

- `high_risk`

- `within_budget`

- `source_grounded`

## 85.7 Founder cockpit component families

Suggested reusable component families:

- `StateCard`

- `MoveCard`

- `ApprovalCard`

- `EvidenceDrawer`

- `OpportunityScorePanel`

- `WorkflowStatusPill`

- `PartialDataBanner`

- `ModeSwitcher`

- `VoiceCaptureBar`

- `PreviewAssetPanel`

## 85.8 UX testing guidance

Before broadening the cockpit, test with founder scenarios such as:

- waking up tired with multiple approvals

- waking up with partial Night Shift data

- asking for evidence behind a recommendation

- promoting an opportunity while under time pressure

- capturing messy voice input while mobile

## 85.9 Founder cockpit v7 acceptance criteria

This appendix is satisfied when design and frontend engineering can
produce:

- wireframes or component inventories,

- state and action maps for core flows,

- object-to-screen mapping,

- and trust/annotation rules consistent across founder surfaces.

At that point, the cockpit begins to function as a genuine operating
bridge rather than a loose dashboard.

---

# 86. Appendix AP: Execution Pack v8 — Migration Stub Bundle

This appendix builds on the migration conventions from v7 and provides a
more practical starter bundle. The goal is to give engineering a first
wave of migration stubs that can be adapted into real migration files
immediately.

## 86.1 Bundle philosophy

This bundle is intentionally biased toward the first founder-visible
spine:

- identity,

- estate,

- memory,

- workflow,

- approvals,

- opportunities,

- assets,

- and state.

It is better to have 8–12 strong foundation migrations than 50 vague
placeholders.

## 86.2 Starter migration bundle index

Recommended first bundle:

1. `202606050900__identity__create_person_profiles.sql`

2. `202606050910__estate__create_estate_profiles.sql`

3. `202606050920__estate__create_room_profiles.sql`

4. `202606050930__memory__create_memory_sources.sql`

5. `202606050940__memory__create_memory_items.sql`

6. `202606050950__memory__create_memory_chunks.sql`

7. `202606051000__workflow__create_workflow_runs.sql`

8. `202606051010__approval__create_approval_requests.sql`

9. `202606051020__opportunity__create_opportunity_records.sql`

10. `202606051030__asset__create_asset_records.sql`

11. `202606051040__state__create_state_snapshots.sql`

12. `202606051050__state__create_transition_events.sql`

## 86.3 Stub: `create_estate_profiles`

```sql

-- Migration: 202606050910__estate__create_estate_profiles.sql

-- Domain: estate

-- Owner: sensing/estate

-- Intent: create estate_profiles root table for Hotel Nexus estates

-- Risk class: A

-- Requires backfill: no

-- Rollback strategy: DROP TABLE estate_profiles;

CREATE TABLE estate_profiles (

estate_id TEXT PRIMARY KEY,

estate_name TEXT NOT NULL,

estate_mode TEXT NOT NULL,

primary_timezone TEXT NOT NULL,

policy_bundle_id TEXT NOT NULL,

night_shift_enabled BOOLEAN NOT NULL DEFAULT true,

sensing_enabled BOOLEAN NOT NULL DEFAULT true,

robotics_enabled BOOLEAN NOT NULL DEFAULT false,

created_at TIMESTAMPTZ NOT NULL DEFAULT now(),

updated_at TIMESTAMPTZ NOT NULL DEFAULT now()

);

CREATE INDEX idx_estate_profiles_mode

ON estate_profiles (estate_mode);

```

## 86.4 Stub: `create_room_profiles`

```sql

-- Migration: 202606050920__estate__create_room_profiles.sql

-- Domain: estate

-- Owner: sensing/estate

-- Intent: create room_profiles for room-aware estate behavior

-- Risk class: A

-- Requires backfill: no

-- Rollback strategy: DROP TABLE room_profiles;

CREATE TABLE room_profiles (

room_id TEXT PRIMARY KEY,

estate_id TEXT NOT NULL REFERENCES estate_profiles(estate_id),

room_name TEXT NOT NULL,

room_type TEXT NOT NULL,

default_intervention_policy_id TEXT,

privacy_level TEXT NOT NULL,

created_at TIMESTAMPTZ NOT NULL DEFAULT now(),

updated_at TIMESTAMPTZ NOT NULL DEFAULT now()

);

CREATE INDEX idx_room_profiles_estate

ON room_profiles (estate_id);

```

## 86.5 Stub: `create_memory_sources`

```sql

-- Migration: 202606050930__memory__create_memory_sources.sql

-- Domain: memory

-- Owner: data/memory

-- Intent: create memory_sources to track provenance and source metadata

-- Risk class: A

-- Requires backfill: no

-- Rollback strategy: DROP TABLE memory_sources;

CREATE TABLE memory_sources (

source_id TEXT PRIMARY KEY,

source_type TEXT NOT NULL,

source_uri TEXT NOT NULL,

provider_name TEXT,

source_hash TEXT,

ingested_at TIMESTAMPTZ NOT NULL DEFAULT now(),

permissions_scope TEXT NOT NULL,

created_at TIMESTAMPTZ NOT NULL DEFAULT now()

);

CREATE INDEX idx_memory_sources_type_ingested

ON memory_sources (source_type, ingested_at DESC);

```

## 86.6 Stub: `create_transition_events`

```sql

-- Migration: 202606051050__state__create_transition_events.sql

-- Domain: state

-- Owner: sensing/state

-- Intent: create transition_events table for mode and room transition
tracking

-- Risk class: A

-- Requires backfill: no

-- Rollback strategy: DROP TABLE transition_events;

CREATE TABLE transition_events (

transition_id TEXT PRIMARY KEY,

person_id TEXT NOT NULL REFERENCES person_profiles(person_id),

from_mode TEXT,

to_mode TEXT,

from_room_id TEXT,

to_room_id TEXT,

detected_at TIMESTAMPTZ NOT NULL,

transition_quality TEXT,

confidence NUMERIC(5,4),

intervention_triggered BOOLEAN NOT NULL DEFAULT false,

intervention_id TEXT NULL,

created_at TIMESTAMPTZ NOT NULL DEFAULT now()

);

CREATE INDEX idx_transition_events_person_detected

ON transition_events (person_id, detected_at DESC);

```

## 86.7 Stub: `create_opportunity_records`

```sql

-- Migration:
202606051020__opportunity__create_opportunity_records.sql

-- Domain: opportunity

-- Owner: alpha systems

-- Intent: create opportunity_records for content, product, and market
opportunities

-- Risk class: A

-- Requires backfill: no

-- Rollback strategy: DROP TABLE opportunity_records;

CREATE TABLE opportunity_records (

opportunity_id TEXT PRIMARY KEY,

opportunity_domain TEXT NOT NULL,

title TEXT NOT NULL,

hypothesis TEXT,

status TEXT NOT NULL,

owner_agent TEXT NOT NULL,

confidence_score NUMERIC(5,4),

created_at TIMESTAMPTZ NOT NULL DEFAULT now(),

updated_at TIMESTAMPTZ NOT NULL DEFAULT now()

);

CREATE INDEX idx_opp_records_domain_created

ON opportunity_records (opportunity_domain, created_at DESC);

```

## 86.8 Stub: `create_asset_records`

```sql

-- Migration: 202606051030__asset__create_asset_records.sql

-- Domain: asset

-- Owner: alpha systems

-- Intent: create asset_records for previews, renders, and approval
linkage

-- Risk class: A

-- Requires backfill: no

-- Rollback strategy: DROP TABLE asset_records;

CREATE TABLE asset_records (

asset_id TEXT PRIMARY KEY,

asset_type TEXT NOT NULL,

source_opportunity_id TEXT NULL REFERENCES
opportunity_records(opportunity_id),

status TEXT NOT NULL,

preview_url TEXT,

approval_request_id TEXT NULL REFERENCES
approval_requests(approval_request_id),

created_at TIMESTAMPTZ NOT NULL DEFAULT now(),

updated_at TIMESTAMPTZ NOT NULL DEFAULT now()

);

CREATE INDEX idx_asset_records_status_created

ON asset_records (status, created_at DESC);

```

## 86.9 Bundle usage guidance

Engineering should treat the bundle as:

- a starter set for migration PRs,

- a reference naming baseline,

- and a test fixture source for CI migration checks.

The bundle should live alongside:

- schema notes,

- rollback notes,

- seed fixtures,

- and query performance checks.

## 86.10 Migration stub bundle acceptance criteria

This appendix is successful when the team can take these stubs and
within one sprint produce:

- the actual first migration files,

- migration tests,

- seed data for local development,

- and a bootable schema for the first founder loop.

---

# 87. Appendix AQ: Execution Pack v8 — CI Policy and Config Examples

This appendix turns CI/CD governance into practical policy artifacts.
The goal is not to prescribe one CI platform forever, but to make the
expected checks concrete enough that the team can implement them in
GitHub Actions, Buildkite, GitLab CI, or an equivalent system.

## 87.1 CI policy goals

Every pipeline should help enforce:

- contract stability,

- migration safety,

- workflow integrity,

- dependency hygiene,

- and release clarity.

## 87.2 Example CI workflow stages (YAML-style)

```yaml

name: hotel-nexus-ci

on:

pull_request:

push:

branches: [main]

jobs:

static-checks:

runs-on: ubuntu-latest

steps:

- checkout

- install-dependencies

- run: pnpm lint

- run: pnpm typecheck

- run: pnpm format:check

- run: pnpm secret-scan

contract-checks:

runs-on: ubuntu-latest

steps:

- checkout

- install-dependencies

- run: pnpm contracts:validate

- run: pnpm openapi:lint

- run: pnpm jsonschema:validate

- run: pnpm contracts:breaking-check

migration-checks:

runs-on: ubuntu-latest

steps:

- checkout

- install-dependencies

- run: pnpm db:migrate:test-up

- run: pnpm db:seed:test

- run: pnpm db:smoke-queries

workflow-tests:

runs-on: ubuntu-latest

steps:

- checkout

- install-dependencies

- run: pnpm test:workflows

- run: pnpm test:approval-flows

- run: pnpm test:degraded-modes

build-artifacts:

runs-on: ubuntu-latest

needs: [static-checks, contract-checks]

steps:

- checkout

- install-dependencies

- run: pnpm build

- run: pnpm artifact:manifest

```

## 87.3 Contract breaking-change policy example

```yaml

contract_policy:

additive_changes_allowed: true

removal_requires_deprecation: true

event_name_change_requires_migration_plan: true

approval_contract_changes_require_ui_review: true

identity_and_permission_changes_require_security_review: true

health_legal_finance_contract_changes_require_restricted_gate: true

```

## 87.4 Pull request template example

```md

## Summary

- What changed

- Why it changed

## Domains affected

- [ ] identity

- [ ] memory

- [ ] workflow

- [ ] approvals

- [ ] opportunities

- [ ] state

- [ ] estate

- [ ] capital

## Contracts changed

- [ ] OpenAPI

- [ ] JSON Schema

- [ ] Event contracts

- [ ] Command contracts

- [ ] No contract changes

## Database changes

- [ ] migration added

- [ ] backfill required

- [ ] rollback note added

- [ ] no database change

## Risk and release

- release ring target:

- feature flag required:

- degraded-mode tested:

- founder-visible surfaces affected:

```

## 87.5 Required CI scripts convention

Recommended package scripts:

- `contracts:validate`

- `contracts:breaking-check`

- `openapi:lint`

- `jsonschema:validate`

- `db:migrate:test-up`

- `db:seed:test`

- `db:smoke-queries`

- `test:workflows`

- `test:approval-flows`

- `test:degraded-modes`

- `artifact:manifest`

## 87.6 Release policy file example

```yaml

release_policy:

founder_prod:

requires_staging_validation: true

requires_migration_review: true

requires_observability_check: true

requires_feature_flag_for_high_risk: true

pilot_prod:

requires_tenancy_isolation_check: true

requires_contract_bundle_version: true

requires_runbook_link: true

```

## 87.7 CI policy acceptance criteria

This appendix is successful when the team can create:

- an initial CI pipeline file,

- a PR template,

- a release policy file,

- and at least one breaking-change contract check in CI.

---

# 88. Appendix AR: Execution Pack v8 — Contract Registry Pack

This appendix formalizes the contract registry as an actual
implementation artifact. Hotel Nexus needs a clear place where
machine-readable contracts, examples, versions, and ownership live.

## 88.1 Contract registry purpose

The contract registry should serve as:

- source of truth for service and event contracts,

- review point for breaking changes,

- generator input for validators and typed clients,

- and human-readable reference for builders.

## 88.2 Recommended contract registry tree

```text

contracts/

openapi/

founder-api.yaml

internal-api-memory.yaml

internal-api-state.yaml

internal-api-approval.yaml

json-schema/

records/

person-profile.json

estate-profile.json

state-snapshot.json

opportunity-record.json

approval-request.json

asset-record.json

commands/

generate-morning-board.json

run-night-shift-content-sweep.json

request-approval.json

events/

state-snapshot-created.json

approval-requested.json

board-generated.json

opportunity-promoted-to-build.json

examples/

records/

commands/

events/

approvals/

ownership/

contract-owners.yaml

changelog/

contract-changelog.md

```

## 88.3 Contract owner map example

```yaml

contract_owners:

founder-api.yaml: product/frontend

internal-api-memory.yaml: data/memory

internal-api-state.yaml: sensing/state

internal-api-approval.yaml: platform

state-snapshot.json: sensing/state

approval-request.json: platform

opportunity-record.json: alpha-systems

board-generated.json: platform/orchestration

```

## 88.4 Required registry metadata

Each contract should carry or be accompanied by:

- contract name

- version

- owner

- related service(s)

- related domain

- example payload

- compatibility notes

- deprecation notes if relevant

## 88.5 Example contract manifest file

```yaml

contract:

name: approval-request

version: 1.0.0

owner: platform

domain: approvals

related_services:

- approval-service

- api-gateway

related_surfaces:

- Approval Center

- Morning Command Board

schema_path: contracts/json-schema/records/approval-request.json

examples_path:
contracts/examples/approvals/approval-request.example.json

deprecation_status: active

```

## 88.6 Example record contract file stub

```json

{

"\$id": "https://schemas.hotelnexus.io/records/approval-request.json",

"\$schema": "https://json-schema.org/draft/2020-12/schema",

"title": "ApprovalRequest",

"type": "object",

"required": [

"approval_request_id",

"requested_action_type",

"risk_tier",

"autonomy_class",

"decision_status"

],

"properties": {

"approval_request_id": {"type": "string"},

"requested_action_type": {"type": "string"},

"risk_tier": {"type": "string"},

"autonomy_class": {"type": "string"},

"decision_status": {"type": "string"},

"recommended_decision": {"type": "string"}

}

}

```

## 88.7 Contract registry workflows

Recommended registry workflows:

- new contract creation

- contract version bump

- deprecation notice

- breaking-change approval

- example payload update

- generated client refresh

## 88.8 Registry review rules

A contract change should not be merged unless:

- owner is declared,

- example payload is updated,

- compatibility impact is stated,

- CI validation passes,

- and affected services or surfaces are named.

## 88.9 Contract registry acceptance criteria

This appendix is satisfied when the team has:

- a contract directory created,

- owner map declared,

- first record/command/event schemas checked in,

- and contract review as a normal part of PR flow.

At that point, the registry becomes the living spine between
architecture and implementation.

---

# 89. Appendix AS: Execution Pack v9 — Wireframe-Level Founder Cockpit
Screen Maps

This appendix turns the founder cockpit from flow-level design into
wireframe-level structural maps. These are still textual wireframes
rather than visual mockups, but they are intended to be precise enough
for product/design/frontend teams to create low-fidelity wireframes,
clickable prototypes, and screen-level implementation tickets.

## 89.1 Wireframe philosophy

The founder cockpit should not feel like a generic enterprise dashboard.
It should feel like a **calm command bridge** where:

- the most important thing is obvious,

- the next action is smaller than the friction required to take it,

- evidence is close at hand,

- uncertainty is visible,

- and state guides action without becoming oppressive.

## 89.2 Screen map: Home / Morning Command Board

### Primary purpose

Give the founder the fastest path from waking up to first meaningful
action.

### Textual wireframe map

```text

┌─────────────────────────────────────────────────────────────────────┐

│ TOP BAR │

│ [Hotel Nexus] [Mode: Build] [Readiness: Amber] [Night Shift:
OK] │

│ [Voice Capture] [Alerts] [Profile] │

├─────────────────────────────────────────────────────────────────────┤

│ LEFT COLUMN │ CENTER COLUMN │ RIGHT COLUMN │

│ BODY / STATE │ MOVES / TOP ACTIONS │ MONEY / MOMENTUM│

│ - readiness summary │ - ranked move #1 │ - top content │

│ - recovery note │ - ranked move #2 │ - top market │

│ - workload guidance │ - top approval card │ - biggest risk │

│ - friction warning │ - quick actions │ - momentum note │

├─────────────────────────────────────────────────────────────────────┤

│ BOTTOM STRIP │

│ [Last successful Night Shift] [Partial Data Banner if needed] │

│ [Open Approval Count] [Open Opportunity Count] [Workflow Status]
│

└─────────────────────────────────────────────────────────────────────┘

```

### Interaction priorities

1. approve top item

2. open evidence

3. snooze recommendation

4. ask a voice question

5. enter a focused work mode

### Mobile translation rule

This screen collapses into the following mobile stack:

1. readiness and headline

2. top move

3. top approval

4. money summary

5. momentum summary

6. partial/failure notices

## 89.3 Screen map: Approval Center

### Primary purpose

Make high-consequence decisions legible, fast, and safe.

### Textual wireframe map

```text

┌─────────────────────────────────────────────────────────────────────┐

│ HEADER: Approvals [Pending: 4] [High Risk: 1] │

├──────────────────────┬──────────────────────────────────────────────┤

│ LEFT LIST │ RIGHT DETAIL PANEL │

│ - approval #1 │ headline │

│ - approval #2 │ summary │

│ - approval #3 │ risk tier / autonomy class │

│ - approval #4 │ cost block / expiry / reversibility │

│ │ evidence refs │

│ │ linked asset/workflow/opportunity │

│ │ approve / reject / snooze footer │

├──────────────────────┴──────────────────────────────────────────────┤

│ BOTTOM DRAWER: Evidence / Source snippets / Change history │

└─────────────────────────────────────────────────────────────────────┘

```

### Interaction priorities

- queue triage by risk and expiry

- evidence access in one click

- decision confirmation with audit note optional

## 89.4 Screen map: Opportunity Cockpit

### Primary purpose

Review, compare, and promote opportunities into build paths.

### Textual wireframe map

```text

┌─────────────────────────────────────────────────────────────────────┐

│ HEADER: Opportunities [Content] [Apps] [Capital] [All] │

├──────────────────────┬──────────────────────┬───────────────────────┤

│ RANKED LIST │ SCORE BREAKDOWN │ SOURCE SIGNALS │

│ - opp #1 │ demand │ trends │

│ - opp #2 │ supply gap │ analytics │

│ - opp #3 │ monetization │ competitors │

│ │ complexity │ supporting memory │

├──────────────────────┴──────────────────────┴───────────────────────┤

│ ACTION FOOTER: [Promote to Build] [Hold] [Archive] [Open
Foundry] │

└─────────────────────────────────────────────────────────────────────┘

```

### Interaction priorities

- compare top few opportunities quickly

- see why opportunity rank exists

- send directly into content or app foundry

## 89.5 Screen map: Foundry Console

### Primary purpose

Inspect and control generated artifacts.

### Textual wireframe map

```text

┌─────────────────────────────────────────────────────────────────────┐

│ HEADER: Foundry [Content] [Apps] [Renders] [Deploy Previews] │

├──────────────────────────┬──────────────────────────────────────────┤

│ JOB LIST │ PREVIEW / DETAILS │

│ - render job │ preview asset │

│ - app scaffold │ build metadata │

│ - packet ready │ provider info │

│ - awaiting approval │ package-for-approval controls │

├──────────────────────────┴──────────────────────────────────────────┤

│ STATUS STRIP: provider health / queue lag / budget posture │

└─────────────────────────────────────────────────────────────────────┘

```

## 89.6 Screen map: Memory Console

### Primary purpose

Let the founder inspect what the estate knows and why.

### Textual wireframe map

```text

┌─────────────────────────────────────────────────────────────────────┐

│ SEARCH BAR [query] [mode: source-grounded/operational/narrative] │

├──────────────────────┬─────────────────────────┬────────────────────┤

│ RESULT LIST │ RESULT DETAIL │ PROVENANCE / GRAPH │

│ - memory #1 │ title/summary │ source refs │

│ - memory #2 │ snippet │ related entities │

│ - memory #3 │ timeline context │ workflow linkage │

└──────────────────────┴─────────────────────────┴────────────────────┘

```

## 89.7 Screen map: State and Estate Console

### Primary purpose

Render the current state model and room-aware estate behavior.

### Textual wireframe map

```text

┌─────────────────────────────────────────────────────────────────────┐

│ STATE HEADER: readiness / friction / overload risk / mode │

├──────────────────────┬─────────────────────────┬────────────────────┤

│ TRANSITION TIMELINE │ ROOM / ENVIRONMENT │ INTERVENTIONS │

│ - recent transitions │ - active rooms │ - suggested scene │

│ - state shifts │ - telemetry cards │ - preview action │

│ - trigger markers │ - current estate mode │ - execution status │

└──────────────────────┴─────────────────────────┴────────────────────┘

```

## 89.8 Screen map: Capital Briefing Surface

### Primary purpose

Compress the capital desk into a founder-usable decision surface.

### Textual wireframe map

```text

┌─────────────────────────────────────────────────────────────────────┐

│ HEADER: Capital Brief [Latest] [Watchlist] [Memos] [Risk
Changes] │

├──────────────────────┬─────────────────────────┬────────────────────┤

│ MARKET BACKDROP │ WATCHLIST CHANGES │ TOP SETUP / TOP RISK│

│ - regime summary │ - upgraded │ - top setup │

│ - macro notes │ - downgraded │ - top risk │

│ │ - catalyst changes │ - thesis note │

└──────────────────────┴─────────────────────────┴────────────────────┘

```

## 89.9 Wireframe-level acceptance criteria

This appendix is complete when:

- design can turn every screen map into low-fidelity wireframes,

- frontend can identify regions and component placements,

- product can derive screen-level tickets,

- and engineering can map screen regions to data objects and API calls.

---

# 90. Appendix AT: Execution Pack v9 — Founder Cockpit Component
Contracts

This appendix formalizes the reusable UI component layer for the founder
cockpit. The goal is to make frontend implementation consistent,
testable, and trust-preserving.

## 90.1 Component contract philosophy

Each component contract should answer:

- what it renders,

- what objects it consumes,

- what states it must handle,

- what actions it emits,

- and what trust signals it must display.

## 90.2 Standard component contract template

Every major cockpit component should define:

- `component_name`

- `purpose`

- `required_props`

- `optional_props`

- `data_dependencies`

- `states`

- `actions`

- `trust_annotations`

- `analytics_events`

- `acceptance_criteria`

## 90.3 Component contract: `StateCard`

**Purpose:** summarize current founder state in one glance.

**Required props:**

- `readiness_band`

- `headline`

- `readiness_score`

- `friction_score`

**Optional props:**

- `recovery_score`

- `overload_risk_score`

- `last_updated_at`

**States:**

- loading

- complete

- partial

- stale

**Actions:**

- open state detail

- open evidence/context

**Trust annotations:**

- inferred badge

- last updated time

- partial data warning if applicable

**Analytics events:**

- `ui.state_card.opened`

- `ui.state_card.evidence_opened`

**Acceptance criteria:**

- founder can understand current state in under 10 seconds

- stale/partial state never appears as fully trusted current truth

## 90.4 Component contract: `MoveCard`

**Purpose:** present one recommended next action.

**Required props:**

- `rank`

- `title`

- `reason`

- `action_type`

**Optional props:**

- `linked_approval_request_id`

- `linked_opportunity_id`

- `linked_workflow_run_id`

**States:**

- default

- actionable

- blocked

- completed

**Actions:**

- execute/open

- snooze

- inspect evidence

**Trust annotations:**

- generated badge

- confidence chip if relevant

- blocked badge if awaiting approval

## 90.5 Component contract: `ApprovalCard`

**Purpose:** render one approval packet clearly.

**Required props:**

- `approval_request_id`

- `headline`

- `risk_tier`

- `autonomy_class`

- `decision_options`

**Optional props:**

- `cost_summary`

- `expires_at`

- `reversible`

- `recommended_decision`

**States:**

- pending

- resolving

- approved

- rejected

- expired

**Actions:**

- approve

- reject

- snooze

- open evidence

**Trust annotations:**

- risk tier badge

- autonomy class badge

- expiry warning

- within-budget or over-budget badge

## 90.6 Component contract: `EvidenceDrawer`

**Purpose:** let the founder inspect why the system is making a
recommendation.

**Required props:**

- `evidence_refs[]`

**Optional props:**

- `provenance_snippets[]`

- `workflow_refs[]`

- `memory_refs[]`

**States:**

- loading

- complete

- partial

- unavailable

**Actions:**

- open source

- open memory

- open workflow trace

**Trust annotations:**

- source-grounded badge

- partial evidence badge

## 90.7 Component contract: `OpportunityScorePanel`

**Purpose:** break down why an opportunity has its current rank.

**Required props:**

- `demand_score`

- `supply_gap_score`

- `monetization_score`

- `build_complexity_score`

- `confidence_score`

**Optional props:**

- `scoring_model_version`

- `source_signals[]`

**Actions:**

- promote to build

- hold

- archive

- inspect sources

## 90.8 Component contract: `WorkflowStatusPill`

**Purpose:** communicate workflow state compactly.

**Required props:**

- `workflow_type`

- `status`

**Optional props:**

- `started_at`

- `ended_at`

- `degraded_mode`

**States:**

- queued

- running

- paused_for_approval

- completed

- degraded

- failed

## 90.9 Component contract: `PartialDataBanner`

**Purpose:** prevent silent trust failures when data is incomplete.

**Required props:**

- `message`

- `affected_sections[]`

**Actions:**

- open details

- dismiss temporarily

**Acceptance criteria:**

- must be visible enough to prevent false certainty

- must not overwhelm the rest of the cockpit

## 90.10 Component contract: `VoiceCaptureBar`

**Purpose:** give the founder a low-friction capture entry point
from anywhere.

**Required props:**

- `capture_mode`

- `onSubmit`

**Optional props:**

- `transcript_preview`

- `inferred_intent_preview`

**States:**

- idle

- listening

- transcribing

- ready_to_confirm

- failed

**Actions:**

- start capture

- cancel

- confirm interpreted intent

- retry

## 90.11 Component contract: `PreviewAssetPanel`

**Purpose:** preview generated media/app/output artifacts.

**Required props:**

- `asset_id`

- `asset_type`

- `status`

- `preview_url`

**Optional props:**

- `provider`

- `approval_request_id`

- `source_opportunity_id`

**Actions:**

- open preview

- package for approval

- inspect metadata

## 90.12 UI contract governance rule

No cockpit component should be treated as “finished” unless:

- loading, partial, stale, failure, and complete states are defined,

- trust annotations are explicit,

- emitted actions are typed,

- analytics events are declared,

- and data dependencies are mapped to service contracts.

## 90.13 Component pack acceptance criteria

This appendix is complete when frontend/design teams can derive:

- shared component tickets,

- prop interfaces,

- storybook or equivalent examples,

- and state handling rules for core cockpit modules.

---

# 91. Appendix AU: Execution Pack v9 — Milestone-by-Milestone
Engineering Task Breakdown

This appendix drills one level deeper than the milestone roadmap by
turning milestones into concrete engineering work packages. The goal is
not to replace sprint planning, but to give a serious small team a
scoped execution backbone.

## 91.1 Breakdown philosophy

Each milestone should break into five work lanes:

- platform/contracts

- data/schema

- workflow/automation

- frontend/product

- reliability/ops

This helps prevent the common failure mode where only one discipline
progresses and the founder-visible outcome never materializes.

## 91.2 Milestone 0 — Architecture Lock and Contract Base

### Platform/contracts

- initialize monorepo

- create package boundaries

- create contract registry folders

- define first shared DTO packages

### Data/schema

- scaffold first migration files

- create seed strategy

- define naming conventions

### Workflow/automation

- create workflow folders

- define morning board and Night Shift graph shells

### Frontend/product

- initialize founder-web shell

- define navigation skeleton

- create initial design tokens

### Reliability/ops

- create CI baseline

- add lint/typecheck/secret scan

- create initial environment config strategy

### Exit criteria

- one bootable repo

- one contract registry

- one migration bundle scaffold

## 91.3 Milestone 1 — Core Spine Online

### Platform/contracts

- implement api-gateway shell

- implement identity-service v1

- implement approval-service v1 contract

### Data/schema

- run identity + approval foundation migrations

- seed default policy bundles and approval profiles

### Workflow/automation

- create basic approval resolution workflow

- create basic board assembly workflow shell

### Frontend/product

- implement founder-web home shell

- implement approval queue shell

### Reliability/ops

- basic service health checks

- startup diagnostics logging

### Exit criteria

- founder can sign in or enter the system context

- approval queue renders from real data

## 91.4 Milestone 2 — First Real Morning Board

### Platform/contracts

- finalize `MorningBoard` contract v1

- add board endpoint contracts

### Data/schema

- state snapshot and workflow run tables live

- board read-model or materialized input view live

### Workflow/automation

- board generation graph implemented end-to-end

- fallback/partial-data behavior implemented

### Frontend/product

- home board regions implemented

- `StateCard`, `MoveCard`, `ApprovalCard`, `PartialDataBanner`
components built

### Reliability/ops

- board generation traces visible

- board failure alert configured

### Exit criteria

- founder receives useful board in founder-web

- partial data is visibly marked when dependencies fail

## 91.5 Milestone 3 — Content Alpha Loop

### Platform/contracts

- opportunity and asset contracts v1

- promote-to-build command and asset events defined

### Data/schema

- opportunity_records and asset_records migrations applied

- first signal storage tables live

### Workflow/automation

- Night Shift content sweep implemented

- scoring and promotion path implemented

- build packet generation path implemented

### Frontend/product

- Opportunity Cockpit v1

- Foundry Console v1

### Reliability/ops

- render/provider failure classification implemented

- budget guardrails instrumented

### Exit criteria

- at least one overnight opportunity becomes one reviewable build
packet

## 91.6 Milestone 4 — Capital Brief Loop

### Platform/contracts

- capital memo, watchlist, and filing signal contracts v1

### Data/schema

- watchlists, filing_signals, capital_memos live

### Workflow/automation

- Night Shift capital sweep implemented

- memo generation and risk-change path implemented

### Frontend/product

- Capital Briefing Surface v1

### Reliability/ops

- partial provider availability degraded mode tested

### Exit criteria

- founder wakes to usable capital summary with risk and setup notes

## 91.7 Milestone 5 — Foundry and Preview Launch

### Platform/contracts

- preview deployment and package-for-approval contracts defined

### Data/schema

- preview deployment tables or records live

- render_jobs persistence live

### Workflow/automation

- media render pipeline live

- app scaffold preview pipeline live

- approval packaging path connected

### Frontend/product

- PreviewAssetPanel implemented

- Foundry Console preview path working

### Reliability/ops

- DLQ coverage for render/app preview failures

- safe replay rules documented

### Exit criteria

- founder can inspect previewable artifacts generated by the estate

## 91.8 Milestone 6 — State and Estate Intelligence

### Platform/contracts

- state and estate intervention contracts hardened

### Data/schema

- transition_events and intervention_logs live

- room_profiles and telemetry tables live

### Workflow/automation

- state cycle workflow live

- low-risk intervention preview path live

### Frontend/product

- State and Estate Console v1

- ModeSwitcher and related state UI components live

### Reliability/ops

- safety and policy audit trail verified

### Exit criteria

- system adapts recommendations or room interventions using state
context

## 91.9 Milestone 7 — Reliability and Pilot Readiness

### Platform/contracts

- tenancy and environment isolation contracts reviewed

- pilot-safe boundaries documented

### Data/schema

- backup/restore verification performed

- retention and redaction checks completed

### Workflow/automation

- replay tools and operator recovery utilities improved

### Frontend/product

- degraded-state messaging hardened across founder surfaces

- operator-console reliability views improved

### Reliability/ops

- major runbooks completed

- severity model active

- release gating mature

### Exit criteria

- founder trust materially higher due to fewer silent failures and
clearer fallback behavior

## 91.10 Milestone 8 — Embodiment Readiness Layer

### Platform/contracts

- task envelopes for estate/robotics-safe actions defined

- ambient event contracts reviewed

### Data/schema

- estate/device abstractions hardened

- simulation/event history tables added if needed

### Workflow/automation

- simulation-first hooks added for physical/ambient actions

- robotics-affecting workflows remain behind strong flags and policy

### Frontend/product

- estate and ambient surfaces expose preview/simulation states clearly

### Reliability/ops

- risky actuation paths blocked unless policy and environment allow

### Exit criteria

- estate is technically ready to extend into ambient or robotic
embodiment without destabilizing core operations

## 91.11 Engineering task breakdown usage rule

This appendix should be used to derive:

- epics,

- milestone boards,

- sprint plans,

- owner assignments,

- and acceptance criteria for milestone reviews.

## 91.12 v9 completion signal

This appendix is successful when a small team can take the document and
produce:

- a repo plan,

- migration tasks,

- service tickets,

- workflow tasks,

- frontend cockpit tickets,

- and milestone review checklists.

At that point, the living document has become not just architecture and
systems design, but a near-operational delivery instrument.

---

# 92. Appendix AV: Execution Pack v10 — Real Example Payload Bundles

This appendix turns the earlier schema and contract work into practical
example bundles that engineering, frontend, QA, and workflow authors can
use immediately. These are not abstract schemas; they are realistic,
cross-linked payload examples that should live in the contract registry
as fixtures.

## 92.1 Bundle philosophy

A good example bundle should:

- represent a believable founder scenario,

- connect records across services,

- include both happy-path and partial/degraded examples,

- and be usable in local development, Storybook/demo states, contract
tests, and workflow simulation.

Recommended storage path:

```text

contracts/examples/

founder-board/

approvals/

opportunities/

assets/

workflows/

state/

voice/

capital/

```

## 92.2 Example bundle: Morning Board — healthy overnight run

### File:
`contracts/examples/founder-board/board-healthy.example.json`

```json

{

"board_id": "board_2026_06_05",

"generated_at": "2026-06-05T07:40:00Z",

"state_summary": {

"readiness_band": "green",

"headline": "High readiness. Strong window for deep work and execution
before midday."

},

"body_section": {

"sleep_recovery_summary": "Recovery above baseline.",

"state_warning": null,

"recommended_workload": "high"

},

"money_section": {

"top_content_opportunity_id": "opp_content_101",

"top_market_opportunity_id": "opp_capital_044",

"biggest_risk": "One content opportunity is time-sensitive due to trend
acceleration."

},

"moves_section": [

{

"rank": 1,

"action_type": "approve_asset_packet",

"title": "Approve overnight YouTube build packet",

"reason": "Highest monetization score and lowest production friction
among current opportunities."

},

{

"rank": 2,

"action_type": "review_capital_memo",

"title": "Review watchlist memo on top semiconductor setup",

"reason": "Quality and catalyst signals improved overnight."

}

],

"momentum_section": {

"what_worked": [

"AI health automation niche content continued to outperform broad AI
commentary."

],

"what_to_stop": [

"Low-conviction broad-topic short-form drafts with weak packaging
differentiation."

]

},

"critical_alerts": [],

"approval_packets": ["approval_publish_2026_06_05_001"],

"recommended_order": [

"approval_publish_2026_06_05_001",

"capital_memo_2026_06_05_core"

],

"narrative_summary": "You are in a strong execution window. Start with
the prepared content approval, then review the capital memo while
momentum is high."

}

```

## 92.3 Example bundle: Morning Board — partial degraded run

### File:
`contracts/examples/founder-board/board-partial.example.json`

```json

{

"board_id": "board_2026_06_06_partial",

"generated_at": "2026-06-06T07:45:00Z",

"state_summary": {

"readiness_band": "amber",

"headline": "Moderate readiness with elevated friction; start with
guided work."

},

"body_section": {

"sleep_recovery_summary": "Recovery below baseline.",

"state_warning": "Expect higher activation friction this morning.",

"recommended_workload": "moderate"

},

"money_section": {

"top_content_opportunity_id": "opp_content_109",

"top_market_opportunity_id": null,

"biggest_risk": "Capital memo incomplete due to one provider sync
failure."

},

"moves_section": [

{

"rank": 1,

"action_type": "review_build_packet",

"title": "Review simplified overnight build packet",

"reason": "Render pipeline failed, but the opportunity remains strong
enough for manual review."

}

],

"momentum_section": {

"what_worked": ["Focused niche packets over generic content
ideation."],

"what_to_stop": ["Late-night broad experimentation without scoring
discipline."]

},

"critical_alerts": [

"Capital brief is partial.",

"Media render provider degraded overnight."

],

"approval_packets": [],

"recommended_order": ["opp_content_109_review"],

"narrative_summary": "The estate completed a partial Night Shift. Begin
with the prepared content brief; market analysis is incomplete and
marked as partial."

}

```

## 92.4 Example bundle: Approval packet + linked asset + linked
workflow

### File:
`contracts/examples/approvals/approval-publish-video.example.json`

```json

{

"approval_request_id": "approval_publish_2026_06_05_001",

"headline": "Publish AI health automation overnight video packet",

"summary": "Night Shift produced a high-scoring content packet with
script, packaging notes, and preview render.",

"requested_action_type": "publish_video",

"risk_tier": "tier_3",

"autonomy_class": "class_4",

"requested_by_agent": "ApprovalGovernor",

"decision_options": [

{"value": "approve", "label": "Approve and continue"},

{"value": "reject", "label": "Reject and archive"},

{"value": "snooze", "label": "Snooze for later"}

],

"cost_summary": {

"estimated_spend": 14.2,

"currency": "USD",

"budget_status": "within_limit"

},

"evidence_refs": [

"opp_content_101",

"asset_video_packet_101",

"workflow_night_content_101"

],

"reversible": false,

"expires_at": "2026-06-06T08:00:00Z",

"recommended_decision": "approve"

}

```

### File: `contracts/examples/assets/asset-video-packet.example.json`

```json

{

"asset_id": "asset_video_packet_101",

"asset_type": "video_build_packet",

"source_opportunity_id": "opp_content_101",

"status": "awaiting_approval",

"preview_url":
"https://preview.hotelnexus.local/assets/asset_video_packet_101",

"production_metadata": {

"provider": "heygen",

"aspect_ratio": "16:9",

"language": "en",

"duration_seconds": 92

},

"variant_group_id": "variant_group_ai_health_101",

"approval_request_id": "approval_publish_2026_06_05_001",

"performance_metrics_ref": null

}

```

### File:
`contracts/examples/workflows/workflow-night-content-paused.example.json`

```json

{

"run_id": "workflow_night_content_101",

"workflow_type": "night_shift_content_sweep",

"initiator_type": "scheduler",

"initiator_id": "night_shift_cron",

"status": "paused_for_approval",

"priority": "high",

"started_at": "2026-06-05T01:00:00Z",

"ended_at": null,

"cost_estimate": 20.0,

"actual_cost": 14.2,

"approval_state": "awaiting_founder",

"result_summary": "Top content packet rendered and packaged for founder
approval.",

"failure_class": null,

"trace_ref": "trace_night_content_101"

}

```

## 92.5 Example bundle: Opportunity promoted to build

### File:
`contracts/examples/opportunities/opportunity-content-promoted.example.json`

```json

{

"opportunity_id": "opp_content_101",

"opportunity_domain": "content",

"title": "AI health automation niche — underserved creator demand",

"hypothesis": "Search demand and monetization potential are accelerating
faster than creator supply.",

"source_signals": [

"trend_signal_ai_health_21",

"analytics_signal_youtube_cluster_04",

"competitor_signal_gap_11"

],

"demand_score": 0.87,

"supply_gap_score": 0.74,

"monetization_score": 0.79,

"build_complexity_score": 0.38,

"confidence_score": 0.81,

"recommended_asset_types": ["youtube_video", "short_series",
"landing_page"],

"status": "promoted_to_build",

"owner_agent": "RevenueDirector"

}

```

## 92.6 Example bundle: Voice capture to structured intent

### File:
`contracts/examples/voice/voice-capture-structured-intent.example.json`

```json

{

"capture_id": "voice_capture_001",

"captured_at": "2026-06-05T10:05:00Z",

"raw_transcript": "Find me the best niche in AI health automation and
build a landing page if there's a good opportunity.",

"inferred_intent": {

"domain": "opportunity_and_foundry",

"proposed_command": "RunOpportunityScanAndPossibleAppFoundryCommand",

"confidence": 0.83

},

"clarification_required": false,

"resulting_refs": [

"cmd_opportunity_foundry_001",

"memory_capture_001"

]

}

```

## 92.7 Example bundle: Capital brief memo

### File:
`contracts/examples/capital/capital-memo-latest.example.json`

```json

{

"memo_id": "capital_memo_2026_06_05_core",

"generated_at": "2026-06-05T06:20:00Z",

"market_backdrop": "Risk appetite improving; semiconductor strength
continues.",

"top_setup": {

"ticker": "NVDA",

"summary": "Catalyst and quality signals remain strong; watch valuation
sensitivity."

},

"top_risk": {

"ticker": "TSLA",

"summary": "Narrative strength weakened relative to flow support."

},

"watchlist_changes": [

{"ticker": "NVDA", "change": "upgraded"},

{"ticker": "AMD", "change": "watch"}

],

"confidence": 0.74,

"partial": false

}

```

## 92.8 Payload bundle usage rules

These bundles should be used for:

- Storybook/demo data,

- contract validation fixtures,

- integration tests,

- workflow replay tests,

- founder demo environments,

- partial/degraded-mode UI testing.

## 92.9 Payload bundle acceptance criteria

This appendix is complete when:

- at least one realistic example exists for each major founder-facing
object,

- examples are cross-linked across domains,

- both healthy and degraded examples exist,

- and frontend/backend tests can consume the same fixtures.

---

# 93. Appendix AW: Execution Pack v10 — TypeScript-Style Founder
Cockpit Interfaces

This appendix translates the earlier component contracts into
implementation-oriented TypeScript-style interfaces. These are not final
framework-specific types, but they should be close enough to become
shared frontend contract files.

## 93.1 Interface design principles

The cockpit interface layer should:

- reflect trust states explicitly,

- distinguish nullable from required data,

- preserve cross-link references,

- and remain stable enough to be shared between design mocks, frontend
components, and test fixtures.

## 93.2 Shared supporting types

```ts

type ReadinessBand = 'red' | 'amber' | 'green' | 'blue';

type RiskTier = 'tier_1' | 'tier_2' | 'tier_3' | 'tier_4';

type AutonomyClass = 'class_0' | 'class_1' | 'class_2' | 'class_3' |
'class_4' | 'class_5';

type DataTrustState = 'observed' | 'inferred' | 'generated' |
'partial' | 'awaiting_approval';

type WorkflowStatus = 'queued' | 'running' | 'paused_for_approval' |
'completed' | 'degraded' | 'failed';

type EvidenceRef = string;

type DecisionOption = {

value: 'approve' | 'reject' | 'snooze';

label: string;

};

```

## 93.3 Shared domain interfaces

```ts

export interface RecommendedMove {

rank: number;

actionType: string;

title: string;

reason: string;

linkedApprovalRequestId?: string | null;

linkedOpportunityId?: string | null;

linkedWorkflowRunId?: string | null;

trustState?: DataTrustState;

}

export interface CostSummary {

estimatedSpend: number;

currency: string;

budgetStatus: 'within_limit' | 'near_limit' | 'over_limit';

}

export interface ApprovalPacket {

approvalRequestId: string;

headline: string;

summary: string;

requestedActionType: string;

riskTier: RiskTier;

autonomyClass: AutonomyClass;

requestedByAgent: string;

decisionOptions: DecisionOption[];

costSummary?: CostSummary;

evidenceRefs: EvidenceRef[];

reversible: boolean;

expiresAt?: string | null;

recommendedDecision?: 'approve' | 'reject' | 'snooze' | null;

trustState?: DataTrustState;

}

export interface StateSummary {

readinessBand: ReadinessBand;

headline: string;

readinessScore?: number;

frictionScore?: number;

recoveryScore?: number;

overloadRiskScore?: number;

lastUpdatedAt?: string;

trustState?: DataTrustState;

}

export interface MorningBoard {

boardId: string;

generatedAt: string;

stateSummary: StateSummary;

bodySection: Record\<string, unknown>;

moneySection: Record\<string, unknown>;

movesSection: RecommendedMove[];

momentumSection: Record\<string, unknown>;

criticalAlerts: string[];

approvalPackets: string[];

recommendedOrder: string[];

narrativeSummary: string;

partial?: boolean;

}

```

## 93.4 Component prop interfaces

### `StateCardProps`

```ts

export interface StateCardProps {

state: StateSummary;

onOpenDetail?: () => void;

onOpenEvidence?: () => void;

loading?: boolean;

stale?: boolean;

}

```

### `MoveCardProps`

```ts

export interface MoveCardProps {

move: RecommendedMove;

onExecute?: (move: RecommendedMove) => void;

onSnooze?: (moveId: string) => void;

onOpenEvidence?: (refs?: EvidenceRef[]) => void;

blocked?: boolean;

}

```

### `ApprovalCardProps`

```ts

export interface ApprovalCardProps {

approval: ApprovalPacket;

onApprove: (approvalRequestId: string, note?: string) => void;

onReject: (approvalRequestId: string, note?: string) => void;

onSnooze: (approvalRequestId: string, until?: string) => void;

onOpenEvidence?: (refs: EvidenceRef[]) => void;

resolving?: boolean;

}

```

### `EvidenceDrawerProps`

```ts

export interface EvidenceDrawerProps {

evidenceRefs: EvidenceRef[];

open: boolean;

onClose: () => void;

onOpenSource?: (ref: EvidenceRef) => void;

loading?: boolean;

partial?: boolean;

}

```

### `OpportunityScorePanelProps`

```ts

export interface OpportunityScorePanelProps {

opportunityId: string;

demandScore: number;

supplyGapScore: number;

monetizationScore: number;

buildComplexityScore: number;

confidenceScore: number;

scoringModelVersion?: string;

sourceSignals?: string[];

onPromoteToBuild?: (opportunityId: string) => void;

onHold?: (opportunityId: string) => void;

onArchive?: (opportunityId: string) => void;

}

```

### `WorkflowStatusPillProps`

```ts

export interface WorkflowStatusPillProps {

workflowType: string;

status: WorkflowStatus;

startedAt?: string;

endedAt?: string | null;

degradedMode?: boolean;

}

```

### `PartialDataBannerProps`

```ts

export interface PartialDataBannerProps {

message: string;

affectedSections: string[];

onOpenDetails?: () => void;

onDismiss?: () => void;

}

```

### `VoiceCaptureBarProps`

```ts

export interface VoiceCaptureBarProps {

captureMode: 'tap_to_talk' | 'hold_to_talk' | 'continuous';

onSubmit: (payload: { transcript: string; interpretedIntent?: string })
=> void;

onCancel?: () => void;

transcriptPreview?: string;

inferredIntentPreview?: string;

state?: 'idle' | 'listening' | 'transcribing' | 'ready_to_confirm' |
'failed';

}

```

### `PreviewAssetPanelProps`

```ts

export interface PreviewAssetPanelProps {

assetId: string;

assetType: string;

status: string;

previewUrl?: string;

provider?: string;

approvalRequestId?: string | null;

sourceOpportunityId?: string | null;

onOpenPreview?: (assetId: string) => void;

onPackageForApproval?: (assetId: string) => void;

onInspectMetadata?: (assetId: string) => void;

}

```

## 93.5 Screen container interfaces

```ts

export interface HomeBoardScreenData {

board: MorningBoard;

topApproval?: ApprovalPacket | null;

workflowStatus?: {

lastNightShiftRunAt?: string;

status?: WorkflowStatus;

};

}

export interface ApprovalCenterScreenData {

approvals: ApprovalPacket[];

selectedApprovalId?: string | null;

}

export interface OpportunityCockpitScreenData {

opportunities: Array\<{

opportunityId: string;

title: string;

confidenceScore?: number;

status: string;

}>;

selectedOpportunityId?: string | null;

}

```

## 93.6 Interface governance rules

- shared cockpit interfaces should live in a reusable package

- changes to core props require contract review if multiple screens
depend on them

- `partial`, `stale`, and trust-related states must not be omitted
just because the happy path looks cleaner

- component props should stay close to backend contracts but can be
transformed through presenters/view-model layers

## 93.7 TypeScript interface acceptance criteria

This appendix is complete when frontend engineering can:

- create shared types,

- scaffold core cockpit components,

- generate mock screens from example payloads,

- and use the same interfaces across Storybook, app code, and tests.

---

# 94. Appendix AX: Execution Pack v10 — Practical Epic and Backlog
Templates

This appendix turns the milestone breakdown into reusable execution
templates for engineering and product management. The goal is to make
planning repeatable and consistent across the platform.

## 94.1 Backlog philosophy

A strong Hotel Nexus backlog should keep every item tied to at least one
of the following:

- founder-visible leverage,

- contract/system integrity,

- reliability/trust,

- or future extensibility.

Backlog items that are architecturally interesting but not connected to
one of those outcomes should be challenged.

## 94.2 Epic template

```md

# Epic: \<name>

## Objective

What founder-visible or platform-visible capability this epic delivers.

## Why it matters

- founder benefit

- system benefit

- risk reduced or leverage created

## Domains affected

- [ ] identity

- [ ] memory

- [ ] workflow

- [ ] approvals

- [ ] opportunities

- [ ] assets/foundry

- [ ] state

- [ ] estate

- [ ] capital

- [ ] observability

## Contracts affected

- APIs:

- Events:

- Commands:

- Schemas:

## Data / migration impact

- migration required:

- backfill required:

- read model updates:

## UX / screen impact

- screens affected:

- components affected:

- trust-state handling required:

## Reliability / ops impact

- runbooks affected:

- alerts affected:

- degraded mode required:

## Acceptance criteria

- [ ]

- [ ]

- [ ]

## Rollout

- release ring:

- feature flag:

- rollback note:

```

## 94.3 Story template

```md

# Story: \<name>

## User / system outcome

As the founder / operator / workflow runtime, I need...

## Scope

Concrete in-scope behavior.

## Dependencies

- services:

- contracts:

- migrations:

- UI components:

## Tasks

- [ ] implementation

- [ ] tests

- [ ] contract updates

- [ ] docs/runbook updates

## Definition of done

- [ ] behavior works in expected path

- [ ] degraded/partial states handled

- [ ] logs/traces present

- [ ] acceptance tested

```

## 94.4 Technical task template

```md

# Technical Task: \<name>

## Purpose

Specific engineering change.

## Affected layer

- [ ] repo structure

- [ ] service code

- [ ] workflow

- [ ] contract

- [ ] migration

- [ ] CI/CD

- [ ] observability

## Inputs / outputs

What changes in and what artifact emerges.

## Validation

- tests required

- metrics/traces to verify

- rollback or mitigation if needed

```

## 94.5 Bug / incident follow-up template

```md

# Incident Follow-up: \<name>

## Incident link

Reference Sev / incident doc.

## Problem

What failed and why it matters to founder trust.

## Root cause summary

Concise root cause.

## Corrective tasks

- [ ] code fix

- [ ] contract fix

- [ ] alerting fix

- [ ] runbook fix

- [ ] UI trust-state fix

## Success signal

How we know this class of failure is materially less likely or more
visible.

```

## 94.6 Example epic: First Real Morning Board

```md

# Epic: First Real Morning Board

## Objective

Deliver the first founder-usable daily board with state, moves,
approvals, and momentum.

## Why it matters

The board is the main operating bridge into the estate.

## Domains affected

- workflow

- state

- approvals

- frontend/product

- observability

## Contracts affected

- MorningBoard

- RecommendedMove

- board.generated event

- GenerateMorningBoardCommand

## Data / migration impact

- state_snapshots live

- workflow_runs live

- read model or board input view live

## UX / screen impact

- Home / Morning Command Board

- StateCard

- MoveCard

- ApprovalCard

- PartialDataBanner

## Acceptance criteria

- founder receives a board with useful ranked moves

- top approval is visible if present

- partial data is visibly marked

- traces exist for board generation

```

## 94.7 Example sprint board column set

Recommended column flow:

- `discovery`

- `ready`

- `in_progress`

- `blocked`

- `in_review`

- `staging_validated`

- `founder_ready`

- `done`

## 94.8 Example backlog labels

Recommended labels:

- `domain:memory`

- `domain:workflow`

- `domain:approvals`

- `domain:foundry`

- `domain:capital`

- `surface:founder-web`

- `surface:mobile`

- `surface:operator-console`

- `risk:high`

- `trust:critical`

- `migration`

- `contract-change`

- `runbook-update`

- `feature-flag`

## 94.9 Backlog hygiene rules

- every item should map to a milestone or epic

- every high-risk item should declare trust impact

- every contract-affecting item should link affected schemas

- every founder-facing item should describe the user-visible change

- every reliability item should point to a possible incident class or
degraded mode

## 94.10 Practical backlog packs to create immediately

The team should create initial backlog packs for:

1. Milestone 0 architecture lock

2. Milestone 1 core spine

3. Milestone 2 first real board

4. Milestone 3 content alpha loop

5. Milestone 5 foundry and preview launch

These packs will give the fastest path to daily founder value.

## 94.11 v10 completion signal

This appendix is successful when product and engineering can take the
living document and derive:

- epics,

- stories,

- technical tasks,

- sprint boards,

- labels,

- and milestone review criteria

without having to reinvent planning structure.

At that point, the Hotel Nexus living document is functioning as
architecture spec, systems pack, delivery companion, and backlog
generator.

---

# 95. Appendix AY: Execution Pack v11 — Implementation Kickoff Pack

This appendix is the practical bridge between the full Hotel Nexus
specification and the first serious build cycle. It is intended to
answer the question: **what does a small team do in week one, week
two, and month one to turn the living document into a working estate OS
spine?**

## 95.1 Kickoff philosophy

The kickoff phase should optimize for:

- one repo with usable structure,

- one contract source of truth,

- one working founder-visible vertical slice,

- one reliable environment promotion path,

- and one shared language across product, platform, frontend, data, and
workflow builders.

The team should resist the temptation to “start everywhere.”

The right start is a narrow but real spine.

## 95.2 First 14-day kickoff objectives

By the end of the kickoff window, the team should have:

- monorepo initialized,

- shared package conventions established,

- first migration bundle scaffolded,

- first contract registry files committed,

- first service shells running,

- founder-web shell loading,

- and one end-to-end board/approval demo path working with seeded data.

## 95.3 Kickoff workstream map

### Workstream A — Product and founder surface alignment

Deliverables:

- confirm founder home surface scope for v1

- confirm Approval Center scope for v1

- confirm first founder mobile scope

- freeze the first `MorningBoard` object shape for milestone 1/2 work

- align on trust annotations: observed / inferred / generated / partial
/ awaiting_approval

Owners:

- product/frontend

- founder or founder delegate

### Workstream B — Platform and contracts

Deliverables:

- initialize `packages/domain-models`

- initialize `packages/json-schemas`

- initialize `contracts/` registry

- create baseline OpenAPI files

- create command/event schema scaffolds

- set up contract validation scripts

Owners:

- platform

- frontend/platform shared reviewer

### Workstream C — Data and migrations

Deliverables:

- establish migration framework choice

- create first foundation migration files

- seed baseline policy bundles and default estate records

- define local dev seed strategy

- define first materialized/read model target for Morning Board inputs

Owners:

- data/memory

- platform

### Workstream D — Core services and workflow runtime

Deliverables:

- api-gateway shell

- identity-service shell

- approval-service shell

- workflow-service shell

- memory-service shell

- one board assembly workflow shell

Owners:

- platform/orchestration

### Workstream E — Reliability and environment bootstrap

Deliverables:

- local-dev environment baseline

- shared-dev environment baseline

- CI workflow skeleton

- secret scanning and config convention

- health-check endpoints

- first runbook folder structure

Owners:

- platform/ops

## 95.4 Suggested kickoff meeting sequence

### Meeting 1 — Founder operating target

Agenda:

- confirm first founder-visible vertical slice

- confirm what “useful board” means

- confirm first approval scenarios

- confirm initial non-goals for first build cycle

### Meeting 2 — Architecture lock for the first slice

Agenda:

- confirm repo tree

- confirm service boundaries for milestone 0/1/2

- confirm schema naming and contract governance

- confirm migration strategy

### Meeting 3 — Build plan and ownership

Agenda:

- assign owners per workstream

- assign repo/package/service owners

- confirm weekly demo cadence

- confirm staging/founder-prod promotion policy

## 95.5 First vertical slice specification

The first slice should be intentionally narrow:

**Input**

- seeded or real founder context

- seeded or real state snapshot

- seeded or real open approvals

- seeded or real one or two opportunities

**Processing**

- board assembly workflow

- approval aggregation

- data trust annotations

**Output**

- founder-web Home / Morning Command Board

- Approval Center

- board and approval payload traceability

This slice should not require:

- full ambient sensing,

- full app foundry,

- full capital loop,

- or full robotics abstractions.

## 95.6 Kickoff repo checklist

The team should create and verify the following before writing
feature-heavy code:

- `README` or repo bootstrap note for developers

- environment variable template strategy

- contract registry directories

- migration directories

- service shell directories

- test folders and base commands

- lint/typecheck/format scripts

- CI placeholder workflow

- local startup command

## 95.7 Kickoff acceptance pack

At the end of kickoff, a demo should prove all of the following:

- founder-web loads

- board endpoint returns valid object

- approval endpoint returns valid object

- contract checks pass in CI

- migrations run locally

- a simple workflow run is persisted

- one approval can be resolved and reflected in UI state

## 95.8 First 30 implementation tickets to generate immediately

Recommended immediate ticket groups:

1. monorepo bootstrap

2. package boundary creation

3. contract registry bootstrap

4. migration framework bootstrap

5. identity foundation tables

6. approval foundation tables

7. workflow foundation tables

8. memory foundation tables

9. board read model scaffold

10. api-gateway health and routing shell

11. founder-web shell

12. Approval Center shell

13. Home / Board shell

14. contract validation scripts

15. CI baseline config

16. seed baseline policies

17. seed founder + estate records

18. workflow-service schedule shell

19. approval-service create/list/resolve shell

20. board assembly workflow shell

21. state snapshot seeded model

22. EvidenceDrawer shell

23. StateCard shell

24. MoveCard shell

25. ApprovalCard shell

26. local dev startup docs

27. service health endpoints

28. runbook folder bootstrap

29. release notes template

30. first milestone demo checklist

## 95.9 Kickoff anti-patterns to avoid

- building too many providers before the founder loop works

- overdesigning white-label tenancy before founder-prod is dependable

- shipping generic dashboards instead of ranked action surfaces

- letting schema and contract work lag behind service implementation

- building media/render complexity before approval flows are solid

## 95.10 Kickoff completion signal

The kickoff pack is successful when a small team can start execution the
same week with:

- a repo they understand,

- a service map they trust,

- contracts they can validate,

- migrations they can run,

- and a founder-visible slice they can demo early.

---

# 96. Appendix AZ: Execution Pack v11 — Service-by-Service Operational
Runbooks

This appendix extends the incident layer into a service-by-service
operational pack. The aim is to make ownership, failure modes, checks,
and recovery patterns explicit for the core runtime.

## 96.1 Runbook philosophy

Every core service should have an operational identity:

- what it owns,

- how it fails,

- how operators detect issues,

- what founder-facing surfaces are impacted,

- and what degraded mode is acceptable.

## 96.2 Standard service runbook template

Every service runbook should eventually contain:

- service name

- purpose

- owner / backup owner

- dependencies

- critical endpoints or queues

- main failure modes

- founder impact

- quick checks

- containment steps

- recovery steps

- rollback or failover notes

- linked dashboards

- linked alerts

- linked contracts

## 96.3 Runbook: `api-gateway`

### Purpose

Single public-facing aggregation surface for founder and operator
clients.

### Core dependencies

- identity-service

- approval-service

- memory-service

- workflow-service

- state-service

### Main failure modes

- request routing failures

- auth/session middleware failures

- upstream timeout amplification

- response shaping errors

### Founder impact

- board unavailable

- approvals unavailable

- broken navigation or empty data surfaces

### Quick checks

- gateway health endpoint

- upstream dependency status

- error rate by route

- latency on `/boards/today` and `/approvals`

### Containment

- activate degraded cached board response if allowed

- reduce non-essential aggregation paths

- isolate failing upstream route

### Recovery

- restart/redeploy gateway if deployment fault

- revert recent aggregation/presenter changes if contract mismatch

- verify upstream availability before declaring resolved

## 96.4 Runbook: `identity-service`

### Purpose

Identity, roles, policy attachment, and permission resolution.

### Main failure modes

- auth resolution failure

- policy lookup error

- stale permission data

- integration ownership mismatch

### Founder impact

- inability to enter the estate

- blocked approvals or hidden surfaces

- dangerous permission ambiguity

### Quick checks

- auth token validation path

- policy resolution test for founder profile

- recent permission errors

### Containment

- fail closed for restricted surfaces

- preserve read-only founder access where safe and explicitly supported

### Recovery

- restore policy bundle lookup

- verify founder role mapping

- test approval path permissions before clearing incident

## 96.5 Runbook: `memory-service`

### Purpose

Ingestion, retrieval, provenance, and contextual memory.

### Main failure modes

- ingest backlog growth

- retrieval timeout

- provenance resolution failure

- stale or partial memory search results

### Founder impact

- evidence links fail

- board rationale weakens

- memory console becomes unreliable

### Quick checks

- ingest queue depth

- retrieval latency

- vector or index availability

- provenance lookup errors

### Containment

- degrade to source-grounded limited mode if full retrieval slow

- pause non-critical enrichment jobs if hot-path reads impacted

### Recovery

- drain ingest backlog

- restore index health

- rerun failed enrichment or graph-link steps where necessary

## 96.6 Runbook: `state-service`

### Purpose

State snapshots, readiness modeling, transitions, and intervention
context.

### Main failure modes

- snapshot generation failure

- missing signals

- stale state persistence

- transition detection misfire

### Founder impact

- board state section stale or absent

- mode suggestions become unreliable

- estate interventions risk poor timing

### Quick checks

- latest snapshot timestamp

- signal freshness by source

- state generation workflow status

### Containment

- mark state as stale/partial in all surfaces

- disable auto-executed low-risk interventions if confidence too low

### Recovery

- rerun snapshot generation

- verify recent signal ingestion

- re-enable intervention path only after freshness restored

## 96.7 Runbook: `workflow-service`

### Purpose

Durable execution of Night Shift, board assembly, approvals, and
orchestrated jobs.

### Main failure modes

- stuck workflow state

- queue drain failure

- pause/resume binding failure

- trace correlation missing

### Founder impact

- Night Shift incomplete

- board missing

- approvals never resolve downstream

### Quick checks

- active run counts

- stuck runs older than threshold

- queue lag

- trace/export health

### Containment

- pause low-priority batch jobs

- preserve interactive founder-triggered jobs

- isolate one broken workflow type if possible

### Recovery

- replay or resume safe runs

- drain high-priority queues first

- verify idempotency for resumed jobs

## 96.8 Runbook: `approval-service`

### Purpose

Approval packet creation, decision capture, and audit trail.

### Main failure modes

- approval creation failure

- decision persistence failure

- expiry logic failure

- evidence linkage breakage

### Founder impact

- cannot safely approve actions

- false unresolved approvals

- approval trust damage

### Quick checks

- create/list/resolve endpoint health

- pending approval counts

- recent failed decisions

- audit write success

### Containment

- freeze high-consequence workflow continuation if approval state
uncertain

- preserve read access even if write path degraded where possible

### Recovery

- reconcile pending approval records

- verify audit trail integrity

- test approve/reject/snooze end-to-end

## 96.9 Runbook: `opportunity-service`

### Purpose

Opportunity detection, scoring, ranking, and promotion.

### Main failure modes

- provider ingest gaps

- scoring failures

- duplicate opportunity spam

- promotion logic misfires

### Founder impact

- low-quality or noisy opportunities

- false top opportunities

- build promotion errors

### Quick checks

- source ingest freshness

- scoring job success rate

- opportunity creation volume anomalies

### Containment

- suppress low-confidence promotions

- keep existing top opportunities visible if new ingest unstable

### Recovery

- rerun scoring pipeline

- deduplicate bad batches

- restore source adapters

## 96.10 Runbook: `asset-foundry-service`

### Purpose

Generate scripts, packets, renders, app scaffolds, and preview
artifacts.

### Main failure modes

- render job failures

- provider outages

- preview deployment failure

- orphaned asset records

### Founder impact

- opportunity exists but no artifact to review

- approval packets incomplete

- foundry trust reduced

### Quick checks

- render queue depth

- provider error rates

- preview link validation

- asset status transitions

### Containment

- downgrade from render to build packet only

- block packaging if artifact incomplete and misleading

### Recovery

- rerun safe render jobs

- regenerate preview URLs

- repair asset-record linkage if orphaned

## 96.11 Runbook: `capital-service`

### Purpose

Watchlist refresh, filing normalization, memo generation, and
risk/catalyst tracking.

### Main failure modes

- provider input gaps

- memo generation failure

- stale watchlist state

- thesis change misclassification

### Founder impact

- incomplete or misleading capital brief

- missing risk shifts

### Quick checks

- latest memo timestamp

- provider sync freshness

- watchlist refresh status

- filing ingest health

### Containment

- publish partial brief with explicit warning

- avoid assertive ranking when confidence reduced

### Recovery

- rerun memo generation

- reconcile watchlist source syncs

- reclassify thesis changes if logic bug fixed

## 96.12 Runbook: `estate-service`

### Purpose

Room profiles, estate modes, telemetry normalization, and low-risk
intervention logic.

### Main failure modes

- telemetry drift or gaps

- bad room mapping

- intervention preview failure

- accidental policy mismatch

### Founder impact

- estate console unreliable

- poor state-to-room guidance

- unsafe or noisy low-risk automations

### Quick checks

- room telemetry freshness

- current estate mode state

- recent intervention logs

- policy mismatch warnings

### Containment

- disable automatic intervention execution

- preserve manual preview mode only

### Recovery

- restore telemetry ingest

- validate room mappings

- confirm policy bundles before re-enabling execution

## 96.13 Runbook: `integration-service`

### Purpose

Provider adapters, sync health, credential metadata, and adapter
execution envelope.

### Main failure modes

- credential expiry

- provider schema drift

- adapter timeouts

- sync backlog growth

### Founder impact

- degraded Night Shift

- partial boards

- missing domain-specific inputs

### Quick checks

- adapter health table

- failed sync counts

- credential expiry alerts

- provider change logs if available

### Containment

- isolate failing provider

- preserve unaffected domains

- mark dependent outputs as partial

### Recovery

- refresh credentials

- patch adapter normalization

- replay sync jobs where safe

## 96.14 Runbook: `notification-service`

### Purpose

Founder-facing alerts, digests, nudges, and approval notifications.

### Main failure modes

- delayed approvals

- duplicate notifications

- missed critical alerts

- wrong-channel routing

### Founder impact

- missed action windows

- trust damage from noise or silence

### Quick checks

- notification delivery counts

- failure/retry counts

- approval notification latency

### Containment

- suspend noisy duplicate path

- prioritize critical approval and board notifications

### Recovery

- reroute through fallback channel if necessary

- verify message deduplication keys

## 96.15 Runbook: `observability-service`

### Purpose

Traces, metrics, evaluation exports, and operational visibility.

### Main failure modes

- lost traces

- metrics pipeline lag

- evaluation export failure

- dashboard staleness

### Founder impact

- indirect but significant: operators lose ability to diagnose trust
issues quickly

### Quick checks

- trace ingestion rate

- metrics freshness

- dashboard query health

### Containment

- preserve raw logs and workflow records even if higher-level
dashboards degrade

### Recovery

- restore collectors/exporters

- rebuild dashboards if mappings changed

- verify cross-service correlation IDs still resolve

## 96.16 Service-by-service runbook acceptance criteria

This appendix is complete when each core service has:

- a named owner,

- a failure model,

- quick diagnostic steps,

- degraded-mode behavior,

- and a recovery path clear enough for a small team to execute under
pressure.

At that point, Hotel Nexus stops being merely well-designed and starts
becoming operable.

---

# 97. Appendix BA: Execution Pack v12 — Service Ownership Matrix

This appendix formalizes service ownership so the system can be
operated, evolved, and reviewed without ambiguity. Hotel Nexus is too
broad and too interdependent to rely on informal “someone probably owns
this” assumptions.

## 97.1 Ownership philosophy

Each service or deployable unit should have:

- a **primary owner** accountable for correctness and roadmap,

- a **secondary owner** accountable for continuity and backup
coverage,

- a **product surface dependency map**,

- a **contract ownership map**,

- a **runbook link**,

- and an **escalation path**.

Ownership is not just an org chart concern. It is part of system
reliability, contract governance, and founder trust.

## 97.2 Ownership model definitions

### Primary owner

The team or person accountable for:

- service roadmap,

- contract changes,

- incident response direction,

- data model decisions,

- and release approvals for that service.

### Secondary owner

The team or person who can:

- review changes,

- execute a rollback or recovery,

- cover during absence,

- and understand the service’s operational impact.

### Product stakeholder

The product or founder-facing stakeholder responsible for confirming
that the service still serves the intended founder experience.

## 97.3 Service ownership matrix

| Service / Unit | Primary owner | Secondary owner | Product
stakeholder | Critical contracts | Key founder surfaces |

| --------------------- | ---------------------- |
---------------------- | ---------------------------------- |
----------------------------------------- |
------------------------------------------------- |

| api-gateway | platform | frontend/platform | founder product |
founder API, response envelopes | all founder-web/mobile surfaces |

| identity-service | platform/security | platform | founder product
| identity, permissions, policy refs | authentication, approvals,
estate access |

| memory-service | data/memory | platform | founder product |
memory schemas, search APIs | Memory Console, evidence drawers, board
rationale |

| state-service | sensing/state | platform | founder product |
StateSnapshot, transition contracts | Home, State & Estate Console |

| workflow-service | platform/orchestration | platform/ops | founder
product | workflow run, commands, graph bindings | Morning Board,
Night Shift, approval resolution |

| approval-service | platform | founder product | founder product |
ApprovalRequest, ApprovalPacket | Approval Center, Home |

| opportunity-service | alpha systems | data/memory | founder
product | OpportunityRecord, scoring contracts | Opportunity Cockpit,
Home |

| asset-foundry-service | alpha systems | platform/orchestration |
founder product | asset, preview, render contracts | Foundry Console,
Approval Center |

| capital-service | alpha systems | platform | founder product /
capital reviewer | capital memo, filing, watchlist contracts | Capital
Briefing Surface |

| estate-service | sensing/estate | platform | founder product |
room, intervention, telemetry contracts | State & Estate Console |

| integration-service | platform | platform/security | all domain
owners | integration profiles, sync contracts | indirect; affects all
surfaces |

| notification-service | platform/product | platform | founder
product | notification and digest payloads | mobile alerts, approvals,
board delivery |

| observability-service | platform/ops | platform | engineering
leadership | trace, metrics, evaluation exports | indirect; all
reliability surfaces |

| founder-web | frontend | founder product | founder / product lead
| UI view-model contracts | Home, Approvals, Memory, Capital, Estate
|

| founder-mobile | mobile/frontend | founder product | founder /
product lead | mobile response contracts | board summary, approvals,
voice capture |

| operator-console | platform | platform/ops | engineering
leadership | operator APIs, dashboards | internal only |

## 97.4 Ownership metadata file recommendation

Recommended machine-readable ownership file:

```yaml

services:

api-gateway:

primary_owner: platform

secondary_owner: frontend-platform

product_stakeholder: founder-product

runbook: runbooks/operations/api-gateway.md

contracts:

- contracts/openapi/founder-api.yaml

- contracts/json-schema/records/api-envelope.json

approval-service:

primary_owner: platform

secondary_owner: founder-product

product_stakeholder: founder-product

runbook: runbooks/operations/approval-service.md

contracts:

- contracts/json-schema/records/approval-request.json

- contracts/examples/approvals/approval-publish-video.example.json

```

## 97.5 Ownership review rules

A service should not be considered “production-ready” unless:

- a primary owner is named,

- a secondary owner is named,

- a runbook exists,

- contract ownership is declared,

- and release approval responsibility is defined.

## 97.6 Handoff and continuity rule

If a service owner changes, the following must be updated together:

- owner metadata file,

- runbook ownership section,

- alert routing,

- review CODEOWNERS or equivalent,

- contract registry owner map.

## 97.7 Service ownership acceptance criteria

This appendix is successful when the team can answer, for any service in
under a minute:

- who owns it,

- who backs it up,

- what founder surface it affects,

- what contract files it owns,

- and what runbook to open during a failure.

---

# 98. Appendix BB: Execution Pack v12 — Environment Bootstrap
Checklists

This appendix operationalizes environment setup. The goal is to make
local-dev, shared-dev, staging, and founder-prod setup consistent and
repeatable rather than tribal knowledge.

## 98.1 Bootstrap philosophy

Every environment should be bootstrap-able from:

- checked-in infrastructure/config artifacts,

- explicit secrets/config manifests,

- seed data or fixtures where appropriate,

- and environment-specific checklists.

If an environment cannot be recreated with documented steps, it is a
risk.

## 98.2 Global environment bootstrap checklist

Applicable to all environments:

- [ ] environment name and purpose declared

- [ ] network and runtime target selected

- [ ] service list for environment declared

- [ ] secrets source configured

- [ ] relational DB provisioned

- [ ] object storage configured

- [ ] queue/stream layer configured

- [ ] contract bundle version referenced

- [ ] migration bundle version referenced

- [ ] health-check URLs documented

- [ ] dashboards and alerts linked

- [ ] seed/fixture strategy declared

## 98.3 `local-dev` bootstrap checklist

### Purpose

Fastest developer environment for feature work, seeded demos, and
contract-driven local testing.

### Checklist

- [ ] install repo dependencies

- [ ] copy `.env.example` or equivalent config template

- [ ] start local Postgres or managed dev DB connection

- [ ] start object storage emulator or dev bucket reference

- [ ] start queue emulator or dev queue configuration

- [ ] run foundation migrations

- [ ] run seed bootstrap data

- [ ] start service shells: api-gateway, workflow-service,
approval-service, memory-service

- [ ] start founder-web shell

- [ ] verify `/health` endpoints

- [ ] verify seeded board and approval example render in UI

### Success test

- developer can run one command sequence and see:

- Home / Morning Board shell,

- Approval Center shell,

- seeded data fixtures,

- and one local workflow trace.

## 98.4 `shared-dev` bootstrap checklist

### Purpose

Collaborative integration environment for multi-service validation.

### Checklist

- [ ] environment config applied through shared secret manager

- [ ] deploy core services with shared-dev config

- [ ] apply migrations to shared-dev database

- [ ] load shared-dev seed fixtures

- [ ] configure sandbox provider credentials only

- [ ] enable CI deployment pipeline to shared-dev

- [ ] link dashboards and logs

- [ ] test board generation workflow with shared-dev traces

### Success test

- multiple team members can validate the same board and approval flows
against shared services.

## 98.5 `staging` bootstrap checklist

### Purpose

Pre-production validation with near-real contracts and operational
rules.

### Checklist

- [ ] staging secrets provisioned

- [ ] production-like routing and service topology established

- [ ] migrations applied from versioned release bundle

- [ ] only approved sandbox/read-only providers attached unless
explicitly needed

- [ ] synthetic or sanitized test data strategy applied

- [ ] alerting connected

- [ ] degraded-mode tests run

- [ ] release candidate contract bundle pinned

- [ ] runbook links validated

### Success test

- full Morning Board workflow, approval flow, and one Night Shift
workflow complete in staging with observable traces.

## 98.6 `founder-prod` bootstrap checklist

### Purpose

Live founder-facing environment with strongest trust, approval, and
budget boundaries.

### Checklist

- [ ] founder-prod secrets provisioned and isolated

- [ ] budget and approval policies verified

- [ ] migrations applied during approved window

- [ ] health/legal/finance domains restricted correctly

- [ ] alerts routed to named owners

- [ ] runbooks verified current

- [ ] feature flags reviewed

- [ ] rollback notes attached to release

- [ ] board and approval smoke tests performed post-deploy

### Success test

- founder can log in, view board, resolve one approval, and inspect
evidence after deployment.

## 98.7 `pilot-prod` bootstrap checklist

### Purpose

Future white-label or pilot environment with explicit tenancy
separation.

### Checklist

- [ ] tenant isolation verified

- [ ] no shared secret scopes with founder-prod

- [ ] dedicated data stores or logically isolated tenant paths
verified

- [ ] contract versions pinned

- [ ] owner routing updated for pilot support

- [ ] pilot-safe runbook set available

## 98.8 Environment bootstrap file pack recommendation

Recommended files to create:

- `infrastructure/env/local-dev.checklist.md`

- `infrastructure/env/shared-dev.checklist.md`

- `infrastructure/env/staging.checklist.md`

- `infrastructure/env/founder-prod.checklist.md`

- `infrastructure/env/pilot-prod.checklist.md`

- `infrastructure/env/owners.yaml`

## 98.9 Environment bootstrap acceptance criteria

This appendix is successful when:

- a new engineer can bring up local-dev reliably,

- shared-dev can be recreated without tribal knowledge,

- staging can validate a release candidate,

- and founder-prod has a documented bootstrap and smoke-test path.

---

# 99. Appendix BC: Execution Pack v12 — Detailed 30/60/90 Day Sprint
Packs

This appendix drills the roadmap into time-boxed sprint packs. It
complements the milestone model by making the first 90 days concrete
enough for weekly planning and demo cadence.

## 99.1 Sprint pack philosophy

The first 90 days should balance:

- founder-visible progress,

- contract and schema integrity,

- core runtime reliability,

- and one real economic loop.

The team should finish every sprint with:

- one demo,

- one updated contract state,

- one reliability check,

- and one founder-trust improvement.

## 99.2 Days 1–30 sprint pack

### Sprint 1 (Days 1–10) — Repo, contracts, and service shells

#### Objectives

- establish buildable repo structure

- establish contract registry

- establish first migrations and service shells

#### Platform/contracts tasks

- [ ] initialize monorepo workspace config

- [ ] create `packages/domain-models`, `packages/json-schemas`,
`contracts/`

- [ ] add first OpenAPI and JSON Schema placeholders

- [ ] add contract validation scripts

#### Data/schema tasks

- [ ] scaffold first migration bundle

- [ ] create seed strategy for founder/dev fixtures

- [ ] create `person_profiles`, `estate_profiles`,
`approval_requests`, `workflow_runs` initial migrations

#### Workflow/automation tasks

- [ ] scaffold `workflows/morning-board`

- [ ] scaffold approval resolution workflow shell

#### Frontend/product tasks

- [ ] initialize founder-web shell

- [ ] add top-level routes: Home, Approvals, Memory

- [ ] create placeholder `StateCard`, `MoveCard`,
`ApprovalCard`

#### Reliability/ops tasks

- [ ] create CI baseline file

- [ ] add lint/typecheck/secret scan

- [ ] create health endpoints for first services

#### Demo target

- team can boot local-dev and view a seeded board shell.

### Sprint 2 (Days 11–20) — Board object and approval path

#### Objectives

- make the first board and approval contracts real

#### Platform/contracts tasks

- [ ] finalize `MorningBoard` v1 example and schema

- [ ] finalize `ApprovalPacket` v1 example and schema

- [ ] add internal endpoint stubs for board and approvals

#### Data/schema tasks

- [ ] apply approval and workflow schema updates needed for board
assembly

- [ ] create first board input read model scaffold

#### Workflow/automation tasks

- [ ] implement basic board assembly graph using seeded inputs

- [ ] implement approval create/list/resolve flow

#### Frontend/product tasks

- [ ] render real board object in Home surface

- [ ] render real approval queue in Approval Center

- [ ] add partial-data and loading states

#### Reliability/ops tasks

- [ ] add board-generation trace visibility

- [ ] add approval resolution audit logging

#### Demo target

- founder-web shows a real seeded board and an approval can be resolved
through UI.

### Sprint 3 (Days 21–30) — Memory-backed rationale

#### Objectives

- connect evidence and memory to the board and approval surfaces

#### Platform/contracts tasks

- [ ] add evidence drawer contracts

- [ ] finalize first memory search payloads

#### Data/schema tasks

- [ ] memory_sources, memory_items, memory_chunks live

- [ ] seed memory examples linked to board and approvals

#### Workflow/automation tasks

- [ ] board assembly pulls linked evidence refs

- [ ] memory-service basic search endpoint returns usable snippets

#### Frontend/product tasks

- [ ] implement EvidenceDrawer

- [ ] wire evidence links from board and approvals

- [ ] add source-grounded badges

#### Reliability/ops tasks

- [ ] retrieval latency baseline

- [ ] evidence failure degraded-state handling

#### Demo target

- founder can open a board recommendation, inspect evidence, and
understand why it exists.

## 99.3 Days 31–60 sprint pack

### Sprint 4 (Days 31–40) — State layer v1

#### Objectives

- render current state meaningfully in the founder cockpit

#### Platform/contracts tasks

- [ ] finalize `StateSnapshot` v1 contract

- [ ] add state endpoint contracts

#### Data/schema tasks

- [ ] state_snapshots and transition_events live

- [ ] seed or ingest first state fixtures

#### Workflow/automation tasks

- [ ] state snapshot generation workflow shell

- [ ] board assembly uses current state object

#### Frontend/product tasks

- [ ] `StateCard` real data integration

- [ ] state annotations and freshness display

#### Reliability/ops tasks

- [ ] stale-state warning path

- [ ] state generation trace path

#### Demo target

- board includes current state summary and visibly marks stale/partial
state when needed.

### Sprint 5 (Days 41–50) — Opportunity loop v1

#### Objectives

- introduce the first content opportunity pipeline

#### Platform/contracts tasks

- [ ] finalize `OpportunityRecord` and promote-to-build command
schemas

- [ ] add asset packet contract placeholders

#### Data/schema tasks

- [ ] opportunity_records and basic signal tables live

#### Workflow/automation tasks

- [ ] implement opportunity ingest/scoring skeleton

- [ ] implement basic promotion path to build packet

#### Frontend/product tasks

- [ ] Opportunity Cockpit v1 list and detail panels

- [ ] OpportunityScorePanel v1

#### Reliability/ops tasks

- [ ] signal ingest freshness checks

- [ ] duplicate opportunity suppression logging

#### Demo target

- one ranked opportunity can be reviewed and promoted.

### Sprint 6 (Days 51–60) — Foundry packet generation v1

#### Objectives

- convert one opportunity into one reviewable build artifact

#### Platform/contracts tasks

- [ ] finalize `AssetRecord` and preview panel contracts

- [ ] finalize package-for-approval shape

#### Data/schema tasks

- [ ] asset_records live

- [ ] render_jobs or build-packet persistence live

#### Workflow/automation tasks

- [ ] foundry packet generation workflow live

- [ ] approval packet creation wired to foundry outputs

#### Frontend/product tasks

- [ ] Foundry Console v1

- [ ] PreviewAssetPanel v1

#### Reliability/ops tasks

- [ ] provider failure degraded path tested

- [ ] artifact linkage checks instrumented

#### Demo target

- one overnight opportunity produces one approval-ready build packet.

## 99.4 Days 61–90 sprint pack

### Sprint 7 (Days 61–70) — Night Shift first real loop

#### Objectives

- make the overnight content loop real enough to trust in founder demos

#### Platform/contracts tasks

- [ ] finalize Night Shift workflow event payloads

- [ ] validate pause-for-approval contracts

#### Data/schema tasks

- [ ] workflow read models or summaries for last Night Shift run

#### Workflow/automation tasks

- [ ] schedule nightly content scan

- [ ] persist workflow runs and outputs

- [ ] attach outputs to Morning Board

#### Frontend/product tasks

- [ ] show Night Shift status strip on Home screen

- [ ] show partial/failure banners tied to workflow state

#### Reliability/ops tasks

- [ ] missed wake-window alert

- [ ] stuck workflow detection

#### Demo target

- founder wakes to a board that includes the result of a real overnight
content scan.

### Sprint 8 (Days 71–80) — Capital brief v1

#### Objectives

- add the second overnight intelligence loop

#### Platform/contracts tasks

- [ ] finalize capital memo contracts

- [ ] add watchlist and filing input schema stubs

#### Data/schema tasks

- [ ] watchlists and capital_memos live

#### Workflow/automation tasks

- [ ] capital memo generation workflow shell

- [ ] partial provider mode supported

#### Frontend/product tasks

- [ ] Capital Briefing Surface v1

- [ ] top setup / top risk display blocks

#### Reliability/ops tasks

- [ ] partial capital brief warning path

- [ ] memo freshness visibility

#### Demo target

- board links to a usable overnight capital memo.

### Sprint 9 (Days 81–90) — Reliability, runbooks, and founder trust
hardening

#### Objectives

- make the system feel dependable rather than merely impressive

#### Platform/contracts tasks

- [ ] review contract registry completeness for live paths

- [ ] finalize owner maps for critical services

#### Data/schema tasks

- [ ] backfill/reseed reliability checks

- [ ] query performance checks for hot founder surfaces

#### Workflow/automation tasks

- [ ] replay or resume utilities for key workflows

- [ ] finalize degraded-mode handling for board, approvals, memory,
and foundry outputs

#### Frontend/product tasks

- [ ] harden loading/partial/error states across founder cockpit

- [ ] improve evidence and trust-state consistency

#### Reliability/ops tasks

- [ ] service runbooks completed for core services

- [ ] alert routing and dashboards linked

- [ ] founder-prod smoke test checklist finalized

#### Demo target

- team can demonstrate not just happy path, but degraded and recovery
paths with confidence.

## 99.5 30/60/90 day review checkpoints

### Day 30 checkpoint

Questions:

- can the repo boot?

- are contracts real?

- are approvals and board objects working?

- can evidence be surfaced?

### Day 60 checkpoint

Questions:

- is state being used meaningfully?

- can opportunities be scored and promoted?

- can the foundry generate something reviewable?

### Day 90 checkpoint

Questions:

- does the founder wake up to something genuinely useful?

- can the system degrade gracefully?

- are runbooks, owners, and CI gates real enough for trust?

## 99.6 Sprint pack acceptance criteria

This appendix is successful when engineering and product can convert it
directly into:

- sprint boards,

- weekly demos,

- owner assignments,

- contract/migration task lists,

- and review ceremonies for the first 90 days.

At that point, the execution layer is concrete enough to move from
planning into disciplined delivery.

---

# 100. Appendix BD: Execution Pack v13 — Actual Repo Bootstrap File
Examples

This appendix turns the repo-tree and kickoff guidance into practical
starter artifacts. These examples are intentionally reference-grade
rather than framework-perfect. Their purpose is to remove ambiguity
during repository bootstrap and give a small team a real starting point.

## 100.1 Bootstrap philosophy

The bootstrap layer should do three things well:

- make the monorepo runnable fast,

- make contract and migration workflows obvious,

- and keep the initial surface area small enough that the
founder-visible spine can ship early.

The examples below should be treated as starter defaults, not immutable
doctrine.

## 100.2 Root `package.json` example

Recommended file: `package.json`

```json

{

"name": "hotel-nexus",

"private": true,

"version": "0.1.0",

"packageManager": "pnpm@9.0.0",

"scripts": {

"dev": "pnpm -r --parallel dev",

"build": "pnpm -r build",

"lint": "pnpm -r lint",

"typecheck": "pnpm -r typecheck",

"test": "pnpm -r test",

"format:check": "pnpm -r format:check",

"contracts:validate": "pnpm --filter contracts validate",

"contracts:breaking-check": "pnpm --filter contracts breaking-check",

"openapi:lint": "pnpm --filter contracts openapi:lint",

"jsonschema:validate": "pnpm --filter contracts jsonschema:validate",

"db:migrate:test-up": "pnpm --filter database migrate:test-up",

"db:seed:test": "pnpm --filter database seed:test",

"db:smoke-queries": "pnpm --filter database smoke-queries",

"test:workflows": "pnpm --filter workflow-service test:workflows",

"test:approval-flows": "pnpm --filter approval-service test:flows",

"test:degraded-modes": "pnpm --filter founder-web test:degraded",

"artifact:manifest": "node scripts/generate-artifact-manifest.mjs",

"bootstrap": "pnpm install && pnpm contracts:validate && pnpm
db:migrate:test-up"

}

}

```

## 100.3 Workspace file example

Recommended file: `pnpm-workspace.yaml`

```yaml

packages:

- "apps/*"

- "services/*"

- "packages/*"

- "workflows/*"

- "contracts"

- "database"

```

## 100.4 TypeScript base config example

Recommended file: `tsconfig.base.json`

```json

{

"compilerOptions": {

"target": "ES2022",

"module": "ESNext",

"moduleResolution": "Bundler",

"strict": true,

"skipLibCheck": true,

"resolveJsonModule": true,

"esModuleInterop": true,

"baseUrl": ".",

"paths": {

"@hotel-nexus/domain-models": ["packages/domain-models/src"],

"@hotel-nexus/api-contracts": ["packages/api-contracts/src"],

"@hotel-nexus/json-schemas": ["packages/json-schemas/src"],

"@hotel-nexus/agent-contracts": ["packages/agent-contracts/src"],

"@hotel-nexus/policy-engine": ["packages/policy-engine/src"]

}

}

}

```

## 100.5 Turbo / task runner config example

If the team uses a task runner such as Turborepo, a minimal root file
might look like:

Recommended file: `turbo.json`

```json

{

"\$schema": "https://turbo.build/schema.json",

"tasks": {

"build": {

"dependsOn": ["^build"],

"outputs": ["dist/**", ".next/**"]

},

"lint": {},

"typecheck": {},

"test": {

"dependsOn": ["^build"]

},

"dev": {

"cache": false,

"persistent": true

}

}

}

```

## 100.6 Example `apps/founder-web/package.json`

```json

{

"name": "@hotel-nexus/founder-web",

"private": true,

"version": "0.1.0",

"scripts": {

"dev": "next dev",

"build": "next build",

"start": "next start",

"lint": "eslint .",

"typecheck": "tsc --noEmit",

"test": "vitest run",

"test:degraded": "vitest run src/__tests__/degraded-mode.test.ts"

},

"dependencies": {

"next": "latest",

"react": "latest",

"react-dom": "latest"

}

}

```

## 100.7 Example `services/api-gateway/package.json`

```json

{

"name": "@hotel-nexus/api-gateway",

"private": true,

"version": "0.1.0",

"scripts": {

"dev": "tsx watch src/index.ts",

"build": "tsup src/index.ts --format esm,cjs --dts",

"lint": "eslint .",

"typecheck": "tsc --noEmit",

"test": "vitest run"

},

"dependencies": {

"fastify": "latest"

}

}

```

## 100.8 Example contracts package manifest

Recommended file: `contracts/package.json`

```json

{

"name": "@hotel-nexus/contracts",

"private": true,

"version": "0.1.0",

"scripts": {

"validate": "pnpm openapi:lint && pnpm jsonschema:validate",

"breaking-check": "node scripts/breaking-check.mjs",

"openapi:lint": "redocly lint openapi/founder-api.yaml",

"jsonschema:validate": "node scripts/validate-schemas.mjs"

}

}

```

## 100.9 Example database package manifest

Recommended file: `database/package.json`

```json

{

"name": "@hotel-nexus/database",

"private": true,

"version": "0.1.0",

"scripts": {

"migrate:test-up": "node scripts/migrate-test-up.mjs",

"seed:test": "node scripts/seed-test.mjs",

"smoke-queries": "node scripts/smoke-queries.mjs"

}

}

```

## 100.10 Example developer bootstrap note

Recommended file: `docs/founder-handover/developer-bootstrap.md`

```md

# Developer Bootstrap

1. Install pnpm and project dependencies

2. Copy `.env.example` to `.env.local`

3. Start local Postgres and queue emulator or connect to dev services

4. Run foundation migrations

5. Run seed fixtures

6. Start api-gateway, workflow-service, approval-service,
memory-service

7. Start founder-web

8. Validate `/boards/today` and `/approvals`

```

## 100.11 Example CODEOWNERS snippet

Recommended file: `.github/CODEOWNERS`

```text

/apps/founder-web/ @frontend-lead @product-lead

/services/approval-service/ @platform-lead @product-lead

/services/workflow-service/ @platform-lead @ops-lead

/services/memory-service/ @data-lead @platform-lead

/contracts/ @platform-lead @frontend-lead

/database/migrations/ @data-lead @platform-lead

/runbooks/ @ops-lead @platform-lead

```

## 100.12 Bootstrap file pack acceptance criteria

This appendix is complete when a builder can:

- initialize the monorepo,

- understand the root scripts,

- create the first service package,

- run contract checks,

- and boot the first founder-facing shell without inventing file
conventions.

---

# 101. Appendix BE: Execution Pack v13 — Environment Config and Secret
Template Guidance

This appendix operationalizes configuration and secret handling. The
objective is to avoid the classic failure mode where environments are
“working” but poorly understood, weakly separated, or dependent on
undocumented secrets.

## 101.1 Configuration philosophy

Configuration should be:

- explicit,

- environment-scoped,

- secret-safe,

- easy to diff,

- and aligned with service ownership.

The system should distinguish between:

- non-secret runtime configuration,

- secret values,

- feature flags,

- budget/policy settings,

- and provider-specific credentials.

## 101.2 Recommended config file layout

```text

infrastructure/

env/

local-dev.env.example

shared-dev.env.example

staging.env.example

founder-prod.env.example

pilot-prod.env.example

secrets/

README.md

providers.template.yaml

policy.template.yaml

budgets.template.yaml

```

## 101.3 `.env.example` starter pattern

Recommended file: `infrastructure/env/local-dev.env.example`

```bash

# Core runtime

NODE_ENV=development

APP_ENV=local-dev

LOG_LEVEL=debug

# Database

DATABASE_URL=postgres://user:password@localhost:5432/hotel_nexus_dev

# Object storage

OBJECT_STORAGE_BUCKET=hotel-nexus-dev

OBJECT_STORAGE_ENDPOINT=http://localhost:9000

# Queue / broker

QUEUE_URL=nats://localhost:4222

# Core services

API_GATEWAY_PORT=3000

WORKFLOW_SERVICE_PORT=3101

APPROVAL_SERVICE_PORT=3102

MEMORY_SERVICE_PORT=3103

STATE_SERVICE_PORT=3104

# Feature flags

FEATURE_NIGHT_SHIFT=true

FEATURE_CAPITAL_BRIEF=false

FEATURE_ESTATE_INTERVENTIONS=false

# Policies

DEFAULT_APPROVAL_PROFILE=approval_founder_default

DEFAULT_BUDGET_PROFILE=budget_dev_default

```

## 101.4 Provider secret template example

Recommended file: `infrastructure/secrets/providers.template.yaml`

```yaml

providers:

notion:

enabled: true

secret_ref: secret/notion/api_key

scopes:

- read_workspace

youtube:

enabled: true

secret_ref: secret/youtube/api_key

scopes:

- analytics_read

heygen:

enabled: true

secret_ref: secret/heygen/api_key

scopes:

- render_write

xero:

enabled: false

secret_ref: secret/xero/api_key

scopes:

- ledger_read

home_assistant:

enabled: false

secret_ref: secret/home_assistant/token

scopes:

- estate_read

- estate_write_low_risk

```

## 101.5 Policy template example

Recommended file: `infrastructure/secrets/policy.template.yaml`

```yaml

policies:

founder_prod:

approval_profile: approval_founder_default

night_shift_enabled: true

public_publish_requires_explicit_approval: true

capital_execution_allowed: false

auto_execute_low_risk_estate_interventions: false

shared_dev:

approval_profile: approval_dev_default

night_shift_enabled: true

public_publish_requires_explicit_approval: true

capital_execution_allowed: false

auto_execute_low_risk_estate_interventions: false

```

## 101.6 Budget template example

Recommended file: `infrastructure/secrets/budgets.template.yaml`

```yaml

budgets:

founder_prod:

nightly_total_limit_usd: 50

media_render_limit_usd: 25

domain_purchase_limit_usd: 20

model_spend_limit_usd: 50

shared_dev:

nightly_total_limit_usd: 10

media_render_limit_usd: 5

domain_purchase_limit_usd: 0

model_spend_limit_usd: 10

```

## 101.7 Secret handling rules

- never commit real secret values

- always prefer secret references over inline values in shared
manifests

- rotate high-risk secrets on a documented cadence

- separate provider secrets by environment

- separate founder-prod and pilot-prod scopes strictly

- log secret usage metadata, not raw secret content

## 101.8 Environment config review checklist

Before promoting config to a shared environment, confirm:

- [ ] environment variables are documented

- [ ] feature flags have intended defaults

- [ ] provider scopes are least-privilege

- [ ] budget thresholds are deliberate

- [ ] policy toggles are reviewed

- [ ] no real secrets exist in tracked example files

## 101.9 Config pack acceptance criteria

This appendix is complete when the team has:

- environment example files,

- provider template files,

- policy templates,

- budget templates,

- and a clear separation between secret references and runtime config.

---

# 102. Appendix BF: Execution Pack v13 — Sprint Board and Review
Ceremony Templates

This appendix turns sprint execution into repeatable operating rituals.
The goal is not only to plan work, but to ensure that each sprint
increases founder-visible leverage and system trust.

## 102.1 Sprint board philosophy

A Hotel Nexus sprint board should reflect both product delivery and
systems integrity. That means it must represent:

- founder-facing outcomes,

- schema/contract work,

- workflow work,

- reliability work,

- and operational readiness.

## 102.2 Recommended sprint board lanes

Recommended default board:

- `discovery`

- `ready`

- `in_progress`

- `blocked`

- `in_review`

- `staging_validated`

- `founder_demo_ready`

- `done`

Optional support lanes:

- `needs_contract_review`

- `needs_migration_review`

- `needs_runbook_update`

## 102.3 Sprint board card template

```md

# Card: \<title>

## Type

- [ ] founder feature

- [ ] contract

- [ ] migration

- [ ] workflow

- [ ] infra/ops

- [ ] runbook

## Why this exists

Founder-visible gain or system-trust gain.

## Dependencies

- service(s)

- schema(s)

- contract(s)

- UI component(s)

- migration(s)

## Acceptance

- [ ] implemented

- [ ] tested

- [ ] degraded mode handled

- [ ] observability added

- [ ] docs/runbook updated if needed

```

## 102.4 Weekly sprint planning ceremony template

### Inputs

- milestone target

- previous sprint review notes

- incident or reliability carryover

- founder feedback

- contract or migration backlog

### Agenda

1. review current milestone goal

2. review founder-visible priorities

3. review blocked work and dependencies

4. select sprint items by work lane

5. confirm demo target

6. confirm owners and reviewers

7. confirm runbook/contract/migration obligations

### Outputs

- committed sprint board

- named demo scenario

- named release risk items

- named contract/migration review tasks

## 102.5 Weekly sprint review template

### Questions to answer

- what founder-visible behavior improved?

- what system contract or schema changed?

- what reliability/trust improved?

- what degraded-mode or failure path was tested?

- what is still risky or unclear?

### Review artifacts

- screen demo

- workflow trace example

- approval or board payload example

- contract diff summary

- runbook delta if applicable

## 102.6 Founder demo ceremony template

This is the most important recurring ritual in the early phase.

### Goal

Show a meaningful increase in founder leverage, not just backend
progress.

### Demo structure

1. start at Home / Morning Command Board

2. show top action and why it exists

3. show evidence path

4. show one approval path or one foundry path

5. show one degraded/partial case handled well

6. show what is next

### Success criteria

- founder understands value quickly

- founder trust increases

- founder can name what became easier

## 102.7 Release readiness review template

Before any founder-prod release, review:

- contracts changed

- migrations changed

- runbooks updated

- feature flags involved

- degraded modes verified

- smoke tests defined

- rollback plan ready

Recommended output:

- release note

- go/no-go decision

- named owner on release window

## 102.8 Retrospective template

### Prompt set

- what increased founder trust?

- what created unnecessary friction?

- what was under-specified?

- what contract or schema pain emerged?

- what reliability gap should become backlog next sprint?

### Required outputs

- 1 product improvement

- 1 contract/process improvement

- 1 reliability improvement

- 1 thing to stop doing

## 102.9 Sprint pack file recommendations

Recommended files:

```text

docs/delivery/

sprint-planning-template.md

sprint-review-template.md

founder-demo-template.md

release-readiness-template.md

retrospective-template.md

```

## 102.10 Ceremony acceptance criteria

This appendix is complete when the team can run:

- one sprint planning session,

- one sprint review,

- one founder demo,

- one release readiness review,

- and one retro

without inventing the structure each time.

At that point, execution discipline becomes part of the estate itself.

---

# 103. Appendix BG: Execution Pack v14 — Finalized Contract Artifacts

This appendix upgrades the earlier contract registry and schema work
from “shape examples” into a practical starter artifact set. These are
still reference artifacts inside the living document, but they are
intentionally close to what should be checked into the `contracts/`
directory as real files.

## 103.1 Artifact philosophy

A finalized starter contract artifact should be:

- machine-readable,

- versioned,

- owner-declared,

- example-backed,

- CI-validatable,

- and traceable to at least one service and one founder-visible
surface.

For the first production slice, the most important artifacts are:

- `MorningBoard`

- `ApprovalRequest`

- `ApprovalPacket`

- `StateSnapshot`

- `OpportunityRecord`

- `AssetRecord`

- `GenerateMorningBoardCommand`

- `RequestApprovalCommand`

- `board.generated`

- `approval.requested`

## 103.2 Recommended contract directory pack

```text

contracts/

openapi/

founder-api.yaml

json-schema/

records/

morning-board.json

approval-request.json

approval-packet.json

state-snapshot.json

opportunity-record.json

asset-record.json

commands/

generate-morning-board.json

request-approval.json

events/

board-generated.json

approval-requested.json

examples/

founder-board/

board-healthy.example.json

board-partial.example.json

approvals/

approval-publish-video.example.json

records/

state-snapshot.example.json

opportunity-record.example.json

asset-record.example.json

manifests/

morning-board.manifest.yaml

approval-request.manifest.yaml

```

## 103.3 Finalized artifact: `morning-board.json`

Recommended file: `contracts/json-schema/records/morning-board.json`

```json

{

"\$id": "https://schemas.hotelnexus.io/records/morning-board.json",

"\$schema": "https://json-schema.org/draft/2020-12/schema",

"title": "MorningBoard",

"type": "object",

"required": [

"board_id",

"generated_at",

"state_summary",

"body_section",

"money_section",

"moves_section",

"momentum_section",

"approval_packets",

"narrative_summary"

],

"properties": {

"board_id": {"type": "string"},

"generated_at": {"type": "string", "format": "date-time"},

"state_summary": {

"type": "object",

"required": ["readiness_band", "headline"],

"properties": {

"readiness_band": {

"type": "string",

"enum": ["red", "amber", "green", "blue"]

},

"headline": {"type": "string"}

}

},

"body_section": {"type": "object", "additionalProperties": true},

"money_section": {"type": "object", "additionalProperties": true},

"moves_section": {

"type": "array",

"items": {

"type": "object",

"required": ["rank", "action_type", "title", "reason"],

"properties": {

"rank": {"type": "integer", "minimum": 1},

"action_type": {"type": "string"},

"title": {"type": "string"},

"reason": {"type": "string"},

"linked_approval_request_id": {"type": ["string", "null"]},

"linked_opportunity_id": {"type": ["string", "null"]},

"linked_workflow_run_id": {"type": ["string", "null"]}

}

}

},

"momentum_section": {"type": "object", "additionalProperties": true},

"critical_alerts": {

"type": "array",

"items": {"type": "string"}

},

"approval_packets": {

"type": "array",

"items": {"type": "string"}

},

"recommended_order": {

"type": "array",

"items": {"type": "string"}

},

"narrative_summary": {"type": "string"},

"partial": {"type": "boolean"}

}

}

```

## 103.4 Finalized artifact: `approval-request.json`

Recommended file:
`contracts/json-schema/records/approval-request.json`

```json

{

"\$id": "https://schemas.hotelnexus.io/records/approval-request.json",

"\$schema": "https://json-schema.org/draft/2020-12/schema",

"title": "ApprovalRequest",

"type": "object",

"required": [

"approval_request_id",

"requested_action_type",

"requested_by_agent",

"risk_tier",

"autonomy_class",

"decision_status"

],

"properties": {

"approval_request_id": {"type": "string"},

"requested_action_type": {"type": "string"},

"requested_by_agent": {"type": "string"},

"risk_tier": {"type": "string", "enum": ["tier_1", "tier_2", "tier_3",
"tier_4"]},

"autonomy_class": {"type": "string", "enum": ["class_0", "class_1",
"class_2", "class_3", "class_4", "class_5"]},

"decision_status": {"type": "string", "enum": ["pending", "approved",
"rejected", "snoozed", "expired"]},

"spend_ceiling": {"type": ["number", "null"]},

"currency": {"type": ["string", "null"]},

"reversible": {"type": "boolean"},

"expires_at": {"type": ["string", "null"], "format": "date-time"},

"recommended_decision": {"type": ["string", "null"], "enum":
["approve", "reject", "snooze", null]},

"evidence_refs": {

"type": "array",

"items": {"type": "string"}

}

}

}

```

## 103.5 Finalized artifact: `approval-packet.json`

Recommended file: `contracts/json-schema/records/approval-packet.json`

```json

{

"\$id": "https://schemas.hotelnexus.io/records/approval-packet.json",

"\$schema": "https://json-schema.org/draft/2020-12/schema",

"title": "ApprovalPacket",

"type": "object",

"required": [

"approval_request_id",

"headline",

"requested_action_type",

"risk_tier",

"autonomy_class",

"decision_options"

],

"properties": {

"approval_request_id": {"type": "string"},

"headline": {"type": "string"},

"summary": {"type": "string"},

"requested_action_type": {"type": "string"},

"risk_tier": {"type": "string"},

"autonomy_class": {"type": "string"},

"requested_by_agent": {"type": "string"},

"decision_options": {

"type": "array",

"items": {

"type": "object",

"required": ["value", "label"],

"properties": {

"value": {"type": "string"},

"label": {"type": "string"}

}

}

},

"evidence_refs": {

"type": "array",

"items": {"type": "string"}

},

"reversible": {"type": "boolean"},

"expires_at": {"type": ["string", "null"], "format": "date-time"}

}

}

```

## 103.6 Finalized artifact: `generate-morning-board.json`

Recommended file:
`contracts/json-schema/commands/generate-morning-board.json`

```json

{

"\$id":
"https://schemas.hotelnexus.io/commands/generate-morning-board.json",

"\$schema": "https://json-schema.org/draft/2020-12/schema",

"title": "GenerateMorningBoardCommand",

"type": "object",

"required": ["command_id", "command_name", "issued_by", "payload"],

"properties": {

"command_id": {"type": "string"},

"command_name": {"const": "GenerateMorningBoardCommand"},

"issued_by": {"type": "string"},

"payload": {

"type": "object",

"required": ["person_id", "estate_id", "board_date"],

"properties": {

"person_id": {"type": "string"},

"estate_id": {"type": "string"},

"board_date": {"type": "string", "format": "date"},

"include_sections": {

"type": "array",

"items": {"type": "string"}

}

}

}

}

}

```

## 103.7 Finalized artifact: `approval-requested.json`

Recommended file:
`contracts/json-schema/events/approval-requested.json`

```json

{

"\$id": "https://schemas.hotelnexus.io/events/approval-requested.json",

"\$schema": "https://json-schema.org/draft/2020-12/schema",

"title": "approval.requested",

"type": "object",

"required": ["event_id", "event_name", "occurred_at", "payload"],

"properties": {

"event_id": {"type": "string"},

"event_name": {"const": "approval.requested"},

"occurred_at": {"type": "string", "format": "date-time"},

"payload": {

"type": "object",

"required": ["approval_request_id", "requested_action_type",
"risk_tier", "autonomy_class"],

"properties": {

"approval_request_id": {"type": "string"},

"requested_action_type": {"type": "string"},

"risk_tier": {"type": "string"},

"autonomy_class": {"type": "string"},

"recommended_decision": {"type": ["string", "null"]}

}

}

}

}

```

## 103.8 Contract manifest example

Recommended file: `contracts/manifests/morning-board.manifest.yaml`

```yaml

contract:

name: morning-board

version: 1.0.0

owner: founder-product

domain: founder-surface

related_services:

- api-gateway

- workflow-service

- state-service

- approval-service

related_surfaces:

- Home / Morning Command Board

schema_path: contracts/json-schema/records/morning-board.json

examples:

- contracts/examples/founder-board/board-healthy.example.json

- contracts/examples/founder-board/board-partial.example.json

deprecation_status: active

```

## 103.9 Finalized contract artifact acceptance criteria

This appendix is complete when engineering can check in:

- real schema files,

- real example files,

- real manifest files,

- and CI can validate them as a coherent starter contract pack.

---

# 104. Appendix BH: Execution Pack v14 — Per-Service Environment
Manifest Examples

This appendix makes environment configuration more concrete by giving
per-service manifest examples. These are intentionally generic enough to
adapt across Kubernetes, Nomad, ECS, or other deployment targets, while
still encoding the key runtime expectations.

## 104.1 Manifest philosophy

A service environment manifest should answer:

- what runtime variables this service requires,

- what secret references it needs,

- what ports and health checks it exposes,

- what dependent services it expects,

- and what feature or policy toggles it respects.

## 104.2 Example manifest: `api-gateway`

Recommended file:
`infrastructure/env/services/api-gateway.founder-prod.yaml`

```yaml

service:

name: api-gateway

environment: founder-prod

image: hotel-nexus/api-gateway:latest

port: 3000

healthcheck:

path: /health

interval_seconds: 15

env:

NODE_ENV: production

APP_ENV: founder-prod

LOG_LEVEL: info

FOUNDER_API_BASE_PATH: /api

IDENTITY_SERVICE_URL: http://identity-service:3100

APPROVAL_SERVICE_URL: http://approval-service:3102

MEMORY_SERVICE_URL: http://memory-service:3103

STATE_SERVICE_URL: http://state-service:3104

WORKFLOW_SERVICE_URL: http://workflow-service:3105

secret_refs:

- secret/founder-prod/session-signing-key

depends_on:

- identity-service

- approval-service

- memory-service

- state-service

- workflow-service

```

## 104.3 Example manifest: `workflow-service`

Recommended file:
`infrastructure/env/services/workflow-service.founder-prod.yaml`

```yaml

service:

name: workflow-service

environment: founder-prod

image: hotel-nexus/workflow-service:latest

port: 3105

healthcheck:

path: /health

interval_seconds: 15

env:

NODE_ENV: production

APP_ENV: founder-prod

LOG_LEVEL: info

QUEUE_URL: nats://message-broker:4222

DATABASE_URL_REF: secret/founder-prod/database-url

FEATURE_NIGHT_SHIFT: "true"

NIGHT_SHIFT_ENABLED: "true"

secret_refs:

- secret/founder-prod/database-url

depends_on:

- message-broker

- postgres

```

## 104.4 Example manifest: `memory-service`

Recommended file:
`infrastructure/env/services/memory-service.shared-dev.yaml`

```yaml

service:

name: memory-service

environment: shared-dev

image: hotel-nexus/memory-service:latest

port: 3103

healthcheck:

path: /health

interval_seconds: 20

env:

NODE_ENV: development

APP_ENV: shared-dev

LOG_LEVEL: debug

DATABASE_URL_REF: secret/shared-dev/database-url

OBJECT_STORAGE_BUCKET: hotel-nexus-shared-dev

VECTOR_INDEX_MODE: postgres_vector

MEMORY_DEFAULT_SCOPE: estate_internal

secret_refs:

- secret/shared-dev/database-url

depends_on:

- postgres

- object-storage

```

## 104.5 Example manifest: `approval-service`

Recommended file:
`infrastructure/env/services/approval-service.founder-prod.yaml`

```yaml

service:

name: approval-service

environment: founder-prod

image: hotel-nexus/approval-service:latest

port: 3102

healthcheck:

path: /health

interval_seconds: 15

env:

NODE_ENV: production

APP_ENV: founder-prod

LOG_LEVEL: info

DATABASE_URL_REF: secret/founder-prod/database-url

DEFAULT_APPROVAL_PROFILE: approval_founder_default

REQUIRE_EXPLICIT_PUBLISH_APPROVAL: "true"

REQUIRE_CAPITAL_EXECUTION_APPROVAL: "true"

secret_refs:

- secret/founder-prod/database-url

depends_on:

- postgres

```

## 104.6 Example manifest: `founder-web`

Recommended file:
`infrastructure/env/services/founder-web.founder-prod.yaml`

```yaml

service:

name: founder-web

environment: founder-prod

image: hotel-nexus/founder-web:latest

port: 3001

healthcheck:

path: /

interval_seconds: 20

env:

NODE_ENV: production

APP_ENV: founder-prod

NEXT_PUBLIC_API_BASE_URL: https://app.hotelnexus.ai/api

NEXT_PUBLIC_APP_ENV: founder-prod

NEXT_PUBLIC_FEATURE_CAPITAL_BRIEF: "true"

NEXT_PUBLIC_FEATURE_ESTATE: "true"

secret_refs: []

depends_on:

- api-gateway

```

## 104.7 Example manifest: `capital-service`

Recommended file:
`infrastructure/env/services/capital-service.staging.yaml`

```yaml

service:

name: capital-service

environment: staging

image: hotel-nexus/capital-service:latest

port: 3110

healthcheck:

path: /health

interval_seconds: 20

env:

NODE_ENV: production

APP_ENV: staging

LOG_LEVEL: info

DATABASE_URL_REF: secret/staging/database-url

FEATURE_CAPITAL_BRIEF: "true"

WATCHLIST_DEFAULT_ID: watchlist_core

SEC_EDGAR_MODE: live_read_only

secret_refs:

- secret/staging/database-url

depends_on:

- postgres

```

## 104.8 Manifest governance rules

- one manifest per service per environment or one templated base plus
environment overlays

- no inline real secrets

- feature flags and policy toggles must be explicit

- dependency assumptions should be visible

- healthcheck path and interval must be declared

## 104.9 Per-service manifest acceptance criteria

This appendix is complete when the team can create:

- service-level environment manifests,

- environment overlays or variants,

- and deployment configs that match the service ownership and runtime
model already defined elsewhere.

---

# 105. Appendix BI: Execution Pack v14 — Release Checklist Packs by
Environment

This appendix turns release readiness into concrete checklist packs for
each major environment. The goal is to reduce ambiguity and prevent “it
worked in staging” optimism from leaking into founder-facing risk.

## 105.1 Release philosophy

Every release should answer three questions:

1. What changed?

2. What could break?

3. How will we know quickly if founder trust is affected?

## 105.2 Global release checklist

Applies to all release targets:

- [ ] release note drafted

- [ ] changed contracts reviewed

- [ ] changed migrations reviewed

- [ ] changed runbooks updated if necessary

- [ ] feature flags declared

- [ ] degraded-mode behavior verified

- [ ] smoke tests declared

- [ ] rollback owner named

## 105.3 `shared-dev` release checklist

### Purpose

Validate integration of new service, schema, and UI changes in a
collaborative environment.

### Checklist

- [ ] CI passed on target commit

- [ ] shared-dev manifests updated if needed

- [ ] migrations applied cleanly

- [ ] seed fixtures still valid

- [ ] core services healthy after deploy

- [ ] board endpoint returns valid object

- [ ] approval endpoint returns valid object

- [ ] no breaking contract diffs unresolved

## 105.4 `staging` release checklist

### Purpose

Validate release candidate in a production-like environment.

### Checklist

- [ ] staging contract bundle pinned

- [ ] staging migrations applied from release bundle

- [ ] board flow validated end-to-end

- [ ] approval flow validated end-to-end

- [ ] one degraded-mode scenario exercised

- [ ] observability dashboards updated

- [ ] critical alerts verified

- [ ] rollback notes attached

### Required smoke tests

- `/boards/today`

- `/approvals`

- one board generation workflow

- one approval resolution flow

- one memory search flow

## 105.5 `founder-prod` release checklist

### Purpose

Release safely to the live founder environment.

### Checklist

- [ ] founder-prod window approved

- [ ] migrations reviewed and approved

- [ ] feature flags reviewed

- [ ] provider secret refs verified

- [ ] budget and approval profiles confirmed

- [ ] board and approval smoke tests prepared

- [ ] rollback owner and rollback path confirmed

- [ ] service owners available or on-call

### Post-deploy smoke tests

- [ ] founder can access Home

- [ ] latest board loads

- [ ] approval list loads

- [ ] one evidence path works

- [ ] no critical error spike visible

### Post-deploy observation window

- [ ] 15-minute health review

- [ ] board generation trace verified

- [ ] queue lag checked

- [ ] founder-visible alerts checked

## 105.6 `pilot-prod` release checklist

### Purpose

Release to a pilot/white-label environment with stronger tenancy
caution.

### Checklist

- [ ] tenant isolation verified

- [ ] pilot-specific secrets verified

- [ ] founder-prod data boundaries confirmed

- [ ] contract bundle version pinned

- [ ] pilot runbooks available

- [ ] owner routing updated for pilot support

## 105.7 Release sign-off template

Recommended release sign-off note:

```md

# Release Sign-off

Environment: founder-prod

Release candidate: rc-2026-06-14-01

Owner: platform-lead

## Included changes

- services changed:

- contracts changed:

- migrations changed:

- feature flags changed:

## Risks

- top risk:

- degraded-mode fallback:

## Smoke tests

- [ ] board load

- [ ] approval load

- [ ] evidence drawer

- [ ] workflow trace

## Decision

- [ ] go

- [ ] no-go

```

## 105.8 Release checklist pack file recommendations

```text

runbooks/releases/

shared-dev-release-checklist.md

staging-release-checklist.md

founder-prod-release-checklist.md

pilot-prod-release-checklist.md

release-signoff-template.md

```

## 105.9 Release checklist acceptance criteria

This appendix is complete when the team can release to any environment
using a checklist that is:

- explicit,

- environment-specific,

- owner-routed,

- smoke-test backed,

- and rollback-aware.

At that point, releases become a managed operational ritual instead of a
hopeful push.

---

# 106. Appendix BJ: Execution Pack v15 — Ready-to-Copy Contract and
Example Files

This appendix turns the earlier contract artifacts into a more directly
copyable starter set. The intention is to let the team take these
blocks, place them into the repo, and begin validating services, UI
surfaces, and workflows with minimal translation effort.

## 106.1 Practical artifact bundle layout

Recommended file layout:

```text

contracts/

json-schema/

records/

morning-board.json

approval-request.json

approval-packet.json

state-snapshot.json

opportunity-record.json

asset-record.json

commands/

generate-morning-board.json

request-approval.json

events/

board-generated.json

approval-requested.json

examples/

founder-board/

board-healthy.example.json

board-partial.example.json

approvals/

approval-request.example.json

approval-packet.example.json

state/

state-snapshot.example.json

opportunities/

opportunity-record.example.json

assets/

asset-record.example.json

commands/

generate-morning-board.example.json

request-approval.example.json

events/

board-generated.example.json

approval-requested.example.json

```

## 106.2 Ready-to-copy file:
`contracts/json-schema/records/state-snapshot.json`

```json

{

"\$id": "https://schemas.hotelnexus.io/records/state-snapshot.json",

"\$schema": "https://json-schema.org/draft/2020-12/schema",

"title": "StateSnapshot",

"type": "object",

"required": [

"snapshot_id",

"person_id",

"estate_id",

"timestamp",

"readiness_band"

],

"properties": {

"snapshot_id": {"type": "string"},

"person_id": {"type": "string"},

"estate_id": {"type": "string"},

"timestamp": {"type": "string", "format": "date-time"},

"readiness_band": {

"type": "string",

"enum": ["red", "amber", "green", "blue"]

},

"readiness_score": {"type": "number", "minimum": 0, "maximum": 1},

"recovery_score": {"type": "number", "minimum": 0, "maximum": 1},

"friction_score": {"type": "number", "minimum": 0, "maximum": 1},

"overload_risk_score": {"type": "number", "minimum": 0, "maximum": 1},

"confidence": {"type": "number", "minimum": 0, "maximum": 1},

"environment_context_id": {"type": ["string", "null"]},

"source_signals": {

"type": "array",

"items": {"type": "string"}

},

"explanation_summary": {"type": ["string", "null"]}

}

}

```

## 106.3 Ready-to-copy file:
`contracts/json-schema/records/opportunity-record.json`

```json

{

"\$id": "https://schemas.hotelnexus.io/records/opportunity-record.json",

"\$schema": "https://json-schema.org/draft/2020-12/schema",

"title": "OpportunityRecord",

"type": "object",

"required": [

"opportunity_id",

"opportunity_domain",

"title",

"status",

"owner_agent"

],

"properties": {

"opportunity_id": {"type": "string"},

"opportunity_domain": {

"type": "string",

"enum": ["content", "app", "market", "product", "estate", "capital"]

},

"title": {"type": "string"},

"hypothesis": {"type": ["string", "null"]},

"source_signals": {

"type": "array",

"items": {"type": "string"}

},

"demand_score": {"type": ["number", "null"], "minimum": 0, "maximum":
1},

"supply_gap_score": {"type": ["number", "null"], "minimum": 0,
"maximum": 1},

"monetization_score": {"type": ["number", "null"], "minimum": 0,
"maximum": 1},

"build_complexity_score": {"type": ["number", "null"], "minimum": 0,
"maximum": 1},

"confidence_score": {"type": ["number", "null"], "minimum": 0,
"maximum": 1},

"recommended_asset_types": {

"type": "array",

"items": {"type": "string"}

},

"status": {"type": "string"},

"owner_agent": {"type": "string"}

}

}

```

## 106.4 Ready-to-copy file:
`contracts/json-schema/records/asset-record.json`

```json

{

"\$id": "https://schemas.hotelnexus.io/records/asset-record.json",

"\$schema": "https://json-schema.org/draft/2020-12/schema",

"title": "AssetRecord",

"type": "object",

"required": ["asset_id", "asset_type", "status"],

"properties": {

"asset_id": {"type": "string"},

"asset_type": {"type": "string"},

"source_opportunity_id": {"type": ["string", "null"]},

"status": {"type": "string"},

"preview_url": {"type": ["string", "null"], "format": "uri"},

"production_metadata": {"type": "object", "additionalProperties": true},

"variant_group_id": {"type": ["string", "null"]},

"approval_request_id": {"type": ["string", "null"]},

"performance_metrics_ref": {"type": ["string", "null"]}

}

}

```

## 106.5 Ready-to-copy file:
`contracts/json-schema/commands/request-approval.json`

```json

{

"\$id": "https://schemas.hotelnexus.io/commands/request-approval.json",

"\$schema": "https://json-schema.org/draft/2020-12/schema",

"title": "RequestApprovalCommand",

"type": "object",

"required": ["command_id", "command_name", "issued_by", "payload"],

"properties": {

"command_id": {"type": "string"},

"command_name": {"const": "RequestApprovalCommand"},

"issued_by": {"type": "string"},

"target_service": {"type": "string"},

"correlation_id": {"type": ["string", "null"]},

"payload": {

"type": "object",

"required": [

"requested_action_type",

"requested_by_agent",

"risk_tier",

"autonomy_class",

"recommended_decision"

],

"properties": {

"requested_action_type": {"type": "string"},

"requested_by_agent": {"type": "string"},

"risk_tier": {"type": "string"},

"autonomy_class": {"type": "string"},

"evidence_refs": {

"type": "array",

"items": {"type": "string"}

},

"recommended_decision": {

"type": "string",

"enum": ["approve", "reject", "snooze"]

}

}

}

}

}

```

## 106.6 Ready-to-copy file:
`contracts/examples/state/state-snapshot.example.json`

```json

{

"snapshot_id": "state_2026_06_07_0800",

"person_id": "person_001",

"estate_id": "estate_001",

"timestamp": "2026-06-07T08:00:00Z",

"readiness_band": "amber",

"readiness_score": 0.62,

"recovery_score": 0.47,

"friction_score": 0.58,

"overload_risk_score": 0.33,

"confidence": 0.79,

"environment_context_id": "env_2026_06_07_0800",

"source_signals": [

"voice_signal_2026_06_07_01",

"calendar_signal_2026_06_07_01",

"environment_signal_2026_06_07_01"

],

"explanation_summary": "Moderate readiness with elevated task-initiation
friction; best suited to guided work blocks."

}

```

## 106.7 Ready-to-copy file:
`contracts/examples/approvals/approval-request.example.json`

```json

{

"approval_request_id": "approval_2026_06_07_001",

"requested_action_type": "publish_video",

"requested_by_agent": "ApprovalGovernor",

"risk_tier": "tier_3",

"autonomy_class": "class_4",

"decision_status": "pending",

"spend_ceiling": 25,

"currency": "USD",

"reversible": false,

"expires_at": "2026-06-08T08:00:00Z",

"recommended_decision": "approve",

"evidence_refs": [

"asset_video_packet_101",

"opp_content_101",

"workflow_night_content_101"

]

}

```

## 106.8 Ready-to-copy file:
`contracts/examples/events/board-generated.example.json`

```json

{

"event_id": "evt_board_generated_001",

"event_name": "board.generated",

"schema_version": "1.0.0",

"occurred_at": "2026-06-07T07:45:00Z",

"producer": "workflow-service",

"correlation_id": "workflow_board_2026_06_07",

"causation_id": "cmd_board_2026_06_07",

"tenant_ref": "estate_001",

"payload": {

"board_id": "board_2026_06_07",

"generated_at": "2026-06-07T07:45:00Z",

"approval_count": 1,

"critical_alert_count": 0,

"state_snapshot_id": "state_2026_06_07_0800"

}

}

```

## 106.9 Ready-to-copy file: `contracts/openapi/founder-api.yaml`
starter

```yaml

openapi: 3.1.0

info:

title: Hotel Nexus Founder API

version: 1.0.0

paths:

/boards/today:

get:

operationId: getTodayBoard

summary: Get today's founder board

responses:

'200':

description: Board returned successfully

/approvals:

get:

operationId: listApprovals

summary: List approval packets

responses:

'200':

description: Approvals returned successfully

/approvals/{approval_request_id}/decision:

post:

operationId: decideApproval

summary: Resolve approval packet

parameters:

- in: path

name: approval_request_id

required: true

schema:

type: string

responses:

'200':

description: Decision recorded

```

## 106.10 Artifact pack acceptance criteria

This appendix is successful when the team can copy these artifacts into
the repo and immediately:

- validate them in CI,

- use them for seeded demos,

- generate mock clients or validators,

- and link them to the first founder-visible vertical slice.

---

# 107. Appendix BK: Execution Pack v15 — Expanded Service Manifest
Bundles for Core Services

This appendix expands the earlier per-service environment manifest
examples into a more complete core-service bundle. The intent is to let
the team bootstrap environment manifests for the critical runtime
without improvising structure per service.

## 107.1 Manifest bundle philosophy

Manifest bundles should be:

- environment-specific,

- service-specific,

- owner-aware,

- secret-safe,

- and explicit about dependencies and health checks.

The examples below should be adapted to the chosen runtime platform, but
their structure should remain recognizable.

## 107.2 Manifest bundle directory recommendation

```text

infrastructure/env/services/

api-gateway.local-dev.yaml

api-gateway.founder-prod.yaml

approval-service.local-dev.yaml

approval-service.founder-prod.yaml

workflow-service.local-dev.yaml

workflow-service.founder-prod.yaml

memory-service.local-dev.yaml

memory-service.shared-dev.yaml

state-service.local-dev.yaml

state-service.founder-prod.yaml

opportunity-service.shared-dev.yaml

asset-foundry-service.shared-dev.yaml

notification-service.founder-prod.yaml

observability-service.shared-dev.yaml

```

## 107.3 Example manifest: `state-service.local-dev.yaml`

```yaml

service:

name: state-service

environment: local-dev

image: hotel-nexus/state-service:dev

port: 3104

healthcheck:

path: /health

interval_seconds: 20

env:

NODE_ENV: development

APP_ENV: local-dev

LOG_LEVEL: debug

DATABASE_URL_REF: secret/local-dev/database-url

FEATURE_STATE_INFERENCE: "true"

FEATURE_LOW_RISK_ESTATE_INTERVENTIONS: "false"

secret_refs:

- secret/local-dev/database-url

depends_on:

- postgres

```

## 107.4 Example manifest: `opportunity-service.shared-dev.yaml`

```yaml

service:

name: opportunity-service

environment: shared-dev

image: hotel-nexus/opportunity-service:latest

port: 3107

healthcheck:

path: /health

interval_seconds: 20

env:

NODE_ENV: development

APP_ENV: shared-dev

LOG_LEVEL: info

DATABASE_URL_REF: secret/shared-dev/database-url

FEATURE_OPPORTUNITY_SCORING: "true"

FEATURE_AUTO_PROMOTION: "false"

YOUTUBE_ANALYTICS_MODE: sandbox_or_mock

GOOGLE_TRENDS_MODE: enabled

secret_refs:

- secret/shared-dev/database-url

depends_on:

- postgres

- message-broker

```

## 107.5 Example manifest: `asset-foundry-service.shared-dev.yaml`

```yaml

service:

name: asset-foundry-service

environment: shared-dev

image: hotel-nexus/asset-foundry-service:latest

port: 3108

healthcheck:

path: /health

interval_seconds: 20

env:

NODE_ENV: development

APP_ENV: shared-dev

LOG_LEVEL: info

DATABASE_URL_REF: secret/shared-dev/database-url

OBJECT_STORAGE_BUCKET: hotel-nexus-shared-dev

FEATURE_HEYGEN_RENDER: "true"

FEATURE_APP_FOUNDRY: "true"

DEFAULT_RENDER_BUDGET_USD: "5"

secret_refs:

- secret/shared-dev/database-url

- secret/shared-dev/heygen-api-key

depends_on:

- postgres

- object-storage

- message-broker

```

## 107.6 Example manifest: `notification-service.founder-prod.yaml`

```yaml

service:

name: notification-service

environment: founder-prod

image: hotel-nexus/notification-service:latest

port: 3112

healthcheck:

path: /health

interval_seconds: 20

env:

NODE_ENV: production

APP_ENV: founder-prod

LOG_LEVEL: info

FEATURE_APPROVAL_NOTIFICATIONS: "true"

FEATURE_BOARD_DELIVERY: "true"

NOTIFICATION_PRIORITY_MODE: founder_first

secret_refs:

- secret/founder-prod/notification-provider-token

depends_on:

- message-broker

```

## 107.7 Example manifest: `observability-service.shared-dev.yaml`

```yaml

service:

name: observability-service

environment: shared-dev

image: hotel-nexus/observability-service:latest

port: 3113

healthcheck:

path: /health

interval_seconds: 30

env:

NODE_ENV: development

APP_ENV: shared-dev

LOG_LEVEL: info

OTEL_EXPORT_MODE: enabled

LANGFUSE_ENABLED: "true"

TRACE_SAMPLING_MODE: balanced

secret_refs:

- secret/shared-dev/langfuse-key

depends_on:

- message-broker

```

## 107.8 Example manifest: `memory-service.founder-prod.yaml`

```yaml

service:

name: memory-service

environment: founder-prod

image: hotel-nexus/memory-service:latest

port: 3103

healthcheck:

path: /health

interval_seconds: 15

env:

NODE_ENV: production

APP_ENV: founder-prod

LOG_LEVEL: info

DATABASE_URL_REF: secret/founder-prod/database-url

OBJECT_STORAGE_BUCKET: hotel-nexus-founder-prod

VECTOR_INDEX_MODE: postgres_vector

MEMORY_DEFAULT_SCOPE: estate_internal

SOURCE_GROUNDED_MODE_DEFAULT: "true"

secret_refs:

- secret/founder-prod/database-url

depends_on:

- postgres

- object-storage

```

## 107.9 Example manifest: `approval-service.local-dev.yaml`

```yaml

service:

name: approval-service

environment: local-dev

image: hotel-nexus/approval-service:dev

port: 3102

healthcheck:

path: /health

interval_seconds: 20

env:

NODE_ENV: development

APP_ENV: local-dev

LOG_LEVEL: debug

DATABASE_URL_REF: secret/local-dev/database-url

DEFAULT_APPROVAL_PROFILE: approval_dev_default

REQUIRE_EXPLICIT_PUBLISH_APPROVAL: "true"

secret_refs:

- secret/local-dev/database-url

depends_on:

- postgres

```

## 107.10 Expanded manifest bundle acceptance criteria

This appendix is successful when the team can:

- create a manifest file per critical service,

- maintain environment overlays or variants,

- wire health checks and dependencies clearly,

- and use the manifests as deployment-ready configuration references.

---

# 108. Appendix BL: Execution Pack v15 — Service-Level SLO/SLI Starter
Packs

This appendix adds a first reliability target layer for services and
founder-facing surfaces. These are starter SLO/SLI packs meant to drive
observability and review discipline, not rigid promises on day one.

## 108.1 Reliability philosophy

Hotel Nexus is a founder-trust system. That means reliability should be
measured not only by infrastructure uptime, but by whether the founder
receives:

- the board on time,

- approvals safely,

- evidence when needed,

- and graceful handling when things degrade.

## 108.2 Service-level SLI categories

Recommended SLI families:

- availability

- latency

- freshness

- correctness / validity

- partial/degraded-mode visibility

- recovery time

## 108.3 Starter pack: `api-gateway`

### Suggested SLIs

- request success rate for core founder routes

- p95 latency for `/boards/today`

- p95 latency for `/approvals`

- rate of 5xx responses by route

### Suggested starter SLOs

- `/boards/today` success rate: **99.5%** over rolling 30 days

- `/approvals` success rate: **99.5%** over rolling 30 days

- `/boards/today` p95 latency: **\< 1200ms** under expected
founder load

### User-facing interpretation

The founder should not experience the board as “randomly unavailable”
during normal operating windows.

## 108.4 Starter pack: `workflow-service`

### Suggested SLIs

- Morning Board workflow completion rate

- Night Shift workflow completion rate

- approval resume workflow success rate

- stuck workflow count older than threshold

### Suggested starter SLOs

- Morning Board workflow completion before founder wake window:
**99%**

- approval resume workflow success rate: **99%**

- stuck critical workflows older than 15 minutes: **0 tolerated
without alert**

## 108.5 Starter pack: `approval-service`

### Suggested SLIs

- approval creation success rate

- approval decision persistence success rate

- time from decision to downstream workflow state update

### Suggested starter SLOs

- approval create/list/resolve success rate: **99.7%**

- decision persistence lag: **\< 5 seconds p95**

### User-facing interpretation

If a founder approves something, the system should feel immediate and
trustworthy.

## 108.6 Starter pack: `memory-service`

### Suggested SLIs

- source-grounded retrieval success rate

- search latency p95

- provenance resolution availability

- ingest backlog age

### Suggested starter SLOs

- source-grounded retrieval success rate: **99%**

- memory search p95 latency: **\< 1500ms** for core founder queries

- provenance resolution success: **99%** for returned search
results

## 108.7 Starter pack: `state-service`

### Suggested SLIs

- current state snapshot freshness

- state snapshot generation success rate

- transition detection event creation rate

### Suggested starter SLOs

- current state snapshot freshness within expected window: **95%**

- state snapshot generation success rate: **99%**

## 108.8 Starter pack: founder surfaces

### Home / Morning Command Board SLIs

- board load success rate

- board load latency

- partial banner correctness when critical inputs missing

### Approval Center SLIs

- approval queue load success rate

- resolve action success rate

- evidence drawer open success rate

### Memory Console SLIs

- search success rate

- source panel render success rate

- stale/partial marker visibility when expected

## 108.9 Error budget interpretation

Starter guidance:

- if a service repeatedly breaches its SLO, roadmap time should shift
from feature work to reliability hardening for that area

- founder-facing reliability breaches should be considered product
issues, not only infra issues

## 108.10 SLO/SLI file recommendation

```text

docs/reliability/

api-gateway-slo.md

workflow-service-slo.md

approval-service-slo.md

memory-service-slo.md

state-service-slo.md

founder-home-slo.md

approval-center-slo.md

```

## 108.11 SLO starter pack acceptance criteria

This appendix is successful when the team can:

- define initial SLIs,

- attach them to dashboards,

- alert on meaningful breaches,

- and use error budgets to influence prioritization.

---

# 109. Appendix BM: Execution Pack v15 — Founder-Production Smoke Test
Packs

This appendix defines explicit smoke test packs for founder-production.
These are not full regression suites; they are the minimum critical-path
tests that determine whether the live founder environment is trustworthy
after deploy.

## 109.1 Smoke test philosophy

A founder-production smoke pack should validate:

- access,

- board availability,

- approvals,

- evidence path,

- workflow visibility,

- and visible degraded-mode behavior when relevant.

If these are not tested, a deploy can appear successful while trust is
already damaged.

## 109.2 Post-deploy smoke pack: founder core

### Checklist

- [ ] founder-web loads successfully

- [ ] auth/session entry path works

- [ ] `/boards/today` returns 200

- [ ] board renders in Home surface

- [ ] readiness headline visible

- [ ] top move visible

## 109.3 Post-deploy smoke pack: approvals

### Checklist

- [ ] `/approvals` returns 200

- [ ] approval queue renders if approvals exist

- [ ] approval detail panel opens

- [ ] decision action succeeds in controlled smoke scenario or
verified safe test item

- [ ] post-decision state updates correctly

## 109.4 Post-deploy smoke pack: evidence and memory

### Checklist

- [ ] EvidenceDrawer opens from a board or approval item

- [ ] at least one evidence ref resolves

- [ ] source-grounded context is visible

- [ ] memory search returns at least one seeded/expected result

## 109.5 Post-deploy smoke pack: workflow visibility

### Checklist

- [ ] latest board generation workflow trace visible

- [ ] latest Night Shift status visible if applicable

- [ ] no unexplained critical workflow failures present

## 109.6 Post-deploy smoke pack: degraded-mode behavior

### Checklist

- [ ] partial or degraded banner displays correctly if a known
dependency is unavailable

- [ ] no false “everything healthy” state shown when backend marks
partial

## 109.7 Smoke test script example

Recommended file: `runbooks/releases/founder-prod-smoke-pack.md`

```md

# Founder-Prod Smoke Pack

## Preconditions

- release deployed

- migrations completed

- alerts green enough to proceed

## Test 1: Access

- open founder-web

- verify Home renders

## Test 2: Board

- verify current board loads

- verify state summary visible

- verify one move or fallback visible

## Test 3: Approvals

- open Approval Center

- verify approval list loads or explicit empty state appears

## Test 4: Evidence

- open one evidence path

- verify source-grounded detail renders

## Test 5: Workflow visibility

- confirm latest board workflow trace exists

## Decision

- [ ] release healthy

- [ ] degraded but acceptable

- [ ] rollback required

```

## 109.8 Smoke test ownership guidance

The smoke pack should name:

- release owner

- observer/reviewer

- rollback owner

- founder communication owner if something fails visibly

## 109.9 Smoke test pack acceptance criteria

This appendix is successful when every founder-prod release can be
followed by:

- one repeatable smoke pack,

- one named owner,

- one clear go/degraded/rollback decision,

- and one audit note about post-deploy confidence.

At that point, founder-production becomes something the team can protect
intentionally rather than optimistically.

---

## 106.11 Additional ready-to-copy file:
`contracts/examples/founder-board/board-healthy.example.json`

```json

{

"board_id": "board_2026_06_07",

"generated_at": "2026-06-07T07:45:00Z",

"state_snapshot_id": "state_2026_06_07_0800",

"mode": "morning_command_board",

"top_moves": [

{

"move_id": "move_001",

"title": "Review top content opportunity packet",

"priority_rank": 1,

"reason": "Strong overnight signal clustering with low estimated
production cost",

"confidence": 0.84,

"action_type": "open_opportunity"

}

],

"approval_packets": [

{

"approval_request_id": "approval_2026_06_07_001",

"requested_action_type": "publish_video",

"risk_tier": "tier_3",

"decision_status": "pending"

}

],

"critical_alerts": [],

"partial_state": false

}

```

## 106.12 Additional ready-to-copy file:
`contracts/json-schema/records/approval-packet.json`

```json

{

"\$id": "https://schemas.hotelnexus.io/records/approval-packet.json",

"\$schema": "https://json-schema.org/draft/2020-12/schema",

"title": "ApprovalPacket",

"type": "object",

"required": [

"approval_request_id",

"requested_action_type",

"risk_tier",

"decision_status"

],

"properties": {

"approval_request_id": {"type": "string"},

"requested_action_type": {"type": "string"},

"risk_tier": {"type": "string"},

"autonomy_class": {"type": ["string", "null"]},

"decision_status": {

"type": "string",

"enum": ["pending", "approved", "rejected", "snoozed", "expired"]

},

"recommended_decision": {"type": ["string", "null"]},

"expires_at": {"type": ["string", "null"], "format": "date-time"},

"evidence_refs": {

"type": "array",

"items": {"type": "string"}

}

}

}

```

## 107.11 Additional manifest example:
`workflow-service.founder-prod.yaml`

```yaml

service:

name: workflow-service

environment: founder-prod

image: hotel-nexus/workflow-service:stable

port: 3105

healthcheck:

path: /health

interval_seconds: 15

env:

NODE_ENV: production

APP_ENV: founder-prod

LOG_LEVEL: info

DATABASE_URL_REF: secret/founder-prod/database-url

WORKFLOW_ENGINE_MODE: durable

NIGHT_SHIFT_ENABLED: "true"

APPROVAL_PAUSE_MODE: required_for_tier3_plus

DLQ_TOPIC_NAME: workflow.dead-letter

secret_refs:

- secret/founder-prod/database-url

depends_on:

- postgres

- message-broker

```

## 107.12 Additional manifest example:
`api-gateway.founder-prod.yaml`

```yaml

service:

name: api-gateway

environment: founder-prod

image: hotel-nexus/api-gateway:stable

port: 3100

healthcheck:

path: /health

interval_seconds: 10

env:

NODE_ENV: production

APP_ENV: founder-prod

LOG_LEVEL: info

CORS_MODE: founder-restricted

RATE_LIMIT_PROFILE: founder-prod-default

FEATURE_FOUNDER_COCKPIT: "true"

FEATURE_OPERATOR_CONSOLE: "false"

secret_refs:

- secret/founder-prod/jwt-public-key

depends_on:

- identity-service

- approval-service

- workflow-service

- memory-service

```

## 107.13 Additional manifest example:
`founder-web.founder-prod.yaml`

```yaml

service:

name: founder-web

environment: founder-prod

image: hotel-nexus/founder-web:stable

port: 3000

healthcheck:

path: /api/health

interval_seconds: 15

env:

NODE_ENV: production

APP_ENV: founder-prod

NEXT_PUBLIC_API_BASE_URL: https://api.hotelnexus.internal

NEXT_PUBLIC_ENABLE_VOICE_CAPTURE: "true"

NEXT_PUBLIC_ENABLE_PARTIAL_BANNERS: "true"

NEXT_PUBLIC_ENABLE_APPROVAL_CENTER: "true"

secret_refs: []

depends_on:

- api-gateway

```

## 108.12 SLI to alert starter mapping

Suggested initial mapping:

| Domain | SLI | Alert trigger | Initial owner |

| --------------- | -------------------------------------- |
------------------------------------------------- |
-------------------------- |

| Founder board | board load success rate | below SLO threshold over
rolling window | founder product + platform |

| Approval path | decision persistence lag | p95 above 5 seconds |
approvals owner |

| Memory evidence | provenance resolution success | below 99% or
sudden drop | memory owner |

| Night Shift | workflow completion before wake window | miss on
critical day window | workflow owner |

| Notifications | approval notification delivery latency | alert if
critical approval exceeds expected delay | notification owner |

## 108.13 Reliability review cadence starter

Recommended cadence:

- weekly reliability review for core founder surfaces,

- sprint-end error-budget review for breached services,

- pre-release check on active high-risk SLO breaches,

- and monthly founder-trust review focused on missed mornings, noisy
approvals, and evidence failures.

## 109.10 Smoke automation hook pack

Recommended founder-prod smoke helpers:

```text

scripts/smoke/

founder-prod-smoke.sh

founder-prod-api-checks.sh

founder-prod-ui-checklist.md

smoke-env-template.sh

```

Example shell starter:

```bash

#!/usr/bin/env bash

set -euo pipefail

BASE_URL="\${FOUNDER_BASE_URL:?missing}"

AUTH_TOKEN="\${FOUNDER_SMOKE_TOKEN:?missing}"

echo "[1/4] checking board"

curl -sf -H "Authorization: Bearer \${AUTH_TOKEN}"
"\${BASE_URL}/boards/today" >/tmp/board.json

echo "[2/4] checking approvals"

curl -sf -H "Authorization: Bearer \${AUTH_TOKEN}"
"\${BASE_URL}/approvals" >/tmp/approvals.json

echo "[3/4] checking health summary"

curl -sf -H "Authorization: Bearer \${AUTH_TOKEN}"
"\${BASE_URL}/system/health/summary" >/tmp/health.json

echo "[4/4] smoke complete"

```

## 109.11 Smoke artifact capture requirements

Every founder-prod smoke run should capture:

- release version,

- environment name,

- smoke runner,

- timestamp,

- board result,

- approval result,

- evidence-path result,

- workflow-trace result,

- go / degraded / rollback decision,

- and links to screenshots or raw API responses where appropriate.

Recommended file layout:

```text

runbooks/releases/artifacts/

founder-prod/

2026-06-07-release-001/

smoke-summary.md

board-response.json

approvals-response.json

screenshots/

```

## 109.12 Seeded smoke data guidance

Founder-production smoke tests should avoid dangerous fake actions while
still exercising critical flows. Recommended seeded items:

- one safe approval packet marked `smoke_test_only=true`,

- one seeded evidence reference pointing to non-sensitive demo-safe
material,

- one predictable board fallback payload if upstream Night Shift
generation is unavailable,

- and one known workflow trace reference for visibility validation.

The purpose is to verify trust paths without risking accidental
publication, spend, or irreversible side effects.

# 110. Appendix BN: Execution Pack v16 — Fully Expanded DDL and
Seed-Data Starter Bundle

This appendix translates the earlier schema, migration, contract, and
environment guidance into a **practical database starter bundle**.
The goal is not to freeze the data model forever; it is to give
engineering a first serious relational spine that is explicit enough to
build against, migrate safely, seed in lower environments, and validate
in CI.

## 110.1 DDL bundle philosophy

The initial Hotel Nexus relational bundle should be:

- **founder-visible**: it must directly support founder board,
approvals, memory provenance, opportunity ranking, and workflow
visibility,

- **state-first**: it must store the state and decision context,
not just task outputs,

- **contract-aware**: table shapes should map cleanly to the record
and event contracts already defined in earlier appendices,

- **audit-friendly**: high-consequence actions require timestamps,
status fields, ownership, and provenance,

- **migration-safe**: every table should be introducible in small
steps with deterministic backfill behavior,

- **JSONB-tolerant but not schema-lazy**: use relational columns
for core query paths and JSONB for extensibility,

- and **small-team maintainable**: the first bundle should
privilege clarity and operational leverage over over-abstracted
modeling.

## 110.2 Recommended starter layout

```text

apps/

services/

packages/

contracts/

infra/

database/

migrations/

0001_extensions.sql

0002_core_identity.sql

0003_state_and_board.sql

0004_approvals_and_evidence.sql

0005_memory.sql

0006_opportunities_and_assets.sql

0007_workflows_and_events.sql

0008_seed_reference_data.sql

0009_seed_founder_demo_data.sql

seeds/

reference/

autonomy-classes.sql

risk-tiers.sql

estate-modes.sql

demo/

founder-estate.sql

state-board-approval.sql

opportunity-asset.sql

ddl/

README.md

tables/

indexes/

views/

```

## 110.3 SQL implementation posture

Recommended starter assumptions:

- PostgreSQL as the system-of-record relational store,

- `timestamptz` for all timestamps,

- `jsonb` for extensible payloads and metadata,

- `text` IDs in the early bundle for human-readable seeded
environments and contract alignment,

- `numeric(12,2)` for founder-facing spend ceilings and budgets,

- `boolean not null default false` for explicit feature toggles /
deletion flags,

- and soft-delete only where the product or audit model actually
benefits from it.

If the team later standardizes on UUIDs, the migration path should be
deliberate and contract-versioned. For the first serious vertical slice,
prefixed text IDs remain practical and debuggable.

## 110.4 Migration `0001_extensions.sql`

```sql

create extension if not exists pgcrypto;

create extension if not exists citext;

```

The starter bundle should avoid exotic extensions until query patterns
justify them.

## 110.5 Migration `0002_core_identity.sql`

This migration establishes the estate identity spine.

```sql

create table if not exists persons (

person_id text primary key,

external_ref text,

display_name text not null,

primary_email citext,

timezone text not null default 'UTC',

locale text not null default 'en-US',

created_at timestamptz not null default now(),

updated_at timestamptz not null default now(),

status text not null default 'active',

profile_metadata jsonb not null default '{}'::jsonb,

constraint persons_status_chk check (status in
('active','inactive','suspended'))

);

create table if not exists estates (

estate_id text primary key,

estate_name text not null,

estate_mode text not null default 'personal',

founder_person_id text not null references persons(person_id),

timezone text not null default 'UTC',

created_at timestamptz not null default now(),

updated_at timestamptz not null default now(),

estate_metadata jsonb not null default '{}'::jsonb,

constraint estates_mode_chk check (estate_mode in
('personal','operator','focus','travel','recovery','build','capital'))

);

create table if not exists estate_memberships (

membership_id text primary key,

estate_id text not null references estates(estate_id),

person_id text not null references persons(person_id),

role_code text not null,

is_primary boolean not null default false,

permission_profile text not null,

created_at timestamptz not null default now(),

updated_at timestamptz not null default now(),

membership_metadata jsonb not null default '{}'::jsonb,

unique (estate_id, person_id, role_code)

);

create index if not exists idx_estates_founder_person_id on
estates(founder_person_id);

create index if not exists idx_estate_memberships_estate_id on
estate_memberships(estate_id);

create index if not exists idx_estate_memberships_person_id on
estate_memberships(person_id);

```

## 110.6 Migration `0003_state_and_board.sql`

This bundle supports state-first operation and the founder’s ranked
morning surface.

```sql

create table if not exists state_snapshots (

snapshot_id text primary key,

estate_id text not null references estates(estate_id),

person_id text not null references persons(person_id),

environment_context_id text,

captured_at timestamptz not null,

readiness_band text not null,

readiness_score numeric(5,4) not null,

recovery_score numeric(5,4) not null,

friction_score numeric(5,4) not null,

overload_risk_score numeric(5,4) not null,

confidence numeric(5,4) not null,

explanation_summary text,

source_signals jsonb not null default '[]'::jsonb,

feature_vector jsonb not null default '{}'::jsonb,

created_at timestamptz not null default now(),

constraint state_snapshots_band_chk check (readiness_band in
('red','amber','green','blue')),

constraint state_snapshots_confidence_chk check (confidence >= 0 and
confidence \<= 1)

);

create table if not exists morning_boards (

board_id text primary key,

estate_id text not null references estates(estate_id),

person_id text not null references persons(person_id),

state_snapshot_id text references state_snapshots(snapshot_id),

generated_at timestamptz not null,

board_date date not null,

mode text not null default 'standard',

board_status text not null default 'generated',

completeness_status text not null default 'complete',

board_summary text,

workflow_run_id text,

payload jsonb not null default '{}'::jsonb,

created_at timestamptz not null default now(),

updated_at timestamptz not null default now(),

unique (estate_id, person_id, board_date)

);

create table if not exists recommended_moves (

recommended_move_id text primary key,

board_id text not null references morning_boards(board_id) on delete
cascade,

estate_id text not null references estates(estate_id),

priority_rank integer not null,

title text not null,

reason text,

action_type text not null,

confidence numeric(5,4) not null,

requires_approval boolean not null default false,

source_type text,

source_ref_id text,

status text not null default 'open',

generated_at timestamptz not null,

created_at timestamptz not null default now(),

metadata jsonb not null default '{}'::jsonb,

constraint recommended_moves_confidence_chk check (confidence >= 0 and
confidence \<= 1),

unique (board_id, priority_rank)

);

create index if not exists idx_state_snapshots_estate_person_time on
state_snapshots(estate_id, person_id, captured_at desc);

create index if not exists idx_morning_boards_estate_person_date on
morning_boards(estate_id, person_id, board_date desc);

create index if not exists idx_recommended_moves_board_rank on
recommended_moves(board_id, priority_rank);

create index if not exists idx_recommended_moves_source on
recommended_moves(source_type, source_ref_id);

```

## 110.7 Migration `0004_approvals_and_evidence.sql`

This is the trust and control spine.

```sql

create table if not exists approval_requests (

approval_request_id text primary key,

estate_id text not null references estates(estate_id),

person_id text not null references persons(person_id),

requested_action_type text not null,

requested_by_agent text not null,

risk_tier integer not null,

autonomy_class integer not null,

decision_status text not null default 'pending',

recommended_decision text,

spend_ceiling_amount numeric(12,2),

spend_currency text,

expires_at timestamptz,

source_workflow_run_id text,

source_object_type text,

source_object_id text,

rationale_summary text,

created_at timestamptz not null default now(),

updated_at timestamptz not null default now(),

decided_at timestamptz,

decided_by_person_id text references persons(person_id),

decision_note text,

payload jsonb not null default '{}'::jsonb,

constraint approval_requests_risk_tier_chk check (risk_tier between 1
and 5),

constraint approval_requests_autonomy_class_chk check (autonomy_class
between 1 and 5),

constraint approval_requests_status_chk check (decision_status in
('pending','approved','rejected','snoozed','expired'))

);

create table if not exists evidence_refs (

evidence_ref_id text primary key,

estate_id text not null references estates(estate_id),

source_type text not null,

source_uri text,

title text,

excerpt_text text,

citation_label text,

provenance_status text not null default 'source_grounded',

created_by_service text,

created_at timestamptz not null default now(),

metadata jsonb not null default '{}'::jsonb,

constraint evidence_refs_provenance_chk check (provenance_status in
('source_grounded','derived','generated','partial'))

);

create table if not exists approval_request_evidence_refs (

approval_request_id text not null references
approval_requests(approval_request_id) on delete cascade,

evidence_ref_id text not null references evidence_refs(evidence_ref_id)
on delete cascade,

relation_type text not null default 'supporting',

created_at timestamptz not null default now(),

primary key (approval_request_id, evidence_ref_id)

);

create index if not exists idx_approval_requests_estate_status on
approval_requests(estate_id, decision_status, created_at desc);

create index if not exists idx_approval_requests_source on
approval_requests(source_object_type, source_object_id);

create index if not exists idx_evidence_refs_estate_created on
evidence_refs(estate_id, created_at desc);

```

## 110.8 Migration `0005_memory.sql`

This bundle supports provenance-aware memory ingestion and retrieval.

```sql

create table if not exists memory_documents (

memory_document_id text primary key,

estate_id text not null references estates(estate_id),

person_id text references persons(person_id),

source_uri text,

source_type text not null,

title text,

mime_type text,

ingestion_status text not null default 'ingested',

provenance_status text not null default 'source_grounded',

checksum_sha256 text,

captured_at timestamptz,

created_at timestamptz not null default now(),

updated_at timestamptz not null default now(),

metadata jsonb not null default '{}'::jsonb,

constraint memory_documents_ingestion_status_chk check (ingestion_status
in ('queued','ingested','chunked','failed','redacted'))

);

create table if not exists memory_chunks (

memory_chunk_id text primary key,

memory_document_id text not null references
memory_documents(memory_document_id) on delete cascade,

estate_id text not null references estates(estate_id),

chunk_index integer not null,

content_text text not null,

token_count integer,

embedding_status text not null default 'pending',

chunk_summary text,

citation_label text,

created_at timestamptz not null default now(),

metadata jsonb not null default '{}'::jsonb,

unique (memory_document_id, chunk_index)

);

create table if not exists memory_links (

memory_link_id text primary key,

estate_id text not null references estates(estate_id),

source_record_type text not null,

source_record_id text not null,

target_memory_document_id text references
memory_documents(memory_document_id),

target_memory_chunk_id text references memory_chunks(memory_chunk_id),

relation_type text not null,

confidence numeric(5,4),

created_at timestamptz not null default now(),

metadata jsonb not null default '{}'::jsonb

);

create index if not exists idx_memory_documents_estate_created on
memory_documents(estate_id, created_at desc);

create index if not exists idx_memory_documents_source_uri on
memory_documents(source_uri);

create index if not exists idx_memory_chunks_document_idx on
memory_chunks(memory_document_id, chunk_index);

create index if not exists idx_memory_links_source on
memory_links(source_record_type, source_record_id);

```

## 110.9 Migration `0006_opportunities_and_assets.sql`

This bundle supports Alpha OS, Foundry, and decision-ready creation
loops.

```sql

create table if not exists opportunities (

opportunity_id text primary key,

estate_id text not null references estates(estate_id),

opportunity_domain text not null,

title text not null,

hypothesis text,

status text not null default 'open',

owner_agent text,

demand_score numeric(5,4),

supply_gap_score numeric(5,4),

monetization_score numeric(5,4),

build_complexity_score numeric(5,4),

confidence_score numeric(5,4),

source_signals jsonb not null default '[]'::jsonb,

recommended_asset_types jsonb not null default '[]'::jsonb,

created_at timestamptz not null default now(),

updated_at timestamptz not null default now(),

published_at timestamptz,

metadata jsonb not null default '{}'::jsonb,

constraint opportunities_domain_chk check (opportunity_domain in
('content','app','market','product','estate','capital')),

constraint opportunities_status_chk check (status in
('open','scored','approved','building','published','archived'))

);

create table if not exists assets (

asset_id text primary key,

estate_id text not null references estates(estate_id),

source_opportunity_id text references opportunities(opportunity_id),

asset_type text not null,

title text,

status text not null default 'draft',

preview_url text,

approval_request_id text references
approval_requests(approval_request_id),

variant_group_id text,

created_at timestamptz not null default now(),

updated_at timestamptz not null default now(),

published_at timestamptz,

production_metadata jsonb not null default '{}'::jsonb,

performance_metrics_ref jsonb not null default '{}'::jsonb,

constraint assets_status_chk check (status in
('draft','rendering','preview_ready','awaiting_approval','published','failed','archived'))

);

create index if not exists idx_opportunities_estate_status on
opportunities(estate_id, status, created_at desc);

create index if not exists idx_opportunities_domain_status on
opportunities(opportunity_domain, status);

create index if not exists idx_assets_estate_status on assets(estate_id,
status, created_at desc);

create index if not exists idx_assets_source_opportunity on
assets(source_opportunity_id);

```

## 110.10 Migration `0007_workflows_and_events.sql`

This bundle makes the orchestration layer operationally inspectable.

```sql

create table if not exists workflow_runs (

workflow_run_id text primary key,

estate_id text not null references estates(estate_id),

workflow_name text not null,

trigger_type text not null,

trigger_ref text,

started_at timestamptz not null,

completed_at timestamptz,

status text not null,

initiated_by text,

correlation_id text,

parent_workflow_run_id text references workflow_runs(workflow_run_id),

input_payload jsonb not null default '{}'::jsonb,

output_payload jsonb not null default '{}'::jsonb,

error_payload jsonb not null default '{}'::jsonb,

created_at timestamptz not null default now(),

updated_at timestamptz not null default now(),

constraint workflow_runs_status_chk check (status in
('queued','running','blocked','awaiting_approval','completed','failed','cancelled','timed_out'))

);

create table if not exists workflow_steps (

workflow_step_id text primary key,

workflow_run_id text not null references workflow_runs(workflow_run_id)
on delete cascade,

step_name text not null,

step_order integer not null,

service_owner text,

status text not null,

started_at timestamptz,

completed_at timestamptz,

duration_ms integer,

input_payload jsonb not null default '{}'::jsonb,

output_payload jsonb not null default '{}'::jsonb,

error_payload jsonb not null default '{}'::jsonb,

created_at timestamptz not null default now(),

updated_at timestamptz not null default now(),

unique (workflow_run_id, step_order),

constraint workflow_steps_status_chk check (status in
('queued','running','completed','failed','skipped','awaiting_approval'))

);

create table if not exists domain_events (

event_id text primary key,

estate_id text not null references estates(estate_id),

event_name text not null,

producer_service text not null,

correlation_id text,

causation_id text,

aggregate_type text,

aggregate_id text,

occurred_at timestamptz not null,

payload jsonb not null,

created_at timestamptz not null default now()

);

create table if not exists outbox_events (

outbox_event_id text primary key,

aggregate_type text not null,

aggregate_id text not null,

event_name text not null,

payload jsonb not null,

status text not null default 'pending',

available_at timestamptz not null default now(),

published_at timestamptz,

retry_count integer not null default 0,

last_error text,

created_at timestamptz not null default now(),

updated_at timestamptz not null default now(),

constraint outbox_events_status_chk check (status in
('pending','published','failed','dead_lettered'))

);

create index if not exists idx_workflow_runs_estate_started on
workflow_runs(estate_id, started_at desc);

create index if not exists idx_workflow_runs_status on
workflow_runs(status, started_at desc);

create index if not exists idx_workflow_steps_run_order on
workflow_steps(workflow_run_id, step_order);

create index if not exists idx_domain_events_name_time on
domain_events(event_name, occurred_at desc);

create index if not exists idx_outbox_events_status_available on
outbox_events(status, available_at asc);

```

## 110.11 Suggested operational views

Views make founder support and operator diagnosis easier without
coupling every dashboard directly to raw table joins.

```sql

create or replace view v_open_approval_queue as

select

ar.approval_request_id,

ar.estate_id,

ar.requested_action_type,

ar.risk_tier,

ar.autonomy_class,

ar.decision_status,

ar.created_at,

ar.expires_at,

ar.recommended_decision

from approval_requests ar

where ar.decision_status = 'pending';

create or replace view v_latest_state_snapshot as

select distinct on (estate_id, person_id)

snapshot_id,

estate_id,

person_id,

captured_at,

readiness_band,

readiness_score,

friction_score,

overload_risk_score,

confidence

from state_snapshots

order by estate_id, person_id, captured_at desc;

create or replace view v_recent_workflow_failures as

select

workflow_run_id,

estate_id,

workflow_name,

status,

started_at,

completed_at,

error_payload

from workflow_runs

where status in ('failed','timed_out')

order by started_at desc;

```

## 110.12 Seed-data strategy

The seed bundle should be explicitly split into:

- **reference seeds**: risk tiers, autonomy classes, estate modes,
alert severities, default notification channels,

- **demo seeds**: a safe founder estate with realistic but
non-sensitive objects,

- **smoke seeds**: deterministic board, approval, evidence, and
workflow objects used by founder-prod smoke tests,

- and **test-only seeds**: high-volume or edge-case datasets used
only in CI or load environments.

Never mix demo-safe seeded objects with live founder-sensitive data.

## 110.13 Reference seed starter bundle

```sql

insert into persons (person_id, display_name, primary_email, timezone,
locale, status)

values

('person_founder_001', 'Founder Demo', 'founder@example.com',
'America/Los_Angeles', 'en-US', 'active')

on conflict (person_id) do nothing;

insert into estates (estate_id, estate_name, estate_mode,
founder_person_id, timezone)

values

('estate_001', 'Hotel Nexus Founder Estate', 'build',
'person_founder_001', 'America/Los_Angeles')

on conflict (estate_id) do nothing;

insert into estate_memberships (membership_id, estate_id, person_id,
role_code, is_primary, permission_profile)

values

('membership_001', 'estate_001', 'person_founder_001', 'founder', true,
'founder_full')

on conflict (membership_id) do nothing;

```

## 110.14 Demo state and board seed starter

```sql

insert into state_snapshots (

snapshot_id,

estate_id,

person_id,

captured_at,

readiness_band,

readiness_score,

recovery_score,

friction_score,

overload_risk_score,

confidence,

explanation_summary,

source_signals,

feature_vector

)

values (

'state_2026_06_07_0800',

'estate_001',

'person_founder_001',

'2026-06-07T08:00:00Z',

'amber',

0.6200,

0.4700,

0.5800,

0.3300,

0.7900,

'Founder is moderately ready but carrying meaningful friction and should
receive a ranked, low-overwhelm board.',

'[{"signal_type":"calendar","signal_ref":"sig_cal_001"},{"signal_type":"voice","signal_ref":"sig_voice_001"}]'::jsonb,

'{"focus_depth":0.61,"meeting_density":0.72,"sleep_proxy":0.48}'::jsonb

)

on conflict (snapshot_id) do nothing;

insert into morning_boards (

board_id,

estate_id,

person_id,

state_snapshot_id,

generated_at,

board_date,

mode,

board_status,

completeness_status,

board_summary,

workflow_run_id,

payload

)

values (

'board_2026_06_07',

'estate_001',

'person_founder_001',

'state_2026_06_07_0800',

'2026-06-07T08:03:00Z',

'2026-06-07',

'standard',

'generated',

'complete',

'Today requires two high-leverage approvals, one focused build block,
and one capital review.',

'wf_board_2026_06_07',

'{"critical_alert_count":0,"approval_count":1}'::jsonb

)

on conflict (board_id) do nothing;

insert into recommended_moves (

recommended_move_id,

board_id,

estate_id,

priority_rank,

title,

reason,

action_type,

confidence,

requires_approval,

source_type,

source_ref_id,

status,

generated_at,

metadata

)

values

(

'move_001',

'board_2026_06_07',

'estate_001',

1,

'Review and decide on the queued publication packet',

'This unlocks downstream distribution and removes uncertainty from the
day’s queue.',

'review_approval',

0.8800,

true,

'approval_request',

'approval_2026_06_07_001',

'open',

'2026-06-07T08:03:00Z',

'{"annotation":"awaiting_approval"}'::jsonb

),

(

'move_002',

'board_2026_06_07',

'estate_001',

2,

'Enter a 45-minute focused build block on the app foundry brief',

'Current state favors one constrained build sprint over fragmented
context switching.',

'start_focus_block',

0.8100,

false,

'opportunity',

'opp_001',

'open',

'2026-06-07T08:03:00Z',

'{"annotation":"generated"}'::jsonb

)

on conflict (recommended_move_id) do nothing;

```

## 110.15 Demo approval and evidence seed starter

```sql

insert into evidence_refs (

evidence_ref_id,

estate_id,

source_type,

source_uri,

title,

excerpt_text,

citation_label,

provenance_status,

created_by_service,

metadata

)

values (

'evidence_001',

'estate_001',

'youtube_transcript',

'https://example.com/source/trend-brief-001',

'Trend Brief 001',

'The topic cluster shows sustained search and attention acceleration
over the prior two weeks.',

'Trend Brief 001, lines 18-26',

'source_grounded',

'opportunity-service',

'{"safe_demo":true}'::jsonb

)

on conflict (evidence_ref_id) do nothing;

insert into approval_requests (

approval_request_id,

estate_id,

person_id,

requested_action_type,

requested_by_agent,

risk_tier,

autonomy_class,

decision_status,

recommended_decision,

spend_ceiling_amount,

spend_currency,

expires_at,

source_workflow_run_id,

source_object_type,

source_object_id,

rationale_summary,

payload

)

values (

'approval_2026_06_07_001',

'estate_001',

'person_founder_001',

'publish_video',

'ApprovalGovernor',

3,

4,

'pending',

'approve',

25.00,

'USD',

'2026-06-08T08:00:00Z',

'wf_publish_packet_001',

'asset',

'asset_001',

'Packet meets quality threshold and falls within allowed spend, but
publication still requires founder approval.',

'{"smoke_test_only":true,"channel":"youtube"}'::jsonb

)

on conflict (approval_request_id) do nothing;

insert into approval_request_evidence_refs (

approval_request_id,

evidence_ref_id,

relation_type

)

values (

'approval_2026_06_07_001',

'evidence_001',

'supporting'

)

on conflict do nothing;

```

## 110.16 Demo opportunity, asset, and workflow seed starter

```sql

insert into opportunities (

opportunity_id,

estate_id,

opportunity_domain,

title,

hypothesis,

status,

owner_agent,

demand_score,

supply_gap_score,

monetization_score,

build_complexity_score,

confidence_score,

source_signals,

recommended_asset_types,

metadata

)

values (

'opp_001',

'estate_001',

'content',

'AI founder workflow trend cluster',

'A short-form educational and systems-design content series could
capture attention and drive conversion into higher-value assets.',

'approved',

'RevenueDirector',

0.8300,

0.7100,

0.7600,

0.4100,

0.7900,

'[{"signal_type":"trend","signal_ref":"trend_001"}]'::jsonb,

'["video","brief","thread"]'::jsonb,

'{"safe_demo":true}'::jsonb

)

on conflict (opportunity_id) do nothing;

insert into assets (

asset_id,

estate_id,

source_opportunity_id,

asset_type,

title,

status,

preview_url,

approval_request_id,

variant_group_id,

production_metadata,

performance_metrics_ref

)

values (

'asset_001',

'estate_001',

'opp_001',

'video',

'Founder Systems Brief Episode 01',

'awaiting_approval',

'https://example.com/previews/asset_001',

'approval_2026_06_07_001',

'variant_001',

'{"duration_seconds":62,"render_provider":"demo-renderer"}'::jsonb,

'{"metric_bundle":"asset_metrics_001"}'::jsonb

)

on conflict (asset_id) do nothing;

insert into workflow_runs (

workflow_run_id,

estate_id,

workflow_name,

trigger_type,

trigger_ref,

started_at,

completed_at,

status,

initiated_by,

correlation_id,

input_payload,

output_payload

)

values (

'wf_board_2026_06_07',

'estate_001',

'generate_morning_board',

'schedule',

'night_shift',

'2026-06-07T07:58:00Z',

'2026-06-07T08:03:00Z',

'completed',

'workflow-service',

'corr_board_001',

'{"estate_id":"estate_001"}'::jsonb,

'{"board_id":"board_2026_06_07"}'::jsonb

),

(

'wf_publish_packet_001',

'estate_001',

'prepare_publication_packet',

'event',

'opportunity.approved',

'2026-06-07T07:30:00Z',

'2026-06-07T07:42:00Z',

'awaiting_approval',

'asset-foundry-service',

'corr_publish_001',

'{"opportunity_id":"opp_001"}'::jsonb,

'{"asset_id":"asset_001"}'::jsonb

)

on conflict (workflow_run_id) do nothing;

```

## 110.17 Seed execution rules

The starter bundle should follow six practical rules:

1. **Reference seeds are idempotent**.

2. **Demo seeds are environment-gated** and never run automatically
in founder-prod.

3. **Smoke seeds are safe by construction** and marked with
explicit metadata.

4. **Seed scripts print a manifest** of what they inserted or
skipped.

5. **Every seed object maps to a known contract**.

6. **Seeded approval and publish paths default to non-destructive
targets**.

## 110.18 CI validation checks for DDL and seeds

The database starter bundle should fail CI if:

- migrations do not apply cleanly to an empty database,

- migrations do not apply cleanly to a database already containing
prior bundle state,

- seed files reference tables or columns that do not exist,

- seeded records violate contract assumptions used by example payload
files,

- or roll-forward/rollback rehearsals expose ordering gaps.

Recommended validation pipeline:

```text

1. create empty ephemeral postgres instance

2. apply all migrations in order

3. run reference seeds

4. run demo seeds (non-prod pipeline only)

5. execute schema smoke queries

6. run contract-backed API examples against seeded fixtures

7. snapshot migration state for artifact retention

```

## 110.19 Example schema smoke queries

```sql

select board_id, board_date, completeness_status

from morning_boards

where estate_id = 'estate_001';

select approval_request_id, requested_action_type, decision_status

from v_open_approval_queue

where estate_id = 'estate_001';

select workflow_run_id, workflow_name, status

from workflow_runs

where estate_id = 'estate_001'

order by started_at desc;

```

## 110.20 Starter data retention and redaction notes

Even in seeded or lower environments, the team should rehearse lifecycle
discipline:

- demo-safe seeded data must remain clearly synthetic,

- environment reset scripts should remove demo assets and seeded
approval packets,

- evidence references should not point to sensitive private sources in
shared-dev,

- and memory tables should support future redaction paths without
invalidating workflow traceability.

## 110.21 DDL and seed bundle acceptance criteria

This appendix is successful when the team can:

- apply the first migration bundle end to end,

- seed a realistic demo estate,

- render a founder board from seeded records,

- load an approval queue with source-grounded evidence,

- inspect a workflow trace from seeded workflow rows,

- and extend the schema without violating prior contract assumptions.

---

# 111. Appendix BO: Execution Pack v16 — Service-by-Service Dashboard
and Alert Definition Pack

This appendix turns the earlier SLO/SLI and runbook layers into an
explicit **dashboard and alerting starter pack**. The purpose is not
vanity observability. The purpose is to ensure the team can see,
quickly, whether the estate is still delivering a trustworthy founder
experience.

## 111.1 Dashboard and alert philosophy

The dashboard layer should be:

- **service-specific** enough for operators to diagnose failure
domains,

- **founder-outcome-aware** enough to connect infrastructure issues
to actual trust impact,

- **release-aware** enough to catch regressions immediately after
deploy,

- **degraded-mode-visible** so partial operation is obvious rather
than hidden,

- and **owner-routed** so every alert already knows who is
responsible.

Every service dashboard should answer four questions:

1. Is the service healthy right now?

2. Is it meeting its defined user or workflow obligations?

3. If degraded, what dependent surfaces or workflows are affected?

4. Which runbook and owner should be paged or informed?

## 111.2 Recommended dashboard directory

```text

docs/observability/

dashboards/

api-gateway-dashboard.md

identity-service-dashboard.md

memory-service-dashboard.md

state-service-dashboard.md

workflow-service-dashboard.md

approval-service-dashboard.md

opportunity-service-dashboard.md

asset-foundry-service-dashboard.md

capital-service-dashboard.md

estate-service-dashboard.md

integration-service-dashboard.md

notification-service-dashboard.md

observability-service-dashboard.md

founder-web-dashboard.md

alerts/

founder-prod-critical-alerts.md

service-alert-routing.md

alert-severity-policy.md

```

## 111.3 Alert severity starter model

Recommended severities:

- **P1 / page immediately**: founder-critical outage or dangerous
approval/control failure,

- **P2 / urgent same-day response**: major degradation in key
loops, queues, or evidence paths,

- **P3 / business-hours response**: trend drift, backlog growth,
intermittent provider instability,

- **P4 / backlog review**: noisy but non-urgent warnings, dashboard
hygiene issues, or instrumentation gaps.

## 111.4 Common dashboard panel families

Each service dashboard should use a common panel vocabulary where
possible:

- request rate,

- success rate,

- p50 / p95 latency,

- error rate by endpoint or workflow,

- dependency health,

- queue backlog,

- stale data age,

- degraded-mode activations,

- recent deploy markers,

- and runbook link / dashboard owner block.

## 111.5 API gateway dashboard and alert pack

**Purpose:** protect the live front door.

**Primary panels:**

- overall request volume by route family,

- success rate for `/boards/today`, `/approvals`,
`/system/health/summary`,

- p95 latency by founder-critical endpoint,

- auth failure rate,

- 5xx rate by route,

- upstream dependency error contribution,

- deploy markers and version tags.

**Starter alerts:**

- **P1**: `/boards/today` success rate \< 98% over 10 minutes in
founder-prod,

- **P1**: p95 latency for `/boards/today` > 2500 ms over 15
minutes,

- **P2**: auth failure spike > 3x baseline over 15 minutes,

- **P2**: `/approvals` 5xx rate > 2% over 10 minutes,

- **P3**: rising dependency timeout trend over 30 minutes.

**Runbook link:** `runbooks/services/api-gateway.md`

## 111.6 Identity service dashboard and alert pack

**Purpose:** protect access, session validity, and permission
integrity.

**Primary panels:**

- login/session success rate,

- token validation latency,

- permission check failure rate,

- suspicious deny spike count,

- active session volume,

- secret/key rotation status.

**Starter alerts:**

- **P1**: token validation failure rate > 5% over 10 minutes,

- **P1**: permission check service unavailable for 5 minutes,

- **P2**: abnormal deny spike > 4x baseline,

- **P3**: stale signing key rotation window exceeded.

**Runbook link:** `runbooks/services/identity-service.md`

## 111.7 Memory service dashboard and alert pack

**Purpose:** maintain provenance-aware recall.

**Primary panels:**

- ingestion throughput,

- chunking success rate,

- retrieval success rate,

- retrieval latency p95,

- provenance marker completeness,

- redaction queue size,

- object storage dependency health.

**Starter alerts:**

- **P1**: retrieval success rate \< 97% over 15 minutes for
founder-prod,

- **P2**: p95 retrieval latency > 2500 ms over 15 minutes,

- **P2**: provenance completeness \< 99% for newly ingested
documents over 1 hour,

- **P3**: chunk backlog older than 20 minutes in shared-dev or
staging,

- **P3**: redaction queue age exceeds SLO.

**Runbook link:** `runbooks/services/memory-service.md`

## 111.8 State service dashboard and alert pack

**Purpose:** ensure current state remains fresh enough to drive the
estate.

**Primary panels:**

- state snapshot generation count,

- freshness of latest state snapshot,

- readiness band distribution,

- confidence score distribution,

- input signal availability,

- transition detection count,

- degraded state-mode activations.

**Starter alerts:**

- **P1**: latest state snapshot age > 90 minutes in founder-prod
during active hours,

- **P2**: snapshot generation failures > 3 consecutive runs,

- **P2**: input signal coverage drops below defined minimum
threshold,

- **P3**: confidence distribution collapses below expected range
for 1 hour.

**Runbook link:** `runbooks/services/state-service.md`

## 111.9 Workflow service dashboard and alert pack

**Purpose:** keep Night Shift and approval-aware orchestration
durable and inspectable.

**Primary panels:**

- workflow runs by status,

- stuck workflow count,

- average step duration by workflow family,

- approval-paused workflow count,

- failed workflow list,

- replay count,

- scheduler drift and missed trigger count.

**Starter alerts:**

- **P1**: morning board workflow missed scheduled completion window
in founder-prod,

- **P1**: stuck workflow count > 0 for founder-critical workflows
for 15 minutes,

- **P2**: failed workflow ratio > 5% over 30 minutes,

- **P2**: scheduler drift > 5 minutes for Night Shift trigger,

- **P3**: replay count spike indicates unstable provider or
contract regression.

**Runbook link:** `runbooks/services/workflow-service.md`

## 111.10 Approval service dashboard and alert pack

**Purpose:** keep high-consequence decision paths safe, visible, and
low-friction.

**Primary panels:**

- pending approval count by risk tier,

- approval queue age distribution,

- decision action success rate,

- expired approval count,

- decision latency p95,

- approval volume by action type,

- policy rejection count.

**Starter alerts:**

- **P1**: approval decision persistence failures > 0 over 10
minutes,

- **P1**: pending high-risk approvals older than threshold in
founder-prod,

- **P2**: expired approval count > baseline for one board cycle,

- **P2**: approval UI action failure rate > 2% over 15 minutes,

- **P3**: unusual policy rejection spike suggests bad config or
contract drift.

**Runbook link:** `runbooks/services/approval-service.md`

## 111.11 Opportunity service dashboard and alert pack

**Purpose:** keep the content and product alpha pipe observable.

**Primary panels:**

- ingested opportunity signals by source,

- scoring pipeline success rate,

- opportunity score distribution,

- deduplication rate,

- build-promotion candidate count,

- evidence attachment completeness,

- adapter dependency health.

**Starter alerts:**

- **P2**: scoring pipeline failures > 5% over 30 minutes,

- **P2**: evidence attachment completeness \< 95% for promoted
opportunities,

- **P3**: signal ingestion drops to zero unexpectedly during
monitored windows,

- **P3**: duplicate suppression ratio falls sharply.

**Runbook link:** `runbooks/services/opportunity-service.md`

## 111.12 Asset foundry service dashboard and alert pack

**Purpose:** protect render throughput, preview generation, and
launch packet readiness.

**Primary panels:**

- jobs submitted / completed / failed,

- render duration by asset type,

- preview generation success rate,

- provider error rate,

- budget burn by period,

- queued render age,

- approval handoff rate.

**Starter alerts:**

- **P1**: preview generation unavailable for founder-visible builds
for 15 minutes,

- **P2**: render failure rate > 10% over 30 minutes,

- **P2**: provider spend exceeds configured burn threshold,

- **P3**: queue age exceeds expected build window in shared-dev or
staging.

**Runbook link:** `runbooks/services/asset-foundry-service.md`

## 111.13 Capital service dashboard and alert pack

**Purpose:** protect memo generation, watchlist freshness, and
evidence-backed market interpretation.

**Primary panels:**

- filing ingestion throughput,

- memo generation count,

- watchlist freshness,

- evidence citation completeness,

- market data adapter latency,

- risk flag count,

- macro backdrop update cadence.

**Starter alerts:**

- **P2**: watchlist freshness breach beyond expected update window,

- **P2**: evidence citation completeness \< 98% for generated
memos,

- **P3**: filing or market-data adapter latency > threshold,

- **P3**: repeated memo generation fallback mode activation.

**Runbook link:** `runbooks/services/capital-service.md`

## 111.14 Estate service dashboard and alert pack

**Purpose:** monitor estate context, room profiles, and environment
state integration.

**Primary panels:**

- room profile sync health,

- device/input connectivity summary,

- environment context freshness,

- intervention recommendation count,

- low-risk intervention execution count,

- failed control attempts,

- degraded automation mode status.

**Starter alerts:**

- **P1**: unsafe or policy-blocked intervention loop detected,

- **P2**: environment context stale beyond threshold during active
windows,

- **P2**: control command failure rate > threshold for connected
estate systems,

- **P3**: room profile sync drift persists across cycles.

**Runbook link:** `runbooks/services/estate-service.md`

## 111.15 Integration service dashboard and alert pack

**Purpose:** make provider health and adapter instability obvious.

**Primary panels:**

- provider call volume by adapter,

- success rate by provider,

- timeout and rate-limit rate,

- retry count,

- circuit breaker state,

- DLQ size by provider domain,

- provider spend or quota usage.

**Starter alerts:**

- **P1**: critical provider adapter fully unavailable and no
fallback active,

- **P2**: provider timeout rate > threshold over 15 minutes,

- **P2**: DLQ backlog growth sustained for 30 minutes,

- **P3**: quota burn approaches hard limit,

- **P3**: retry storm pattern detected.

**Runbook link:** `runbooks/services/integration-service.md`

## 111.16 Notification service dashboard and alert pack

**Purpose:** protect founder alerts, nudges, and approval routing.

**Primary panels:**

- sends by channel,

- delivery success rate,

- duplicate suppression count,

- notification latency,

- critical notification queue depth,

- wrong-channel routing incidents,

- suppression / quiet-hours count.

**Starter alerts:**

- **P1**: critical approval notifications failing delivery in
founder-prod,

- **P2**: duplicate notification rate > threshold,

- **P2**: notification latency beyond allowed approval-response
window,

- **P3**: routing drift by channel or audience.

**Runbook link:** `runbooks/services/notification-service.md`

## 111.17 Observability service dashboard and alert pack

**Purpose:** ensure the team can still see the estate.

**Primary panels:**

- trace ingest rate,

- metric ingest freshness,

- log pipeline health,

- dashboard query error rate,

- evaluator export status,

- alert delivery success,

- cardinality warning count.

**Starter alerts:**

- **P1**: trace or metrics ingest halted for 10 minutes in
founder-prod,

- **P2**: alert delivery failures > threshold,

- **P2**: dashboard data freshness breach for critical boards,

- **P3**: log or metric cardinality spike threatens stability.

**Runbook link:** `runbooks/services/observability-service.md`

## 111.18 Founder web dashboard and alert pack

**Purpose:** measure what the founder actually experiences, not just
backend health.

**Primary panels:**

- board load success rate,

- board render p95,

- approval center load success rate,

- evidence drawer open success rate,

- session restore success rate,

- partial-data banner display rate,

- front-end error volume by screen.

**Starter alerts:**

- **P1**: founder board load success rate \< 98% over 10 minutes,

- **P1**: approval decision UI failure > threshold,

- **P2**: evidence drawer open failures > threshold,

- **P2**: front-end exception rate spike after deploy,

- **P3**: unusual partial-data banner rate increase suggests
upstream degradation.

**Runbook link:** `runbooks/services/founder-web.md`

## 111.19 Founder-trust composite dashboard

In addition to service-specific dashboards, the team should maintain one
**founder-trust composite** dashboard containing:

- latest board generation status,

- current board freshness,

- pending approval count and max age,

- latest state snapshot freshness,

- memory retrieval success,

- top failing provider,

- last deploy version,

- open P1 / P2 incidents,

- and whether the estate is currently in normal, partial, or degraded
founder mode.

This is the dashboard that product, engineering, and operator roles
should check first during a trust incident.

## 111.20 Example alert routing matrix

```text

P1 founder-critical alerts

primary: current on-call engineer

secondary: service owner

notify: operator lead, founder liaison

artifact: incident channel + incident doc + runbook link

P2 major degradation alerts

primary: service owner

secondary: platform/on-call during business hours

notify: product owner when founder-visible

P3 trend / drift alerts

primary: service owner

secondary: backlog triage

notify: weekly reliability review

```

## 111.21 Alert message template

Every alert should include:

- severity,

- service,

- environment,

- affected metric or SLI,

- threshold and observed value,

- founder impact summary,

- dashboard link,

- runbook link,

- and recent deploy/version context if available.

Example:

```text

[P1][founder-prod][workflow-service]

Morning board workflow missed completion window.

Observed: latest successful run age = 2h 14m

Threshold: \<= 45m by founder active window

Founder impact: today's board may be stale or absent

Dashboard: grafana://workflow-service-founder-prod

Runbook:
runbooks/services/workflow-service.md#morning-board-missed-window

Deploy: workflow-service@2026.06.07.3

```

## 111.22 Dashboard and alert pack review cadence

Recommended ritual:

- weekly service dashboard review,

- post-release review of founder-critical alert behavior,

- monthly threshold tuning based on actual founder usage patterns,

- and monthly founder-trust review focused on false positives, missed
incidents, and confusing degraded-mode signals.

## 111.23 Dashboard and alert pack acceptance criteria

This appendix is successful when the team can:

- stand up a dashboard for each core service,

- attach named owners and runbook links,

- define at least one founder-critical alert path,

- distinguish degraded mode from total outage,

- and use the composite founder-trust dashboard during release
validation and incidents.

---

# 112. Appendix BP: Execution Pack v17 — Real SQL Migration Bundle for
First Migration Sets

This appendix turns the earlier DDL direction into a **copy-ready
migration starter pack** for the first serious Hotel Nexus relational
spine. It is intentionally practical: the files below are designed to be
dropped into the repository, reviewed, adapted, and run in lower
environments with minimal translation.

## 112.1 Bundle intent

The first migration sets should establish the smallest relational base
that allows the team to:

- create a founder identity and estate,

- persist state snapshots and morning boards,

- store approvals and evidence links,

- write workflow run traces,

- persist opportunities and assets,

- publish domain and outbox events,

- and seed a founder-visible lower-environment demo.

The bundle is optimized for **clarity, debuggability, and
founder-visible output**, not premature normalization perfection.

## 112.2 Recommended file bundle

```text

database/

migrations/

0001_extensions.sql

0002_core_identity.sql

0003_state_and_board.sql

0004_approvals_and_evidence.sql

0005_memory_spine.sql

0006_opportunities_and_assets.sql

0007_workflow_runtime.sql

0008_outbox_and_domain_events.sql

seeds/

0001_reference_seed.sql

0002_demo_founder_estate.sql

0003_demo_board_and_approval.sql

smoke/

0001_schema_smoke_checks.sql

```

## 112.3 Migration file: `0001_extensions.sql`

```sql

BEGIN;

CREATE EXTENSION IF NOT EXISTS pgcrypto;

CREATE EXTENSION IF NOT EXISTS citext;

COMMIT;

```

## 112.4 Migration file: `0002_core_identity.sql`

```sql

BEGIN;

CREATE TABLE IF NOT EXISTS persons (

person_id text PRIMARY KEY,

external_subject_ref text UNIQUE,

email citext,

display_name text NOT NULL,

timezone text NOT NULL DEFAULT 'UTC',

locale text NOT NULL DEFAULT 'en-GB',

status text NOT NULL DEFAULT 'active',

metadata jsonb NOT NULL DEFAULT '{}'::jsonb,

created_at timestamptz NOT NULL DEFAULT now(),

updated_at timestamptz NOT NULL DEFAULT now(),

CONSTRAINT persons_status_chk CHECK (status IN
('active','paused','disabled'))

);

CREATE TABLE IF NOT EXISTS estates (

estate_id text PRIMARY KEY,

estate_name text NOT NULL,

founder_person_id text NOT NULL REFERENCES persons(person_id),

estate_mode text NOT NULL DEFAULT 'founder_live',

timezone text NOT NULL DEFAULT 'UTC',

metadata jsonb NOT NULL DEFAULT '{}'::jsonb,

created_at timestamptz NOT NULL DEFAULT now(),

updated_at timestamptz NOT NULL DEFAULT now(),

CONSTRAINT estates_mode_chk CHECK (estate_mode IN
('founder_live','operator_mode','pilot_mode','simulation_mode'))

);

CREATE TABLE IF NOT EXISTS estate_memberships (

estate_membership_id text PRIMARY KEY,

estate_id text NOT NULL REFERENCES estates(estate_id) ON DELETE CASCADE,

person_id text NOT NULL REFERENCES persons(person_id) ON DELETE CASCADE,

role text NOT NULL,

permission_profile text NOT NULL,

is_primary boolean NOT NULL DEFAULT false,

metadata jsonb NOT NULL DEFAULT '{}'::jsonb,

created_at timestamptz NOT NULL DEFAULT now(),

updated_at timestamptz NOT NULL DEFAULT now(),

UNIQUE (estate_id, person_id, role)

);

CREATE INDEX IF NOT EXISTS idx_estates_founder_person_id

ON estates(founder_person_id);

CREATE INDEX IF NOT EXISTS idx_estate_memberships_estate_id

ON estate_memberships(estate_id);

CREATE INDEX IF NOT EXISTS idx_estate_memberships_person_id

ON estate_memberships(person_id);

COMMIT;

```

## 112.5 Migration file: `0003_state_and_board.sql`

```sql

BEGIN;

CREATE TABLE IF NOT EXISTS state_snapshots (

state_snapshot_id text PRIMARY KEY,

estate_id text NOT NULL REFERENCES estates(estate_id) ON DELETE CASCADE,

person_id text NOT NULL REFERENCES persons(person_id) ON DELETE CASCADE,

snapshot_at timestamptz NOT NULL,

readiness_band text NOT NULL,

readiness_score numeric(5,4) NOT NULL,

recovery_score numeric(5,4),

friction_score numeric(5,4),

overload_risk_score numeric(5,4),

confidence_score numeric(5,4) NOT NULL,

source_signals jsonb NOT NULL DEFAULT '[]'::jsonb,

explanation_summary text,

metadata jsonb NOT NULL DEFAULT '{}'::jsonb,

created_at timestamptz NOT NULL DEFAULT now(),

CONSTRAINT state_snapshots_band_chk CHECK (readiness_band IN
('red','amber','green','blue')),

CONSTRAINT state_snapshots_confidence_chk CHECK (confidence_score >= 0
AND confidence_score \<= 1)

);

CREATE TABLE IF NOT EXISTS morning_boards (

morning_board_id text PRIMARY KEY,

estate_id text NOT NULL REFERENCES estates(estate_id) ON DELETE CASCADE,

person_id text NOT NULL REFERENCES persons(person_id) ON DELETE CASCADE,

state_snapshot_id text REFERENCES state_snapshots(state_snapshot_id),

board_date date NOT NULL,

generated_at timestamptz NOT NULL,

board_mode text NOT NULL DEFAULT 'default',

board_status text NOT NULL DEFAULT 'ready',

completeness_score numeric(5,4) NOT NULL DEFAULT 1,

summary_text text,

workflow_run_id text,

payload jsonb NOT NULL DEFAULT '{}'::jsonb,

created_at timestamptz NOT NULL DEFAULT now(),

updated_at timestamptz NOT NULL DEFAULT now(),

UNIQUE (estate_id, person_id, board_date)

);

CREATE TABLE IF NOT EXISTS recommended_moves (

recommended_move_id text PRIMARY KEY,

morning_board_id text NOT NULL REFERENCES
morning_boards(morning_board_id) ON DELETE CASCADE,

estate_id text NOT NULL REFERENCES estates(estate_id) ON DELETE CASCADE,

priority_rank integer NOT NULL,

title text NOT NULL,

rationale text,

action_type text NOT NULL,

confidence_score numeric(5,4) NOT NULL,

requires_approval boolean NOT NULL DEFAULT false,

source_ref_type text,

source_ref_id text,

move_status text NOT NULL DEFAULT 'proposed',

metadata jsonb NOT NULL DEFAULT '{}'::jsonb,

created_at timestamptz NOT NULL DEFAULT now(),

updated_at timestamptz NOT NULL DEFAULT now(),

UNIQUE (morning_board_id, priority_rank)

);

CREATE INDEX IF NOT EXISTS idx_state_snapshots_estate_snapshot_at

ON state_snapshots(estate_id, snapshot_at DESC);

CREATE INDEX IF NOT EXISTS idx_morning_boards_estate_date

ON morning_boards(estate_id, board_date DESC);

CREATE INDEX IF NOT EXISTS idx_recommended_moves_board_rank

ON recommended_moves(morning_board_id, priority_rank ASC);

COMMIT;

```

## 112.6 Migration file: `0004_approvals_and_evidence.sql`

```sql

BEGIN;

CREATE TABLE IF NOT EXISTS approval_requests (

approval_request_id text PRIMARY KEY,

estate_id text NOT NULL REFERENCES estates(estate_id) ON DELETE CASCADE,

requested_by_agent text NOT NULL,

requested_action_type text NOT NULL,

risk_tier integer NOT NULL,

autonomy_class integer NOT NULL,

decision_status text NOT NULL DEFAULT 'pending',

recommended_decision text,

spend_limit_amount numeric(12,2),

spend_currency text,

expires_at timestamptz,

decided_at timestamptz,

decided_by_person_id text REFERENCES persons(person_id),

correlation_id text,

rationale text,

payload jsonb NOT NULL DEFAULT '{}'::jsonb,

created_at timestamptz NOT NULL DEFAULT now(),

updated_at timestamptz NOT NULL DEFAULT now(),

CONSTRAINT approval_requests_status_chk CHECK (decision_status IN
('pending','approved','rejected','snoozed','expired')),

CONSTRAINT approval_requests_risk_chk CHECK (risk_tier BETWEEN 1 AND 5),

CONSTRAINT approval_requests_autonomy_chk CHECK (autonomy_class BETWEEN
1 AND 5)

);

CREATE TABLE IF NOT EXISTS evidence_refs (

evidence_ref_id text PRIMARY KEY,

estate_id text NOT NULL REFERENCES estates(estate_id) ON DELETE CASCADE,

source_type text NOT NULL,

source_uri text,

source_title text,

citation_text text,

provenance_payload jsonb NOT NULL DEFAULT '{}'::jsonb,

created_at timestamptz NOT NULL DEFAULT now()

);

CREATE TABLE IF NOT EXISTS approval_request_evidence_refs (

approval_request_id text NOT NULL REFERENCES
approval_requests(approval_request_id) ON DELETE CASCADE,

evidence_ref_id text NOT NULL REFERENCES evidence_refs(evidence_ref_id)
ON DELETE CASCADE,

link_role text NOT NULL DEFAULT 'supporting',

created_at timestamptz NOT NULL DEFAULT now(),

PRIMARY KEY (approval_request_id, evidence_ref_id)

);

CREATE INDEX IF NOT EXISTS idx_approval_requests_estate_status_created

ON approval_requests(estate_id, decision_status, created_at DESC);

CREATE INDEX IF NOT EXISTS idx_approval_requests_correlation_id

ON approval_requests(correlation_id);

CREATE INDEX IF NOT EXISTS idx_evidence_refs_estate_created

ON evidence_refs(estate_id, created_at DESC);

COMMIT;

```

## 112.7 Migration file: `0005_memory_spine.sql`

```sql

BEGIN;

CREATE TABLE IF NOT EXISTS memory_documents (

memory_document_id text PRIMARY KEY,

estate_id text NOT NULL REFERENCES estates(estate_id) ON DELETE CASCADE,

document_type text NOT NULL,

title text NOT NULL,

source_uri text,

source_hash text,

ingestion_status text NOT NULL DEFAULT 'ready',

provenance_payload jsonb NOT NULL DEFAULT '{}'::jsonb,

metadata jsonb NOT NULL DEFAULT '{}'::jsonb,

created_at timestamptz NOT NULL DEFAULT now(),

updated_at timestamptz NOT NULL DEFAULT now()

);

CREATE TABLE IF NOT EXISTS memory_chunks (

memory_chunk_id text PRIMARY KEY,

memory_document_id text NOT NULL REFERENCES
memory_documents(memory_document_id) ON DELETE CASCADE,

estate_id text NOT NULL REFERENCES estates(estate_id) ON DELETE CASCADE,

chunk_index integer NOT NULL,

content_text text NOT NULL,

token_count integer,

embedding_status text NOT NULL DEFAULT 'pending',

metadata jsonb NOT NULL DEFAULT '{}'::jsonb,

created_at timestamptz NOT NULL DEFAULT now(),

UNIQUE (memory_document_id, chunk_index)

);

CREATE TABLE IF NOT EXISTS memory_links (

memory_link_id text PRIMARY KEY,

estate_id text NOT NULL REFERENCES estates(estate_id) ON DELETE CASCADE,

source_memory_chunk_id text NOT NULL REFERENCES
memory_chunks(memory_chunk_id) ON DELETE CASCADE,

target_ref_type text NOT NULL,

target_ref_id text NOT NULL,

link_type text NOT NULL,

confidence_score numeric(5,4),

metadata jsonb NOT NULL DEFAULT '{}'::jsonb,

created_at timestamptz NOT NULL DEFAULT now()

);

CREATE INDEX IF NOT EXISTS idx_memory_documents_estate_created

ON memory_documents(estate_id, created_at DESC);

CREATE INDEX IF NOT EXISTS idx_memory_chunks_estate_document

ON memory_chunks(estate_id, memory_document_id);

CREATE INDEX IF NOT EXISTS idx_memory_links_estate_target

ON memory_links(estate_id, target_ref_type, target_ref_id);

COMMIT;

```

## 112.8 Migration file: `0006_opportunities_and_assets.sql`

```sql

BEGIN;

CREATE TABLE IF NOT EXISTS opportunities (

opportunity_id text PRIMARY KEY,

estate_id text NOT NULL REFERENCES estates(estate_id) ON DELETE CASCADE,

opportunity_domain text NOT NULL,

title text NOT NULL,

status text NOT NULL DEFAULT 'captured',

owner_agent text NOT NULL,

hypothesis text,

demand_score numeric(5,4),

supply_gap_score numeric(5,4),

monetization_score numeric(5,4),

build_complexity_score numeric(5,4),

confidence_score numeric(5,4),

source_signals jsonb NOT NULL DEFAULT '[]'::jsonb,

metadata jsonb NOT NULL DEFAULT '{}'::jsonb,

created_at timestamptz NOT NULL DEFAULT now(),

updated_at timestamptz NOT NULL DEFAULT now(),

CONSTRAINT opportunities_domain_chk CHECK (opportunity_domain IN
('content','app','market','product','estate','capital'))

);

CREATE TABLE IF NOT EXISTS assets (

asset_id text PRIMARY KEY,

estate_id text NOT NULL REFERENCES estates(estate_id) ON DELETE CASCADE,

source_opportunity_id text REFERENCES opportunities(opportunity_id),

asset_type text NOT NULL,

status text NOT NULL DEFAULT 'draft',

title text,

preview_url text,

approval_request_id text REFERENCES
approval_requests(approval_request_id),

production_metadata jsonb NOT NULL DEFAULT '{}'::jsonb,

created_at timestamptz NOT NULL DEFAULT now(),

updated_at timestamptz NOT NULL DEFAULT now()

);

CREATE INDEX IF NOT EXISTS idx_opportunities_estate_status_created

ON opportunities(estate_id, status, created_at DESC);

CREATE INDEX IF NOT EXISTS idx_assets_estate_status_created

ON assets(estate_id, status, created_at DESC);

CREATE INDEX IF NOT EXISTS idx_assets_source_opportunity_id

ON assets(source_opportunity_id);

COMMIT;

```

## 112.9 Migration file: `0007_workflow_runtime.sql`

```sql

BEGIN;

CREATE TABLE IF NOT EXISTS workflow_runs (

workflow_run_id text PRIMARY KEY,

estate_id text NOT NULL REFERENCES estates(estate_id) ON DELETE CASCADE,

workflow_type text NOT NULL,

workflow_status text NOT NULL,

trigger_type text NOT NULL,

correlation_id text,

started_at timestamptz NOT NULL,

completed_at timestamptz,

failure_code text,

failure_summary text,

input_payload jsonb NOT NULL DEFAULT '{}'::jsonb,

output_payload jsonb NOT NULL DEFAULT '{}'::jsonb,

created_at timestamptz NOT NULL DEFAULT now(),

updated_at timestamptz NOT NULL DEFAULT now()

);

CREATE TABLE IF NOT EXISTS workflow_steps (

workflow_step_id text PRIMARY KEY,

workflow_run_id text NOT NULL REFERENCES workflow_runs(workflow_run_id)
ON DELETE CASCADE,

step_name text NOT NULL,

step_status text NOT NULL,

started_at timestamptz,

completed_at timestamptz,

worker_ref text,

input_payload jsonb NOT NULL DEFAULT '{}'::jsonb,

output_payload jsonb NOT NULL DEFAULT '{}'::jsonb,

error_payload jsonb NOT NULL DEFAULT '{}'::jsonb,

created_at timestamptz NOT NULL DEFAULT now()

);

CREATE INDEX IF NOT EXISTS idx_workflow_runs_estate_started

ON workflow_runs(estate_id, started_at DESC);

CREATE INDEX IF NOT EXISTS idx_workflow_runs_status_started

ON workflow_runs(workflow_status, started_at DESC);

CREATE INDEX IF NOT EXISTS idx_workflow_steps_run_created

ON workflow_steps(workflow_run_id, created_at ASC);

COMMIT;

```

## 112.10 Migration file: `0008_outbox_and_domain_events.sql`

```sql

BEGIN;

CREATE TABLE IF NOT EXISTS domain_events (

domain_event_id text PRIMARY KEY,

estate_id text NOT NULL REFERENCES estates(estate_id) ON DELETE CASCADE,

aggregate_type text NOT NULL,

aggregate_id text NOT NULL,

event_type text NOT NULL,

event_version integer NOT NULL DEFAULT 1,

correlation_id text,

causation_id text,

event_payload jsonb NOT NULL,

occurred_at timestamptz NOT NULL,

created_at timestamptz NOT NULL DEFAULT now()

);

CREATE TABLE IF NOT EXISTS outbox_events (

outbox_event_id text PRIMARY KEY,

estate_id text NOT NULL REFERENCES estates(estate_id) ON DELETE CASCADE,

topic_name text NOT NULL,

event_key text NOT NULL,

event_payload jsonb NOT NULL,

publish_status text NOT NULL DEFAULT 'pending',

published_at timestamptz,

retry_count integer NOT NULL DEFAULT 0,

next_retry_at timestamptz,

created_at timestamptz NOT NULL DEFAULT now(),

updated_at timestamptz NOT NULL DEFAULT now(),

CONSTRAINT outbox_events_publish_status_chk CHECK (publish_status IN
('pending','published','failed','dead_lettered'))

);

CREATE INDEX IF NOT EXISTS idx_domain_events_aggregate

ON domain_events(aggregate_type, aggregate_id, occurred_at DESC);

CREATE INDEX IF NOT EXISTS idx_outbox_events_status_next_retry

ON outbox_events(publish_status, next_retry_at ASC NULLS FIRST,
created_at ASC);

COMMIT;

```

## 112.11 Seed file: `0001_reference_seed.sql`

```sql

BEGIN;

INSERT INTO persons (person_id, email, display_name, timezone, locale,
status)

VALUES

('person_founder_001', 'founder@example.com', 'Founder',
'Europe/London', 'en-GB', 'active')

ON CONFLICT (person_id) DO NOTHING;

INSERT INTO estates (estate_id, estate_name, founder_person_id,
estate_mode, timezone)

VALUES

('estate_hotel_nexus_001', 'Hotel Nexus Estate', 'person_founder_001',
'founder_live', 'Europe/London')

ON CONFLICT (estate_id) DO NOTHING;

INSERT INTO estate_memberships (estate_membership_id, estate_id,
person_id, role, permission_profile, is_primary)

VALUES

('membership_001', 'estate_hotel_nexus_001', 'person_founder_001',
'founder', 'founder_full', true)

ON CONFLICT (estate_membership_id) DO NOTHING;

COMMIT;

```

## 112.12 Seed file: `0002_demo_founder_estate.sql`

```sql

BEGIN;

INSERT INTO state_snapshots (

state_snapshot_id, estate_id, person_id, snapshot_at, readiness_band,

readiness_score, recovery_score, friction_score, overload_risk_score,

confidence_score, source_signals, explanation_summary

) VALUES (

'state_2026_06_08_0700',

'estate_hotel_nexus_001',

'person_founder_001',

'2026-06-08T07:00:00Z',

'amber',

0.6200,

0.4800,

0.5600,

0.3400,

0.8100,

'["sleep_proxy_low","calendar_density_high","focus_window_available"]'::jsonb,

'Readiness is moderate. Protect focus blocks and avoid avoidable context
switching in the first two hours.'

)

ON CONFLICT (state_snapshot_id) DO NOTHING;

INSERT INTO morning_boards (

morning_board_id, estate_id, person_id, state_snapshot_id, board_date,

generated_at, board_mode, board_status, completeness_score,
summary_text, payload

) VALUES (

'board_2026_06_08',

'estate_hotel_nexus_001',

'person_founder_001',

'state_2026_06_08_0700',

'2026-06-08',

'2026-06-08T07:05:00Z',

'default',

'ready',

0.9600,

'Today should begin with one approval decision, one protected build
block, and one deferred noncritical task.',

'{"partial_state": false, "critical_alerts": []}'::jsonb

)

ON CONFLICT (morning_board_id) DO NOTHING;

INSERT INTO recommended_moves (

recommended_move_id, morning_board_id, estate_id, priority_rank, title,

rationale, action_type, confidence_score, requires_approval,
source_ref_type, source_ref_id, move_status

) VALUES (

'move_2026_06_08_01',

'board_2026_06_08',

'estate_hotel_nexus_001',

1,

'Approve the strongest overnight content packet and protect a 90-minute
build window',

'The system detected sufficient evidence and moderate readiness, but
approval is still required before distribution.',

'approve_then_focus',

0.8400,

true,

'workflow_run',

'wf_night_shift_2026_06_08',

'proposed'

)

ON CONFLICT (recommended_move_id) DO NOTHING;

COMMIT;

```

## 112.13 Seed file: `0003_demo_board_and_approval.sql`

```sql

BEGIN;

INSERT INTO evidence_refs (

evidence_ref_id, estate_id, source_type, source_uri, source_title,
citation_text, provenance_payload

) VALUES (

'evidence_001',

'estate_hotel_nexus_001',

'internal_asset',

'https://example.com/assets/preview/video-001',

'Overnight Video Preview',

'Preview output generated during Night Shift with source-grounded script
references.',

'{"workflow_run_id":"wf_night_shift_2026_06_08","source_grounded":true}'::jsonb

)

ON CONFLICT (evidence_ref_id) DO NOTHING;

INSERT INTO approval_requests (

approval_request_id, estate_id, requested_by_agent,
requested_action_type,

risk_tier, autonomy_class, decision_status, recommended_decision,

spend_limit_amount, spend_currency, expires_at, correlation_id,
rationale, payload

) VALUES (

'approval_2026_06_08_001',

'estate_hotel_nexus_001',

'studio_head',

'publish_video',

3,

4,

'pending',

'approve',

25.00,

'GBP',

'2026-06-08T18:00:00Z',

'corr_overnight_packet_001',

'Video packet is ready for founder review with bounded spend and
rollback path.',

'{"asset_id":"asset_video_001","target_channel":"youtube","smoke_test_only":false}'::jsonb

)

ON CONFLICT (approval_request_id) DO NOTHING;

INSERT INTO approval_request_evidence_refs (approval_request_id,
evidence_ref_id, link_role)

VALUES ('approval_2026_06_08_001', 'evidence_001', 'primary')

ON CONFLICT DO NOTHING;

INSERT INTO opportunities (

opportunity_id, estate_id, opportunity_domain, title, status,
owner_agent,

hypothesis, demand_score, supply_gap_score, monetization_score,
build_complexity_score, confidence_score

) VALUES (

'opp_001',

'estate_hotel_nexus_001',

'content',

'Hotel-tech founder workflow breakdown series',

'promoted',

'revenue_director',

'Audience demand appears strong for transparent system-building content
with operational depth.',

0.7900,

0.6600,

0.7200,

0.4300,

0.7600

)

ON CONFLICT (opportunity_id) DO NOTHING;

INSERT INTO assets (

asset_id, estate_id, source_opportunity_id, asset_type, status, title,
preview_url, approval_request_id, production_metadata

) VALUES (

'asset_video_001',

'estate_hotel_nexus_001',

'opp_001',

'video',

'draft_ready',

'Founder workflow breakdown draft',

'https://example.com/assets/preview/video-001',

'approval_2026_06_08_001',

'{"provider":"heygen","variant_count":2}'::jsonb

)

ON CONFLICT (asset_id) DO NOTHING;

INSERT INTO workflow_runs (

workflow_run_id, estate_id, workflow_type, workflow_status,
trigger_type,

correlation_id, started_at, completed_at, input_payload, output_payload

) VALUES (

'wf_night_shift_2026_06_08',

'estate_hotel_nexus_001',

'night_shift',

'completed',

'scheduled',

'corr_overnight_packet_001',

'2026-06-08T01:00:00Z',

'2026-06-08T06:58:00Z',

'{"schedule":"nightly"}'::jsonb,

'{"board_id":"board_2026_06_08","approval_count":1,"asset_count":1}'::jsonb

)

ON CONFLICT (workflow_run_id) DO NOTHING;

INSERT INTO workflow_steps (

workflow_step_id, workflow_run_id, step_name, step_status, started_at,
completed_at, worker_ref, input_payload, output_payload

) VALUES

(

'wf_step_001',

'wf_night_shift_2026_06_08',

'collect_signals',

'completed',

'2026-06-08T01:00:00Z',

'2026-06-08T01:20:00Z',

'worker-signals-1',

'{}'::jsonb,

'{"signal_count":12}'::jsonb

),

(

'wf_step_002',

'wf_night_shift_2026_06_08',

'generate_board',

'completed',

'2026-06-08T06:30:00Z',

'2026-06-08T06:45:00Z',

'worker-board-1',

'{"state_snapshot_id":"state_2026_06_08_0700"}'::jsonb,

'{"board_id":"board_2026_06_08"}'::jsonb

)

ON CONFLICT (workflow_step_id) DO NOTHING;

INSERT INTO domain_events (

domain_event_id, estate_id, aggregate_type, aggregate_id, event_type,
event_version,

correlation_id, event_payload, occurred_at

) VALUES (

'evt_board_generated_001',

'estate_hotel_nexus_001',

'morning_board',

'board_2026_06_08',

'board.generated',

1,

'corr_overnight_packet_001',

'{"board_id":"board_2026_06_08","approval_count":1}'::jsonb,

'2026-06-08T06:45:00Z'

)

ON CONFLICT (domain_event_id) DO NOTHING;

INSERT INTO outbox_events (

outbox_event_id, estate_id, topic_name, event_key, event_payload,
publish_status

) VALUES (

'outbox_evt_001',

'estate_hotel_nexus_001',

'hotel-nexus.workflow.board-generated',

'board_2026_06_08',

'{"domain_event_id":"evt_board_generated_001"}'::jsonb,

'pending'

)

ON CONFLICT (outbox_event_id) DO NOTHING;

COMMIT;

```

## 112.14 Smoke verification file: `0001_schema_smoke_checks.sql`

```sql

SELECT 'persons' AS table_name, count(*) AS row_count FROM persons

UNION ALL

SELECT 'estates', count(*) FROM estates

UNION ALL

SELECT 'state_snapshots', count(*) FROM state_snapshots

UNION ALL

SELECT 'morning_boards', count(*) FROM morning_boards

UNION ALL

SELECT 'approval_requests', count(*) FROM approval_requests

UNION ALL

SELECT 'workflow_runs', count(*) FROM workflow_runs;

SELECT mb.morning_board_id, mb.board_date, rm.title AS top_move,
ar.decision_status

FROM morning_boards mb

LEFT JOIN recommended_moves rm

ON rm.morning_board_id = mb.morning_board_id AND rm.priority_rank = 1

LEFT JOIN approval_requests ar

ON ar.approval_request_id = 'approval_2026_06_08_001'

WHERE mb.morning_board_id = 'board_2026_06_08';

SELECT wr.workflow_run_id, wr.workflow_status,
count(ws.workflow_step_id) AS step_count

FROM workflow_runs wr

LEFT JOIN workflow_steps ws ON ws.workflow_run_id = wr.workflow_run_id

WHERE wr.workflow_run_id = 'wf_night_shift_2026_06_08'

GROUP BY wr.workflow_run_id, wr.workflow_status;

```

## 112.15 Migration execution sequence

Recommended lower-environment execution order:

1. run `0001_extensions.sql`,

2. run migrations `0002` through `0008` in order,

3. apply `0001_reference_seed.sql`,

4. apply `0002_demo_founder_estate.sql`,

5. apply `0003_demo_board_and_approval.sql`,

6. run `0001_schema_smoke_checks.sql`,

7. validate founder board rendering and approval queue load,

8. then promote the bundle to shared-dev CI and staging rehearsal.

## 112.16 Practical migration review rules

Every migration PR should explicitly state:

- affected tables,

- expected lock profile,

- backfill expectations,

- rollback stance,

- contract impact,

- seed-data impact,

- and whether founder-visible read models are altered.

If a migration changes anything used by Morning Board, approvals,
evidence, or workflow trace surfaces, the PR must include updated
example payloads and a lower-environment screenshot or query proof.

## 112.17 Acceptance criteria

This appendix is successful when the team can:

- copy the files into the repo with minimal editing,

- run them end-to-end on PostgreSQL,

- seed a realistic founder demo estate,

- render at least one meaningful board and approval queue state,

- inspect workflow traces and event/outbox rows,

- and use the bundle as the authoritative starting point for migration
set one.

---

# 113. Appendix BQ: Execution Pack v17 — Concrete Dashboard
Specification Pack

This appendix converts the earlier dashboard philosophy into a
**dashboard build pack** that an operator or engineer can implement
directly in Grafana, Datadog, or an equivalent stack. It focuses on
founder trust, service isolation, release awareness, and degraded-mode
visibility.

## 113.1 Recommended observability file layout

```text

observability/

dashboards/

founder-trust-overview.yaml

workflow-service.yaml

approval-service.yaml

memory-service.yaml

api-gateway.yaml

founder-web.yaml

alerts/

founder-critical.yaml

workflow-service.yaml

approval-service.yaml

memory-service.yaml

release-regression.yaml

runbook-links/

service-owner-map.yaml

```

## 113.2 Dashboard build principles

Each dashboard should:

- declare a named owner,

- state the founder-visible risk if the dashboard goes red,

- distinguish outage from degraded operation,

- link directly to runbooks,

- and expose the last deploy version and current environment.

## 113.3 Concrete dashboard spec: Founder Trust Overview

Recommended slug: `founder-trust-overview`

**Purpose**: provide a single page that answers whether the founder
can safely use the estate right now.

**Top-row stat panels**:

- Board freshness minutes

- Morning board availability success rate (30d)

- Pending approvals count

- Approval action success rate (24h)

- Evidence drawer success rate (24h)

- Founder-web p95 load latency

- Open P1 founder incidents

- Current mode badge: `normal | partial | degraded`

**Recommended panels**:

1. `Board freshness by estate` — time series

2. `Board generation success before wake window` — single stat +
sparkline

3. `Founder critical route latency` — heatmap for `/boards/today`,
`/approvals`, `/approvals/{id}/decision`

4. `Approval queue backlog` — bar chart by risk tier

5. `Evidence resolution failure rate` — time series

6. `Top founder-visible failing workflows` — table

7. `Recent deploy markers` — annotations layer

8. `Partial-mode banners triggered` — daily count

**Example metric contract**:

```yaml

dashboard: founder-trust-overview

owner: platform_oncall

runbook: runbooks/services/founder-web.md

variables:

- environment

- estate_id

- service_version

panels:

- id: board_freshness_minutes

type: stat

query: max(now() -
morning_board_latest_success_timestamp{environment="\$environment"}) /
60

warning: "> 45"

critical: "> 90"

- id: approval_action_success_rate

type: stat

query: sum(rate(approval_decision_success_total[24h])) /
sum(rate(approval_decision_attempt_total[24h]))

warning: "\< 0.995"

critical: "\< 0.98"

```

## 113.4 Concrete dashboard spec: Workflow Service

Recommended slug: `workflow-service-operational`

**Primary questions**:

- Are Night Shift and board-generation workflows completing on time?

- Are any workflow classes backing up or dead-lettering?

- Are retries increasing without resolution?

**Panels**:

- workflow runs started/completed/failed by workflow type,

- workflow completion latency p50/p95,

- stuck workflow count > 15m,

- retry count distribution,

- DLQ enqueue count by workflow type,

- Night Shift completion timestamp versus wake window,

- top failure codes table,

- workflow step duration breakdown.

**Alert rules**:

```yaml

alerts:

- name: workflow_morning_board_missed_window

severity: P1

expr: time() -
workflow_last_success_timestamp{workflow_type="morning_board",environment="founder-prod"}
> 2700

for: 10m

route_to: platform_oncall

founder_impact: "Today's board may be stale or absent"

runbook:
runbooks/services/workflow-service.md#morning-board-missed-window

- name: workflow_dlq_growth

severity: P2

expr: increase(workflow_dlq_enqueued_total[30m]) > 5

for: 5m

route_to: workflow_owner

founder_impact: "Critical workflows may not recover automatically"

```

## 113.5 Concrete dashboard spec: Approval Service

Recommended slug: `approval-service-trust`

**Primary questions**:

- Can the founder load, review, and decide approvals safely?

- Are approval decisions persisting and propagating to dependent
workflows?

**Panels**:

- approval queue size by status,

- approval create/list/resolve success rate,

- decision persistence lag p95,

- expiring approvals in next 6 hours,

- approvals missing evidence refs,

- approval actions by risk tier,

- approval correlation with downstream workflow resume success.

**Example data checks**:

```yaml

panels:

- id: approvals_missing_evidence

type: table

query: |

SELECT approval_request_id, requested_action_type, created_at

FROM approval_requests

WHERE decision_status = 'pending'

AND approval_request_id NOT IN (

SELECT approval_request_id FROM approval_request_evidence_refs

)

ORDER BY created_at DESC

LIMIT 25;

- id: decision_persistence_lag_p95

type: stat

query: histogram_quantile(0.95,
sum(rate(approval_decision_persistence_seconds_bucket[15m])) by (le))

```

## 113.6 Concrete dashboard spec: Memory Service

Recommended slug: `memory-service-grounding`

**Primary questions**:

- Are retrievals fast enough for founder surfaces?

- Is provenance preserved?

- Are ingestion and chunking pipelines healthy?

**Panels**:

- retrieval success rate,

- retrieval p95 latency,

- provenance present rate,

- ingestion queue backlog,

- chunk embedding pending count,

- document ingestion failures by source type,

- source-grounded answer ratio,

- stale document age distribution.

**Alert examples**:

```yaml

alerts:

- name: memory_provenance_drop

severity: P1

expr: avg_over_time(memory_retrieval_provenance_present_ratio[30m]) \<
0.97

for: 15m

route_to: memory_owner

founder_impact: "Evidence and citation trust is degraded"

- name: memory_latency_regression

severity: P2

expr: histogram_quantile(0.95,
sum(rate(memory_retrieval_latency_seconds_bucket[15m])) by (le)) >
1.5

for: 15m

route_to: platform_oncall

founder_impact: "Board details and evidence views feel slow"

```

## 113.7 Concrete dashboard spec: API Gateway and Founder Web

Recommended slugs:

- `api-gateway-core-routes`

- `founder-web-experience`

**API Gateway panels**:

- request rate by route,

- 4xx/5xx ratio by route,

- p95 latency for founder-critical endpoints,

- auth/session failures,

- upstream dependency failures,

- release version annotations.

**Founder Web panels**:

- page load success rate,

- first-contentful-paint and interaction-ready latency,

- board render failures,

- approval drawer render failures,

- partial banner render count,

- client-side error rate by screen.

**Alert examples**:

```yaml

alerts:

- name: founder_web_board_render_failures

severity: P1

expr:
increase(founder_web_board_render_failed_total{environment="founder-prod"}[15m])
> 3

for: 5m

route_to: frontend_owner

founder_impact: "Founder home screen may be unusable"

- name: api_gateway_boards_route_latency

severity: P2

expr: histogram_quantile(0.95,
sum(rate(http_request_duration_seconds_bucket{route="/boards/today",environment="founder-prod"}[15m]))
by (le)) > 1.2

for: 15m

route_to: api_gateway_owner

founder_impact: "Morning board feels sluggish and trust erodes"

```

## 113.8 Concrete dashboard spec: Opportunities, Assets, and
Notifications

Recommended slugs:

- `opportunity-service-signal-health`

- `asset-foundry-output-health`

- `notification-service-delivery`

**Opportunity Service panels**:

- source signal ingest count,

- scoring pipeline success rate,

- promoted opportunities per day,

- stale opportunity backlog,

- scoring drift by domain.

**Asset Foundry panels**:

- render success rate by provider,

- render queue backlog,

- preview generation latency,

- asset approval attachment coverage,

- failed output retry rate.

**Notification Service panels**:

- approval notification delivery success,

- duplicate notification count,

- wrong-channel routing count,

- digest generation success,

- delivery latency by channel.

## 113.9 Concrete dashboard spec: Database, Queue, and Outbox Layer

Recommended slug: `estate-data-plane`

**Purpose**: make the hidden system spine visible.

**Panels**:

- PostgreSQL CPU, connections, slow queries, lock waits,

- table growth for `morning_boards`, `approval_requests`,
`workflow_runs`, `outbox_events`,

- outbox pending count,

- outbox publish lag,

- queue depth by topic,

- dead-letter queue size,

- consumer lag by group,

- migration version currently applied.

**Example SQL panels**:

```yaml

panels:

- id: outbox_pending_count

type: stat

query: |

SELECT count(*)

FROM outbox_events

WHERE publish_status = 'pending';

- id: workflow_run_growth_24h

type: stat

query: |

SELECT count(*)

FROM workflow_runs

WHERE created_at >= now() - interval '24 hours';

```

## 113.10 Release regression dashboard

Recommended slug: `release-regression-pack`

This dashboard should automatically scope to the last deploy window and
answer:

- what changed,

- which founder-critical metrics moved,

- whether error rates increased,

- whether smoke-test results passed,

- and whether rollback should be considered.

**Required panels**:

- deploy timeline annotations,

- before/after comparison for board load success,

- before/after comparison for approval decision success,

- workflow failure delta,

- client error delta,

- top new alert types since deploy,

- smoke-test artifact links.

## 113.11 Dashboard metadata contract example

```yaml

name: workflow-service-operational

title: Workflow Service Operational

owner: platform_oncall

secondary_owner: workflow_service_owner

environment_scope:

- shared-dev

- staging

- founder-prod

runbook: runbooks/services/workflow-service.md

tags:

- workflow

- founder-critical

- night-shift

refresh_interval: 30s

annotations:

- deploys

- incidents

- feature_flags

variables:

- name: environment

default: founder-prod

- name: workflow_type

default: morning_board

```

## 113.12 Alert routing starter file

```yaml

routes:

P1:

notify:

- oncall_primary

- service_owner

- founder_liaison

response_sla: 15m

P2:

notify:

- service_owner

- platform_oncall

response_sla: 1h

P3:

notify:

- service_owner

- backlog_triage

response_sla: next_business_day

```

## 113.13 Minimum founder-critical alerts

The following alerts should exist before founder-prod is treated as
dependable:

- board missing or stale,

- approval queue unavailable,

- approval decision persistence failure,

- evidence resolution failure spike,

- workflow DLQ growth,

- founder-web board render failure spike,

- API route latency breach on `/boards/today`,

- outbox publish lag beyond threshold,

- and smoke-test failure after deploy.

## 113.14 Dashboard implementation sequence

Recommended implementation order:

1. founder-trust-overview,

2. workflow-service-operational,

3. approval-service-trust,

4. api-gateway-core-routes,

5. founder-web-experience,

6. memory-service-grounding,

7. estate-data-plane,

8. release-regression-pack.

This order mirrors the founder trust chain rather than raw
infrastructure hierarchy.

## 113.15 Acceptance criteria

This appendix is successful when the team can:

- create dashboards directly from these specs,

- attach owner and runbook routing to each alert,

- observe release regressions within one deploy cycle,

- distinguish outage, degraded, and partial states clearly,

- and use the founder-trust overview as a daily operational surface.

---

## Closing Position

Hotel Nexus Estate should now be treated as an evolving **human estate
operating system**, not a collection of hacks or disconnected agents.

It is the convergence of:

- state intelligence,

- memory,

- executive scaffolding,

- economic generation,

- ambient sensing,

- automation,

- and future embodiment.

Technical decisions should be measured against one question:

**Does this make the estate more capable of sensing, thinking, acting,
creating, and evolving on behalf of the human—while remaining
permissioned, evidence-aware, and friction-reducing?**

If yes, it belongs in Hotel Nexus. If not, it is noise.
