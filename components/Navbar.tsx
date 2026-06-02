"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { ButtonLink } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";
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

  // The homepage hero is dark; the transparent nav sits over it until the
  // user scrolls. Use a light treatment there so the brand stays legible.
  const overHero = pathname === "/" && !scrolled;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-smooth",
        scrolled
          ? "border-b border-blue-900/10 bg-cream/80 shadow-[0_8px_30px_-18px_rgba(15,42,71,0.35)] backdrop-blur-xl"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <nav className="container-px flex h-20 items-center justify-between py-4">
        <Logo variant={overHero ? "light" : "dark"} />

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => {
            const active =
              l.href === pathname ||
              (l.href !== "/" && pathname.startsWith(l.href.split("#")[0]));
            return (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className={cn(
                    "rounded-full px-4 py-2 text-sm font-medium transition-colors duration-300",
                    overHero
                      ? active
                        ? "bg-cream/15 text-cream"
                        : "text-cream/80 hover:bg-cream/10 hover:text-cream"
                      : active
                        ? "bg-blue-900/5 text-blue-900"
                        : "text-ink/70 hover:bg-blue-900/5 hover:text-blue-900",
                  )}
                >
                  {l.label}
                </Link>
              </li>
            );
          })}
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
          className={cn(
            "rounded-full p-2 transition-colors md:hidden",
            overHero && !open ? "text-cream" : "text-blue-900",
          )}
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
            className="overflow-hidden border-t border-blue-900/10 bg-cream md:hidden"
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
