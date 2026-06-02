"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "light" | "outline" | "ghost";
type Size = "sm" | "md" | "lg";

const base =
  "group relative inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-tight transition-all duration-300 ease-smooth focus-visible:outline-offset-4 disabled:opacity-50 disabled:pointer-events-none";

const variants: Record<Variant, string> = {
  primary: "bg-brown-500 text-cream hover:bg-brown-700",
  light: "bg-white text-blue-900 hover:bg-cream",
  outline:
    "border border-brown-500/40 text-ink hover:border-brown-500 hover:bg-brown-500 hover:text-cream",
  ghost: "text-ink hover:text-brown-500",
};

const sizes: Record<Size, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

interface CommonProps {
  variant?: Variant;
  size?: Size;
  className?: string;
  withArrow?: boolean;
  children: React.ReactNode;
}

function Inner({
  withArrow,
  children,
}: {
  withArrow?: boolean;
  children: React.ReactNode;
}) {
  return (
    <>
      <span>{children}</span>
      {withArrow && (
        <ArrowUpRight
          size={18}
          className="transition-transform duration-300 ease-smooth group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      )}
    </>
  );
}

export function Button({
  variant = "primary",
  size = "md",
  className,
  withArrow,
  children,
  ...props
}: CommonProps & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={cn(base, variants[variant], sizes[size], className)}
      {...props}
    >
      <Inner withArrow={withArrow}>{children}</Inner>
    </button>
  );
}

export function ButtonLink({
  variant = "primary",
  size = "md",
  className,
  withArrow,
  href,
  children,
}: CommonProps & { href: string }) {
  return (
    <Link
      href={href}
      className={cn(base, variants[variant], sizes[size], className)}
    >
      <Inner withArrow={withArrow}>{children}</Inner>
    </Link>
  );
}
