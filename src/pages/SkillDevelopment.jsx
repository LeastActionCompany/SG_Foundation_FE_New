import { useEffect } from "react";
import { navigateTo } from "../utils/navigation";
import HeroSection from "../components/skillDevelopment/HeroSection";
import FocusAreas from "../components/skillDevelopment/FocusAreas";
import ImpactSection from "../components/skillDevelopment/ImpactSection";
import OfferSection from "../components/skillDevelopment/OfferSection";
import SuccessStories from "../components/skillDevelopment/SuccessStories";
import CTASection from "../components/skillDevelopment/CTASection";

export default function SkillDevelopmentPage() {
  // Ensure scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden font-sans">
      <main>
        <HeroSection />
        <FocusAreas />
        <ImpactSection />
        <OfferSection />
        <SuccessStories />
        <CTASection />
      </main>

      {/* ── FOOTER BAR ── */}
      <div className="bg-[#0F172A] border-t border-white/10 py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-between gap-3 sm:flex-row">
          <p className="text-xs text-gray-400">
            © {new Date().getFullYear()} SG Foundation — Skill Development Initiative
          </p>
          <button
            onClick={() => navigateTo("/")}
            className="flex items-center gap-1.5 text-xs font-medium text-gray-500 transition hover:text-white"
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M19 12H5M12 5l-7 7 7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Return to Main Site
          </button>
        </div>
      </div>
      
    </div>
  );
}
