import Image from "next/image";
import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import type { Agent } from "@/types";

/**
 * Compact agent card used on the property detail page.
 */
export default function AgentCard({ agent }: { agent: Agent }) {
  return (
    <div className="rounded-2xl bg-blue-900 p-6 text-cream">
      <p className="text-xs font-semibold uppercase tracking-widest text-brown-300">
        Listing agent
      </p>
      <div className="mt-4 flex items-center gap-4">
        <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full ring-2 ring-brown-300/40">
          <Image
            src={agent.photo}
            alt={agent.name}
            fill
            sizes="64px"
            className="object-cover"
          />
        </div>
        <div>
          <p className="text-lg font-bold tracking-editorial">{agent.name}</p>
          <p className="text-sm text-cream/60">{agent.role}</p>
        </div>
      </div>

      <p className="mt-4 text-sm leading-relaxed text-cream/70">{agent.bio}</p>

      <div className="mt-5 space-y-2 text-sm">
        <a
          href={`tel:${agent.phone.replace(/\s/g, "")}`}
          className="flex items-center gap-2 text-cream/80 hover:text-brown-300"
        >
          <Phone size={15} /> {agent.phone}
        </a>
        <a
          href={`mailto:${agent.email}`}
          className="flex items-center gap-2 text-cream/80 hover:text-brown-300"
        >
          <Mail size={15} /> {agent.email}
        </a>
      </div>

      <Link
        href="/contact"
        className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-brown-500 py-3 text-sm font-medium text-cream transition-colors hover:bg-brown-700"
      >
        Contact agent
      </Link>
    </div>
  );
}
