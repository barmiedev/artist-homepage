import { defineField, defineType } from 'sanity';

export const announcementType = defineType({
  name: 'announcement',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: rule => rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: rule => rule.required(),
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
      name: 'text',
      type: 'blockContent',
    }),
    defineField({
      name: 'album',
      type: 'reference',
      to: [{ type: 'album' }],
    }),
    defineField({
      name: 'gigs',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'gig' }] }],
    }),
    defineField({
      name: 'listen',
      type: 'reference',
      to: [{ type: 'listen' }],
    })
  ],
});