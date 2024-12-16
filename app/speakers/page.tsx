import { Navigation } from "@/components/ui/navigation";
import { Footer } from "@/components/layout/footer";
import { PageHeader } from "@/components/layout/page-header";
import { SpeakerCard } from "@/components/speakers/speaker-card";
import { speakers } from "@/data/speakers";

export default function SpeakersPage() {
  return (
    <>
      <Navigation />
      <PageHeader
        title="Speakers"
        description="Learn from industry leaders and innovators in AI agent technology"
      />
      
      <main className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {speakers.map((speaker) => (
            <SpeakerCard key={speaker.id} speaker={speaker} />
          ))}
        </div>
      </main>
      
      <Footer />
    </>
  );
}