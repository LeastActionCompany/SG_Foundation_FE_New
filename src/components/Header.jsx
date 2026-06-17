import { useState, useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { navigationLinks } from "../data/siteContent";
import logo from "../assest/logo.jpeg";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const closeMenu = () => setOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <header
        className={`fixed left-0 right-0 z-50 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          scrolled
            ? "top-4 mx-auto w-[95%] max-w-6xl rounded-full bg-white/90 shadow-[0_8px_32px_rgba(0,0,0,0.08)] backdrop-blur-xl border border-white/50 py-2 sm:py-2.5"
            : "top-0 w-full bg-transparent py-5"
        }`}
      >
        <div className={`mx-auto flex w-full items-center justify-between gap-4 transition-all duration-500 ${scrolled ? "px-6 lg:px-8" : "max-w-7xl px-4 sm:px-6 lg:px-8"}`}>
          {/* Logo */}
          <a href="#home" className="flex items-center gap-4 group">
            <div 
              className={`flex items-center justify-center bg-white transition-all duration-500 group-hover:scale-105 shrink-0`}
              style={{
                width: scrolled ? "56px" : "72px",
                height: scrolled ? "56px" : "72px",
                borderRadius: "50%",
                boxShadow: scrolled ? "0 4px 12px rgba(0,0,0,0.08)" : "0 8px 20px rgba(0,0,0,0.12)",
                border: "2px solid rgba(255,255,255,0.8)",
                overflow: "hidden"
              }}
            >
              <img
                src={logo}
                alt="SG Foundation Logo"
                className="h-full w-full object-contain p-1.5"
              />
            </div>
            <div className="leading-tight flex flex-col justify-center">
              <h1 className={`font-bold tracking-wide transition-colors ${scrolled ? "text-ink text-lg" : "text-white text-xl"}`}>
                SG Foundation
              </h1>
              <p className={`hidden text-[11px] font-semibold uppercase tracking-wider transition-colors ${scrolled ? "text-primary/70" : "text-white/70"} sm:block`}>
                Spread Goodness
              </p>
            </div>
          </a>

          {/* Mobile Toggle */}
          <button
            type="button"
            aria-expanded={open}
            onClick={() => setOpen((prev) => !prev)}
            className={`inline-flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-full border transition-all duration-300 lg:hidden ${
              scrolled
                ? "border-primary/10 text-primary hover:bg-primary/5 shadow-sm"
                : "border-white/20 text-white hover:bg-white/10"
            }`}
          >
            <span className={`block h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${open ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`block h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${open ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${open ? "-translate-y-2 -rotate-45" : ""}`} />
          </button>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-8 lg:flex">
            {navigationLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`relative text-sm font-bold tracking-wide transition-all duration-300 py-2 hover:-translate-y-0.5 ${
                  scrolled ? "text-ink/80 hover:text-primary" : "text-white/90 hover:text-white"
                }`}
              >
                {link.label}
                <span className={`absolute bottom-0 left-0 h-[2px] w-0 transition-all duration-300 hover:w-full ${scrolled ? 'bg-primary' : 'bg-gold'}`} style={{ width: '0%' }} onMouseEnter={(e) => e.currentTarget.style.width = '100%'} onMouseLeave={(e) => e.currentTarget.style.width = '0%'} />
              </a>
            ))}

            <a
              href="#donate"
              className={`relative overflow-hidden rounded-full bg-primary px-7 py-2.5 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(40,60,129,0.3)] hover:bg-primary-dark ml-2`}
            >
              <span className="relative z-10">Donate Now</span>
            </a>
          </nav>
        </div>
      </header>

      {/* Mobile Nav Overlay */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-500 lg:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div className="absolute inset-0 bg-ink/60 backdrop-blur-sm" onClick={closeMenu} />
        <div
          className={`absolute right-0 top-0 h-full w-72 bg-white shadow-2xl transition-transform duration-500 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex h-full flex-col p-6 pt-20">
            <nav className="flex flex-col gap-2">
              {navigationLinks.map((link, i) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={closeMenu}
                  style={{ transitionDelay: open ? `${i * 60}ms` : "0ms" }}
                  className={`rounded-xl px-4 py-3.5 text-base font-medium text-ink transition-all duration-300 hover:bg-primary/5 hover:text-primary hover:pl-6 ${
                    open ? "translate-x-0 opacity-100" : "translate-x-4 opacity-0"
                  }`}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#donate"
                onClick={closeMenu}
                className="mt-4 rounded-xl bg-primary px-4 py-3.5 text-center text-base font-semibold text-white shadow-soft transition hover:bg-primary-dark"
              >
                Donate Now
              </a>
            </nav>

            <div className="mt-auto border-t border-primary/10 pt-6">
              <p className="text-xs text-muted">SG Foundation — Spread Goodness</p>
              <p className="mt-1 text-xs text-muted">spreadgoodnessindia@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
