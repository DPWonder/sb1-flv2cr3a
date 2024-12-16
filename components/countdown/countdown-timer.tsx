"use client";

import { useEffect, useState } from "react";
import { CountdownItem } from "./countdown-item";
import { calculateTimeLeft } from "@/lib/utils/date";

interface CountdownTimerProps {
  eventTimestamp: number;
}

export function CountdownTimer({ eventTimestamp }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState(() => calculateTimeLeft(eventTimestamp));
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(eventTimestamp));
    }, 1000);

    return () => clearInterval(timer);
  }, [eventTimestamp]);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
      <CountdownItem value={timeLeft.days} label="days" />
      <CountdownItem value={timeLeft.hours} label="hours" />
      <CountdownItem value={timeLeft.minutes} label="minutes" />
      <CountdownItem value={timeLeft.seconds} label="seconds" />
    </div>
  );
}

export default CountdownTimer;