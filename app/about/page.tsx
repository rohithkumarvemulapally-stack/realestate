import Image from "next/image";
import type { Metadata } from "next";
import { Compass, HandHeart, ShieldCheck } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import AgentsGrid from "@/components/AgentsGrid";
import StatCounter from "@/components/StatCounter";
import { Badge } from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "About & Agents",
  description:
    "Meridian Estates is a small, deliberate estate practice. Meet the team and read the philosophy behind selling fewer homes, better.",
};

const values = [
  {
    icon: Compass,
    title: "Patience over pressure",
    body: "We never rush a fit. The right home for the right family is worth waiting a season for.",
  },
  {
    icon: ShieldCheck,
    title: "Diligence first",
    body: "Title, approvals, structure — we do the unglamorous checks before anyone falls in love.",
  },
  {
    icon: HandHeart,
    title: "Relationships, not transactions",
    body: "Most of our business comes from people we've already served. That keeps us honest.",
  },
];

export default function AboutPage() {
  return (
    <div className="pb-24 pt-28 lg:pt-32">
      {/* Intro */}
      <section className="container-px">
        <AnimatedSection className="max-w-4xl">
          <Badge tone="accent">Our story</Badge>
          <h1 className="mt-5 text-display font-bold tracking-editorial text-blue-900">
            Real estate, at a human pace.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink/70">
            Meridian began in 2009 with a single conviction: that buying or
            selling a home should feel considered, not transactional. Fifteen
            years on, that conviction still sets our pace.
          </p>
        </AnimatedSection>
      </section>

      {/* Image + story split */}
      <section className="container-px mt-16">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
          <AnimatedSection direction="right" className="lg:col-span-7">
            <div className="relative aspect-[16/10] overflow-hidden rounded-2xl">
              <Image
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1400&q=80&auto=format&fit=crop"
                alt="The Meridian team in conversation"
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover"
              />
            </div>
          </AnimatedSection>
          <AnimatedSection direction="left" className="lg:col-span-5">
            <h2 className="text-display-sm font-bold tracking-editorial text-blue-900">
              A practice, not a portal.
            </h2>
            <p className="mt-5 leading-relaxed text-ink/70">
              We are deliberately small. Each agent carries a handful of homes
              and a handful of clients, which means the person who shows you a
              property is the person who negotiates it and the person who picks
              up when you call.
            </p>
            <p className="mt-4 leading-relaxed text-ink/60">
              We work across seven cities and every price band, from a first
              rental to a landmark penthouse — with the same care given to each.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Values */}
      <section className="container-px mt-24">
        <div className="grid gap-6 md:grid-cols-3">
          {values.map((v, i) => (
            <AnimatedSection
              key={v.title}
              delay={i * 0.1}
              className="rounded-2xl bg-white p-8 ring-1 ring-blue-900/5"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brown-300/30 text-brown-700">
                <v.icon size={22} />
              </span>
              <h3 className="mt-5 text-xl font-bold tracking-editorial text-blue-900">
                {v.title}
              </h3>
              <p className="mt-3 leading-relaxed text-ink/60">{v.body}</p>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="mt-24 bg-blue-900 text-cream">
        <div className="container-px grid grid-cols-2 gap-x-6 gap-y-12 py-20 lg:grid-cols-4">
          {[
            { value: 2009, suffix: "", label: "Founded" },
            { value: 1200, suffix: "+", label: "Homes closed" },
            { value: 4800, suffix: " Cr", label: "Transacted (₹)" },
            { value: 98, suffix: "%", label: "Would refer us" },
          ].map((s, i) => (
            <AnimatedSection key={s.label} delay={i * 0.08}>
              <p className="text-4xl font-bold tracking-tightest text-brown-300 lg:text-5xl">
                <StatCounter value={s.value} suffix={s.suffix} />
              </p>
              <p className="mt-3 text-sm text-cream/60">{s.label}</p>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Agents */}
      <section id="agents" className="container-px mt-24 scroll-mt-28">
        <AnimatedSection className="mb-12 max-w-2xl">
          <Badge tone="accent">The team</Badge>
          <h2 className="mt-4 text-display-sm font-bold tracking-editorial text-blue-900">
            People you&apos;ll actually reach.
          </h2>
          <p className="mt-4 text-ink/60">
            Hover a card for direct contact details — no call centre in between.
          </p>
        </AnimatedSection>
        <AgentsGrid />
      </section>

      {/* CTA */}
      <section className="container-px mt-24">
        <AnimatedSection className="rounded-3xl bg-brown-500 px-8 py-16 text-center text-cream lg:py-20">
          <h2 className="text-display-sm font-bold tracking-editorial">
            Let&apos;s find your fit.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-cream/80">
            Start a conversation with an agent who&apos;ll stay with you the
            whole way.
          </p>
          <div className="mt-8 flex justify-center">
            <ButtonLink href="/contact" variant="light" withArrow>
              Get in touch
            </ButtonLink>
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
}
