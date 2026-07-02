import { Reveal, ImgBox } from "./shared";
import oneChild from "../../assest/education/onechild.png";

export default function StoryOfChange() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <div className="relative z-10">
            <Reveal delay={0}>
              <p className="text-[#D97706] font-bold text-xs tracking-widest uppercase mb-4">Story of Change</p>
              <h2 className="text-3xl md:text-5xl font-bold text-[#064E3B] font-display leading-tight mb-8">
                One Child. One Chance.<br /> A Lifetime of Change.
              </h2>
            </Reveal>

            <Reveal delay={100}>
              <div className="relative mb-8">
                <div className="text-[#D97706] text-6xl font-serif leading-none absolute -top-4 -left-6 opacity-20">"</div>
                <p className="text-lg md:text-xl text-gray-700 italic relative z-10 font-serif leading-relaxed">
                  With the support of SG Foundation, I was able to continue my education and dream bigger.
                </p>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className="flex items-center gap-4 border-l-4 border-[#064E3B] pl-4">
                <div>
                  <h4 className="font-bold text-[#064E3B]">— Priya</h4>
                  <p className="text-sm text-gray-500">Scholarship Beneficiary</p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Image Layout */}
          <Reveal delay={200} className="relative">
            <div className="relative w-full aspect-[4/3] z-10 p-6">
              {/* Decorative background shape */}
              <div className="absolute inset-0 bg-[#FAFAF9] rounded-[40px] transform rotate-3" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#064E3B] transform -translate-x-1/2 translate-y-1/2 clip-triangle" style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }} />
              <div className="absolute top-10 right-10 text-[#D97706]">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
              </div>

              <ImgBox 
                src={oneChild}
                alt="Student smiling with educational support"
                className="w-full h-full rounded-[32px] shadow-lg relative z-10" 
              />
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}
