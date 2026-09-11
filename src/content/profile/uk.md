---
# ============================================================================
# ПРОФІЛЬ — українська версія. Використовується на «/» і «/cv».
# Схема полів: src/content.config.ts → collection `profile`.
# Заповнюй значення, коментарі можна лишати.
# ============================================================================

# Ім'я та прізвище так, як має стояти у вордмарку, футері й резюме.
name: 'Максим Ситків'

# Один рядок: посада + спеціалізація. Показується великим під іменем.
# Приклад: 'Full-Stack інженер · TypeScript, React, Node'
headline: 'Full-Stack інженер · TypeScript, Node, React'

# Місто, країна. Приклад: 'Львів, Україна' або 'Віддалено · Європа'
location: 'Львів, Україна'

# Статус доступності або null, якщо показувати не треба.
# Приклад: 'Відкритий до пропозицій'
availability: 'Відкритий до пропозицій'

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
bioShort: ''

# Навички для головної та CV. group — назва рядка, items — чіпи.
# key: true підсвічує чіп акцентом (те, чим користуюсь щодня).
# Приклад:
# skills:
#   - group: 'Languages'
#     items:
#       - { name: 'TypeScript', key: true }
#       - { name: 'SQL' }
skills:
  - group: 'Мови'
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
  - group: 'Бекенд і API'
    items:
      - { name: 'tRPC', key: true }
      - { name: 'Express.js', key: true }
      - { name: 'Zod', key: true }
      - { name: 'REST API' }
      - { name: 'Hono' }
      - { name: 'Better Auth' }
      - { name: 'OAuth 2.0 + PKCE' }
      - { name: 'мультитенантність' }
  - group: 'Реалтайм і фонові задачі'
    items:
      - { name: 'WebSockets', key: true }
      - { name: 'Socket.IO', key: true }
      - { name: 'BullMQ', key: true }
      - { name: 'Redis pub/sub', key: true }
      - { name: 'крон-задачі' }
      - { name: 'Yjs / Hocuspocus' }
  - group: 'Дані'
    items:
      - { name: 'PostgreSQL', key: true }
      - { name: 'Prisma', key: true }
      - { name: 'Drizzle ORM', key: true }
      - { name: 'Redis', key: true }
      - { name: 'міграції схеми', key: true }
      - { name: 'MongoDB' }
      - { name: 'ClickHouse' }
      - { name: 'Typesense' }
      - { name: 'AWS S3' }
  - group: 'Мобайл'
    items:
      - { name: 'React Native', key: true }
      - { name: 'Expo', key: true }
      - { name: 'NativeWind' }
      - { name: 'EAS Build / Update' }
  - group: 'Інтеграції'
    items:
      - { name: 'Stripe' }
      - { name: 'QuickBooks Online' }
      - { name: 'Twilio Voice / SMS' }
      - { name: 'Shopify Admin GraphQL API' }
      - { name: 'Payload CMS' }
      - { name: 'Stream Chat' }
  - group: 'Інфраструктура й якість'
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
  - company: '' # TODO: назва компанії-роботодавця; поки порожньо — показується «Splash»
    role: 'Full-Stack Engineer'
    period: 'квітень 2025 - тепер'
    project: 'splash'
  - company: '' # TODO: назва компанії-роботодавця; поки порожньо — показується «ChatRank»
    role: 'Full-Stack Engineer'
    period: 'червень 2026 - серпень 2026'
    project: 'chatrank'
  - company: 'Інструмент керування даними дата-центру'
    role: 'Software Developer'
    period: '1 рік 4 місяці'
    summary: 'Веб-сервіс керування й валідації даних для міжнародного банківського та фінансового провайдера. Працював як middleware між серверами керування даними, тому оновлення доходили вчасно; користувачі також могли створювати й вести власні сутності. Команда з 5 людей.'
    bullets:
      - 'Створював класи й API, працював із базою даних'
      - 'Оптимізував код'
      - 'Створював сторінки інтерфейсу'
      - 'Проводив рефакторинг'
    stack: ['Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'Vue.js', 'ESLint']
    project: null
  - company: 'Дашборд аналітики продуктивності'
    role: 'Software Developer'
    period: '1 рік 6 місяців'
    summary: 'Інструменти аналітики для клієнтів: результати аналізу в числах, віджетах, графіках і таблицях. Віджети можна було перетягувати, перейменовувати й змінювати їхній розмір. Команда з 8 людей.'
    bullets:
      - 'Створював компоненти, сторінки, віджети й дашборди'
      - 'Реалізував стор і звʼязав із ним віджети та стан дашбордів'
      - 'Додав стандартні стилі застосунку'
      - 'Покривав код юніт-тестами'
      - 'Підняв покриття тестами, полагодив наявні тести й баги'
    stack: ['Angular', 'RxJS', 'NgRx', 'Redux', 'Sass', 'HTML', 'CSS']
    project: null
  - company: 'Консольна гра (pet-проект)'
    role: 'Software Developer'
    period: '3 місяці'
    summary: 'Проста гра на кшталт Pac-Man, що працює в консолі. До сервера могло приєднатися багато гравців одночасно, не взаємодіючи між собою: після входу гравець керує персонажем стрілками, збирає зірки й уникає ворогів. Є таблиця лідерів за очками й смертями. Команда з 2 людей.'
    bullets:
      - 'Написав серверну й клієнтську частини'
    stack: ['Node.js', 'Express.js', 'Socket.IO', 'MongoDB', 'Pug', 'Jest', 'Istanbul', 'Heroku']
    project: null

# Освіта — найновіше зверху.
# Приклад: - { institution: '', degree: '', period: '2018 — 2022' }
education: []

# Мови та рівні. Приклад: - { name: 'Англійська', level: 'B2' }
languages: [{ name: 'English', level: 'B2' }, { name: 'Ukrainian', level: 'Native' }]

# Одне речення для <meta name="description"> і OG головної сторінки.
description: ''

# Шлях до OG-зображення у public/, напр. '/og/home.png', або null.
ogImage: null
---

<!--
  Тіло файлу — розгорнуте «про мене» для сторінки /cv (секція Summary).
  Пиши звичайним Markdown: абзаци, **жирний**, списки, посилання.
  Поки порожньо — секція просто не рендериться.
-->
