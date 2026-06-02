import { cn } from "@/lib/cn";

type Tone = "sale" | "rent" | "neutral" | "accent";

const tones: Record<Tone, string> = {
  sale: "bg-blue-900 text-cream",
  rent: "bg-brown-500 text-cream",
  neutral: "bg-cream/90 text-blue-900 border border-blue-900/10",
  accent: "bg-brown-300/30 text-brown-700",
};

export function Badge({
  tone = "neutral",
  className,
  children,
}: {
  tone?: Tone;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium tracking-wide",
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}
