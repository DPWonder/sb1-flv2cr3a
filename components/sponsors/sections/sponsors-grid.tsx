"use client";

import { SponsorCard } from "../sponsor-card";
import { Sponsor } from "@/types/sponsor";

interface SponsorsGridProps {
  sponsors: Sponsor[];
}

export function SponsorsGrid({ sponsors }: SponsorsGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {sponsors.map((sponsor) => (
        <SponsorCard key={sponsor.id} sponsor={sponsor} />
      ))}
    </div>
  );
}