import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "TireDrop - Launch Your Tire Business Without Inventory",
  description: "Sell tires online while TireDrop handles sourcing, warehousing, and shipping.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-black antialiased">
        {children}
      </body>
    </html>
  );
}
