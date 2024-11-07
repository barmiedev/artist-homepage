import { format } from 'date-fns';
import { defineField, defineType } from 'sanity';

export const gigType = defineType({
  name: 'gig',
  type: 'document',
  fields: [
    defineField({
      name: 'date',
      type: 'date',
      validation: rule => rule.required(),
    }),
    defineField({
      name: 'city',
      type: 'string',
      validation: rule => rule.required(),
    }),
    defineField({
      name: 'country',
      type: 'string',
      validation: rule => rule.required(),
    }),
    defineField({
      name: 'venue',
      type: 'string',
      validation: rule => rule.required(),
    }),
    defineField({
      name: 'about',
      type: 'blockContent',
    }),
    defineField({
      name: 'image',
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
      name: 'facebookEventUrl',
      type: 'url',
    }),
    defineField({
      name: 'ticketsUrl',
      type: 'url',
    }),
    defineField({
      name: 'otherBands',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {
        source: (doc, _) => {
          const date = doc.date ? doc.date as Date : '';
          const city = doc.city ? doc.city as string : '';
          return `${doc.date && format(date, 'yyyy-MM-dd')}-${city.split(' ').join('-').toLowerCase()}`},
      },
      validation: rule => rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'city',
      date: 'date'
    },
    prepare(selection) {
      const { title, date } = selection;
      return {
        title: title,
        subtitle: date ? format(date, 'yyyy-MM-dd') : '',
      };
    },
  }
});