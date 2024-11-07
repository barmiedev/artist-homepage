import Welcome from 'emails/welcome';
import { Resend } from 'resend';

export const resend = new Resend(import.meta.env.RESEND_API_KEY);

type EmailType = 'addToNewsletter'; // Add more types when needed
type SendEmailProps = {
  email: string;
  type: EmailType;
};
type EmailProps = {
  from: string;
  email: string;
  audienceId: string;
};

export const sendEmail = async ({ email, type }: SendEmailProps) => {
  const emailFrom = import.meta.env.RESEND_FROM_MAIL;
  const audienceId = import.meta.env.RESEND_AUDIENCE_ID;
  const sender = import.meta.env.RESEND_FROM_NAME;

  if (!emailFrom) {
    throw new Error('RESEND_FROM_MAIL is not set');
  }
  if (!audienceId) {
    throw new Error('RESEND_AUDIENCE_ID is not set');
  }

  const from = sender ? `${sender} <${emailFrom}>` : emailFrom;

  switch (type) {
    case 'addToNewsletter':
      await addToNewsletter({ from, email, audienceId });
      break;
    default:
      throw new Error('Invalid email type');
  }
};

const addToNewsletter = async ({ from, email, audienceId }: EmailProps) => {
  await resend.contacts.create({
    email,
    audienceId,
  });

  // Send welcoming email
  await resend.emails.send({
    from: from,
    to: email,
    subject: 'Welcome!', // TODO Change to CMS variable
    react: Welcome(),
  });
};
