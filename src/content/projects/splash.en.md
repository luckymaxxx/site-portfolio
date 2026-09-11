---
title: 'Splash'
tagline: 'Field service management SaaS for pool service companies in the US'
lang: en
slug: 'splash'
featured: true
order: 1
draft: false

role: 'Full-Stack Engineer'
periodStart: '2025-04'
periodEnd: null
status: 'in progress'
domain: 'Field service management'
teamSize: 12
cover: null
links: []

lede: 'A multi-tenant platform that carries a service company from lead to paid invoice: **technician routes, work orders, quotes, subscription service plans, invoicing, a customer portal and a mobile app for the field**. A monorepo of 8 applications and 22 internal packages; the database schema holds 218 models.'

figures:
  - label: 'Commits'
    value: '1,223'
    note: 'one of 4 core contributors on a team of 12'
  - label: 'Tickets closed'
    value: '≈215'
    note: 'feature branches against Linear tickets (SPL-)'
  - label: 'Code changed'
    value: '410k'
    note: 'lines added, 187k removed'
  - label: 'DB migrations'
    value: '236'
    note: 'of 608 in the project — ≈39% of all schema changes'
  - label: 'Duration'
    value: '17 mo'
    note: 'of continuous product development'

pains:
  - pain: 'Routes are built by hand, in Excel and on paper'
    solution: 'A visual weekly planner with a map, automatic technician route generation, a stop-order optimiser and a real-time execution dashboard'
  - pain: 'Missed visits get lost and never rescheduled'
    solution: "A dedicated Skipped Stops module: a nightly cron that respects each location's time zone, bulk reassignment, and rescheduling with route exceptions"
  - pain: 'Sales live in messengers, there is no funnel'
    solution: 'A Lead Center and two kinds of quotes: branded customer-facing pages with e-signature, online approval and card capture'
  - pain: 'Invoicing and collections are manual work'
    solution: 'Auto-invoicing once a job is complete, auto-charge, recurring billing for service plans, and public payment pages'
  - pain: 'Double bookkeeping in QuickBooks'
    solution: 'QuickBooks Online sync: customers, products, invoices, payments and account mapping'
  - pain: 'The technician in the field is cut off from the data'
    solution: "A mobile app: the day's route, checklists, chemical readings and dosing, before/after photos, reports and signatures"
  - pain: 'The customer cannot see what is happening with their pool'
    solution: 'A customer portal, public online visit reports, email and SMS notifications, plus review collection and attribution on Google and Yelp'
  - pain: 'No visibility into staff performance'
    solution: 'Performance Hub: commissions, bonuses, attendance, negative feedback and reward-based initiatives'

glossary:
  - term: 'Body of water'
    definition: 'The unit of service — a specific pool or spa at a property. The service plan, price and billing attach to it, not to the customer.'
  - term: 'Stop'
    definition: "A single technician visit in the day's route. It has 9 lifecycle states, from `PENDING` to `SKIPPED_PARTIALLY`."
  - term: 'Service plan'
    definition: 'A subscription to recurring service: visit frequency, scope of work, payment method and charge date.'
  - term: 'Work order / Job'
    definition: 'One-off work outside the plan — a repair, a season opening, equipment diagnostics.'
  - term: 'Service quote'
    definition: 'A commercial proposal for a new customer: plans per body of water, one-off jobs, discounts and tax.'
  - term: 'Skipped stop'
    definition: 'A visit that did not happen, with a reason (locked gate, dog, weather) — its own queue for triage and reassignment.'

timelineChart:
  title: 'Commits per month'
  note: 'The peak — 118 commits in July 2026 (the wave of step-by-step create and edit wizards). The last bar is hatched: September 2026 is counted up to the 11th.'
  max: 120
  axis: ['Apr 2025', 'Dec 2025', 'Aug 2026']
  data:
    - { label: 'Apr 2025', value: 52 }
    - { label: 'May 2025', value: 51 }
    - { label: 'Jun 2025', value: 43 }
    - { label: 'Jul 2025', value: 54 }
    - { label: 'Aug 2025', value: 36 }
    - { label: 'Sep 2025', value: 77 }
    - { label: 'Oct 2025', value: 77 }
    - { label: 'Nov 2025', value: 71 }
    - { label: 'Dec 2025', value: 72 }
    - { label: 'Jan 2026', value: 55 }
    - { label: 'Feb 2026', value: 91 }
    - { label: 'Mar 2026', value: 66 }
    - { label: 'Apr 2026', value: 105 }
    - { label: 'May 2026', value: 65 }
    - { label: 'Jun 2026', value: 74 }
    - { label: 'Jul 2026', value: 118 }
    - { label: 'Aug 2026', value: 61 }
    - { label: 'Sep 2026', value: 39, partial: true }

distributionChart:
  title: 'Where the code changed · file touches'
  note: 'The work is end-to-end: from React screens and tRPC procedures down to the Prisma schema, background workers and email templates — usually all layers within a single ticket.'
  data:
    - { label: 'apps/web', value: 3217 }
    - { label: 'apps/api', value: 1924 }
    - { label: 'packages/db/prisma', value: 532 }
    - { label: 'packages/ui', value: 380 }
    - { label: 'apps/mobile', value: 306 }
    - { label: 'apps/ephemeral', value: 164 }
    - { label: 'packages/ui-redesigned', value: 107 }
    - { label: 'apps/portal', value: 95 }
    - { label: 'packages/email', value: 63 }
    - { label: 'apps/worker', value: 21 }

highlights:
  - title: 'Step-by-step wizard system'
    meta: '≈25 tickets'
    intro: 'The largest end-to-end workstream: replacing scattered legacy modals with a single system of create and edit wizards.'
    points:
      - 'Carved out a separate `@repo/ui-redesigned` package with the wizard components, so the migration could go gradually without breaking legacy `@repo/ui`'
      - 'Built create + edit flows for 11 entities: customer, one-off job, recurring job, repair quote, service quote, service plan, job type, invoice, case, campaign, chat'
      - 'Solved progressive step locking, edit-mode hydration through a keyed loader, identifier preservation, and worked around `TS2589` on large React Hook Form schemas'
      - 'Audited every legacy modal and decided what to migrate, what to restyle and what to delete'

  - title: 'Sales funnel and conversion'
    meta: '168 commits on the topic'
    intro: 'The path from a quote to a paying customer — public pages, approval, payment, automatic conversion.'
    points:
      - 'Customer-facing quote pages in the public app, with location branding, review blocks and payment'
      - 'A card requirement at the level of an individual quote that overrides the company default; deposits, selective payment methods, signing'
      - "Transactional conversion of a quote into a customer, creating the recurring plan and respecting the payment provider's pre-create limit"
      - 'The staged customer concept — the record stays hidden from the UI, billing and search until it is converted manually'

  - title: 'Scheduling and routing'
    meta: '87 commits on the topic'
    intro: 'The core of the product: the weekly board, the map, schedule synchronisation and stop-order optimisation.'
    points:
      - 'Real-time board updates: `BullMQ` → Redis pub/sub → Socket.IO broadcast → query cache invalidation'
      - 'Migration to the V2 schedule model and a clean separation of Move versus Reschedule semantics at the data level'
      - 'Fixed an optimiser bug where route cost was computed in three places under different rules — collapsed it into a single open-path model with a fixed start'
      - 'Skipped Stops: denormalised the canonical customer for sorting, bulk actions, and a correct time zone in the nightly cron'

  - title: 'Billing, invoicing, payments'
    meta: '38 + 15 commits'
    intro: 'The money side: from line items on a job to a card charge and a closed invoice.'
    points:
      - 'A full invoice redesign from a wizard into a single-page document with four states and two-way line-item sync with the job'
      - "Recall Invoice — invalidating the customer's payment link and returning the invoice to OPEN"
      - 'An arrears rule for per-unit billing: a shared Zod refine across all schemas, automatic switching in the UI, and a migration of already invalid data'
      - 'Auto-invoicing and auto-charge after job completion, a nightly billing cron per body of water, payment method fallbacks'

  - title: 'QuickBooks Online integration'
    meta: 'production incidents'
    intro: "The customer's bookkeeping has to match the platform without double entry."
    points:
      - 'Diagnosed and fixed sync failures under load — `HTTP 429` from the API at high volumes'
      - 'Made newly created products appear in QuickBooks faster'
      - 'Moved account mapping from a legacy page into a native two-tab settings modal and fixed state reset on disconnect'

  - title: 'Performance Hub'
    meta: 'a new module from scratch'
    intro: 'Staff motivation and oversight — a separate domain, designed from the data models up to the UI.'
    points:
      - 'Prisma models: commissions, bonuses, attendance, negative feedback categories, reward-based initiatives'
      - 'A settings page for the module and a feature flag for a staged rollout in production'
      - "Aligned the module's pages with the standard header and the app's shared table"

  - title: 'Technician mobile app'
    meta: '40 commits on the topic'
    intro: 'The tool for the person in the field: everything needed on site, from a phone.'
    points:
      - 'Visit reports and checklists that block completion while required items are open'
      - 'Split the service stop and work order flows, route cards, and a lead technician tag on multi-tech jobs'
      - 'Photo galleries, chemical readings and dosing, quote screens, and a Lead Center adaptation'
      - 'Update delivery over EAS OTA with a runtime config instead of values baked into the bundle'

  - title: 'Communications and branding'
    meta: '29 commits on the topic'
    intro: 'Every email and every page has to look like it came from the service company, not from the platform.'
    points:
      - "A branded transactional email system: the sending location's logo, colour, font and details are applied automatically, including the auth flow"
      - 'A single source of truth for the customer-facing business name instead of variants scattered across the codebase'
      - 'Twilio Voice and SMS with a call log dashboard; team chat on Stream Chat'

  - title: 'Data, settings, platform'
    meta: 'cross-cutting work'
    intro: 'The work that removes the entry barrier for a new customer and keeps the system manageable.'
    points:
      - 'Customer import from CSV and the migration mapping from the competing Skimmer system'
      - 'Typesense sync configuration for search across large volumes'
      - 'A settings overhaul: grouping into sections, a location profile with Google address autocomplete, a product and service catalogue, a notification matrix'
      - 'CI improvements, unit test fixes, cross-app help popovers, and small-screen responsiveness'

stack:
  - group: 'Languages'
    items:
      - { name: 'TypeScript', key: true }
      - { name: 'Node.js 22' }
      - { name: 'SQL' }
  - group: 'Frontend'
    items:
      - { name: 'Next.js 15', key: true }
      - { name: 'React 19', key: true }
      - { name: 'App Router' }
      - { name: 'Turbopack' }
      - { name: 'Tailwind v4', key: true }
      - { name: 'Radix / shadcn' }
      - { name: 'React Hook Form', key: true }
      - { name: 'Zod 4', key: true }
      - { name: 'TanStack Query' }
      - { name: 'TanStack Table' }
      - { name: 'Luxon' }
      - { name: 'Google Maps' }
      - { name: 'Leaflet' }
      - { name: 'GSAP' }
  - group: 'Backend'
    items:
      - { name: 'tRPC v11', key: true }
      - { name: 'Express 5', key: true }
      - { name: 'Socket.IO 4' }
      - { name: 'Better Auth' }
      - { name: 'Zod contracts' }
      - { name: 'multi-tenancy' }
  - group: 'Data'
    items:
      - { name: 'PostgreSQL', key: true }
      - { name: 'Prisma 6', key: true }
      - { name: 'migrations' }
      - { name: 'transactions' }
      - { name: 'Typesense' }
  - group: 'Async'
    items:
      - { name: 'BullMQ', key: true }
      - { name: 'Redis / IORedis', key: true }
      - { name: 'pub/sub' }
      - { name: 'node-cron' }
      - { name: 'standalone Docker worker' }
  - group: 'Mobile'
    items:
      - { name: 'React Native 0.81', key: true }
      - { name: 'Expo 56', key: true }
      - { name: 'New Architecture' }
      - { name: 'NativeWind' }
      - { name: 'React Navigation' }
      - { name: 'EAS Build / Update' }
      - { name: 'Firebase Remote Config' }
  - group: 'Integrations'
    items:
      - { name: 'QuickBooks Online', key: true }
      - { name: 'Nuvei', key: true }
      - { name: 'Stripe' }
      - { name: 'Maxio Advanced Billing' }
      - { name: 'Twilio Voice / SMS', key: true }
      - { name: 'Stream Chat' }
      - { name: 'Resend' }
      - { name: 'AWS S3' }
      - { name: 'Cloudinary' }
      - { name: 'Google Maps / Routes / Geocoding' }
      - { name: 'Google My Business' }
      - { name: 'Duda' }
      - { name: 'Expo Push' }
  - group: 'Documents & media'
    items:
      - { name: 'Puppeteer (PDF)' }
      - { name: 'React Email / Pug' }
      - { name: 'Sharp' }
      - { name: 'ffmpeg' }
  - group: 'Infrastructure'
    items:
      - { name: 'pnpm workspaces', key: true }
      - { name: 'Turborepo 2', key: true }
      - { name: 'Docker' }
      - { name: 'Render' }
      - { name: 'Sentry' }
      - { name: 'Jest' }
      - { name: 'ESLint / Prettier' }
      - { name: 'GitHub PR flow' }
      - { name: 'Linear' }

resumeBlock:
  role: 'Full-Stack Engineer — Splash (Field Service Management SaaS)'
  period: 'April 2025 — present'
  summary: 'A multi-tenant B2B platform for pool service companies in the US: technician route planning, work orders, commercial quotes, subscription service plans, invoicing and payments, a customer portal and a mobile app for the field. A monorepo of 8 applications and 22 packages, on a PostgreSQL schema of 218 models.'
  bullets:
    - "Delivered **≈215 product tickets (1,220+ commits, +410k lines of code)** as one of four core engineers; authored **236 of the project's 608** database migrations."
    - 'Designed and shipped a **step-by-step wizard design system** in a dedicated package and migrated 11 key create and edit flows onto it — unifying the UX for customers, jobs, quotes, plans and invoices with no regressions in legacy code.'
    - 'Built the end-to-end **sales funnel**: branded customer-facing quote pages with e-signature, online approval and payment card capture, plus transactional conversion of a quote into a customer with a recurring service plan.'
    - 'Developed a **real-time route planning system** (tRPC + BullMQ + Redis pub/sub + Socket.IO) and fixed a critical optimiser bug by collapsing three divergent route-cost implementations into one model.'
    - 'Stabilised the **QuickBooks Online sync** under load (eliminated HTTP 429) and moved account mapping into the native settings UI.'
    - 'Built the **Performance Hub** module from scratch (commissions, bonuses, attendance, feedback, initiatives) — from Prisma models to a feature-flagged UI.'
    - "Introduced a **branded transactional email system** that automatically applies the sending location's identity to every email, including the auth flow."
    - 'Worked on the **technician mobile app on Expo / React Native** (day route, checklists, chemical readings, photos, visit reports) with updates delivered over EAS OTA.'
    - 'Implemented **customer import from CSV and migration from the competing Skimmer system**, removing the switching barrier for new platform customers.'
  stackLine: 'TypeScript · Next.js 15 · React 19 · React Native / Expo · tRPC · Express 5 · Prisma 6 · PostgreSQL · Redis · BullMQ · Socket.IO · Typesense · Tailwind v4 · Zod · TanStack Query · Turborepo · Docker · AWS S3 · QuickBooks · Nuvei / Stripe / Maxio · Twilio · Stream Chat · Sentry'

description: 'A breakdown of my work on Splash — a multi-tenant FSM platform for pool service companies: 1,223 commits, ≈215 tickets and 236 database migrations over 17 months.'
ogImage: null
---

## Who the product is sold to

The buyer is the owner or dispatcher of a service company in the US: anywhere from a single crew to a
network of branches. Every day they have to send technicians out to dozens of private pools, record the
water chemistry, issue invoices, collect payments and not lose a single missed visit. Before Splash all of
that lives in spreadsheets, messengers and the dispatcher's head.

Architecturally the product is multi-tenant: `Tenant` → many `Location`, with all data isolated by the
`locationId` held in the session. Each location has its own time zone, branding, billing rules and payment
credentials.

## About the numbers

The figures come from the repository's git history as of 11 September 2026.
September 2026 is not counted in full in the chart — which is why the last bar is hatched.
