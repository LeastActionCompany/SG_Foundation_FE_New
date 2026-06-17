import Reveal from "../Reveal";
import { Target, Eye, ArrowRight, CheckCircle2 } from "lucide-react";
import BeforeAfterSlider from "../BeforeAfterSlider";

const timelineEvents = [
  { year: "2021", title: "Foundation Established", text: "Started with a vision to serve local communities." },
  { year: "2023", title: "Expanded Healthcare", text: "Launched medical camps and preventive care programs." },
  { year: "2025", title: "1,000+ Lives Touched", text: "Achieved major milestones in education and welfare." },
];

export default function AboutSection() {
  return (
    <section id="about" className="relative overflow-hidden section">
      {/* Background decoration */}
      <div className="absolute right-0 top-0 h-[600px] w-[600px] rounded-full bg-primary/3 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-gold/5 blur-3xl" />

      <div className="relative mx-auto grid w-full max-w-7xl lg:items-start items-center gap-16 px-4 sm:px-6 lg:grid-cols-2 lg:gap-24 lg:px-8">
        {/* Left: Image composition */}
        <Reveal direction="left" className="relative">
          <div className="relative">
            <BeforeAfterSlider 
              beforeImage="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1000&q=80"
              afterImage="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1000&q=80"
            />

            {/* Floating card: mission years */}
            <div className="absolute -bottom-8 -right-6 glass rounded-2xl p-4 shadow-panel bg-white">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-white font-bold text-lg">
                  2
                </div>
                <div>
                  <div className="text-xs text-muted">Years of</div>
                  <div className="text-sm font-bold text-ink">Community Service</div>
                </div>
              </div>
            </div>

            {/* Floating card: volunteers */}
            <div className="absolute -left-6 top-8 glass rounded-2xl p-4 shadow-panel bg-white border border-primary/10">
              <div className="text-2xl font-bold text-primary">200+</div>
              <div className="mt-0.5 text-xs text-muted">Active Volunteers</div>
              <div className="mt-2 flex gap-1">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="h-6 w-6 rounded-full bg-gradient-to-br from-primary/60 to-primary border-2 border-white" style={{ marginLeft: i > 0 ? "-8px" : 0 }} />
                ))}
                <div className="h-6 w-6 rounded-full bg-gold/20 border-2 border-white flex items-center justify-center text-[8px] font-bold text-gold" style={{ marginLeft: "-8px" }}>+</div>
              </div>
            </div>

            {/* Decorative element */}
            <div className="absolute -bottom-4 -left-4 h-24 w-24 rounded-3xl border-2 border-gold/30 -z-10" />
            <div className="absolute -top-4 -right-4 h-32 w-32 rounded-full bg-primary/5 -z-10" />
          </div>
        </Reveal>

        {/* Right: Content */}
        <Reveal delay={150} direction="right">
          <div className="inline-flex items-center gap-2 mb-5">
            <span className="h-px w-8 bg-gold" />
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary">About SG Foundation</span>
          </div>

          <h2 className="font-display text-4xl font-bold leading-tight text-ink md:text-5xl">
            Care that responds today and{" "}
            <span className="relative inline-block">
              invests in tomorrow
              <span className="absolute bottom-1 left-0 h-[3px] w-full bg-gold/50 rounded-full" />
            </span>
            .
          </h2>

          <p className="mt-6 text-base leading-8 text-muted md:text-lg">
            SG Foundation works alongside underserved communities with a practical, people-first approach. We support children, women, families, and differently abled individuals through programs that combine compassion, protection, and long-term growth.
          </p>

          {/* Vertical Timeline */}
          <div className="mt-10 relative border-l-2 border-primary/20 pl-6 space-y-6">
            {timelineEvents.map((event, i) => (
              <Reveal key={event.year} delay={200 + i * 100} className="relative">
                <div className="absolute -left-[35px] top-1 h-5 w-5 rounded-full bg-white border-[3px] border-primary shadow-sm flex items-center justify-center">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                </div>
                <div>
                  <span className="text-xs font-bold tracking-widest text-gold">{event.year}</span>
                  <h4 className="text-sm font-bold text-ink mt-0.5">{event.title}</h4>
                  <p className="text-xs text-muted mt-1 leading-relaxed">{event.text}</p>
                </div>
              </Reveal>
            ))}
          </div>



          <Reveal delay={450}>
            <div className="mt-10">
              <a href="#services" className="btn-primary">
                Explore Our Programs
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>
          </Reveal>
        </Reveal>
      </div>

      {/* Premium Mission & Vision Row */}
      <div className="relative mx-auto mt-24 w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Mission Card */}
          <Reveal delay={200}>
            <div className="group relative h-full overflow-hidden rounded-[32px] border border-primary/15 bg-white/40 p-8 md:p-10 backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_30px_60px_rgba(40,60,129,0.12)]">
              {/* Glow Border Effect */}
              <div className="absolute -inset-px rounded-[32px] bg-gradient-to-br from-primary/50 to-gold/50 opacity-0 transition-opacity duration-500 group-hover:opacity-100 -z-10" />
              <div className="absolute inset-0 bg-white/90 backdrop-blur-sm -z-10" />
              
              <div className="mb-8 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 text-primary shadow-inner transition-transform duration-500 group-hover:-translate-y-2 group-hover:scale-110">
                <Target className="h-8 w-8" />
              </div>
              
              <h3 className="text-[32px] md:text-[36px] font-bold text-ink leading-tight">
                Our Mission
              </h3>
              
              <p className="mt-4 text-[16px] md:text-[18px] leading-relaxed text-muted">
                To empower underserved children, women, families, and differently abled individuals through <span className="font-semibold text-gold">education, healthcare, skill development</span>, community support, and sustainable opportunities. We strive to create meaningful change by addressing immediate needs while building pathways for long-term growth, dignity, and self-reliance.
              </p>
              
              <div className="mt-8 border-t border-primary/10 pt-6">
                <h4 className="text-sm font-bold uppercase tracking-widest text-primary mb-5">Key Focus Areas</h4>
                <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                  {[
                    "Education & Learning Support",
                    "Healthcare & Wellbeing",
                    "Women Empowerment",
                    "Skill Development & Employment",
                    "Community Welfare & Inclusion"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-ink/80 text-[15px] font-medium transition-transform duration-300 hover:translate-x-1">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 text-gold shrink-0" />
                      <span className="leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>

          {/* Vision Card */}
          <Reveal delay={300}>
            <div className="group relative h-full overflow-hidden rounded-[32px] border border-gold/30 bg-white/40 p-8 md:p-10 backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_30px_60px_rgba(232,168,56,0.15)]">
              {/* Glow Border Effect */}
              <div className="absolute -inset-px rounded-[32px] bg-gradient-to-br from-gold/50 to-primary/30 opacity-0 transition-opacity duration-500 group-hover:opacity-100 -z-10" />
              <div className="absolute inset-0 bg-white/90 backdrop-blur-sm -z-10" />
              
              <div className="mb-8 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-gold/20 to-gold/5 text-gold shadow-inner transition-transform duration-500 group-hover:-translate-y-2 group-hover:scale-110">
                <Eye className="h-8 w-8" />
              </div>
              
              <h3 className="text-[32px] md:text-[36px] font-bold text-ink leading-tight">
                Our Vision
              </h3>
              
              <p className="mt-4 text-[16px] md:text-[18px] leading-relaxed text-muted">
                To build an inclusive society where every individual, regardless of background or ability, has access to <span className="font-semibold text-primary">education, healthcare, opportunity</span>, and a life of dignity. We envision empowered communities that are self-sustaining, resilient, and equipped to create a better future for generations to come.
              </p>
              
              <div className="mt-8 border-t border-gold/20 pt-6">
                <h4 className="text-sm font-bold uppercase tracking-widest text-gold mb-5">Future Goals</h4>
                <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                  {[
                    "Equal Opportunities for All",
                    "Stronger Communities",
                    "Sustainable Social Impact",
                    "Inclusive Growth & Development",
                    "Better Quality of Life"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-ink/80 text-[15px] font-medium transition-transform duration-300 hover:translate-x-1">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 text-primary shrink-0" />
                      <span className="leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Quote Section */}
        <Reveal delay={400}>
          <div className="mx-auto mt-20 max-w-3xl text-center pb-8">
            <div className="inline-block relative">
              <span className="absolute -left-8 -top-8 text-7xl text-gold/20 font-serif leading-none">"</span>
              <p className="text-2xl md:text-3xl font-medium italic text-ink/90 leading-snug">
                Creating opportunities today <br className="hidden sm:block" />for a stronger tomorrow.
              </p>
              <span className="absolute -right-8 -bottom-12 text-7xl text-gold/20 font-serif leading-none">"</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
