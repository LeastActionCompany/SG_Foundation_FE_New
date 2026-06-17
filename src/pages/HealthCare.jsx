import { useEffect } from "react";
import { navigateTo } from "../utils/navigation";
import logo from "../assest/logo.jpeg";
import HeroSection from "../components/healthcare/HeroSection";
import FocusAreas from "../components/healthcare/FocusAreas";
import ImpactStats from "../components/healthcare/ImpactStats";
import HealthcarePrograms from "../components/healthcare/HealthcarePrograms";
import MobileHealthSection from "../components/healthcare/MobileHealthSection";
import Testimonials from "../components/healthcare/Testimonials";
import CTASection from "../components/healthcare/CTASection";

export default function HealthCarePage() {
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
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md ring-2 ring-[#0F9D94]/20 group-hover:ring-[#0F9D94]/40 transition-all overflow-hidden">
              <img src={logo} alt="SG Foundation" className="h-full w-full object-contain p-1" />
            </div>
            <div className="leading-tight text-left">
              <p className="text-sm font-bold text-[#0A2342]">SG Foundation</p>
              <p className="text-[10px] font-semibold text-[#0F9D94] uppercase tracking-widest">Spread Goodness</p>
            </div>
          </button>
          
          <div className="flex items-center gap-3">
            <button
              onClick={() => navigateTo("/")}
              className="hidden sm:flex items-center gap-1.5 rounded-full border border-gray-200 px-4 py-2 text-sm font-medium text-gray-600 transition hover:bg-gray-50 hover:text-[#0A2342]"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <path d="M19 12H5M12 5l-7 7 7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Back to Home
            </button>
            <a
              href="#hc-cta"
              className="rounded-full bg-[#0A2342] px-5 py-2 text-sm font-bold text-white shadow-md transition-all hover:-translate-y-0.5 hover:shadow-lg hover:bg-[#0F9D94]"
            >
              Get Involved
            </a>
          </div>
          
        </div>
      </nav>

      <main>
        <HeroSection />
        <FocusAreas />
        <ImpactStats />
        <HealthcarePrograms />
        <MobileHealthSection />
        <Testimonials />
        <CTASection />
      </main>

      {/* ── FOOTER BAR ── */}
      <div className="bg-[#0A2342] border-t border-white/10 py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-between gap-3 sm:flex-row">
          <p className="text-xs text-gray-400">
            © {new Date().getFullYear()} SG Foundation — Healthcare Initiative
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
