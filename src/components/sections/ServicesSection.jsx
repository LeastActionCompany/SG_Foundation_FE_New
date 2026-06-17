import Reveal from "../Reveal";
import { navigateTo } from "../../utils/navigation";
import SectionHeader from "../SectionHeader";

import imgWomenEmpowerment from "../../assest/women empowerment.png";
import imgVolunteerSupport from "../../assest/volunteer support.png";
import imgSkillDevelopment from "../../assest/Skill Development.png";
import imgHealthCare from "../../assest/Health Care.png";
import imgEducationalSupport from "../../assest/Educational Support.png";
import imgDifferentlyAbled from "../../assest/Differently Abled Care.png";
import imgChildWelfare from "../../assest/Child & Women Welfare.png";
import imgDonation from "../../assest/Donation & Sponsorship.png";

const programs = [
  {
    image: imgWomenEmpowerment,
    title: "Women Empowerment",
    description: "Empowering women through livelihood, leadership, and self-reliance programs that build confidence and independence.",
    accent: "#E8A838",
    link: "/women-empowerment",
    isPage: true,
  },
  {
    image: imgVolunteerSupport,
    title: "Volunteer Support",
    description: "Connecting compassionate volunteers with meaningful opportunities to create positive community impact.",
    accent: "#4CAF7D",
    link: "/volunteer-support",
    isPage: true,
  },
  {
    image: imgSkillDevelopment,
    title: "Skill Development",
    description: "Providing training, mentoring, and career-focused programs that improve employability and growth.",
    accent: "#3D9BE9",
    link: "/skill-development",
    isPage: true,
  },
  {
    image: imgHealthCare,
    title: "Health Care",
    description: "Organizing medical camps, awareness sessions, and providing essential healthcare to underserved communities.",
    accent: "#E91E63",
    link: "/health-care",
    isPage: true,
  },
  {
    image: imgEducationalSupport,
    title: "Educational Support",
    description: "Ensuring every child has access to quality education, learning resources, and academic guidance.",
    accent: "#FF9800",
    link: "/educational-support",
    isPage: true,
  },
  {
    image: imgDifferentlyAbled,
    title: "Differently Abled Care",
    description: "Providing inclusive care, support, and opportunities that promote dignity and independent living.",
    accent: "#E8A838",
    link: "/differently-abled-care",
    isPage: true,
  },
  {
    image: imgChildWelfare,
    title: "Child & Women Welfare",
    description: "Protecting and uplifting vulnerable children and women through welfare and community support programs.",
    accent: "#4CAF7D",
    link: "/child-women-welfare",
    isPage: true,
  },
  {
    image: imgDonation,
    title: "Donation & Sponsorship",
    description: "Enabling direct contributions that support education, healthcare, emergency aid, and long-term development.",
    accent: "#3D9BE9",
    link: "/donation-sponsorship",
    isPage: true,
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="relative overflow-hidden section bg-[#f8f9fc]">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-primary/[0.02] to-[#f8f9fc]" />

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          kicker="What We Do"
          title="Programs rooted in compassion, access, and dignity."
          description="Every initiative is designed to meet urgent needs while creating stronger futures for children, families, and underserved communities."
          centered
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {programs.map((program, index) => (
            <Reveal key={program.title} delay={index * 60}>
              <div className="group flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(0,0,0,0.10)]">

                {/* Image — full, no crop */}
                <div className="w-full overflow-hidden bg-[#0d1220] flex items-center justify-center"
                  style={{ minHeight: "220px" }}>
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-auto object-contain transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    style={{ maxHeight: "280px", display: "block" }}
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 p-6">
                  {/* Accent tag */}
                  <span
                    className="mb-3 inline-block w-fit rounded-full px-3 py-0.5 text-[10px] font-bold uppercase tracking-[0.18em]"
                    style={{ background: `${program.accent}18`, color: program.accent, border: `1px solid ${program.accent}40` }}
                  >
                    SG Foundation
                  </span>

                  {/* Title */}
                  <h3 className="text-[20px] font-bold leading-snug text-ink">
                    {program.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-2 text-[14px] leading-relaxed text-muted flex-1">
                    {program.description}
                  </p>

                  {/* Learn More */}
                  {program.isPage ? (
                    <button
                      onClick={() => navigateTo(program.link)}
                      className="mt-5 inline-flex w-fit items-center gap-2 rounded-full px-5 py-2 text-[13px] font-bold text-white transition-all duration-300 hover:opacity-90 hover:gap-3"
                      style={{ background: program.accent }}
                    >
                      Learn More
                      <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                  ) : (
                    <a
                      href={program.link}
                      className="mt-5 inline-flex w-fit items-center gap-2 rounded-full px-5 py-2 text-[13px] font-bold text-white transition-all duration-300 hover:opacity-90 hover:gap-3"
                      style={{ background: program.accent }}
                    >
                      Learn More
                      <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </a>
                  )}
                </div>

                {/* Bottom accent border on hover */}
                <div
                  className="h-[3px] w-0 transition-all duration-500 group-hover:w-full"
                  style={{ background: `linear-gradient(to right, ${program.accent}, ${program.accent}88)` }}
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
