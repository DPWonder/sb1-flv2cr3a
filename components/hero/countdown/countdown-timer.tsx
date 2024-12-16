"use client";

import { CountdownItem } from "./countdown-item";
import { useCountdown } from "./use-countdown";

interface CountdownTimerProps {
  eventDate: Date;
}

export function CountdownTimer({ eventDate }: CountdownTimerProps) {
  const timeLeft = useCountdown(eventDate);

  return (
    <div className="grid grid-cols-4 gap-4 max-w-2xl mx-auto">
      {Object.entries(timeLeft).map(([unit, value]) => (
        <CountdownItem key={unit} value={value} unit={unit} />
      ))}
    </div>
  );
}