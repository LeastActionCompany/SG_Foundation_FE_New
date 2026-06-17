import { Reveal, Counter } from "./shared";
import { Users, BookOpen, MapPin, Star } from "lucide-react";

const stats = [
  { icon: Users, value: 25000, suffix: "+", label: "Lives Touched" },
  { icon: BookOpen, value: 150, suffix: "+", label: "Programs Supported" },
  { icon: MapPin, value: 250, suffix: "+", label: "Communities Reached" },
  { icon: Star, value: 12, suffix: "+", label: "Years of Service" },
];

export default function ImpactStatistics() {
  return (
    <section className="py-12 bg-[#FAFAF8] px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto relative bg-gradient-to-br from-[#0F6B4B] to-[#145A43] rounded-[40px] overflow-hidden shadow-2xl p-12 lg:p-16">
        
        {/* Background Decorative Pattern */}
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 80% 20%, rgba(216, 165, 49, 0.4) 0%, transparent 40%)" }} />

        <Reveal>
          <div className="text-center mb-12 relative z-10">
            <h2 className="text-3xl font-bold text-white font-display">Your Support, Our Impact</h2>
            <div className="w-16 h-1 bg-[#D8A531] mx-auto mt-4 rounded-full"></div>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 relative z-10">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <Reveal key={stat.label} delay={i * 100} className="flex flex-col items-center text-center">
                <div className={`mb-4 w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center border border-white/20 text-[#D8A531]`}>
                  <Icon className="w-6 h-6" strokeWidth={1.5} />
                </div>
                <div className="text-4xl lg:text-5xl font-bold text-white mb-2 font-display">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-sm font-medium text-white/80">
                  {stat.label}
                </p>
              </Reveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}
