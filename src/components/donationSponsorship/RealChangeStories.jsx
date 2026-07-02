import { Reveal, ImgBox } from "./shared";
import { ChevronLeft, ChevronRight } from "lucide-react";
import userImage from "../../assest/donate/user.png";

export default function RealChangeStories() {
  return (
    <section className="py-24 bg-[#FAFAF8] overflow-hidden border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-[#FFFDF8] rounded-[40px] border border-amber-100/50 p-8 md:p-16 shadow-sm">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-4 relative z-10">
              <Reveal delay={0}>
                <h2 className="text-4xl md:text-5xl font-bold text-[#0F6B4B] font-display leading-tight mb-6">
                  Real Change.<br /> Real Stories.
                </h2>
              </Reveal>

              <Reveal delay={100}>
                <p className="text-gray-600 mb-8 leading-relaxed text-sm">
                  Your kindness today writes a better tomorrow for those who need it most.
                </p>
                {/* Decorative illustration placeholder */}
                <div className="text-[#D8A531] opacity-50">
                   <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M22 2L11 13"/><path d="M22 2L15 22L11 13L2 9L22 2Z"/></svg>
                </div>
              </Reveal>
            </div>

            {/* Right Testimonial Slider Structure */}
            <div className="lg:col-span-8 bg-white p-8 md:p-12 rounded-[32px] shadow-lg border border-gray-50 relative">
              <Reveal delay={200}>
                <div className="text-[#D8A531] text-6xl font-serif leading-none absolute top-8 left-8 opacity-20">"</div>
                
                <div className="flex flex-col md:flex-row gap-8 items-center md:items-start relative z-10">
                  <div className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0 border-4 border-[#F4ECDC]">
                     <ImgBox
                       src={userImage}
                       alt="Real change story testimonial"
                       label="User"
                       className="w-full h-full !border-none"
                     />
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <p className="text-lg md:text-xl text-gray-700 mb-6 italic leading-relaxed font-serif">
                      Thanks to the support I received, I can go to school, learn, and dream of a better future. I am truly grateful for this opportunity.
                    </p>
                    <h4 className="font-bold text-[#0F6B4B]">Rahul Kumar</h4>
                    <p className="text-sm text-[#D8A531] font-medium mt-1">Sponsored Child</p>
                  </div>
                </div>

                <div className="flex items-center justify-between mt-8 pt-8 border-t border-gray-100">
                  <div className="flex gap-2">
                    <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-[#0F6B4B] hover:border-[#0F6B4B] transition-all">
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-[#0F6B4B] hover:border-[#0F6B4B] transition-all">
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#0F6B4B]"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-gray-200"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-gray-200"></div>
                  </div>
                </div>
              </Reveal>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
