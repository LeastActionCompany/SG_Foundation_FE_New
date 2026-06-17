import { Reveal, ImgBox, Counter } from "./shared";
import { Users, BookOpen, Building, Briefcase } from "lucide-react";

const stats = [
  { icon: Users, value: 10000, suffix: "+", label: "Learners Trained" },
  { icon: BookOpen, value: 500, suffix: "+", label: "Training Batches" },
  { icon: Building, value: 150, suffix: "+", label: "Partner Institutes" },
  { icon: Briefcase, value: 85, suffix: "%", label: "Placement Support" },
];

export default function ImpactSection() {
  return (
    <section className="py-12 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex flex-col lg:flex-row rounded-[40px] overflow-hidden shadow-2xl">
          
          {/* Left Navy Panel */}
          <div className="lg:w-1/2 bg-[#0F172A] text-white p-10 lg:p-16 flex flex-col justify-center relative z-10">
            {/* Slanted divider overlay for Desktop */}
            <div 
              className="hidden lg:block absolute top-0 bottom-0 -right-16 w-32 bg-[#0F172A] origin-bottom-left transform skew-x-[15deg] z-10 border-r-8 border-[#F59E0B]/80"
            />
            
            <Reveal className="relative z-20">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display">
                Creating Impact Through Skills
              </h2>
              <div className="w-16 h-1 bg-[#F59E0B] rounded-full mb-12"></div>
            </Reveal>

            <div className="grid grid-cols-2 gap-x-8 gap-y-12 relative z-20">
              {stats.map((stat, i) => {
                const Icon = stat.icon;
                return (
                  <Reveal key={stat.label} delay={i * 100}>
                    <div className="flex flex-col items-start">
                      <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center mb-4 text-white/80 bg-white/5">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className="text-3xl lg:text-4xl font-bold text-white mb-1">
                        <Counter value={stat.value} suffix={stat.suffix} />
                      </div>
                      <p className="text-sm font-medium text-white/60">
                        {stat.label}
                      </p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>

          {/* Right Image Area */}
          <div className="lg:w-1/2 relative min-h-[400px] lg:min-h-auto z-0">
            <ImgBox 
              label="Impact Background Image (skill-impact.jpg)" 
              className="absolute inset-0 w-full h-full" 
            />
            {/* Decorative dot pattern over image */}
            <div 
              className="absolute top-8 right-8 w-24 h-24 opacity-40 mix-blend-overlay"
              style={{
                backgroundImage: "radial-gradient(white 2px, transparent 2px)",
                backgroundSize: "12px 12px",
              }}
            />
          </div>

        </div>
      </div>
    </section>
  );
}
