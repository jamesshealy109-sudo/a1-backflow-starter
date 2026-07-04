import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.a-1backflowspecialties.com',
  integrations: [sitemap()],
});
