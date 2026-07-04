import { useState, useEffect, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { navigateTo } from "../utils/navigation";
import volunteer_support from "../assest/VolunteerSupport-bg.png";
import volunteerHeroImage from "../assest/environment.png";
import volunteerEducation from "../assest/Volunteer/1.png";
import volunteerHealth from "../assest/Volunteer/2.png";
import volunteerEnvironment from "../assest/Volunteer/3.png";
import volunteerCommunity from "../assest/Volunteer/4.png";

/* ─────────────────────────────────────────
   Animated Counter
───────────────────────────────────────── */
function Counter({ value, suffix = "+", duration = 2200 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

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

/* ─────────────────────────────────────────
   Scroll Reveal
───────────────────────────────────────── */
function Reveal({ children, delay = 0, y = 28, className = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: delay / 1000 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─────────────────────────────────────────
   Image Container — proper bg-gray-100
   fallback, no broken icons
───────────────────────────────────────── */
function ImgBox({ src, alt, label, className = "", style = {}, children }) {
  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={style}
    >
      {src ? (
        <img src={src} alt={alt} className="h-full w-full object-cover" />
      ) : (
        /* Clean gray placeholder — swap with real image by adding src prop */
        <div className="flex h-full w-full items-end bg-gradient-to-br from-gray-100 to-gray-200 p-3"
        >
          <span className="rounded bg-black/10 px-2 py-0.5 text-[10px] font-semibold text-gray-500">
            {label}
          </span>
        </div>
      )}
      {children}
    </div>
  );
}

/* ─────────────────────────────────────────
   Data
───────────────────────────────────────── */
const benefits = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
        <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
        <path d="M8 12l2.5 2.5L16 9" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Meaningful Impact",
    desc: "Contribute to real community challenges and create lasting, measurable change.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
    title: "Personal Growth",
    desc: "Learn new skills, gain experience and grow both personally and professionally.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "Community Connection",
    desc: "Meet like-minded people and become part of a caring and supportive community.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
    title: "Make a Difference",
    desc: "Your time and compassion can bring hope and improve lives of many individuals.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
        <circle cx="12" cy="8" r="6" />
        <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
      </svg>
    ),
    title: "Recognition",
    desc: "We appreciate and celebrate our volunteers and their incredible contributions.",
  },
];

const impactStats = [
  { value: 3000, suffix: "+", label: "Active Volunteers", icon: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )},
  { value: 25000, suffix: "+", label: "Hours Contributed", icon: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" strokeLinecap="round" />
    </svg>
  )},
  { value: 120, suffix: "+", label: "Communities Reached", icon: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  )},
  { value: 50, suffix: "+", label: "Programs Supported", icon: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  )},
];

const opportunities = [
  {
    title: "Education Support",
    desc: "Help children learn and grow by teaching, mentoring, or supporting educational activities in schools and community centers.",
    label: "Education Support Image",
    image: volunteerEducation,
  },
  {
    title: "Health & Wellness",
    desc: "Assist in health camps, awareness programs, and promoting healthy communities through outreach and care.",
    label: "Health & Wellness Image",
    image: volunteerHealth,
  },
  {
    title: "Environment Protection",
    desc: "Join clean-up drives, tree plantation, and green initiatives to protect our environment for future generations.",
    label: "Environment Protection Image",
    image: volunteerEnvironment,
  },
  {
    title: "Community Service",
    desc: "Support community events, elderly care, and initiatives that uplift lives and foster neighborhood bonds.",
    label: "Community Service Image",
    image: volunteerCommunity,
  },
];

const testimonials = [
  {
    quote: "Volunteering with SG Foundation has been a life-changing experience. I feel more connected and inspired every day.",
    name: "Anita Sharma",
    role: "Active Volunteer",
    initial: "A",
    color: "#1a6b3c",
  },
  {
    quote: "The joy of seeing smiles on people's faces makes every hour I spend volunteering truly worth it.",
    name: "Rahul Verma",
    role: "Volunteer",
    initial: "R",
    color: "#2e7d52",
  },
  {
    quote: "It's amazing to be part of a team that cares so deeply about making a real difference in the world.",
    name: "Priya Nair",
    role: "Volunteer",
    initial: "P",
    color: "#1b5e20",
  },
];

/* ══════════════════════════════════════════════════════════════ */
export default function VolunteerSupportPage() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [openAccordion, setOpenAccordion] = useState(0);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  useEffect(() => {
    const t = setInterval(() => setActiveTestimonial(p => (p + 1) % testimonials.length), 5000);
    return () => clearInterval(t);
  }, []);

  const prevT = () => setActiveTestimonial(p => (p - 1 + testimonials.length) % testimonials.length);
  const nextT = () => setActiveTestimonial(p => (p + 1) % testimonials.length);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden font-sans">
      {/* ══ SECTION 1 — HERO ══ */}
      <section className="relative min-h-[100svh] flex items-center overflow-hidden bg-white pt-20">
        {/* Decorative green blobs */}
        <div className="absolute -top-20 -right-20 h-[480px] w-[480px] rounded-full bg-[#d1fae5]/60 blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-[#bbf7d0]/40 blur-[80px] pointer-events-none" />

        <div className="relative mx-auto w-full xl:max-w-7xl px-4 sm:px-6 lg:px-8 py-16 grid gap-12 lg:grid-cols-2 lg:items-center">

          {/* Left — text */}
          <div className="order-2 lg:order-1">
            <Reveal delay={0}>
              <span className="inline-block text-xs font-bold uppercase tracking-[0.22em] text-[#1a6b3c] mb-5">
                Volunteer Support
              </span>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="font-display font-bold text-[42px] leading-[1.07] tracking-tight text-[#0a2512] md:text-[56px] lg:text-[64px]">
                Be the reason<br />
                someone's life{" "}
                <span className="relative inline-block text-[#1a6b3c]">
                  changes.
                  {/* underline squiggle */}
                  <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                    <path d="M2 9 C 40 2, 80 11, 120 5, 160 1, 190 8, 198 6" stroke="#1a6b3c" strokeWidth="3" strokeLinecap="round" fill="none" />
                  </svg>
                </span>
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-7 text-base leading-relaxed text-gray-500 max-w-md md:text-lg">
                Our volunteers are the heart of SG Foundation. Together, we create meaningful impact and build stronger, compassionate communities.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <div className="mt-9 flex flex-wrap gap-4">
                <a
                  href="#vs-cta"
                  className="inline-flex items-center gap-2.5 rounded-full bg-[#1a6b3c] px-7 py-3.5 text-sm font-bold text-white shadow-[0_6px_24px_rgba(26,107,60,0.35)] transition-all hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(26,107,60,0.45)]"
                >
                  Become a Volunteer
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
                <a
                  href="#vs-opportunities"
                  className="inline-flex items-center gap-2 rounded-full border-2 border-[#1a6b3c]/25 px-7 py-3.5 text-sm font-bold text-[#1a6b3c] transition-all hover:-translate-y-0.5 hover:border-[#1a6b3c]/50 hover:bg-green-50"
                >
                  Explore Opportunities
                </a>
              </div>
            </Reveal>
          </div>

          {/* Right — hero image with artistic mask + overlays */}
          <Reveal delay={120} className="order-1 lg:order-2">
            <div className="relative flex items-center justify-center">
              {/* Decorative dot grid */}
              <div
                className="absolute -top-6 -left-6 h-32 w-32 opacity-30"
                style={{
                  backgroundImage: "radial-gradient(circle, #1a6b3c 1px, transparent 1px)",
                  backgroundSize: "10px 10px",
                }}
              />
              <div
                className="absolute -bottom-6 -right-6 h-32 w-32 opacity-20"
                style={{
                  backgroundImage: "radial-gradient(circle, #1a6b3c 1px, transparent 1px)",
                  backgroundSize: "10px 10px",
                }}
              />

              {/* Main image — organic blob mask */}
              <div
                className="relative w-full max-w-[500px] aspect-square overflow-hidden shadow-2xl"
                style={{
                  borderRadius: "0",
                  background: "#e8f5e9",
                }}
              >
                {/*
                  Replace with your hero volunteer image:
                  <img src={heroVolunteerImage} alt="Volunteers working together" className="h-full w-full object-cover" />
                */}
                <img src={volunteer_support} alt="Volunteers working together" className="h-full w-full object-cover" />
                {/* Green brush-stroke overlay */}
                <div className="absolute inset-0 bg-gradient-to-tl from-[#1a6b3c]/20 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Floating stat card */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                className="absolute bottom-6 right-0 md:-right-8 z-10 rounded-2xl bg-white px-5 py-4 shadow-[0_8px_32px_rgba(0,0,0,0.12)] border border-green-100"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1a6b3c]/10">
                    <svg className="text-[#1a6b3c]" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" fill="#1a6b3c" stroke="none" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Volunteers</p>
                    <p className="text-base font-bold text-[#0a2512]">Change Everything</p>
                  </div>
                </div>
              </motion.div>

              {/* Decorative ring */}
              <div className="absolute -top-4 right-10 h-16 w-16 rounded-full border-2 border-dashed border-green-300 animate-spin" style={{ animationDuration: "12s" }} />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══ SECTION 2 — WHY VOLUNTEER ══ */}
      <section className="section bg-[#f9fdf9]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-14">
              <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#1a6b3c]">Why Volunteer With Us?</span>
              <h2 className="mt-3 font-display font-bold text-[30px] text-[#0a2512] md:text-[42px]">
                More than volunteering,<br className="hidden md:block" /> it's purpose.
              </h2>
            </div>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {benefits.map((b, i) => (
              <Reveal key={b.title} delay={i * 70}>
                <div className="group flex flex-col items-center text-center rounded-2xl border border-green-100 bg-white p-6 shadow-sm transition-all duration-400 hover:-translate-y-1.5 hover:shadow-[0_12px_32px_rgba(26,107,60,0.1)] hover:border-green-200">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#e8f5e9] text-[#1a6b3c] transition-all duration-300 group-hover:bg-[#1a6b3c] group-hover:text-white">
                    {b.icon}
                  </div>
                  <h3 className="text-sm font-bold text-[#0a2512] mb-2">{b.title}</h3>
                  <p className="text-xs leading-relaxed text-gray-500">{b.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══ SECTION 3 — IMPACT BAR ══ */}
      <section className="relative overflow-hidden">
        <div className="bg-gradient-to-r from-[#0a2512] via-[#1a6b3c] to-[#0f4024] py-16">
          {/* Subtle pattern */}
          <div className="absolute inset-0 opacity-[0.04]"
            style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "24px 24px" }}
          />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-1 md:grid-cols-[1fr_auto_auto_auto_auto]">
              {/* Left label block */}
              <div className="flex flex-col justify-center mb-8 md:mb-0 md:pr-12 md:border-r md:border-white/20">
                <h3 className="font-display text-2xl font-bold text-white md:text-3xl">
                  Our Impact Together
                  <span className="ml-2 text-green-300">♥</span>
                </h3>
                <p className="mt-3 text-sm text-white/60 leading-relaxed max-w-xs">
                  Because of our amazing volunteers, we've been able to touch more lives and create bigger impact.
                </p>
              </div>

              {/* Stats */}
              {impactStats.map((s, i) => (
                <div key={s.label} className={`flex flex-col items-center justify-center px-8 py-4 text-center ${i < impactStats.length - 1 ? "md:border-r md:border-white/15" : ""}`}>
                  <div className="mb-3 text-green-300 opacity-80">{s.icon}</div>
                  <div className="text-3xl font-bold text-white md:text-4xl">
                    <Counter value={s.value} suffix={s.suffix} />
                  </div>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-widest text-white/50">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ SECTION 4 — VOLUNTEER OPPORTUNITIES ══ */}
      <section id="vs-opportunities" className="section bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">

            {/* Left — illustration / image */}
            <Reveal y={20}>
              <div className="relative">
                <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#1a6b3c]">Ways You Can Volunteer</span>
                <h2 className="mt-3 font-display font-bold text-[28px] text-[#0a2512] leading-tight md:text-[38px]">
                  Choose a role<br />that inspires you.
                </h2>
                {/* Underline */}
                <div className="mt-2 h-[3px] w-16 rounded-full bg-[#1a6b3c]" />

                {/* Circular image collage — organic */}
                <div className="relative mt-10 flex justify-center">
                  {/* Large circle image */}
                  <div className="relative h-60 w-60 overflow-hidden rounded-full shadow-xl">
                    <img
                      src={volunteerEducation}
                      alt="Education support volunteer"
                      className="h-full w-full object-cover"
                    />
                  </div>

                  {/* Floating text label */}
                  <motion.div
                    animate={{ rotate: [0, 3, -3, 0] }}
                    transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                    className="absolute -bottom-4 -right-2 md:right-16 rounded-2xl bg-[#0a2512] px-5 py-3 text-white shadow-lg"
                  >
                    <p className="text-base font-bold leading-tight">Together<br />We Can</p>
                    <svg className="mt-1 text-green-300" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                    </svg>
                  </motion.div>

                  {/* Decorative dots */}
                  <div
                    className="absolute top-0 left-0 h-24 w-24 opacity-25"
                    style={{ backgroundImage: "radial-gradient(circle, #1a6b3c 1px, transparent 1px)", backgroundSize: "8px 8px" }}
                  />
                </div>
              </div>
            </Reveal>

            {/* Right — accordion cards with image thumbs */}
            <div className="flex flex-col gap-3">
              {opportunities.map((opp, i) => {
                const isOpen = openAccordion === i;
                return (
                  <Reveal key={opp.title} delay={i * 60}>
                    <div
                      className={`overflow-hidden rounded-2xl border transition-all duration-400 cursor-pointer ${isOpen ? "border-[#1a6b3c]/40 shadow-[0_4px_24px_rgba(26,107,60,0.12)]" : "border-gray-100 hover:border-green-200"}`}
                      onClick={() => setOpenAccordion(isOpen ? -1 : i)}
                    >
                      <div className="flex items-center gap-4 p-4">
                        {/* Thumbnail image */}
                        <div className="h-14 w-20 flex-shrink-0 overflow-hidden rounded-xl bg-gray-100">
                          {/*
                            Replace with: <img src={opportunityImages[i]} alt={opp.title} className="h-full w-full object-cover" />
                          */}
                          <ImgBox src={opp.image} alt={opp.title} label={opp.label} className="h-full w-full" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-sm font-bold text-[#0a2512]">{opp.title}</h3>
                          <p className={`mt-0.5 text-xs text-gray-400 transition-all duration-300 ${isOpen ? "line-clamp-none" : "line-clamp-1"}`}>
                            {opp.desc}
                          </p>
                        </div>
                        <div
                          className={`flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-gray-100 transition-all duration-300 ${isOpen ? "bg-[#1a6b3c] rotate-90" : ""}`}
                        >
                          <svg
                            className={`transition-colors ${isOpen ? "text-white" : "text-gray-400"}`}
                            width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
                          >
                            <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </div>
                      </div>

                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                          >
                            <div className="px-4 pb-5 pt-1 border-t border-green-100">
                              <p className="text-sm leading-relaxed text-gray-500">{opp.desc}</p>
                              <a
                                href="#vs-cta"
                                className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#1a6b3c] px-5 py-2 text-xs font-bold text-white transition hover:bg-[#0f4024]"
                              >
                                Apply for this role
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                  <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                              </a>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ══ SECTION 5 — TESTIMONIALS ══ */}
      <section className="section bg-[#f9fdf9]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-12">
              <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#1a6b3c]">Voices of Change</span>
              <h2 className="mt-3 font-display font-bold text-[28px] text-[#0a2512] md:text-[38px]">
                What our volunteers say
              </h2>
            </div>
          </Reveal>

          <div className="relative">
            {/* Cards grid — show 3 on desktop */}
            <div className="grid gap-5 md:grid-cols-3">
              {testimonials.map((t, i) => (
                <motion.div
                  key={t.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ delay: i * 0.1, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                  className={`relative overflow-hidden rounded-2xl bg-white border p-6 shadow-sm transition-all duration-400 hover:shadow-[0_8px_32px_rgba(26,107,60,0.10)] hover:-translate-y-1 ${i === activeTestimonial ? "border-[#1a6b3c]/40 ring-1 ring-[#1a6b3c]/20" : "border-gray-100"}`}
                >
                  {/* Big quote mark */}
                  <svg className="mb-3 text-green-100" width="36" height="30" viewBox="0 0 40 32" fill="currentColor">
                    <path d="M0 32V19.2C0 8.533 6.4 2.133 19.2 0l2.4 4C14.4 5.6 10.667 9.067 10 14.4H18V32H0zm22 0V19.2C22 8.533 28.4 2.133 41.2 0l2.4 4C36.4 5.6 32.667 9.067 32 14.4H40V32H22z" />
                  </svg>
                  <p className="text-sm leading-relaxed text-gray-600 italic">"{t.quote}"</p>
                  <div className="mt-6 flex items-center gap-3">
                    {/* Profile image area — replace with actual photo */}
                    <div className="h-10 w-10 overflow-hidden rounded-full bg-gray-100 flex-shrink-0">
                      {/*
                        Replace with: <img src={t.photo} alt={t.name} className="h-full w-full object-cover" />
                      */}
                      <div className="flex h-full w-full items-center justify-center text-sm font-bold text-white" style={{ background: t.color }}>
                        {t.initial}
                      </div>
                    </div>
                    <div>
                      <p className="text-sm font-bold text-[#0a2512]">{t.name}</p>
                      <p className="text-xs text-gray-400">{t.role}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Prev / Next arrows */}
            <div className="mt-8 flex items-center justify-center gap-3">
              <button
                onClick={prevT}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-green-200 bg-white text-[#1a6b3c] shadow-sm transition hover:bg-[#1a6b3c] hover:text-white hover:border-[#1a6b3c]"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <path d="M19 12H5M12 5l-7 7 7 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveTestimonial(i)}
                  className="h-2 rounded-full transition-all duration-300"
                  style={{ width: i === activeTestimonial ? "24px" : "8px", background: i === activeTestimonial ? "#1a6b3c" : "#bbf7d0" }}
                />
              ))}
              <button
                onClick={nextT}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-green-200 bg-white text-[#1a6b3c] shadow-sm transition hover:bg-[#1a6b3c] hover:text-white hover:border-[#1a6b3c]"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ══ SECTION 6 — FINAL CTA ══ */}
      <section id="vs-cta" className="relative overflow-hidden">
        {/* Full-bleed background image area */}
        <div className="absolute inset-0 " >
          {/*
            Replace with your emotional CTA background image:
            <img src={ctaBackgroundImage} alt="Volunteer impact background" className="h-full w-full object-cover" />
          */}
          <img
  src={volunteerHeroImage}
  alt="Volunteers Making an Impact"
  className="h-full w-full object-cover"
/>
        </div>
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a2512]/92 via-[#0a2512]/80 to-[#0a2512]/50" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-2xl">
            <Reveal>
              <h2 className="font-display font-bold text-[36px] text-white leading-tight md:text-[52px]">
                Ready to make<br />an impact?
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="mt-5 text-base text-white/60 leading-relaxed md:text-lg max-w-md">
                Join our community of changemakers and be a part of something bigger than yourself.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <div className="mt-9 flex flex-wrap gap-4">
                <a
                  href="/#volunteer"
                  onClick={(e) => { e.preventDefault(); navigateTo("/"); setTimeout(() => { document.querySelector("#volunteer")?.scrollIntoView({ behavior: "smooth" }); }, 150); }}
                  className="inline-flex items-center gap-2.5 rounded-full bg-[#1a6b3c] px-8 py-4 text-sm font-bold text-white shadow-[0_6px_24px_rgba(26,107,60,0.5)] transition-all hover:-translate-y-0.5 hover:bg-[#0f4024] hover:shadow-[0_12px_32px_rgba(26,107,60,0.6)]"
                >
                  Become a Volunteer
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
                <a
                  href="/#contact"
                  onClick={(e) => { e.preventDefault(); navigateTo("/"); setTimeout(() => { document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }); }, 150); }}
                  className="inline-flex items-center gap-2.5 rounded-full border-2 border-white/30 bg-white/10 px-8 py-4 text-sm font-bold text-white backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:border-white/50 hover:bg-white/15"
                >
                  Contact Us
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>
            </Reveal>
          </div>

          {/* Decorative right-side text */}
          <div className="absolute right-8 bottom-10 hidden lg:block text-right opacity-40 pointer-events-none">
            <p className="font-display text-2xl font-bold italic text-green-200 leading-snug">
              Your time<br />can change<br />a life!
            </p>
            <svg className="ml-auto mt-2 text-green-300" width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
          </div>
        </div>
      </section>

      {/* ══ FOOTER BAR ══ */}
      <div className="bg-[#0a2512] border-t border-white/10 py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-between gap-3 sm:flex-row">
          <p className="text-xs text-white/30">© {new Date().getFullYear()} SG Foundation — Volunteer Support Initiative</p>
          <button
            onClick={() => navigateTo("/")}
            className="flex items-center gap-1.5 text-xs font-medium text-white/40 transition hover:text-white"
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
