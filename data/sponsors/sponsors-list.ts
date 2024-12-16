import { Sponsor } from '@/types/sponsor';

export const sponsors: Sponsor[] = [
  // Platinum Sponsors
  {
    id: "openai",
    name: "OpenAI",
    logoName: "OpenAI",
    tier: "Platinum",
    description: "Leading AI research company focused on ensuring AGI benefits all of humanity.",
    website: "https://openai.com"
  },
  {
    id: "google-deepmind",
    name: "Google DeepMind",
    logoName: "DeepMind",
    tier: "Platinum",
    description: "Solving intelligence to advance science and benefit humanity.",
    website: "https://deepmind.com"
  },
  {
    id: "anthropic",
    name: "Anthropic",
    logoName: "Anthropic",
    tier: "Platinum",
    description: "Developing safe and ethical AI systems through constitutional AI.",
    website: "https://anthropic.com"
  },

  // Gold Sponsors
  {
    id: "microsoft",
    name: "Microsoft",
    logoName: "Microsoft",
    tier: "Gold",
    description: "Empowering every person and organization to achieve more through AI.",
    website: "https://microsoft.com/ai"
  },
  {
    id: "nvidia",
    name: "NVIDIA",
    logoName: "NVIDIA",
    tier: "Gold",
    description: "Pioneering accelerated computing for the AI era.",
    website: "https://nvidia.com"
  },
  {
    id: "meta",
    name: "Meta AI",
    logoName: "Meta",
    tier: "Gold",
    description: "Advancing the state of artificial intelligence through open research.",
    website: "https://ai.meta.com"
  }
];