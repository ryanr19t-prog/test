"use client";

import Link from "next/link";
import { LayoutDashboard, Package, ShoppingCart, Users, Settings } from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="w-64 h-screen bg-black text-white flex flex-col p-6">
      <div className="text-2xl font-bold mb-10">TireDrop</div>

      <nav className="flex flex-col gap-4 text-sm">
        <Link href="/dashboard" className="flex items-center gap-3 hover:text-gray-300">
          <LayoutDashboard size={18} /> Dashboard
        </Link>

        <Link href="/dashboard/catalog" className="flex items-center gap-3 hover:text-gray-300">
          <Package size={18} /> Catalog
        </Link>

        <Link href="/dashboard/orders" className="flex items-center gap-3 hover:text-gray-300">
          <ShoppingCart size={18} /> Orders
        </Link>

        <Link href="/dashboard/customers" className="flex items-center gap-3 hover:text-gray-300">
          <Users size={18} /> Customers
        </Link>

        <Link href="/dashboard/settings" className="flex items-center gap-3 hover:text-gray-300">
          <Settings size={18} /> Settings
        </Link>
      </nav>
    </aside>
  );
}
