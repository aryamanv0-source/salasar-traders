import { products } from "../../data/products";
import Link from "next/link";
import ProductCard from "../../../components/ProductCard";

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const product = products.find(p => p.id === params.id);

  if (!product) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center bg-gray-50">
        <h1 className="text-4xl font-black text-gray-900 mb-6">Product Not Found</h1>
        <Link href="/products" className="btn-primary text-xl px-10 py-4 rounded-xl shadow-lg">Back to Catalog</Link>
      </div>
    );
  }

  // Get some related products (same category, excluding current)
  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="bg-gray-50 min-h-screen py-10 relative overflow-hidden">
      {/* Background aesthetics */}
      <div className="absolute top-[-20%] left-[-10%] w-[80%] h-[80%] bg-primary-100 rounded-full blur-[150px] opacity-40 -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-10 font-medium" aria-label="Breadcrumb">
          <ol className="list-none p-0 inline-flex items-center">
            <li className="flex items-center">
              <Link href="/" className="hover:text-primary-600 transition-colors">Home</Link>
              <span className="mx-3 text-gray-300">/</span>
            </li>
            <li className="flex items-center">
              <Link href="/products" className="hover:text-primary-600 transition-colors">Products</Link>
              <span className="mx-3 text-gray-300">/</span>
            </li>
            <li className="flex items-center">
              <Link href={`/products?category=${encodeURIComponent(product.category)}`} className="hover:text-primary-600 transition-colors">{product.category}</Link>
              <span className="mx-3 text-gray-300">/</span>
            </li>
            <li className="text-gray-900 font-bold truncate max-w-xs">{product.name}</li>
          </ol>
        </nav>

        {/* Main Product Section */}
        <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-[0_8px_40px_rgb(0,0,0,0.06)] border border-white overflow-hidden mb-16 relative">
          <div className="flex flex-col md:flex-row">
            
            {/* Image Gallery */}
            <div className="md:w-1/2 p-0 bg-gray-50 flex items-center justify-center border-b md:border-b-0 md:border-r border-gray-100 min-h-[500px] relative overflow-hidden group">
              <span className="absolute top-6 left-6 bg-white/90 backdrop-blur-md text-primary-800 border border-primary-100 text-sm px-4 py-2 rounded-full font-bold shadow-md z-20">
                {product.category}
              </span>
              
              {product.image ? (
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
                />
              ) : (
                <div className="text-9xl text-gray-300 group-hover:scale-110 transition-transform duration-500">📦</div>
              )}
              
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none"></div>
            </div>

            {/* Product Details */}
            <div className="md:w-1/2 p-8 lg:p-12 flex flex-col">
              <div className="mb-8">
                <h1 className="text-4xl lg:text-5xl font-black text-gray-900 mb-4 tracking-tight leading-tight">{product.name}</h1>
                <p className="text-3xl font-black text-primary-600 bg-primary-50 inline-block px-4 py-2 rounded-xl mb-6">{product.price}</p>
                <p className="text-lg text-gray-600 leading-relaxed font-medium">{product.description}</p>
              </div>

              {/* Specifications */}
              <div className="mb-10 bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-5 flex items-center"><span className="mr-2 text-2xl">📋</span> Specifications</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-5 gap-x-6">
                  <div className="bg-white p-3 rounded-xl shadow-sm">
                    <span className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Material</span>
                    <span className="font-bold text-gray-900">{product.specs.material}</span>
                  </div>
                  <div className="bg-white p-3 rounded-xl shadow-sm">
                    <span className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Size/Dimensions</span>
                    <span className="font-bold text-gray-900">{product.specs.size}</span>
                  </div>
                  <div className="bg-white p-3 rounded-xl shadow-sm">
                    <span className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Application</span>
                    <span className="font-bold text-gray-900">{product.specs.application}</span>
                  </div>
                  {product.specs.brand && (
                    <div className="bg-white p-3 rounded-xl shadow-sm">
                      <span className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Brand</span>
                      <span className="font-bold text-gray-900">{product.specs.brand}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 mt-auto">
                <a href="#inquiry-form" className="bg-gray-900 hover:bg-primary-600 text-white font-black text-lg py-4 rounded-2xl shadow-[0_10px_20px_rgba(0,0,0,0.1)] transition-all hover:-translate-y-1 flex-1 text-center justify-center flex items-center">
                  Request Bulk Quote
                </a>
                <a href={`https://wa.me/918668458529?text=I am interested in ${product.name}`} target="_blank" rel="noopener noreferrer" className="bg-green-500 hover:bg-green-400 text-white font-black text-lg py-4 rounded-2xl shadow-[0_10px_20px_rgba(34,197,94,0.3)] transition-all hover:-translate-y-1 flex-1 text-center justify-center flex items-center">
                  <span className="mr-2 text-2xl">💬</span> WhatsApp Now
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Inquiry Form Section */}
        <div id="inquiry-form" className="bg-industrial-dark rounded-3xl shadow-2xl border border-gray-800 p-8 md:p-14 mb-20 max-w-5xl mx-auto relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary-600/20 blur-[80px] rounded-full pointer-events-none"></div>
          
          <div className="text-center mb-12 relative z-10">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tight">Interested in {product.name}?</h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">Skip the wait. Send your exact requirements and our sourcing experts will get back to you with wholesale pricing instantly.</p>
          </div>
          
          <form className="space-y-6 relative z-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-gray-400 mb-2 uppercase tracking-wide">Full Name <span className="text-primary-500">*</span></label>
                <input type="text" className="w-full bg-gray-900/50 border border-gray-700 text-white rounded-xl py-4 px-5 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all" required />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-400 mb-2 uppercase tracking-wide">Company Name</label>
                <input type="text" className="w-full bg-gray-900/50 border border-gray-700 text-white rounded-xl py-4 px-5 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all" />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-gray-400 mb-2 uppercase tracking-wide">Email Address <span className="text-primary-500">*</span></label>
                <input type="email" className="w-full bg-gray-900/50 border border-gray-700 text-white rounded-xl py-4 px-5 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all" required />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-400 mb-2 uppercase tracking-wide">Phone / Mobile <span className="text-primary-500">*</span></label>
                <input type="tel" className="w-full bg-gray-900/50 border border-gray-700 text-white rounded-xl py-4 px-5 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all" required />
              </div>
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-400 mb-2 uppercase tracking-wide">Required Quantity <span className="text-primary-500">*</span></label>
              <input type="text" placeholder="e.g., 500 Pieces, 2 Tons" className="w-full bg-gray-900/50 border border-gray-700 text-white rounded-xl py-4 px-5 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all placeholder-gray-600" required />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-400 mb-2 uppercase tracking-wide">Additional Details / Technical Specs</label>
              <textarea rows={4} className="w-full bg-gray-900/50 border border-gray-700 text-white rounded-xl py-4 px-5 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none"></textarea>
            </div>
            <div className="text-center pt-4">
              <button type="button" className="w-full sm:w-auto bg-primary-600 hover:bg-primary-500 text-white font-black text-xl px-12 py-5 rounded-2xl shadow-[0_10px_30px_rgba(37,99,235,0.3)] transition-all hover:-translate-y-1">
                Submit Requirement
              </button>
            </div>
          </form>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mb-20">
            <h2 className="text-3xl font-black text-gray-900 mb-8 border-b-2 border-primary-100 pb-4 inline-block">People Also Sourced</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {relatedProducts.map(p => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}

      </div>
      
      {/* Sticky Mobile CTA */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white/90 backdrop-blur-xl border-t border-gray-200 shadow-[0_-10px_30px_rgba(0,0,0,0.1)] sm:hidden z-40 flex gap-3">
        <a href="#inquiry-form" className="bg-gray-900 text-white font-bold flex-1 py-4 text-center rounded-xl">Get Quote</a>
        <a href={`https://wa.me/918668458529?text=I am interested in ${product.name}`} className="bg-green-500 text-white font-bold flex-1 py-4 px-4 rounded-xl flex items-center justify-center">
          <span className="mr-2 text-xl">💬</span> WhatsApp
        </a>
      </div>
    </div>
  );
}

export function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }));
}
