// Mock database layer for TireDrop MVP

export type Tire = {
  id: number;
  brand: string;
  name: string;
  season: "Winter" | "Performance" | "All Season";
  size: string;
  wholesalePrice: number;
  retailPrice: number;
  stock: number;
};

export type User = {
  id: number;
  email: string;
  role: "dealer" | "admin";
};

export type Order = {
  id: number;
  userId: number;
  tireId: number;
  quantity: number;
  total: number;
  status: "pending" | "processing" | "shipped";
};

export const tires: Tire[] = [
  {
    id: 1,
    brand: "Michelin",
    name: "Pilot Sport 4S",
    season: "Performance",
    size: "19",
    wholesalePrice: 120,
    retailPrice: 180,
    stock: 34,
  },
  {
    id: 2,
    brand: "Bridgestone",
    name: "Blizzak WS90",
    season: "Winter",
    size: "17",
    wholesalePrice: 110,
    retailPrice: 170,
    stock: 50,
  },
  {
    id: 3,
    brand: "Goodyear",
    name: "Eagle F1",
    season: "Performance",
    size: "18",
    wholesalePrice: 115,
    retailPrice: 175,
    stock: 22,
  },
  {
    id: 4,
    brand: "Continental",
    name: "TrueContact",
    season: "All Season",
    size: "16",
    wholesalePrice: 95,
    retailPrice: 150,
    stock: 60,
  },
];

export const users: User[] = [
  { id: 1, email: "admin@tiredrop.com", role: "admin" },
  { id: 2, email: "dealer@shop.com", role: "dealer" },
];

export const orders: Order[] = [
  {
    id: 1,
    userId: 2,
    tireId: 1,
    quantity: 2,
    total: 360,
    status: "processing",
  },
];

// Helper: profit calculation
export function calculateProfit(tireId: number, quantity: number) {
  const tire = tires.find(t => t.id === tireId);
  if (!tire) return 0;

  return (tire.retailPrice - tire.wholesalePrice) * quantity;
}
