import { defineField, defineType } from 'sanity';

export const articleType = defineType({
  name: 'article',
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
      validation: rule => rule.required(),
    }),
    defineField({
      name: 'publishedAt',
      type: 'datetime',
      validation: rule => rule.required(),
    }),
    defineField({
      name: 'text',
      type: 'blockContent',
    }),
  ],
});