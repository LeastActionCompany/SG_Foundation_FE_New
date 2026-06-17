import { Reveal, ImgBox } from "./shared";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function TestimonialSection() {
  return (
    <section className="py-24 bg-[#F8FAFC] overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div className="lg:col-span-1">
            <Reveal>
              <h2 className="text-3xl md:text-4xl font-bold text-[#4C1D95] font-display mb-8">
                Voices of Change
              </h2>
            </Reveal>
            <Reveal delay={150}>
              <div className="bg-white p-10 md:p-12 rounded-[40px] shadow-sm border border-emerald-50 relative">
                <div className="text-emerald-100 text-6xl font-serif leading-none absolute top-8 left-8">"</div>
                
                <p className="text-lg md:text-xl text-gray-700 mb-10 relative z-10 leading-relaxed font-serif">
                  SG Foundation is creating a powerful impact by empowering women and transforming the lives of children. Their work brings hope and lasting change.
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-sm flex-shrink-0 bg-gray-100">
                      <ImgBox label="User" className="w-full h-full !border-none" />
                    </div>
                    <div>
                      <p className="font-bold text-[#4C1D95]">Priya Mehta</p>
                      <p className="text-xs text-emerald-600 font-medium">Social Worker</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button className="w-10 h-10 rounded-full border border-emerald-100 bg-emerald-50 flex items-center justify-center text-emerald-700 hover:bg-emerald-100 transition-all">
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button className="w-10 h-10 rounded-full border border-emerald-100 bg-emerald-50 flex items-center justify-center text-emerald-700 hover:bg-emerald-100 transition-all">
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                <div className="flex justify-start gap-1.5 mt-8">
                  <div className="w-2 h-2 rounded-full bg-emerald-600"></div>
                  <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                  <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-1 hidden lg:block">
             <div className="w-full h-full min-h-[300px] flex items-center justify-center opacity-[0.03] pointer-events-none text-[#4C1D95]">
               {/* Floral SVG placeholder */}
               <svg viewBox="0 0 100 100" fill="currentColor" className="w-64 h-64"><path d="M50 0C50 0 60 30 50 50C40 30 50 0 50 0ZM50 100C50 100 60 70 50 50C40 70 50 100 50 100ZM0 50C0 50 30 60 50 50C30 40 0 50 0 50ZM100 50C100 50 70 60 50 50C70 40 100 50 100 50Z"/></svg>
             </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
