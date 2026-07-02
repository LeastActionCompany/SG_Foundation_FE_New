import { Reveal, ImgBox } from "./shared";
import { Heart, Users } from "lucide-react";
import { navigateTo } from "../../utils/navigation";
import today from "../../assest/healthcare/today.jpeg";

export default function CTASection() {
  return (
    <section id="hc-cta" className="bg-gradient-to-r from-[#0A2342] to-[#0F9D94] py-0 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-stretch min-h-[400px]">
          
          {/* Left Text Content */}
          <div className="py-16 lg:py-20 pr-8 flex flex-col justify-center">
            <Reveal delay={0}>
              <h2 className="text-4xl md:text-5xl lg:text-[56px] font-bold text-white mb-2 leading-tight font-display">
                Good Health Today,
              </h2>
              <h2 className="text-4xl md:text-5xl lg:text-[56px] font-bold text-[#14B8A6] mb-6 leading-tight font-display opacity-90">
                A Better Tomorrow.
              </h2>
            </Reveal>

            <Reveal delay={100}>
              <p className="text-white/80 text-base md:text-lg mb-10 max-w-lg leading-relaxed">
                Your support helps us provide healthcare, hope, and healing to those who need it most.
              </p>
            </Reveal>

            <Reveal delay={200}>
              <div className="flex flex-wrap gap-4">
                <button 
                  onClick={() => { navigateTo("/"); setTimeout(() => document.querySelector("#donate")?.scrollIntoView({ behavior: "smooth" }), 150); }}
                  className="inline-flex items-center gap-2 bg-[#0F9D94] text-white px-8 py-3.5 rounded-full font-bold shadow-lg hover:bg-[#14B8A6] hover:-translate-y-1 transition-all"
                >
                  Donate Now
                  <Heart className="w-4 h-4" />
                </button>
                <button 
                  onClick={() => { navigateTo("/"); setTimeout(() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }), 150); }}
                  className="inline-flex items-center gap-2 border-2 border-white/30 text-white px-8 py-3.5 rounded-full font-bold hover:bg-white/10 hover:border-white/50 transition-all"
                >
                  Become a Partner
                  <Users className="w-4 h-4" />
                </button>
              </div>
            </Reveal>
          </div>

          {/* Right Image Full Bleed */}
          <Reveal delay={150} className="relative hidden lg:block h-full">
            <div className="absolute inset-y-0 right-0 w-[120%] shadow-[-20px_0_50px_rgba(0,0,0,0.3)]">
               <img
  src={today}
  alt="Healthcare CTA"
  className="w-full h-full object-cover rounded-l-[60px]"
/>
               <div className="absolute inset-0 bg-[#0F9D94] mix-blend-multiply opacity-20 rounded-l-[60px]" />
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}
