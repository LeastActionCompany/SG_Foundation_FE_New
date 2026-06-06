import { useState, useEffect } from "react";
import { navigationLinks } from "../data/siteContent";
import logo from "../assest/logo.jpeg";
import { navigateTo } from "../utils/navigation";

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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/95 shadow-[0_4px_30px_rgba(40,60,129,0.12)] backdrop-blur-2xl py-0"
            : "bg-transparent py-2"
        }`}
      >
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="flex items-center justify-center rounded-2xl bg-white p-1.5 shadow-md ring-1 ring-primary/10 transition-transform group-hover:scale-105">
              <img
                src={logo}
                alt="SG Foundation Logo"
                className="h-12 w-auto object-contain sm:h-14"
              />
            </div>
            <div className="leading-tight">
              <h1 className={`text-lg font-bold tracking-wide transition-colors ${scrolled ? "text-ink" : "text-white"} sm:text-xl`}>
                SG Foundation
              </h1>
              <p className={`hidden text-xs font-medium transition-colors ${scrolled ? "text-muted" : "text-white/70"} sm:block`}>
                Spread Goodness...
              </p>
            </div>
          </a>

          {/* Mobile Toggle */}
          <button
            type="button"
            aria-expanded={open}
            onClick={() => setOpen((prev) => !prev)}
            className={`inline-flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-xl border transition-all duration-300 lg:hidden ${
              scrolled
                ? "border-primary/20 text-primary hover:bg-primary/5"
                : "border-white/30 text-white hover:bg-white/10"
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
                className={`relative text-sm font-medium transition-all duration-200 after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-gold after:transition-all after:duration-300 hover:after:w-full ${
                  scrolled ? "text-ink hover:text-primary" : "text-white/90 hover:text-white"
                }`}
              >
                {link.label}
              </a>
            ))}

            <a
              href="#donate"
              className="relative overflow-hidden rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-[0_4px_20px_rgba(40,60,129,0.35)] transition-all duration-300 hover:scale-105 hover:shadow-[0_8px_30px_rgba(40,60,129,0.45)] before:absolute before:inset-0 before:bg-gradient-to-r before:from-primary-light before:to-primary before:opacity-0 before:transition-opacity hover:before:opacity-100"
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
