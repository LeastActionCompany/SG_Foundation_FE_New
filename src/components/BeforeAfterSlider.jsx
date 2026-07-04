import { useState, useRef, useEffect } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { MoveHorizontal } from "lucide-react";

export default function BeforeAfterSlider({ beforeImage, afterImage }) {
  const containerRef = useRef(null);
  const [width, setWidth] = useState(0);
  const x = useMotionValue(0);

  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        const newWidth = containerRef.current.offsetWidth;
        setWidth(newWidth);
        // Center slider initially or maintain proportion
        if (x.get() === 0) {
          x.set(newWidth / 2);
        }
      }
    };
    
    updateWidth();
    // Use a small timeout to ensure DOM is fully rendered
    setTimeout(updateWidth, 100);

    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, [x]);

  const clipPath = useTransform(x, (val) => `inset(0 ${Math.max(0, width - val)}px 0 0)`);

  return (
    <>
      <div className="grid gap-4 md:hidden">
        <div className="relative h-56 overflow-hidden rounded-3xl bg-ink/10 shadow-[0_18px_45px_rgba(40,60,129,0.18)]">
          <img src={beforeImage} alt="Before" className="h-full w-full object-cover" />
          <div className="absolute left-4 top-4 rounded-full bg-ink/50 px-3 py-1 text-xs font-bold text-white backdrop-blur-md">
            Before
          </div>
        </div>

        <div className="relative h-56 overflow-hidden rounded-3xl bg-ink/10 shadow-[0_18px_45px_rgba(40,60,129,0.18)]">
          <img src={afterImage} alt="After" className="h-full w-full object-cover" />
          <div className="absolute left-4 top-4 rounded-full bg-ink/50 px-3 py-1 text-xs font-bold text-white backdrop-blur-md">
            After
          </div>
        </div>
      </div>

      <div ref={containerRef} className="relative hidden w-full h-[480px] overflow-hidden rounded-3xl shadow-[0_30px_80px_rgba(40,60,129,0.2)] select-none bg-ink/10 md:block">
        {/* After Image (Background) */}
        <img src={afterImage} alt="After" className="absolute inset-0 w-full h-full object-cover pointer-events-none" />
        
        {/* Before Image (Foreground, clipped) */}
        <motion.img 
          src={beforeImage} 
          alt="Before" 
          className="absolute inset-0 w-full h-full object-cover pointer-events-none" 
          style={{ clipPath }} 
        />

        <div className="absolute top-4 left-4 rounded-full bg-ink/50 backdrop-blur-md px-3 py-1 text-xs font-bold text-white z-10 pointer-events-none">
          Before
        </div>
        <div className="absolute top-4 right-4 rounded-full bg-ink/50 backdrop-blur-md px-3 py-1 text-xs font-bold text-white z-10 pointer-events-none">
          After
        </div>

        {/* Slider Handle */}
        <motion.div
          className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-20 flex items-center justify-center touch-pan-y"
          style={{ x }}
          drag="x"
          dragConstraints={{ left: 0, right: width }}
          dragElastic={0}
          dragMomentum={false}
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-lg text-primary absolute -left-[20px] transition-transform hover:scale-110 active:scale-95">
            <MoveHorizontal className="h-5 w-5" />
          </div>
        </motion.div>
      </div>
    </>
  );
}
