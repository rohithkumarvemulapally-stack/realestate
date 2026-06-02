/**
 * Format a number as Indian Rupees in the lakh/crore convention.
 * e.g. 12500000 -> "₹1.25 Cr", 4500000 -> "₹45 L", 85000 -> "₹85,000"
 */
export function formatINR(value: number): string {
  if (value >= 10000000) {
    const cr = value / 10000000;
    return `₹${trimZeros(cr)} Cr`;
  }
  if (value >= 100000) {
    const lakh = value / 100000;
    return `₹${trimZeros(lakh)} L`;
  }
  return `₹${value.toLocaleString("en-IN")}`;
}

/** Full grouped rupee value, e.g. "₹1,25,00,000". */
export function formatINRFull(value: number): string {
  return `₹${value.toLocaleString("en-IN")}`;
}

function trimZeros(n: number): string {
  return n
    .toFixed(2)
    .replace(/\.00$/, "")
    .replace(/(\.\d)0$/, "$1");
}

/** Format area with thousands separator + unit. */
export function formatArea(sqft: number): string {
  return `${sqft.toLocaleString("en-IN")} sq ft`;
}

/** Human-readable date, e.g. "12 Mar 2026". */
export function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}
