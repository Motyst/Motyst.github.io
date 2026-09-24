/**
 * Skill categories. Skills themselves come from the `skills` list of each
 * project — this file only decides which group a skill appears in.
 * Any skill not listed here lands in "Other", so nothing is ever lost.
 */
export const skillCategories: Record<string, string[]> = {
  Languages: ['TypeScript', 'JavaScript', 'Python', 'Rust', 'Go', 'SQL', 'C#', 'Kotlin', 'Swift'],
  Frontend: ['React', 'Astro', 'Svelte', 'Vue', 'CSS', 'Tailwind', 'Three.js', 'WebGL', 'Figma'],
  Backend: ['Node.js', 'FastAPI', 'PostgreSQL', 'SQLite', 'Redis', 'REST APIs', 'GraphQL', 'WebSockets'],
  'Data & AI': ['LLMs', 'Computer Vision', 'Pandas', 'PyTorch', 'Data Visualisation'],
  'Infra & Tooling': ['Docker', 'Linux', 'Raspberry Pi', 'CI/CD', 'GitHub Actions', 'Nginx', 'Cloudflare'],
  Practices: ['Product Design', 'UX Research', 'Automation', 'Testing', 'Technical Writing'],
};

/** Order the categories appear in. Unlisted categories go last. */
export const categoryOrder = Object.keys(skillCategories);
