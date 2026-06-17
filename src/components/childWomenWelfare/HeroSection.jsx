import { Reveal, ImgBox } from "./shared";
import { ArrowRight, Heart, HeartHandshake, Shield, Sparkles } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative bg-[#FFFAF5] pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden">
      {/* Decorative Floral background shape placeholder */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#FFF0F5] opacity-50 rounded-bl-[200px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="max-w-2xl relative z-10">
            <Reveal delay={0}>
              <div className="inline-flex items-center gap-2 mb-6 text-[#9D174D] font-bold text-xs tracking-widest uppercase bg-pink-50 px-4 py-2 rounded-full border border-pink-100">
                <HeartHandshake className="w-4 h-4" />
                Child & Women Welfare Initiative
              </div>
            </Reveal>

            <Reveal delay={100}>
              <h1 className="text-[46px] md:text-[56px] lg:text-[68px] font-extrabold leading-[1.1] text-[#4C1D95] mb-6 font-display">
                Stronger Women.<br />
                <span className="text-[#BE185D]">Brighter Children.</span>
              </h1>
            </Reveal>

            <Reveal delay={200}>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed max-w-lg">
                We empower women and nurture children by providing care, protection, education, and opportunities to build a better and equal tomorrow.
              </p>
            </Reveal>

            <Reveal delay={300}>
              <div className="flex flex-wrap items-center gap-4 mb-10">
                <a
                  href="#cww-programs"
                  className="inline-flex items-center gap-2 bg-[#9D174D] text-white px-7 py-3.5 rounded-full font-bold shadow-lg hover:bg-[#831843] hover:-translate-y-1 transition-all"
                >
                  Explore Our Programs
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a
                  href="#cww-cta"
                  className="inline-flex items-center gap-2 bg-white text-[#9D174D] border-2 border-[#9D174D]/20 px-7 py-3.5 rounded-full font-bold hover:border-[#9D174D] hover:bg-pink-50 transition-all"
                >
                  Support Our Mission
                  <Heart className="w-5 h-5" />
                </a>
              </div>
            </Reveal>

            <Reveal delay={400}>
              <div className="flex items-center gap-4 bg-white px-5 py-3 rounded-2xl shadow-sm border border-pink-50 w-fit">
                <div className="flex -space-x-3">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                      <ImgBox label={`User`} className="w-full h-full !border-none" />
                    </div>
                  ))}
                </div>
                <div className="text-sm font-bold text-[#4C1D95]">
                  Join 10,000+ <span className="font-medium text-gray-600">changemakers</span>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Image Layout */}
          <Reveal delay={200} className="relative">
            <div className="relative w-full aspect-square lg:aspect-[1.1] z-10 flex justify-center items-center">
              
              {/* Floating Cards */}
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-4 rounded-2xl shadow-lg flex gap-4 w-60 animate-bounce-slow z-20 border border-pink-50">
                <div className="bg-pink-100 text-[#9D174D] p-2 rounded-full h-fit">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-[#4C1D95] text-sm">Women Empowerment</h4>
                  <p className="text-[10px] text-gray-600 mt-1 leading-snug">Building confidence, skills and independence.</p>
                </div>
              </div>

              <div className="absolute top-1/3 -left-8 bg-white/90 backdrop-blur-sm p-4 rounded-2xl shadow-lg flex gap-4 w-60 animate-bounce-slow delay-150 z-20 border border-purple-50">
                <div className="bg-purple-100 text-purple-700 p-2 rounded-full h-fit">
                  <Heart className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-[#4C1D95] text-sm">Child Development</h4>
                  <p className="text-[10px] text-gray-600 mt-1 leading-snug">Education, nutrition and holistic growth.</p>
                </div>
              </div>

              <div className="absolute bottom-10 right-0 bg-white/90 backdrop-blur-sm p-4 rounded-2xl shadow-lg flex gap-4 w-60 animate-bounce-slow delay-300 z-20 border border-emerald-50">
                <div className="bg-emerald-100 text-emerald-700 p-2 rounded-full h-fit">
                  <Shield className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-[#4C1D95] text-sm">Safety & Protection</h4>
                  <p className="text-[10px] text-gray-600 mt-1 leading-snug">Creating safe spaces and protecting rights.</p>
                </div>
              </div>

              {/* Main organic circular image container */}
              <div className="w-[80%] h-[80%] rounded-full overflow-hidden shadow-2xl relative">
                <ImgBox 
                  label="Hero Welfare Image" 
                  className="w-full h-full absolute inset-0" 
                />
              </div>
              
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}
