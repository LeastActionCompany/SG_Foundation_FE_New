import { Reveal, ImgBox } from "./shared";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function TestimonialSection() {
  return (
    <section className="py-24 bg-[#FAFAF9] overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div className="lg:col-span-1">
            <Reveal>
              <h2 className="text-3xl md:text-4xl font-bold text-[#064E3B] font-display mb-8">
                Voices of Change
              </h2>
            </Reveal>
            <Reveal delay={150}>
              <div className="bg-white p-10 md:p-12 rounded-[40px] shadow-sm border border-gray-100 relative">
                <div className="text-[#064E3B] text-6xl font-serif leading-none absolute top-8 left-8 opacity-10">"</div>
                
                <p className="text-lg md:text-xl text-gray-700 mb-10 relative z-10 leading-relaxed font-serif">
                  The dedication and compassion of SG Foundation is transforming lives. They truly believe in abilities, not disabilities.
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-sm flex-shrink-0 bg-gray-100">
                      <ImgBox label="User" className="w-full h-full !border-none" />
                    </div>
                    <div>
                      <p className="font-bold text-[#064E3B]">Neha Verma</p>
                      <p className="text-xs text-gray-500">Parent</p>
                    </div>
                  </div>

                  {/* Slider controls inline */}
                  <div className="flex items-center gap-2">
                    <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-[#064E3B] hover:border-[#064E3B] transition-all">
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-[#064E3B] hover:border-[#064E3B] transition-all">
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                <div className="flex justify-start gap-1.5 mt-8">
                  <div className="w-2 h-2 rounded-full bg-[#064E3B]"></div>
                  <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                  <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-1 hidden lg:block">
             {/* Decorative element for the right side or secondary testimonial */}
             <div className="w-full h-full min-h-[300px] flex items-center justify-center opacity-10 pointer-events-none">
               <svg width="200" height="200" viewBox="0 0 24 24" fill="currentColor"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
             </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
