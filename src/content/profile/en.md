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
skills: []

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
    project: 'splash'
  - company: '' # TODO: назва компанії-роботодавця; поки порожньо — показується «ChatRank»
    role: 'Full-Stack Engineer'
    project: 'chatrank'
  - company: 'Datacenter management tool'
    role: 'Software Developer'
    period: '1 year 4 months'
    summary: 'A web service providing data management and validation tools for an international banking and financial services provider. It acted as middleware connected to other data management servers, so data updates arrived in time; users could also create and control their own entities. A team of 5.'
    bullets:
      - 'Created classes and API, worked with the database'
      - 'Optimised the code'
      - 'Built UI pages'
      - 'Performed refactoring'
    stack: ['Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'Vue.js', 'ESLint']
    project: null
  - company: 'Performance analysis dashboard'
    role: 'Software Developer'
    period: '1 year 6 months'
    summary: 'Analysis tools for clients: results presented as numbers, widgets, charts and tables. Users could move widgets around, rename them and resize them. A team of 8.'
    bullets:
      - 'Created components, pages, widgets and dashboards'
      - 'Implemented the store and wired widgets and dashboard state into it'
      - 'Added the standard application styles'
      - 'Covered the code with unit tests'
      - 'Raised test coverage and fixed existing tests and bugs'
    stack: ['Angular', 'RxJS', 'NgRx', 'Redux', 'Sass', 'HTML', 'CSS']
    project: null
  - company: 'Console game (pet project)'
    role: 'Software Developer'
    period: '3 months'
    summary: 'A simple Pac-Man-like game that runs in the console. Many players could connect to the server at once without interacting with each other: after logging in a player moves with the arrow keys, collects stars and avoids enemies. A leaderboard tracks points and deaths. A team of 2.'
    bullets:
      - 'Built both the server side and the client side'
    stack: ['Node.js', 'Express.js', 'Socket.IO', 'MongoDB', 'Pug', 'Jest', 'Istanbul', 'Heroku']
    project: null

# Освіта — найновіше зверху.
# Приклад: - { institution: '', degree: '', period: '2018 — 2022' }
education: []

# Мови та рівні. Приклад: - { name: 'English', level: 'B2' }
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
