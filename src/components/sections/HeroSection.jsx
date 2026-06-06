import Reveal from "../Reveal";

const primaryButtonClass =
  "inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3.5 text-sm font-semibold text-white shadow-soft transition duration-200 hover:scale-[1.01] hover:bg-primary-dark";

const secondaryButtonClass =
  "inline-flex items-center justify-center rounded-lg border border-white/70 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white transition duration-200 hover:scale-[1.01] hover:bg-white/15";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex min-h-[82vh] items-center overflow-hidden bg-hero-overlay bg-cover bg-center"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_30%)]" />
      <div className="relative mx-auto flex w-full max-w-7xl justify-center px-4 py-24 text-center sm:px-6 lg:px-8">
        <div className="max-w-4xl text-white">
          <Reveal className="mx-auto max-w-fit">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.24em] text-white/80">
              SG Foundation
            </p>
          </Reveal>

          <Reveal as="h1" delay={100} className="text-5xl font-semibold tracking-normal md:text-7xl">
            Building Hope. Changing Lives.
          </Reveal>

          <Reveal
            as="p"
            delay={200}
            className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/84 md:text-xl"
          >
            Empowering communities through education, healthcare, and support for
            those in need.
          </Reveal>

          <Reveal
            delay={300}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <a href="#donate" className={primaryButtonClass}>
              Donate Now
            </a>
            <a href="#volunteer" className={secondaryButtonClass}>
              Become Volunteer
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
