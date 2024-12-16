import { SponsorCard } from "../sponsor-card";
import { getSponsorsByTier } from "@/lib/sponsors";

export function PlatinumSponsors() {
  const sponsors = getSponsorsByTier("Platinum");

  return (
    <section className="space-y-8">
      <h2 className="text-2xl font-semibold text-center">Platinum Sponsors</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {sponsors.map((sponsor) => (
          <SponsorCard key={sponsor.id} sponsor={sponsor} />
        ))}
      </div>
    </section>
  );
}