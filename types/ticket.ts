export type TicketTier = 'General' | 'VIP' | 'Group';

export interface TicketType {
  id: string;
  tier: TicketTier;
  name: string;
  price: number;
  description: string;
  benefits: string[];
  available: boolean;
  maxQuantity?: number;
  groupSize?: number;
  earlyBirdDiscount?: number;
}

export interface TicketPurchase {
  ticketId: string;
  quantity: number;
  email: string;
  name: string;
  company?: string;
  dietaryRestrictions?: string;
}