import { Sponsor, SponsorTier, SponsorTierInfo } from '@/types/sponsor';

export const sponsors: Sponsor[] = [
  // Platinum Sponsors
  {
    id: "openai",
    name: "OpenAI",
    logo: "/images/sponsors/openai-logo.png",
    tier: "Platinum",
    description: "Leading AI research company focused on ensuring AGI benefits all of humanity.",
    website: "https://openai.com",
    featured: true
  },
  {
    id: "google-deepmind",
    name: "Google DeepMind",
    logo: "/images/sponsors/deepmind-logo.png",
    tier: "Platinum",
    description: "Solving intelligence to advance science and benefit humanity.",
    website: "https://deepmind.com",
    featured: true
  },
  {
    id: "anthropic",
    name: "Anthropic",
    logo: "/images/sponsors/anthropic-logo.png",
    tier: "Platinum",
    description: "Developing safe and ethical AI systems through constitutional AI.",
    website: "https://anthropic.com",
    featured: true
  },

  // Gold Sponsors
  {
    id: "microsoft",
    name: "Microsoft",
    logo: "/images/sponsors/microsoft-logo.png",
    tier: "Gold",
    description: "Empowering every person and organization to achieve more through AI.",
    website: "https://microsoft.com/ai"
  },
  {
    id: "nvidia",
    name: "NVIDIA",
    logo: "/images/sponsors/nvidia-logo.png",
    tier: "Gold",
    description: "Pioneering accelerated computing for the AI era.",
    website: "https://nvidia.com"
  },
  {
    id: "meta",
    name: "Meta AI",
    logo: "/images/sponsors/meta-logo.png",
    tier: "Gold",
    description: "Advancing the state of artificial intelligence through open research.",
    website: "https://ai.meta.com"
  },

  // Silver Sponsors
  {
    id: "stability-ai",
    name: "Stability AI",
    logo: "/images/sponsors/stability-ai-logo.png",
    tier: "Silver",
    description: "Open-source artificial intelligence for content creation.",
    website: "https://stability.ai"
  },
  {
    id: "cohere",
    name: "Cohere",
    logo: "/images/sponsors/cohere-logo.png",
    tier: "Silver",
    description: "Making NLP accessible to every developer and business.",
    website: "https://cohere.ai"
  },
  {
    id: "hugging-face",
    name: "Hugging Face",
    logo: "/images/sponsors/huggingface-logo.png",
    tier: "Silver",
    description: "The platform where the machine learning community collaborates.",
    website: "https://huggingface.co"
  }
];

// Rest of the file remains the same...