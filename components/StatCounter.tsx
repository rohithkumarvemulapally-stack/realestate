"use client";

import { useEffect, useRef, useState } from "react";
import {
  useInView,
  useMotionValue,
  animate,
  useReducedMotion,
} from "framer-motion";

/**
 * Counts up from 0 to `value` when scrolled into view.
 */
export default function StatCounter({
  value,
  suffix = "",
  prefix = "",
  duration = 1.8,
}: {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduce = useReducedMotion();
  const motion = useMotionValue(0);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (reduce) {
      setDisplay(value);
      return;
    }
    const controls = animate(motion, value, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, reduce, value, duration, motion]);

  return (
    <span ref={ref}>
      {prefix}
      {display.toLocaleString("en-IN")}
      {suffix}
    </span>
  );
}
