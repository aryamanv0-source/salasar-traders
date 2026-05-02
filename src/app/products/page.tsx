'use client';

import { useState } from "react";
import ProductCard from "../../components/ProductCard";
import { products, categories } from "../data/products";

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = products.filter(product => {
    const matchesCategory = activeCategory === "All" || product.category === activeCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Product Catalog</h1>
          <p className="text-gray-600 max-w-3xl">
            Browse our comprehensive inventory of industrial hardware and construction materials. Use the filters below to find exactly what you need.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar / Filters */}
          <div className="w-full lg:w-1/4">
            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm sticky top-24">
              
              {/* Search */}
              <div className="mb-8">
                <h3 className="font-semibold text-gray-900 mb-3">Search</h3>
                <div className="relative">
                  <input 
                    type="text" 
                    placeholder="Search products..." 
                    className="w-full border border-gray-300 rounded-md py-2 px-3 pl-10 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <div className="absolute left-3 top-2.5 text-gray-400">
                    🔍
                  </div>
                </div>
              </div>

              {/* Categories */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Categories</h3>
                <ul className="space-y-2">
                  <li>
                    <button 
                      onClick={() => setActiveCategory("All")}
                      className={`w-full text-left px-3 py-2 rounded-md transition-colors ${activeCategory === "All" ? 'bg-primary-50 text-primary-700 font-medium' : 'text-gray-600 hover:bg-gray-50'}`}
                    >
                      All Products
                    </button>
                  </li>
                  {categories.map((category) => (
                    <li key={category}>
                      <button 
                        onClick={() => setActiveCategory(category)}
                        className={`w-full text-left px-3 py-2 rounded-md transition-colors ${activeCategory === category ? 'bg-primary-50 text-primary-700 font-medium' : 'text-gray-600 hover:bg-gray-50'}`}
                      >
                        {category}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Inquiry Banner */}
              <div className="mt-8 bg-industrial-dark rounded-lg p-5 text-white">
                <h4 className="font-semibold mb-2">Bulk Order?</h4>
                <p className="text-sm text-gray-300 mb-4">Get special pricing for volume purchases.</p>
                <a href="/contact" className="block w-full text-center bg-primary-600 hover:bg-primary-700 text-white font-medium py-2 rounded transition-colors text-sm">
                  Request Quote
                </a>
              </div>
            </div>
          </div>

          {/* Product Grid */}
          <div className="w-full lg:w-3/4">
            <div className="mb-4 flex justify-between items-center">
              <span className="text-gray-600 font-medium">Showing {filteredProducts.length} results</span>
            </div>
            
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="bg-white p-12 text-center rounded-lg border border-gray-200">
                <div className="text-4xl mb-4">🔍</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">No products found</h3>
                <p className="text-gray-500">Try adjusting your search or category filter.</p>
                <button 
                  onClick={() => { setSearchQuery(""); setActiveCategory("All"); }}
                  className="mt-4 text-primary-600 font-medium hover:underline"
                >
                  Clear all filters
                </button>
              </div>
            )}
            
            {/* Pagination Placeholder */}
            {filteredProducts.length > 0 && (
              <div className="mt-12 flex justify-center">
                <nav className="flex items-center space-x-2">
                  <button className="px-3 py-2 rounded-md border border-gray-300 text-gray-500 hover:bg-gray-50 bg-white" disabled>Previous</button>
                  <button className="px-4 py-2 rounded-md bg-primary-600 text-white font-medium">1</button>
                  <button className="px-3 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50 bg-white">Next</button>
                </nav>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
