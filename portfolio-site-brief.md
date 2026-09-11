# Бриф: сайт-портфоліо (Astro, статичний, двомовний)

---

## 0. Контекст і роль

Я — Maksym Sytkiv, full-stack інженер (TypeScript / React / Next.js / Node / Prisma).
Будуємо мій персональний сайт-портфоліо: головна + детальні сторінки-кейси по проектах + сторінка CV з друком у PDF.

**Важливо про контент:** я заповнюю всі тексти самостійно. Твоє завдання — побудувати каркас,
компоненти й схеми даних, а всі контентні файли створити **порожніми, але з докладними коментарями**:
що саме вставляти в кожне поле, які значення допустимі, приклад заповнення.
Єдиний виняток — проект **Splash**, його заповнюємо реальними даними (джерело нижче).

---

## 1. Технічний стек (зафіксовано)

| Шар            | Рішення                                                                                                 |
| -------------- | ------------------------------------------------------------------------------------------------------- |
| Фреймворк      | **Astro 5** (static output, без SSR і без адаптера)                                                     |
| Мова           | **TypeScript**, strict                                                                                  |
| Стилі          | **Tailwind CSS v4** через `@tailwindcss/vite`, токени в `@theme inline`                                 |
| Контент        | **Astro Content Collections** (`src/content.config.ts`) з **Zod**-схемами, Markdown + typed frontmatter |
| i18n           | Вбудований Astro i18n routing (`uk` + `en`)                                                             |
| Інтерактив     | Ванільний TS-острівець тільки де треба (тема, друк). **Без React, без UI-бібліотек**                    |
| Графіки        | Власні компоненти на CSS/SVG. **Ніяких chart-бібліотек**                                                |
| Шрифти         | Google Fonts через `<link>` (див. §3)                                                                   |
| Пакет-менеджер | **pnpm**                                                                                                |
| Якість         | Prettier + `prettier-plugin-astro` + `prettier-plugin-tailwindcss`, ESLint + `eslint-plugin-astro`      |
| SEO            | `@astrojs/sitemap`, hreflang-альтернативи, OG-теги, JSON-LD `Person`                                    |
| Хостинг        | **Vercel** (static, auto-detect Astro, без конфігу)                                                     |
| Репозиторій    | Новий, GitHub                                                                                           |

Явно **не** використовуємо: бекенд, базу даних, CMS, аналітику з кукі, jQuery, Bootstrap,
component-бібліотеки, chart-бібліотеки, анімаційні бібліотеки.

---

## 2. Структура репозиторію

```
portfolio/
├── astro.config.mjs
├── tsconfig.json
├── package.json
├── README.md                      ← інструкція «як додати проект» (укр.)
├── .prettierrc / eslint.config.js / .gitignore
├── public/
│   ├── projects/                  ← обкладинки й скріншоти (README пояснює розміри)
│   ├── og/                        ← OG-зображення
│   └── favicon.svg
└── src/
    ├── content.config.ts          ← Zod-схеми колекцій (єдине джерело правди по полях)
    ├── content/
    │   ├── projects/
    │   │   ├── _TEMPLATE.uk.md    ← порожній шаблон, усі поля з коментарями
    │   │   ├── _TEMPLATE.en.md
    │   │   ├── splash.uk.md       ← ЗАПОВНЕНО реальними даними
    │   │   └── splash.en.md       ← ЗАПОВНЕНО (переклад)
    │   └── profile/
    │       ├── uk.md              ← скелет із TODO-коментарями
    │       └── en.md
    ├── i18n/
    │   ├── ui.ts                  ← словник рядків інтерфейсу (uk/en)
    │   └── utils.ts               ← getLang, t(), localizedPath(), getAlternates()
    ├── styles/
    │   ├── global.css             ← палітра, токени, типографіка, базові стилі
    │   └── print.css              ← стилі друку для /cv
    ├── layouts/
    │   ├── BaseLayout.astro       ← <head>, SEO, шрифти, no-flash theme script, хедер, футер
    │   └── ProjectLayout.astro    ← обгортка сторінки-кейсу
    ├── components/
    │   ├── SiteHeader.astro
    │   ├── SiteFooter.astro
    │   ├── ThemeToggle.astro
    │   ├── LangSwitch.astro
    │   ├── Masthead.astro         ← шапка кейсу: назва + підзаголовок + штамп праворуч
    │   ├── SectionHead.astro      ← h2 + eyebrow праворуч + нижня лінія
    │   ├── FigureGrid.astro       ← сітка плиток «ключові цифри»
    │   ├── PainTable.astro        ← таблиця «біль → рішення»
    │   ├── Glossary.astro         ← блок термінів домену
    │   ├── ColumnChart.astro      ← вертикальні стовпчики (динаміка в часі)
    │   ├── BarList.astro          ← горизонтальні бари (розподіл)
    │   ├── HighlightBlock.astro   ← блок «ключовий напрямок»: h3 + meta + intro + буліти
    │   ├── HighlightGrid.astro    ← сітка з hairline-розділювачами між блоками
    │   ├── StackRows.astro        ← рядки «група → чіпи технологій»
    │   ├── ResumeCard.astro       ← інвертований блок «готове для резюме» + кнопка виділення
    │   ├── ProjectCard.astro      ← картка проекту на головній
    │   └── Prose.astro            ← обгортка для Markdown-тіла
    └── pages/
        ├── index.astro                    ← корінь: EN (див. §4)
        ├── projects/[slug].astro
        ├── cv.astro
        ├── uk/index.astro
        ├── uk/projects/[slug].astro
        ├── uk/cv.astro
        └── 404.astro
```

> Якщо Astro-i18n дозволяє обійтись одним динамічним `[...lang]`-роутом замість дублювання —
> зроби так, головне щоб URL були `/`, `/projects/splash`, `/cv`, `/uk/`, `/uk/projects/splash`, `/uk/cv`.

---

## 3. Дизайн-система

**Еталон:** `/Users/msytkiv/Documents/splash-dossier-reference.html` — прочитай цей файл повністю
перед тим як писати CSS. Це готова сторінка-кейс по Splash, з якої треба витягти візуальну мову.
Не копіюй HTML дослівно — розклади його на компоненти й токени.

### Палітра

Світла тема (базовий `:root`):

```
--ground        #f5f7f5   фон сторінки (холодний нейтральний із легким зеленим ухилом)
--surface       #ffffff   картки, плитки
--surface-sunk  #eceff0   треки барів
--ink           #101f1d   основний текст
--ink-soft      #4b5c59   вторинний текст
--ink-faint     #7d8c89   підписи, осі
--line          #d6dedb   рамки, роздільники
--line-soft     #e6ebe9   слабкі роздільники в таблицях
--accent        #0c6b68   акцент (глибокий teal)
--accent-deep   #084a48   акцент на світлому фоні (текст)
--accent-soft   #dfeeea   підложка акценту
--invert-ground #0f1917   фон інвертованого блоку
--invert-ink    #e9efec
--invert-soft   #9cb0ab
--invert-line   #2a3835
--invert-accent #59c6b8
```

Темна тема:

```
--ground #0d1514  --surface #141d1c  --surface-sunk #101817
--ink #e7eeeb  --ink-soft #9bafab  --ink-faint #748884
--line #253230  --line-soft #1c2726
--accent #5cc9bb  --accent-deep #8fded2  --accent-soft #16302d
--invert-ground #05201e  --invert-ink #e7f4f1  --invert-soft #93b8b2
--invert-line #10403c  --invert-accent #6fd6c8
```

**Три стани теми — обов'язково всі три:**

1. голий `:root` — повна світла палітра;
2. `@media (prefers-color-scheme: dark) { :root:not([data-theme="light"]) { ... } }`;
3. `:root[data-theme="dark"] { ... }`.

Жоден колір не має існувати тільки всередині media-блоку. `body` завжди задає явний `background`.
Усі компоненти беруть кольори **лише через токени**, ніяких літералів.

### Типографіка

```html
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,500;12..96,700;12..96,800&family=IBM+Plex+Mono:wght@400;500;600&family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;0,6..72,600;1,6..72,400&display=swap"
/>
```

| Роль    | Гарнітура                           | Де вживається                                              |
| ------- | ----------------------------------- | ---------------------------------------------------------- |
| Display | **Bricolage Grotesque** 500/700/800 | h1–h4, великі числа в плитках                              |
| Body    | **Newsreader** 400/500/600 + italic | увесь основний текст, 17px / line-height 1.62              |
| Utility | **IBM Plex Mono** 400/500/600       | eyebrow-лейбли, осі графіків, чіпи, шляхи, підписи, `code` |

Правила: `text-wrap: balance` на заголовках; ширина основного тексту ~66ch;
`font-variant-numeric: tabular-nums` скрізь, де цифри стоять у колонку;
eyebrow — 11.5px, uppercase, `letter-spacing: .14em`, колір `--accent`.

### Композиція

- Сторінка: `max-width: 1140px`, бокові відступи 28px (18px на мобільному).
- **Гострі кути.** `border-radius` максимум 2–3px і тільки на чіпах/кнопках. Ніяких тіней.
- Ієрархія тримається на **hairline-лініях і фоні**, а не на картках із тінями.
- Секції розділені `margin-top: 78px`; заголовок секції має нижню лінію `1px var(--line)`.
- Сітки — flex/grid із `gap`, ніяких per-element margin.
- Широкий контент (таблиці, графіки) — у власному контейнері з `overflow-x: auto`.
- Сітка блоків «ключових напрямків» — `gap: 2px` на фоні `var(--line)`, що дає ефект hairline-решітки.
- Анімації: тільки hover-стани й фокус. Жодних scroll-reveal, жодних `opacity: 0` у стані спокою.
- `@media (prefers-reduced-motion: reduce)` вимикає все.

---

## 4. Мова та роутинг

- Локалі: `en` (default, на корені) і `uk` (префікс `/uk/`).
- `astro.config.mjs`: `i18n: { locales: ['en','uk'], defaultLocale: 'en', routing: { prefixDefaultLocale: false } }`.
- Перемикач мови в хедері зберігає поточну сторінку (`/projects/splash` ⇄ `/uk/projects/splash`).
- Усі рядки інтерфейсу — в `src/i18n/ui.ts`, ніяких хардкодів у компонентах.
- `<link rel="alternate" hreflang>` для обох локалей + `x-default`.
- Якщо для проекту немає перекладу однією з мов — картка показується з поміткою мови оригіналу,
  а не зникає.

---

## 5. Схема контенту

Це найважливіша частина: саме через ці поля я наповнюватиму сайт.
Опиши їх Zod-схемою в `src/content.config.ts` і продублюй пояснення коментарями в `_TEMPLATE.*.md`.

### Колекція `projects`

```yaml
# --- ідентифікація ---
title: # назва проекту
tagline: # один рядок: що це за продукт і для кого
lang: en | uk
slug: # спільний для обох мов, напр. "splash"
featured: true # true → велика картка на головній
order: 1 # порядок сортування, менше = вище
draft: false # true → не потрапляє в білд

# --- шапка кейсу ---
role: # моя роль
periodStart: # YYYY-MM
periodEnd: # YYYY-MM або null → "по сьогодні"
status: # довільний рядок: "у розробці" / "завершено" / "NDA"
domain: # галузь, напр. "Field service management"
teamSize: # число або null
cover: # /projects/xxx.png або null
links: # [{ label, url }] — live, репозиторій, стаття. може бути []
lede: # 2–3 речення: суть продукту, головне про масштаб

# --- ключові цифри (плитки) ---
figures: # [{ label, value, note }] — 3–6 штук. value коротке, note пояснює
  # приклад: { label: "Комітів", value: "1 223", note: "один із 4 ключових контриб'юторів" }

# --- таблиця «біль → рішення» (опційно) ---
pains: # [{ pain, solution }]

# --- глосарій домену (опційно) ---
glossary: # [{ term, definition }] — терміни, без яких кейс незрозумілий

# --- графіки (обидва опційні) ---
timelineChart:
  title:
  note: # підпис під графіком
  max: # верхня межа шкали (округлена)
  axis: [] # 2–3 підписи осі X, рівномірно
  data: # [{ label, value, partial? }] — partial малює штрихований стовпчик
distributionChart:
  title:
  note:
  data: # [{ label, value }] — відсортовані за спаданням

# --- ключові напрямки роботи ---
highlights: # [{ title, meta, intro, points: [ ... ] }]
  # meta — короткий лічильник праворуч, напр. "≈25 задач"
  # intro — 1 речення контексту
  # points — 3–5 конкретних пунктів

# --- стек ---
stack: # [{ group, items: [{ name, key: bool }] }]
  # key: true → чіп підсвічується акцентом (щоденні технології)

# --- готовий блок для резюме (опційно) ---
resumeBlock:
  role:
  period:
  summary:
  bullets: []
  stackLine:

# --- SEO ---
description: # 1 речення для <meta> і OG
ogImage: # /og/xxx.png або null
```

Тіло Markdown-файлу — необов'язкові додаткові секції вільним текстом, рендеряться в кінці кейсу.

### Колекція `profile` (по одному файлу на мову)

```yaml
name:
headline: # "Full-Stack Engineer" + спеціалізація
location:
availability: # "відкритий до пропозицій" / null
email:
links: # [{ label, url }] — GitHub, LinkedIn, Telegram
bioShort: # 2–3 речення для головної
skills: # [{ group, items: [ ... ] }] — для головної та CV
experience: # [{ company, role, period, summary, bullets: [], stack: [] }]
education: # [{ institution, degree, period }]
languages: # [{ name, level }]
```

Тіло файлу — розгорнуте «про мене» для CV.

---

## 6. Сторінки

### `/` (головна)

1. Masthead: ім'я, headline, локація, контактні посилання.
2. Короткий bio (з `profile.bioShort`), ширина ~62ch.
3. **Selected work** — картки проектів. Featured-проект великою карткою з обкладинкою,
   tagline, 3 ключовими цифрами й чіпами стеку; решта — компактним списком.
4. **Stack** — `StackRows` із `profile.skills`.
5. **Experience** — компактний таймлайн (компанія, роль, період, 1 рядок).
6. Футер: контакти, посилання на CV, рік.

### `/projects/[slug]` (кейс)

Порядок секцій, який рендериться **лише якщо відповідне поле заповнене**:
Masthead → lede → FigureGrid → PainTable → Glossary → ColumnChart + BarList →
HighlightGrid → StackRows → ResumeCard → Markdown-тіло → навігація «попередній / наступний проект».

### `/cv`

- Одна колонка, друкована сітка: шапка з контактами → summary → досвід → навички → освіта → мови.
- Кнопка **«Save as PDF»** → `window.print()`.
- `print.css`: ховає хедер, футер, перемикачі й кнопку друку; примусово світла палітра;
  `@page { margin: 14mm }`; `break-inside: avoid` на блоках досвіду; посилання друкуються з URL у дужках.
- Ціль: A4, 1–2 сторінки, без обрізаних блоків.

### `/404`

Коротка сторінка в тій самій типографіці + посилання на головну обома мовами.

---

## 7. Дані для Splash

Увесь контент бери з `/Users/msytkiv/Documents/splash-dossier-reference.html` —
там уже є реальні цифри, таблиця болів, глосарій, дані обох графіків, дев'ять блоків
ключових напрямків, стек і готовий блок для резюме. Перенеси це у `splash.uk.md`
один в один, англійську версію переклади.

Опорні цифри (для перевірки, що нічого не загубилось):
1 223 коміти · ≈215 задач · +410k/−187k рядків · 236 із 608 міграцій · 17 місяців ·
8 застосунків / 22 пакети / 218 моделей Prisma.

---

## 8. Якість

- Lighthouse 100/100/100/100 на головній і на кейсі.
- Нуль JS у бандлі, крім двох маленьких скриптів: перемикач теми (з no-flash inline-скриптом
  у `<head>`, що читає `localStorage` до першого рендеру) і кнопка друку.
- Семантична розмітка: `<header> <main> <article> <section> <footer>`, skip-link, один `<h1>` на сторінку.
- Видимий `:focus-visible` на всьому інтерактивному.
- Адаптив від 320px; жодного горизонтального скролу body.
- `pnpm build` проходить без ворнінгів; Zod-схема ловить криві frontmatter на білді.

---

## 9. Порядок робіт

1. **Каркас.** `pnpm create astro`, Tailwind v4, TS strict, Prettier/ESLint, `global.css`
   з повною палітрою й типографікою, `BaseLayout`, тема з перемикачем, i18n-пламбінг,
   порожні сторінки — переконатись, що `/` і `/uk/` рендеряться і тема перемикається без миготіння.
2. **Контент-шар.** `content.config.ts` зі схемами, `_TEMPLATE.uk.md` / `_TEMPLATE.en.md`
   з повними коментарями, порожні `profile/uk.md` і `profile/en.md` з TODO.
3. **Компоненти кейсу.** Перенести візуальну мову з еталонного HTML у компоненти §2.
4. **Splash.** Заповнити `splash.uk.md` + `splash.en.md`, зібрати сторінку `/projects/[slug]`.
5. **Головна + CV + друк.**
6. **SEO, sitemap, OG, 404, a11y-прохід, README, деплой на Vercel.**

Після кожного етапу — короткий звіт, що зроблено й що лишилось. Після етапу 1 і 4 покажи скріншот.

---

## 10. Чого я очікую від тебе окремо

- **README українською** з розділом «Як додати новий проект» у 5 кроків:
  скопіювати шаблон → перейменувати → заповнити frontmatter → покласти обкладинку → `pnpm dev`.
- У кожному контентному файлі — коментарі над кожним полем: що це, який формат, приклад.
- Не вигадуй за мене тексти в шаблонах: залишай `''` або `[]` і коментар, а не lorem і не вигадані проекти.
- Один `git commit` на логічний етап, змістовні повідомлення англійською.
