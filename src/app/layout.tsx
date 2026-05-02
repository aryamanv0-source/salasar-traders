import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Salasar Traders | Quality Valves, Trusted Solutions",
  description: "Wholesaler and distributor of pipe fittings, HDPE pipes, and premium quality valves from Nagpur, India.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <nav className="navbar container">
          <Link href="/" className="logo">
            Salasar<span>Traders</span>
          </Link>
          <ul className="nav-links">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/products">Products</Link></li>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </nav>
        
        <main>
          {children}
        </main>

        <footer className="footer">
          <div className="container">
            <p className="footer-text">
              &copy; {new Date().getFullYear()} Salasar Traders. All rights reserved. | Nagpur, Maharashtra, India.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
