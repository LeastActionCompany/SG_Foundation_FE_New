import Icon from "../Icon";
import Reveal from "../Reveal";
import SectionHeader from "../SectionHeader";
import StatCounter from "../StatCounter";
import { stats } from "../../data/siteContent";

const bgPatterns = [
  "from-blue-600 to-indigo-700",
  "from-emerald-500 to-teal-600",
  "from-violet-600 to-purple-700",
  "from-rose-500 to-pink-600",
];

export default function ImpactSection() {
  return (
    <section id="impact" className="relative overflow-hidden bg-ink py-24 lg:py-32">
      <div className="absolute inset-0 noise-bg" />
      <div className="absolute top-0 left-0 h-96 w-96 rounded-full bg-primary/30 blur-[120px]" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-gold/10 blur-[120px]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          kicker="Our Impact"
          title="Lives transformed, numbers verified."
          description="Every statistic below is a testament to collective action and the resilience of the communities we serve."
          centered
          light
        />

        <div className="mt-4 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat, index) => (
            <Reveal
              key={stat.label}
              delay={index * 100}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-white/25 hover:bg-white/10 hover:shadow-[0_20px_60px_rgba(0,0,0,0.3)]"
            >
              <div className={`absolute -top-8 left-1/2 h-24 w-24 -translate-x-1/2 rounded-full bg-gradient-to-br ${bgPatterns[index % bgPatterns.length]} opacity-20 blur-2xl transition-opacity duration-500 group-hover:opacity-40`} />

              <div className={`relative mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${bgPatterns[index % bgPatterns.length]} shadow-lg`}>
                <Icon name={stat.icon} className="h-7 w-7 text-white" />
              </div>

              <div className="relative">
                <div className="text-5xl font-bold tracking-tight text-white">
                  <StatCounter value={stat.value} />
                  <span className="text-gold">+</span>
                </div>
                <p className="mt-3 text-xs font-bold uppercase tracking-[0.2em] text-white/50">{stat.label}</p>
              </div>

              <div className="mx-auto mt-6 h-0.5 w-16 overflow-hidden rounded-full bg-white/10">
                <div className="h-full w-0 bg-gold transition-all duration-1000 group-hover:w-full" />
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-16 overflow-hidden">
          <div className="flex animate-marquee gap-8 whitespace-nowrap">
            {[...Array(2)].map((_, ri) => (
              <div key={ri} className="flex shrink-0 gap-8">
                {["Education", "Healthcare", "Empowerment", "Community", "Children", "Women", "Skills", "Hope"].map((word) => (
                  <span key={word} className="font-display text-2xl font-bold uppercase tracking-wider text-white/10">
                    {word} <span className="text-gold/20">/</span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
