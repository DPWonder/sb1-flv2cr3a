"use client";

import { useState, useEffect } from 'react';

interface UseVideoBackgroundOptions {
  videoUrl: string;
  fallbackImage?: string;
}

export function useVideoBackground({ videoUrl, fallbackImage }: UseVideoBackgroundOptions) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const video = document.createElement('video');
    
    video.onloadeddata = () => {
      setIsLoading(false);
    };

    video.onerror = () => {
      setError(new Error('Failed to load video'));
      setIsLoading(false);
    };

    video.src = videoUrl;

    return () => {
      video.src = '';
    };
  }, [videoUrl]);

  return {
    isLoading,
    error,
    fallbackImage
  };
}