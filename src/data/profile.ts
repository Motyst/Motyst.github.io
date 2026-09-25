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
  /** A short statement shown under the bio. Set to '' to hide. */
  statement:
    'AI is incredible leverage. Point it at a real problem, build a solid system around it, and one person can deliver what used to take a team.',
  /** "How I think" cards in the About section. Icons: src/data/ui-icons.ts or step-icons.ts */
  principles: [
    {
      icon: 'target',
      color: '#fb7185',
      title: 'Results first',
      text: 'I judge a project by what it changes: hours saved, posts published, risk avoided. Clever code comes second.',
    },
    {
      icon: 'workflow',
      color: '#22d3ee',
      title: 'Systems thinking',
      text: 'I look at the whole pipeline, not single tasks. Get the system right and good results keep coming.',
    },
    {
      icon: 'user-check',
      color: '#34d399',
      title: 'Human in the loop',
      text: 'Machines do the heavy lifting, people make the calls. Every system has a checkpoint.',
    },
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
