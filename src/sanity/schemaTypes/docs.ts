import { defineField, defineType } from 'sanity';

export const docsType = defineType({
  name: 'docs',
  type: 'document',
  fields: [
    defineField({
      name: 'language',
      type: 'string',
      options: {
        list: [
          'pl',
          'en',
          'de',
          'cz',
          'sk',
          'fr',
          'es',
          'it',
          'ru',
          'jp',
          'cn',
          'kr',
          'uk',
        ],
      },
      validation: rule => rule.required(),
    }),
    defineField({
      name: 'rider',
      type: 'file',
      title: 'Technical rider',
    }),
    defineField({
      name: 'techRiderUrl',
      type: 'url',
      title: 'Technical rider URL',
    }),
    defineField({
      name: 'pressKitUrl',
      type: 'url',
      title: 'Press Kit URL',
    }),
    defineField({
      name: 'concertOfferUrl',
      type: 'url',
      title: 'Concert Offer URL',
    }),
    defineField({
      name: 'hospitalityRider',
      type: 'file',
      title: 'Hospitality rider',
    }),
    defineField({
      name: 'hospitalityRiderUrl',
      type: 'url',
      title: 'Hospitality rider URL',
    }),
    defineField({
      name: 'stagePlot',
      type: 'file',
      title: 'Stage plot',
    }),
    defineField({
      name: 'stagePlotUrl',
      type: 'url',
      title: 'Stage plot URL',
    }),
    defineField({
      name: 'additionalInfo',
      type: 'blockContent',
      title: 'Additional info',
    }),
  ],
  preview: {
    select: {
      title: 'language',
    },
    prepare(selection) {
      const { title } = selection;
      return {
        title: `Docs in: ${title.toUpperCase()}`,
      };
    },
  }
});