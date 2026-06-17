import { useEffect } from "react";
import { navigateTo } from "../utils/navigation";
import logo from "../assest/logo.jpeg";
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
      
      {/* ── NAV BAR ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl border-b border-gray-100 shadow-sm transition-all">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          
          <button onClick={() => navigateTo("/")} className="flex items-center gap-3 group">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md ring-2 ring-orange-100 group-hover:ring-orange-300 transition-all overflow-hidden">
              <img src={logo} alt="SG Foundation" className="h-full w-full object-contain p-1" />
            </div>
            <div className="leading-tight text-left">
              <p className="text-sm font-bold text-[#1E3A8A]">SG Foundation</p>
              <p className="text-[10px] font-semibold text-[#F59E0B] uppercase tracking-widest">Spread Goodness</p>
            </div>
          </button>
          
          <div className="flex items-center gap-3">
            <button
              onClick={() => navigateTo("/")}
              className="hidden sm:flex items-center gap-1.5 rounded-full border border-gray-200 px-4 py-2 text-sm font-medium text-gray-600 transition hover:bg-gray-50 hover:text-gray-900"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <path d="M19 12H5M12 5l-7 7 7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Back to Home
            </button>
            <a
              href="#sd-cta"
              className="rounded-full bg-[#F59E0B] px-5 py-2 text-sm font-bold text-white shadow-md transition-all hover:-translate-y-0.5 hover:shadow-lg hover:bg-orange-600"
            >
              Get Involved
            </a>
          </div>
          
        </div>
      </nav>

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
