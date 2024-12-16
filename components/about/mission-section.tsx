"use client";

import { Bot, Globe, Lightbulb } from "lucide-react";

export function MissionSection() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col items-center text-center space-y-4">
        <Bot className="w-12 h-12 text-blue-500" />
        <h2 className="text-3xl font-bold">Our Mission</h2>
        <p className="text-gray-400 max-w-3xl">
          At AgentSummit.io, we are dedicated to advancing the future of AI agents and autonomous systems. 
          Our mission is to unite the brightest minds in technology, entrepreneurship, and investment to 
          shape the next era of innovation.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <Globe className="w-8 h-8 text-blue-500" />
          <h3 className="text-xl font-semibold">Platform for Innovation</h3>
          <p className="text-gray-400">
            Through cutting-edge presentations, interactive workshops, and unparalleled networking 
            opportunities, we provide a unique platform for collaboration and discovery.
          </p>
        </div>

        <div className="space-y-4">
          <Lightbulb className="w-8 h-8 text-blue-500" />
          <h3 className="text-xl font-semibold">Vision for the Future</h3>
          <p className="text-gray-400">
            To be the global hub where visionaries, innovators, and thought leaders converge to explore 
            the potential of AI agents and autonomous systems, driving technological progress and societal impact.
          </p>
        </div>
      </div>
    </div>
  );
}