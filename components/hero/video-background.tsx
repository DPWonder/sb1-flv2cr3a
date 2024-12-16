"use client";

interface VideoBackgroundProps {
  videoSrc: string;
}

export function VideoBackground({ videoSrc }: VideoBackgroundProps) {
  // Convert Google Drive link to direct download link
  const getDirectVideoUrl = (driveUrl: string) => {
    const fileId = driveUrl.match(/\/d\/(.+?)\/view/)?.[1];
    return fileId ? `https://drive.google.com/uc?export=download&id=${fileId}` : driveUrl;
  };

  return (
    <>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-purple-900/20 z-10" />
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px] z-20" />
      <div className="absolute inset-0 bg-black/50 z-30" />
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src={getDirectVideoUrl(videoSrc)} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </>
  );
}