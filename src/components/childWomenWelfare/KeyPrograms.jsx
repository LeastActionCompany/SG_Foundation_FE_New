import { Reveal } from "./shared";
import { GraduationCap, HeartPulse, ShieldCheck, Briefcase, Users } from "lucide-react";

const programs = [
  {
    icon: GraduationCap,
    title: "Education & Learning",
    desc: "Quality education and learning support for children to build a strong foundation.",
    color: "text-rose-600",
    bg: "bg-rose-50",
    border: "border-rose-100",
  },
  {
    icon: HeartPulse,
    title: "Health & Nutrition",
    desc: "Ensuring proper nutrition, healthcare and mental well-being for women and children.",
    color: "text-orange-600",
    bg: "bg-orange-50",
    border: "border-orange-100",
  },
  {
    icon: ShieldCheck,
    title: "Protection & Safety",
    desc: "Creating safe environments and providing protection from abuse and exploitation.",
    color: "text-blue-600",
    bg: "bg-blue-50",
    border: "border-blue-100",
  },
  {
    icon: Briefcase,
    title: "Skill Development",
    desc: "Vocational training and skill-building programs for women's economic independence.",
    color: "text-emerald-600",
    bg: "bg-emerald-50",
    border: "border-emerald-100",
  },
  {
    icon: Users,
    title: "Counseling & Support",
    desc: "Emotional support, guidance and mentorship for women and children in need.",
    color: "text-purple-600",
    bg: "bg-purple-50",
    border: "border-purple-100",
  },
];

export default function KeyPrograms() {
  return (
    <section id="cww-programs" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#4C1D95] font-display">
              Our Key Programs
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-pink-400 to-purple-400 mx-auto mt-6 rounded-full"></div>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {programs.map((prog, i) => {
            const Icon = prog.icon;
            return (
              <Reveal key={prog.title} delay={i * 80} y={20}>
                <div className={`group bg-white border ${prog.border} p-8 rounded-[32px] shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-center flex flex-col items-center h-full relative overflow-hidden`}>
                  
                  {/* Subtle top background color */}
                  <div className={`absolute top-0 left-0 w-full h-32 ${prog.bg} opacity-50 z-0`}></div>

                  <div className={`relative z-10 w-20 h-20 rounded-full bg-white border-2 border-dashed ${prog.border} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-sm`}>
                    <Icon className={`w-8 h-8 ${prog.color}`} strokeWidth={1.5} />
                  </div>
                  
                  <h3 className="relative z-10 font-bold text-[#4C1D95] text-sm mb-3">
                    {prog.title}
                  </h3>
                  <p className="relative z-10 text-[13px] text-gray-600 leading-relaxed">
                    {prog.desc}
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
