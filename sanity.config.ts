import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { schema } from './src/sanity/schemaTypes';

export default defineConfig({
  projectId:
    process.env.PUBLIC_SANITY_PROJECT_ID ||
    import.meta.env.PUBLIC_SANITY_PROJECT_ID,
  dataset:
    process.env.PUBLIC_SANITY_DATASET || import.meta.env.PUBLIC_SANITY_DATASET,
  plugins: [structureTool()],
  schema,
});
