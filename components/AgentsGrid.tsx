import Image from "next/image";
import { Mail, Phone } from "lucide-react";
import { agents } from "@/data/agents";
import AnimatedSection from "@/components/AnimatedSection";

/**
 * Team grid with a hover-reveal of contact info on each agent.
 */
export default function AgentsGrid() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {agents.map((agent, i) => (
        <AnimatedSection key={agent.id} delay={(i % 3) * 0.1}>
          <div className="group relative h-full overflow-hidden rounded-2xl bg-white ring-1 ring-blue-900/5">
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src={agent.photo}
                alt={agent.name}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-700 ease-smooth group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/85 via-blue-900/10 to-transparent" />

              {/* Reveal */}
              <div className="absolute inset-x-0 bottom-0 translate-y-3 p-6 opacity-0 transition-all duration-500 ease-smooth group-hover:translate-y-0 group-hover:opacity-100">
                <div className="space-y-1.5 text-sm text-cream">
                  <a
                    href={`tel:${agent.phone.replace(/\s/g, "")}`}
                    className="flex items-center gap-2 hover:text-brown-300"
                  >
                    <Phone size={14} /> {agent.phone}
                  </a>
                  <a
                    href={`mailto:${agent.email}`}
                    className="flex items-center gap-2 hover:text-brown-300"
                  >
                    <Mail size={14} /> {agent.email}
                  </a>
                </div>
              </div>
            </div>

            <div className="p-5">
              <p className="text-lg font-bold tracking-editorial text-blue-900">
                {agent.name}
              </p>
              <p className="text-sm text-brown-500">{agent.role}</p>
              <div className="mt-3 flex gap-4 text-xs text-ink/50">
                <span>{agent.experience} yrs experience</span>
                <span>·</span>
                <span>{agent.listings} listings</span>
              </div>
            </div>
          </div>
        </AnimatedSection>
      ))}
    </div>
  );
}
