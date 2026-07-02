import { Reveal, ImgBox } from "./shared";
import { Heart, ArrowRight } from "lucide-react";
import { navigateTo } from "../../utils/navigation";
import celebrationImage from "../../assest/care/community.jpeg";

export default function CTASection() {
  return (
    <section id="dac-cta" className="bg-white py-16 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0A192F] rounded-[40px] overflow-hidden relative shadow-2xl">
          
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A192F] to-[#064E3B] opacity-90 z-0" />
          
          <div className="grid lg:grid-cols-2 items-center relative z-10">
            
            {/* Left Content */}
            <div className="p-12 lg:p-20">
              <Reveal delay={0}>
                <div className="w-16 h-16 rounded-full border-2 border-[#0F766E] flex items-center justify-center mb-8">
                  <Heart className="w-8 h-8 text-[#0F766E]" />
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight font-display">
                  Together, We Build an<br /> Inclusive Tomorrow.
                </h2>
              </Reveal>

              <Reveal delay={100}>
                <p className="text-white/80 text-lg mb-10 max-w-md leading-relaxed">
                  Your support can create a world where everyone belongs and thrives. Join us in making a difference.
                </p>
              </Reveal>

              <Reveal delay={200}>
                <div className="flex flex-wrap gap-4">
                  <button 
                    onClick={() => { navigateTo("/"); setTimeout(() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }), 150); }}
                    className="inline-flex items-center gap-2 bg-[#0F766E] text-white px-8 py-3.5 rounded-full font-bold shadow-lg hover:bg-[#0D9488] hover:-translate-y-1 transition-all"
                  >
                    Support Inclusion
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
            <Reveal delay={150} className="relative hidden lg:block h-full">
              <div className="absolute inset-y-0 right-0 w-[120%] p-6 py-10">
                <div className="w-full h-full rounded-[32px] overflow-hidden bg-white relative shadow-[-20px_0_40px_rgba(0,0,0,0.3)]">
                   <ImgBox 
                     src={celebrationImage}
                     alt="Inclusive community celebration for differently abled care"
                     label="Community Celebration Image" 
                     className="w-full h-full object-cover" 
                   />
                </div>
              </div>
            </Reveal>

          </div>
        </div>
      </div>
    </section>
  );
}
