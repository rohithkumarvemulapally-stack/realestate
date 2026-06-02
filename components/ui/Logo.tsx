import Link from "next/link";
import { cn } from "@/lib/cn";

/**
 * Brand mark — a stylised globe/meridian (longitude line), nodding to the
 * company name. Filled badge so it reads on both cream and navy backgrounds.
 */
function MeridianMark({ variant }: { variant: "dark" | "light" }) {
  return (
    <span
      className={cn(
        "relative flex h-9 w-9 items-center justify-center rounded-xl shadow-sm transition-transform duration-500 ease-smooth group-hover:-rotate-6",
        variant === "light" ? "bg-brown-500" : "bg-blue-900",
      )}
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        strokeWidth="1.6"
        strokeLinecap="round"
        className={cn(
          "h-5 w-5",
          variant === "light" ? "stroke-cream" : "stroke-brown-300",
        )}
        aria-hidden
      >
        <circle cx="12" cy="12" r="8.5" />
        <ellipse cx="12" cy="12" rx="3.6" ry="8.5" />
        <line x1="3.5" y1="12" x2="20.5" y2="12" />
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
