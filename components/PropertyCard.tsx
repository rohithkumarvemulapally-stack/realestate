import Link from "next/link";
import Image from "next/image";
import { BedDouble, Bath, Maximize, MapPin } from "lucide-react";
import type { Property } from "@/types";
import { formatINR, formatArea } from "@/lib/format";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/cn";

/**
 * Reusable property card. Used across home, listings, detail (similar), etc.
 * `featured` enlarges typography for hero-grid placement.
 */
export default function PropertyCard({
  property,
  priority = false,
  className,
}: {
  property: Property;
  priority?: boolean;
  className?: string;
}) {
  const { id, title, price, location, type, bedrooms, bathrooms, area, images, status } =
    property;

  return (
    <Link
      href={`/properties/${id}`}
      data-cursor
      className={cn(
        "group flex h-full flex-col overflow-hidden rounded-2xl bg-white ring-1 ring-blue-900/5 transition-shadow duration-500 ease-smooth hover:shadow-[0_24px_60px_-30px_rgba(15,42,71,0.45)]",
        className,
      )}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={images[0]}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={priority}
          className="object-cover transition-transform duration-700 ease-smooth group-hover:scale-105"
        />
        <div className="absolute left-4 top-4 flex gap-2">
          <Badge tone={status === "For Rent" ? "rent" : "sale"}>{status}</Badge>
        </div>
        <div className="absolute right-4 top-4">
          <Badge tone="neutral">{type}</Badge>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center gap-1.5 text-xs text-ink/60">
          <MapPin size={13} className="text-brown-500" />
          <span className="truncate">{location}</span>
        </div>

        <h3 className="mt-2 text-lg font-bold leading-snug tracking-editorial text-blue-900 transition-colors group-hover:text-brown-500">
          {title}
        </h3>

        <div className="mt-auto pt-5">
          <div className="flex items-center gap-4 border-t border-blue-900/10 pt-4 text-sm text-ink/70">
            {bedrooms > 0 && (
              <Spec icon={<BedDouble size={15} />} label={`${bedrooms} Bed`} />
            )}
            {bathrooms > 0 && (
              <Spec icon={<Bath size={15} />} label={`${bathrooms} Bath`} />
            )}
            <Spec icon={<Maximize size={15} />} label={formatArea(area)} />
          </div>
          <p className="mt-4 text-xl font-bold tracking-editorial text-ink">
            {formatINR(price)}
            {status === "For Rent" && (
              <span className="text-sm font-normal text-ink/50"> /mo</span>
            )}
          </p>
        </div>
      </div>
    </Link>
  );
}

function Spec({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <span className="flex items-center gap-1.5">
      <span className="text-brown-500">{icon}</span>
      {label}
    </span>
  );
}
