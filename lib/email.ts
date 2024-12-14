import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendWelcomeEmail(email: string) {
  try {
    await resend.emails.send({
      from: 'Section 8 Success <noreply@section8success.com>',
      to: email,
      subject: 'Welcome to Skool!',
      html: `
        <h1>Welcome to Section 8 Success Skool!</h1>
        <p>We're excited to have you join our community of successful Section 8 investors.</p>
        <p>Here's what you can expect:</p>
        <ul>
          <li>Access to our exclusive community</li>
          <li>Weekly live Q&A sessions</li>
          <li>Deal analysis workshops</li>
          <li>Property management training</li>
        </ul>
        <p>Get started by logging into your account at: ${process.env.NEXT_PUBLIC_BASE_URL}/skool</p>
      `,
    });
  } catch (error) {
    console.error('Email error:', error);
  }
}