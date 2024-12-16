export const VIDEO_CONFIG = {
  url: "https://res.cloudinary.com/dwrevqnej/video/upload/v1734118995/coverr-golden-gate-bridge-at-sunset-5420-1080p_p2t9p5.mp4",
  fallbackImage: "https://images.unsplash.com/photo-1449034446853-66c86144b0ad?auto=format&fit=crop&w=2560&q=80"
} as const;

export function getOptimizedVideoUrl(url: string = VIDEO_CONFIG.url): string {
  return url;
}

export function getFallbackImageUrl(): string {
  return VIDEO_CONFIG.fallbackImage;
}