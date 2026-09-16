import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * ЄДИНЕ ДЖЕРЕЛО ПРАВДИ ПО ПОЛЯХ КОНТЕНТУ.
 * Якщо у frontmatter з'явиться зайве поле або пропаде обов'язкове — `pnpm build` впаде
 * із зрозумілою помилкою і вкаже файл. Пояснення кожного поля продубльовані
 * у src/content/projects/_TEMPLATE.*.md.
 */

const YEAR_MONTH = /^\d{4}-(0[1-9]|1[0-2])$/;

const yearMonth = z.string().regex(YEAR_MONTH, 'Формат періоду — YYYY-MM, напр. 2025-04');

/** Зовнішнє посилання: live-демо, репозиторій, стаття. */
const linkSchema = z.object({
  label: z.string().min(1),
  url: z.string().min(1),
});

/** Плитка «ключова цифра». */
const figureSchema = z.object({
  /** Назва показника, напр. «Комітів». */
  label: z.string().min(1),
  /** Коротке значення, напр. «1 223» або «17 міс». */
  value: z.string().min(1),
  /** Пояснення дрібним під числом. */
  note: z.string().optional(),
});

/** Рядок таблиці «біль → рішення». */
const painSchema = z.object({
  pain: z.string().min(1),
  solution: z.string().min(1),
});

/** Термін доменного глосарію. */
const termSchema = z.object({
  term: z.string().min(1),
  definition: z.string().min(1),
});

/** Вертикальні стовпчики: динаміка показника в часі. */
const timelineChartSchema = z.object({
  title: z.string().min(1),
  note: z.string().optional(),
  /** Верхня межа шкали Y — округли вгору від максимального значення. */
  max: z.number().positive(),
  /** 2–3 підписи осі X, розставляються рівномірно. */
  axis: z.array(z.string()).min(2).max(3),
  data: z
    .array(
      z.object({
        label: z.string().min(1),
        value: z.number().nonnegative(),
        /** true → стовпчик малюється штрихованим (неповний період). */
        partial: z.boolean().default(false),
      }),
    )
    .min(2),
});

/** Горизонтальні бари: розподіл величини по категоріях. */
const distributionChartSchema = z.object({
  title: z.string().min(1),
  note: z.string().optional(),
  /** Відсортуй за спаданням — компонент бере максимум за 100% ширини. */
  data: z
    .array(
      z.object({
        label: z.string().min(1),
        value: z.number().nonnegative(),
      }),
    )
    .min(2),
});

/** Блок «ключовий напрямок роботи». */
const highlightSchema = z.object({
  title: z.string().min(1),
  /** Короткий лічильник праворуч у шапці блоку, напр. «≈25 задач». */
  meta: z.string().optional(),
  /** Одне речення контексту. */
  intro: z.string().optional(),
  /** 3–5 конкретних пунктів. */
  points: z.array(z.string().min(1)).min(1),
});

/** Група технологій у розділі «Стек». */
const stackGroupSchema = z.object({
  group: z.string().min(1),
  items: z
    .array(
      z.object({
        name: z.string().min(1),
        /** true → чіп підсвічується акцентом (щоденна технологія). */
        key: z.boolean().default(false),
      }),
    )
    .min(1),
});

/** Готовий до копіювання запис у резюме. */
const resumeBlockSchema = z.object({
  role: z.string().min(1),
  period: z.string().min(1),
  summary: z.string().min(1),
  bullets: z.array(z.string().min(1)).min(1),
  /** Рядок «Стек: A · B · C». */
  stackLine: z.string().optional(),
});

const projects = defineCollection({
  loader: glob({
    base: './src/content/projects',
    // файли, що починаються з «_», — це шаблони, у білд вони не потрапляють
    pattern: ['**/*.md', '!**/_*.md'],
    // Дефолтний generateId зрізає ВСІ розширення, тому <slug>.uk.md і <slug>.en.md
    // отримали б однаковий id і перезаписали одне одного. Лишаємо мовний суфікс.
    generateId: ({ entry }) => entry.replace(/\.md$/, ''),
  }),
  schema: z.object({
    // --- ідентифікація ---
    title: z.string().min(1),
    tagline: z.string().min(1),
    lang: z.enum(['en', 'uk']),
    /** Спільний для обох мов ідентифікатор в URL, напр. 'my-project'. */
    slug: z.string().regex(/^[a-z0-9-]+$/, 'Тільки малі латинські літери, цифри й дефіс'),
    featured: z.boolean().default(false),
    order: z.number().int().default(100),
    draft: z.boolean().default(false),

    // --- шапка кейсу ---
    role: z.string().min(1),
    periodStart: yearMonth,
    periodEnd: yearMonth.nullable().default(null),
    status: z.string().optional(),
    domain: z.string().optional(),
    teamSize: z.number().int().positive().nullable().default(null),
    cover: z.string().nullable().default(null),
    links: z.array(linkSchema).default([]),
    lede: z.string().min(1),

    // --- секції (усі опційні: секція рендериться, лише якщо поле заповнене) ---
    figures: z.array(figureSchema).default([]),
    pains: z.array(painSchema).default([]),
    glossary: z.array(termSchema).default([]),
    timelineChart: timelineChartSchema.optional(),
    distributionChart: distributionChartSchema.optional(),
    highlights: z.array(highlightSchema).default([]),
    stack: z.array(stackGroupSchema).default([]),
    resumeBlock: resumeBlockSchema.optional(),

    // --- SEO ---
    description: z.string().min(1),
    ogImage: z.string().nullable().default(null),
  }),
});

const profile = defineCollection({
  loader: glob({
    base: './src/content/profile',
    pattern: ['**/*.md', '!**/_*.md'],
    // id колекції — код мови: 'uk' або 'en'
    generateId: ({ entry }) => entry.replace(/\.md$/, ''),
  }),
  schema: z.object({
    name: z.string(),
    /** «Full-Stack Engineer» + спеціалізація одним рядком. */
    headline: z.string(),
    location: z.string().optional(),
    /** Статус доступності або null, якщо показувати не треба. */
    availability: z.string().nullable().default(null),
    email: z.string().optional(),
    /** Телефон у міжнародному форматі. Парсери ATS майже завжди його шукають. */
    phone: z.string().optional(),
    links: z.array(linkSchema).default([]),
    /** 2–3 речення для головної. */
    bioShort: z.string().default(''),
    skills: z.array(stackGroupSchema).default([]),
    experience: z
      .array(
        z.object({
          // Порожні поля успадковуються з resumeBlock проекту, вказаного в `project`.
          company: z.string().default(''),
          role: z.string().default(''),
          period: z.string().default(''),
          summary: z.string().optional(),
          bullets: z.array(z.string()).default([]),
          stack: z.array(z.string()).default([]),
          /** Slug проекту-кейсу, якщо на нього треба дати посилання. */
          project: z.string().nullable().default(null),
        }),
      )
      .default([]),
    education: z
      .array(
        z.object({
          institution: z.string().min(1),
          degree: z.string().min(1),
          period: z.string().min(1),
        }),
      )
      .default([]),
    languages: z
      .array(
        z.object({
          name: z.string().min(1),
          level: z.string().min(1),
        }),
      )
      .default([]),

    // --- SEO ---
    description: z.string().default(''),
    ogImage: z.string().nullable().default(null),
  }),
});

export const collections = { projects, profile };
