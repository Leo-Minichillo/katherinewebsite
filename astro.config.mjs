// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Deployed via GitHub Pages at <owner>.github.io/<repo>.
  // When a custom domain is added: set `site` to it, delete `base`,
  // and add public/CNAME (see README).
  site: 'https://leo-minichillo.github.io',
  base: '/katherinewebsite',
  vite: {
    plugins: [tailwindcss()],
  },
});
