import { Navigation } from "@/components/ui/navigation";
import { Footer } from "@/components/layout/footer";
import { PageHeader } from "@/components/layout/page-header";
import { MissionSection } from "@/components/about/mission-section";
import { OfferingsSection } from "@/components/about/offerings-section";
import { AudienceSection } from "@/components/about/audience-section";
import { JoinSection } from "@/components/about/join-section";

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <PageHeader 
        title="About AgentSummit"
        description="Learn about our mission to advance the future of AI agents and autonomous systems"
      />
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-7xl mx-auto space-y-24">
          <MissionSection />
          <div className="border-t border-gray-800" />
          <OfferingsSection />
          <div className="border-t border-gray-800" />
          <AudienceSection />
          <div className="border-t border-gray-800" />
          <JoinSection />
        </div>
      </main>
      
      <Footer />
    </>
  );
}