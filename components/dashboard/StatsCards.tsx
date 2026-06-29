export default function StatsCards() {
  const stats = [
    { label: "Revenue", value: "$12,430" },
    { label: "Orders", value: "128" },
    { label: "Active Dealers", value: "24" },
    { label: "Profit Margin", value: "38%" },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {stats.map((s) => (
        <div key={s.label} className="border rounded-2xl p-4 bg-white">
          <div className="text-sm text-gray-500">{s.label}</div>
          <div className="text-xl font-bold mt-1">{s.value}</div>
        </div>
      ))}
    </div>
  );
}