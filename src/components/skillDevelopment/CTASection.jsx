import { Reveal, ImgBox } from "./shared";
import { ArrowRight, Heart } from "lucide-react";
import { navigateTo } from "../../utils/navigation";
import cta from "../../assest/Offer/cta.png";

export default function CTASection() {
  return (
    <section id="sd-cta" className="bg-[#0F172A] py-20 relative overflow-hidden">
      {/* Decorative dots background */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, white 2px, transparent 2px)",
          backgroundSize: "20px 20px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Text Content */}
          <div>
            <Reveal delay={0}>
              <h2 className="text-4xl md:text-5xl lg:text-[56px] font-bold text-white mb-2 leading-tight font-display">
                Empower Skills.
              </h2>
              <h2 className="text-4xl md:text-5xl lg:text-[56px] font-bold text-[#F59E0B] mb-6 leading-tight font-display">
                Transform Lives.
              </h2>
            </Reveal>

            <Reveal delay={100}>
              <p className="text-gray-300 text-base md:text-lg mb-10 max-w-lg leading-relaxed">
                Join us in building a skilled, confident, and self-reliant community. Support education, vocational training, and employment programs.
              </p>
            </Reveal>

            <Reveal delay={200}>
              <div className="flex flex-wrap gap-4">
                <button 
                  onClick={() => { navigateTo("/"); setTimeout(() => document.querySelector("#volunteer")?.scrollIntoView({ behavior: "smooth" }), 150); }}
                  className="inline-flex items-center gap-2 bg-[#F59E0B] text-white px-8 py-3.5 rounded-full font-bold shadow-lg hover:bg-orange-600 hover:-translate-y-1 transition-all"
                >
                  Get Involved
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button 
                  onClick={() => { navigateTo("/"); setTimeout(() => document.querySelector("#donate")?.scrollIntoView({ behavior: "smooth" }), 150); }}
                  className="inline-flex items-center gap-2 border-2 border-white/30 text-white px-8 py-3.5 rounded-full font-bold hover:bg-white/10 hover:border-white/50 transition-all"
                >
                  Donate Now
                  <Heart className="w-4 h-4" />
                </button>
              </div>
            </Reveal>
          </div>

          {/* Right Image */}
          <Reveal delay={150} className="relative hidden lg:block">
            <div className="relative rounded-3xl overflow-hidden aspect-[16/10] shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
              <img
  src={cta}
  alt="CTA Background"
  className="w-full h-full object-cover"
/>
               
               {/* Dark gradient overlay for bottom */}
               <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] to-transparent opacity-60" />
            </div>
            
            {/* Orange decorative accent shape */}
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-[#F59E0B] rounded-xl -z-10 transform rotate-12" />
          </Reveal>

        </div>
      </div>
    </section>
  );
}
