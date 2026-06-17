import { Reveal } from "./shared";
import { Users, BookOpen, HeartPulse, GraduationCap, HandHeart } from "lucide-react";

const focusAreas = [
  {
    icon: Users,
    title: "Accessibility",
    desc: "Creating barrier-free environments and equal access for all.",
    color: "text-emerald-600",
    bg: "bg-emerald-50",
  },
  {
    icon: HeartPulse,
    title: "Therapy & Care",
    desc: "Providing essential therapy and personalized care support.",
    color: "text-amber-600",
    bg: "bg-amber-50",
  },
  {
    icon: GraduationCap,
    title: "Education Support",
    desc: "Supporting inclusive education and learning opportunities.",
    color: "text-rose-600",
    bg: "bg-rose-50",
  },
  {
    icon: BookOpen,
    title: "Skill Development",
    desc: "Training and equipping individuals with job-ready skills.",
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    icon: HandHeart,
    title: "Community Inclusion",
    desc: "Encouraging participation and inclusion in society.",
    color: "text-purple-600",
    bg: "bg-purple-50",
  },
];

export default function FocusAreas() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#064E3B] font-display">
              Our Focus Areas
            </h2>
            <div className="w-16 h-1 bg-[#0F766E] mx-auto mt-6 rounded-full"></div>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {focusAreas.map((area, i) => {
            const Icon = area.icon;
            return (
              <Reveal key={area.title} delay={i * 80} y={20}>
                <div className="group bg-white border border-gray-100 p-8 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-center flex flex-col items-center h-full">
                  <div className={`w-16 h-16 rounded-2xl ${area.bg} ${area.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-white shadow-sm`}>
                    <Icon className="w-8 h-8" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-bold text-[#064E3B] text-sm mb-3">
                    {area.title}
                  </h3>
                  <p className="text-[13px] text-gray-500 leading-relaxed">
                    {area.desc}
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
