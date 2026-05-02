import Link from "next/link";
import ProductCard from "../components/ProductCard";
import { products, categories } from "./data/products";

export default function Home() {
  const featuredProducts = products.slice(0, 4);

  return (
    <div className="bg-gray-50 selection:bg-primary-500 selection:text-white">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] bg-industrial-dark text-white overflow-hidden flex items-center">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 bg-hero-pattern bg-cover bg-center opacity-20 mix-blend-overlay"></div>
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary-600/20 rounded-full blur-[120px] mix-blend-screen animate-blob"></div>
        <div className="absolute bottom-0 left-[-200px] w-[600px] h-[600px] bg-industrial-glow/20 rounded-full blur-[100px] mix-blend-screen animate-blob" style={{ animationDelay: '2s' }}></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-4xl backdrop-blur-sm bg-industrial-dark/30 p-8 md:p-12 rounded-3xl border border-white/10 shadow-2xl animate-fade-in-up">
            <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-white/10 backdrop-blur-md text-primary-300 text-sm font-bold mb-8 border border-white/20 shadow-[0_0_15px_rgba(59,130,246,0.3)]">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
              IndiaMART Verified Premium Supplier
            </div>
            <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6 leading-tight">
              Industrial Grade. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-primary-300 to-industrial-glow">Wholesale Precision.</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl font-light leading-relaxed">
              Salasar Traders delivers extreme durability and performance with our premium fasteners, tools, and pipes. Engineered for those who build the future.
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <Link href="/products" className="group relative inline-flex items-center justify-center bg-primary-600 hover:bg-primary-500 text-white font-bold text-lg px-8 py-4 rounded-xl transition-all duration-300 overflow-hidden shadow-[0_0_30px_rgba(59,130,246,0.5)] hover:shadow-[0_0_40px_rgba(59,130,246,0.8)] hover:-translate-y-1">
                <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-10"></span>
                <span className="relative">Explore Catalog</span>
              </Link>
              <Link href="/contact" className="inline-flex items-center justify-center bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 font-bold text-lg px-8 py-4 rounded-xl transition-all duration-300 hover:-translate-y-1">
                Request Bulk Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Category Grid */}
      <section className="py-24 relative z-20 -mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {categories.map((category, index) => (
              <Link href={`/products?category=${encodeURIComponent(category)}`} key={index} className="group bg-white/90 backdrop-blur-md rounded-2xl p-8 text-center border border-gray-100 shadow-xl hover:shadow-2xl hover:shadow-primary-500/20 hover:-translate-y-2 transition-all duration-300">
                <div className="h-16 w-16 mx-auto bg-gradient-to-br from-primary-50 to-primary-100 text-primary-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-inner">
                  <span className="text-3xl">
                    {index === 0 ? '🔩' : index === 1 ? '🔧' : index === 2 ? '🚰' : index === 3 ? '🏗️' : '⚙️'}
                  </span>
                </div>
                <h3 className="font-extrabold text-gray-800 group-hover:text-primary-600 transition-colors">{category}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-full h-[500px] bg-primary-50/50 -skew-y-3 -z-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight">Featured Gear</h2>
              <p className="text-xl text-gray-500 max-w-xl">High-demand industrial supplies ready for immediate dispatch across India.</p>
            </div>
            <Link href="/products" className="hidden md:inline-flex items-center gap-2 bg-gray-900 hover:bg-gray-800 text-white font-bold py-3 px-6 rounded-xl transition-all hover:gap-4">
              View All Inventory <span>&rarr;</span>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          <div className="mt-12 text-center md:hidden">
            <Link href="/products" className="btn-primary w-full py-4 text-lg rounded-xl">
              View All Inventory
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-32 bg-industrial-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900/40 via-industrial-dark to-industrial-dark"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">Why Salasar Traders?</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">We are committed to delivering extreme quality, iron-clad reliability, and wholesale value to every industrial partner.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-10 rounded-3xl hover:bg-white/10 transition-colors duration-300">
              <div className="text-6xl mb-6 animate-float">🏢</div>
              <h3 className="text-2xl font-bold mb-4 text-white">Massive Inventory</h3>
              <p className="text-gray-400 text-lg">Ready stock of 1000+ industrial SKUs ensuring zero downtime for your critical projects.</p>
            </div>
            <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-10 rounded-3xl hover:bg-white/10 transition-colors duration-300" style={{ animationDelay: '0.2s' }}>
              <div className="text-6xl mb-6 animate-float" style={{ animationDelay: '1s' }}>💰</div>
              <h3 className="text-2xl font-bold mb-4 text-white">Direct Wholesale</h3>
              <p className="text-gray-400 text-lg">Direct distributor relationships allow us to slash prices and pass massive savings to you.</p>
            </div>
            <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-10 rounded-3xl hover:bg-white/10 transition-colors duration-300" style={{ animationDelay: '0.4s' }}>
              <div className="text-6xl mb-6 animate-float" style={{ animationDelay: '2s' }}>🛡️</div>
              <h3 className="text-2xl font-bold mb-4 text-white">Ironclad Quality</h3>
              <p className="text-gray-400 text-lg">100% genuine products sourced directly from ISO-certified global manufacturers.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Inquiry Banner */}
      <section className="py-24 bg-gradient-to-r from-primary-600 to-primary-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 mix-blend-overlay"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between text-center lg:text-left gap-10">
            <div>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">Need a custom supply chain?</h2>
              <p className="text-primary-100 text-xl max-w-2xl">Send us your entire Bill of Materials. We'll provide a devastatingly competitive quote within 24 hours.</p>
            </div>
            <div className="flex-shrink-0 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Link href="/contact" className="bg-white text-primary-700 hover:bg-gray-100 font-black text-xl py-4 px-10 rounded-xl shadow-2xl transition-transform hover:scale-105 inline-block w-full sm:w-auto text-center">
                Send Requirement
              </Link>
              <a href="https://wa.me/918668458529" target="_blank" rel="noopener noreferrer" className="bg-green-500 text-white hover:bg-green-400 font-black text-xl py-4 px-10 rounded-xl shadow-2xl transition-transform hover:scale-105 inline-flex items-center justify-center w-full sm:w-auto">
                <span className="mr-2 text-2xl">💬</span> Chat Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
