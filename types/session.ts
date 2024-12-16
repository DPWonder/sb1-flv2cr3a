export type SessionType = 'Keynote' | 'Fireside Chat' | 'Workshop' | 'Startup Pitch' | 'Panel Discussion';
export type DayType = 'Day 1' | 'Day 2' | 'Day 3';

export interface Session {
  id: string;
  title: string;
  speaker: string;
  time: string;
  date: string;
  type: SessionType;
  location: string;
  description: string;
  day: DayType;
}

export interface SessionFilter {
  day: DayType | 'all';
  type: SessionType | 'all';
}