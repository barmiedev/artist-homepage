import netlify from '@astrojs/netlify';
import node from '@astrojs/node';
import react from '@astrojs/react';
import sanity from '@sanity/astro';
import { defineConfig } from 'astro/config';
import svelte from '@astrojs/svelte';
import tailwind from '@astrojs/tailwind';
import { loadEnv } from 'vite';
import sitemap from '@astrojs/sitemap';
const {
  PUBLIC_SANITY_DATASET,
  PUBLIC_SANITY_PROJECT_ID,
  SANITY_STUDIO_BASEPATH,
} = loadEnv(process.env.NODE_ENV || '', process.cwd(), '');

let adapter = netlify();

if (process.argv.includes('--node')) {
  adapter = node({ mode: 'standalone' });
}

// https://astro.build/config
export default defineConfig({
  output: 'hybrid',
  adapter: adapter,
  site: 'https://www.bartekmiezynski.com',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'pl', 'de'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [
    sanity({
      projectId: PUBLIC_SANITY_PROJECT_ID,
      dataset: PUBLIC_SANITY_DATASET,
      useCdn: false, // building static site, so don't use CDN
      apiVersion: '2024-11-24',
      studioBasePath: SANITY_STUDIO_BASEPATH,
    }),
    react(),
    tailwind(),
    svelte(),
    sitemap({
      filter: (page) => page !== 'https://www.bartekmiezynski.com/admin',
      customPages: ['https://www.bartekmiezynski.com/admin'],
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en', // The `defaultLocale` value must present in `locales` keys
          pl: 'pl',
          de: 'de',
        },
      },
    }),
  ],
});
