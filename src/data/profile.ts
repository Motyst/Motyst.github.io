/**
 * Everything about you lives here. Edit freely — the whole site reads from it.
 */
export const profile = {
  name: 'Your Name',
  role: 'Software Developer',
  location: 'Somewhere, Earth',
  /** Short line under your name in the hero. */
  headline: 'I build tools, apps and systems — and ship them.',
  /** A few sentences for the About section. Each string is a paragraph. */
  bio: [
    'I am a developer who enjoys taking ideas from a rough sketch to something people can actually use. I care about clean interfaces, reliable systems and learning whatever a project demands.',
    'Every project below taught me something new — the Skills section is built directly from that work, so you can see exactly where each ability comes from.',
  ],
  /** Shown as a small status pill in the hero. Set to '' to hide. */
  availability: 'Open to new opportunities',
  email: 'hello@example.com',
  /** Optional: path to a PDF in /public, e.g. '/cv.pdf'. Set to '' to hide. */
  resume: '',
  socials: [
    { label: 'GitHub', url: 'https://github.com/your-handle' },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/your-handle' },
  ],
  /** Experience / education timeline, newest first. */
  timeline: [
    {
      period: '2025 — Now',
      title: 'Independent Developer',
      place: 'Self-employed',
      description: 'Designing and building my own products end to end.',
    },
    {
      period: '2022 — 2025',
      title: 'Developer',
      place: 'Company Name',
      description: 'Built internal tools and customer-facing features.',
    },
    {
      period: '2018 — 2022',
      title: 'BSc Computer Science',
      place: 'University Name',
      description: '',
    },
  ],
};

export type Profile = typeof profile;
