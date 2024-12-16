export function getDirectVideoUrl(driveUrl: string): string {
  const fileId = driveUrl.match(/\/d\/(.+?)\/view/)?.[1];
  if (!fileId) return driveUrl;
  
  // Use Google Drive's direct streaming URL
  return `https://drive.google.com/uc?export=download&id=${fileId}`;
}