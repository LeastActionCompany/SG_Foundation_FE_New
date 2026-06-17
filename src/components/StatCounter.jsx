import { useEffect, useRef, useState } from "react";

export default function StatCounter({ value }) {
  const ref = useRef(null);
  const [count, setCount] = useState(value);

  useEffect(() => {
    const node = ref.current;

    if (!node) {
      return undefined;
    }

    let frame = 0;
    let started = false;

    const animate = () => {
      const duration = 2000;
      const start = performance.now();

      const step = (timestamp) => {
        const progress = Math.min((timestamp - start) / duration, 1);
        const eased = 1 - (1 - progress) ** 3;
        setCount(Math.round(value * eased));

        if (progress < 1) {
          frame = requestAnimationFrame(step);
        }
      };

      setCount(0);
      frame = requestAnimationFrame(step);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          started = true;
          animate();
          observer.unobserve(node);
        }
      },
      { threshold: 0.55 }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [value]);

  return <span ref={ref}>{count.toLocaleString("en-IN")}</span>;
}
