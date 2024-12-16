"use client";

import { VideoBackground } from "@/components/hero/video/video-background";
import { VIDEO_CONFIG } from "@/components/hero/video/video-utils";
import { HeroContent } from "@/components/hero/sections/hero-content";
import { CountdownTimer } from "@/components/countdown";
import { FallbackMessage } from "@/components/countdown";
import { getEventTimestamp } from "@/lib/utils/countdown";

// Use UTC time to ensure consistency
const EVENT_DATE = new Date("2025-09-15T09:00:00Z");
const EVENT_TIMESTAMP = getEventTimestamp(EVENT_DATE);

export function HeroSection() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <VideoBackground 
        videoUrl={VIDEO_CONFIG.url}
        fallbackImage={VIDEO_CONFIG.fallbackImage}
      />
      
      <div className="relative container mx-auto px-4 py-32 text-center z-40">
        <HeroContent />
        <div className="mt-12">
          <CountdownTimer eventTimestamp={EVENT_TIMESTAMP} />
          <FallbackMessage eventDate={EVENT_DATE} />
        </div>
      </div>
    </div>
  );
}