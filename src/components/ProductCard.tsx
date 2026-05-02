import Link from "next/link";
import { Product } from "../app/data/products";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col h-full group">
      <div className="h-48 bg-gray-100 relative overflow-hidden flex items-center justify-center p-4">
        {/* Placeholder for actual Next/Image */}
        <div className="absolute inset-0 bg-gray-200 animate-pulse hidden"></div>
        <div className="text-4xl text-gray-400 group-hover:scale-110 transition-transform duration-500">📦</div>
        <span className="absolute top-2 left-2 bg-primary-100 text-primary-800 text-xs px-2 py-1 rounded font-medium">
          {product.category}
        </span>
      </div>
      
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-lg font-bold text-gray-900 mb-1 line-clamp-1">{product.name}</h3>
        <p className="text-sm text-gray-500 mb-3 line-clamp-2 h-10">{product.description}</p>
        
        <div className="mt-auto">
          <div className="text-lg font-bold text-primary-600 mb-4">{product.price}</div>
          <div className="flex gap-2">
            <Link href={`/products/${product.id}`} className="btn-secondary w-full text-sm py-2">
              View Details
            </Link>
            <Link href="/contact" className="btn-primary w-full text-sm py-2 px-0">
              Get Quote
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
