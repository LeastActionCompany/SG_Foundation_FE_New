import { Reveal, ImgBox } from "./shared";

export default function StoryOfHope() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <div className="relative z-10">
            <Reveal delay={0}>
              <h2 className="text-3xl md:text-5xl font-bold text-[#4C1D95] font-display leading-tight mb-8">
                Story of Hope
              </h2>
            </Reveal>

            <Reveal delay={100}>
              <div className="relative mb-8 bg-[#FFF5F8] p-8 rounded-3xl border border-pink-100 shadow-sm">
                <div className="text-pink-300 text-6xl font-serif leading-none absolute top-4 left-4 opacity-50">"</div>
                <p className="text-lg text-gray-700 relative z-10 leading-relaxed font-serif pt-4">
                  With the support of SG Foundation, I gained confidence, learned new skills, became financially independent, and can now support my family and educate my children.
                </p>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className="flex items-center gap-4 border-l-4 border-[#BE185D] pl-4">
                <div>
                  <h4 className="font-bold text-[#4C1D95]">— Sunita Devi</h4>
                  <p className="text-sm text-pink-600 font-medium">Beneficiary</p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Image Layout */}
          <Reveal delay={200} className="relative">
            <div className="relative w-full aspect-square max-w-md mx-auto z-10">
              <div className="absolute inset-0 border-2 border-dashed border-pink-200 rounded-full animate-spin-slow"></div>
              <div className="absolute inset-4">
                 <ImgBox 
                   label="Beneficiary Success Story Image" 
                   className="w-full h-full rounded-full shadow-xl overflow-hidden" 
                 />
              </div>
              
              {/* Decorative hearts */}
              <div className="absolute bottom-10 -left-6 text-pink-400 transform -rotate-12">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
              </div>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}
