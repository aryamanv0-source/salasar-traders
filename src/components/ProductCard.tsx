import Link from "next/link";
import { Product } from "../app/data/products";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="group bg-white/80 backdrop-blur-md rounded-2xl border border-gray-100 overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(59,130,246,0.15)] hover:-translate-y-2 transition-all duration-500 flex flex-col h-full relative">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0"></div>
      
      <div className="h-56 bg-gray-50 relative overflow-hidden flex items-center justify-center p-0 z-10 group-hover:bg-primary-50/50 transition-colors duration-500">
        {product.image ? (
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
          />
        ) : (
          <div className="text-4xl text-gray-300 group-hover:scale-110 group-hover:text-primary-300 transition-all duration-500">📦</div>
        )}
        
        <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-primary-800 border border-primary-100 text-xs px-3 py-1.5 rounded-full font-bold shadow-sm z-20">
          {product.category}
        </span>
        
        <div className="absolute inset-0 bg-primary-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow relative z-10 bg-white">
        <h3 className="text-xl font-extrabold text-gray-900 mb-2 line-clamp-1 group-hover:text-primary-600 transition-colors duration-300">{product.name}</h3>
        <p className="text-sm text-gray-500 mb-4 line-clamp-2 leading-relaxed">{product.description}</p>
        
        <div className="mt-auto pt-4 border-t border-gray-50/50">
          <div className="text-xl font-black text-primary-600 mb-5">{product.price}</div>
          <div className="flex gap-3">
            <Link href={`/products/${product.id}`} className="btn-secondary flex-1 text-sm py-2.5 font-bold border-2 rounded-xl group-hover:border-primary-200">
              Details
            </Link>
            <a href="https://wa.me/918668458529" target="_blank" rel="noopener noreferrer" className="btn-primary flex-1 text-sm py-2.5 px-0 font-bold rounded-xl shadow-lg shadow-primary-500/30 group-hover:shadow-primary-500/50">
              Get Quote
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
