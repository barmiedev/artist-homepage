import { defineField, defineType } from 'sanity';

export const creditType = defineType({
  name: 'credit',
  type: 'document',
  fields: [
    defineField({
      name: 'person',
      type: 'reference',
      to: [{ type: 'person' }],
    }),
    defineField({
      name: 'role',
      type: 'string',
      validation: rule => rule.required(),
      description: 'IMPORTANT! For the translations to work, it should be in the following format: role;role(tracks:1,2);role;...',
    }),
    defineField({
      name: 'description',
      type: 'blockContent',
    }),
  ],
});
