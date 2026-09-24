/**
 * Everything about you lives here. Edit freely — the whole site reads from it.
 */
export const profile = {
  name: 'Andris Volkovs',
  role: 'AI Automation Developer',
  location: 'Dublin, Ireland',
  /** Short line under your name in the hero. */
  headline: 'I build bots, automations and AI-powered systems that run in production.',
  /** A few sentences for the About section. Each string is a paragraph. */
  bio: [
    "I'm a software developer in Dublin who builds bots, automations and production systems in Python and TypeScript. I work with the main LLM tools and APIs every day — Claude, ChatGPT, Gemini and Grok — and I like systems that keep a human in the loop: review queues, approval steps and pipelines where nothing ships until it's checked.",
    'Since January 2026 I have been building independently: a multi-network publishing automation, a live Telegram training bot for a paid community, a full brand content production system and a daily AI research briefing. Before that, an intensive C++17 and Solidity program with Yandex Practicum had me build an interpreter, a search engine and a transit map renderer from scratch.',
    'Four years in Trust & Safety at Accenture gave me habits I bring to every system: accuracy, process discipline, clear documentation and sound judgement under SLA pressure.',
  ],
  /** Shown as a small status pill in the hero. Set to '' to hide. */
  availability: '',
  /** Show Live / Completed labels on projects. */
  showProjectStatus: false,
  email: 'anvolkovs@gmail.com',
  /** Optional: path to a PDF in /public, e.g. '/cv.pdf'. Set to '' to hide. */
  resume: '',
  languages: ['Latvian (native)', 'Russian (native)', 'English (professional)'],
  socials: [{ label: 'GitHub', url: 'https://github.com/Motyst' }],
  /** Experience / education timeline, newest first. */
  timeline: [
    {
      period: '2026 — Now',
      title: 'Independent Software & AI Developer',
      place: 'Self-directed · Dublin',
      description: 'Publishing automation, a live Telegram bot, a brand content system and an AI research bot.',
    },
    {
      period: '2025',
      title: 'C++ & Solidity Developer, Intensive Training',
      place: 'Yandex Practicum · Remote',
      description: 'C++17 systems programming, memory management, sanitizers, GDB, stress testing and smart contracts.',
    },
    {
      period: '2021 — 2025',
      title: 'Platform Partner, Trust & Safety',
      place: 'Accenture · Dublin',
      description: 'Reviewed high volumes of flagged content against changing policy, under SLA.',
    },
    {
      period: '2016 — 2021',
      title: 'Customer Service Specialist',
      place: 'Circle K · Dublin',
      description: 'Customer issue resolution, store order logistics and daily operations.',
    },
    {
      period: '2015 — 2016',
      title: 'Web Designer & Copywriter',
      place: 'Freelance · Dublin',
      description: 'Websites and conversion-focused copy for small businesses.',
    },
    {
      period: '2012 — 2014',
      title: 'Cabin Crew',
      place: 'Ryanair · Dublin',
      description: 'Safety-critical, fast-paced work with multinational teams.',
    },
    {
      period: '2008 — 2012',
      title: 'Software Development',
      place: 'Riga Technical College · Riga',
      description: 'Algorithms, data structures and programming fundamentals.',
    },
  ],
};

export type Profile = typeof profile;
