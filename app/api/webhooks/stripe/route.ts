import { NextResponse } from 'next/server';
import { stripe } from '@/lib/stripe';
import { headers } from 'next/headers';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { sendWelcomeEmail } from '@/lib/email';

export async function POST(req: Request) {
  const body = await req.text();
  const signature = headers().get('stripe-signature') as string;

  try {
    const event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    );

    if (event.type === 'checkout.session.completed') {
      const session = event.data.object;
      
      // Add subscription to Firestore
      await addDoc(collection(db, 'subscriptions'), {
        customerId: session.customer,
        email: session.customer_email,
        status: 'active',
        planType: session.metadata?.type,
        createdAt: new Date().toISOString(),
      });

      // Send welcome email
      if (session.customer_email) {
        await sendWelcomeEmail(session.customer_email);
      }
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error('Webhook error:', error);
    return NextResponse.json(
      { error: 'Webhook handler failed' },
      { status: 400 }
    );
  }
}