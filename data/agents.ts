import type { Agent } from "@/types";

export const agents: Agent[] = [
  {
    id: "ag-1",
    name: "Ananya Reddy",
    role: "Principal Agent · Luxury Homes",
    photo: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&q=80&auto=format&fit=crop",
    phone: "+91 98480 11223",
    email: "ananya@meridianestates.in",
    bio: "Fifteen years closing landmark residences across Hyderabad's most coveted addresses. Ananya pairs market intuition with a quiet, unhurried approach to negotiation.",
    experience: 15,
    listings: 48,
    socials: { linkedin: "#", instagram: "#" },
  },
  {
    id: "ag-2",
    name: "Vikram Nair",
    role: "Senior Agent · Commercial",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80&auto=format&fit=crop",
    phone: "+91 99000 44556",
    email: "vikram@meridianestates.in",
    bio: "Vikram advises founders and funds on Grade-A office and retail. He reads a balance sheet as fluently as a floor plan.",
    experience: 11,
    listings: 33,
    socials: { linkedin: "#", twitter: "#" },
  },
  {
    id: "ag-3",
    name: "Meera Iyer",
    role: "Agent · Apartments & Rentals",
    photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&q=80&auto=format&fit=crop",
    phone: "+91 90080 77889",
    email: "meera@meridianestates.in",
    bio: "Meera makes the rental search feel effortless, matching young professionals with homes that actually fit their lives.",
    experience: 6,
    listings: 61,
    socials: { instagram: "#", linkedin: "#" },
  },
  {
    id: "ag-4",
    name: "Rohan Kapoor",
    role: "Agent · Villas & Plots",
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&q=80&auto=format&fit=crop",
    phone: "+91 98111 22334",
    email: "rohan@meridianestates.in",
    bio: "From gated villa communities to investment-grade plots, Rohan knows which land holds its value — and which only looks the part.",
    experience: 9,
    listings: 27,
    socials: { linkedin: "#", twitter: "#" },
  },
  {
    id: "ag-5",
    name: "Sara Fernandes",
    role: "Agent · Penthouses",
    photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&q=80&auto=format&fit=crop",
    phone: "+91 91230 55667",
    email: "sara@meridianestates.in",
    bio: "Sara specialises in skyline living — the rare top-floor homes where light, view, and silence come together.",
    experience: 8,
    listings: 19,
    socials: { instagram: "#" },
  },
];

export function getAgentById(id: string): Agent | undefined {
  return agents.find((a) => a.id === id);
}
