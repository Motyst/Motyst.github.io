import { getCollection, type CollectionEntry } from 'astro:content';
import { categoryOrder, maxPerGroup, skillCategories } from '@/data/skills';

export type Project = CollectionEntry<'projects'>;

/** All published projects, sorted by `order` then newest year first. */
export async function getProjects(): Promise<Project[]> {
  const all = await getCollection('projects', ({ data }) => !data.draft);
  return all.sort((a, b) => a.data.order - b.data.order || b.data.year - a.data.year);
}

export function slugify(value: string): string {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

export interface SkillSummary {
  name: string;
  slug: string;
  projects: Project[];
}

export interface SkillGroup {
  category: string;
  skills: SkillSummary[];
}

/**
 * Builds the homepage Skills section from project data: skills grouped and
 * ordered as in src/data/skills.ts, capped at `maxPerGroup` per group.
 */
export function groupSkills(projects: Project[]): SkillGroup[] {
  const used = new Map<string, SkillSummary>();
  for (const project of projects) {
    for (const name of project.data.skills) {
      const slug = slugify(name);
      const entry = used.get(slug) ?? { name, slug, projects: [] };
      entry.projects.push(project);
      used.set(slug, entry);
    }
  }

  return categoryOrder
    .map((category) => ({
      category,
      skills: skillCategories[category]
        .map((name) => used.get(slugify(name)))
        .filter((s): s is SkillSummary => Boolean(s))
        .slice(0, maxPerGroup),
    }))
    .filter((g) => g.skills.length > 0);
}

export const statusLabel: Record<Project['data']['status'], string> = {
  live: 'Live',
  completed: 'Completed',
  'in-progress': 'In progress',
  archived: 'Archived',
  concept: 'Concept',
};
