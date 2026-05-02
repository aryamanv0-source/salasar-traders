import Link from "next/link";

export default function Navbar() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-2xl font-bold text-primary-900 tracking-tight">
              Salasar<span className="text-primary-600">Traders</span>
            </Link>
          </div>
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-600 hover:text-primary-600 font-medium transition-colors">Home</Link>
            <Link href="/products" className="text-gray-600 hover:text-primary-600 font-medium transition-colors">Products</Link>
            <Link href="/about" className="text-gray-600 hover:text-primary-600 font-medium transition-colors">About Us</Link>
            <Link href="/contact" className="text-gray-600 hover:text-primary-600 font-medium transition-colors">Contact</Link>
          </nav>
          <div className="hidden md:flex items-center">
            <Link href="/contact" className="btn-primary shadow-md hover:shadow-lg">
              Get Quote
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button className="text-gray-600 hover:text-primary-600 focus:outline-none">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
