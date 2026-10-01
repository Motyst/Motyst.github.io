import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/**
 * A single piece of media shown on a project page.
 * - image:   a file in /public (e.g. "/media/my-app/home.png") or any URL
 * - video:   an .mp4/.webm file; add a `poster` image for a nicer first frame
 * - youtube: just the video ID (the part after "v=")
 * - embed:   any iframe-able URL (Figma, CodePen, a live demo...)
 */
const media = z.object({
  type: z.enum(['image', 'video', 'youtube', 'embed']),
  src: z.string(),
  poster: z.string().optional(),
  caption: z.string().optional(),
  alt: z.string().optional(),
  /** How the project window frames it: a browser window, a phone, or none. */
  frame: z.enum(['browser', 'phone', 'none']).optional(),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    /** Very short line shown under the title on the project tile. */
    summary: z.string().optional(),
    /** One sentence that sells the project. Shown in the project window. */
    tagline: z.string(),
    /** Icon key from src/data/icons.ts. Falls back to the first letter. */
    icon: z.string().optional(),
    year: z.number().int(),
    status: z.enum(['live', 'completed', 'in-progress', 'archived', 'concept']).default('live'),
    /** Your role on the project, e.g. "Solo developer" or "Frontend lead". */
    role: z.string().optional(),
    /** Featured projects get large cards at the top of the grid. */
    featured: z.boolean().default(false),
    /** Lower numbers show first. Ties are broken by year (newest first). */
    order: z.number().default(100),
    /** Accent color used for the project's generated cover and highlights. */
    accent: z.string().default('#7c9cff'),
    /** Media used on the card + page header. Falls back to a generated cover. */
    cover: media.optional(),
    /** Screenshots, videos, demos, shown in the gallery on the project page. */
    gallery: z.array(media).default([]),
    /** Skills/tools used. These build the site-wide Skills section automatically. */
    skills: z.array(z.string()).default([]),
    /** The workflow / pipeline behind the project, step by step. */
    /** Step icons are keys from src/data/step-icons.ts. */
    workflow: z
      .array(z.object({ title: z.string(), description: z.string(), icon: z.string().optional() }))
      .default([]),
    /** Short outcome bullets or numbers (e.g. "Cut build time by 60%"). */
    highlights: z.array(z.string()).default([]),
    links: z
      .array(
        z.object({
          label: z.string(),
          url: z.string(),
          kind: z.enum(['live', 'repo', 'download', 'video', 'docs', 'other']).default('other'),
        }),
      )
      .default([]),
    /** Private/client work: shows a note that the code isn't public. */
    private: z.boolean().default(false),
    /** Set to true to hide a project without deleting it. */
    draft: z.boolean().default(false),
  }),
});

export const collections = { projects };
