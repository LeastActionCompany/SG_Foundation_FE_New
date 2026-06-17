import { useEffect } from "react";
import { navigateTo } from "../utils/navigation";
import logo from "../assest/logo.jpeg";
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
      
      {/* ── NAV BAR ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl border-b border-gray-100 shadow-sm transition-all">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          
          <button onClick={() => navigateTo("/")} className="flex items-center gap-3 group">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-sm ring-2 ring-[#064E3B]/10 group-hover:ring-[#064E3B]/30 transition-all overflow-hidden p-1">
              <img src={logo} alt="SG Foundation" className="h-full w-full object-contain" />
            </div>
            <div className="leading-tight text-left hidden sm:block">
              <p className="text-sm font-bold text-[#064E3B]">SG Foundation</p>
              <p className="text-[10px] font-semibold text-[#D97706] uppercase tracking-widest">Spread Goodness</p>
            </div>
          </button>
          
          <div className="flex items-center gap-4">
            <button
              onClick={() => navigateTo("/")}
              className="hidden md:flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-semibold text-gray-600 transition hover:bg-gray-50 hover:text-[#064E3B]"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M19 12H5M12 5l-7 7 7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Home
            </button>
            <a
              href="#es-cta"
              className="rounded-full bg-[#064E3B] px-6 py-2.5 text-sm font-bold text-white shadow-md transition-all hover:-translate-y-0.5 hover:shadow-lg hover:bg-[#047857]"
            >
              Get Involved
            </a>
          </div>
          
        </div>
      </nav>

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
