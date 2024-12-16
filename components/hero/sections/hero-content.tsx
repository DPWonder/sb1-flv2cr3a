"use client";

import { Button } from "@/components/ui/button";
import { Bot, Calendar, Users } from "lucide-react";
import { HeroStats } from "./hero-stats";
import { HeroButtons } from "./hero-buttons";

export function HeroContent() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-500">
        The Future of AI Agents
      </h1>
      
      <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
        Join 1,000+ innovators, developers, and investors shaping the future of autonomous AI agents.
      </p>

      <HeroStats />
      <HeroButtons />
    </div>
  );
}