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
headline: ''

# Місто, країна. Приклад: 'Lviv, Ukraine' або 'Remote · Europe'
location: ''

# Статус доступності або null, якщо показувати не треба.
# Приклад: 'Open to offers'
availability: null

# Пошта для контактів і резюме.
email: ''

# Посилання на профілі. label — те, що видно; url — повна адреса з https://
# Приклад:
# links:
#   - { label: 'GitHub', url: 'https://github.com/...' }
#   - { label: 'LinkedIn', url: 'https://www.linkedin.com/in/...' }
links: []

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
# period — вільний рядок, напр. 'Apr 2025 — present'
# project — slug кейсу, якщо на нього треба дати посилання, інакше null
# Приклад:
# experience:
#   - company: ''
#     role: ''
#     period: ''
#     summary: ''
#     bullets: ['', '']
#     stack: ['TypeScript', 'Next.js']
#     project: 'splash'
experience: []

# Освіта — найновіше зверху.
# Приклад: - { institution: '', degree: '', period: '2018 — 2022' }
education: []

# Мови та рівні. Приклад: - { name: 'English', level: 'B2' }
languages: []

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
