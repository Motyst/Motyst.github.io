/**
 * Design lab variants. Each id gets a full preview page at
 * /lab/preview/<id>/ (the real homepage with that one change applied).
 * Components read the `variant` prop and switch to the matching version.
 * Once a pick is applied for real, remove its ids and content from here.
 */
export const labVariants = ['about-a', 'about-b'] as const;
export type LabVariant = (typeof labVariants)[number];

export interface Principle {
  icon: string;
  color: string;
  title: string;
  text: string;
}

const results: Principle = {
  icon: 'target',
  color: '#fb7185',
  title: 'Results first',
  text: 'I judge a project by what it changes: hours saved, posts published, risk avoided. Clever code comes second.',
};
const systems: Principle = {
  icon: 'workflow',
  color: '#22d3ee',
  title: 'Systems thinking',
  text: 'I look at the whole pipeline, not single tasks. Get the system right and good results keep coming.',
};
const leverage: Principle = {
  icon: 'sparkles',
  color: '#a78bfa',
  title: 'AI is leverage',
  text: 'AI can create massive value. With a clear goal, it lets one person deliver what used to take a team.',
};
const human: Principle = {
  icon: 'user-check',
  color: '#34d399',
  title: 'Human in the loop',
  text: 'Machines do the heavy lifting, people make the calls. Every system has a checkpoint.',
};

export const aboutVariants: Record<'about-a' | 'about-b', { quote?: string; principles: Principle[] }> = {
  // A: four "how I think" cards in a 2 × 2 grid
  'about-a': { principles: [results, systems, leverage, human] },
  // B: a short statement on AI, then three cards
  'about-b': {
    quote:
      'AI is incredible leverage. Point it at a real problem, build a solid system around it, and one person can deliver what used to take a team.',
    principles: [results, systems, human],
  },
};
