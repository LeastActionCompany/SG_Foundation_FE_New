import { Reveal, ImgBox } from "./shared";
import { Settings, Users, ArrowRight } from "lucide-react";
import bgimage from "../../assest/bgimage.png";

export default function HeroSection() {
  return (
    <section className="relative bg-[#F8FAFC] pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div
          className="absolute top-20 left-10 w-64 h-64 opacity-20"
          style={{
            backgroundImage: "radial-gradient(#F59E0B 2px, transparent 2px)",
            backgroundSize: "20px 20px",
          }}
        />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-orange-100/50 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-1/3 w-72 h-72 bg-blue-100/50 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="max-w-2xl">
            <Reveal delay={0}>
              <div className="inline-flex items-center gap-2 mb-6 text-[#F59E0B] font-bold text-sm tracking-wider uppercase bg-orange-50 px-4 py-2 rounded-full border border-orange-100">
                <Settings className="w-4 h-4 animate-spin-slow" />
                Skill Development Initiative
              </div>
            </Reveal>

            <Reveal delay={100}>
              <h1 className="text-[42px] md:text-[56px] lg:text-[64px] font-extrabold leading-[1.1] text-[#1E3A8A] mb-6 font-display">
                Skills Today,<br />
                <span className="text-[#F59E0B]">Better Tomorrow.</span>
              </h1>
            </Reveal>

            <Reveal delay={200}>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-lg">
                We equip individuals with industry-relevant skills, practical training, and real-world exposure to help them build sustainable and independent futures.
              </p>
            </Reveal>

            <Reveal delay={300}>
              <div className="flex flex-wrap items-center gap-4 mb-10">
                <a
                  href="#sd-focus"
                  className="inline-flex items-center gap-2 bg-[#F59E0B] text-white px-7 py-3.5 rounded-full font-bold shadow-lg shadow-orange-500/30 hover:bg-orange-600 hover:-translate-y-1 transition-all"
                >
                  Explore Programs
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a
                  href="#sd-cta"
                  className="inline-flex items-center gap-2 bg-white text-[#1E3A8A] border-2 border-[#1E3A8A]/20 px-7 py-3.5 rounded-full font-bold hover:border-[#1E3A8A] hover:bg-gray-50 transition-all"
                >
                  Partner With Us
                  <Users className="w-5 h-5" />
                </a>
              </div>
            </Reveal>

            <Reveal delay={400}>
              <div className="flex items-center gap-4 bg-white px-5 py-3 rounded-2xl shadow-sm border border-gray-100 w-fit">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                      <ImgBox label={`User ${i}`} className="w-full h-full" />
                    </div>
                  ))}
                </div>
                <div className="text-sm font-bold text-[#1E3A8A]">
                  <span className="text-[#F59E0B]">10,000+</span> Learners Empowered
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Image Layout */}
          <Reveal delay={200} className="relative">
            <div className="relative w-full aspect-[4/3] lg:aspect-[1.1] z-10">
              <div className="w-full h-full rounded-l-[100px] rounded-r-3xl border-l-[16px] border-[#F59E0B] shadow-2xl overflow-hidden">
  <img
    src={bgimage}
    alt="Skill Development Hero"
    className="w-full h-full object-cover"
  />
</div>
              
              {/* Floating Achievement Card */}
              <div className="absolute -bottom-6 right-8 bg-white p-5 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-4 animate-bounce-slow">
                <div className="bg-[#1E3A8A] text-white p-3 rounded-xl">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <path d="M9 12l2 2 4-4" />
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-[#1E3A8A] text-sm">Learn • Practice • Succeed</p>
                  <p className="text-xs text-gray-500">Building skills that build lives.</p>
                </div>
              </div>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}
