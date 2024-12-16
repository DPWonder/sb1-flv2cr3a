export * from './session';
export * from './speaker';
export * from './sponsor';
export * from './ticket';

// Common shared types
export type DateRange = {
  start: Date;
  end: Date;
};

export type SocialLinks = {
  twitter?: string;
  linkedin?: string;
  github?: string;
  website?: string;
};

export type ContactInfo = {
  email: string;
  phone?: string;
  company?: string;
};