/**
 * Everything about you lives here. Edit freely, the whole site reads from it.
 */
export const profile = {
  name: 'Andris Volkovs',
  role: 'AI Automation Developer',
  location: 'Dublin, Ireland',
  /** Short line under your name in the hero. */
  headline: 'I build bots, automations and AI-powered systems that run in production.',
  /** A few sentences for the About section. Each string is a paragraph. */
  bio: [
    "I'm a developer in Dublin building bots, automations and AI-powered systems in Python and TypeScript. I work with Claude, ChatGPT, Gemini and Grok every day.",
    "Since January 2026 I've been building independently, from live Telegram bots to multi-network publishing pipelines. I like systems that keep a human in the loop: review queues, approval steps and pipelines where nothing ships until it's checked.",
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
};

export type Profile = typeof profile;
