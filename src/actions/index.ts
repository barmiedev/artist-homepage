import { defineAction } from 'astro:actions';
import { z } from 'astro:schema';
import { sendEmail } from '@/lib/resend';

const catchEmailError = (error: unknown) => {
  console.error(error);
  return { error: 'Failed to send email' };
};

export const server = {
  addToNewsletter: defineAction({
    accept: 'form',
    input: z.object({
      email: z.string().email(),
      terms: z.boolean(),
    }),
    handler: async ({ email, terms }) => {
      try {
        await sendEmail({ email, type: 'addToNewsletter' });
      } catch (error: unknown) {
        return catchEmailError(error);
      }
    },
  }),
};
