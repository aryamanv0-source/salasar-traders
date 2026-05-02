import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-industrial-dark text-white pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="text-2xl font-bold text-white tracking-tight mb-4 block">
              Salasar<span className="text-primary-500">Traders</span>
            </Link>
            <p className="text-gray-400 mb-4 max-w-md">
              A trusted supplier offering a wide range of industrial, hardware, and construction materials with competitive pricing and bulk availability.
            </p>
            <div className="flex space-x-4">
              {/* Trust Badges placeholder */}
              <span className="px-3 py-1 bg-gray-800 rounded text-xs font-semibold text-gray-300 border border-gray-700">ISO 9001:2015</span>
              <span className="px-3 py-1 bg-gray-800 rounded text-xs font-semibold text-gray-300 border border-gray-700">Verified Supplier</span>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-200">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/products" className="text-gray-400 hover:text-white transition-colors">All Products</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact Supplier</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Request Callback</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-200">Contact Info</h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="flex items-start">
                <span className="mr-2">📍</span>
                <span>Nagpur - 440002, Maharashtra, India</span>
              </li>
              <li className="flex items-center">
                <span className="mr-2">📞</span>
                <span>+91 XXXXX XXXXX</span>
              </li>
              <li className="flex items-center">
                <span className="mr-2">✉️</span>
                <span>info@salasartraders.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Salasar Traders. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex space-x-4">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
