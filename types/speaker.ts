export interface Speaker {
  id: string;
  name: string;
  role: string;
  company: string;
  bio: string;
  image: string;
  twitter?: string;
  linkedin?: string;
  topics: string[];
  featured?: boolean;
}