import { Reveal } from "./shared";
import { Monitor, Wrench, Briefcase, Scissors, Coffee, Sprout } from "lucide-react";

const focusAreas = [
  {
    icon: Monitor,
    title: "IT & Digital Skills",
    desc: "Coding, Web Development, Digital Literacy & more",
    color: "text-blue-600",
    bg: "bg-blue-100",
  },
  {
    icon: Wrench,
    title: "Technical Training",
    desc: "Electrical, Plumbing, Auto, Welding & Industrial Skills",
    color: "text-orange-600",
    bg: "bg-orange-100",
  },
  {
    icon: Briefcase,
    title: "Professional Skills",
    desc: "Communication, Leadership, Finances & Soft Skills",
    color: "text-green-600",
    bg: "bg-green-100",
  },
  {
    icon: Scissors,
    title: "Design & Crafts",
    desc: "Tailoring, Handicrafts, Fashion Design & Creative Arts",
    color: "text-purple-600",
    bg: "bg-purple-100",
  },
  {
    icon: Coffee,
    title: "Hospitality",
    desc: "Culinary, Hotel Management & Customer Service",
    color: "text-red-600",
    bg: "bg-red-100",
  },
  {
    icon: Sprout,
    title: "Agriculture Skills",
    desc: "Smart Farming, Agri-Tech, Dairy & Sustainable Practices",
    color: "text-teal-600",
    bg: "bg-teal-100",
  },
];

export default function FocusAreas() {
  return (
    <section id="sd-focus" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1E3A8A] font-display">
              Our Training Focus Areas
            </h2>
            <div className="w-16 h-1 bg-[#F59E0B] mx-auto mt-4 rounded-full"></div>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
          {focusAreas.map((area, i) => {
            const Icon = area.icon;
            return (
              <Reveal key={area.title} delay={i * 80} y={20}>
                <div className="group bg-white border border-gray-100 p-6 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-center flex flex-col items-center h-full">
                  <div className={`w-16 h-16 rounded-full ${area.bg} ${area.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="font-bold text-[#1E3A8A] text-base mb-3 leading-snug">
                    {area.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
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
