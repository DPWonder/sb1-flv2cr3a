import { Navigation } from "@/components/ui/navigation";
import { HeroSection } from "@/components/sections/hero-section";
import { HomeSponsorsSection } from "@/components/sections/sponsors-section";
import { SpeakersSection } from "@/components/sections/speakers-section";
import { AgendaSection } from "@/components/sections/agenda-section";
import { TicketsSection } from "@/components/sections/tickets-section";
import { Footer } from "@/components/layout/footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="relative">
        <HeroSection />
        <div className="space-y-24 pb-24">
          <SpeakersSection />
          <AgendaSection />
          <HomeSponsorsSection />
          <TicketsSection />
        </div>
      </main>
      <Footer />
    </>
  );
}