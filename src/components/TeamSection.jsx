import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";
import TeamSlider from "./TeamSlider";

export default function TeamSection() {
  return (
    <section id="team" className="relative overflow-hidden py-24 lg:py-32">
      <div className="absolute inset-0 bg-white" />
      <div className="absolute top-1/2 right-0 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-primary/5 blur-[120px]" />

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          kicker="Our Team"
          title="Meet the people guiding every step of the mission."
          description="A committed leadership team shaping programs, partnerships, and care with clarity, consistency, and heart."
          centered
        />

        <Reveal delay={100}>
          <TeamSlider />
        </Reveal>
      </div>
    </section>
  );
}
