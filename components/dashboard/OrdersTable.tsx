export default function OrdersTable() {
  const orders = [
    { id: 1, customer: "Dealer Shop A", tire: "Michelin Pilot Sport", status: "Processing", total: "$360" },
    { id: 2, customer: "Auto Center B", tire: "Blizzak WS90", status: "Shipped", total: "$220" },
    { id: 3, customer: "Garage C", tire: "Pirelli P Zero", status: "Pending", total: "$410" },
  ];

  return (
    <div className="border rounded-2xl bg-white overflow-hidden">
      <div className="p-4 font-semibold">Recent Orders</div>

      <table className="w-full text-sm">
        <thead className="bg-gray-50 text-left">
          <tr>
            <th className="p-3">Customer</th>
            <th className="p-3">Tire</th>
            <th className="p-3">Status</th>
            <th className="p-3">Total</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(o => (
            <tr key={o.id} className="border-t">
              <td className="p-3">{o.customer}</td>
              <td className="p-3">{o.tire}</td>
              <td className="p-3">{o.status}</td>
              <td className="p-3 font-medium">{o.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}