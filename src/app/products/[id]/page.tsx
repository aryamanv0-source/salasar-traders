import { products } from "../../data/products";
import Link from "next/link";
import ProductCard from "../../../components/ProductCard";

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const product = products.find(p => p.id === params.id);

  if (!product) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center bg-gray-50">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Product Not Found</h1>
        <Link href="/products" className="btn-primary">Back to Catalog</Link>
      </div>
    );
  }

  // Get some related products (same category, excluding current)
  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="bg-gray-50 min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-8" aria-label="Breadcrumb">
          <ol className="list-none p-0 inline-flex">
            <li className="flex items-center">
              <Link href="/" className="hover:text-primary-600">Home</Link>
              <span className="mx-2">/</span>
            </li>
            <li className="flex items-center">
              <Link href="/products" className="hover:text-primary-600">Products</Link>
              <span className="mx-2">/</span>
            </li>
            <li className="flex items-center">
              <Link href={`/products?category=${encodeURIComponent(product.category)}`} className="hover:text-primary-600">{product.category}</Link>
              <span className="mx-2">/</span>
            </li>
            <li className="text-gray-900 font-medium truncate max-w-xs">{product.name}</li>
          </ol>
        </nav>

        {/* Main Product Section */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden mb-12">
          <div className="flex flex-col md:flex-row">
            
            {/* Image Gallery */}
            <div className="md:w-1/2 p-8 bg-gray-50 flex items-center justify-center border-b md:border-b-0 md:border-r border-gray-200 min-h-[400px] relative">
              <span className="absolute top-4 left-4 bg-primary-100 text-primary-800 text-sm px-3 py-1 rounded font-medium">
                {product.category}
              </span>
              <div className="text-9xl text-gray-300">📦</div>
            </div>

            {/* Product Details */}
            <div className="md:w-1/2 p-8 lg:p-10">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
              <p className="text-2xl font-bold text-primary-600 mb-6">{product.price}</p>
              
              <div className="prose prose-sm text-gray-600 mb-8">
                <p>{product.description}</p>
              </div>

              {/* Specifications */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 border-b border-gray-200 pb-2">Specifications</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6 text-sm">
                  <div>
                    <span className="block text-gray-500 mb-1">Material</span>
                    <span className="font-medium text-gray-900">{product.specs.material}</span>
                  </div>
                  <div>
                    <span className="block text-gray-500 mb-1">Size/Dimensions</span>
                    <span className="font-medium text-gray-900">{product.specs.size}</span>
                  </div>
                  <div>
                    <span className="block text-gray-500 mb-1">Application</span>
                    <span className="font-medium text-gray-900">{product.specs.application}</span>
                  </div>
                  {product.specs.brand && (
                    <div>
                      <span className="block text-gray-500 mb-1">Brand</span>
                      <span className="font-medium text-gray-900">{product.specs.brand}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 mt-auto">
                <a href="#inquiry-form" className="btn-primary py-3 flex-1 text-center justify-center text-lg">
                  Get Latest Quote
                </a>
                <a href={`https://wa.me/910000000000?text=I am interested in ${product.name}`} target="_blank" rel="noopener noreferrer" className="btn-secondary py-3 flex-1 text-center justify-center border-green-500 text-green-600 hover:bg-green-50 text-lg flex items-center">
                  <span className="mr-2">💬</span> WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Inquiry Form Section */}
        <div id="inquiry-form" className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 mb-12 max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Send Inquiry for this Product</h2>
            <p className="text-gray-600">Please provide your requirements below and our sales team will contact you shortly.</p>
          </div>
          
          <form className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                <input type="text" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-primary-500" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Company Name</label>
                <input type="text" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-primary-500" />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                <input type="email" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-primary-500" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone / Mobile *</label>
                <input type="tel" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-primary-500" required />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Required Quantity *</label>
              <input type="text" placeholder="e.g., 500 Pieces, 2 Tons" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-primary-500" required />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Additional Details</label>
              <textarea rows={4} className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-primary-500"></textarea>
            </div>
            <div className="text-center">
              <button type="button" className="btn-primary w-full sm:w-auto px-10 py-3 text-lg">
                Submit Requirement
              </button>
            </div>
          </form>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-2">Related Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map(p => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}

      </div>
      
      {/* Sticky Mobile CTA */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-200 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] sm:hidden z-40 flex gap-2">
        <a href="#inquiry-form" className="btn-primary flex-1 py-3 text-center">Get Quote</a>
        <a href={`https://wa.me/910000000000`} className="bg-green-500 text-white font-medium py-3 px-4 rounded-md flex items-center justify-center">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
          </svg>
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
