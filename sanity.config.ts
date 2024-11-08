import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { schema } from './src/sanity/schemaTypes';

const singletonActions = new Set(['publish', 'discardChanges', 'restore']);
const singletonTypes = new Set(['globals']);

// PROTIP:
// if you want to use Sanity Studio locally, comment out the process.env lines (remain the import.meta.env lines)

export default defineConfig({
  projectId:
    process.env.PUBLIC_SANITY_PROJECT_ID ||
    import.meta.env.PUBLIC_SANITY_PROJECT_ID,
  dataset:
    process.env.PUBLIC_SANITY_DATASET || import.meta.env.PUBLIC_SANITY_DATASET,
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            // singleton document type
            S.listItem()
              .title('Globals')
              .id('globals')
              .child(
                // Instead of rendering a list of documents, we render a single
                // document, specifying the `documentId` manually to ensure
                // that we're editing the single instance of the document
                S.document()
                  .schemaType('globals')
                  .documentId('globals'),
              ),

            // Regular document types
            S.documentTypeListItem('album').title('Albums'),
            S.documentTypeListItem('credit').title('Credits'),
            S.documentTypeListItem('listen').title('Listen links'),
            S.documentTypeListItem('lyrics').title('Lyrics'),
            S.documentTypeListItem('person').title('People'),
            S.documentTypeListItem('track').title('Tracks'),
            S.documentTypeListItem('gig').title('Gigs'),
            S.documentTypeListItem('article').title('Articles'),
            S.documentTypeListItem('announcement').title('Announcements'),
          ]),
    }),
  ],
  schema: {
    types: schema.types,
    templates: (templates) =>
      templates.filter(({ schemaType }) => !singletonTypes.has(schemaType)),
  },
  document: {
    actions: (input, context) =>
      singletonTypes.has(context.schemaType)
        ? input.filter(({ action }) => action && singletonActions.has(action))
        : input,
  },
});
