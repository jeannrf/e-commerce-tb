import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sanity from '@sanity/astro';

// https://astro.build/config
export default defineConfig({
  integrations: [
    sanity({
      projectId: '3u2452q3',
      dataset: 'production',
      useCdn: true,
      studioBasePath: '/admin',
    }),
  ],
  vite: {
    plugins: [tailwindcss()]
  }
});