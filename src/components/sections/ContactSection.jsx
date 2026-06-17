import { useState } from "react";
import Reveal from "../Reveal";
import { contactInfo } from "../../data/siteContent";
import ContactModal from "../modals/ContactModal";
import TiltCard from "../TiltCard";

const contactIcons = {
  Phone: (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
  ),
  Email: (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
  ),
  Address: (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
  ),
};

export default function ContactSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="contact" className="relative overflow-hidden section">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-primary/5" />
      <div className="absolute top-0 right-0 h-[600px] w-[600px] rounded-full bg-primary/5 blur-[120px]" />

      <div className="relative mx-auto w-full max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        <Reveal>
          <div className="mb-5 inline-flex items-center justify-center gap-2">
            <span className="h-px w-8 bg-gold" />
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary">Contact Us</span>
            <span className="h-px w-8 bg-gold" />
          </div>

          <h2 className="heading-section text-ink">
            Let's start a conversation that <span className="gradient-text">creates impact.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-description">
            Reach out to partner, volunteer, or sponsor a program. Our team usually responds within 24 hours.
          </p>
        </Reveal>

        <Reveal delay={200}>
          <div className="mt-12 flex justify-center">
            <button
              onClick={() => setIsModalOpen(true)}
              className="btn-primary px-10 py-5 text-lg shadow-glow"
            >
              Send Message
            </button>
          </div>
        </Reveal>

        <div className="mt-20 grid gap-6 sm:grid-cols-3 perspective-[1000px]">
          {contactInfo.map((item, i) => (
            <Reveal key={item.label} delay={300 + i * 100}>
              <TiltCard>
                <div className="group flex flex-col items-center gap-4 rounded-[24px] border border-primary/10 bg-white p-8 shadow-sm transition-all duration-300 hover:border-primary/25 hover:shadow-soft">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/5 text-primary transition-all group-hover:bg-primary group-hover:text-white">
                    {contactIcons[item.label]}
                  </div>
                  <div className="text-center">
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="mt-2 block text-base font-semibold text-ink break-all transition-colors hover:text-primary">
                        {item.value}
                      </a>
                    ) : (
                      <p className="mt-2 text-base font-semibold text-ink">{item.value}</p>
                    )}
                  </div>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>

      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}
