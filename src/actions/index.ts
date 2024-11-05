import { defineAction } from 'astro:actions';
import { z } from 'astro:schema';

export const server = {
  newsletter: defineAction({
    accept: 'form',
    input: z.object({
      email: z.string().email(),
      terms: z.boolean(),
    }),
    handler: async ({ email, terms }) => {
      return { email, terms };
    },
  }),
};
