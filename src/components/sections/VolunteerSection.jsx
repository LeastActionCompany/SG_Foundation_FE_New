import { useState } from "react";
import { Handshake, HeartHandshake, Lightbulb, Sprout } from "lucide-react";
import Reveal from "../Reveal";
import { submitVolunteer } from "../../api/api";
import { useToast } from "../ToastProvider";

const inputClass = "w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3.5 text-sm text-white placeholder-white/40 outline-none backdrop-blur-sm transition focus:border-white/50 focus:bg-white/15 focus:ring-2 focus:ring-white/20";

const reasons = [
  { icon: Handshake, text: "Make real community impact" },
  { icon: Sprout, text: "Grow through meaningful service" },
  { icon: Lightbulb, text: "Develop leadership skills" },
  { icon: HeartHandshake, text: "Be part of a caring family" },
];

export default function VolunteerSection() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const toast = useToast();
   
   const handleSubmit = async (e) => {
     e.preventDefault();
   
     const form = e.currentTarget;
     const name = form.name.value.trim();
     const email = form.email.value.trim();
     const phone = form.phone.value.trim();
   
     // Indian mobile validation
     const phoneRegex = /^[6-9]\d{9}$/;
     const cleanedPhone = phone.replace(/\D/g, "");
   
     if (!phoneRegex.test(cleanedPhone)) {
       toast.error(
         "Please enter a valid 10-digit mobile number.",
         "Invalid Phone Number"
       );
       return;
     }
   
     try {
       setSubmitting(true);
   
       await submitVolunteer({
         name,
         email,
         phone: cleanedPhone,
       });
   
       setSubmitted(true);
       form.reset();
   
       toast.success(
         "Your volunteer request has been submitted. We will contact you soon.",
         "Registration sent"
       );
     } catch (err) {
       toast.error(
         err?.response?.data?.error ||
           "We could not submit your volunteer request.",
         "Registration failed"
       );
     } finally {
       setSubmitting(false);
     }
   };

  return (
    <section id="volunteer" className="relative overflow-hidden py-24 lg:py-32">
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

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal direction="left">
            <div className="mb-5 inline-flex items-center gap-2">
              <span className="h-px w-8 bg-gold" />
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-gold">Volunteer With Us</span>
            </div>

            <h2 className="font-display text-4xl font-bold leading-tight text-white md:text-5xl">
              Join Us &amp; Make a <span className="text-gold">Difference</span>
            </h2>

            <p className="mt-5 max-w-xl text-base leading-8 text-white/70 md:text-lg">
              Share your time, skills, and compassion with programs that create immediate support and lasting change.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-4">
              {reasons.map((reason, i) => {
                const ReasonIcon = reason.icon;

                return (
                  <Reveal key={reason.text} delay={100 + i * 80} direction="left">
                    <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm transition hover:bg-white/10">
                      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-gold ring-1 ring-white/10">
                        <ReasonIcon className="h-5 w-5" />
                      </span>
                      <span className="text-sm font-medium text-white/80">{reason.text}</span>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </Reveal>

          <Reveal delay={150} direction="right">
            <div className="overflow-hidden rounded-3xl border border-white/15 bg-white/10 shadow-[0_30px_80px_rgba(0,0,0,0.3)] backdrop-blur-xl">
              <div className="border-b border-white/10 px-7 py-6">
                <h3 className="font-display text-xl font-bold text-white">Join the Mission</h3>
                <p className="mt-1 text-sm text-white/50">Fill in your details to start your volunteering journey.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5 p-7">
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/50">Full Name</label>
                  <input className={inputClass} type="text" name="name" placeholder="e.g. Rahul Sharma" required />
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/50">Email Address</label>
                    <input className={inputClass} type="email" name="email" placeholder="rahul@example.com" required />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/50">Phone Number</label>
                    <input
                      className={inputClass}
                      type="tel"
                      name="phone"
                      placeholder="9876543210"
                      maxLength={10}
                      onInput={(e) => {
                        e.target.value = e.target.value.replace(/\D/g, "").slice(0, 10);
                      }}
                      required
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="mt-2 w-full rounded-xl bg-white py-4 text-sm font-bold uppercase tracking-widest text-primary shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-xl active:scale-95 disabled:opacity-70"
                >
                  {submitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="h-4 w-4 animate-spin" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Processing...
                    </span>
                  ) : "Become a Volunteer"}
                </button>

                {submitted && (
                  <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/20 p-3">
                    <p className="text-center text-sm font-medium text-emerald-300">
                      Request received! We&apos;ll reach out shortly.
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
