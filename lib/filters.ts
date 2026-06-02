import type { Property, PropertyFilters, SortKey } from "@/types";

export const defaultFilters: PropertyFilters = {
  search: "",
  location: "All",
  type: "All",
  status: "All",
  minPrice: null,
  maxPrice: null,
  bedrooms: null,
  bathrooms: null,
};

/**
 * Pure filtering over the property array. No side effects, no JSX.
 */
export function filterProperties(
  properties: Property[],
  filters: PropertyFilters,
): Property[] {
  const search = filters.search.trim().toLowerCase();

  return properties.filter((p) => {
    if (search) {
      const haystack = `${p.title} ${p.location} ${p.type}`.toLowerCase();
      if (!haystack.includes(search)) return false;
    }
    if (filters.location !== "All" && p.location !== filters.location) {
      return false;
    }
    if (filters.type !== "All" && p.type !== filters.type) return false;
    if (filters.status !== "All" && p.status !== filters.status) return false;
    if (filters.minPrice !== null && p.price < filters.minPrice) return false;
    if (filters.maxPrice !== null && p.price > filters.maxPrice) return false;
    if (filters.bedrooms !== null && p.bedrooms < filters.bedrooms) return false;
    if (filters.bathrooms !== null && p.bathrooms < filters.bathrooms) {
      return false;
    }
    return true;
  });
}

/** Pure sort — returns a new array, does not mutate input. */
export function sortProperties(
  properties: Property[],
  sort: SortKey,
): Property[] {
  const copy = [...properties];
  switch (sort) {
    case "price-asc":
      return copy.sort((a, b) => a.price - b.price);
    case "price-desc":
      return copy.sort((a, b) => b.price - a.price);
    case "area-desc":
      return copy.sort((a, b) => b.area - a.area);
    case "newest":
    default:
      return copy.sort((a, b) => b.yearBuilt - a.yearBuilt);
  }
}

export function applyFiltersAndSort(
  properties: Property[],
  filters: PropertyFilters,
  sort: SortKey,
): Property[] {
  return sortProperties(filterProperties(properties, filters), sort);
}

/** Count active (non-default) filters for UI chips. */
export function countActiveFilters(filters: PropertyFilters): number {
  let n = 0;
  if (filters.search.trim()) n++;
  if (filters.location !== "All") n++;
  if (filters.type !== "All") n++;
  if (filters.status !== "All") n++;
  if (filters.minPrice !== null) n++;
  if (filters.maxPrice !== null) n++;
  if (filters.bedrooms !== null) n++;
  if (filters.bathrooms !== null) n++;
  return n;
}
