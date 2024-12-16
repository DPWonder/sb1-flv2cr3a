"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function JoinSection() {
  const scrollToTickets = () => {
    // Smooth scroll to tickets section on the homepage
    const ticketsSection = document.getElementById("tickets");
    if (ticketsSection) {
      ticketsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="text-center space-y-6">
      <h2 className="text-3xl font-bold">Join Us</h2>
      <p className="text-gray-400 max-w-2xl mx-auto">
        AgentSummit.io is more than just a conference – it's a movement. Together, we are 
        shaping the future of AI agents and autonomous systems, one groundbreaking idea at a time.
      </p>
      <Link href="/#tickets" scroll={false}>
        <Button size="lg" className="mt-8" onClick={scrollToTickets}>
          Get Your Tickets <ArrowRight className="ml-2 w-4 h-4" />
        </Button>
      </Link>
    </div>
  );
}