import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sanity from '@sanity/astro';

import vercel from '@astrojs/vercel';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  integrations: [sanity({
    projectId: '3u2452q3',
    dataset: 'production',
    useCdn: true,
  }), react()],

  vite: {
    plugins: [tailwindcss()]
  },

  adapter: vercel({
    webAnalytics: { enabled: true }
  })
});