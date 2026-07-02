import { useEffect } from "react";
import { navigateTo } from "../utils/navigation";
import HeroSection from "../components/donationSponsorship/HeroSection";
import WaysToSupport from "../components/donationSponsorship/WaysToSupport";
import SponsorChildFeature from "../components/donationSponsorship/SponsorChildFeature";
import ImpactStatistics from "../components/donationSponsorship/ImpactStatistics";
import CausesSupport from "../components/donationSponsorship/CausesSupport";
import RealChangeStories from "../components/donationSponsorship/RealChangeStories";
import DonationCTA from "../components/donationSponsorship/DonationCTA";

export default function DonationAndSponsorshipPage() {
  // Ensure scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#FAFAF8] overflow-x-hidden font-sans">
      <main>
        <HeroSection />
        <WaysToSupport />
        <SponsorChildFeature />
        <ImpactStatistics />
        <CausesSupport />
        <RealChangeStories />
        <DonationCTA />
      </main>

      {/* ── FOOTER BAR ── */}
      <div className="bg-[#0F6B4B] py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-white/70">
            © {new Date().getFullYear()} SG Foundation — Donation & Sponsorship
          </p>
          <button
            onClick={() => navigateTo("/")}
            className="flex items-center gap-2 text-sm font-semibold text-white/80 transition hover:text-white bg-white/10 px-4 py-2 rounded-full hover:bg-white/20"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M19 12H5M12 5l-7 7 7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Return to Main Site
          </button>
        </div>
      </div>
      
    </div>
  );
}
