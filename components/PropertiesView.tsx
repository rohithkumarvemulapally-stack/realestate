"use client";

import { useCallbackRef } from "@/lib/useCallbackRef";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { SlidersHorizontal, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import type { PropertyFilters, SortKey } from "@/types";
import { properties } from "@/data/properties";
import {
  applyFiltersAndSort,
  countActiveFilters,
  defaultFilters,
} from "@/lib/filters";
import FilterBar from "@/components/FilterBar";
import PropertyCard from "@/components/PropertyCard";
import AnimatedSection from "@/components/AnimatedSection";
import { Select } from "@/components/ui/Input";

const sortLabels: Record<SortKey, string> = {
  newest: "Newest first",
  "price-asc": "Price: low to high",
  "price-desc": "Price: high to low",
  "area-desc": "Largest area",
};

function readFilters(params: URLSearchParams): PropertyFilters {
  const num = (key: string) => {
    const v = params.get(key);
    return v ? Number(v) : null;
  };
  return {
    search: params.get("search") ?? "",
    location: params.get("location") ?? "All",
    type: (params.get("type") as PropertyFilters["type"]) ?? "All",
    status: (params.get("status") as PropertyFilters["status"]) ?? "All",
    minPrice: num("minPrice"),
    maxPrice: num("maxPrice"),
    bedrooms: num("bedrooms"),
    bathrooms: num("bathrooms"),
  };
}

export default function PropertiesView() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [filters, setFilters] = useState<PropertyFilters>(() =>
    readFilters(new URLSearchParams(searchParams.toString())),
  );
  const [sort, setSort] = useState<SortKey>(
    (searchParams.get("sort") as SortKey) ?? "newest",
  );
  const [drawerOpen, setDrawerOpen] = useState(false);

  const syncUrl = useCallbackRef((next: PropertyFilters, nextSort: SortKey) => {
    const params = new URLSearchParams();
    if (next.search.trim()) params.set("search", next.search.trim());
    if (next.location !== "All") params.set("location", next.location);
    if (next.type !== "All") params.set("type", next.type);
    if (next.status !== "All") params.set("status", next.status);
    if (next.minPrice !== null) params.set("minPrice", String(next.minPrice));
    if (next.maxPrice !== null) params.set("maxPrice", String(next.maxPrice));
    if (next.bedrooms !== null) params.set("bedrooms", String(next.bedrooms));
    if (next.bathrooms !== null)
      params.set("bathrooms", String(next.bathrooms));
    if (nextSort !== "newest") params.set("sort", nextSort);
    const qs = params.toString();
    router.replace(qs ? `/properties?${qs}` : "/properties", {
      scroll: false,
    });
  });

  useEffect(() => {
    syncUrl(filters, sort);
  }, [filters, sort, syncUrl]);

  const update = useCallback((next: Partial<PropertyFilters>) => {
    setFilters((prev) => ({ ...prev, ...next }));
  }, []);

  const clear = useCallback(() => setFilters(defaultFilters), []);

  const results = useMemo(
    () => applyFiltersAndSort(properties, filters, sort),
    [filters, sort],
  );
  const activeCount = countActiveFilters(filters);

  return (
    <div className="container-px pb-24 pt-32">
      <AnimatedSection className="mb-10 max-w-2xl">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-brown-500">
          Listings
        </p>
        <h1 className="mt-3 text-display-sm font-bold tracking-editorial text-blue-900">
          The collection.
        </h1>
        <p className="mt-4 text-ink/60">
          {properties.length} curated properties across seven cities. Filter to
          find your fit.
        </p>
      </AnimatedSection>

      <div className="grid gap-10 lg:grid-cols-[280px_1fr]">
        {/* Desktop sidebar */}
        <aside className="hidden lg:block">
          <div className="sticky top-28 rounded-2xl bg-white p-6 ring-1 ring-blue-900/5">
            <FilterBar
              filters={filters}
              onChange={update}
              onClear={clear}
              activeCount={activeCount}
            />
          </div>
        </aside>

        <div>
          {/* Top bar: count, sort, mobile filter button */}
          <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
            <p className="text-sm text-ink/60">
              <span className="font-bold text-blue-900">{results.length}</span>{" "}
              {results.length === 1 ? "property" : "properties"} found
            </p>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setDrawerOpen(true)}
                className="flex items-center gap-2 rounded-full border border-blue-900/15 px-4 py-2 text-sm font-medium text-blue-900 lg:hidden"
              >
                <SlidersHorizontal size={15} /> Filters
                {activeCount > 0 && (
                  <span className="rounded-full bg-brown-500 px-1.5 text-xs text-cream">
                    {activeCount}
                  </span>
                )}
              </button>
              <label className="flex items-center gap-2 text-sm text-ink/60">
                <span className="hidden sm:inline">Sort</span>
                <Select
                  aria-label="Sort properties"
                  value={sort}
                  onChange={(e) => setSort(e.target.value as SortKey)}
                  className="min-w-[180px]"
                >
                  {(Object.keys(sortLabels) as SortKey[]).map((k) => (
                    <option key={k} value={k}>
                      {sortLabels[k]}
                    </option>
                  ))}
                </Select>
              </label>
            </div>
          </div>

          {/* Active chips */}
          {activeCount > 0 && (
            <div className="mb-6 flex flex-wrap gap-2">
              <ActiveChips filters={filters} onChange={update} />
            </div>
          )}

          {/* Results */}
          {results.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {results.map((p, i) => (
                <AnimatedSection key={p.id} delay={(i % 6) * 0.05}>
                  <PropertyCard property={p} className="h-full" />
                </AnimatedSection>
              ))}
            </div>
          ) : (
            <div className="rounded-2xl border border-dashed border-blue-900/15 bg-white/50 py-24 text-center">
              <p className="text-lg font-bold text-blue-900">
                No properties match your filters.
              </p>
              <p className="mt-2 text-sm text-ink/60">
                Try widening your price range or clearing a filter.
              </p>
              <button
                type="button"
                onClick={clear}
                className="mt-6 rounded-full bg-brown-500 px-6 py-3 text-sm font-medium text-cream transition-colors hover:bg-brown-700"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Mobile filter drawer */}
      <AnimatePresence>
        {drawerOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] lg:hidden"
          >
            <div
              className="absolute inset-0 bg-blue-900/40 backdrop-blur-sm"
              onClick={() => setDrawerOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", ease: [0.16, 1, 0.3, 1], duration: 0.4 }}
              className="absolute right-0 top-0 flex h-full w-[88%] max-w-sm flex-col bg-cream p-6 shadow-2xl"
            >
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-lg font-bold text-blue-900">Filters</h2>
                <button
                  type="button"
                  aria-label="Close filters"
                  onClick={() => setDrawerOpen(false)}
                  className="rounded-full p-2 text-blue-900"
                >
                  <X size={22} />
                </button>
              </div>
              <div className="flex-1 overflow-y-auto" data-lenis-prevent>
                <FilterBar
                  filters={filters}
                  onChange={update}
                  onClear={clear}
                  activeCount={activeCount}
                />
              </div>
              <button
                type="button"
                onClick={() => setDrawerOpen(false)}
                className="mt-4 rounded-full bg-blue-900 py-3 text-sm font-medium text-cream"
              >
                Show {results.length} results
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function ActiveChips({
  filters,
  onChange,
}: {
  filters: PropertyFilters;
  onChange: (next: Partial<PropertyFilters>) => void;
}) {
  const chips: Array<{ label: string; clear: Partial<PropertyFilters> }> = [];
  if (filters.search.trim())
    chips.push({ label: `“${filters.search}”`, clear: { search: "" } });
  if (filters.location !== "All")
    chips.push({ label: filters.location, clear: { location: "All" } });
  if (filters.type !== "All")
    chips.push({ label: filters.type, clear: { type: "All" } });
  if (filters.status !== "All")
    chips.push({ label: filters.status, clear: { status: "All" } });
  if (filters.minPrice !== null)
    chips.push({
      label: `Min ₹${filters.minPrice.toLocaleString("en-IN")}`,
      clear: { minPrice: null },
    });
  if (filters.maxPrice !== null)
    chips.push({
      label: `Max ₹${filters.maxPrice.toLocaleString("en-IN")}`,
      clear: { maxPrice: null },
    });
  if (filters.bedrooms !== null)
    chips.push({ label: `${filters.bedrooms}+ beds`, clear: { bedrooms: null } });
  if (filters.bathrooms !== null)
    chips.push({
      label: `${filters.bathrooms}+ baths`,
      clear: { bathrooms: null },
    });

  return (
    <>
      {chips.map((chip) => (
        <button
          key={chip.label}
          type="button"
          onClick={() => onChange(chip.clear)}
          className="flex items-center gap-1.5 rounded-full bg-blue-900 px-3 py-1.5 text-xs font-medium text-cream transition-colors hover:bg-brown-500"
        >
          {chip.label}
          <X size={12} />
        </button>
      ))}
    </>
  );
}
