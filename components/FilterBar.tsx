"use client";

import { SlidersHorizontal, X } from "lucide-react";
import type { PropertyFilters, PropertyType, PropertyStatus } from "@/types";
import { Input, Label, Select } from "@/components/ui/Input";
import { allLocations, allTypes } from "@/data/properties";

const statuses: PropertyStatus[] = ["For Sale", "For Rent"];
const bedOptions = [1, 2, 3, 4];

export default function FilterBar({
  filters,
  onChange,
  onClear,
  activeCount,
}: {
  filters: PropertyFilters;
  onChange: (next: Partial<PropertyFilters>) => void;
  onClear: () => void;
  activeCount: number;
}) {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-brown-700">
          <SlidersHorizontal size={16} /> Filters
        </h2>
        {activeCount > 0 && (
          <button
            type="button"
            onClick={onClear}
            className="flex items-center gap-1 text-xs font-medium text-brown-500 hover:text-brown-700"
          >
            Clear ({activeCount}) <X size={13} />
          </button>
        )}
      </div>

      <div>
        <Label htmlFor="f-search">Search</Label>
        <Input
          id="f-search"
          type="search"
          placeholder="Title, area, type…"
          value={filters.search}
          onChange={(e) => onChange({ search: e.target.value })}
        />
      </div>

      <div>
        <Label htmlFor="f-location">Location</Label>
        <Select
          id="f-location"
          value={filters.location}
          onChange={(e) => onChange({ location: e.target.value })}
        >
          <option value="All">Any location</option>
          {allLocations.map((l) => (
            <option key={l} value={l}>
              {l}
            </option>
          ))}
        </Select>
      </div>

      <div>
        <Label htmlFor="f-type">Property type</Label>
        <Select
          id="f-type"
          value={filters.type}
          onChange={(e) =>
            onChange({ type: e.target.value as PropertyType | "All" })
          }
        >
          <option value="All">Any type</option>
          {allTypes.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </Select>
      </div>

      <div>
        <Label htmlFor="f-status">Status</Label>
        <Select
          id="f-status"
          value={filters.status}
          onChange={(e) =>
            onChange({ status: e.target.value as PropertyStatus | "All" })
          }
        >
          <option value="All">Sale &amp; Rent</option>
          {statuses.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </Select>
      </div>

      <div>
        <Label>Price range (₹)</Label>
        <div className="flex items-center gap-3">
          <Input
            type="number"
            min={0}
            placeholder="Min"
            aria-label="Minimum price"
            value={filters.minPrice ?? ""}
            onChange={(e) =>
              onChange({
                minPrice: e.target.value ? Number(e.target.value) : null,
              })
            }
          />
          <span className="text-ink/30">—</span>
          <Input
            type="number"
            min={0}
            placeholder="Max"
            aria-label="Maximum price"
            value={filters.maxPrice ?? ""}
            onChange={(e) =>
              onChange({
                maxPrice: e.target.value ? Number(e.target.value) : null,
              })
            }
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="f-beds">Beds (min)</Label>
          <Select
            id="f-beds"
            value={filters.bedrooms ?? ""}
            onChange={(e) =>
              onChange({
                bedrooms: e.target.value ? Number(e.target.value) : null,
              })
            }
          >
            <option value="">Any</option>
            {bedOptions.map((n) => (
              <option key={n} value={n}>
                {n}+
              </option>
            ))}
          </Select>
        </div>
        <div>
          <Label htmlFor="f-baths">Baths (min)</Label>
          <Select
            id="f-baths"
            value={filters.bathrooms ?? ""}
            onChange={(e) =>
              onChange({
                bathrooms: e.target.value ? Number(e.target.value) : null,
              })
            }
          >
            <option value="">Any</option>
            {bedOptions.map((n) => (
              <option key={n} value={n}>
                {n}+
              </option>
            ))}
          </Select>
        </div>
      </div>
    </div>
  );
}
