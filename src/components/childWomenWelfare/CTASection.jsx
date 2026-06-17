import { Reveal, ImgBox } from "./shared";
import { Heart, ArrowRight } from "lucide-react";
import { navigateTo } from "../../utils/navigation";

export default function CTASection() {
  return (
    <section id="cww-cta" className="bg-white py-16 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-[40px] overflow-hidden relative shadow-2xl bg-gradient-to-r from-[#BE185D] to-[#831843]">
          
          <div className="grid lg:grid-cols-2 items-center relative z-10">
            
            {/* Left Content */}
            <div className="p-12 lg:p-20">
              <Reveal delay={0}>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight font-display">
                  Together, We Nurture.<br />
                  Together, We Transform.
                </h2>
              </Reveal>

              <Reveal delay={100}>
                <p className="text-white/90 text-lg mb-10 max-w-md leading-relaxed font-medium">
                  Your support can empower women and create a brighter future for children.
                </p>
              </Reveal>

              <Reveal delay={200}>
                <div className="flex flex-wrap gap-4">
                  <button 
                    onClick={() => { navigateTo("/"); setTimeout(() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }), 150); }}
                    className="inline-flex items-center gap-2 bg-white text-[#9D174D] px-8 py-3.5 rounded-full font-bold shadow-lg hover:bg-gray-50 hover:-translate-y-1 transition-all"
                  >
                    Support Women & Children
                    <Heart className="w-4 h-4" />
                  </button>
                  <button 
                    onClick={() => { navigateTo("/"); setTimeout(() => document.querySelector("#donate")?.scrollIntoView({ behavior: "smooth" }), 150); }}
                    className="inline-flex items-center gap-2 border-2 border-white/30 text-white px-8 py-3.5 rounded-full font-bold hover:bg-white/10 hover:border-white/50 transition-all"
                  >
                    Donate Now
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </Reveal>
            </div>

            {/* Right Image Section */}
            <Reveal delay={150} className="relative hidden lg:flex h-full items-center justify-center p-12">
              <div className="w-80 h-80 rounded-full overflow-hidden bg-white relative shadow-2xl border-8 border-white/20">
                 <ImgBox 
                   label="Community Impact Image" 
                   className="w-full h-full object-cover rounded-full" 
                 />
              </div>
              
              {/* Decorative shapes */}
              <div className="absolute top-10 right-10 opacity-20 text-white">
                <Heart strokeWidth={1} className="w-24 h-24 transform rotate-12" />
              </div>
            </Reveal>

          </div>
        </div>
      </div>
    </section>
  );
}
