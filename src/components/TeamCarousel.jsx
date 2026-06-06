import { useEffect, useRef } from "react";
import TeamCard from "./TeamCard";
import { teamData } from "../data/teamData";

export default function TeamCarousel() {
  const scrollRef = useRef();

  useEffect(() => {
    const scrollContainer = scrollRef.current;

    let scrollAmount = 0;

    const autoScroll = () => {
      if (scrollContainer) {
        scrollAmount += 0.5;
        scrollContainer.scrollLeft = scrollAmount;

        if (scrollAmount >= scrollContainer.scrollWidth / 2) {
          scrollAmount = 0;
        }
      }
    };

    const interval = setInterval(autoScroll, 20);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="overflow-hidden">
      <div
        ref={scrollRef}
        className="flex gap-6 w-max"
      >
        {[...teamData, ...teamData].map((member, i) => (
          <TeamCard key={i} member={member} />
        ))}
      </div>
    </div>
  );
}