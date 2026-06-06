import { ArrowRight } from "lucide-react";
import Icon from "./Icon";
import { footerLinks } from "../data/siteContent";
import { navigateTo } from "../utils/navigation";
import logo from "../assest/logo.jpeg";
import LAlogo from "../assest/LAlogo.jpg";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink text-white">
      <div className="absolute inset-0 noise-bg" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
      <div className="absolute -top-32 -right-32 h-64 w-64 rounded-full bg-primary/20 blur-[80px]" />
      <div className="absolute -bottom-32 -left-32 h-64 w-64 rounded-full bg-gold/10 blur-[80px]" />

      <div className="relative mx-auto grid w-full max-w-7xl gap-12 px-4 pt-16 pb-8 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
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
                <a href={link.href} className="group flex items-center gap-2 text-sm text-white/60 transition-all hover:text-white">
                  <span className="h-px w-0 bg-gold transition-all duration-300 group-hover:w-4" />
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-white/40">Get In Touch</h3>

          <div className="space-y-3 text-sm text-white/60">
            <div>
              <p className="mb-1 text-[10px] uppercase tracking-wider text-white/30">Email</p>
              <a href="mailto:spreadgoodnessindia@gmail.com" className="break-all transition hover:text-white">
                spreadgoodnessindia@gmail.com
              </a>
            </div>
            <div>
              <p className="mb-1 text-[10px] uppercase tracking-wider text-white/30">Phone</p>
              <a href="tel:+918189968881" className="transition hover:text-white">
                +91 8189968881
              </a>
            </div>
          </div>

          <a
            href="#donate"
            className="mt-6 inline-flex items-center justify-center gap-2 rounded-xl bg-gold px-5 py-3 text-center text-sm font-bold text-ink shadow-[0_4px_20px_rgba(232,168,56,0.3)] transition-all duration-300 hover:scale-105 hover:shadow-glow-gold"
          >
            Donate Now
            <ArrowRight className="h-4 w-4" />
          </a>

          <button
            type="button"
            onClick={() => navigateTo("/admin/login")}
            className="mt-3 w-full rounded-xl border border-white/10 px-5 py-2.5 text-sm font-medium text-white/50 transition hover:bg-white/5 hover:text-white"
          >
            Admin Login
          </button>
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
