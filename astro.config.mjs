// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // Set this to your real domain once deployed (used for sitemap + social cards).
  site: 'https://motyst.github.io',
  integrations: [sitemap({ filter: (page) => !page.includes('/lab/') })],
  prefetch: { prefetchAll: true },
});
