"use client";

import { Search, Bell } from "lucide-react";

export default function Topbar() {
  return (
    <header className="h-16 border-b flex items-center justify-between px-6 bg-white">
      <div className="flex items-center gap-3 w-full max-w-md">
        <Search size={18} className="text-gray-500" />
        <input
          placeholder="Search orders, tires, customers..."
          className="w-full outline-none text-sm"
        />
      </div>

      <div className="flex items-center gap-4">
        <Bell size={18} />
        <div className="w-8 h-8 rounded-full bg-black" />
      </div>
    </header>
  );
}