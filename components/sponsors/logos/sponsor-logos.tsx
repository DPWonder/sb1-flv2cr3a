"use client";

import { SponsorLogoName } from "@/types/sponsor";

const logos: Record<SponsorLogoName, () => JSX.Element> = {
  OpenAI: () => (
    <svg className="w-full h-full" viewBox="0 0 120 32" fill="currentColor">
      <path d="M16 4C9.373 4 4 9.373 4 16s5.373 12 12 12 12-5.373 12-12S22.627 4 16 4zm0 20c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8z"/>
    </svg>
  ),
  DeepMind: () => (
    <svg className="w-full h-full" viewBox="0 0 120 32" fill="currentColor">
      <path d="M16 4l12 12-12 12L4 16 16 4zm0 6.4L10.4 16 16 21.6 21.6 16 16 10.4z"/>
    </svg>
  ),
  Anthropic: () => (
    <svg className="w-full h-full" viewBox="0 0 120 32" fill="currentColor">
      <path d="M16 6l10 18H6L16 6z"/>
    </svg>
  ),
  Microsoft: () => (
    <svg className="w-full h-full" viewBox="0 0 120 32">
      <rect x="4" y="4" width="11" height="11" fill="#F25022"/>
      <rect x="17" y="4" width="11" height="11" fill="#7FBA00"/>
      <rect x="4" y="17" width="11" height="11" fill="#00A4EF"/>
      <rect x="17" y="17" width="11" height="11" fill="#FFB900"/>
    </svg>
  ),
  NVIDIA: () => (
    <svg className="w-full h-full" viewBox="0 0 120 32">
      <path d="M15.7 4C8.6 4 4 9.4 4 15.7c0 6.3 4.6 11.7 11.7 11.7 7.1 0 11.7-5.4 11.7-11.7C27.4 9.4 22.8 4 15.7 4z" fill="#76B900"/>
    </svg>
  ),
  Meta: () => (
    <svg className="w-full h-full" viewBox="0 0 120 32" fill="currentColor">
      <path d="M16 4C9.373 4 4 9.373 4 16s5.373 12 12 12 12-5.373 12-12S22.627 4 16 4z"/>
    </svg>
  )
};

interface SponsorLogoProps {
  name: SponsorLogoName;
  className?: string;
}

export function SponsorLogo({ name, className = "" }: SponsorLogoProps) {
  const LogoComponent = logos[name];
  
  if (!LogoComponent) {
    return <div className="text-gray-400 font-medium">{name}</div>;
  }

  return (
    <div className={`w-32 h-12 ${className}`}>
      <LogoComponent />
    </div>
  );
}