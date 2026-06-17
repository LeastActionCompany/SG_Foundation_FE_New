import { useEffect } from "react";
import { navigateTo } from "../utils/navigation";
import logo from "../assest/logo.jpeg";
import HeroSection from "../components/childWomenWelfare/HeroSection";
import MissionStrip from "../components/childWomenWelfare/MissionStrip";
import KeyPrograms from "../components/childWomenWelfare/KeyPrograms";
import ImpactSection from "../components/childWomenWelfare/ImpactSection";
import StoryOfHope from "../components/childWomenWelfare/StoryOfHope";
import TestimonialSection from "../components/childWomenWelfare/TestimonialSection";
import CTASection from "../components/childWomenWelfare/CTASection";

export default function ChildWomenWelfarePage() {
  // Ensure scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#FFFAF5] overflow-x-hidden font-sans">
      
      {/* ── NAV BAR ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl border-b border-pink-50 shadow-sm transition-all">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          
          <button onClick={() => navigateTo("/")} className="flex items-center gap-3 group">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-sm ring-2 ring-[#9D174D]/10 group-hover:ring-[#9D174D]/30 transition-all overflow-hidden p-1">
              <img src={logo} alt="SG Foundation" className="h-full w-full object-contain" />
            </div>
            <div className="leading-tight text-left hidden sm:block">
              <p className="text-sm font-bold text-[#4C1D95]">SG Foundation</p>
              <p className="text-[10px] font-semibold text-[#9D174D] uppercase tracking-widest">Spread Goodness</p>
            </div>
          </button>
          
          <div className="flex items-center gap-4">
            <button
              onClick={() => navigateTo("/")}
              className="hidden md:flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-semibold text-gray-600 transition hover:bg-gray-50 hover:text-[#9D174D]"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M19 12H5M12 5l-7 7 7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Home
            </button>
            <a
              href="#cww-cta"
              className="rounded-full bg-[#9D174D] px-6 py-2.5 text-sm font-bold text-white shadow-md transition-all hover:-translate-y-0.5 hover:shadow-lg hover:bg-[#831843]"
            >
              Get Involved
            </a>
          </div>
          
        </div>
      </nav>

      <main>
        <HeroSection />
        <MissionStrip />
        <KeyPrograms />
        <ImpactSection />
        <StoryOfHope />
        <TestimonialSection />
        <CTASection />
      </main>

      {/* ── FOOTER BAR ── */}
      <div className="bg-[#4C1D95] py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-white/70">
            © {new Date().getFullYear()} SG Foundation — Child & Women Welfare Initiative
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
