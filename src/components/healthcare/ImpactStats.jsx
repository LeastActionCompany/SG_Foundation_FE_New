import { Reveal, Counter } from "./shared";
import { Users, Calendar, MapPin, Heart } from "lucide-react";

const stats = [
  { icon: Users, value: 25000, suffix: "+", label: "Patients Treated" },
  { icon: Calendar, value: 150, suffix: "+", label: "Health Camps" },
  { icon: MapPin, value: 50, suffix: "+", label: "Villages Reached" },
  { icon: Heart, value: 10, suffix: "+", label: "Years of Service" },
];

export default function ImpactStats() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-[#0A2342] rounded-[32px] overflow-hidden shadow-2xl p-10 lg:p-16 flex flex-col lg:flex-row items-center justify-between">
          
          {/* Decorative faint cross */}
          <div className="absolute right-10 top-1/2 -translate-y-1/2 text-white/5 opacity-50 pointer-events-none">
            <svg width="200" height="200" viewBox="0 0 24 24" fill="currentColor"><path d="M19 10h-5V5h-4v5H5v4h5v5h4v-5h5v-4z"/></svg>
          </div>
          
          <div className="lg:w-1/3 mb-10 lg:mb-0 text-center lg:text-left z-10">
            <Reveal>
              <h2 className="text-3xl md:text-4xl font-bold text-white font-display leading-tight">
                Our Impact <br />
                <span className="text-[#0F9D94]">in Numbers</span>
              </h2>
            </Reveal>
          </div>

          <div className="lg:w-2/3 grid grid-cols-2 md:grid-cols-4 gap-8 z-10 w-full">
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <Reveal key={stat.label} delay={i * 100} className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 flex items-center justify-center text-[#0F9D94] mb-3">
                    <Icon className="w-10 h-10 stroke-[1.5]" />
                  </div>
                  <div className="text-3xl lg:text-4xl font-bold text-white mb-1">
                    <Counter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <p className="text-xs font-medium text-white/70 uppercase tracking-wider">
                    {stat.label}
                  </p>
                </Reveal>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
