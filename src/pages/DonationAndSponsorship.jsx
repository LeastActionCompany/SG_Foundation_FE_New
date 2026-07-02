import { useEffect } from "react";
import { navigateTo } from "../utils/navigation";
import logo from "../assest/logo.jpeg";
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
      
      {/* ── NAV BAR ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-pink-50 bg-white/95 backdrop-blur-xl shadow-sm transition-all">
  <div className="mx-auto flex max-w-7xl items-center justify-between px-3 py-3 sm:px-6 lg:px-8">

    {/* Logo */}
    <button
      onClick={() => navigateTo("/")}
      className="flex items-center gap-2 sm:gap-3"
    >
      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center overflow-hidden rounded-full bg-white p-1 shadow-sm ring-2 ring-[#9D174D]/10 transition-all group-hover:ring-[#9D174D]/30">
        <img
          src={logo}
          alt="SG Foundation"
          className="h-full w-full object-contain"
        />
      </div>

      <div className="leading-tight text-left">
        <p className="whitespace-nowrap text-xs font-bold text-[#4C1D95] sm:text-sm">
          SG Foundation
        </p>
        <p className="hidden text-[10px] font-semibold uppercase tracking-widest text-[#9D174D] sm:block">
          Spread Goodness
        </p>
      </div>
    </button>

    {/* Right Side */}
    <div className="flex items-center gap-2 sm:gap-4">

      {/* Home Button - Desktop Only */}
      <button
        onClick={() => navigateTo("/")}
        className="hidden md:flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-semibold text-gray-600 transition hover:bg-gray-50 hover:text-[#9D174D]"
      >
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
        >
          <path
            d="M19 12H5M12 5l-7 7 7 7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        Home
      </button>

      {/* CTA Button */}
      <a
        href="#cww-cta"
        className="whitespace-nowrap rounded-full bg-[#9D174D] px-3 py-2 text-xs font-bold text-white shadow-md transition-all hover:-translate-y-0.5 hover:bg-[#831843] hover:shadow-lg sm:px-6 sm:py-2.5 sm:text-sm"
      >
        Get Involved
      </a>

    </div>
  </div>
</nav>

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
