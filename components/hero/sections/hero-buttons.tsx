"use client";

import { Button } from "@/components/ui/button";

export function HeroButtons() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <Button 
        size="lg" 
        className="bg-blue-600 hover:bg-blue-700 text-lg"
        onClick={() => scrollToSection("tickets")}
      >
        Get Early Bird Tickets
      </Button>
      <Button 
        size="lg" 
        variant="outline" 
        className="text-lg"
        onClick={() => scrollToSection("sponsors")}
      >
        Become a Sponsor
      </Button>
    </div>
  );
}