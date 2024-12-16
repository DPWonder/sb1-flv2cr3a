import { stripe } from '@/lib/stripe';
import { TicketPurchase } from '@/types/ticket';
import { SITE_CONFIG } from '@/lib/constants/config';

export async function createCheckoutSession(purchase: TicketPurchase) {
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      success_url: `${SITE_CONFIG.url}/tickets/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${SITE_CONFIG.url}/tickets`,
      customer_email: purchase.email,
      metadata: {
        ticketId: purchase.ticketId,
        quantity: purchase.quantity.toString(),
        name: purchase.name,
        company: purchase.company || ''
      },
      // Additional configuration...
    });

    return { sessionId: session.id };
  } catch (error) {
    console.error('Stripe checkout error:', error);
    throw new Error('Failed to create checkout session');
  }
}