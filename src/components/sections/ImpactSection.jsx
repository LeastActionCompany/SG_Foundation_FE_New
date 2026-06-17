import Reveal from "../Reveal";
import SectionHeader from "../SectionHeader";
import StatCounter from "../StatCounter";
import { stats } from "../../data/siteContent";

const statIcons = {
  // Children Supported — child figure with heart
  child: (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="5" r="2.5" fill="white" stroke="none"/>
      <path d="M8 22v-6l-2-4a2 2 0 0 1 1.8-2.9h8.4A2 2 0 0 1 18 12l-2 4v6" stroke="white"/>
      <path d="M9 22h6" />
      <path d="M10 13h4" />
      {/* Hands reaching up */}
      <path d="M8 14l-2.5-2" />
      <path d="M16 14l2.5-2" />
    </svg>
  ),
  // Meals Served — fork and knife on plate
  meal: (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="13" r="7" stroke="white"/>
      <path d="M8.5 7v3a2.5 2.5 0 0 0 5 0V7" />
      <path d="M11 7v9" />
      <path d="M15.5 7v13" />
    </svg>
  ),
  // Women Empowered — female figure with star/spark
  student: (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="7" r="3" />
      <path d="M12 10v4" />
      <path d="M9 21v-3a3 3 0 0 1 6 0v3" />
      <path d="M9 21h6" />
      {/* Female symbol circle bottom */}
      <path d="M18 3l-2 2m0 0l-2-2m2 2V2m0 3a3 3 0 1 1-3-3" stroke="white" strokeWidth="1.4"/>
      <path d="M19 2l1 1-1 1" strokeWidth="1.2"/>
    </svg>
  ),
  // Volunteers Engaged — group of three people
  community: (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      {/* Center person */}
      <circle cx="12" cy="6" r="2.5" />
      <path d="M8 21v-2a4 4 0 0 1 8 0v2" />
      {/* Left person */}
      <circle cx="5" cy="8" r="2" />
      <path d="M1 21v-1.5a3 3 0 0 1 6 0V21" />
      {/* Right person */}
      <circle cx="19" cy="8" r="2" />
      <path d="M17 21v-1.5a3 3 0 0 1 6 0V21" />
    </svg>
  ),
};


const hoverStories = [
  { quote: "I can finally go back to school.", author: "Priya, 10" },
  { quote: "The daily meals give me energy to study.", author: "Rahul, 12" },
  { quote: "I started my own small tailoring business.", author: "Lakshmi, 34" },
  { quote: "Volunteering here changed my perspective on life.", author: "Arjun, 22" },
];

const bgPatterns = [
  "from-blue-600 to-indigo-700",
  "from-emerald-500 to-teal-600",
  "from-violet-600 to-purple-700",
  "from-rose-500 to-pink-600",
];

export default function ImpactSection() {
  return (
    <section id="impact" className="relative overflow-hidden bg-ink section">
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

        {/* Interactive Map Wrapper (Background) */}
        <div className="absolute top-20 right-0 w-[600px] h-[600px] opacity-[0.15] pointer-events-none">
          <svg viewBox="0 0 100 100" className="w-full h-full text-gold fill-current">
            {/* Extremely simplified abstract map representation for stylistic purposes */}
            <path d="M40,10 Q50,5 60,15 T70,30 T65,50 T75,70 T60,90 T45,80 T35,60 T30,40 Z" />
          </svg>
          {/* Pulsing Dots */}
          <div className="absolute top-[30%] left-[45%] h-3 w-3 rounded-full bg-gold animate-ping" />
          <div className="absolute top-[50%] left-[60%] h-3 w-3 rounded-full bg-primary animate-ping" style={{ animationDelay: "0.5s" }} />
          <div className="absolute top-[70%] left-[55%] h-3 w-3 rounded-full bg-rose-500 animate-ping" style={{ animationDelay: "1s" }} />
        </div>

        <div className="mt-4 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat, index) => (
            <Reveal
              key={stat.label}
              delay={index * 100}
              className="group relative overflow-hidden rounded-[24px] border border-white/20 glass-dark p-8 text-center transition-all duration-500 hover:-translate-y-3 hover:border-white/40 hover:bg-white/10 hover:shadow-glow"
            >
              <div className={`absolute -top-8 left-1/2 h-32 w-32 -translate-x-1/2 rounded-full bg-gradient-to-br ${bgPatterns[index % bgPatterns.length]} opacity-30 blur-[40px] transition-all duration-500 group-hover:opacity-60`} />

              <div className={`relative mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br ${bgPatterns[index % bgPatterns.length]} shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                {statIcons[stat.icon] ?? statIcons.community}
              </div>

              <div className="relative z-0 transition-opacity duration-500 group-hover:opacity-0">
                <div className="text-5xl font-display font-bold tracking-tight text-white drop-shadow-sm">
                  <StatCounter value={stat.value} />
                  <span className="text-gold">+</span>
                </div>
                <p className="mt-4 text-xs font-bold uppercase tracking-[0.2em] text-white/70">{stat.label}</p>
                <div className="mx-auto mt-8 h-0.5 w-12 overflow-hidden rounded-full bg-white/10">
                  <div className="h-full w-0 bg-gold transition-all duration-700 ease-out group-hover:w-full" />
                </div>
              </div>

              {/* Hover-Reveal Story */}
              <div className="absolute inset-0 z-10 flex flex-col items-center justify-center p-6 text-center opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-ink/80 backdrop-blur-md rounded-[24px]">
                <p className="text-sm font-medium leading-relaxed text-white/90 italic">
                  "{hoverStories[index % hoverStories.length].quote}"
                </p>
                <span className="mt-4 text-xs text-gold font-bold uppercase tracking-widest">
                  - {hoverStories[index % hoverStories.length].author}
                </span>
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
