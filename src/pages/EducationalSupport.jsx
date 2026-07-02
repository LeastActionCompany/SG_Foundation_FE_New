import { useEffect } from "react";
import { navigateTo } from "../utils/navigation";
import HeroSection from "../components/educationalSupport/HeroSection";
import WhatWeDo from "../components/educationalSupport/WhatWeDo";
import ImpactNumbers from "../components/educationalSupport/ImpactNumbers";
import ProgramsSection from "../components/educationalSupport/ProgramsSection";
import StoryOfChange from "../components/educationalSupport/StoryOfChange";
import TestimonialSection from "../components/educationalSupport/TestimonialSection";
import CTASection from "../components/educationalSupport/CTASection";

export default function EducationalSupportPage() {
  // Ensure scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#FAFAF9] overflow-x-hidden font-sans">
      <main>
        <HeroSection />
        <WhatWeDo />
        <ImpactNumbers />
        <ProgramsSection />
        <StoryOfChange />
        <TestimonialSection />
        <CTASection />
      </main>

      {/* ── FOOTER BAR ── */}
      <div className="bg-[#064E3B] py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-white/70">
            © {new Date().getFullYear()} SG Foundation — Educational Support Initiative
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
