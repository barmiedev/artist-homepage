// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import sanity from '@sanity/astro';

import { loadEnv } from 'vite';
const {
  PUBLIC_SANITY_DATASET,
  PUBLIC_SANITY_PROJECT_ID,
  SANITY_STUDIO_BASEPATH,
} = loadEnv(process.env.NODE_ENV || '', process.cwd(), '');

// https://astro.build/config
export default defineConfig({
  integrations: [
    sanity({
      projectId: PUBLIC_SANITY_PROJECT_ID,
      dataset: PUBLIC_SANITY_DATASET,
      useCdn: false, // building static site, so don't use CDN
      apiVersion: '2024-09-08',
      studioBasePath: SANITY_STUDIO_BASEPATH,
    }),
    react(),
  ],
});
