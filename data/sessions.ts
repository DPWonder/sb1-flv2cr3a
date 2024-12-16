import { Session, SessionType, DayType } from '@/types/session';

export const sessions: Session[] = [
  {
    id: "keynote-1",
    title: "The Future of AI Agents",
    speaker: "Sam Altman",
    time: "10:00 AM - 11:00 AM",
    date: "2024-09-15",
    type: "Keynote",
    location: "Main Stage",
    description: "Opening keynote on the future of autonomous AI agents and their impact on society.",
    day: "Day 1"
  },
  {
    id: "workshop-1",
    title: "Building Safe AI Agents",
    speaker: "Dario Amodei",
    time: "11:30 AM - 12:30 PM",
    date: "2024-09-15",
    type: "Workshop",
    location: "Workshop Room A",
    description: "Hands-on workshop on implementing safety measures in AI agent development.",
    day: "Day 1"
  },
  {
    id: "fireside-1",
    title: "AI Agents in Enterprise",
    speaker: "Jane Smith",
    time: "2:00 PM - 3:00 PM",
    date: "2024-09-15",
    type: "Fireside Chat",
    location: "Fireside Lounge",
    description: "Discussion on integrating AI agents into enterprise workflows.",
    day: "Day 1"
  }
];

export const sessionTypes: SessionType[] = [
  "Keynote",
  "Fireside Chat",
  "Workshop",
  "Startup Pitch",
  "Panel Discussion"
];

export const conferenceDays: DayType[] = ["Day 1", "Day 2", "Day 3"];