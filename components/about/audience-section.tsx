"use client";

import { Code, Rocket, LineChart, Building2 } from "lucide-react";

const audiences = [
  {
    icon: Code,
    title: "Developers & Engineers",
    description: "Specializing in AI and autonomous systems"
  },
  {
    icon: Rocket,
    title: "Entrepreneurs & Founders",
    description: "Building the next wave of AI startups"
  },
  {
    icon: LineChart,
    title: "Investors",
    description: "Seeking cutting-edge opportunities in the AI space"
  },
  {
    icon: Building2,
    title: "Industry Leaders",
    description: "Decision-makers integrating AI into their organizations"
  }
];

export function AudienceSection() {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">Who Attends?</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Join a diverse community of innovators and leaders shaping the future of AI.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {audiences.map((audience, index) => (
          <div key={index} className="text-center space-y-4">
            <div className="flex justify-center">
              <div className="p-4 rounded-full bg-blue-500/10">
                <audience.icon className="w-8 h-8 text-blue-500" />
              </div>
            </div>
            <h3 className="text-xl font-semibold">{audience.title}</h3>
            <p className="text-gray-400">{audience.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}