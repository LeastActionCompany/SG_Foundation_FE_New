import { Reveal, ImgBox } from "./shared";
import { Heart, ArrowRight, GraduationCap } from "lucide-react";
import { navigateTo } from "../../utils/navigation";
import helpAChild from "../../assest/education/helpachild.png";

export default function CTASection() {
  return (
    <section id="es-cta" className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0A192F] rounded-[40px] overflow-hidden relative shadow-2xl">
          
          <div className="grid lg:grid-cols-2 items-center">
            
            {/* Left Content */}
            <div className="p-12 lg:p-20 relative z-10">
              <Reveal delay={0}>
                <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mb-8 border border-white/20">
                  <GraduationCap className="w-8 h-8 text-white" strokeWidth={1.5} />
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight font-display">
                  Help a Child Learn.<br />
                  Help a Child Grow.
                </h2>
              </Reveal>

              <Reveal delay={100}>
                <p className="text-white/80 text-lg mb-10 max-w-md leading-relaxed">
                  Your support today can open doors to education and create a better tomorrow for a child in need.
                </p>
              </Reveal>

              <Reveal delay={200}>
                <div className="flex flex-wrap gap-4">
                  <button 
                    onClick={() => { navigateTo("/"); setTimeout(() => document.querySelector("#donate")?.scrollIntoView({ behavior: "smooth" }), 150); }}
                    className="inline-flex items-center gap-2 bg-[#FCD34D] text-[#0A192F] px-8 py-3.5 rounded-full font-bold shadow-lg hover:bg-yellow-400 hover:-translate-y-1 transition-all"
                  >
                    Sponsor a Child
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
              <div className="absolute inset-y-0 right-0 w-full p-6">
                <div className="w-full h-full rounded-[32px] overflow-hidden bg-white relative">
                   <ImgBox 
                     src={helpAChild}
                     alt="Child receiving learning support"
                     className="w-full h-full object-cover rounded-[32px]" 
                   />
                </div>
              </div>
              
              {/* Decorative blob */}
              <div className="absolute bottom-10 right-10 w-48 h-48 bg-[#FCD34D] rounded-full blur-3xl opacity-30 -z-10" />
            </Reveal>

          </div>
        </div>
      </div>
    </section>
  );
}
