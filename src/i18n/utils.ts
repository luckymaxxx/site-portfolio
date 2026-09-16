import { defaultLang, languages, ui, type Lang, type UiKey } from './ui';

export const locales = Object.keys(languages) as Lang[];

/** Чи є рядок однією з підтримуваних мов. */
export function isLang(value: string | undefined): value is Lang {
  return value !== undefined && (locales as string[]).includes(value);
}

/**
 * Визначає мову зі шляху: /uk/... → 'uk', решта → 'en'.
 */
export function getLang(url: URL | string): Lang {
  const pathname = typeof url === 'string' ? url : url.pathname;
  const first = pathname.split('/').filter(Boolean)[0];
  return isLang(first) ? first : defaultLang;
}

/**
 * Прибирає мовний префікс і повертає канонічний шлях (спільний для всіх мов):
 * '/uk/projects/my-project' → '/projects/my-project', '/uk' → '/'.
 */
export function stripLang(pathname: string): string {
  const segments = pathname.split('/').filter(Boolean);
  if (isLang(segments[0])) segments.shift();
  return segments.length ? `/${segments.join('/')}` : '/';
}

/**
 * Канонічний шлях + мова → реальний URL сторінки.
 * localizedPath('/cv', 'uk') → '/uk/cv'; localizedPath('/cv', 'en') → '/cv'.
 */
export function localizedPath(path: string, lang: Lang): string {
  const canonical = stripLang(path.startsWith('/') ? path : `/${path}`);
  if (lang === defaultLang) return canonical;
  return canonical === '/' ? `/${lang}/` : `/${lang}${canonical}`;
}

/** Перекладач для конкретної мови. */
export function useTranslations(lang: Lang) {
  return function t(key: UiKey): string {
    return ui[lang][key] ?? ui[defaultLang][key];
  };
}

/** Абсолютний URL для canonical / OG / hreflang. */
export function absoluteUrl(path: string, site: URL | undefined): string {
  if (!site) return path;
  return new URL(path, site).href;
}

export type Alternate = { hreflang: string; href: string };

/**
 * hreflang-альтернативи для поточної сторінки + x-default на мову за замовчуванням.
 * `path` — будь-який шлях сторінки, префікс мови буде знятий автоматично.
 */
export function getAlternates(path: string, site: URL | undefined): Alternate[] {
  const canonical = stripLang(path);
  const list: Alternate[] = locales.map((lang) => ({
    hreflang: lang,
    href: absoluteUrl(localizedPath(canonical, lang), site),
  }));
  list.push({
    hreflang: 'x-default',
    href: absoluteUrl(localizedPath(canonical, defaultLang), site),
  });
  return list;
}

const localeTag: Record<Lang, string> = {
  en: 'en-US',
  uk: 'uk-UA',
};

/** BCP-47 тег для <html lang> та Intl. */
export function htmlLang(lang: Lang): string {
  return localeTag[lang];
}

/**
 * 'YYYY-MM' → 'Apr 2025' / 'кві 2025'.
 * Некоректний рядок повертається як є, щоб контент не «зникав» мовчки.
 */
export function formatMonth(value: string, lang: Lang): string {
  const match = /^(\d{4})-(\d{2})$/.exec(value.trim());
  if (!match) return value;
  const year = Number(match[1]);
  const month = Number(match[2]);
  const date = new Date(Date.UTC(year, month - 1, 1));
  return new Intl.DateTimeFormat(localeTag[lang], {
    month: 'short',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(date);
}

/** 'Apr 2025 — present' з урахуванням мови. */
export function formatPeriod(
  start: string | undefined,
  end: string | null | undefined,
  lang: Lang,
): string {
  const t = useTranslations(lang);
  if (!start) return '';
  const from = formatMonth(start, lang);
  const to = end ? formatMonth(end, lang) : t('case.present');
  return `${from} — ${to}`;
}

/**
 * Набір параметрів для getStaticPaths() сторінок під [...lang]:
 * en (мова за замовчуванням) віддає порожній префікс → '/', '/cv';
 * uk → '/uk/', '/uk/cv'.
 */
export function langStaticPaths() {
  return locales.map((lang) => ({
    params: { lang: lang === defaultLang ? undefined : lang },
    props: { lang },
  }));
}
