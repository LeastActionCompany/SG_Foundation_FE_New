import { Reveal, ImgBox } from "./shared";

export default function SuccessStory() {
  return (
    <section className="py-24 bg-white overflow-hidden border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-[#FFFDF8] rounded-[40px] border border-amber-100 p-8 md:p-16 relative overflow-hidden shadow-sm">
          
          {/* Decorative Elements */}
          <div className="absolute top-10 right-10 text-amber-200">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Content */}
            <div className="relative z-10">
              <Reveal delay={0}>
                <h2 className="text-3xl md:text-5xl font-bold text-[#064E3B] font-display leading-tight mb-8">
                  Journey of<br /> Strength & Hope
                </h2>
              </Reveal>

              <Reveal delay={100}>
                <div className="relative mb-8">
                  <div className="text-[#D97706] text-6xl font-serif leading-none absolute -top-4 -left-6 opacity-30">"</div>
                  <p className="text-lg text-gray-700 relative z-10 leading-relaxed font-serif">
                    SG Foundation gave me the support I needed to believe in myself. Today, I am independent and following my dreams.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={200}>
                <div className="flex items-center gap-4">
                  <div className="w-1 h-12 bg-[#0F766E] rounded-full"></div>
                  <div>
                    <h4 className="font-bold text-[#064E3B]">— Aarav Sharma</h4>
                    <p className="text-sm text-[#0F766E] font-medium">Beneficiary</p>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Right Image */}
            <Reveal delay={200} className="relative h-full">
              <div className="relative w-full aspect-[4/3] z-10">
                {/* Curved Container Shape */}
                <div className="absolute inset-0 bg-white rounded-tl-[100px] rounded-br-[100px] shadow-lg p-3">
                  <ImgBox 
                    label="Beneficiary Story Image" 
                    className="w-full h-full rounded-tl-[90px] rounded-br-[90px] overflow-hidden" 
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
