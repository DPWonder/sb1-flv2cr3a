// Centralize application constants
import { EVENT_CONFIG } from '../utils/event';

export const APP_CONFIG = {
  name: 'AgentSummit.io',
  description: 'The Premier AI Agents Conference',
  event: EVENT_CONFIG,
  social: {
    twitter: 'https://twitter.com/agentsummit',
    linkedin: 'https://linkedin.com/company/agentsummit',
    github: 'https://github.com/agentsummit'
  }
} as const;