import { Reveal, ImgBox } from "./shared";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function TestimonialSection() {
  return (
    <section className="py-24 bg-[#E8F5E9]/30 overflow-hidden relative border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-3 gap-12 items-center">
          
          <div className="lg:col-span-1">
            <Reveal>
              <p className="text-[#064E3B] font-bold text-xs tracking-widest uppercase mb-2">What People Say</p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#064E3B] font-display mb-6">
                Voices of Trust
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <div className="flex items-center gap-3">
                <button className="w-10 h-10 rounded-full bg-[#064E3B] text-white flex items-center justify-center hover:bg-[#047857] transition-all shadow-md">
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button className="w-10 h-10 rounded-full bg-[#064E3B] text-white flex items-center justify-center hover:bg-[#047857] transition-all shadow-md">
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-2">
            <Reveal delay={150}>
              <div className="bg-white p-10 md:p-12 rounded-[40px] shadow-xl border border-gray-50 relative">
                <div className="text-[#064E3B] text-6xl font-serif leading-none absolute top-8 left-8 opacity-10">"</div>
                
                <p className="text-xl md:text-2xl text-gray-700 mb-8 italic relative z-10 leading-relaxed font-serif">
                  SG Foundation is creating real impact in children's lives through education. Their support and guidance provided are truly life-changing.
                </p>
                
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-white shadow-sm flex-shrink-0 bg-gray-100">
                    <ImgBox label="User" className="w-full h-full !border-none" />
                  </div>
                  <div>
                    <p className="font-bold text-[#064E3B]">Ravi Kumar</p>
                    <p className="text-sm text-gray-500">School Principal</p>
                  </div>
                </div>

                {/* Decorative pencil */}
                <div className="absolute -bottom-8 -right-8 w-40 opacity-20 transform -rotate-12 pointer-events-none hidden md:block">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#064E3B" strokeWidth="1"><path d="M12 19l7-7 3 3-7 7-3-3z"></path><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path><path d="M2 2l7.586 7.586"></path><circle cx="11" cy="11" r="2"></circle></svg>
                </div>
              </div>
            </Reveal>
            
            <div className="flex justify-start gap-2 mt-8 ml-4">
              <div className="w-2.5 h-2.5 rounded-full bg-[#064E3B]"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-gray-300"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-gray-300"></div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
