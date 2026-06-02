export type PropertyType =
  | "Apartment"
  | "Villa"
  | "Penthouse"
  | "Plot"
  | "Commercial";

export type PropertyStatus = "For Sale" | "For Rent";

export interface Property {
  id: string;
  title: string;
  price: number;
  location: string;
  type: PropertyType;
  bedrooms: number;
  bathrooms: number;
  area: number; // sq ft
  images: string[];
  description: string;
  amenities: string[];
  featured: boolean;
  agentId: string;
  yearBuilt: number;
  status: PropertyStatus;
}

export interface Agent {
  id: string;
  name: string;
  role: string;
  photo: string;
  phone: string;
  email: string;
  bio: string;
  experience: number; // years
  listings: number;
  socials: {
    twitter?: string;
    linkedin?: string;
    instagram?: string;
  };
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string; // ISO
  readTime: number; // minutes
  cover: string;
  author: string;
  featured: boolean;
  content: string[]; // paragraphs
}

export type SortKey =
  | "newest"
  | "price-asc"
  | "price-desc"
  | "area-desc";

export interface PropertyFilters {
  search: string;
  location: string;
  type: PropertyType | "All";
  status: PropertyStatus | "All";
  minPrice: number | null;
  maxPrice: number | null;
  bedrooms: number | null;
  bathrooms: number | null;
}
