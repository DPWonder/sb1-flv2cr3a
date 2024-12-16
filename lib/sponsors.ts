import { Sponsor, SponsorTier } from "@/types/sponsor";
import { sponsors as sponsorsList } from "@/data/sponsors/sponsors-list";

export function getSponsorsByTier(tier: SponsorTier): Sponsor[] {
  return sponsorsList.filter(sponsor => sponsor.tier === tier);
}

export function getFeaturedSponsors(): Sponsor[] {
  return sponsorsList.filter(sponsor => sponsor.featured);
}

export function getTotalSponsors(): number {
  return sponsorsList.length;
}

export function getTotalSponsorsByTier(tier: SponsorTier): number {
  return getSponsorsByTier(tier).length;
}