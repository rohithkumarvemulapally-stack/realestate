"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { ButtonLink } from "@/components/ui/Button";
import { cn } from "@/lib/cn";

const links = [
  { href: "/properties", label: "Properties" },
  { href: "/about", label: "About" },
  { href: "/about#agents", label: "Agents" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-smooth",
        scrolled
          ? "bg-cream/85 shadow-[0_1px_0_rgba(15,42,71,0.08)] backdrop-blur-md"
          : "bg-transparent",
      )}
    >
      <nav className="container-px flex h-20 items-center justify-between py-4">
        <Link
          href="/"
          className="text-xl font-bold tracking-tightest text-blue-900"
        >
          Meridian<span className="text-brown-500">.</span>
        </Link>

        <ul className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="link-underline text-sm font-medium text-ink/80 transition-colors hover:text-blue-900"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <ButtonLink href="/contact" size="sm" withArrow>
            List your property
          </ButtonLink>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="rounded-full p-2 text-blue-900 lg:hidden"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-t border-blue-900/10 bg-cream lg:hidden"
          >
            <ul className="container-px flex flex-col gap-1 py-4">
              {links.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="block py-3 text-lg font-medium text-blue-900"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
              <li className="pt-3">
                <ButtonLink href="/contact" className="w-full" withArrow>
                  List your property
                </ButtonLink>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
