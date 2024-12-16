import { Navigation } from "@/components/ui/navigation";
import { Footer } from "@/components/layout/footer";
import { PageHeader } from "@/components/layout/page-header";
import { SponsorCard } from "@/components/sponsors/sponsor-card";
import { TierSection } from "@/components/sponsors/tier-section";
import { sponsors, sponsorTierInfo } from "@/data/sponsors";
import { SponsorTier } from "@/types/sponsor";

export default function SponsorsPage() {
  const sponsorsByTier = (tier: SponsorTier) => 
    sponsors.filter(sponsor => sponsor.tier === tier);

  return (
    <>
      <Navigation />
      <PageHeader
        title="Our Sponsors"
        description="Meet the innovative companies powering the future of AI agents"
      />
      
      <main className="container mx-auto px-4 py-16">
        {/* Current Sponsors */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold text-center mb-12">Current Sponsors</h2>
          
          {['Platinum', 'Gold', 'Silver'].map((tier) => {
            const tierSponsors = sponsorsByTier(tier as SponsorTier);
            if (tierSponsors.length === 0) return null;
            
            return (
              <div key={tier} className="mb-16">
                <h3 className="text-2xl font-semibold mb-8 text-center">
                  {tier} Sponsors
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {tierSponsors.map((sponsor) => (
                    <SponsorCard key={sponsor.id} sponsor={sponsor} />
                  ))}
                </div>
              </div>
            );
          })}
        </section>

        {/* Sponsorship Tiers */}
        <section>
          <h2 className="text-3xl font-bold text-center mb-12">Become a Sponsor</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sponsorTierInfo.map((tierInfo) => (
              <TierSection key={tierInfo.tier} tierInfo={tierInfo} />
            ))}
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
}