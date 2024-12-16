export type SponsorTier = 'Platinum' | 'Gold' | 'Silver';
export type SponsorLogoName = 'OpenAI' | 'DeepMind' | 'Anthropic' | 'Microsoft' | 'NVIDIA' | 'Meta' | 'StabilityAI' | 'Cohere' | 'HuggingFace';

export interface Sponsor {
  id: string;
  name: string;
  logoName: SponsorLogoName;
  tier: SponsorTier;
  description: string;
  website: string;
  featured?: boolean;
}