import {
  HouseHeart, GraduationCap, HeartPulse, HandHeart,
  Sparkles, Users, BriefcaseBusiness, HandCoins,
  ShieldCheck, HelpingHand, Utensils, Home,
  PhoneCall, Mic, Brain, MessageSquare,
} from "lucide-react";
import Reveal from "../Reveal";
import SectionHeader from "../SectionHeader";
import { services } from "../../data/siteContent";

export const iconMap = {
  HouseHeart, GraduationCap, HeartPulse, HandHeart,
  Sparkles, Users, BriefcaseBusiness, HandCoins,
  ShieldCheck, HelpingHand, Utensils, Home,
  PhoneCall, Mic, Brain, MessageSquare,
};

const gradients = [
  "from-blue-500/15 to-blue-600/5",
  "from-emerald-500/15 to-emerald-600/5",
  "from-rose-500/15 to-rose-600/5",
  "from-violet-500/15 to-violet-600/5",
  "from-amber-500/15 to-amber-600/5",
  "from-cyan-500/15 to-cyan-600/5",
  "from-indigo-500/15 to-indigo-600/5",
  "from-pink-500/15 to-pink-600/5",
];

const iconColors = [
  "text-blue-600 bg-blue-50",
  "text-emerald-600 bg-emerald-50",
  "text-rose-600 bg-rose-50",
  "text-violet-600 bg-violet-50",
  "text-amber-600 bg-amber-50",
  "text-cyan-600 bg-cyan-50",
  "text-indigo-600 bg-indigo-50",
  "text-pink-600 bg-pink-50",
];

export default function ServicesSection() {
  return (
    <section id="services" className="relative overflow-hidden py-24 lg:py-32">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-primary/[0.02] to-white" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[800px] w-[800px] rounded-full bg-primary/3 blur-[120px]" />

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          kicker="What We Do"
          title="Programs rooted in compassion, access, and dignity."
          description="Every initiative is designed to meet urgent needs while creating stronger futures for children, families, and underserved communities."
          centered
        />

        <div className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {services.map((service, index) => {
            const LucideIcon = iconMap[service.icon];
            const isFeatured = index === 0;

            return (
              <Reveal
                key={service.title}
                delay={(index % 4) * 80}
                className={`group relative overflow-hidden rounded-3xl border border-white/80 bg-white p-6 shadow-[0_4px_24px_rgba(40,60,129,0.07)] transition-all duration-500 hover:-translate-y-2 hover:shadow-card-hover hover:border-primary/20 ${isFeatured ? "xl:col-span-2 xl:row-span-1" : ""}`}
              >
                {/* Background gradient on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${gradients[index % gradients.length]} opacity-0 transition-opacity duration-500 group-hover:opacity-100`} />

                {/* Top accent line */}
                <div className="absolute top-0 left-0 h-0.5 w-0 bg-gradient-to-r from-primary to-primary-light transition-all duration-500 group-hover:w-full" />

                {/* Icon */}
                <div className={`relative z-10 mb-5 flex h-13 w-13 items-center justify-center rounded-2xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 ${iconColors[index % iconColors.length]} h-12 w-12`}>
                  {LucideIcon && <LucideIcon className="h-5 w-5" />}
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-base font-bold text-ink transition-colors duration-300 group-hover:text-primary md:text-lg">
                    {service.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-6 text-muted">
                    {service.description}
                  </p>
                </div>

                {/* Arrow on hover */}
                <div className="relative z-10 mt-5 flex items-center gap-1 text-primary opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-1">
                  <span className="text-xs font-bold">Learn more</span>
                  <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
