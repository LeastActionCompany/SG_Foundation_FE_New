import { Reveal, Counter } from "./shared";
import { Users, Home, Activity, Star } from "lucide-react";

const stats = [
  { icon: Users, value: 10000, suffix: "+", label: "Individuals Supported" },
  { icon: Home, value: 25, suffix: "+", label: "Care Centers" },
  { icon: Activity, value: 120, suffix: "+", label: "Therapists & Experts" },
  { icon: Star, value: 15, suffix: "+", label: "Years of Service" },
];

export default function ImpactSection() {
  return (
    <section className="py-12 bg-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto relative bg-[#064E3B] rounded-[40px] overflow-hidden shadow-2xl p-12 lg:p-16 flex flex-col lg:flex-row items-center gap-12">
        
        {/* Background Decorative Outline */}
        <div className="absolute inset-0 opacity-5 pointer-events-none flex justify-center items-center">
          <Activity className="w-[40rem] h-[40rem] text-white" />
        </div>

        <div className="lg:w-1/3 text-center lg:text-left z-10 border-b lg:border-b-0 lg:border-r border-white/20 pb-8 lg:pb-0 lg:pr-8">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-bold text-white font-display leading-tight mb-4">
              Our Impact<br className="hidden lg:block" /> at a Glance
            </h2>
            <div className="w-12 h-1 bg-[#0F766E] mx-auto lg:mx-0 rounded-full"></div>
          </Reveal>
        </div>

        <div className="lg:w-2/3 grid grid-cols-2 md:grid-cols-4 gap-6 w-full z-10">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <Reveal key={stat.label} delay={i * 100} className="flex flex-col items-center text-center">
                <div className={`w-14 h-14 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-[#0F766E] mb-4`}>
                  <Icon className="w-6 h-6" />
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-white mb-2 font-display">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-[11px] font-medium text-white/80 uppercase tracking-wider">
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
