"use client";

import { useState, useEffect } from 'react';
import { EVENT_CONFIG } from '@/lib/constants/event';
import { calculateTimeLeft } from '@/lib/utils/date';

export function useEventTimer() {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(EVENT_CONFIG.dates.start.getTime()));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(EVENT_CONFIG.dates.start.getTime()));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return timeLeft;
}