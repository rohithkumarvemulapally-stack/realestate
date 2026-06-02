"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";

/**
 * Minimal custom cursor that scales over interactive elements.
 * Renders nothing on touch / coarse-pointer devices or under reduced motion.
 */
export default function CustomCursor() {
  const reduce = useReducedMotion();
  const [enabled, setEnabled] = useState(false);
  const [active, setActive] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 500, damping: 40, mass: 0.5 });
  const springY = useSpring(y, { stiffness: 500, damping: 40, mass: 0.5 });

  useEffect(() => {
    if (reduce) return;
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (!fine) return;

    setEnabled(true);
    document.documentElement.classList.add("cursor-enabled");

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const el = e.target as HTMLElement;
      setActive(
        !!el.closest("a, button, input, select, textarea, [data-cursor]"),
      );
    };

    window.addEventListener("mousemove", move);
    return () => {
      window.removeEventListener("mousemove", move);
      document.documentElement.classList.remove("cursor-enabled");
    };
  }, [reduce, x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[100] hidden md:block"
      style={{ x: springX, y: springY }}
    >
      <motion.div
        className="-translate-x-1/2 -translate-y-1/2 rounded-full border border-brown-500 bg-brown-500/10 backdrop-invert-0"
        animate={{
          width: active ? 48 : 18,
          height: active ? 48 : 18,
          opacity: active ? 1 : 0.8,
        }}
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
      />
    </motion.div>
  );
}
