import { getCollection, type CollectionEntry } from 'astro:content';
import type { Lang } from '../i18n/ui';
import { locales } from '../i18n/utils';

export type ProjectEntry = CollectionEntry<'projects'>;

/** Одна мовна версія кейсу + чи це переклад, чи оригінал іншою мовою. */
export interface LocalizedProject {
  slug: string;
  entry: ProjectEntry;
  /** false → перекладу цією мовою немає, показуємо оригінал із поміткою. */
  translated: boolean;
}

function sortProjects(a: ProjectEntry, b: ProjectEntry): number {
  if (a.data.order !== b.data.order) return a.data.order - b.data.order;
  return a.data.title.localeCompare(b.data.title);
}

/** Усі кейси, крім чернеток. */
export async function getPublishedProjects(): Promise<ProjectEntry[]> {
  const entries = await getCollection('projects', ({ data }) => !data.draft);
  return entries.sort(sortProjects);
}

/** slug → мовні версії цього кейсу. */
export async function getProjectsBySlug(): Promise<Map<string, Partial<Record<Lang, ProjectEntry>>>> {
  const entries = await getPublishedProjects();
  const map = new Map<string, Partial<Record<Lang, ProjectEntry>>>();

  for (const entry of entries) {
    const group = map.get(entry.data.slug) ?? {};
    group[entry.data.lang] = entry;
    map.set(entry.data.slug, group);
  }

  return map;
}

/**
 * Список кейсів для конкретної мови у порядку показу.
 * Якщо перекладу немає — беремо версію іншою мовою, щоб проект не зникав.
 */
export async function getProjectsForLang(lang: Lang): Promise<LocalizedProject[]> {
  const groups = await getProjectsBySlug();
  const list: LocalizedProject[] = [];

  for (const [slug, group] of groups) {
    const translated = group[lang];
    const fallback = locales.map((code) => group[code]).find(Boolean);
    const entry = translated ?? fallback;
    if (!entry) continue;
    list.push({ slug, entry, translated: Boolean(translated) });
  }

  return list.sort((a, b) => sortProjects(a.entry, b.entry));
}

/** Канонічний шлях кейсу без мовного префіксу. */
export function projectPath(slug: string): string {
  return `/projects/${slug}`;
}
