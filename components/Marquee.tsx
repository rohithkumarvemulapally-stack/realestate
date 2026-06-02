"use client";

import { useReducedMotion } from "framer-motion";
import { cn } from "@/lib/cn";

/**
 * Infinite horizontal marquee. Duplicates its items so the loop is seamless.
 * Pauses under reduced motion (items remain visible, static).
 */
export default function Marquee({
  items,
  className,
}: {
  items: string[];
  className?: string;
}) {
  const reduce = useReducedMotion();
  const sequence = [...items, ...items];

  return (
    <div
      className={cn("relative flex w-full overflow-hidden", className)}
      aria-hidden
    >
      <div
        className={cn(
          "flex min-w-full shrink-0 items-center gap-12 pr-12",
          !reduce && "animate-marquee",
          reduce && "flex-wrap justify-center",
        )}
      >
        {sequence.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex items-center gap-12 whitespace-nowrap text-2xl font-bold tracking-editorial text-cream/70 sm:text-3xl"
          >
            {item}
            <span className="text-brown-300">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
