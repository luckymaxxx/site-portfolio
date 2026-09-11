---
# ============================================================================
# ПРОФІЛЬ — англійська версія. Використовується на «/» і «/cv».
# Схема полів: src/content.config.ts → collection `profile`.
# Заповнюй значення, коментарі можна лишати.
# ============================================================================

# Ім'я та прізвище так, як має стояти у вордмарку, футері й резюме.
name: 'Maksym Sytkiv'

# Один рядок: посада + спеціалізація. Показується великим під іменем.
# Приклад: 'Full-Stack Engineer · TypeScript, React, Node'
headline: 'Full-Stack Engineer · TypeScript, Node, React'

# Місто, країна. Приклад: 'Lviv, Ukraine' або 'Remote · Europe'
location: 'Lviv, Ukraine'

# Статус доступності або null, якщо показувати не треба.
# Приклад: 'Open to offers'
availability: 'Open to offers'

# Пошта для контактів і резюме.
email: 'sytkivmax@gmail.com'

# Телефон у міжнародному форматі, напр. '+380 XX XXX XX XX'.
# Парсери ATS майже завжди шукають його в контактному блоці резюме.
# Увага: сторінка /cv публічна, тож номер буде видно всім — лишай порожнім,
# якщо не хочеш цього.
phone: ''

# Посилання на профілі. label — те, що видно; url — повна адреса з https://
# Приклад:
# links:
#   - { label: 'GitHub', url: 'https://github.com/...' }
#   - { label: 'LinkedIn', url: 'https://www.linkedin.com/in/...' }
links:
  [
    { label: 'GitHub', url: 'https://github.com/luckymaxxx' },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/maksym-sytkiv-051008108' },
  ]

# 2–3 речення для головної сторінки: хто я, у чому сильний, що шукаю.
bioShort: 'A full-stack engineer who carries a task through every layer — from the database schema and background workers up to React screens and the mobile app. For the past few years I have been building **B2B products in TypeScript**: real-time route planning, billing and payments, syncing with third-party APIs. I am looking for a team where an engineer owns a direction, not a ticket queue.'

# Навички для головної та CV. group — назва рядка, items — чіпи.
# key: true підсвічує чіп акцентом (те, чим користуюсь щодня).
# Приклад:
# skills:
#   - group: 'Languages'
#     items:
#       - { name: 'TypeScript', key: true }
#       - { name: 'SQL' }
skills:
  - group: 'Languages'
    items:
      - { name: 'TypeScript', key: true }
      - { name: 'Node.js', key: true }
      - { name: 'Rust', key: true }
      - { name: 'SQL', key: true }
      - { name: 'WASM' }
  - group: 'Frontend'
    items:
      - { name: 'React', key: true }
      - { name: 'Next.js', key: true }
      - { name: 'Vite', key: true }
      - { name: 'Tailwind CSS', key: true }
      - { name: 'React Hook Form', key: true }
      - { name: 'TanStack Query', key: true }
      - { name: 'TanStack Table' }
      - { name: 'Zustand' }
      - { name: 'Radix / shadcn' }
      - { name: 'TipTap / ProseMirror' }
  - group: 'Backend & API'
    items:
      - { name: 'tRPC', key: true }
      - { name: 'Express.js', key: true }
      - { name: 'Zod', key: true }
      - { name: 'REST API' }
      - { name: 'Hono' }
      - { name: 'Better Auth' }
      - { name: 'OAuth 2.0 + PKCE' }
      - { name: 'multi-tenancy' }
  - group: 'Realtime & background jobs'
    items:
      - { name: 'WebSockets', key: true }
      - { name: 'Socket.IO', key: true }
      - { name: 'BullMQ', key: true }
      - { name: 'Redis pub/sub', key: true }
      - { name: 'cron jobs' }
      - { name: 'Yjs / Hocuspocus' }
  - group: 'Data'
    items:
      - { name: 'PostgreSQL', key: true }
      - { name: 'Prisma', key: true }
      - { name: 'Drizzle ORM', key: true }
      - { name: 'Redis', key: true }
      - { name: 'schema migrations', key: true }
      - { name: 'MongoDB' }
      - { name: 'ClickHouse' }
      - { name: 'Typesense' }
      - { name: 'AWS S3' }
  - group: 'Mobile'
    items:
      - { name: 'React Native', key: true }
      - { name: 'Expo', key: true }
      - { name: 'NativeWind' }
      - { name: 'EAS Build / Update' }
  - group: 'Integrations'
    items:
      - { name: 'Stripe' }
      - { name: 'QuickBooks Online' }
      - { name: 'Twilio Voice / SMS' }
      - { name: 'Shopify Admin GraphQL API' }
      - { name: 'Payload CMS' }
      - { name: 'Stream Chat' }
  - group: 'Infrastructure & quality'
    items:
      - { name: 'pnpm workspaces', key: true }
      - { name: 'Turborepo', key: true }
      - { name: 'Docker', key: true }
      - { name: 'Vitest / Jest', key: true }
      - { name: 'ESLint / Prettier', key: true }
      - { name: 'GitHub PR-flow', key: true }
      - { name: 'Cloudflare Workers' }
      - { name: 'Sentry' }
      - { name: 'Playwright' }
  - group: 'AI in development'
    items:
      - { name: 'Claude Code', key: true }
      - { name: 'Cursor', key: true }
      - { name: 'MCP servers', key: true }
      - { name: 'custom agent skills', key: true }
      - { name: 'project rules and instructions', key: true }

# Досвід роботи — найновіше зверху. Використовується і на головній (компактно),
# і на /cv (розгорнуто з bullets).
#
# Якщо запис вказує `project: '<slug>'`, кожне ПОРОЖНЄ поле автоматично
# береться з resumeBlock цього кейсу: role, period, summary, bullets і рядок
# стеку. Текст резюме завдяки цьому живе в одному місці — у файлі проекту —
# і не розходиться між сторінкою кейсу та /cv. Щоб перекрити успадковане,
# просто заповни поле тут.
#
# company порожній → у лівій колонці показується назва проекту.
# Для запису без кейсу заповни всі поля вручну і постав project: null.
experience:
  - company: 'Noble.codes'
    role: 'Full-Stack Engineer'
    period: 'April 2025 - Present'
    project: 'splash'
  - company: 'Noble.codes'
    role: 'Full-Stack Engineer'
    period: 'June 2026 - August 2026'
    project: 'chatrank'
  - company: 'Eleks'
    role: 'Backend Engineer'
    period: 'July 2021 - March 2025'
    summary: 'A web service providing data management and validation tools for an international banking and financial services provider. It acted as middleware connected to other data management servers, so data updates arrived in time; users could also create and control their own entities. A team of 5.'
    bullets:
      - 'Created classes and API, worked with the database'
      - 'Optimised the code'
      - 'Built UI pages'
      - 'Performed refactoring'
    stack: ['Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'Vue.js', 'ESLint']
    project: 'Datacenter management tool'
  - company: 'Eleks'
    role: 'Frontend Engineer'
    period: 'January 2020 - June 2021'
    summary: 'Analysis tools for clients: results presented as numbers, widgets, charts and tables. Users could move widgets around, rename them and resize them. A team of 8.'
    bullets:
      - 'Created components, pages, widgets and dashboards'
      - 'Implemented the store and wired widgets and dashboard state into it'
      - 'Added the standard application styles'
      - 'Covered the code with unit tests'
      - 'Raised test coverage and fixed existing tests and bugs'
    stack: ['Angular', 'RxJS', 'NgRx', 'Redux', 'Sass', 'HTML', 'CSS']
    project: 'Performance analysis dashboard'
  - company: 'Eleks'
    role: 'Backend Engineer'
    period: 'October 2019 - December 2019'
    summary: 'A simple Pac-Man-like game that runs in the console. Many players could connect to the server at once without interacting with each other: after logging in a player moves with the arrow keys, collects stars and avoids enemies. A leaderboard tracks points and deaths. A team of 2.'
    bullets:
      - 'Built both the server side and the client side'
    stack: ['Node.js', 'Express.js', 'Socket.IO', 'MongoDB', 'Pug', 'Jest', 'Istanbul', 'Heroku']
    project: 'Console game (pet project)'

# Освіта — найновіше зверху.
# Приклад: - { institution: '', degree: '', period: '2018 — 2022' }
education:
  [
    { institution: 'Lviv Polytechnic National University', degree: 'bachelor', period: '2014 - 2018' },
    { institution: 'Lviv Polytechnic National University', degree: 'master', period: '2018 - 2019' },
    { institution: 'Lviv Polytechnic National University', degree: 'master', period: '2025 - 2026' },
  ]

# Мови та рівні. Приклад: - { name: 'English', level: 'B2' }
languages: [{ name: 'English', level: 'B2' }, { name: 'Ukrainian', level: 'Native' }]

# Одне речення для <meta name="description"> і OG головної сторінки.
description: 'Maksym Sytkiv — a full-stack engineer in Lviv, Ukraine: TypeScript, React, Node. I build B2B products end to end, from the database schema to the mobile app.'

# Шлях до OG-зображення у public/, напр. '/og/home.png', або null.
ogImage: null
---

<!--
  Тіло файлу — розгорнуте «про мене» для сторінки /cv (секція Summary).
  Пиши звичайним Markdown: абзаци, **жирний**, списки, посилання.
  Поки порожньо — секція просто не рендериться.
-->
