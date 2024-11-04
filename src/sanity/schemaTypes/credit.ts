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
    }),
    defineField({
      name: 'description',
      type: 'blockContent',
    }),
  ],
});
