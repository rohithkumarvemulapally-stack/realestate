import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowLeft,
  BedDouble,
  Bath,
  Maximize,
  Home,
  CalendarDays,
  Check,
  MapPin,
} from "lucide-react";
import {
  getPropertyById,
  getSimilarProperties,
  properties,
} from "@/data/properties";
import { getAgentById } from "@/data/agents";
import { formatINRFull, formatArea } from "@/lib/format";
import { Badge } from "@/components/ui/Badge";
import PropertyGallery from "@/components/PropertyGallery";
import StaticMap from "@/components/StaticMap";
import AgentCard from "@/components/AgentCard";
import AnimatedSection from "@/components/AnimatedSection";
import PropertyCard from "@/components/PropertyCard";

export function generateStaticParams() {
  return properties.map((p) => ({ id: p.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const property = getPropertyById(id);
  if (!property) return { title: "Property not found" };
  return {
    title: property.title,
    description: property.description.slice(0, 155),
  };
}

export default async function PropertyDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const property = getPropertyById(id);
  if (!property) notFound();

  const agent = getAgentById(property.agentId);
  const similar = getSimilarProperties(property);

  const specs = [
    property.bedrooms > 0 && {
      icon: BedDouble,
      label: "Bedrooms",
      value: property.bedrooms,
    },
    property.bathrooms > 0 && {
      icon: Bath,
      label: "Bathrooms",
      value: property.bathrooms,
    },
    { icon: Maximize, label: "Area", value: formatArea(property.area) },
    { icon: Home, label: "Type", value: property.type },
    { icon: CalendarDays, label: "Built", value: property.yearBuilt },
  ].filter(Boolean) as { icon: typeof Home; label: string; value: string | number }[];

  return (
    <article className="container-px pb-24 pt-28 lg:pt-32">
      <Link
        href="/properties"
        className="link-underline mb-8 inline-flex items-center gap-2 text-sm font-medium text-brown-500"
      >
        <ArrowLeft size={16} /> Back to listings
      </Link>

      {/* Header */}
      <div className="mb-8 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
        <div className="max-w-2xl">
          <div className="mb-4 flex flex-wrap gap-2">
            <Badge tone={property.status === "For Rent" ? "rent" : "sale"}>
              {property.status}
            </Badge>
            <Badge tone="accent">{property.type}</Badge>
          </div>
          <h1 className="text-display-sm font-bold tracking-editorial text-blue-900">
            {property.title}
          </h1>
          <p className="mt-3 flex items-center gap-2 text-ink/60">
            <MapPin size={16} className="text-brown-500" />
            {property.location}
          </p>
        </div>
        <div className="shrink-0">
          <p className="text-4xl font-bold tracking-editorial text-ink lg:text-right">
            {formatINRFull(property.price)}
            {property.status === "For Rent" && (
              <span className="text-base font-normal text-ink/50"> /month</span>
            )}
          </p>
        </div>
      </div>

      <PropertyGallery images={property.images} title={property.title} />

      {/* Body */}
      <div className="mt-12 grid gap-12 lg:grid-cols-[1fr_360px]">
        <div>
          {/* Spec row */}
          <div className="grid grid-cols-2 gap-4 rounded-2xl bg-white p-6 ring-1 ring-blue-900/5 sm:grid-cols-3 lg:grid-cols-5">
            {specs.map((spec) => (
              <div key={spec.label}>
                <spec.icon size={20} className="text-brown-500" />
                <p className="mt-2 text-xs uppercase tracking-wider text-ink/50">
                  {spec.label}
                </p>
                <p className="text-lg font-bold text-blue-900">{spec.value}</p>
              </div>
            ))}
          </div>

          <AnimatedSection className="mt-12">
            <h2 className="text-2xl font-bold tracking-editorial text-blue-900">
              About this property
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-ink/70">
              {property.description}
            </p>
          </AnimatedSection>

          <AnimatedSection className="mt-12">
            <h2 className="text-2xl font-bold tracking-editorial text-blue-900">
              Amenities &amp; features
            </h2>
            <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {property.amenities.map((a) => (
                <li
                  key={a}
                  className="flex items-center gap-3 rounded-xl bg-white px-4 py-3 text-sm text-ink/80 ring-1 ring-blue-900/5"
                >
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brown-300/30 text-brown-700">
                    <Check size={14} />
                  </span>
                  {a}
                </li>
              ))}
            </ul>
          </AnimatedSection>

          <AnimatedSection className="mt-12">
            <h2 className="text-2xl font-bold tracking-editorial text-blue-900">
              Location
            </h2>
            <div className="mt-6">
              <StaticMap location={property.location} />
            </div>
          </AnimatedSection>
        </div>

        {/* Sidebar */}
        <aside>
          <div className="sticky top-28">
            {agent && <AgentCard agent={agent} />}
          </div>
        </aside>
      </div>

      {/* Similar */}
      {similar.length > 0 && (
        <section className="mt-24">
          <AnimatedSection className="mb-10 flex items-end justify-between">
            <h2 className="text-display-sm font-bold tracking-editorial text-blue-900">
              Similar homes.
            </h2>
            <Link
              href="/properties"
              className="link-underline hidden text-sm font-medium text-brown-500 sm:block"
            >
              View all
            </Link>
          </AnimatedSection>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {similar.map((p, i) => (
              <AnimatedSection key={p.id} delay={i * 0.08}>
                <PropertyCard property={p} className="h-full" />
              </AnimatedSection>
            ))}
          </div>
        </section>
      )}
    </article>
  );
}
