import { SponsorsGrid } from "./sponsors-grid";
import { getSponsorsByTier } from "@/lib/sponsors";
import { SponsorTier } from "@/types/sponsor";

interface SponsorsSectionProps {
  tier: SponsorTier;
}

export function SponsorsSection({ tier }: SponsorsSectionProps) {
  const sponsors = getSponsorsByTier(tier);
  
  if (sponsors.length === 0) {
    return null;
  }

  return (
    <section className="space-y-8">
      <h2 className="text-2xl font-semibold text-center">{tier} Sponsors</h2>
      <SponsorsGrid sponsors={sponsors} />
    </section>
  );
}