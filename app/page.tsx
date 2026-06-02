import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import StatCounter from "@/components/StatCounter";
import AnimatedSection from "@/components/AnimatedSection";
import PropertyCard from "@/components/PropertyCard";
import { ButtonLink } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { getFeaturedProperties } from "@/data/properties";
import { posts } from "@/data/posts";
import { formatDate } from "@/lib/format";

const cities = [
  "Hyderabad",
  "Mumbai",
  "Bengaluru",
  "Pune",
  "Chennai",
  "New Delhi",
  "Goa",
];

export default function Home() {
  const featured = getFeaturedProperties().slice(0, 5);
  const latest = posts.slice(0, 3);

  return (
    <>
      <Hero />

      {/* Featured listings — asymmetric grid */}
      <section className="container-px py-20 lg:py-28">
        <AnimatedSection className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-xl">
            <Badge tone="accent">Featured</Badge>
            <h2 className="mt-4 text-display-sm font-bold tracking-editorial text-blue-900">
              A short list, carefully kept.
            </h2>
          </div>
          <Link
            href="/properties"
            className="link-underline inline-flex items-center gap-1 self-start text-sm font-medium text-brown-500 md:self-auto"
          >
            View all properties <ArrowUpRight size={16} />
          </Link>
        </AnimatedSection>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
          {featured[0] && (
            <AnimatedSection className="md:col-span-7" direction="up">
              <PropertyCard property={featured[0]} priority className="h-full" />
            </AnimatedSection>
          )}
          {featured[1] && (
            <AnimatedSection
              className="md:col-span-5 md:mt-16"
              direction="up"
              delay={0.1}
            >
              <PropertyCard property={featured[1]} className="h-full" />
            </AnimatedSection>
          )}
          {featured[2] && (
            <AnimatedSection className="md:col-span-4" direction="up">
              <PropertyCard property={featured[2]} className="h-full" />
            </AnimatedSection>
          )}
          {featured[3] && (
            <AnimatedSection
              className="md:col-span-4 md:-mt-10"
              direction="up"
              delay={0.1}
            >
              <PropertyCard property={featured[3]} className="h-full" />
            </AnimatedSection>
          )}
          {featured[4] && (
            <AnimatedSection
              className="md:col-span-4"
              direction="up"
              delay={0.2}
            >
              <PropertyCard property={featured[4]} className="h-full" />
            </AnimatedSection>
          )}
        </div>
      </section>

      {/* Stats band */}
      <section className="bg-blue-900 text-cream">
        <div className="container-px py-20 lg:py-28">
          <AnimatedSection className="max-w-2xl">
            <Badge tone="accent">Why Meridian</Badge>
            <h2 className="mt-4 text-display-sm font-bold tracking-editorial">
              Fifteen years of quiet, deliberate dealmaking.
            </h2>
          </AnimatedSection>
          <div className="mt-14 grid grid-cols-2 gap-x-6 gap-y-12 lg:grid-cols-4">
            {[
              { value: 1200, suffix: "+", label: "Properties closed" },
              { value: 98, suffix: "%", label: "Client satisfaction" },
              { value: 7, suffix: "", label: "Cities covered" },
              { value: 15, suffix: " yrs", label: "On the ground" },
            ].map((s, i) => (
              <AnimatedSection key={s.label} delay={i * 0.08}>
                <p className="text-5xl font-bold tracking-tightest text-brown-300 lg:text-6xl">
                  <StatCounter value={s.value} suffix={s.suffix} />
                </p>
                <p className="mt-3 text-sm text-cream/60">{s.label}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>

        {/* Marquee of cities */}
        <div className="border-t border-cream/10 py-8">
          <Marquee items={cities} />
        </div>
      </section>

      {/* About preview — offset split */}
      <section className="container-px py-20 lg:py-32">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
          <AnimatedSection
            direction="right"
            className="relative lg:col-span-6"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
              <Image
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80&auto=format&fit=crop"
                alt="A light-filled contemporary living room"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-4 hidden rounded-2xl bg-brown-500 px-8 py-6 text-cream shadow-xl sm:block lg:-right-8">
              <p className="text-3xl font-bold tracking-tightest">₹4,800 Cr+</p>
              <p className="text-xs text-cream/70">in lifetime transactions</p>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="left" className="lg:col-span-6">
            <Badge tone="accent">Our approach</Badge>
            <h2 className="mt-4 text-display-sm font-bold tracking-editorial text-blue-900">
              We sell fewer homes, better.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-ink/70">
              Meridian is not a listings factory. We take on a small number of
              homes and buyers at a time, and we stay until the fit is right —
              for the family, the building, and the long view of the market.
            </p>
            <p className="mt-4 leading-relaxed text-ink/60">
              That patience is the whole product. It is why our clients return,
              and why they send us their closest friends.
            </p>
            <div className="mt-8">
              <ButtonLink href="/about" variant="outline" withArrow>
                Read our story
              </ButtonLink>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Latest journal */}
      <section className="bg-brown-300/15">
        <div className="container-px py-20 lg:py-28">
          <AnimatedSection className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-xl">
              <Badge tone="accent">Journal</Badge>
              <h2 className="mt-4 text-display-sm font-bold tracking-editorial text-blue-900">
                Notes from the market.
              </h2>
            </div>
            <Link
              href="/blog"
              className="link-underline inline-flex items-center gap-1 self-start text-sm font-medium text-brown-500 md:self-auto"
            >
              All articles <ArrowUpRight size={16} />
            </Link>
          </AnimatedSection>

          <div className="grid gap-6 md:grid-cols-3">
            {latest.map((post, i) => (
              <AnimatedSection key={post.slug} delay={i * 0.1}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white ring-1 ring-blue-900/5 transition-shadow duration-500 hover:shadow-[0_24px_60px_-30px_rgba(15,42,71,0.45)]"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={post.cover}
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-700 ease-smooth group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-center gap-3 text-xs text-ink/50">
                      <span className="font-medium text-brown-500">
                        {post.category}
                      </span>
                      <span>·</span>
                      <span>{post.readTime} min read</span>
                    </div>
                    <h3 className="mt-3 text-lg font-bold leading-snug text-blue-900 transition-colors group-hover:text-brown-500">
                      {post.title}
                    </h3>
                    <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-ink/60">
                      {post.excerpt}
                    </p>
                    <p className="mt-auto pt-5 text-xs text-ink/40">
                      {formatDate(post.date)}
                    </p>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA band */}
      <section className="container-px py-20 lg:py-28">
        <AnimatedSection className="relative overflow-hidden rounded-3xl bg-blue-900 px-8 py-16 text-cream lg:px-20 lg:py-24">
          <div className="relative z-10 max-w-2xl">
            <h2 className="text-display-sm font-bold tracking-editorial">
              Ready when you are.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-cream/70">
              Tell us what you&apos;re looking for — or what you&apos;re ready to
              sell. We&apos;ll take it from there, at your pace.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <ButtonLink href="/contact" variant="light" withArrow>
                Talk to an agent
              </ButtonLink>
              <ButtonLink
                href="/properties"
                variant="outline"
                className="border-cream/30 text-cream hover:bg-cream hover:text-blue-900"
              >
                Browse properties
              </ButtonLink>
            </div>
          </div>
          <div className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-brown-500/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 right-1/3 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />
        </AnimatedSection>
      </section>
    </>
  );
}
