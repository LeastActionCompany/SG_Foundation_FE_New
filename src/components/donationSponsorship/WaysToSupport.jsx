import { Reveal } from "./shared";
import { HandHeart, CalendarClock, Baby, GraduationCap, Building2 } from "lucide-react";

const ways = [
  {
    icon: HandHeart,
    title: "One-Time Donation",
    desc: "Give once and make an immediate impact in someone's life.",
    color: "text-emerald-600",
    bg: "bg-emerald-50",
    border: "group-hover:border-emerald-200"
  },
  {
    icon: CalendarClock,
    title: "Monthly Giving",
    desc: "Become a monthly supporter and help us plan sustainable long-term impact.",
    color: "text-amber-600",
    bg: "bg-amber-50",
    border: "group-hover:border-amber-200"
  },
  {
    icon: Baby,
    title: "Sponsor a Child",
    desc: "Provide education, care, and opportunities for a child to dream and grow.",
    color: "text-rose-600",
    bg: "bg-rose-50",
    border: "group-hover:border-rose-200"
  },
  {
    icon: GraduationCap,
    title: "Fund a Program",
    desc: "Support our programs and initiatives that create lasting change.",
    color: "text-blue-600",
    bg: "bg-blue-50",
    border: "group-hover:border-blue-200"
  },
  {
    icon: Building2,
    title: "Corporate Partnership",
    desc: "Partner with us to build a stronger, healthier and empowered community.",
    color: "text-purple-600",
    bg: "bg-purple-50",
    border: "group-hover:border-purple-200"
  },
];

export default function WaysToSupport() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F6B4B] font-display">
              Ways to Support
            </h2>
            <div className="w-16 h-1 bg-[#D8A531] mx-auto mt-6 rounded-full"></div>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {ways.map((way, i) => {
            const Icon = way.icon;
            return (
              <Reveal key={way.title} delay={i * 80} y={20}>
                <div className={`group bg-white border border-gray-100 p-8 rounded-[32px] shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-center flex flex-col items-center h-full ${way.border}`}>
                  <div className={`w-16 h-16 rounded-full ${way.bg} ${way.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-bold text-[#0F6B4B] text-sm mb-3">
                    {way.title}
                  </h3>
                  <p className="text-[13px] text-gray-500 leading-relaxed">
                    {way.desc}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
