import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://your-site.pages.dev',
  integrations: [sitemap()],
});
