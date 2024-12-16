import { SponsorTierInfo } from '@/types/sponsor';

export const sponsorTierInfo: SponsorTierInfo[] = [
  {
    tier: "Platinum",
    price: 50000,
    description: "Premium visibility and exclusive networking opportunities",
    perks: [
      "Prominent logo placement",
      "Keynote speaking slot",
      "VIP dinner access",
      "Exhibition booth",
      "10 conference passes"
    ]
  },
  {
    tier: "Gold",
    price: 25000,
    description: "Enhanced visibility and networking opportunities",
    perks: [
      "Logo placement",
      "Workshop session",
      "Exhibition space",
      "5 conference passes"
    ]
  },
  {
    tier: "Silver",
    price: 10000,
    description: "Basic visibility package",
    perks: [
      "Logo placement",
      "Exhibition space",
      "2 conference passes"
    ]
  }
];