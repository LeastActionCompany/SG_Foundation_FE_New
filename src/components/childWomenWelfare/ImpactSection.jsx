import { Reveal, Counter } from "./shared";
import { Baby, Users, Shield, MapPin } from "lucide-react";

const stats = [
  { icon: Baby, value: 25000, suffix: "+", label: "Children Supported", color: "text-pink-400" },
  { icon: Users, value: 15000, suffix: "+", label: "Women Empowered", color: "text-orange-400" },
  { icon: Shield, value: 120, suffix: "+", label: "Safe Spaces", color: "text-emerald-400" },
  { icon: MapPin, value: 50, suffix: "+", label: "Communities Reached", color: "text-blue-400" },
];

export default function ImpactSection() {
  return (
    <section className="py-12 bg-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto relative bg-gradient-to-r from-[#2E1065] to-[#4C1D95] rounded-[40px] overflow-hidden shadow-2xl p-12 lg:p-16">
        
        {/* Background Decorative Pattern */}
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 20% 50%, rgba(255, 255, 255, 0.4) 0%, transparent 50%)" }} />

        <Reveal>
          <div className="text-center mb-12 relative z-10">
            <h2 className="text-3xl font-bold text-white font-display">Our Impact Together</h2>
            <div className="w-16 h-1 bg-pink-400 mx-auto mt-4 rounded-full"></div>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 relative z-10">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <Reveal key={stat.label} delay={i * 100} className="flex flex-col items-center text-center">
                <div className={`mb-4 ${stat.color}`}>
                  <Icon className="w-10 h-10" strokeWidth={1.5} />
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
