"use client";

import { Speaker } from "@/types/speaker";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Twitter, Linkedin, ExternalLink } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

interface FeaturedSpeakerCardProps {
  speaker: Speaker;
}

export function FeaturedSpeakerCard({ speaker }: FeaturedSpeakerCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card 
      className="overflow-hidden bg-black/50 border-gray-800 transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardHeader className="p-0">
        <div className="relative h-64 w-full">
          <Image
            src={speaker.image}
            alt={speaker.name}
            fill
            className="object-cover transition-transform duration-300"
            style={{
              transform: isHovered ? 'scale(1.05)' : 'scale(1)',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
        </div>
      </CardHeader>
      <CardContent className="relative p-6">
        <h3 className="text-2xl font-bold mb-1">{speaker.name}</h3>
        <p className="text-lg text-blue-400">
          {speaker.role} at {speaker.company}
        </p>
        <p className="mt-4 text-gray-300">{speaker.bio}</p>
        
        <div className="mt-6 space-y-4">
          <div className="flex flex-wrap gap-2">
            {speaker.topics.map((topic) => (
              <Badge key={topic} variant="secondary" className="bg-blue-500/10">
                {topic}
              </Badge>
            ))}
          </div>
          
          <div className="flex gap-4">
            {speaker.twitter && (
              <a
                href={`https://twitter.com/${speaker.twitter}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-500 transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
            )}
            {speaker.linkedin && (
              <a
                href={`https://linkedin.com/in/${speaker.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-500 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}