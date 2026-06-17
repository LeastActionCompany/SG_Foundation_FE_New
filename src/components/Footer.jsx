import { useState } from "react";
import { ArrowRight } from "lucide-react";
import confetti from "canvas-confetti";
import Icon from "./Icon";
import { footerLinks } from "../data/siteContent";
import { navigateTo } from "../utils/navigation";
import logo from "../assest/logo.jpeg";
import LAlogo from "../assest/LAlogo.jpg";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.8 },
        colors: ["#283C81", "#E8A838", "#ffffff"]
      });
      setEmail("");
    }
  };
  return (
    <footer className="relative overflow-hidden bg-ink text-white pt-10">
      {/* SVG Wave Divider */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] transform rotate-180">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[calc(100%+1.3px)] h-[50px]">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-surface"></path>
        </svg>
      </div>

      <div className="absolute inset-0 noise-bg mix-blend-overlay" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
      <div className="absolute -top-32 -right-32 h-64 w-64 rounded-full bg-primary/20 blur-[80px]" />
      <div className="absolute -bottom-32 -left-32 h-64 w-64 rounded-full bg-gold/10 blur-[80px]" />

      <div className="relative mx-auto grid w-full max-w-7xl gap-12 px-4 pt-12 pb-8 sm:px-6 md:grid-cols-2 lg:grid-cols-5 lg:px-8">
        <div className="lg:col-span-1">
          <a href="#home" className="group flex items-center gap-3">
            <div className="flex items-center justify-center rounded-2xl bg-white p-1.5 shadow-md ring-1 ring-white/20 transition-transform group-hover:scale-105">
              <img src={logo} alt="SG Foundation Logo" className="h-10 w-auto object-contain" />
            </div>
            <div>
              <h2 className="text-base font-bold">SG Foundation</h2>
              <p className="text-xs text-white/50">Spread Goodness...</p>
            </div>
          </a>

          <p className="mt-5 text-sm leading-7 text-white/50">
            Supporting children, women, families, and differently abled people through impactful and compassionate community initiatives.
          </p>

          <div className="mt-6 flex gap-3">
            {footerLinks.socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/60 transition-all duration-300 hover:-translate-y-1 hover:border-white/0 hover:bg-white hover:text-primary hover:shadow-[0_8px_20px_rgba(255,255,255,0.15)]"
              >
                <Icon name={social.icon} className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-white/40">Quick Links</h3>
          <ul className="space-y-3">
            {footerLinks.quick.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="group flex items-center gap-2 text-sm text-white/60 transition-all hover:text-white">
                  <span className="h-px w-0 bg-gold transition-all duration-300 group-hover:w-4" />
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-white/40">Services</h3>
          <ul className="space-y-3">
            {footerLinks.services.map((link) => (
              <li key={link.label}>
                {link.href.startsWith("/") ? (
                  <button
                    onClick={() => navigateTo(link.href)}
                    className="group flex items-center gap-2 text-sm text-white/60 transition-all hover:text-white"
                  >
                    <span className="h-px w-0 bg-gold transition-all duration-300 group-hover:w-4" />
                    {link.label}
                  </button>
                ) : (
                  <a href={link.href} className="group flex items-center gap-2 text-sm text-white/60 transition-all hover:text-white">
                    <span className="h-px w-0 bg-gold transition-all duration-300 group-hover:w-4" />
                    {link.label}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-2">
          <h3 className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-white/40">Stay Updated</h3>
          <p className="mb-4 text-sm text-white/60">Subscribe to our newsletter to receive updates on our impact and upcoming programs.</p>
          <form onSubmit={handleSubscribe} className="flex gap-2 max-w-sm">
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address" 
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white outline-none transition focus:border-gold focus:bg-white/10" 
              required 
            />
            <button type="submit" className="shrink-0 rounded-xl bg-gold px-4 text-sm font-bold text-ink transition hover:scale-105 hover:shadow-glow-gold">
              Subscribe
            </button>
          </form>

          <div className="mt-8">
            <h3 className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-white/40">Get In Touch</h3>
            <div className="flex flex-col gap-2 text-sm text-white/60 sm:flex-row sm:items-center sm:gap-6">
              <a href="mailto:spreadgoodnessindia@gmail.com" className="transition hover:text-white flex items-center gap-2">
                <Icon name="Mail" className="h-4 w-4" /> spreadgoodnessindia@gmail.com
              </a>
              <a href="tel:+918148118563" className="transition hover:text-white flex items-center gap-2">
                <Icon name="Phone" className="h-4 w-4" /> +91 8148118563
              </a>
            </div>
          </div>
            
          <div className="mt-8 flex items-center gap-4">
            <a
              href="#donate"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-gold px-5 py-3 text-center text-sm font-bold text-ink shadow-[0_4px_20px_rgba(232,168,56,0.3)] transition-all duration-300 hover:scale-105 hover:shadow-glow-gold"
            >
              Donate Now
              <ArrowRight className="h-4 w-4" />
            </a>
            
            <button
              type="button"
              onClick={() => navigateTo("/admin/login")}
              className="rounded-xl border border-white/10 px-5 py-2.5 text-sm font-medium text-white/50 transition hover:bg-white/5 hover:text-white"
            >
              Admin Login
            </button>
          </div>
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 py-6 text-xs text-white/30 sm:flex-row">
          <p>&copy; {new Date().getFullYear()} SG Foundation. All rights reserved.</p>
          <p>
            Designed &amp; Developed by{" "}
            <a
              href="https://www.leastactioncompany.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-medium text-white/50 transition hover:text-white"
            >
              <img src={LAlogo} alt="Least Action Company" className="h-4 w-4 rounded-sm" />
              Least Action Company Pvt Ltd
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
