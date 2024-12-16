export const EVENT_CONFIG = {
  dates: {
    start: new Date("2025-09-15T09:00:00Z"),
    end: new Date("2025-09-17T17:00:00Z")
  },
  venue: {
    name: "San Francisco Convention Center",
    address: "747 Howard Street",
    city: "San Francisco",
    state: "CA",
    zip: "94103",
    country: "USA"
  },
  capacity: {
    total: 1000,
    earlyBird: 200,
    vip: 50
  },
  stats: {
    attendees: "1,000+",
    speakers: "50+",
    days: 3,
    tracks: 4,
    workshops: 12
  }
} as const;