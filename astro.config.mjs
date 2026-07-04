import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://jamesshealy109-sudo.github.io',
  base: '/a1-backflow-production',
  integrations: [sitemap()],
  output: 'static'
});
