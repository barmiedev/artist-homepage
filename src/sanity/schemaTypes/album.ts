import { defineField, defineType } from 'sanity';

export const albumType = defineType({
  name: 'album',
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
      name: 'cover',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
        },
      ],
    }),
    defineField({
      name: 'recordedAt',
      type: 'string',
    }),
    defineField({
      name: 'recordedDuring',
      type: 'array',
      of: [{ type: 'date' }],
    }),
    defineField({
      name: 'recordedBy',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'person' }] }],
    }),
    defineField({
      name: 'mixedBy',
      type: 'reference',
      to: [{ type: 'person' }],
    }),
    defineField({
      name: 'masteredBy',
      type: 'reference',
      to: [{ type: 'person' }],
    }),
    defineField({
      name: 'releaseDate',
      type: 'date',
    }),
    defineField({
      name: 'tracks',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'track' }] }],
    }),
    defineField({
      name: 'listen',
      type: 'reference',
      to: [{ type: 'listen' }],
    }),
  ],
});
