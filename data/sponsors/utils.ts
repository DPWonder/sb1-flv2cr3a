import { Sponsor, SponsorTier } from '@/types/sponsor';
import { sponsors } from './sponsors-list';

export function getFeaturedSponsors(): Sponsor[] {
  return sponsors.filter(sponsor => sponsor.featured);
}

export function getSponsorsByTier(tier: SponsorTier): Sponsor[] {
  return sponsors.filter(sponsor => sponsor.tier === tier);
}

export function getNonFeaturedSponsorsByTier(tier: SponsorTier): Sponsor[] {
  return sponsors.filter(sponsor => sponsor.tier === tier && !sponsor.featured);
}

export function getTotalSponsors(): number {
  return sponsors.length;
}

export function getTotalSponsorsByTier(tier: SponsorTier): number {
  return sponsors.filter(sponsor => sponsor.tier === tier).length;
}