import { useState, useEffect } from "react";
import Reveal from "../Reveal";

const words = ["Lives.", "Futures.", "Communities.", "Tomorrow."];

export default function HeroSection() {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (subIndex === words[index].length + 1 && !reverse) {
      const timer = setTimeout(() => setReverse(true), 2000);
      return () => clearTimeout(timer);
    }
    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }
    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? 40 : 100);
    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  return (
    <section
      id="home"
      className="relative flex min-h-[90vh] items-center overflow-hidden bg-ink"
    >
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover opacity-60"
        src="https://assets.mixkit.co/videos/preview/mixkit-holding-hands-and-walking-in-the-park-3136-large.mp4"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/60 via-ink/40 to-ink/80" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_30%)]" />
      <div className="relative mx-auto flex w-full max-w-7xl justify-center px-4 py-12 md:py-16 lg:py-20 text-center sm:px-6 lg:px-8">
        <div className="max-w-4xl text-white">
          <Reveal className="mx-auto max-w-fit">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.24em] text-white/80">
              SG Foundation
            </p>
          </Reveal>

          <Reveal as="h1" delay={100} className="heading-hero">
            Building Hope. <br className="hidden sm:block" />
            Changing <span className="text-gold">{words[index].substring(0, subIndex)}</span>
          </Reveal>

          <Reveal
            as="p"
            delay={200}
            className="mx-auto mt-6 max-w-2xl text-description text-white/90"
          >
            Empowering communities through education, healthcare, and support for
            those in need.
          </Reveal>

          <Reveal
            delay={300}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <a href="#donate" className="btn-primary">
              Donate Now
            </a>
            <a href="#volunteer" className="btn-secondary">
              Become Volunteer
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
