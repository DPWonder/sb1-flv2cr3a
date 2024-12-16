import { SponsorLogos, SponsorLogoName } from './logos';

interface SponsorLogoProps {
  name: SponsorLogoName;
  className?: string;
}

export function SponsorLogo({ name, className = '' }: SponsorLogoProps) {
  const Logo = SponsorLogos[name];
  
  if (!Logo) {
    return <div className="text-gray-400 font-medium">{name}</div>;
  }

  return (
    <div className={`flex items-center justify-center ${className}`}>
      <Logo />
    </div>
  );
}