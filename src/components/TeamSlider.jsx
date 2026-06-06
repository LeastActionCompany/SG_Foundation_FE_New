import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import TeamCard from "./TeamCard";
import TeamModal from "./TeamModal";
import { teamData } from "../data/teamData";

const sliderVariants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1, y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], staggerChildren: 0.08 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

function ArrowButton({ direction, onClick, label }) {
  const isPrev = direction === "prev";
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-primary/20 bg-white text-primary transition-all duration-200 hover:bg-primary hover:text-white hover:border-primary hover:shadow-soft active:scale-95"
    >
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
        {isPrev ? <path d="M15 18l-6-6 6-6" /> : <path d="M9 18l6-6-6-6" />}
      </svg>
    </button>
  );
}

export default function TeamSlider() {
  const [active, setActive] = useState(0);
  const [selected, setSelected] = useState(null);
  const sliderRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActive((prev) => (prev + 1) % teamData.length);
    }, 3200);
    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    const container = sliderRef.current;
    const card = cardRefs.current[active];
    if (!container || !card) return;
    const containerWidth = container.clientWidth;
    const nextLeft = card.offsetLeft - (containerWidth / 2 - card.clientWidth / 2);
    container.scrollTo({ left: Math.max(0, nextLeft), behavior: "smooth" });
  }, [active]);

  const showPrev = () => setActive((prev) => (prev - 1 + teamData.length) % teamData.length);
  const showNext = () => setActive((prev) => (prev + 1) % teamData.length);

  return (
    <>
      <motion.div
        variants={sliderVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className={`
        group relative will-change-transform
        cursor-pointer overflow-hidden
        rounded-[28px]
        border border-white/20
        bg-white/70 backdrop-blur-xl
        transition-all duration-500
        `}
      >
        <div className="mb-8 flex items-end justify-between gap-4">
          <div className="max-w-md">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold">Leadership Spotlight</p>
            <h3 className="mt-2 font-display text-2xl font-bold text-ink">
              Guided by experience and empathy.
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              Meet the people guiding strategy, care, and community outcomes.
            </p>
          </div>
          <div className="hidden items-center gap-2 sm:flex">
            <ArrowButton direction="prev" onClick={showPrev} label="Previous" />
            <ArrowButton direction="next" onClick={showNext} label="Next" />
          </div>
        </div>

        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 hidden w-16 bg-gradient-to-r from-white to-transparent lg:block" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 hidden w-16 bg-gradient-to-l from-white to-transparent lg:block" />

        <div ref={sliderRef} className="scrollbar-hidden overflow-x-auto overflow-y-visible">
          <motion.div
            className="flex gap-6 pb-10 px-2"
            drag="x"
            dragConstraints={{ left: -300, right: 300 }}
            whileTap={{ cursor: "grabbing" }}
          >
            {teamData.map((member, index) => (
              <motion.div
                key={member.name}
                variants={cardVariants}
                ref={(node) => { cardRefs.current[index] = node; }}
                className="
                w-[240px] shrink-0
                sm:w-[260px]
                lg:w-[280px]
                transition-all duration-500
                hover:z-30
                "
              >
                <TeamCard member={member} isActive={index === active} onClick={() => setSelected(member)} onMouseEnter={() => setActive(index)} />
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className="mt-8 flex items-center justify-between border-t border-slate-100 pt-6 sm:justify-center">
          <div className="flex items-center gap-2">
            {teamData.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setActive(index)}
                className={`h-1.5 rounded-full transition-all duration-300 ${index === active ? "w-8 bg-primary" : "w-1.5 bg-primary/20 hover:bg-primary/40"}`}
              />
            ))}
          </div>
          <div className="flex items-center gap-2 sm:hidden">
            <ArrowButton direction="prev" onClick={showPrev} />
            <ArrowButton direction="next" onClick={showNext} />
          </div>
        </div>
      </motion.div>

      {/* <AnimatePresence>
        {selected && <TeamModal member={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence> */}
    </>
  );
}
