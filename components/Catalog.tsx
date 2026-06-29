"use client";

import { useMemo, useState } from "react";

const TIRES = [
  { id: 1, brand: "Michelin", name: "Pilot Sport 4S", season: "Performance", size: "19" },
  { id: 2, brand: "Bridgestone", name: "Blizzak WS90", season: "Winter", size: "17" },
  { id: 3, brand: "Goodyear", name: "Eagle F1", season: "Performance", size: "18" },
  { id: 4, brand: "Continental", name: "TrueContact", season: "All Season", size: "16" },
  { id: 5, brand: "Pirelli", name: "P Zero", season: "Performance", size: "20" },
  { id: 6, brand: "Nokian", name: "Hakkapeliitta R5", season: "Winter", size: "17" },
];

export default function Catalog() {
  const [brand, setBrand] = useState("All");
  const [season, setSeason] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    return TIRES.filter((t) => {
      const matchBrand = brand === "All" || t.brand === brand;
      const matchSeason = season === "All" || t.season === season;
      const matchSearch = t.name.toLowerCase().includes(search.toLowerCase());
      return matchBrand && matchSeason && matchSearch;
    });
  }, [brand, season, search]);

  return (
    <section className="max-w-6xl mx-auto px-6 py-24">
      <h2 className="text-3xl font-bold text-center">Tire Catalog</h2>

      {/* Filters */}
      <div className="mt-8 flex flex-col md:flex-row gap-4 justify-between">
        <input
          placeholder="Search tires..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border p-3 rounded-xl w-full md:w-1/3"
        />

        <select
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
          className="border p-3 rounded-xl"
        >
          <option>All</option>
          <option>Michelin</option>
          <option>Bridgestone</option>
          <option>Goodyear</option>
          <option>Continental</option>
          <option>Pirelli</option>
          <option>Nokian</option>
        </select>

        <select
          value={season}
          onChange={(e) => setSeason(e.target.value)}
          className="border p-3 rounded-xl"
        >
          <option>All</option>
          <option>Winter</option>
          <option>Performance</option>
          <option>All Season</option>
        </select>
      </div>

      {/* Grid */}
      <div className="mt-10 grid md:grid-cols-3 gap-6">
        {filtered.map((t) => (
          <div key={t.id} className="border rounded-2xl p-6 hover:shadow-lg transition">
            <div className="text-sm text-gray-500">{t.brand}</div>
            <div className="text-lg font-semibold">{t.name}</div>
            <div className="mt-2 text-sm">Season: {t.season}</div>
            <div className="text-sm">Size: {t.size}"</div>

            <button className="mt-4 px-4 py-2 bg-black text-white rounded-xl w-full">
              View Details
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
