import Link from "next/link";
import { cn } from "@/lib/cn";

/**
 * Brand mark — a compass / meridian star (a nod to navigation and to the
 * company name) inside a faint ring. Filled badge so it reads on both cream
 * and navy backgrounds.
 */
function MeridianMark({ variant }: { variant: "dark" | "light" }) {
  const accent = variant === "light" ? "#FAF7F2" : "#C4A688";
  return (
    <span
      className={cn(
        "relative flex h-10 w-10 items-center justify-center rounded-xl shadow-sm ring-1 transition-transform duration-500 ease-smooth group-hover:rotate-[30deg]",
        variant === "light"
          ? "bg-brown-500 ring-white/10"
          : "bg-blue-900 ring-blue-900/20",
      )}
    >
      <svg viewBox="0 0 24 24" className="h-[22px] w-[22px]" aria-hidden>
        <circle
          cx="12"
          cy="12"
          r="9"
          fill="none"
          stroke={accent}
          strokeWidth="0.9"
          opacity="0.45"
        />
        {/* cardinal compass star */}
        <path
          d="M12 2.5 L13.5 10.5 L21.5 12 L13.5 13.5 L12 21.5 L10.5 13.5 L2.5 12 L10.5 10.5 Z"
          fill={accent}
        />
        {/* diagonal accents */}
        <path
          d="M12 6.5 L12.7 11.3 L17.5 12 L12.7 12.7 L12 17.5 L11.3 12.7 L6.5 12 L11.3 11.3 Z"
          fill={accent}
          opacity="0.35"
          transform="rotate(45 12 12)"
        />
      </svg>
    </span>
  );
}

export function Logo({
  variant = "dark",
  className,
}: {
  variant?: "dark" | "light";
  className?: string;
}) {
  return (
    <Link
      href="/"
      aria-label="Meridian Estates — home"
      className={cn("group inline-flex items-center gap-2.5", className)}
    >
      <MeridianMark variant={variant} />
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "text-xl font-bold tracking-tightest",
            variant === "light" ? "text-cream" : "text-blue-900",
          )}
        >
          Meridian
          <span className={variant === "light" ? "text-brown-300" : "text-brown-500"}>
            .
          </span>
        </span>
        <span
          className={cn(
            "mt-0.5 text-[10px] font-semibold uppercase tracking-[0.35em]",
            variant === "light" ? "text-brown-300/90" : "text-brown-500/90",
          )}
        >
          Estates
        </span>
      </span>
    </Link>
  );
}
