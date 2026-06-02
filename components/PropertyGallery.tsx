"use client";

import { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/cn";

export default function PropertyGallery({
  images,
  title,
}: {
  images: string[];
  title: string;
}) {
  const [active, setActive] = useState(0);
  const [lightbox, setLightbox] = useState(false);

  return (
    <div>
      <div className="grid gap-3 md:grid-cols-[1fr_120px]">
        <button
          type="button"
          onClick={() => setLightbox(true)}
          className="group relative aspect-[16/11] overflow-hidden rounded-2xl"
          aria-label="Open image in lightbox"
        >
          <Image
            src={images[active]}
            alt={`${title} — view ${active + 1}`}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 70vw"
            className="object-cover transition-transform duration-700 ease-smooth group-hover:scale-105"
          />
        </button>

        <div className="flex gap-3 md:flex-col">
          {images.map((src, i) => (
            <button
              key={src + i}
              type="button"
              onClick={() => setActive(i)}
              className={cn(
                "relative aspect-square w-full overflow-hidden rounded-xl ring-2 transition-all",
                i === active
                  ? "ring-brown-500"
                  : "ring-transparent opacity-70 hover:opacity-100",
              )}
              aria-label={`View image ${i + 1}`}
            >
              <Image
                src={src}
                alt={`${title} thumbnail ${i + 1}`}
                fill
                sizes="120px"
                className="object-cover"
              />
            </button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(false)}
            className="fixed inset-0 z-[80] flex items-center justify-center bg-blue-900/95 p-4"
          >
            <button
              type="button"
              aria-label="Close lightbox"
              className="absolute right-5 top-5 rounded-full bg-cream/10 p-3 text-cream hover:bg-cream/20"
              onClick={() => setLightbox(false)}
            >
              <X size={22} />
            </button>
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ ease: [0.16, 1, 0.3, 1], duration: 0.3 }}
              className="relative aspect-[16/10] w-full max-w-5xl overflow-hidden rounded-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={images[active]}
                alt={`${title} — enlarged`}
                fill
                sizes="100vw"
                className="object-cover"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
