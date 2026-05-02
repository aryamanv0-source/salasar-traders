import Link from "next/link";
import ProductCard from "../components/ProductCard";
import { products, categories } from "./data/products";

export default function Home() {
  const featuredProducts = products.slice(0, 4);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-industrial-dark text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          {/* A subtle grid or industrial pattern placeholder */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block py-1 px-3 rounded-full bg-primary-900 text-primary-100 text-sm font-semibold mb-6 border border-primary-800">
              IndiaMART Verified Supplier
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
              Your Trusted Partner for <span className="text-primary-500">Industrial Supplies</span>
            </h1>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl">
              Salasar Traders offers a comprehensive range of premium fasteners, industrial tools, pipes, and construction materials with unmatched bulk pricing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/products" className="btn-primary text-lg px-8 py-3">
                Explore Catalog
              </Link>
              <Link href="/contact" className="btn-outline border-gray-500 text-white hover:bg-gray-800 text-lg px-8 py-3">
                Request Bulk Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Category Grid */}
      <section className="py-16 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Browse by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {categories.map((category, index) => (
              <Link href={`/products?category=${encodeURIComponent(category)}`} key={index} className="bg-white rounded-lg p-6 text-center border border-gray-200 hover:border-primary-500 hover:shadow-md transition-all group">
                <div className="h-12 w-12 mx-auto bg-primary-50 text-primary-600 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary-100 transition-colors">
                  {/* Icon placeholder based on category */}
                  <span className="text-xl">
                    {index === 0 ? '🔩' : index === 1 ? '🔧' : index === 2 ? '🚰' : index === 3 ? '🏗️' : '⚙️'}
                  </span>
                </div>
                <h3 className="font-semibold text-gray-800 group-hover:text-primary-600">{category}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Featured Products</h2>
              <p className="text-gray-600">High-demand industrial supplies ready for dispatch.</p>
            </div>
            <Link href="/products" className="hidden sm:inline-flex text-primary-600 font-semibold hover:text-primary-800 items-center">
              View All <span className="ml-1">&rarr;</span>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          <div className="mt-10 text-center sm:hidden">
            <Link href="/products" className="btn-secondary w-full">
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-industrial-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Source From Salasar Traders?</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">We are committed to delivering quality, reliability, and value to every industrial partner.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
            <div className="p-6">
              <div className="text-5xl mb-4">🏢</div>
              <h3 className="text-xl font-bold mb-3 text-white">Extensive Inventory</h3>
              <p className="text-gray-400">Ready stock of 1000+ industrial SKUs ensuring minimal lead times for your critical projects.</p>
            </div>
            <div className="p-6">
              <div className="text-5xl mb-4">💰</div>
              <h3 className="text-xl font-bold mb-3 text-white">Wholesale Pricing</h3>
              <p className="text-gray-400">Direct distributor relationships allow us to pass significant cost savings to our bulk buyers.</p>
            </div>
            <div className="p-6">
              <div className="text-5xl mb-4">🤝</div>
              <h3 className="text-xl font-bold mb-3 text-white">Trusted Quality</h3>
              <p className="text-gray-400">100% genuine products sourced directly from ISO-certified manufacturers and global brands.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Inquiry Banner */}
      <section className="py-16 bg-primary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between text-center lg:text-left gap-8">
            <div>
              <h2 className="text-3xl font-bold text-white mb-2">Need a custom requirement?</h2>
              <p className="text-primary-100 text-lg">Send us your BOM (Bill of Materials) and we'll provide a custom quote within 24 hours.</p>
            </div>
            <div className="flex-shrink-0">
              <Link href="/contact" className="bg-white text-primary-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-md shadow-lg transition-transform hover:-translate-y-1 inline-block">
                Send Requirement
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
