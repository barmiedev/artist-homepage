import { defineField, defineType } from 'sanity';

export const listenType = defineType({
  name: 'listen',
  type: 'document',
  fields: [
    defineField({
      title: 'title',
      name: 'title',
      type: 'string',
    }),
    defineField({
      title: 'spotify',
      name: 'spotifyUrl',
      type: 'url',
    }),
    defineField({
      title: 'apple music',
      name: 'appleUrl',
      type: 'url',
    }),
    defineField({
      title: 'youtube',
      name: 'youtubeUrl',
      type: 'url',
    }),
    defineField({
      title: 'soundcloud',
      name: 'soundcloudUrl',
      type: 'url',
    }),
    defineField({
      title: 'bandcamp',
      name: 'bandcampUrl',
      type: 'url',
    }),
    defineField({
      title: 'tidal',
      name: 'tidalUrl',
      type: 'url',
    }),
  ],
});
