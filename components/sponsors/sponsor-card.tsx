"use client";

import { useState } from "react";
import { Sponsor } from "@/types/sponsor";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import { SponsorLogo } from "./logos/sponsor-logos";

interface SponsorCardProps {
  sponsor: Sponsor;
}

export function SponsorCard({ sponsor }: SponsorCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card 
      className="relative overflow-hidden bg-black/50 border-gray-800 transition-all duration-300 h-[200px] group cursor-pointer hover:border-blue-500/50"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardContent className="p-6 h-full flex items-center justify-center">
        <div className="relative w-full h-full">
          <div className={`absolute inset-0 flex items-center justify-center p-8 transition-all duration-300 ${
            isHovered ? 'opacity-20 scale-95' : 'opacity-100 scale-100'
          }`}>
            <SponsorLogo name={sponsor.logoName} />
          </div>

          <div 
            className={`absolute inset-0 flex flex-col items-center justify-center p-6 transition-all duration-300 ${
              isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <h3 className="text-xl font-bold text-center mb-2">{sponsor.name}</h3>
            <p className="text-sm text-gray-300 text-center mb-4 line-clamp-2">{sponsor.description}</p>
            <a
              href={sponsor.website}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
            >
              Visit Website
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}