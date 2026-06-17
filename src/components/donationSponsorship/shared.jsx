import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

export function Counter({ value, suffix = "+", duration = 2200 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = value / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, value, duration]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export function Reveal({ children, delay = 0, y = 28, className = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
        delay: delay / 1000,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function ImgBox({ src, alt, label, className = "", style = {}, children }) {
  return (
    <div
      className={`relative overflow-hidden bg-gray-50 flex items-center justify-center border-2 border-dashed border-gray-300 ${className}`}
      style={style}
    >
      {src ? (
        <img src={src} alt={alt} className="h-full w-full object-cover" />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center p-4 text-center">
          <span className="text-xs font-semibold text-gray-500 bg-white/90 px-3 py-1.5 rounded-full shadow-sm">
            {label}
          </span>
        </div>
      )}
      {children}
    </div>
  );
}
