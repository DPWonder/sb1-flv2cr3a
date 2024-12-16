"use client";

import { Presentation, Wrench, Users, Lightbulb, Layout } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const offerings = [
  {
    icon: Presentation,
    title: "World-Class Speakers",
    description: "Hear from industry pioneers, renowned researchers, and successful entrepreneurs."
  },
  {
    icon: Wrench,
    title: "Interactive Workshops",
    description: "Gain hands-on experience with the latest AI tools and technologies."
  },
  {
    icon: Users,
    title: "Networking Opportunities",
    description: "Connect with influential leaders, investors, and innovators shaping the AI landscape."
  },
  {
    icon: Lightbulb,
    title: "Startup Pitch Sessions",
    description: "Witness the unveiling of groundbreaking ideas and connect with the next generation of AI startups."
  },
  {
    icon: Layout,
    title: "Cutting-Edge Exhibits",
    description: "Explore the latest advancements in AI through our exhibition area showcasing groundbreaking products and research."
  }
];

export function OfferingsSection() {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">What We Offer</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Experience a comprehensive program designed to inspire, educate, and connect.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {offerings.map((offering, index) => (
          <Card key={index} className="bg-black/50 border-gray-800 hover:border-blue-500/50 transition-all">
            <CardContent className="p-6 space-y-4">
              <offering.icon className="w-8 h-8 text-blue-500" />
              <h3 className="text-xl font-semibold">{offering.title}</h3>
              <p className="text-gray-400">{offering.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}