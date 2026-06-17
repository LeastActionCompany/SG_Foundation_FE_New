import { Reveal, ImgBox } from "./shared";
import { BookOpen, UserCheck, Apple, Shield } from "lucide-react";
import { navigateTo } from "../../utils/navigation";

const causes = [
  {
    title: "Education For All",
    desc: "Help children access quality education and build brighter futures.",
    imgLabel: "Education Cause Image",
    icon: BookOpen,
    color: "text-rose-600",
  },
  {
    title: "Women Empowerment",
    desc: "Empower women with skills, resources and opportunities for independence.",
    imgLabel: "Women Cause Image",
    icon: UserCheck,
    color: "text-amber-600",
  },
  {
    title: "Nutrition & Health",
    desc: "Provide nutritious food and healthcare for a healthier tomorrow.",
    imgLabel: "Nutrition Cause Image",
    icon: Apple,
    color: "text-emerald-600",
  },
  {
    title: "Safety & Protection",
    desc: "Ensure safety, protection and dignity for vulnerable individuals.",
    imgLabel: "Safety Cause Image",
    icon: Shield,
    color: "text-blue-600",
  },
];

export default function CausesSupport() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F6B4B] font-display">
              Causes That Need Your Support
            </h2>
            <div className="w-16 h-1 bg-[#D8A531] mx-auto mt-6 rounded-full"></div>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {causes.map((cause, i) => {
             const Icon = cause.icon;
             return (
              <Reveal key={cause.title} delay={i * 80}>
                <div className="bg-white rounded-[32px] shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl hover:-translate-y-2 transition-all duration-300 h-full flex flex-col group relative">
                  
                  <div className="h-48 w-full relative overflow-hidden bg-[#FAFAF8] rounded-t-[32px] rounded-b-[40px] z-10 border-b-4 border-white">
                    <ImgBox 
                      label={cause.imgLabel} 
                      className="w-full h-full transition-transform duration-700 group-hover:scale-110 !border-none" 
                    />
                    <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-white p-3 rounded-full shadow-md z-20">
                       <Icon className={`w-6 h-6 ${cause.color}`} strokeWidth={1.5} />
                    </div>
                  </div>

                  <div className="px-6 pb-8 pt-10 text-center flex-1 flex flex-col bg-white">
                    <h3 className="font-bold text-[#0F6B4B] text-lg mb-3">
                      {cause.title}
                    </h3>
                    <p className="text-[14px] text-gray-500 leading-relaxed flex-1 mb-6">
                      {cause.desc}
                    </p>
                    <button 
                      onClick={() => { navigateTo("/"); setTimeout(() => document.querySelector("#donate")?.scrollIntoView({ behavior: "smooth" }), 150); }}
                      className="inline-flex items-center justify-center gap-2 text-sm font-bold text-[#D8A531] hover:text-[#0F6B4B] transition-colors"
                    >
                      Support Now →
                    </button>
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
