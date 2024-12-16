"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Bot, Calendar, Users } from "lucide-react";

export function HeroSection() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const eventDate = new Date("2024-09-15T09:00:00");

    const timer = setInterval(() => {
      const now = new Date();
      const difference = eventDate.getTime() - now.getTime();

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video/Image */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-purple-900/20" />
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
      
      <div className="relative container mx-auto px-4 py-32 text-center">
        <div className="space-y-8">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-500">
            The Future of AI Agents
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Join 1,000+ innovators, developers, and investors shaping the future of autonomous AI agents.
          </p>

          <div className="flex flex-wrap justify-center gap-6 text-center">
            <div className="flex items-center gap-2">
              <Calendar className="w-6 h-6 text-blue-500" />
              <span>September 15-17, 2024</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-6 h-6 text-blue-500" />
              <span>1,000+ Attendees</span>
            </div>
            <div className="flex items-center gap-2">
              <Bot className="w-6 h-6 text-blue-500" />
              <span>50+ Speakers</span>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-4 max-w-2xl mx-auto">
            {Object.entries(timeLeft).map(([unit, value]) => (
              <div key={unit} className="bg-black/50 backdrop-blur-sm rounded-lg p-4">
                <div className="text-3xl font-bold">{value}</div>
                <div className="text-sm text-gray-400 capitalize">{unit}</div>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg">
              Get Early Bird Tickets
            </Button>
            <Button size="lg" variant="outline" className="text-lg">
              Become a Sponsor
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}