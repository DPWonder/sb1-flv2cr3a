export const EVENT_CONFIG = {
  date: new Date("2025-09-15T09:00:00Z"),
  location: "San Francisco Convention Center",
  capacity: 1000,
  speakerCount: 50,
  stats: {
    attendees: "1,000+",
    speakers: "50+",
    days: 3,
    tracks: 4
  }
} as const;

export function getEventDates() {
  return {
    start: EVENT_CONFIG.date,
    end: new Date(EVENT_CONFIG.date.getTime() + (2 * 24 * 60 * 60 * 1000)) // 3 days total
  };
}