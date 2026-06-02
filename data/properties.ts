import type { Property } from "@/types";

/**
 * Stable Unsplash placeholder images (real-estate themed).
 * Reused across galleries so the marketplace renders instantly.
 */
const IMG = {
  apartment1:
    "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200&q=80&auto=format&fit=crop",
  apartment2:
    "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=1200&q=80&auto=format&fit=crop",
  apartment3:
    "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1200&q=80&auto=format&fit=crop",
  villa1:
    "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200&q=80&auto=format&fit=crop",
  villa2:
    "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&q=80&auto=format&fit=crop",
  villa3:
    "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=1200&q=80&auto=format&fit=crop",
  penthouse1:
    "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&q=80&auto=format&fit=crop",
  penthouse2:
    "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&q=80&auto=format&fit=crop",
  interior1:
    "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?w=1200&q=80&auto=format&fit=crop",
  interior2:
    "https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=1200&q=80&auto=format&fit=crop",
  interior3:
    "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&q=80&auto=format&fit=crop",
  commercial1:
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80&auto=format&fit=crop",
  commercial2:
    "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1200&q=80&auto=format&fit=crop",
  plot1:
    "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1200&q=80&auto=format&fit=crop",
  plot2:
    "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1200&q=80&auto=format&fit=crop",
};

export const properties: Property[] = [
  {
    id: "p-01",
    title: "Skyline Residences at Jubilee Heights",
    price: 42500000,
    location: "Jubilee Hills, Hyderabad",
    type: "Apartment",
    bedrooms: 3,
    bathrooms: 3,
    area: 2450,
    images: [IMG.apartment1, IMG.interior1, IMG.interior2, IMG.apartment2],
    description:
      "A corner three-bedroom home on the 18th floor with double-height living, full-width glazing, and an open Italian kitchen. Morning light pours across engineered oak floors; evenings belong to the wraparound balcony and its uninterrupted city view.",
    amenities: [
      "Infinity pool",
      "Sky lounge",
      "Concierge",
      "EV charging",
      "Home automation",
      "Private gym",
    ],
    featured: true,
    agentId: "ag-1",
    yearBuilt: 2023,
    status: "For Sale",
  },
  {
    id: "p-02",
    title: "Casa Verde — Courtyard Villa",
    price: 78500000,
    location: "Kokapet, Hyderabad",
    type: "Villa",
    bedrooms: 4,
    bathrooms: 5,
    area: 5200,
    images: [IMG.villa1, IMG.interior3, IMG.villa2, IMG.interior1],
    description:
      "Four bedrooms arranged around a planted central courtyard, where indoor and outdoor blur. A 12-metre lap pool, a double-volume foyer, and a basement home theatre make this one of Kokapet's most quietly assured residences.",
    amenities: [
      "Private pool",
      "Landscaped garden",
      "Home theatre",
      "Staff quarters",
      "Solar power",
      "4-car garage",
    ],
    featured: true,
    agentId: "ag-4",
    yearBuilt: 2022,
    status: "For Sale",
  },
  {
    id: "p-03",
    title: "The Aerie Penthouse",
    price: 125000000,
    location: "Worli, Mumbai",
    type: "Penthouse",
    bedrooms: 4,
    bathrooms: 4,
    area: 4800,
    images: [IMG.penthouse1, IMG.penthouse2, IMG.interior2, IMG.interior3],
    description:
      "A full-floor penthouse crowning a Worli tower, with 270° views spanning the sea link to the racecourse. Private elevator entry, a 40-foot living gallery, and a terrace built for long Mumbai evenings.",
    amenities: [
      "Private elevator",
      "Sea view",
      "Wrap terrace",
      "Wine cellar",
      "Smart glass",
      "Valet parking",
    ],
    featured: true,
    agentId: "ag-5",
    yearBuilt: 2024,
    status: "For Sale",
  },
  {
    id: "p-04",
    title: "Banyan Court Apartment",
    price: 9500000,
    location: "Indiranagar, Bengaluru",
    type: "Apartment",
    bedrooms: 2,
    bathrooms: 2,
    area: 1280,
    images: [IMG.apartment2, IMG.interior1, IMG.apartment3, IMG.interior2],
    description:
      "A light, low-rise two-bedroom on a leafy Indiranagar lane — walkable to cafés yet set back from the noise. Cross-ventilated, freshly finished, and ready to move into.",
    amenities: [
      "Covered parking",
      "Power backup",
      "Rainwater harvesting",
      "Clubhouse",
      "24/7 security",
    ],
    featured: false,
    agentId: "ag-3",
    yearBuilt: 2019,
    status: "For Sale",
  },
  {
    id: "p-05",
    title: "Loft 9 — Industrial Rental",
    price: 95000,
    location: "Koramangala, Bengaluru",
    type: "Apartment",
    bedrooms: 2,
    bathrooms: 2,
    area: 1500,
    images: [IMG.interior3, IMG.apartment1, IMG.interior2, IMG.apartment3],
    description:
      "An exposed-brick loft with 11-foot ceilings and steel-frame windows, fully furnished for a turnkey move. Designed for someone who wants character without the maintenance.",
    amenities: [
      "Fully furnished",
      "High-speed internet",
      "Gym access",
      "Pet friendly",
      "Reserved parking",
    ],
    featured: false,
    agentId: "ag-3",
    yearBuilt: 2021,
    status: "For Rent",
  },
  {
    id: "p-06",
    title: "Riverstone Commercial Block",
    price: 210000000,
    location: "HITEC City, Hyderabad",
    type: "Commercial",
    bedrooms: 0,
    bathrooms: 8,
    area: 24000,
    images: [IMG.commercial1, IMG.commercial2, IMG.interior2, IMG.apartment1],
    description:
      "A Grade-A commercial plate in the heart of HITEC City — 24,000 sq ft of column-free, LEED-Gold office space with structured parking and a double-height lobby. Leased-and-ready or vacant possession.",
    amenities: [
      "LEED Gold",
      "Structured parking",
      "Backup power",
      "Fibre ready",
      "Cafeteria",
      "Metro access",
    ],
    featured: true,
    agentId: "ag-2",
    yearBuilt: 2021,
    status: "For Sale",
  },
  {
    id: "p-07",
    title: "Palm Grove Garden Villa",
    price: 64000000,
    location: "ECR, Chennai",
    type: "Villa",
    bedrooms: 4,
    bathrooms: 4,
    area: 4400,
    images: [IMG.villa2, IMG.villa3, IMG.interior1, IMG.interior3],
    description:
      "A coastal villa minutes from the ECR shoreline, with a sun-drenched veranda, an outdoor shower, and mature palms framing the entry. Sea breeze included.",
    amenities: [
      "Private garden",
      "Outdoor shower",
      "Solar heating",
      "Modular kitchen",
      "Borewell",
      "3-car garage",
    ],
    featured: false,
    agentId: "ag-4",
    yearBuilt: 2020,
    status: "For Sale",
  },
  {
    id: "p-08",
    title: "Cloud Nine Penthouse",
    price: 88000000,
    location: "Koregaon Park, Pune",
    type: "Penthouse",
    bedrooms: 3,
    bathrooms: 4,
    area: 3600,
    images: [IMG.penthouse2, IMG.penthouse1, IMG.interior2, IMG.interior1],
    description:
      "A duplex penthouse over leafy Koregaon Park, with a private plunge pool on the terrace and a glass-walled study under the eaves. Quiet, green, and rare.",
    amenities: [
      "Plunge pool",
      "Private terrace",
      "Duplex layout",
      "Italian marble",
      "Smart home",
      "2 covered parks",
    ],
    featured: true,
    agentId: "ag-5",
    yearBuilt: 2023,
    status: "For Sale",
  },
  {
    id: "p-09",
    title: "Lakeview Plot — Gated Enclave",
    price: 32000000,
    location: "Devanahalli, Bengaluru",
    type: "Plot",
    bedrooms: 0,
    bathrooms: 0,
    area: 6000,
    images: [IMG.plot1, IMG.plot2, IMG.villa2, IMG.commercial2],
    description:
      "A north-facing 6,000 sq ft plot inside a gated enclave near the airport corridor, with underground utilities and a lake-facing aspect. Clear title, build-ready.",
    amenities: [
      "Gated community",
      "Underground utilities",
      "Lake view",
      "Wide roads",
      "Clear title",
      "Park frontage",
    ],
    featured: false,
    agentId: "ag-4",
    yearBuilt: 2024,
    status: "For Sale",
  },
  {
    id: "p-10",
    title: "The Maple — City Apartment",
    price: 55000,
    location: "Bandra West, Mumbai",
    type: "Apartment",
    bedrooms: 1,
    bathrooms: 1,
    area: 720,
    images: [IMG.apartment3, IMG.interior2, IMG.apartment1, IMG.interior1],
    description:
      "A compact, beautifully laid-out one-bedroom in the heart of Bandra — walk to Carter Road, the cafés, and the promenade. Furnished and available on a long lease.",
    amenities: [
      "Furnished",
      "Sea-facing balcony",
      "Lift",
      "24/7 security",
      "Gas pipeline",
    ],
    featured: false,
    agentId: "ag-3",
    yearBuilt: 2018,
    status: "For Rent",
  },
  {
    id: "p-11",
    title: "Heritage Row Commercial Suite",
    price: 145000,
    location: "Connaught Place, New Delhi",
    type: "Commercial",
    bedrooms: 0,
    bathrooms: 3,
    area: 3200,
    images: [IMG.commercial2, IMG.commercial1, IMG.interior3, IMG.apartment2],
    description:
      "A characterful office suite in a restored Connaught Place block — original columns, high ceilings, and a marquee address. Leased per month, fit-out ready.",
    amenities: [
      "Prime address",
      "High ceilings",
      "Backup power",
      "Conference room",
      "Metro adjacent",
      "Reception",
    ],
    featured: false,
    agentId: "ag-2",
    yearBuilt: 2017,
    status: "For Rent",
  },
  {
    id: "p-12",
    title: "Serene Heights — Garden Apartment",
    price: 18500000,
    location: "Gachibowli, Hyderabad",
    type: "Apartment",
    bedrooms: 3,
    bathrooms: 3,
    area: 1950,
    images: [IMG.apartment1, IMG.apartment2, IMG.interior1, IMG.interior3],
    description:
      "A ground-floor garden apartment with its own planted deck, in a low-density Gachibowli community. Three bedrooms, two balconies, and a calm that belies the location.",
    amenities: [
      "Private deck",
      "Clubhouse",
      "Swimming pool",
      "Kids' play area",
      "Jogging track",
      "Covered parking",
    ],
    featured: true,
    agentId: "ag-1",
    yearBuilt: 2022,
    status: "For Sale",
  },
  {
    id: "p-13",
    title: "Vista Hills Villa",
    price: 56000000,
    location: "Dona Paula, Goa",
    type: "Villa",
    bedrooms: 3,
    bathrooms: 4,
    area: 3800,
    images: [IMG.villa3, IMG.villa1, IMG.interior2, IMG.interior1],
    description:
      "A hillside Goan villa with a Portuguese-tiled roof, an infinity edge pool, and a terrace that catches the sunset over the Arabian Sea. Sold furnished.",
    amenities: [
      "Infinity pool",
      "Sea view",
      "Furnished",
      "Open kitchen",
      "Garden",
      "2-car garage",
    ],
    featured: false,
    agentId: "ag-4",
    yearBuilt: 2021,
    status: "For Sale",
  },
  {
    id: "p-14",
    title: "Orchard Investment Plot",
    price: 14500000,
    location: "Shamshabad, Hyderabad",
    type: "Plot",
    bedrooms: 0,
    bathrooms: 0,
    area: 4000,
    images: [IMG.plot2, IMG.plot1, IMG.commercial1, IMG.villa2],
    description:
      "A regular-shaped 4,000 sq ft plot along the airport growth corridor, with road frontage and approved layout. A clean entry point for a first land investment.",
    amenities: [
      "Approved layout",
      "Road frontage",
      "Clear title",
      "Corner plot",
      "Growth corridor",
    ],
    featured: false,
    agentId: "ag-4",
    yearBuilt: 2024,
    status: "For Sale",
  },
];

export function getPropertyById(id: string): Property | undefined {
  return properties.find((p) => p.id === id);
}

export function getFeaturedProperties(): Property[] {
  return properties.filter((p) => p.featured);
}

/** Same type or shared location, excluding the current property. */
export function getSimilarProperties(property: Property, limit = 3): Property[] {
  const city = property.location.split(",").pop()?.trim() ?? "";
  return properties
    .filter((p) => p.id !== property.id)
    .filter((p) => p.type === property.type || p.location.includes(city))
    .slice(0, limit);
}

export const allLocations: string[] = Array.from(
  new Set(properties.map((p) => p.location)),
).sort();

export const allTypes: Property["type"][] = [
  "Apartment",
  "Villa",
  "Penthouse",
  "Plot",
  "Commercial",
];
