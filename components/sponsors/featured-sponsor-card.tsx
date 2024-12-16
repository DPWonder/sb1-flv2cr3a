"use client";

import { useState } from "react";
import { Sponsor } from "@/types/sponsor";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

interface FeaturedSponsorCardProps {
  sponsor: Sponsor;
}

export function FeaturedSponsorCard({ sponsor }: FeaturedSponsorCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card 
      className="relative overflow-hidden bg-black/50 border-gray-800 transition-all duration-300 h-[300px] group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardContent className="p-6 h-full flex items-center justify-center">
        <div className="relative w-full h-full">
          <div className="absolute inset-0 flex items-center justify-center p-8">
            <div className="relative w-full h-full">
              <Image
                src={sponsor.logo}
                alt={sponsor.name}
                fill
                className="object-contain filter brightness-100 group-hover:brightness-50 transition-all duration-300"
              />
            </div>
          </div>

          <Badge variant="secondary" className="absolute top-4 right-4">
            {sponsor.tier}
          </Badge>

          <div 
            className={`absolute inset-0 flex flex-col items-center justify-center p-6 bg-black/80 transition-all duration-300 ${
              isHovered ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <h3 className="text-2xl font-bold text-center mb-3">{sponsor.name}</h3>
            <p className="text-gray-300 mb-6 text-center">{sponsor.description}</p>
            <a
              href={sponsor.website}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-blue-500 hover:text-blue-400"
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