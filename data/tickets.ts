import { TicketType } from '@/types/ticket';

export const tickets: TicketType[] = [
  {
    id: 'general',
    tier: 'General',
    name: 'General Admission',
    price: 799,
    description: 'Full conference access including all sessions and workshops',
    benefits: [
      'Access to all keynotes',
      'Workshop participation',
      'Networking events',
      'Conference swag',
      'Lunch and refreshments'
    ],
    available: true,
    maxQuantity: 1,
    earlyBirdDiscount: 100
  },
  {
    id: 'vip',
    tier: 'VIP',
    name: 'VIP Pass',
    price: 1499,
    description: 'Premium experience with exclusive access and perks',
    benefits: [
      'Priority seating at keynotes',
      'Exclusive VIP lounge access',
      'Private networking sessions',
      'Speaker dinner invitation',
      'Premium conference swag',
      'Premium refreshments'
    ],
    available: true,
    maxQuantity: 1,
    earlyBirdDiscount: 200
  },
  {
    id: 'group',
    tier: 'Group',
    name: 'Team Package',
    price: 699,
    description: 'Discounted rate for teams of 3 or more',
    benefits: [
      'All General Admission benefits',
      'Group seating arrangements',
      'Team networking session',
      'Group photo opportunity'
    ],
    available: true,
    groupSize: 3,
    maxQuantity: 10
  }
];