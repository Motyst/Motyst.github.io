/**
 * Everything about you lives here. Edit freely, the whole site reads from it.
 */
export const profile = {
  name: 'Andris Volkovs',
  role: 'AI Automation Developer',
  location: 'Dublin, Ireland',
  /** Short line under your name in the hero. */
  headline: 'I turn repetitive work into bots and AI pipelines that run on their own.',
  /** A few sentences for the About section. Each string is a paragraph. */
  bio: [
    "I'm a developer in Dublin building bots, automations and AI-powered systems in Python and TypeScript. Since January 2026 I've been building independently, from live Telegram bots to multi-network publishing pipelines, working with Claude, ChatGPT, Gemini and Grok every day.",
  ],
  /** "How I work" points in the About section. Icons: src/data/ui-icons.ts */
  principles: [
    { icon: 'user-check', color: '#34d399', title: 'Human in the loop', text: 'Review queues and approval steps, so nothing ships unchecked.' },
    { icon: 'server', color: '#7c9cff', title: 'Built for production', text: 'Systems that run every day for real users, not demos.' },
    { icon: 'zap', color: '#fbbf24', title: 'Automate the boring part', text: 'Machines do the repetitive work, people make the calls.' },
  ],
  /** Your photo for the About section, e.g. '/me.jpg' in /public. '' shows your initials. */
  photo: '',
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
