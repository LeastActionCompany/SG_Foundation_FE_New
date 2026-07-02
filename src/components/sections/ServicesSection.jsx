import { useEffect, useState } from "react";
import { navigateTo } from "../../utils/navigation";
import SectionHeader from "../SectionHeader";

import imgWomenEmpowerment from "../../assest/womenempowerment.png";
import imgVolunteerSupport from "../../assest/volunteersupport.png";
import imgSkillDevelopment from "../../assest/SkillDevelopment.png";
import imgHealthCare from "../../assest/HealthCare.png";
import imgEducationalSupport from "../../assest/EducationalSupport.png";
import imgDifferentlyAbled from "../../assest/DifferentlyAbledCare.png";
import imgChildWelfare from "../../assest/ChildWomenWelfare.png";
import imgDonation from "../../assest/DonationSponsorship.png";

const programs = [
  {
    image: imgWomenEmpowerment,
    title: "Women Empowerment",
    description: "Empowering women through livelihood, leadership, and self-reliance programs that build confidence and independence.",
    accent: "#E8A838",
    cardColor: "#F8D66D",
    link: "/women-empowerment",
    isPage: true,
  },
  {
    image: imgVolunteerSupport,
    title: "Volunteer Support",
    description: "Connecting compassionate volunteers with meaningful opportunities to create positive community impact.",
    accent: "#4CAF7D",
    cardColor: "#A8E6C5",
    link: "/volunteer-support",
    isPage: true,
  },
  {
    image: imgSkillDevelopment,
    title: "Skill Development",
    description: "Providing training, mentoring, and career-focused programs that improve employability and growth.",
    accent: "#3D9BE9",
    cardColor: "#8ED7F5",
    link: "/skill-development",
    isPage: true,
  },
  {
    image: imgHealthCare,
    title: "Health Care",
    description: "Organizing medical camps, awareness sessions, and providing essential healthcare to underserved communities.",
    accent: "#E91E63",
    cardColor: "#F59BC0",
    link: "/health-care",
    isPage: true,
  },
  {
    image: imgEducationalSupport,
    title: "Educational Support",
    description: "Ensuring every child has access to quality education, learning resources, and academic guidance.",
    accent: "#FF9800",
    cardColor: "#FFC36B",
    link: "/educational-support",
    isPage: true,
  },
  {
    image: imgDifferentlyAbled,
    title: "Differently Abled Care",
    description: "Providing inclusive care, support, and opportunities that promote dignity and independent living.",
    accent: "#E8A838",
    cardColor: "#E5C4F5",
    link: "/differently-abled-care",
    isPage: true,
  },
  {
    image: imgChildWelfare,
    title: "Child & Women Welfare",
    description: "Protecting and uplifting vulnerable children and women through welfare and community support programs.",
    accent: "#4CAF7D",
    cardColor: "#A7E4DB",
    link: "/child-women-welfare",
    isPage: true,
  },
  {
    image: imgDonation,
    title: "Donation & Sponsorship",
    description: "Enabling direct contributions that support education, healthcare, emergency aid, and long-term development.",
    accent: "#3D9BE9",
    cardColor: "#A7C9FF",
    link: "/donation-sponsorship",
    isPage: true,
  },
];

export default function ServicesSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeProgram = programs[activeIndex];

  const openProgram = (path) => {
    if (window.location.pathname === path) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    navigateTo(path);
    window.setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "auto" });
    }, 0);
  };

  const showPrevious = () => {
    setActiveIndex((current) => (current - 1 + programs.length) % programs.length);
  };

  const showNext = () => {
    setActiveIndex((current) => (current + 1) % programs.length);
  };

  useEffect(() => {
    const timer = window.setInterval(showNext, 3000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <section id="services" className="relative overflow-hidden bg-[#070B19] py-12 md:py-16 lg:py-20">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#071026] via-[#132958] to-[#070B19]" />

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          kicker="What We Do"
          title="Programs rooted in compassion, access, and dignity."
          description="Every initiative is designed to meet urgent needs while creating stronger futures for children, families, and underserved communities."
          centered
          light
        />

        <div className="mt-12 flex justify-center">
  <article
    key={activeProgram.title}
    className="group relative flex flex-col md:block w-full max-w-5xl min-h-[520px] md:min-h-[310px] lg:min-h-[320px] overflow-hidden rounded-[28px] shadow-[0_20px_55px_rgba(23,36,78,0.18)] transition-transform duration-500 hover:-translate-y-1"
    style={{
      background: `linear-gradient(135deg, ${activeProgram.cardColor} 0%, ${activeProgram.cardColor} 62%, ${activeProgram.accent} 145%)`,
    }}
  >
  {/* Mobile Image / Desktop Right Image */}
  <div
    className="
      relative
      w-full h-64
      md:absolute md:inset-y-0 md:right-0 md:w-[51%] md:h-full
      overflow-hidden
      md:[border-radius:58%_0_0_43%/_48%_0_0_55%]
    "
  >
    <img
      src={activeProgram.image}
      alt=""
      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
    />
  </div>

  {/* Content */}
  <div className="relative z-10 flex flex-1 flex-col justify-center p-7 sm:p-8 md:max-w-[58%] md:p-10 lg:p-11">
    <span className="mb-4 text-[10px] font-bold uppercase tracking-[0.18em] text-[#17234F]/70">
      SG Foundation · {String(activeIndex + 1).padStart(2, "0")}
    </span>

    <h3 className="text-2xl font-bold leading-tight text-[#17234F] sm:text-3xl md:text-4xl">
      {activeProgram.title}
    </h3>

    <p className="mt-4 text-sm leading-relaxed text-[#17234F]/80 sm:text-[15px]">
      {activeProgram.description}
    </p>

    {activeProgram.isPage ? (
      <button
        onClick={() => openProgram(activeProgram.link)}
        className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-[#17234F] px-5 py-2.5 text-[13px] font-bold text-white transition-all duration-300 hover:gap-3 hover:bg-[#111a3d]"
      >
        Learn More <ArrowIcon />
      </button>
    ) : (
      <a
        href={activeProgram.link}
        className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-[#17234F] px-5 py-2.5 text-[13px] font-bold text-white transition-all duration-300 hover:gap-3 hover:bg-[#111a3d]"
      >
        Learn More <ArrowIcon />
      </a>
    )}
  </div>
</article>
</div>
      </div>
    </section>
  );
}

function ArrowIcon() {
  return (
    <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
      <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ChevronLeft() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
      <path d="m15 18-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ChevronRight() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
      <path d="m9 18 6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
