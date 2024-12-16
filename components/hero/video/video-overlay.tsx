"use client";

export function VideoOverlay() {
  return (
    <>
      {/* Gradient overlay with increased opacity */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/40 z-10" />
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px] z-20" />
      
      {/* Slightly darker overlay */}
      <div className="absolute inset-0 bg-black/20 z-30" />
    </>
  );
}