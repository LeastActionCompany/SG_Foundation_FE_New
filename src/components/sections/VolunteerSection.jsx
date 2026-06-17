import { useState } from "react";
import { Handshake, HeartHandshake, Lightbulb, Sprout } from "lucide-react";
import Reveal from "../Reveal";
import VolunteerModal from "../modals/VolunteerModal";
import { navigateTo } from "../../utils/navigation";

const reasons = [
  { icon: Handshake, text: "Make real community impact" },
  { icon: Sprout, text: "Grow through meaningful service" },
  { icon: Lightbulb, text: "Develop leadership skills" },
  { icon: HeartHandshake, text: "Be part of a caring family" },
];

const avatars = [
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=64&q=80",
  "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=64&q=80",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=64&q=80",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=64&q=80",
];

export default function VolunteerSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="volunteer" className="relative overflow-hidden section">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=1400&q=80"
          alt="Volunteer background"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/90 to-primary-dark/95" />
      </div>

      <div className="absolute -top-32 -right-32 h-64 w-64 rounded-full border border-white/10" />
      <div className="absolute -bottom-20 -left-20 h-48 w-48 rounded-full border border-white/10" />
      <div className="absolute top-1/2 left-1/4 h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-white/[0.03]" />

      <div className="relative mx-auto w-full max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        <Reveal>
          <div className="mb-5 inline-flex items-center justify-center gap-2">
            <span className="h-px w-8 bg-gold" />
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-gold">Volunteer With Us</span>
            <span className="h-px w-8 bg-gold" />
          </div>

          <h2 className="heading-section text-white">
            Join Us &amp; Make a <span className="text-gold">Difference</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-description text-white/80">
            Share your time, skills, and compassion with programs that create immediate support and lasting change.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {reasons.map((reason, i) => {
            const ReasonIcon = reason.icon;
            return (
              <Reveal key={reason.text} delay={100 + i * 80}>
                <div className="flex flex-col items-center gap-4 rounded-[24px] border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all hover:-translate-y-2 hover:bg-white/10">
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-gold ring-1 ring-white/10">
                    <ReasonIcon className="h-6 w-6" />
                  </span>
                  <span className="text-sm font-medium leading-relaxed text-white/90">{reason.text}</span>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={400}>
          <div className="mt-16 flex flex-col items-center justify-center">


            {/* Live Community Avatars */}
            <div className="mt-8 flex items-center gap-4 bg-white/5 border border-white/10 rounded-full p-2 pr-6 backdrop-blur-sm">
              <div className="flex -space-x-3">
                {avatars.map((avatar, i) => (
                  <img key={i} src={avatar} alt="Volunteer Avatar" className="w-10 h-10 rounded-full border-2 border-primary object-cover relative z-0 hover:z-20 transition-transform hover:scale-110" />
                ))}
                <div className="w-10 h-10 rounded-full border-2 border-primary bg-gold flex items-center justify-center text-ink text-[10px] font-bold z-10 relative">
                  200+
                </div>
              </div>
              <div className="text-left hidden sm:block">
                <p className="text-sm font-bold text-white leading-tight">Join our community</p>
                <p className="text-[10px] text-white/70 uppercase tracking-wider">Make a real impact today</p>
              </div>
            </div>

            <button
              onClick={() => setIsModalOpen(true)}
              className="btn-primary bg-white text-primary hover:bg-slate-50 text-lg px-10 py-5 shadow-glow mt-8 w-full sm:w-auto"
            >
              Become a Volunteer
            </button>

            <button
              onClick={() => navigateTo("/volunteer-support")}
              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-white/70 transition-all hover:text-white hover:gap-3"
            >
              Explore Volunteer Programs
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </Reveal>
      </div>

      <VolunteerModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}
