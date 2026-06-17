import { Reveal, ImgBox } from "./shared";
import { GraduationCap, BookOpen, MonitorPlay, Palette, Compass } from "lucide-react";

const programs = [
  {
    num: "01",
    title: "School Access Support",
    desc: "Supporting enrollment, school fees, uniforms, and transportation for underprivileged children.",
    imgLabel: "Program Image – School Access",
    icon: GraduationCap,
    bg: "bg-[#064E3B]",
  },
  {
    num: "02",
    title: "After School Learning",
    desc: "After-school programs that strengthen foundational skills in a safe environment.",
    imgLabel: "Program Image – After School",
    icon: BookOpen,
    bg: "bg-[#D97706]",
  },
  {
    num: "03",
    title: "Digital Learning",
    desc: "Introducing technology and digital literacy to prepare children for the future.",
    imgLabel: "Program Image – Digital Learning",
    icon: MonitorPlay,
    bg: "bg-[#E85D04]",
  },
  {
    num: "04",
    title: "Creative Education",
    desc: "Promoting arts, sports, and creativity to nurture talent and confidence.",
    imgLabel: "Program Image – Creative Education",
    icon: Palette,
    bg: "bg-[#1E3A8A]",
  },
  {
    num: "05",
    title: "Mentorship & Guidance",
    desc: "Connecting children with mentors for career guidance and personal growth.",
    imgLabel: "Program Image – Mentorship",
    icon: Compass,
    bg: "bg-[#6D28D9]",
  },
];

export default function ProgramsSection() {
  return (
    <section id="es-programs" className="py-24 bg-[#FAFAF9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-16">
            <p className="text-[#064E3B] font-bold text-xs tracking-widest uppercase mb-2">Our Programs</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#064E3B] font-display">
              Programs That Inspire & Transform
            </h2>
            <div className="w-16 h-1 bg-[#D97706] mx-auto mt-6 rounded-full"></div>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {programs.map((prog, i) => {
             const Icon = prog.icon;
             return (
              <Reveal key={prog.title} delay={i * 80}>
                <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl hover:-translate-y-2 transition-all duration-300 h-full flex flex-col group relative">
                  
                  <div className={`absolute top-0 left-0 w-10 h-10 ${prog.bg} text-white font-bold flex items-center justify-center rounded-br-2xl z-20 text-xs`}>
                    {prog.num}
                  </div>

                  <div className="h-40 w-full relative overflow-hidden bg-white p-4">
                    <ImgBox 
                      label={prog.imgLabel} 
                      className="w-full h-full rounded-2xl transition-transform duration-500 group-hover:scale-105" 
                    />
                    <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-white text-[#064E3B] p-3 rounded-full shadow-md border border-gray-100 z-10">
                       <Icon className="w-6 h-6" strokeWidth={1.5} />
                    </div>
                  </div>

                  <div className="p-6 pt-10 text-center flex-1 flex flex-col">
                    <h3 className="font-bold text-[#064E3B] text-sm mb-3">
                      {prog.title}
                    </h3>
                    <p className="text-[13px] text-gray-500 leading-relaxed flex-1">
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
