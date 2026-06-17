import { Reveal } from "./shared";
import { GraduationCap, BookOpen, Users, Compass, Shield } from "lucide-react";

const features = [
  {
    icon: GraduationCap,
    title: "Access to Education",
    desc: "Removing barriers to education and ensuring every child can enroll and learn.",
    color: "text-emerald-600",
    bg: "bg-emerald-50",
  },
  {
    icon: BookOpen,
    title: "Learning Resources",
    desc: "Providing books, digital tools, and study materials to support better learning outcomes.",
    color: "text-amber-600",
    bg: "bg-amber-50",
  },
  {
    icon: Users,
    title: "Academic Support",
    desc: "Extra classes, mentoring, and personalized support to help children succeed in school.",
    color: "text-rose-600",
    bg: "bg-rose-50",
  },
  {
    icon: Shield,
    title: "Life Skills & Values",
    desc: "Building confidence, discipline, and values for holistic development and leadership.",
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    icon: Compass,
    title: "Future Readiness",
    desc: "Career guidance and opportunities to prepare children for a brighter future.",
    color: "text-purple-600",
    bg: "bg-purple-50",
  },
];

export default function WhatWeDo() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Reveal>
          <div className="text-center mb-16">
            <p className="text-[#064E3B] font-bold text-xs tracking-widest uppercase mb-2">What We Do</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#064E3B] font-display">
              We Support Every Step of Learning
            </h2>
            <div className="w-16 h-1 bg-[#D97706] mx-auto mt-6 rounded-full"></div>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <Reveal key={feature.title} delay={i * 80} y={20}>
                <div className="group bg-white border border-gray-100 p-8 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-center flex flex-col items-center h-full">
                  <div className={`w-16 h-16 rounded-full ${feature.bg} ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-white shadow-inner`}>
                    <Icon className="w-8 h-8" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-bold text-[#064E3B] text-sm mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-[13px] text-gray-500 leading-relaxed">
                    {feature.desc}
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
