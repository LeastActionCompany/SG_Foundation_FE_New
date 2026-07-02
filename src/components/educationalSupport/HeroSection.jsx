import { Reveal, ImgBox } from "./shared";
import { BookOpen, ArrowRight, Heart, Users } from "lucide-react";
import education from "../../assest/education/hero.png";

export default function HeroSection() {
  return (
    <section className="relative bg-[#FAFAF9] pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden">
      {/* Decorative Dots */}
      <div className="absolute top-20 left-10 w-64 h-64 opacity-20 pointer-events-none"
           style={{ backgroundImage: "radial-gradient(#D97706 2px, transparent 2px)", backgroundSize: "24px 24px" }} />
      <div className="absolute bottom-10 right-10 w-64 h-64 opacity-20 pointer-events-none"
           style={{ backgroundImage: "radial-gradient(#064E3B 2px, transparent 2px)", backgroundSize: "24px 24px" }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="max-w-2xl">
            <Reveal delay={0}>
              <div className="inline-flex items-center gap-2 mb-6 text-[#D97706] font-bold text-xs tracking-widest uppercase bg-orange-50 px-4 py-2 rounded-full border border-orange-100">
                <BookOpen className="w-4 h-4" />
                Educational Support Initiative
              </div>
            </Reveal>

            <Reveal delay={100}>
              <h1 className="text-[46px] md:text-[56px] lg:text-[68px] font-extrabold leading-[1.1] text-[#064E3B] mb-6 font-display">
                Education Today.<br />
                <span className="text-[#D97706]">Opportunity Forever.</span>
              </h1>
            </Reveal>

            <Reveal delay={200}>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-lg">
                We empower children from underserved communities with access to quality education, learning resources, and guidance to help them shape a better tomorrow.
              </p>
            </Reveal>

            <Reveal delay={300}>
              <div className="flex flex-wrap items-center gap-4 mb-10">
                <a
                  href="#es-programs"
                  className="inline-flex items-center gap-2 bg-[#064E3B] text-white px-7 py-3.5 rounded-full font-bold shadow-lg hover:bg-[#047857] hover:-translate-y-1 transition-all"
                >
                  Explore Programs
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a
                  href="#es-cta"
                  className="inline-flex items-center gap-2 bg-white text-[#064E3B] border-2 border-[#064E3B]/20 px-7 py-3.5 rounded-full font-bold hover:border-[#064E3B] hover:bg-gray-50 transition-all"
                >
                  Sponsor a Child
                  <Heart className="w-5 h-5" />
                </a>
              </div>
            </Reveal>

            <Reveal delay={400}>
              <div className="flex items-center gap-4 bg-white px-5 py-3 rounded-2xl shadow-sm border border-gray-100 w-fit">
                <div className="flex -space-x-3">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                      <ImgBox label={`User`} className="w-full h-full !border-none" />
                    </div>
                  ))}
                </div>
                <div className="text-sm font-bold text-[#064E3B]">
                  10,000+ <span className="font-medium text-gray-600">Children Supported</span>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Image Layout */}
          <Reveal delay={200} className="relative">
            <div className="relative w-full aspect-[4/3] lg:aspect-[1.1] z-10 flex justify-center">
              {/* Main curved image */}
              <img
  src={education}
  alt="Education Hero"
  className="w-full h-full rounded-tl-full rounded-br-full rounded-tr-3xl rounded-bl-3xl shadow-2xl bg-white" 
/>
              
              {/* Floating Overlay Card */}
              <div className="absolute -bottom-6 right-0 bg-[#064E3B] p-5 rounded-2xl shadow-xl flex items-center gap-4 w-72 animate-bounce-slow">
                <div className="bg-white text-[#064E3B] p-3 rounded-xl flex-shrink-0">
                  <BookOpen className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-bold text-[#D97706] text-sm">Educate • Empower • Elevate</p>
                  <p className="text-[11px] text-white/80 leading-snug mt-1">Every child deserves the chance to dream, learn, and achieve.</p>
                </div>
              </div>
              
              {/* Decorative paper plane */}
              <div className="absolute top-10 -right-6 text-[#064E3B] opacity-40 transform rotate-12">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 2L11 13"/><path d="M22 2L15 22L11 13L2 9L22 2Z"/></svg>
              </div>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}
