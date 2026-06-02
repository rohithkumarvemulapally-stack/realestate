import { Suspense } from "react";
import type { Metadata } from "next";
import PropertiesView from "@/components/PropertiesView";

export const metadata: Metadata = {
  title: "Properties",
  description:
    "Browse Meridian's curated collection of apartments, villas, penthouses, plots and commercial space across India. Filter by location, type, price and more.",
};

export default function PropertiesPage() {
  return (
    <Suspense
      fallback={
        <div className="container-px pt-40 text-ink/50">Loading listings…</div>
      }
    >
      <PropertiesView />
    </Suspense>
  );
}
