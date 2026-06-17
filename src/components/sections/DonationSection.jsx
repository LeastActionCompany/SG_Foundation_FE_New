import { useState } from "react";
import { BadgeIndianRupee, Globe2, ShieldCheck, Heart } from "lucide-react";
import Reveal from "../Reveal";
import DonationModal from "../modals/DonationModal";

const trustSignals = [
  {
    icon: ShieldCheck,
    title: "Secure & Encrypted",
    desc: "256-bit SSL protected payments",
  },
  {
    icon: BadgeIndianRupee,
    title: "Tax Deductible",
    desc: "Eligible under 80G exemption",
  },
  {
    icon: Globe2,
    title: "Direct Impact",
    desc: "100% of donation funds programs",
  },
];

const recentDonations = [
  "Someone just donated ₹1,000 to Education",
  "Anonymous contributed ₹500 for Healthcare",
  "A supporter donated ₹5,000 for Women Empowerment",
  "Someone just donated ₹2,000 for Meals",
  "Anonymous contributed ₹1,000 to Volunteer Support",
];

export default function DonationSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="donate" className="relative overflow-hidden section bg-surface">
      <div className="absolute right-0 top-0 h-[800px] w-[800px] rounded-full bg-gold/5 blur-[120px]" />
      <div className="absolute bottom-0 left-0 h-[600px] w-[600px] rounded-full bg-primary/5 blur-[120px]" />

      <div className="relative mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        <Reveal>
          <div className="mb-5 inline-flex items-center justify-center gap-2">
            <span className="h-px w-8 bg-gold" />
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary">Support Our Cause</span>
            <span className="h-px w-8 bg-gold" />
          </div>

          <h2 className="heading-section text-ink">
            Your support brings <span className="gradient-text">dignity</span> to lives.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-description">
            Choose a cause and an amount. We&apos;ve simplified our process so you can make an impact in under a minute. Every contribution goes directly to the field.
          </p>
        </Reveal>

        <Reveal delay={200}>
          <div className="mt-16 flex flex-col items-center justify-center">
            <button
              onClick={() => setIsModalOpen(true)}
              className="btn-primary text-lg px-12 py-5 shadow-glow"
            >
              <Heart className="mr-3 h-5 w-5" />
              Donate Now
            </button>
          </div>
        </Reveal>

        {/* Live Donor Ticker */}
        <Reveal delay={300} className="mt-16 w-full overflow-hidden bg-white/50 backdrop-blur-md py-3 border-y border-primary/10 rounded-2xl shadow-sm">
          <div className="flex animate-marquee gap-12 whitespace-nowrap">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex gap-12">
                {recentDonations.map((text, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sm font-medium text-ink/70">
                    <span className="flex h-2 w-2 rounded-full bg-gold animate-pulse" />
                    {text}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </Reveal>

        <div className="mt-20 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {trustSignals.map((item, i) => {
            const TrustIcon = item.icon;
            return (
              <Reveal key={item.title} delay={300 + i * 100}>
                <div className="flex flex-col items-center gap-4 rounded-[24px] border border-primary/10 bg-white p-8 shadow-sm transition-all hover:-translate-y-2 hover:shadow-soft">
                  <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/5 text-primary">
                    <TrustIcon className="h-7 w-7" />
                  </span>
                  <div className="text-center">
                    <div className="card-title text-ink">{item.title}</div>
                    <div className="mt-2 text-sm text-muted">{item.desc}</div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>

      <DonationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}
