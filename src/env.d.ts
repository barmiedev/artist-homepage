/// <reference path="../.astro/types.d.ts" />

interface ImportMetaEnv {
  readonly PAGE_TITLE: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
