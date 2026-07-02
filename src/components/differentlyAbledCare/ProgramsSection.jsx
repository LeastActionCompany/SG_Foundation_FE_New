import { Reveal, ImgBox } from "./shared";
import { Baby, BookOpen, Wrench, Activity, Users } from "lucide-react";
import earlyInterventionImage from "../../assest/care/img1.png";
import specialEducationImage from "../../assest/care/img2.png";
import vocationalTrainingImage from "../../assest/care/img3.png";
import rehabilitationImage from "../../assest/care/img5.png";
import communityImage from "../../assest/care/img4.png";

const programs = [
  {
    title: "Early Intervention",
    desc: "Support children with disabilities through early therapy and guidance.",
    image: earlyInterventionImage,
    alt: "Child receiving guided early intervention care",
    imgLabel: "Early Intervention Image",
    icon: Baby,
    color: "text-emerald-600",
  },
  {
    title: "Special Education",
    desc: "Inclusive education programs tailored to individual needs.",
    image: specialEducationImage,
    alt: "Inclusive classroom with differently abled children learning together",
    imgLabel: "Special Education Image",
    icon: BookOpen,
    color: "text-amber-600",
  },
  {
    title: "Vocational Training",
    desc: "Practical training for independence and employment.",
    image: vocationalTrainingImage,
    alt: "Vocational training session with computer skills coaching",
    imgLabel: "Vocational Training Image",
    icon: Wrench,
    color: "text-rose-600",
  },
  {
    title: "Rehabilitation Support",
    desc: "Physical, occupational, and speech therapy for better livelihood.",
    image: rehabilitationImage,
    alt: "Rehabilitation therapy session with guided mobility support",
    imgLabel: "Rehabilitation Image",
    icon: Activity,
    color: "text-blue-600",
  },
  {
    title: "Community Engagement",
    desc: "Programs that promote social inclusion and community participation.",
    image: communityImage,
    alt: "Inclusive community event with children and families participating",
    imgLabel: "Community Engagement Image",
    icon: Users,
    color: "text-purple-600",
  },
];

export default function ProgramsSection() {
  return (
    <section id="dac-programs" className="py-24 bg-[#FAFAF9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#064E3B] font-display">
              Our Programs
            </h2>
            <div className="w-16 h-1 bg-[#0F766E] mx-auto mt-6 rounded-full"></div>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {programs.map((prog, i) => {
             const Icon = prog.icon;
             return (
              <Reveal key={prog.title} delay={i * 80}>
                <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl hover:-translate-y-2 transition-all duration-300 h-full flex flex-col group">
                  
                  <div className="h-44 w-full relative overflow-hidden bg-white">
                    <ImgBox 
                      src={prog.image}
                      alt={prog.alt}
                      label={prog.imgLabel} 
                      className="w-full h-full transition-transform duration-500 group-hover:scale-105" 
                    />
                    <div className="absolute bottom-4 left-4 bg-white p-3 rounded-full shadow-lg z-10">
                       <Icon className={`w-5 h-5 ${prog.color}`} strokeWidth={2} />
                    </div>
                  </div>

                  <div className="p-6 text-left flex-1 flex flex-col">
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
