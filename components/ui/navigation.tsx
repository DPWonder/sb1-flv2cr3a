"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Bot } from "lucide-react";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/90 backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl">
            <Bot className="w-6 h-6" />
            <span>AgentSummit<span className="text-blue-500">.io</span></span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("speakers")}
              className="text-sm hover:text-blue-500 transition-colors"
            >
              Speakers
            </button>
            <button
              onClick={() => scrollToSection("agenda")}
              className="text-sm hover:text-blue-500 transition-colors"
            >
              Agenda
            </button>
            <button
              onClick={() => scrollToSection("sponsors")}
              className="text-sm hover:text-blue-500 transition-colors"
            >
              Sponsors
            </button>
            <Button
              onClick={() => scrollToSection("tickets")}
              className="bg-blue-600 hover:bg-blue-700"
            >
              Get Tickets
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}