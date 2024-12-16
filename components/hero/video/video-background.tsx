"use client";

import { VideoOverlay } from "./video-overlay";
import { VideoPlayer } from "./video-player";
import { getFallbackImageUrl } from "./video-utils";

interface VideoBackgroundProps {
  videoUrl: string;
  fallbackImage?: string;
}

export function VideoBackground({ 
  videoUrl, 
  fallbackImage = getFallbackImageUrl() 
}: VideoBackgroundProps) {
  return (
    <>
      <VideoOverlay />
      <VideoPlayer src={videoUrl} fallbackImage={fallbackImage} />
    </>
  );
}