import { useEffect } from "react";
import { navigateTo } from "../utils/navigation";
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
