export default function Page() {
  return (
    <main className="min-h-screen">

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 pt-32 text-center">
        <h1 className="text-5xl md:text-6xl font-bold">
          Start Your Tire Business Without Inventory
        </h1>
        <p className="mt-6 text-gray-600 text-lg">
          Sell tires online while TireDrop handles sourcing, warehousing, and shipping.
        </p>
        <div className="mt-8 flex gap-4 justify-center">
          <button className="px-6 py-3 bg-black text-white rounded-xl">
            Start Selling
          </button>
          <button className="px-6 py-3 border rounded-xl">
            Browse Catalog
          </button>
        </div>
      </section>

      {/* FEATURES */}
      <section className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-4 gap-6">
        {[
          ["No Inventory", "Sell without stocking tires"],
          ["Wholesale Pricing", "Direct manufacturer access"],
          ["Auto Fulfillment", "Orders shipped automatically"],
          ["Live Stock", "Real-time inventory updates"],
        ].map(([t, d]) => (
          <div key={t} className="p-6 border rounded-2xl">
            <h3 className="font-semibold">{t}</h3>
            <p className="text-sm text-gray-500 mt-2">{d}</p>
          </div>
        ))}
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-gray-50 py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold">How It Works</h2>
          <div className="mt-10 space-y-4 text-left">
            <p>1. Connect your store</p>
            <p>2. Choose tires from catalog</p>
            <p>3. Customers place orders</p>
            <p>4. We ship directly</p>
            <p>5. You keep profit</p>
          </div>
        </div>
      </section>

      {/* PROFIT */}
      <section className="py-24 px-6 text-center">
        <h2 className="text-3xl font-bold">Profit Example</h2>
        <div className="mt-8 text-lg">
          Wholesale: $90 <br />
          Selling: $160 <br />
          Profit: $70
        </div>
      </section>

      {/* CTA */}
      <section className="bg-black text-white py-28 text-center">
        <h2 className="text-4xl font-bold">Launch Your Tire Business Today</h2>
        <button className="mt-6 px-8 py-4 bg-white text-black rounded-xl">
          Get Started
        </button>
      </section>

    </main>
  );
}
