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
      type: 'url',
    }),
    defineField({
      name: 'twitter',
      type: 'url',
    }),
    defineField({
      name: 'facebook',
      type: 'url',
    }),
    defineField({
      name: 'spotify',
      type: 'url',
    }),
    defineField({
      name: 'appleMusic',
      type: 'url',
    }),
    defineField({
      name: 'youtube',
      type: 'url',
    }),
    defineField({
      name: 'soundcloud',
      type: 'url',
    }),
    defineField({
      name: 'bandcamp',
      type: 'url',
    }),
    defineField({
      name: 'email',
      type: 'email',
    }),
  ]
});