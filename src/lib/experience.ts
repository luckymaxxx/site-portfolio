import type { Lang } from '../i18n/ui';
import { getProjectsForLang } from './projects';

/** Запис досвіду так, як він лежить у профілі. */
export interface ProfileExperience {
  company: string;
  role: string;
  period: string;
  summary?: string | undefined;
  bullets: string[];
  stack: string[];
  project?: string | null | undefined;
}

/** Запис досвіду після підстановки даних із кейсу. */
export interface ResolvedJob extends ProfileExperience {
  /** Готовий рядок стеку з resumeBlock, якщо в профілі не задано власний список. */
  stackLine?: string | undefined;
}

/**
 * Зшиває досвід із профілю з готовими блоками резюме кейсів.
 *
 * Якщо запис вказує `project: '<slug>'`, то кожне порожнє поле береться
 * з `resumeBlock` цього проекту. Завдяки цьому текст резюме живе в одному
 * місці — у файлі кейсу — і не розходиться між сторінкою проекту й /cv.
 */
export async function resolveExperience(
  entries: ProfileExperience[],
  lang: Lang,
): Promise<ResolvedJob[]> {
  if (entries.length === 0) return [];

  const projects = await getProjectsForLang(lang);
  const bySlug = new Map(projects.map((project) => [project.slug, project.entry.data]));

  return entries.map((job) => {
    const project = job.project ? bySlug.get(job.project) : undefined;
    const block = project?.resumeBlock;

    return {
      ...job,
      company: job.company || project?.title || '',
      role: job.role || block?.role || '',
      period: job.period || block?.period || '',
      summary: job.summary || block?.summary,
      bullets: job.bullets.length > 0 ? job.bullets : (block?.bullets ?? []),
      stack: job.stack,
      stackLine: job.stack.length > 0 ? undefined : block?.stackLine,
    };
  });
}
