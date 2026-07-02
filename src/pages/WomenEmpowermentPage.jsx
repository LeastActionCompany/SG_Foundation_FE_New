import { useEffect, useRef, useState } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { navigateTo } from "../utils/navigation";
import logo from "../assest/logo.jpeg";
import women_empower from "../assest/women_empower.png";

import CommunitySupportNetwork from "../assest/CommunitySupportNetwork.png";
import Education from "../assest/EducationLiteracy.png";
import Financial from "../assest/FinancialIndependence.png";
import Health from "../assest/Health-Wellness-about.png";
import Leadership from "../assest/LeadershipAdvocacy.png";
import vocational from "../assest/vocationaltraining.png";

import weFeaturedStory from "../assest/we_featured_story.jpg";



/* ─── Placeholder image component ─── */
function ImgPlaceholder({ name, className = "", style = {} }) {
  return (
    <div
      className={`flex flex-col items-center justify-center bg-gradient-to-br from-[#f0e6ff] to-[#ffe4ef] text-[#b06090] ${className}`}
      style={style}
    >
      <svg className="mb-2 opacity-40" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="3" width="18" height="18" rx="3" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <path d="M21 15l-5-5L5 21" />
      </svg>
      <span className="text-xs font-semibold opacity-50 text-center px-2">{name}</span>
    </div>
  );
}

/* ─── Animated counter ─── */
function Counter({ value, suffix = "", duration = 2000 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = value / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= value) { setCount(value); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [inView, value, duration]);

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
}

/* ─── Reveal on scroll ─── */
function Reveal({ children, delay = 0, direction = "up", className = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const variants = {
    hidden: { opacity: 0, y: direction === "up" ? 32 : direction === "down" ? -32 : 0, x: direction === "left" ? 32 : direction === "right" ? -32 : 0 },
    visible: { opacity: 1, y: 0, x: 0 },
  };
  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: delay / 1000 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─── Focus areas data ─── */
const focusAreas = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
        <path d="M12 6v6l4 2" strokeLinecap="round" />
      </svg>
    ),
    title: "Vocational Training",
    description: "Hands-on skill programs in tailoring, handicrafts, beauty, catering, and digital literacy — building marketable expertise.",
    color: "#C2185B",
    bg: "#fce4ec",
    image: vocational,
    imageName: "Skill Training Photo",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "Leadership & Advocacy",
    description: "Training women to lead in their communities, speak up for rights, and take on decision-making roles with confidence.",
    color: "#7B1FA2",
    bg: "#f3e5f5",
    image: Leadership,
    imageName: "Leadership Workshop Photo",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "Financial Independence",
    description: "Micro-finance, savings literacy, and self-help group programs enabling women to manage income and build assets.",
    color: "#00796B",
    bg: "#e0f2f1",
    image: Financial,
    imageName: "Financial Independence Photo",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 20h9" strokeLinecap="round" />
        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    ),
    title: "Health & Wellness",
    description: "Awareness programs on maternal health, nutrition, hygiene, mental wellbeing, and access to healthcare services.",
    color: "#E64A19",
    bg: "#fbe9e7",
    image: Health,
    imageName: "Health & Wellness Photo",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c3 3 9 3 12 0v-5" />
      </svg>
    ),
    title: "Education & Literacy",
    description: "Bridging the gender gap in education through literacy classes, scholarships, and re-enrollment support for women.",
    color: "#1565C0",
    bg: "#e3f2fd",
    image: Education,
    imageName: "Education Photo",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    title: "Community Support Network",
    description: "Peer networks, mentorship circles, and safe spaces where women connect, share experiences, and uplift each other.",
    color: "#F57F17",
    bg: "#fff8e1",
    image: CommunitySupportNetwork,
    imageName: "Community Network Photo",
  },
];

/* ─── Impact stats ─── */
const impactStats = [
  { value: 150, suffix: "+", label: "Women Empowered", icon: "♀" },
  { value: 12, suffix: "+", label: "Active Programs", icon: "◈" },
  { value: 8, suffix: "+", label: "Partner Villages", icon: "◉" },
  { value: 95, suffix: "%", label: "Program Completion Rate", icon: "★" },
];

/* ─── Story milestones ─── */
const milestones = [
  { year: "2020", title: "The Beginning", desc: "Started with 12 women in Vellore, running basic skills training from a single room." },
  { year: "2021", title: "Community Roots", desc: "Formed 4 self-help groups and launched micro-lending pilot for first-time entrepreneurs." },
  { year: "2022", title: "Scaling Impact", desc: "Expanded to 5 villages, introduced digital literacy and maternal health awareness programs." },
  { year: "2023", title: "Recognition & Growth", desc: "150+ women trained; partnerships formed with local government bodies and NGO networks." },
  { year: "2024", title: "Future Forward", desc: "Launching mentorship-to-employment pipeline and a dedicated women's resource center." },
];

/* ─── Testimonials ─── */
const testimonials = [
  {
    quote: "Before this program, I had no confidence. Today, I run my own tailoring business and support my children's education. SG Foundation changed my life.",
    name: "Meenakshi R.",
    role: "Vocational Training Graduate, 2022",
    initial: "M",
    color: "#C2185B",
  },
  {
    quote: "The self-help group taught me to save and invest. For the first time in my life, I have my own bank account and a small business.",
    name: "Kavitha S.",
    role: "Financial Empowerment Program, 2023",
    initial: "K",
    color: "#7B1FA2",
  },
  {
    quote: "I never imagined I would speak in front of a village panchayat. The leadership program gave me the voice I never knew I had.",
    name: "Priya L.",
    role: "Leadership & Advocacy Program, 2023",
    initial: "P",
    color: "#00796B",
  },
];

/* ══════════════════════════════════════════════════════════════ */
export default function WomenEmpowermentPage() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setActiveTestimonial((p) => (p + 1) % testimonials.length), 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">

      {/* ── NAV BAR ── */}
     <nav className="fixed top-0 left-0 right-0 z-50 border-b border-pink-50 bg-white/95 backdrop-blur-xl shadow-sm transition-all">
  <div className="mx-auto flex max-w-7xl items-center justify-between px-3 py-3 sm:px-6 lg:px-8">

    {/* Logo */}
    <button
      onClick={() => navigateTo("/")}
      className="flex items-center gap-2 sm:gap-3"
    >
      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center overflow-hidden rounded-full bg-white p-1 shadow-sm ring-2 ring-[#9D174D]/10 transition-all group-hover:ring-[#9D174D]/30">
        <img
          src={logo}
          alt="SG Foundation"
          className="h-full w-full object-contain"
        />
      </div>

      <div className="leading-tight text-left">
        <p className="whitespace-nowrap text-xs font-bold text-[#4C1D95] sm:text-sm">
          SG Foundation
        </p>
        <p className="hidden text-[10px] font-semibold uppercase tracking-widest text-[#9D174D] sm:block">
          Spread Goodness
        </p>
      </div>
    </button>

    {/* Right Side */}
    <div className="flex items-center gap-2 sm:gap-4">

      {/* Home Button - Desktop Only */}
      <button
        onClick={() => navigateTo("/")}
        className="hidden md:flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-semibold text-gray-600 transition hover:bg-gray-50 hover:text-[#9D174D]"
      >
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
        >
          <path
            d="M19 12H5M12 5l-7 7 7 7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        Home
      </button>

      {/* CTA Button */}
      <a
        href="#cww-cta"
        className="whitespace-nowrap rounded-full bg-[#9D174D] px-3 py-2 text-xs font-bold text-white shadow-md transition-all hover:-translate-y-0.5 hover:bg-[#831843] hover:shadow-lg sm:px-6 sm:py-2.5 sm:text-sm"
      >
        Get Involved
      </a>

    </div>
  </div>
</nav>

      {/* ── HERO ── */}
      <section ref={heroRef} className="relative min-h-[100svh] flex items-center overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a0a14] via-[#2d1128] to-[#0d1a2d]" />

        {/* Decorative circles */}
        <div className="absolute -top-40 -right-40 h-[600px] w-[600px] rounded-full bg-[#C2185B]/20 blur-[120px]" />
        <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-[#7B1FA2]/15 blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[800px] w-[800px] rounded-full bg-[#E91E63]/5 blur-[160px]" />

        {/* Noise texture */}
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E\")", backgroundRepeat: "repeat", backgroundSize: "200px" }}
        />

        {/* Hero image placeholder — replace with your actual hero image */}
        <motion.div
          style={{ y: heroY, opacity: heroOpacity ,backgroundImage: `url(${women_empower})`}}
          className="absolute inset-0 z-0"
        >
          <div className="absolute right-0 top-0 bottom-0 w-full lg:w-[55%] overflow-hidden">
            {/* 
              REPLACE THIS with:
              <img src={YOUR_HERO_IMAGE} alt="Women Empowerment" className="h-full w-full object-cover opacity-30" />
            */}
           
          </div>
        </motion.div>

        {/* Hero content */}
        <motion.div
          style={{ opacity: heroOpacity }}
          className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-20 "
        >
          <div className="max-w-3xl">
            <Reveal delay={0}>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-rose-400/30 bg-rose-500/10 px-4 py-1.5 backdrop-blur-sm">
                <span className="h-2 w-2 rounded-full bg-rose-400 animate-pulse" />
                <span className="text-sm font-semibold text-rose-300 uppercase tracking-widest">SG Foundation Initiative</span>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <h1 className="font-display font-bold text-[44px] leading-[1.08] tracking-tight text-white md:text-[64px] lg:text-[76px]">
                Empowering Women,{" "}
                <span style={{ background: "linear-gradient(135deg, #f48fb1, #E91E63, #AD1457)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                  Transforming Lives
                </span>
              </h1>
            </Reveal>

            <Reveal delay={200}>
              <p className="mt-6 text-lg leading-relaxed text-white/65 md:text-xl max-w-2xl">
                Every woman deserves the right to lead, learn, and thrive. Through education, skill-building, healthcare, and community, we walk alongside women as they build dignified, independent futures.
              </p>
            </Reveal>

            <Reveal delay={320}>
              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#we-get-involved"
                  className="inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-[#E91E63] to-[#880E4F] px-8 py-4 text-base font-bold text-white shadow-[0_8px_32px_rgba(233,30,99,0.4)] transition-all hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(233,30,99,0.5)]"
                >
                  Get Involved
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
                <a
                  href="#we-impact"
                  className="inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white/10 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all hover:-translate-y-1 hover:bg-white/15"
                >
                  See Our Impact
                </a>
              </div>
            </Reveal>

            {/* Quick stats row */}
            <Reveal delay={440}>
              <div className="mt-14 flex flex-wrap gap-8">
                {impactStats.slice(0, 3).map((s) => (
                  <div key={s.label} className="flex flex-col">
                    <span className="text-3xl font-bold text-white">
                      <Counter value={s.value} suffix={s.suffix} />
                    </span>
                    <span className="mt-0.5 text-xs font-medium text-white/50 uppercase tracking-widest">{s.label}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/40">
          <span className="text-[10px] uppercase tracking-widest">Scroll</span>
          <div className="h-8 w-px bg-gradient-to-b from-white/30 to-transparent animate-pulse" />
        </div>
      </section>

      {/* ── MISSION STATEMENT BANNER ── */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#fce4ec] via-[#f8bbd0] to-[#fce4ec] py-12">
        <div className="absolute inset-0 opacity-5"
          style={{ backgroundImage: "repeating-linear-gradient(45deg, #C2185B 0px, #C2185B 1px, transparent 1px, transparent 12px)" }}
        />
        <Reveal>
          <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
            <p className="text-xl font-display font-semibold leading-relaxed text-[#880E4F] md:text-2xl lg:text-3xl">
              "When a woman is empowered, an entire family rises. When a family rises, a community transforms."
            </p>
            <p className="mt-3 text-sm font-medium text-[#C2185B]/70 uppercase tracking-widest">— SG Foundation Philosophy</p>
          </div>
        </Reveal>
      </section>

      {/* ── IMPACT STATS ── */}
      <section id="we-impact" className="section bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-12">
              <span className="inline-block rounded-full bg-rose-50 px-4 py-1 text-xs font-bold uppercase tracking-widest text-rose-500 mb-4">Our Impact</span>
              <h2 className="font-display font-bold text-[32px] text-[#16203b] md:text-[44px]">Numbers That Tell a Story</h2>
              <p className="mt-3 text-base text-gray-500 max-w-xl mx-auto">Every number represents a life touched, a barrier broken, a future built.</p>
            </div>
          </Reveal>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:gap-8">
            {impactStats.map((stat, i) => (
              <Reveal key={stat.label} delay={i * 80}>
                <div className="group relative overflow-hidden rounded-2xl border border-rose-100 bg-gradient-to-br from-white to-rose-50/50 p-6 text-center shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(194,24,91,0.12)]">
                  <div className="mb-3 text-3xl text-rose-400">{stat.icon}</div>
                  <div className="text-4xl font-bold text-[#16203b] md:text-5xl">
                    <Counter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <p className="mt-2 text-xs font-semibold uppercase tracking-widest text-gray-500">{stat.label}</p>
                  <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-gradient-to-r from-[#E91E63] to-[#C2185B] transition-all duration-500 group-hover:w-full" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOCUS AREAS ── */}
      <section className="section bg-[#fafafa]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-14">
              <span className="inline-block rounded-full bg-purple-50 px-4 py-1 text-xs font-bold uppercase tracking-widest text-purple-500 mb-4">What We Do</span>
              <h2 className="font-display font-bold text-[32px] text-[#16203b] md:text-[44px]">Programs Built Around Women</h2>
              <p className="mt-3 text-base text-gray-500 max-w-2xl mx-auto">Holistic, community-rooted programs addressing the full spectrum of challenges women face.</p>
            </div>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {focusAreas.map((area, i) => (
              <Reveal key={area.title} delay={i * 80}>
                <div
                  className="group relative flex flex-col overflow-hidden rounded-2xl bg-white border border-gray-100 shadow-sm transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_20px_48px_rgba(0,0,0,0.10)]"
                >
                  {/* Image placeholder */}
                  <div className="relative h-48 w-full overflow-hidden flex-shrink-0">
                    {/* REPLACE with: <img src={import(`../assest/women-empowerment/${area.image}`)} ... /> */}
                    <img
  src={area.image}
  alt={area.title}
  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
/>
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{ background: `linear-gradient(to top, ${area.color}33, transparent)` }}
                    />
                  </div>

                  <div className="flex flex-col flex-1 p-6">
                    {/* Icon + title */}
                    <div className="flex items-start gap-4 mb-3">
                      <div
                        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110"
                        style={{ background: area.bg, color: area.color }}
                      >
                        {area.icon}
                      </div>
                      <h3 className="text-lg font-bold text-[#16203b] leading-snug pt-1">{area.title}</h3>
                    </div>

                    <p className="text-sm leading-relaxed text-gray-500 flex-1">{area.description}</p>

                    <div
                      className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold transition-all duration-300 group-hover:gap-2.5"
                      style={{ color: area.color }}
                    >
                      Learn More
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>

                  <div
                    className="h-[3px] w-0 transition-all duration-500 group-hover:w-full"
                    style={{ background: `linear-gradient(to right, ${area.color}, ${area.color}88)` }}
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── JOURNEY / TIMELINE ── */}
      <section className="section relative overflow-hidden bg-gradient-to-b from-[#1a0a14] to-[#0d1a2d]">
        <div className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E\")", backgroundRepeat: "repeat", backgroundSize: "200px" }}
        />
        <div className="absolute -top-32 right-0 h-64 w-64 rounded-full bg-[#C2185B]/20 blur-[100px]" />
        <div className="absolute -bottom-32 left-0 h-64 w-64 rounded-full bg-[#7B1FA2]/15 blur-[100px]" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-14">
              <span className="inline-block rounded-full border border-rose-400/30 bg-rose-500/10 px-4 py-1 text-xs font-bold uppercase tracking-widest text-rose-300 mb-4">Our Journey</span>
              <h2 className="font-display font-bold text-[32px] text-white md:text-[44px]">From a Seed to a Movement</h2>
              <p className="mt-3 text-base text-white/50 max-w-xl mx-auto">A story of persistence, hope, and community — told year by year.</p>
            </div>
          </Reveal>

          <div className="relative mt-10">
            {/* Center line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-gradient-to-b from-[#C2185B]/60 via-[#E91E63]/30 to-transparent hidden md:block" />

            <div className="flex flex-col gap-10">
              {milestones.map((m, i) => (
                <Reveal key={m.year} delay={i * 100}>
                  <div className={`relative flex flex-col gap-6 md:flex-row md:items-center ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                    {/* Content card */}
                    <div className="flex-1 md:max-w-[calc(50%-40px)]">
                      <div className={`rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-500 hover:bg-white/8 hover:border-rose-400/30 ${i % 2 === 0 ? "md:ml-auto" : "md:mr-auto"}`}>
                        <span className="text-xs font-bold uppercase tracking-widest text-rose-400">{m.year}</span>
                        <h3 className="mt-1 text-lg font-bold text-white">{m.title}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-white/55">{m.desc}</p>
                      </div>
                    </div>

                    {/* Center dot */}
                    <div className="hidden md:flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#E91E63] to-[#880E4F] shadow-[0_0_20px_rgba(233,30,99,0.4)] z-10">
                      <span className="text-xs font-bold text-white">{i + 1}</span>
                    </div>

                    {/* Empty spacer */}
                    <div className="flex-1 hidden md:block" />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURED STORY ── */}
      <section className="section bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

            {/* Image placeholder */}
            <Reveal direction="right">
              <div className="relative">
                <div className="overflow-hidden rounded-3xl aspect-[4/3]">
                 <div className="w-full h-full min-h-[320px] overflow-hidden rounded-3xl">
  <img
    src={weFeaturedStory}
    alt="Featured Story"
    className="w-full h-full object-cover"
  />
</div>
                </div>
                {/* Floating accent card */}
                <div className="absolute -bottom-6 -right-4 rounded-2xl bg-gradient-to-br from-[#E91E63] to-[#880E4F] px-6 py-4 shadow-xl">
                  <p className="text-2xl font-bold text-white">5+</p>
                  <p className="text-xs text-white/80 font-semibold uppercase tracking-wider">Years of Impact</p>
                </div>
                {/* Decorative ring */}
                <div className="absolute -top-4 -left-4 h-20 w-20 rounded-full border-2 border-dashed border-rose-200 animate-spin-slow" style={{ animationDuration: "15s" }} />
              </div>
            </Reveal>

            {/* Content */}
            <Reveal direction="left">
              <div className="lg:pl-6">
                <span className="inline-block rounded-full bg-rose-50 px-4 py-1 text-xs font-bold uppercase tracking-widest text-rose-500 mb-5">Featured Story</span>
                <h2 className="font-display font-bold text-[30px] text-[#16203b] leading-tight md:text-[38px]">
                  How One Program Changed a Village
                </h2>
                <p className="mt-5 text-base leading-relaxed text-gray-500">
                  In the village of Kagithapattarai, a group of 20 women gathered in 2021 with one shared dream — financial independence. Through SG Foundation's vocational training and micro-lending program, each of them launched small businesses ranging from catering to handicrafts.
                </p>
                <p className="mt-4 text-base leading-relaxed text-gray-500">
                  Today, these women collectively earn over ₹2 lakhs per month, fund their children's education, and serve as mentors to the next generation of trainees.
                </p>

                <div className="mt-8 grid grid-cols-2 gap-4">
                  {[
                    { label: "Women in this cohort", value: "20" },
                    { label: "Monthly collective income", value: "₹2L+" },
                    { label: "Children in school", value: "38" },
                    { label: "New businesses launched", value: "14" },
                  ].map((item) => (
                    <div key={item.label} className="rounded-xl border border-gray-100 bg-gray-50 p-4">
                      <p className="text-2xl font-bold text-[#C2185B]">{item.value}</p>
                      <p className="text-xs text-gray-500 mt-0.5 font-medium">{item.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="section bg-gradient-to-br from-[#fce4ec] to-[#f3e5f5]">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-12">
              <span className="inline-block rounded-full bg-rose-100 px-4 py-1 text-xs font-bold uppercase tracking-widest text-rose-600 mb-4">Voices of Change</span>
              <h2 className="font-display font-bold text-[32px] text-[#16203b] md:text-[44px]">Women Who Found Their Strength</h2>
            </div>
          </Reveal>

          <div className="relative overflow-hidden rounded-3xl bg-white shadow-xl min-h-[500px] sm:min-h-[450px] md:min-h-[360px]">
  {testimonials.map((t, i) => (
    <motion.div
      key={t.name}
      initial={false}
      animate={{
        opacity: i === activeTestimonial ? 1 : 0,
        x: i === activeTestimonial ? 0 : 30,
      }}
      transition={{
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="absolute inset-0 flex flex-col justify-center p-6 sm:p-8 md:p-14"
      style={{
        pointerEvents: i === activeTestimonial ? "auto" : "none",
      }}
    >
      <svg
        className="mb-6 text-rose-200"
        width="40"
        height="32"
        viewBox="0 0 40 32"
        fill="currentColor"
      >
        <path d="M0 32V19.2C0 8.533 6.4 2.133 19.2 0l2.4 4C14.4 5.6 10.667 9.067 10 14.4H18V32H0zm22 0V19.2C22 8.533 28.4 2.133 41.2 0l2.4 4C36.4 5.6 32.667 9.067 32 14.4H40V32H22z" />
      </svg>

      <p className="text-base sm:text-lg md:text-xl leading-relaxed font-medium italic text-gray-700">
        "{t.quote}"
      </p>

      <div className="mt-8 flex items-center gap-4">
        <div
          className="flex h-12 w-12 items-center justify-center rounded-full text-lg font-bold text-white"
          style={{
            background: `linear-gradient(135deg, ${t.color}, ${t.color}bb)`,
          }}
        >
          {t.initial}
        </div>

        <div>
          <p className="font-bold text-[#16203b]">{t.name}</p>
          <p className="text-sm text-gray-400">{t.role}</p>
        </div>
      </div>
    </motion.div>
  ))}

  {/* Ghost Height */}
  <div className="invisible p-6 sm:p-8 md:p-14">
    <svg width="40" height="32" className="mb-6">
      <path d="M0 32V19.2C0 8.533 6.4 2.133 19.2 0l2.4 4C14.4 5.6 10.667 9.067 10 14.4H18V32H0zm22 0V19.2C22 8.533 28.4 2.133 41.2 0l2.4 4C36.4 5.6 32.667 9.067 32 14.4H40V32H22z" />
    </svg>

    <p className="text-base sm:text-lg md:text-xl leading-relaxed italic">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
      dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,
      consectetur adipiscing elit.
    </p>

    <div className="mt-8 flex items-center gap-4">
      <div className="h-12 w-12 rounded-full" />
      <div>
        <div className="h-5 w-32 rounded" />
        <div className="mt-2 h-4 w-24 rounded" />
      </div>
    </div>
  </div>

  {/* Dots */}
  <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-2">
    {testimonials.map((_, i) => (
      <button
        key={i}
        onClick={() => setActiveTestimonial(i)}
        className="h-2 rounded-full transition-all duration-300"
        style={{
          width: i === activeTestimonial ? "24px" : "8px",
          background:
            i === activeTestimonial ? "#E91E63" : "#f48fb1",
        }}
      />
    ))}
  </div>
</div>
        </div>
      </section>

      {/* ── GET INVOLVED / CTA ── */}
      <section id="we-get-involved" className="section relative overflow-hidden bg-gradient-to-br from-[#1a0a14] via-[#2d1128] to-[#0d1a2d]">
        <div className="absolute -top-40 right-0 h-[400px] w-[400px] rounded-full bg-[#E91E63]/20 blur-[120px]" />
        <div className="absolute -bottom-40 left-0 h-[400px] w-[400px] rounded-full bg-[#7B1FA2]/15 blur-[120px]" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-14">
              <span className="inline-block rounded-full border border-rose-400/30 bg-rose-500/10 px-4 py-1 text-xs font-bold uppercase tracking-widest text-rose-300 mb-4">Take Action</span>
              <h2 className="font-display font-bold text-[32px] text-white md:text-[48px]">Be Part of Her Story</h2>
              <p className="mt-4 text-base text-white/55 max-w-xl mx-auto">Every contribution — time, skills, or support — helps a woman step closer to her potential.</p>
            </div>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                icon: "♥",
                title: "Donate",
                description: "Sponsor a woman's training, healthcare, or education. Even ₹500 creates real, lasting impact.",
                action: "Donate Now",
                href: "/#donate",
                gradient: "from-[#E91E63] to-[#880E4F]",
                glow: "rgba(233,30,99,0.3)",
              },
              {
                icon: "★",
                title: "Volunteer",
                description: "Contribute your skills — teaching, counselling, mentorship, or community outreach.",
                action: "Become a Volunteer",
                href: "/#volunteer",
                gradient: "from-[#7B1FA2] to-[#4A148C]",
                glow: "rgba(123,31,162,0.3)",
              },
              {
                icon: "◆",
                title: "Partner With Us",
                description: "CSR programs, institutional partnerships, and co-creation of empowerment initiatives.",
                action: "Contact Us",
                href: "/#contact",
                gradient: "from-[#00796B] to-[#004D40]",
                glow: "rgba(0,121,107,0.3)",
              },
            ].map((card, i) => (
              <Reveal key={card.title} delay={i * 100}>
                <div className="group relative flex flex-col rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all duration-500 hover:bg-white/8 hover:border-white/20 hover:-translate-y-1">
                  <div
                    className={`mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${card.gradient} text-2xl text-white shadow-lg`}
                    style={{ boxShadow: `0 8px 24px ${card.glow}` }}
                  >
                    {card.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{card.title}</h3>
                  <p className="text-sm leading-relaxed text-white/55 flex-1">{card.description}</p>
                  <a
                    href={card.href}
                    onClick={(e) => { if (card.href.startsWith("/#")) { e.preventDefault(); navigateTo("/"); setTimeout(() => { document.querySelector(card.href.replace("/", ""))?.scrollIntoView({ behavior: "smooth" }); }, 100); } }}
                    className={`mt-7 inline-flex items-center gap-2 rounded-full bg-gradient-to-r ${card.gradient} px-5 py-2.5 text-sm font-bold text-white transition-all duration-300 hover:gap-3`}
                    style={{ boxShadow: `0 4px 16px ${card.glow}` }}
                  >
                    {card.action}
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOOTER BAR ── */}
      <div className="bg-[#0d1a2d] border-t border-white/10 py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-between gap-3 sm:flex-row">
          <p className="text-xs text-white/30">© {new Date().getFullYear()} SG Foundation — Women Empowerment Initiative</p>
          <button
            onClick={() => navigateTo("/")}
            className="text-xs font-medium text-white/40 transition hover:text-white flex items-center gap-1.5"
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M19 12H5M12 5l-7 7 7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Return to Main Site
          </button>
        </div>
      </div>
    </div>
  );
}
