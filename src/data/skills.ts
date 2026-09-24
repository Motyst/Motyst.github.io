/**
 * Skill categories. Skills themselves come from the `skills` list of each
 * project — this file only decides which group a skill appears in.
 * Any skill not listed here lands in "Other", so nothing is ever lost.
 */
export const skillCategories: Record<string, string[]> = {
  Languages: ['Python', 'C++', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'SQL', 'Solidity'],
  'AI & LLMs': ['Claude API', 'LLMs', 'Prompt Engineering', 'Whisper', 'Claude Code', 'AI Workflow Design'],
  'Backend & APIs': [
    'FastAPI',
    'REST APIs',
    'WebSockets',
    'Telegram Bot API',
    'X API',
    'SQLite',
    'SQLAlchemy',
    'Async Python',
    'Web Scraping',
  ],
  Frontend: ['React', 'Astro', 'SVG', 'Streamlit'],
  'Systems & CS': [
    'Algorithms',
    'Data Structures',
    'Interpreters',
    'Parsing',
    'OOP',
    'Information Retrieval',
    'Geo Projection',
    'Unit Testing',
    'Real-time Systems',
  ],
  'Infra & Tooling': ['Linux', 'VPS Deployment', 'Git', 'Scheduling', 'CLI Tools', 'ffmpeg', 'yt-dlp'],
  'Product & Process': [
    'Automation',
    'Human-in-the-loop',
    'Product Design',
    'Gamification',
    'Analytics',
    'Content Operations',
    'Technical Writing',
    'UX Design',
  ],
};

/** Order the categories appear in. Unlisted categories go last. */
export const categoryOrder = Object.keys(skillCategories);
