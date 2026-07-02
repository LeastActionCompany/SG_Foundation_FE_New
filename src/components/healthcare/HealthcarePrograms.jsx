import { Reveal, ImgBox } from "./shared";
import { Stethoscope, Activity, Baby, HeartPulse, Brain } from "lucide-react";

import Genaral from "../../assest/healthcare/General.png";
import mental from "../../assest/healthcare/mental.png";
import rehabili from "../../assest/healthcare/rehabili.png";
import tendal from "../../assest/healthcare/tendal.png";
import women from "../../assest/healthcare/women.png";


const programs = [
  {
    title: "General Health Checkups",
    desc: "Regular checkups to monitor and maintain good health.",
    imgLabel: Genaral,
    icon: Stethoscope,
  },
  {
    title: "Dental Care",
    desc: "Oral health services for healthy smiles.",
    imgLabel: tendal,
    icon: Activity,
  },
  {
    title: "Women's Health",
    desc: "Specialized care for women at every stage of life.",
    imgLabel: women,
    icon: Baby,
  },
  {
    title: "Rehabilitation Services",
    desc: "Physical therapy and recovery support for all.",
    imgLabel: rehabili,
    icon: HeartPulse,
  },
  {
    title: "Mental Health Support",
    desc: "Counseling and support for emotional well-being.",
    imgLabel: mental,
    icon: Brain,
  },
];

export default function HealthcarePrograms() {
  return (
    <section id="hc-programs" className="py-20 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A2342] font-display">
              Our Healthcare Programs
            </h2>
            <div className="w-16 h-1 bg-[#0F9D94] mx-auto mt-4 rounded-full"></div>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {programs.map((prog, i) => {
             const Icon = prog.icon;
             return (
              <Reveal key={prog.title} delay={i * 80}>
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl hover:-translate-y-2 transition-all duration-300 h-full flex flex-col group relative">
                  <div className="h-44 w-full relative overflow-hidden">
                    <img
  src={prog.imgLabel}
  alt={prog.title}
  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
/>
                    <div className="absolute -bottom-5 left-5 bg-[#0F9D94] text-white p-2.5 rounded-full shadow-lg border-2 border-white z-10">
                       <Icon className="w-5 h-5" />
                    </div>
                  </div>
                  <div className="p-6 pt-8 text-left flex-1 flex flex-col">
                    <h3 className="font-bold text-[#0A2342] text-sm mb-2">
                      {prog.title}
                    </h3>
                    <p className="text-xs text-gray-500 leading-relaxed flex-1">
                      {prog.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  );
}
