import StatsCards from "@/components/dashboard/StatsCards";
import OrdersTable from "@/components/dashboard/OrdersTable";

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <p className="text-gray-500">Overview of your TireDrop business</p>
      </div>

      <StatsCards />

      <OrdersTable />
    </div>
  );
}