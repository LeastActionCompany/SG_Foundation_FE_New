import { useState } from "react";
import Reveal from "../Reveal";
import { contactInfo } from "../../data/siteContent";
import { submitContact } from "../../api/api";
import { useToast } from "../ToastProvider";

function getErrorMessage(err, fallback) {
  return err?.response?.data?.error || fallback;
}

const inputClass = "w-full rounded-xl border border-slate-200 bg-white/80 px-4 py-3.5 text-sm text-ink outline-none backdrop-blur-sm transition focus:border-primary focus:bg-white focus:ring-3 focus:ring-primary/10 placeholder-slate-400";

const contactIcons = {
  Phone: (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
  ),
  Email: (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
  ),
  Address: (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
  ),
};

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const toast = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();
    try {
      setSubmitting(true);
      await submitContact({ name, email, message });
      setSubmitted(true);
      form.reset();
      toast.success("Your message has been sent.", "Message sent");
    } catch (err) {
      toast.error(getErrorMessage(err, "We could not send your message."), "Message failed");
    } finally { setSubmitting(false); }
  };

  return (
    <section id="contact" className="relative overflow-hidden py-24 lg:py-32">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-primary/5" />
      <div className="absolute top-0 right-0 h-[600px] w-[600px] rounded-full bg-primary/5 blur-[120px]" />

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-16 lg:grid-cols-2">
          {/* Left */}
          <Reveal direction="left">
            <div className="inline-flex items-center gap-2 mb-5">
              <span className="h-px w-8 bg-gold" />
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary">Contact Us</span>
            </div>

            <h2 className="font-display text-4xl font-bold leading-tight text-ink md:text-5xl">
              Let's start a conversation that{" "}
              <span className="gradient-text">creates impact.</span>
            </h2>

            <p className="mt-5 text-base text-muted md:text-lg leading-8">
              Reach out to partner, volunteer, or sponsor a program. Our team usually responds within 24 hours.
            </p>

            {/* Contact cards */}
            <div className="mt-10 space-y-4">
              {contactInfo.map((item, i) => (
                <Reveal key={item.label} delay={100 + i * 80}>
                  <div className="group flex items-start gap-4 rounded-2xl border border-primary/10 bg-white p-5 shadow-sm transition-all duration-300 hover:border-primary/25 hover:shadow-soft">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/5 text-primary transition group-hover:bg-primary group-hover:text-white">
                      {contactIcons[item.label]}
                    </div>
                    <div className="min-w-0">
                      <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="mt-0.5 block text-sm font-medium text-ink break-all transition-colors hover:text-primary">
                          {item.value}
                        </a>
                      ) : (
                        <p className="mt-0.5 text-sm font-medium text-ink">{item.value}</p>
                      )}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </Reveal>

          {/* Right: Form */}
          <Reveal delay={100} direction="right">
            <div className="overflow-hidden rounded-3xl border border-primary/10 bg-white shadow-[0_30px_80px_rgba(40,60,129,0.12)]">
              {/* Header */}
              <div className="relative overflow-hidden bg-ink px-7 py-6">
                <div className="absolute inset-0 noise-bg" />
                <div className="relative">
                  <h3 className="font-display text-xl font-bold text-white">Send a Message</h3>
                  <p className="mt-1 text-xs text-white/50">We'd love to hear from you</p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="p-7 space-y-5">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted">Name</label>
                    <input className={inputClass} type="text" name="name" placeholder="John Doe" required />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted">Email</label>
                    <input className={inputClass} type="email" name="email" placeholder="john@example.com" required />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted">Message</label>
                  <textarea
                    className={`${inputClass} min-h-[130px] resize-none`}
                    name="message"
                    placeholder="How can we help you?"
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full rounded-xl bg-ink py-4 text-sm font-bold uppercase tracking-widest text-white shadow-lg transition-all duration-300 hover:bg-primary hover:scale-[1.01] hover:shadow-glow active:scale-95 disabled:opacity-70"
                >
                  {submitting ? "Sending..." : "Send Message →"}
                </button>

                {submitted && (
                  <div className="rounded-xl bg-emerald-50 border border-emerald-200 p-3">
                    <p className="text-center text-sm font-medium text-emerald-700">
                      ✓ Message received. We'll be in touch!
                    </p>
                  </div>
                )}
              </form>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
