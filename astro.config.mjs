// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Update this to the real domain once it's registered (see README).
  site: 'https://katherinesabsurdities.com',
  vite: {
    plugins: [tailwindcss()],
  },
});
