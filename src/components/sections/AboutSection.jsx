import Reveal from "../Reveal";

const achievements = [
  { number: "2+", label: "Years of Impact" },
  { number: "1K+", label: "Lives Touched" },
  { number: "5+", label: "Programs Run" },
];

export default function AboutSection() {
  return (
    <section id="about" className="relative overflow-hidden py-24 lg:py-32">
      {/* Background decoration */}
      <div className="absolute right-0 top-0 h-[600px] w-[600px] rounded-full bg-primary/3 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-gold/5 blur-3xl" />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-16 px-4 sm:px-6 lg:grid-cols-2 lg:gap-24 lg:px-8">
        {/* Left: Image composition */}
        <Reveal direction="left" className="relative">
          <div className="relative">
            {/* Main image */}
            <div className="overflow-hidden rounded-3xl shadow-[0_30px_80px_rgba(40,60,129,0.2)]">
              <img
                src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1000&q=80"
                alt="Volunteers and children gathered together during a community support activity"
                className="h-[480px] w-full object-cover transition duration-700 hover:scale-105"
              />
            </div>

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

          {/* Achievement numbers */}
          <div className="mt-8 flex gap-8">
            {achievements.map((a, i) => (
              <Reveal key={a.label} delay={200 + i * 80}>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary md:text-3xl">{a.number}</div>
                  <div className="mt-1 text-xs text-muted">{a.label}</div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Mission & Vision */}
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            <Reveal delay={300}>
              <div className="group relative overflow-hidden rounded-2xl border border-primary/10 bg-gradient-to-br from-primary/5 to-transparent p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-soft">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-white">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                </div>
                <h3 className="font-display text-lg font-bold text-ink">Mission</h3>
                <p className="mt-2 text-sm leading-7 text-muted">
                  Empower underprivileged communities through education and care.
                </p>
                <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-primary transition-all duration-500 group-hover:w-full" />
              </div>
            </Reveal>

            <Reveal delay={380}>
              <div className="group relative overflow-hidden rounded-2xl border border-gold/20 bg-gradient-to-br from-gold/5 to-transparent p-6 transition-all duration-300 hover:border-gold/40 hover:shadow-[0_10px_30px_rgba(232,168,56,0.15)]">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-gold text-white">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                </div>
                <h3 className="font-display text-lg font-bold text-ink">Vision</h3>
                <p className="mt-2 text-sm leading-7 text-muted">
                  A world where everyone has equal opportunity.
                </p>
                <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gold transition-all duration-500 group-hover:w-full" />
              </div>
            </Reveal>
          </div>

          <Reveal delay={450}>
            <a
              href="#services"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-white shadow-soft transition-all duration-300 hover:scale-105 hover:shadow-glow"
            >
              Explore Our Programs
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </a>
          </Reveal>
        </Reveal>
      </div>
    </section>
  );
}
