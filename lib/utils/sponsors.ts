import { Sponsor, SponsorTier } from "@/types/sponsor";
import { sponsors } from "@/data/sponsors/sponsors-list";

export function getSponsorsByTier(tier: SponsorTier): Sponsor[] {
  return sponsors.filter(sponsor => sponsor.tier === tier);
}

export function getFeaturedSponsors(): Sponsor[] {
  return sponsors.filter(sponsor => sponsor.featured);
}

export function getTotalSponsors(): number {
  return sponsors.length;
}

export function getTotalSponsorsByTier(tier: SponsorTier): number {
  return getSponsorsByTier(tier).length;
}