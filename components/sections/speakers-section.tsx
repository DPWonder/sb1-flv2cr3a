import { FeaturedSpeakerCard } from "@/components/speakers/featured-speaker-card";
import { SpeakerCard } from "@/components/speakers/speaker-card";
import { getFeaturedSpeakers, getRegularSpeakers } from "@/data/speakers";

export function SpeakersSection() {
  const featuredSpeakers = getFeaturedSpeakers();
  const regularSpeakers = getRegularSpeakers();

  return (
    <section id="speakers" className="container mx-auto px-4 py-24">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">World-Class Speakers</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Learn from industry leaders and innovators who are shaping the future of AI agents and autonomous systems.
        </p>
      </div>

      {/* Featured Speakers */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {featuredSpeakers.map((speaker) => (
          <FeaturedSpeakerCard key={speaker.id} speaker={speaker} />
        ))}
      </div>

      {/* Regular Speakers */}
      {regularSpeakers.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {regularSpeakers.map((speaker) => (
            <SpeakerCard key={speaker.id} speaker={speaker} />
          ))}
        </div>
      )}
    </section>
  );
}