"use client";

import { SponsorsGrid } from "./sponsors-grid";
import { getSponsorsByTier } from "@/lib/utils/sponsors";
import { SponsorTier } from "@/types/sponsor";

export function MainSponsorsSection() {
  const tiers: SponsorTier[] = ["Platinum", "Gold", "Silver"];

  return (
    <section id="sponsors" className="container mx-auto px-4 py-24">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Sponsors</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Meet the innovative companies powering the future of AI agents.
        </p>
      </div>

      <div className="space-y-24">
        {tiers.map((tier) => {
          const sponsors = getSponsorsByTier(tier);
          if (sponsors.length === 0) return null;

          return (
            <div key={tier} className="space-y-8">
              <h3 className="text-2xl font-semibold text-center">{tier} Sponsors</h3>
              <SponsorsGrid sponsors={sponsors} />
            </div>
          );
        })}
      </div>
    </section>
  );
}