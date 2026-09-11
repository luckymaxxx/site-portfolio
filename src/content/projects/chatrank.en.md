---
title: 'ChatRank'
tagline: 'An AI search optimisation platform (GEO/AEO) for brands and agencies'
lang: en
slug: 'chatrank'
featured: true
order: 2
draft: false

role: 'Full-Stack Engineer'
periodStart: '2026-06'
periodEnd: '2026-08'
status: 'integrations behind feature flags'
domain: 'AI search optimization (GEO / AEO)'
teamSize: 2
cover: null
links: []

lede: 'ChatRank tracks how often a brand gets recommended by ChatGPT, Perplexity, Claude and Google AI Overviews, and helps write the kind of content those models cite. A monorepo on Postgres with Rust crates compiled to WASM. I was on the project for **six weeks and owned one end-to-end workstream — two-way content sync with the customer CMS**: three connectors (Payload, EmDash, Shopify), a canonical text format in Rust, and the sync orchestrator.'

figures:
  - label: 'PRs across 3 stacks'
    value: '14'
    note: '8 merged, 5 in flight as of 11 Sep 2026'
  - label: 'Share of PRs'
    value: '8 of 9'
    note: 'of every pull request merged into next between June and August 2026'
  - label: 'Rust crate'
    value: '42%'
    note: '2,134 of 5,042 lines of rich-text; 4 files out of 14 entirely mine'
  - label: 'Orchestrator'
    value: '79%'
    note: '1,831 of 2,313 lines in the content-sync directory'
  - label: 'Format converters'
    value: '4'
    note: 'Rust → WASM, covered by 29 unit tests over fixtures from real posts'
  - label: 'Duration'
    value: '6 wk'
    note: '119 commits across branches, 13 in next after squash merges'

pains:
  - pain: 'Audiences increasingly ask ChatGPT and Perplexity instead of a search engine'
    solution: 'GEO Tracking: how often the brand is mentioned and recommended by ChatGPT, Perplexity, Claude and Google AI Overviews'
  - pain: 'Classic SEO metrics say nothing about whether AI recommends you'
    solution: 'Brand visibility and position per prompt and per topic, competitor tracking, daily or weekly data refreshes'
  - pain: 'No way to know what people actually ask AI in your category'
    solution: 'Search Volume: query demand across AI engines — which topics are worth taking on at all'
  - pain: 'The site is technically unreadable to AI crawlers'
    solution: 'A Site Audit for crawlability and citation readiness, an `llms.txt` generator, a robots.txt builder, a schema markup generator'
  - pain: 'Content is written for classic SEO — and never gets cited'
    solution: 'An editor with citability-oriented content scores and recommendations tied to specific topics'
  - pain: 'Check, update, check again — a weekly manual routine'
    solution: 'Automations: scheduled tracking, publishing, audits and alerts'
  - pain: 'Content lives in the customer CMS, the platform only holds a copy, and the two drift apart'
    solution: 'Two-way sync: import from the CMS including drafts, publishing straight from the editor, and divergence detection instead of a silent overwrite'
  - pain: 'Every CMS has its own article body format and its own API'
    solution: 'A canonical `CRichTextDoc` format and a single I/O port per platform; every conversion lives in one Rust crate instead of hand-rolled mapping per CMS'

glossary:
  - term: 'GEO / AEO'
    definition: 'Optimising not for the classic results page but for the answers of AI assistants: getting the model to mention and recommend the brand. The category the product competes in.'
  - term: 'Topic / Prompt'
    definition: 'The theme and the specific question being tracked. Topic is the billing unit: plans are measured in topics rather than in seats.'
  - term: 'Simulation'
    definition: 'A run of a tracked prompt against an AI model, with the answer parsed. Two kinds: `mentions_ranking` (where the brand sits in the list) and `informational`.'
  - term: 'Ibaia'
    definition: 'The in-house distributed task framework. Three roles: `publicTask` is the entry point, `subtask` only orchestrates and has no side effects, `atom` is a leaf of the tree that performs its side effect exactly once.'
  - term: 'Composer document'
    definition: 'The unit of content in the product: statuses `idea / draft / published / canceled / recommendation`. Edited as TipTap over a Yjs CRDT, with the binary state and the body kept in S3 rather than in Postgres.'
  - term: 'CRichTextDoc'
    definition: 'The canonical text interchange format, described by a Rust type and compiled to WASM. Deliberately the semantic common denominator rather than a superset of every CMS: each new node costs handling in seven converters.'
  - term: 'Hosting configuration'
    definition: 'A union keyed on `kind` (`shopify / wordpress / other / payload / emdash`) attached to the brand domain. Inbound sync is routed by it — hub and spokes, with an exhaustive `never` default.'
  - term: 'Divergence / echo suppression'
    definition: 'Local content and metadata hashes against the remote ones. If both sides changed, raise a divergence flag and do not merge automatically. After writing ourselves, store the hash of what was written so the next poll does not mistake our own change for someone else.'

timelineChart:
  title: 'Commits per week'
  note: 'The whole engagement was six weeks. The W27 peak is the run-up to the Payload PR stack. The W31 gap is the pause between the EmDash and Shopify stacks. Counted across all my branches, including pre-squash history.'
  max: 35
  axis: ['30 Jun', '20 Jul', '11 Aug']
  data:
    - { label: 'W27', value: 33 }
    - { label: 'W28', value: 22 }
    - { label: 'W29', value: 11 }
    - { label: 'W30', value: 16 }
    - { label: 'W31', value: 0 }
    - { label: 'W32', value: 29 }
    - { label: 'W33', value: 8 }

distributionChart:
  title: 'Where the code changed · file touches'
  note: 'A single feature ran through every layer: Rust converter → WASM bindings → background worker tasks → tRPC → React. Counted over 20 commits (merged work plus the in-flight Shopify stack), lock files excluded.'
  data:
    - { label: 'exec/agent-os-worker', value: 32 }
    - { label: 'exec/webapp', value: 27 }
    - { label: 'rust/lib', value: 21 }
    - { label: 'lib/api', value: 17 }
    - { label: 'lib/integrations', value: 16 }
    - { label: 'lib/db', value: 15 }
    - { label: 'lib/auth-client', value: 8 }
    - { label: 'lib/interface', value: 5 }
    - { label: 'rust/exec', value: 4 }
    - { label: 'lib/wasm-parser-utils-node', value: 3 }

highlights:
  - title: 'Rust/WASM rich text format converters'
    meta: '42% of the rich-text crate'
    intro: 'Every CMS stores the article body in its own format; instead of hand-rolled mapping per platform, all conversions live in one Rust crate that also runs on the server.'
    points:
      - 'Wrote `from_lexical.rs` / `to_lexical.rs` — the Payload editor format ↔ the canonical `CRichTextDoc`, tree to tree, with no intermediate HTML (the HTML round-trip in Payload is lossy)'
      - 'Wrote `from_portable_text.rs` / `to_portable_text.rs` for EmDash — lists were the hard part: Portable Text keeps them flat (`listItem` plus `level` on sibling blocks) while the canonical model nests them, so the converter folds and unfolds them in both directions'
      - 'Made serialisation deterministic through positional `_key` values — without that, hash-based echo suppression cannot work, because every export would produce a new hash'
      - 'Exposed all of it through `#[wasm_bindgen]` and added `richText.fromLexical / toPortableText` TS facades in the Node and Vite packages, so the same conversion runs in the browser and in the worker'
      - 'Covered it with 29 inline `#[test]` cases against fixtures taken from real posts; the deliberate losses (tables, `underline`, `highlight`) are pinned by their own tests rather than left silent'

  - title: 'The sync data model and the write boundary'
    meta: '1 migration out of 402'
    intro: 'Comparing local and remote state needs hashes from both sides and one single point through which a document reaches the database.'
    points:
      - 'Migration `0373`: `externalId` with a partial unique index, four hash columns (local and remote), two divergence flags with indexes, `syncLastAt` / `syncLastError`, and a `contentSyncCursorAt` cursor on the domain'
      - 'Introduced the canonical `ComposerDocument { meta, body }`, deliberately keeping publication status outside the versioned pair: publishing is not part of the document content'
      - 'Wrote `canonical-content.ts` — the write boundary that computes hashes on save — and routed the realtime layer through it, so the columns and the S3 blobs cannot drift apart between the editor, the AI, the importer and the sync'
      - 'Made hashing byte-identical in the API and in the worker (`sha256` over deterministic JSON) — without that, comparing local and remote hashes is meaningless'

  - title: 'The sync orchestrator on Ibaia'
    meta: '79% of the content-sync module'
    intro: 'Inbound sync is built as a hub with spokes keyed by CMS type: a shared orchestrator and a separate adapter per platform.'
    points:
      - 'Wrote three tasks per CMS for all three platforms, following the framework contract (`subtask` only orchestrates, `atom` performs its side effect exactly once), plus three cron tasks'
      - 'Implemented a full document enumeration rather than a delta: a CMS has no tombstones, so a remote deletion is only detectable by reconciling the set of identifiers'
      - 'Laid out the per-document logic: hashes match — touch nothing and do not write to the database; only the remote changed — pull it in quietly; both changed — raise the flag and do not overwrite, a human decides'
      - 'Extended the hosting configuration union with two new kinds — and because every switch is exhaustive with a `never` default, the compiler itself listed every site that needed updating'

  - title: 'A credentials abstraction beyond OAuth'
    meta: 'a new layer'
    intro: 'The project only had an OAuth path; Payload authenticates with a static API key and EmDash with a Personal Access Token. Rather than add a second secret store, I generalised the existing one.'
    points:
      - 'Extracted a `CredentialProvider` interface with a shared token-retrieval contract; the existing `OAuthProvider` now implements it'
      - 'Wrote an abstract `ApiKeyProvider` that puts the key into the same encrypted token table under a distinct `tokenType`, with an idempotent upsert and a revocation check'
      - 'On top of it, thin `PayloadProvider` and `EmDashProvider` of roughly 18 lines each: the entire difference comes down to the shape of the authorization header, which lives in the client rather than the provider'
      - 'Renamed the `@chatrank/oauth-client` package to `@chatrank/auth-client`, because the name had stopped matching the contents'

  - title: 'I/O ports for three CMS platforms'
    meta: '2 clients from scratch + hardening a third'
    intro: 'One class per platform: authentication, CRUD, rate limits, error mapping. They all return errors as values, never throw, and `safeParse` at the boundary.'
    points:
      - '`PayloadClient` from scratch: listing including drafts, upsert, and GraphQL introspection to auto-discover collections and fields — instances belong to customers and every schema differs'
      - '`EmDashClient` from scratch: cursor pagination, a separate publish step (draft → live), collection discovery. Testing against a live instance revealed that the platform wraps responses in a `{ data: … }` envelope — unwrapping that envelope is what made the import work'
      - 'Hardened the existing `ShopifyClient` up to sync grade: cost-aware throttling driven by `extensions.cost.throttleStatus` with backoff on `THROTTLED` and `429 Retry-After`, incremental article listing by an `updated_at` cursor, and `userErrors` lifted into typed errors'
      - 'Wrote SSRF protection for base URLs on `ipaddr.js` — the instance address is user-supplied; first for Payload, then generalised across every platform'

  - title: 'tRPC procedures and the connection UI'
    meta: '75% of integrations.ts'
    intro: 'The user-facing side: connect a CMS, map the collections, publish a document, see the divergence.'
    points:
      - 'A discover → connect → publish trio of procedures per platform, plus preview and divergence resolution'
      - 'Publishing renders on the server from the canonical body rather than accepting HTML from the client; for Shopify I added optimistic locking on `updatedAt` — there are no revisions there, so on a mismatch we raise the flag instead of overwriting'
      - 'For EmDash publishing turned out to be two-step: first write as a draft, then promote to live separately — something that surfaced on a live instance, not in the documentation'
      - 'Connection sections for all three platforms, publish dialogs, and a CMS-agnostic divergence banner in the editor; all of it behind three feature flags scoped to admin and developer only'
      - 'Stood up local Payload and EmDash instances and a Shopify dev app to run the full connect → import → edit → publish path live; that is also where a shared bug with a stale document title on publish came from'

  - title: 'Platform selection and architectural analysis'
    meta: 'a 328-line document'
    intro: 'Before any code, the question was which CMS platforms to integrate and in what order.'
    points:
      - 'Compared four platforms (Payload, EmDash, WordPress, Shopify) across nine criteria: API maturity, format friendliness, authentication complexity, change detection, drafts and conflict signals, media, and time to stand up an environment'
      - 'Argued for the sequence: Payload first as the most stable platform, so any early bug is certainly ours rather than theirs; then EmDash with the cleanest format; then Shopify, where the client and OAuth already existed and only the orchestrator part was missing; WordPress last, because of Gutenberg and the spread of site configurations'
      - 'Framed a loss budget for conversion: every CMS construct is classified into one of five buckets (first-class node / opaque passthrough / flatten / metadata / drop), because each new canonical node costs handling in every converter at once'
      - 'Broke each integration into a stack of 4–5 dependent PRs instead of one large one — reviewing a single layer at a time: migration → Rust → authentication → backend → frontend'

stack:
  - group: 'Languages'
    items:
      - { name: 'TypeScript', key: true }
      - { name: 'Rust (edition 2024)', key: true }
      - { name: 'SQL', key: true }
      - { name: 'Node.js 24', key: true }
      - { name: 'WASM', key: true }
      - { name: 'Bun' }
  - group: 'Frontend'
    items:
      - { name: 'React 19', key: true }
      - { name: 'Vite 6', key: true }
      - { name: 'Tailwind', key: true }
      - { name: 'TanStack Query', key: true }
      - { name: 'Radix UI' }
      - { name: 'Zustand' }
      - { name: 'React Router v7 / Remix' }
      - { name: 'TipTap / ProseMirror' }
      - { name: 'Recharts' }
  - group: 'API and services'
    items:
      - { name: 'tRPC v11', key: true }
      - { name: 'Zod 4', key: true }
      - { name: 'errors-as-values (Fault)', key: true }
      - { name: 'Yjs / Hocuspocus', key: true }
      - { name: 'Hono' }
      - { name: 'Cloudflare Workers' }
  - group: 'Data'
    items:
      - { name: 'PostgreSQL', key: true }
      - { name: 'Drizzle ORM', key: true }
      - { name: 'drizzle-kit migrations', key: true }
      - { name: 'AWS S3', key: true }
      - { name: 'ClickHouse' }
      - { name: 'Redis' }
      - { name: 'Neon' }
  - group: 'Rust crates'
    items:
      - { name: 'wasm-bindgen', key: true }
      - { name: 'serde / serde_json', key: true }
      - { name: 'tsify-next', key: true }
      - { name: 'pulldown-cmark' }
      - { name: 'scraper' }
      - { name: 'similar' }
  - group: 'Background and scheduling'
    items:
      - { name: 'Ibaia (in-house task framework)', key: true }
      - { name: 'cron tasks', key: true }
      - { name: 'pm2' }
  - group: 'Integrations'
    items:
      - { name: 'Payload CMS 3', key: true }
      - { name: 'EmDash', key: true }
      - { name: 'Shopify Admin GraphQL API', key: true }
      - { name: 'OAuth 2.0 + PKCE', key: true }
      - { name: 'API-key credentials', key: true }
      - { name: 'OxyLabs' }
      - { name: 'Moz' }
      - { name: 'Firecrawl' }
      - { name: 'Slack' }
      - { name: 'Stripe' }
      - { name: 'Clerk' }
  - group: 'Infrastructure and tooling'
    items:
      - { name: 'pnpm workspaces', key: true }
      - { name: 'stacked PR flow', key: true }
      - { name: 'Vitest', key: true }
      - { name: 'cargo test', key: true }
      - { name: 'ESLint / Prettier', key: true }
      - { name: 'Cloudflare (Workers, KV)' }
      - { name: 'Docker' }
      - { name: 'Playwright' }
      - { name: 'Linear' }

resumeBlock:
  role: 'Full-Stack Engineer — ChatRank (AI search optimisation platform)'
  period: 'June — August 2026'
  summary: 'A monorepo of 10 applications and 56 packages: React 19 + tRPC, background task workers, Rust crates in WASM, a 63-table Postgres schema and ClickHouse. I owned one end-to-end workstream — two-way content sync with the customer CMS.'
  bullets:
    - 'Designed and shipped **two-way content sync with three CMS platforms** (Payload, EmDash, Shopify) — **14 pull requests across three stacks of dependent branches**; of the nine PRs merged into mainline in that period, eight were mine.'
    - 'Wrote **four rich text format converters in Rust** (Lexical ↔ canonical format, Portable Text ↔ canonical format) — **42% of the crate** — compiled to WASM, with TS facades for browser and server and 29 unit tests over fixtures from real posts.'
    - 'Built the **sync orchestrator on the in-house background task framework** (79% of the module): remote deletion detection by set reconciliation, hash-based divergence detection with no auto-merge, and echo suppression after our own publish.'
    - 'Designed the **sync data model** — content and metadata hashes on both sides, divergence flags, a polling cursor — and a **single write boundary for documents**, so the Postgres columns and the S3 blobs cannot drift apart between the editor, the AI, the importer and the sync.'
    - 'Generalised integration authentication: extracted a **credential provider interface** over the existing OAuth path and added a static API-key path that reuses the same encrypted token store.'
    - 'Wrote **two API clients from scratch** (Payload, EmDash) and hardened a third (Shopify) to sync grade: cost-aware throttling against the GraphQL query budget, backoff on `429`, incremental cursor-based listing, and SSRF protection for user-supplied base URLs.'
    - 'Ran a **comparison of four CMS platforms across nine criteria** and argued the integration order the team went on to follow; broke each integration into a stack of 4–5 dependent PRs instead of one large one.'
  stackLine: 'TypeScript · Rust · WASM · React 19 · tRPC v11 · Zod 4 · Drizzle · PostgreSQL · S3 · Cloudflare Workers · Yjs / Hocuspocus · Payload CMS · Shopify GraphQL Admin API · OAuth 2.0'

description: 'A breakdown of my work on ChatRank, an AI search optimisation platform: two-way content sync with three CMS platforms, rich text format converters in Rust/WASM, and a background task orchestrator.'
ogImage: null
---

## On the size of the engagement

This is not my project and I was not its main contributor. ChatRank has been in
development since November 2024; the `next` branch holds roughly 4,500 commits from
fifteen authors across its whole history. Thirteen of them are mine — 0.3%.

That number is honest and at the same time describes almost nothing, so two others
belong next to it. First, the team merges by squashing: my 119 commits across fourteen
branches collapsed into eight in mainline. Second, during my window — late June to
mid-August 2026 — there were two active contributors on `next`. Of the nine pull requests
merged in that period, eight were mine.

So this case is not about volume but about depth in one workstream: two-way content sync
between the platform and the CMS the customer site lives in — from the Rust text format
converter up to the divergence banner in the editor.

## On the numbers

The figures come from the repository's git history as of 11 September 2026.
The per-module shares are computed with `git blame` on the current branch, so they are
lines still alive in the code, not the sum of everything ever written; lock files and the
generated `drizzle-kit` schema snapshot are excluded from the counts.
