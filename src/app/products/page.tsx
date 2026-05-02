import Link from "next/link";
import Image from "next/image";
import { products } from "../data/products";

export default function ProductsPage() {
  return (
    <div className="container" style={{ paddingTop: '4rem', paddingBottom: '4rem' }}>
      <div className="text-center mb-4">
        <h1 className="text-gradient">Our Products</h1>
        <p className="text-secondary" style={{ maxWidth: '600px', margin: '0 auto' }}>
          Explore our extensive catalog of high-performance industrial valves, precision pipe fittings, and durable GI/HDPE pipes.
        </p>
      </div>

      <div className="grid grid-cols-3">
        {products.map((product) => (
          <div key={product.id} className="glass-panel" style={{ display: 'flex', flexDirection: 'column' }}>
            <div className="product-image-container">
              {product.image ? (
                <img src={product.image} alt={product.name} />
              ) : (
                <div style={{ color: 'var(--text-secondary)' }}>No Image Available</div>
              )}
            </div>
            <span className="badge" style={{ alignSelf: 'flex-start' }}>{product.category}</span>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>{product.name}</h3>
            <p className="text-secondary" style={{ fontSize: '0.9rem', marginBottom: '1.5rem', flexGrow: 1 }}>
              {product.description.substring(0, 80)}...
            </p>
            <Link href={`/products/${product.id}`} className="btn-secondary text-center w-full" style={{ padding: '0.6rem 1rem' }}>
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
