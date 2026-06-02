import Link from "next/link";
import { ArrowUpRight, Instagram, Linkedin, Twitter } from "lucide-react";

const columns = [
  {
    title: "Explore",
    links: [
      { href: "/properties", label: "All Properties" },
      { href: "/properties?type=Villa", label: "Villas" },
      { href: "/properties?type=Penthouse", label: "Penthouses" },
      { href: "/properties?type=Commercial", label: "Commercial" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/about", label: "About Us" },
      { href: "/about#agents", label: "Our Agents" },
      { href: "/blog", label: "Journal" },
      { href: "/contact", label: "Contact" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-cream">
      <div className="container-px py-16 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr_1.2fr]">
          <div>
            <Link href="/" className="text-2xl font-bold tracking-tightest">
              Meridian<span className="text-brown-300">.</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream/60">
              A modern estate practice for India&apos;s most considered buyers.
              Homes, land, and commercial — found with care.
            </p>
            <div className="mt-6 flex gap-3">
              {[Instagram, Linkedin, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social link"
                  className="rounded-full border border-cream/15 p-2.5 text-cream/70 transition-colors hover:border-brown-300 hover:text-brown-300"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-xs font-semibold uppercase tracking-widest text-brown-300">
                {col.title}
              </h4>
              <ul className="mt-5 space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="link-underline text-sm text-cream/70 hover:text-cream"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-brown-300">
              Get in touch
            </h4>
            <a
              href="mailto:hello@meridianestates.in"
              className="mt-5 flex items-center gap-1 text-lg font-bold tracking-editorial hover:text-brown-300"
            >
              hello@meridianestates.in
              <ArrowUpRight size={18} />
            </a>
            <p className="mt-3 text-sm text-cream/60">+91 40 4567 8900</p>
            <p className="mt-1 text-sm text-cream/60">
              Road No. 12, Banjara Hills
              <br />
              Hyderabad 500034
            </p>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-cream/10 pt-8 text-xs text-cream/50 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Meridian Estates. All rights reserved.</p>
          <p>Crafted in Hyderabad · Mock data for demonstration</p>
        </div>
      </div>
    </footer>
  );
}
