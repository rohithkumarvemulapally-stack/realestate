import { MapPin } from "lucide-react";

/**
 * Styled static map placeholder — no map API required.
 */
export default function StaticMap({ location }: { location: string }) {
  return (
    <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-blue-900/10 bg-blue-900/5">
      {/* grid lines */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "linear-gradient(rgba(15,42,71,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(15,42,71,0.08) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      {/* faux roads */}
      <div
        aria-hidden
        className="absolute left-0 top-1/2 h-3 w-full -translate-y-1/2 bg-brown-300/40"
      />
      <div
        aria-hidden
        className="absolute left-1/3 top-0 h-full w-3 bg-brown-300/40"
      />
      <div
        aria-hidden
        className="absolute right-1/4 top-0 h-full w-2 bg-brown-300/30"
      />

      {/* pin */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-full">
        <div className="flex flex-col items-center">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-brown-500 text-cream shadow-lg ring-4 ring-cream">
            <MapPin size={20} />
          </div>
          <div className="h-3 w-px bg-brown-500" />
        </div>
      </div>

      <div className="absolute bottom-4 left-4 rounded-lg bg-cream/90 px-4 py-2 text-sm font-medium text-blue-900 backdrop-blur">
        {location}
      </div>
    </div>
  );
}
