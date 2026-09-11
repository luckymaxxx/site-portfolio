---
# ==============================================================================
# ШАБЛОН КЕЙСУ — англійська версія.
#
# Коментарі лишені українською, приклади значень — англійською.
#
# Як користуватись:
#   1. Скопіюй цей файл у src/content/projects/<slug>.en.md
#   2. Скопіюй _TEMPLATE.uk.md у <slug>.uk.md
#   3. Заповни поля нижче. Значення '' та [] означають «секція не рендериться».
#   4. Поля з приміткою ОБОВ'ЯЗКОВЕ мають бути заповнені, інакше `pnpm build` впаде.
#
# Файли, що починаються з «_», у білд не потрапляють.
# Повна схема з валідацією: src/content.config.ts
# ==============================================================================

# ------------------------------------------------------------------ ІДЕНТИФІКАЦІЯ

# ОБОВ'ЯЗКОВЕ. Назва проекту так, як вона стоїть у шапці кейсу.
# Приклад: 'Splash'
title: ''

# ОБОВ'ЯЗКОВЕ. Один рядок: що це за продукт і для кого. Показується під назвою
# дрібнішим і сірішим, а також на картці проекту на головній.
# Приклад: 'Field service management SaaS for pool service companies'
tagline: ''

# ОБОВ'ЯЗКОВЕ. Мова цього файлу. Допустимо: uk | en
lang: en

# ОБОВ'ЯЗКОВЕ. Спільний для обох мовних версій ідентифікатор в URL.
# Тільки малі латинські літери, цифри й дефіс. Має збігатися у .uk.md і .en.md.
# Приклад: 'splash' → /projects/splash та /uk/projects/splash
slug: ''

# true → проект показується великою карткою з обкладинкою вгорі «Вибраних проектів».
# false → компактним рядком у списку нижче.
featured: false

# Порядок сортування на головній: менше = вище. Однакові числа сортуються за назвою.
order: 100

# true → файл ігнорується при білді. Зручно, поки кейс не дописаний.
draft: true

# ------------------------------------------------------------------ ШАПКА КЕЙСУ

# ОБОВ'ЯЗКОВЕ. Моя роль у проекті. Приклад: 'Full-Stack Engineer'
role: ''

# ОБОВ'ЯЗКОВЕ. Початок роботи, суворо у форматі YYYY-MM. Приклад: '2025-04'
periodStart: ''

# Кінець роботи у форматі YYYY-MM, або null → у шапці буде «по сьогодні».
periodEnd: null

# Вільний рядок стану проекту. Приклад: 'in progress' / 'shipped' / 'NDA'
status: ''

# Галузь або тип продукту. Приклад: 'Field service management'
domain: ''

# Розмір команди числом, або null якщо не показувати. Приклад: 12
teamSize: null

# Шлях до обкладинки в public/, напр. '/projects/splash-cover.png', або null.
# Рекомендований розмір 1600×900 (16:9), PNG або JPG до ~300 КБ.
cover: null

# Зовнішні посилання: live-демо, репозиторій, стаття. Може лишатись [].
# Приклад:
# links:
#   - { label: 'Live site', url: 'https://example.com' }
#   - { label: 'GitHub', url: 'https://github.com/...' }
links: []

# ОБОВ'ЯЗКОВЕ. 2–3 речення великим шрифтом одразу під шапкою: суть продукту
# і головне про масштаб. Можна виділяти фрагменти через **жирний**.
# Приклад: 'A multi-tenant platform that carries a service company from lead to
#           paid invoice. A monorepo of 8 apps and 22 internal packages.'
lede: ''

# ------------------------------------------------------------------ КЛЮЧОВІ ЦИФРИ

# Плитки з головними числами кейсу. Оптимально 3–6 штук — вони стають в один ряд.
# label — назва показника (uppercase-мітка згори)
# value — коротке значення, 1–7 символів; довше ламає сітку
# note  — пояснення дрібним під числом, необов'язкове
# Приклад:
# figures:
#   - label: 'Commits'
#     value: '1,223'
#     note: 'one of 4 core contributors on a team of 12'
figures: []

# ------------------------------------------------------------------ БІЛЬ → РІШЕННЯ

# Таблиця з двох колонок: що болить у клієнта і що з цим робить продукт.
# Лівий стовпчик рендериться курсивом. Секція зникає, якщо список порожній.
# Приклад:
# pains:
#   - pain: 'Routes are built by hand, in Excel and on paper'
#     solution: 'A visual weekly planner with a map and automatic route generation'
pains: []

# ------------------------------------------------------------------ ГЛОСАРІЙ

# Терміни домену, без яких кейс не читається. 4–8 штук.
# Приклад:
# glossary:
#   - term: 'Body of water'
#     definition: 'The unit of service — a specific pool or spa at a property.'
glossary: []

# ------------------------------------------------------------------ ГРАФІКИ

# Вертикальні стовпчики: як показник змінювався в часі.
# Прибери весь блок (або лишай закоментованим), якщо графіка немає.
#
#   title — заголовок над графіком, моношрифтом
#   note  — підпис під графіком: що тут видно, звідки дані
#   max   — верхня межа шкали Y, округли вгору від найбільшого значення
#   axis  — 2–3 підписи осі X; розставляються рівномірно по ширині
#   data  — значення зліва направо; partial: true малює штрихований стовпчик
#           (наприклад, поточний місяць ще не закінчився)
#
# timelineChart:
#   title: 'Commits per month'
#   note: 'Peak — 118 commits in July. The last bar is hatched: the month is partial.'
#   max: 120
#   axis: ['Apr 2025', 'Dec 2025', 'Aug 2026']
#   data:
#     - { label: 'Apr 2025', value: 52 }
#     - { label: 'May 2025', value: 51 }
#     - { label: 'Sep 2026', value: 39, partial: true }

# Горизонтальні бари: як величина розподілена по категоріях.
# Найдовший бар = 100% ширини, решта пропорційно. Сортуй за спаданням.
#
# distributionChart:
#   title: 'Where the code changed · file touches'
#   note: 'The work is end-to-end: from React screens to the Prisma schema and workers.'
#   data:
#     - { label: 'apps/web', value: 3217 }
#     - { label: 'apps/api', value: 1924 }

# ------------------------------------------------------------------ КЛЮЧОВІ НАПРЯМКИ

# Головна змістовна секція кейсу: 4–9 блоків у сітці з hairline-розділювачами.
# title  — назва напрямку
# meta   — короткий лічильник праворуч у шапці блоку, напр. '≈25 задач'
# intro  — одне речення контексту
# points — 3–5 конкретних пунктів; `беклапки` рендеряться як чіп-код
# Приклад:
# highlights:
#   - title: 'Step-by-step wizard system'
#     meta: '≈25 tickets'
#     intro: 'Replaced scattered legacy modals with a single wizard system.'
#     points:
#       - 'Carved out a separate `@repo/ui-redesigned` package to migrate gradually'
#       - 'Built create + edit flows for 11 entities'
highlights: []

# ------------------------------------------------------------------ СТЕК

# Технології, згруповані по шарах. Кожна група — окремий рядок із чіпами.
# key: true підсвічує чіп акцентом — це те, з чим працював щодня.
# Приклад:
# stack:
#   - group: 'Languages'
#     items:
#       - { name: 'TypeScript', key: true }
#       - { name: 'SQL' }
#   - group: 'Frontend'
#     items:
#       - { name: 'Next.js 15', key: true }
#       - { name: 'TanStack Query' }
stack: []

# ------------------------------------------------------------------ БЛОК ДЛЯ РЕЗЮМЕ

# Готовий до копіювання запис у резюме — рендериться інвертованим блоком
# із кнопкою «виділити все». Прибери блок, якщо не потрібен.
#
# resumeBlock:
#   role: 'Full-Stack Engineer — Splash (Field Service Management SaaS)'
#   period: 'April 2025 — present'
#   summary: 'A multi-tenant B2B platform for pool service companies in the US.'
#   bullets:
#     - 'Delivered **≈215 product tickets** as one of four core engineers.'
#     - 'Designed a **wizard design system** and migrated 11 flows onto it.'
#   stackLine: 'TypeScript · Next.js 15 · React 19 · tRPC · Prisma 6 · PostgreSQL'

# ------------------------------------------------------------------ SEO

# ОБОВ'ЯЗКОВЕ. Одне речення для <meta description> та OG-картки.
# До 160 символів, без крапки в кінці не обов'язково.
description: ''

# Шлях до OG-зображення в public/og/, напр. '/og/splash.png', або null.
# Рекомендований розмір 1200×630.
ogImage: null
---

<!--
  Тіло файлу необов'язкове. Усе, що напишеш нижче звичайним Markdown,
  рендериться окремою секцією в кінці кейсу — під блоком для резюме.
  Підходить для вільних нотаток: чому саме такі рішення, що б зробив інакше,
  посилання на статті. Поки порожньо — секція не з'являється.
-->
