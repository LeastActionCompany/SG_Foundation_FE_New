import { useEffect, useRef, useState } from "react";

export default function Reveal({
  children,
  className = "",
  delay = 0,
  as: Tag = "div",
  direction = "up",
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(node);
        }
      },
      { threshold: 0.12 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const transforms = {
    up: visible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0",
    down: visible ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0",
    left: visible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0",
    right: visible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0",
    scale: visible ? "scale-100 opacity-100" : "scale-95 opacity-0",
    fade: visible ? "opacity-100" : "opacity-0",
  };

  return (
    <Tag
      ref={ref}
      style={{ transitionDelay: delay ? `${delay}ms` : "0ms" }}
      className={[
        "transition-all duration-700 ease-out motion-reduce:transform-none motion-reduce:transition-none",
        transforms[direction] || transforms.up,
        className,
      ].join(" ")}
    >
      {children}
    </Tag>
  );
}
