import { Reveal, Counter } from "./shared";
import { Users, School, Book, Star } from "lucide-react";

const stats = [
  { icon: Users, value: 15000, suffix: "+", label: "Children Supported", color: "text-[#D97706]" },
  { icon: School, value: 200, suffix: "+", label: "Schools Partnered", color: "text-[#FCD34D]" },
  { icon: Book, value: 50000, suffix: "+", label: "Books Distributed", color: "text-[#F87171]" },
  { icon: Star, value: 12, suffix: "+", label: "Years of Impact", color: "text-[#34D399]" },
];

export default function ImpactNumbers() {
  return (
    <section className="py-12 bg-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto relative bg-[#064E3B] rounded-[40px] overflow-hidden shadow-2xl p-12 lg:p-16">
        
        {/* Background Decorative Outline Icons */}
        <div className="absolute inset-0 opacity-5 pointer-events-none flex justify-between items-center px-10">
          <Book className="w-48 h-48 text-white transform -rotate-12" />
          <School className="w-64 h-64 text-white transform rotate-12" />
        </div>

        <Reveal>
          <div className="text-center mb-12 relative z-10">
            <p className="text-white/60 font-bold text-xs tracking-widest uppercase mb-2">Our Impact So Far</p>
            <div className="w-12 h-1 bg-[#D97706] mx-auto mt-2 rounded-full"></div>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-12 relative z-10">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <Reveal key={stat.label} delay={i * 100} className="flex flex-col items-center text-center">
                <div className={`w-14 h-14 rounded-full border border-white/10 bg-white/5 flex items-center justify-center ${stat.color} mb-5`}>
                  <Icon className="w-6 h-6" />
                </div>
                <div className="text-3xl lg:text-5xl font-bold text-white mb-2 font-display">
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
