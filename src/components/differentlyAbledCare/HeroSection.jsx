import { Reveal, ImgBox } from "./shared";
import { ArrowRight, Heart, HeartHandshake, Shield, Sparkles } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative bg-[#FAFAF9] pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden">
      {/* Decorative Dots */}
      <div className="absolute top-20 left-10 w-64 h-64 opacity-20 pointer-events-none"
           style={{ backgroundImage: "radial-gradient(#0F766E 2px, transparent 2px)", backgroundSize: "24px 24px" }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="max-w-2xl relative z-10">
            <Reveal delay={0}>
              <div className="inline-flex items-center gap-2 mb-6 text-[#0F766E] font-bold text-xs tracking-widest uppercase bg-teal-50 px-4 py-2 rounded-full border border-teal-100">
                <HeartHandshake className="w-4 h-4" />
                Differently Abled Care Initiative
              </div>
            </Reveal>

            <Reveal delay={100}>
              <h1 className="text-[46px] md:text-[56px] lg:text-[68px] font-extrabold leading-[1.1] text-[#064E3B] mb-6 font-display">
                Inclusion Today.<br />
                <span className="text-[#0F766E]">Empowerment Forever.</span>
              </h1>
            </Reveal>

            <Reveal delay={200}>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-lg">
                We support differently abled individuals to live with dignity, independence, and equal opportunities in every aspect of life.
              </p>
            </Reveal>

            <Reveal delay={300}>
              <div className="flex flex-wrap items-center gap-4 mb-10">
                <a
                  href="#dac-programs"
                  className="inline-flex items-center gap-2 bg-[#0F766E] text-white px-7 py-3.5 rounded-full font-bold shadow-lg hover:bg-[#0D9488] hover:-translate-y-1 transition-all"
                >
                  Explore Our Programs
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a
                  href="#dac-cta"
                  className="inline-flex items-center gap-2 bg-white text-[#0F766E] border-2 border-[#0F766E]/20 px-7 py-3.5 rounded-full font-bold hover:border-[#0F766E] hover:bg-gray-50 transition-all"
                >
                  Support Inclusion
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
                  10,000+ <span className="font-medium text-gray-600">Lives Empowered</span>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Image Layout */}
          <Reveal delay={200} className="relative">
            <div className="relative w-full aspect-[4/3] lg:aspect-[1.1] z-10 flex justify-center">
              
              {/* Background Circular Shape */}
              <div className="absolute inset-0 bg-[#E6F4F1] rounded-full transform scale-[1.1] -z-10" />

              {/* Main organic circular image container */}
              <div className="w-[90%] h-[90%] rounded-full overflow-hidden border-8 border-white shadow-xl bg-white relative">
                <ImgBox 
                  label="Differently Abled Hero Image" 
                  className="w-full h-full absolute inset-0" 
                />
              </div>
              
              {/* Floating Information Card */}
              <div className="absolute top-1/4 -right-4 bg-white p-5 rounded-3xl shadow-2xl flex flex-col gap-5 border border-gray-100 w-64 animate-bounce-slow">
                <div className="flex items-center gap-4">
                  <div className="bg-teal-50 text-[#0F766E] p-2.5 rounded-full">
                    <HeartHandshake className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#064E3B] text-sm leading-none">Inclusion</h4>
                    <p className="text-[10px] text-gray-500 mt-1">Building an inclusive society</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-amber-50 text-amber-600 p-2.5 rounded-full">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#064E3B] text-sm leading-none">Independence</h4>
                    <p className="text-[10px] text-gray-500 mt-1">Helping live independently</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-rose-50 text-rose-600 p-2.5 rounded-full">
                    <Shield className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#064E3B] text-sm leading-none">Empowerment</h4>
                    <p className="text-[10px] text-gray-500 mt-1">Creating opportunities</p>
                  </div>
                </div>
              </div>
              
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}
