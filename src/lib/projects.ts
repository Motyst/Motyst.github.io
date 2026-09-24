import { getCollection, type CollectionEntry } from 'astro:content';
import { categoryOrder, skillCategories } from '@/data/skills';

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

const categoryOf = new Map<string, string>(
  Object.entries(skillCategories).flatMap(([category, skills]) =>
    skills.map((skill) => [skill.toLowerCase(), category] as const),
  ),
);

/**
 * Builds the Skills section from project data: every skill, the projects
 * that used it, grouped by category and sorted by how often it was used.
 */
export function groupSkills(projects: Project[]): SkillGroup[] {
  const bySkill = new Map<string, SkillSummary>();
  for (const project of projects) {
    for (const name of project.data.skills) {
      const slug = slugify(name);
      const entry = bySkill.get(slug) ?? { name, slug, projects: [] };
      entry.projects.push(project);
      bySkill.set(slug, entry);
    }
  }

  const groups = new Map<string, SkillSummary[]>();
  for (const skill of bySkill.values()) {
    const category = categoryOf.get(skill.name.toLowerCase()) ?? 'Other';
    groups.set(category, [...(groups.get(category) ?? []), skill]);
  }

  const rank = (c: string) => (c === 'Other' ? Infinity : categoryOrder.indexOf(c) === -1 ? 999 : categoryOrder.indexOf(c));
  return [...groups.entries()]
    .sort(([a], [b]) => rank(a) - rank(b))
    .map(([category, skills]) => ({
      category,
      skills: skills.sort((a, b) => b.projects.length - a.projects.length || a.name.localeCompare(b.name)),
    }));
}

export const statusLabel: Record<Project['data']['status'], string> = {
  live: 'Live',
  'in-progress': 'In progress',
  archived: 'Archived',
  concept: 'Concept',
};
