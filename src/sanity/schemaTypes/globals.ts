import { defineField, defineType } from 'sanity';

export const globalsType = defineType({
  name: 'globals',
  type: 'document',
  fields: [
    // site metadata for SEO
    defineField({
      name: 'siteTitle',
      type: 'string',
      validation: rule => rule.required(),
    }),
    defineField({
      name: 'siteDescription',
      type: 'string',
      validation: rule => rule.required(),
    }),
    defineField({
      name: 'siteKeywords',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'siteAuthor',
      type: 'string',
    }),
    defineField({
      name: 'siteUrl',
      type: 'url',
      validation: rule => rule.required(),
    }),
    defineField({
      name: 'siteImage',
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
      name: 'siteFavicon',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: rule => rule.required(),
    }),
    // social media links
    defineField({
      name: 'instagram',
      type: 'string',
    }),
    defineField({
      name: 'twitter',
      type: 'string',
    }),
    defineField({
      name: 'facebook',
      type: 'string',
    }),
    defineField({
      name: 'spotify',
      type: 'string',
    }),
    defineField({
      name: 'appleMusic',
      type: 'string',
    }),
    defineField({
      name: 'youtube',
      type: 'string',
    }),
    defineField({
      name: 'soundcloud',
      type: 'string',
    }),
    defineField({
      name: 'bandcamp',
      type: 'string',
    }),
    defineField({
      name: 'email',
      type: 'string',
    }),
  ]
});