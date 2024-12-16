import { NextResponse } from 'next/server';
import { stripe, formatAmountForStripe } from '@/lib/stripe';
import { tickets } from '@/data/tickets';
import { TicketPurchase } from '@/types/ticket';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { ticketId, quantity, email, name, company } = body as TicketPurchase;

    const ticket = tickets.find((t) => t.id === ticketId);
    if (!ticket) {
      return NextResponse.json(
        { error: 'Invalid ticket type' },
        { status: 400 }
      );
    }

    const finalPrice = ticket.earlyBirdDiscount 
      ? ticket.price - ticket.earlyBirdDiscount 
      : ticket.price;

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      billing_address_collection: 'required',
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: ticket.name,
              description: ticket.description,
            },
            unit_amount: formatAmountForStripe(finalPrice),
          },
          quantity,
        },
      ],
      mode: 'payment',
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/tickets/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/tickets`,
      customer_email: email,
      metadata: {
        ticketId,
        name,
        company: company || '',
        quantity: quantity.toString(),
      },
    });

    return NextResponse.json({ sessionId: session.id });
  } catch (error) {
    console.error('Error creating checkout session:', error);
    return NextResponse.json(
      { error: 'Error creating checkout session' },
      { status: 500 }
    );
  }
}