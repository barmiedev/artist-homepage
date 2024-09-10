import { defineField, defineType } from 'sanity';

export const trackType = defineType({
  name: 'track',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'releaseDate',
      type: 'date',
    }),
    defineField({
      name: 'album',
      type: 'reference',
      to: [{ type: 'album' }],
    }),
    defineField({
      name: 'trackNumber',
      type: 'number',
    }),
    defineField({
      name: 'about',
      type: 'blockContent',
    }),
    defineField({
      name: 'featuring',
      type: 'array',
      of: [{ type: 'credit' }],
    }),
    defineField({
      name: 'listen',
      type: 'reference',
      to: [{ type: 'listen' }],
    }),
    defineField({
      name: 'lyrics',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'lyrics' }] }],
    }),
  ],
});
