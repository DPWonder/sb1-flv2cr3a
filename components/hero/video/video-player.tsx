"use client";

interface VideoPlayerProps {
  src: string;
  fallbackImage?: string;
}

export function VideoPlayer({ src, fallbackImage }: VideoPlayerProps) {
  return (
    <video
      autoPlay
      loop
      muted
      playsInline
      className="absolute inset-0 w-full h-full object-cover brightness-105 contrast-110"
      poster={fallbackImage}
    >
      <source src={src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}