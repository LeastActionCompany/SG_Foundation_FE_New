import { Reveal } from "./shared";
import { Stethoscope, ShieldCheck, Baby, Megaphone, Apple, Ambulance } from "lucide-react";

const focusAreas = [
  {
    icon: Stethoscope,
    title: "Primary Healthcare",
    desc: "Quality basic healthcare services for all age groups.",
  },
  {
    icon: ShieldCheck,
    title: "Preventive Care",
    desc: "Health check-ups, screenings and early detection.",
  },
  {
    icon: Baby,
    title: "Maternal & Child Health",
    desc: "Care and support for mothers and children.",
  },
  {
    icon: Megaphone,
    title: "Health Awareness",
    desc: "Educating communities for a healthier tomorrow.",
  },
  {
    icon: Apple,
    title: "Nutrition Support",
    desc: "Promoting nutrition and healthy lifestyle habits.",
  },
  {
    icon: Ambulance,
    title: "Emergency Support",
    desc: "Timely medical assistance in times of need.",
  },
];

export default function FocusAreas() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A2342] font-display">
              Our Key Focus Areas
            </h2>
            <div className="w-16 h-1 bg-[#0F9D94] mx-auto mt-4 rounded-full"></div>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
          {focusAreas.map((area, i) => {
            const Icon = area.icon;
            return (
              <Reveal key={area.title} delay={i * 80} y={20}>
                <div className="group bg-white border border-gray-100 p-6 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-center flex flex-col items-center h-full">
                  <div className={`w-16 h-16 rounded-full bg-[#E8F7F6] text-[#0F9D94] flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-[#0F9D94] group-hover:text-white transition-all duration-300`}>
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="font-bold text-[#0A2342] text-base mb-3 leading-snug">
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
