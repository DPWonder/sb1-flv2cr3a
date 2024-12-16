import { OpenAILogo } from './openai-logo';
import { DeepMindLogo } from './deepmind-logo';
import { AnthropicLogo } from './anthropic-logo';
import { MicrosoftLogo } from './microsoft-logo';
import { NvidiaLogo } from './nvidia-logo';
import { MetaLogo } from './meta-logo';
import { StabilityAILogo } from './stability-ai-logo';
import { CohereLogo } from './cohere-logo';
import { HuggingFaceLogo } from './hugging-face-logo';

export const SponsorLogos = {
  OpenAI: OpenAILogo,
  DeepMind: DeepMindLogo,
  Anthropic: AnthropicLogo,
  Microsoft: MicrosoftLogo,
  NVIDIA: NvidiaLogo,
  Meta: MetaLogo,
  StabilityAI: StabilityAILogo,
  Cohere: CohereLogo,
  HuggingFace: HuggingFaceLogo,
};

export type SponsorLogoName = keyof typeof SponsorLogos;