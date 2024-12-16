export function getEventTimestamp(eventDate: Date): number {
  return eventDate.getTime();
}

export function calculateTimeLeft(eventTimestamp: number) {
  const now = Date.now();
  const difference = eventTimestamp - now;
  
  if (difference <= 0) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    };
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / 1000 / 60) % 60),
    seconds: Math.floor((difference / 1000) % 60)
  };
}

export function formatTimeUnit(value: number): string {
  return value.toString().padStart(2, '0');
}