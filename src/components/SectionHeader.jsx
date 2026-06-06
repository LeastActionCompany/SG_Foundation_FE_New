import Reveal from "./Reveal";

export default function SectionHeader({ kicker, title, description, centered = false, light = false }) {
  return (
    <div className={`mb-14 max-w-3xl ${centered ? "mx-auto text-center" : ""}`}>
      <Reveal>
        <div className="inline-flex items-center gap-2 mb-4">
          <span className="h-px w-8 bg-gold" />
          <span className={`text-xs font-bold uppercase tracking-[0.25em] ${light ? "text-gold" : "text-primary"}`}>
            {kicker}
          </span>
          <span className="h-px w-8 bg-gold" />
        </div>
      </Reveal>
      <Reveal delay={100}>
        <h2 className={`font-display text-3xl font-bold leading-tight md:text-4xl lg:text-5xl ${light ? "text-white" : "text-ink"}`}>
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={200}>
          <p className={`mt-5 text-base leading-8 md:text-lg ${light ? "text-white/70" : "text-muted"}`}>
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
