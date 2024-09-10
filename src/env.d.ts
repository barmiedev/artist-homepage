/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />
/// <reference types="@sanity/astro/module" />

interface ImportMetaEnv {
  readonly PAGE_TITLE: string;

  readonly PUBLIC_SANITY_PROJECT_ID: string;
  readonly PUBLIC_SANITY_DATASET: string;
  readonly SANITY_STUDIO_BASEPATH: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
