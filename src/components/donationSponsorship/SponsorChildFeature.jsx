import { Reveal, ImgBox } from "./shared";
import { BookOpen, Apple, HeartPulse, ShieldCheck, Heart } from "lucide-react";
import { navigateTo } from "../../utils/navigation";

export default function SponsorChildFeature() {
  return (
    <section className="py-24 bg-[#FAFAF8] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-white rounded-[40px] shadow-sm border border-gray-100 p-8 md:p-12">
          <div className="grid lg:grid-cols-3 gap-12 items-center">
            
            {/* Left Image */}
            <Reveal className="lg:col-span-1 h-full">
               <div className="w-full aspect-square lg:aspect-auto lg:h-full rounded-[32px] overflow-hidden bg-[#F4ECDC] relative border border-[#F4ECDC]">
                 <ImgBox 
                   label="Sponsor a Child Image Placeholder" 
                   className="w-full h-full" 
                 />
               </div>
            </Reveal>

            {/* Center Content */}
            <div className="lg:col-span-1 py-4">
              <Reveal delay={100}>
                <h2 className="text-3xl font-bold text-[#0F6B4B] font-display mb-4 leading-tight">
                  Sponsor a Child, Shape a Future
                </h2>
                <p className="text-gray-600 text-sm mb-8 leading-relaxed">
                  Your sponsorship provides education, nutrition, healthcare, and a safe environment for a child to grow and thrive.
                </p>
              </Reveal>

              <Reveal delay={200}>
                <div className="grid grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center">
                      <BookOpen className="w-5 h-5" />
                    </div>
                    <h4 className="font-bold text-[#0F6B4B] text-sm">Education</h4>
                    <p className="text-xs text-gray-500">Quality learning opportunities</p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="w-10 h-10 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center">
                      <Apple className="w-5 h-5" />
                    </div>
                    <h4 className="font-bold text-[#0F6B4B] text-sm">Nutrition</h4>
                    <p className="text-xs text-gray-500">Healthy meals for better growth</p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="w-10 h-10 rounded-full bg-rose-50 text-rose-600 flex items-center justify-center">
                      <HeartPulse className="w-5 h-5" />
                    </div>
                    <h4 className="font-bold text-[#0F6B4B] text-sm">Healthcare</h4>
                    <p className="text-xs text-gray-500">Medical care and well-being</p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <h4 className="font-bold text-[#0F6B4B] text-sm">Care & Support</h4>
                    <p className="text-xs text-gray-500">Love, safety and holistic support</p>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Right Pricing Card */}
            <Reveal delay={300} className="lg:col-span-1">
              <div className="bg-[#0F6B4B] rounded-[32px] p-10 text-white shadow-xl relative overflow-hidden h-full flex flex-col justify-center">
                {/* Decorative blob */}
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#145A43] rounded-full opacity-50 blur-2xl"></div>
                
                <div className="relative z-10 text-center">
                  <h3 className="text-5xl font-bold font-display mb-2">₹2,000</h3>
                  <p className="text-white/80 font-medium tracking-wide uppercase text-sm mb-6">Per Month</p>
                  <p className="text-white/90 text-sm leading-relaxed mb-8">
                    can change a child's life forever.
                  </p>
                  <button 
                    onClick={() => { navigateTo("/"); setTimeout(() => document.querySelector("#donate")?.scrollIntoView({ behavior: "smooth" }), 150); }}
                    className="w-full bg-white text-[#0F6B4B] py-4 rounded-full font-bold shadow-lg hover:bg-gray-50 hover:-translate-y-1 transition-all flex justify-center items-center gap-2"
                  >
                    Sponsor Now
                    <Heart className="w-5 h-5 text-[#D8A531]" fill="currentColor" />
                  </button>
                </div>
              </div>
            </Reveal>

          </div>
        </div>
      </div>
    </section>
  );
}
