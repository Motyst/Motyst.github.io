/**
 * Skill groups for the homepage. Skills come from each project's `skills`
 * list; this file decides the group and the order (first = most important).
 * The homepage shows at most `maxPerGroup` per group; every skill is still
 * listed inside its project window. Unlisted skills are left off the homepage.
 */
export const skillCategories: Record<string, string[]> = {
  'AI & LLMs': ['Claude API', 'LLMs', 'Prompt Engineering', 'Whisper', 'Claude Code', 'AI Workflow Design'],
  'Bots & Automation': [
    'Telegram Bot API',
    'Automation',
    'Human-in-the-loop',
    'Web Scraping',
    'Scheduling',
    'X API',
    'Gamification',
    'Analytics',
  ],
  'Backend & Data': ['Python', 'FastAPI', 'Async Python', 'REST APIs', 'WebSockets', 'SQLite', 'SQLAlchemy', 'Real-time Systems'],
  'Frontend & Ops': ['TypeScript', 'React', 'Streamlit', 'Linux', 'VPS Deployment', 'Product Design'],
};

export const maxPerGroup = 6;

/** Order the categories appear in. */
export const categoryOrder = Object.keys(skillCategories);
