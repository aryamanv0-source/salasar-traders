import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-industrial-dark text-white pt-16 pb-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="text-3xl font-black text-white tracking-tight mb-4 block">
              Salasar<span className="text-primary-500">Traders</span>
            </Link>
            <p className="text-gray-400 mb-6 max-w-md text-lg leading-relaxed">
              A trusted supplier offering a wide range of industrial, hardware, and construction materials with competitive pricing and bulk availability.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-gray-900 rounded-lg text-xs font-bold text-gray-300 border border-gray-700 shadow-sm flex items-center">
                <span className="w-2 h-2 rounded-full bg-green-500 mr-2"></span> ISO 9001:2015
              </span>
              <span className="px-4 py-2 bg-gray-900 rounded-lg text-xs font-bold text-gray-300 border border-gray-700 shadow-sm flex items-center">
                <span className="w-2 h-2 rounded-full bg-blue-500 mr-2"></span> Verified Supplier
              </span>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6 text-white border-b border-gray-800 pb-2 inline-block">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link href="/products" className="text-gray-400 hover:text-primary-400 font-medium transition-colors">All Products</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-primary-400 font-medium transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-primary-400 font-medium transition-colors">Contact Supplier</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6 text-white border-b border-gray-800 pb-2 inline-block">Contact Info</h3>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start">
                <span className="mr-3 text-xl">📍</span>
                <span className="leading-snug">Nagpur - 440002<br/>Maharashtra, India</span>
              </li>
              <li className="flex items-center">
                <span className="mr-3 text-xl">📞</span>
                <span className="font-medium text-white tracking-wide">+91 8668458529</span>
              </li>
              <li className="flex items-center">
                <span className="mr-3 text-xl">✉️</span>
                <span className="font-medium hover:text-primary-400 transition-colors cursor-pointer">info@salasartraders.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p className="font-medium">&copy; {new Date().getFullYear()} Salasar Traders. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <Link href="#" className="hover:text-white transition-colors font-medium">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors font-medium">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
