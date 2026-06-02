"use client";

import { useRef } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { Select } from "@/components/ui/Input";
import { allLocations, allTypes } from "@/data/properties";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const router = useRouter();
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "22%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, reduce ? 1 : 1.12]);

  function handleSearch(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const params = new URLSearchParams();
    const location = String(form.get("location") ?? "");
    const type = String(form.get("type") ?? "");
    const price = String(form.get("price") ?? "");
    if (location && location !== "All") params.set("location", location);
    if (type && type !== "All") params.set("type", type);
    if (price && price !== "All") params.set("maxPrice", price);
    router.push(`/properties?${params.toString()}`);
  }

  return (
    <section
      ref={ref}
      className="relative flex min-h-[100svh] items-end overflow-hidden bg-blue-900"
    >
      <motion.div style={{ y, scale }} className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=2000&q=80&auto=format&fit=crop"
          alt="A modern architectural home at dusk"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900 via-blue-900/40 to-blue-900/30" />
      </motion.div>

      <div className="container-px relative z-10 w-full pb-12 pt-32">
        <div className="max-w-4xl">
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="mb-5 flex items-center gap-3 text-sm font-medium uppercase tracking-[0.2em] text-brown-300"
          >
            <span className="h-px w-10 bg-brown-300" />
            Estate practice · Est. 2009
          </motion.p>

          <h1 className="text-display font-bold tracking-editorial text-cream">
            <Line delay={0.05} reduce={reduce}>
              Find the home
            </Line>
            <Line delay={0.15} reduce={reduce}>
              that <span className="text-brown-300">holds</span> you.
            </Line>
          </h1>

          <motion.p
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-cream/75"
          >
            Curated apartments, villas, penthouses and land across India&apos;s
            best addresses — found with patience, not pressure.
          </motion.p>
        </div>

        <motion.form
          onSubmit={handleSearch}
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 grid w-full max-w-3xl gap-3 rounded-2xl bg-cream/95 p-3 backdrop-blur md:grid-cols-[1fr_1fr_1fr_auto]"
        >
          <FormField label="Location">
            <Select name="location" defaultValue="All">
              <option value="All">Any location</option>
              {allLocations.map((l) => (
                <option key={l} value={l}>
                  {l}
                </option>
              ))}
            </Select>
          </FormField>
          <FormField label="Type">
            <Select name="type" defaultValue="All">
              <option value="All">Any type</option>
              {allTypes.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </Select>
          </FormField>
          <FormField label="Max price">
            <Select name="price" defaultValue="All">
              <option value="All">No max</option>
              <option value="5000000">Up to ₹50 L</option>
              <option value="20000000">Up to ₹2 Cr</option>
              <option value="60000000">Up to ₹6 Cr</option>
              <option value="150000000">Up to ₹15 Cr</option>
            </Select>
          </FormField>
          <button
            type="submit"
            className="group flex items-center justify-center gap-2 rounded-xl bg-brown-500 px-6 py-3 font-medium text-cream transition-colors hover:bg-brown-700 md:self-end"
          >
            <Search size={18} />
            <span>Search</span>
          </button>
        </motion.form>
      </div>
    </section>
  );
}

function Line({
  children,
  delay,
  reduce,
}: {
  children: React.ReactNode;
  delay: number;
  reduce: boolean | null;
}) {
  return (
    <span className="block overflow-hidden">
      <motion.span
        className="block"
        initial={reduce ? false : { y: "110%" }}
        animate={{ y: 0 }}
        transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
      >
        {children}
      </motion.span>
    </span>
  );
}

function FormField({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="flex flex-col gap-1 text-left">
      <span className="px-1 text-[10px] font-semibold uppercase tracking-wider text-brown-700">
        {label}
      </span>
      {children}
    </label>
  );
}
