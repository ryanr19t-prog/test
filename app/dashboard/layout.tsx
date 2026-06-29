import Sidebar from "@/components/dashboard/Sidebar";
import Topbar from "@/components/dashboard/Topbar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1 flex flex-col min-h-screen">
        <Topbar />
        <div className="p-6 bg-gray-50 flex-1">{children}</div>
      </div>
    </div>
  );
}