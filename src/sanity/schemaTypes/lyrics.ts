import { defineField, defineType } from 'sanity';

export const lyricsType = defineType({
  name: 'lyrics',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'track',
      type: 'reference',
      to: [{ type: 'track' }],
    }),
    defineField({
      name: 'text',
      type: 'blockContent',
    }),
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
    }),
  ],
});
