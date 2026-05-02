import { products } from "../../data/products";
import Link from "next/link";

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const product = products.find(p => p.id === params.id);

  if (!product) {
    return (
      <div className="container text-center" style={{ paddingTop: '8rem', minHeight: '60vh' }}>
        <h1 className="text-gradient">Product Not Found</h1>
        <Link href="/products" className="btn-primary mt-4">Back to Products</Link>
      </div>
    );
  }

  return (
    <div className="container" style={{ paddingTop: '4rem', paddingBottom: '4rem' }}>
      <Link href="/products" style={{ color: 'var(--accent-color)', marginBottom: '2rem', display: 'inline-block' }}>
        &larr; Back to Products
      </Link>
      
      <div className="grid grid-cols-2" style={{ gap: '4rem', alignItems: 'start' }}>
        <div className="glass-panel" style={{ padding: '0', overflow: 'hidden' }}>
          <div className="product-image-container" style={{ height: '400px', marginBottom: '0', background: 'rgba(255,255,255,0.05)' }}>
            {product.image ? (
              <img src={product.image} alt={product.name} style={{ width: '80%', objectFit: 'contain' }} />
            ) : (
              <div style={{ color: 'var(--text-secondary)' }}>No Image Available</div>
            )}
          </div>
        </div>
        
        <div>
          <span className="badge">{product.category}</span>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{product.name}</h1>
          <p style={{ color: 'var(--accent-color)', fontWeight: '600', marginBottom: '1rem' }}>HSN Code: {product.hsnCode}</p>
          <p className="text-secondary" style={{ fontSize: '1.1rem', marginBottom: '2rem' }}>{product.description}</p>
          
          {product.specs && product.specs.length > 0 && (
            <div className="glass-panel" style={{ padding: '1.5rem', marginBottom: '2rem' }}>
              <h3 style={{ marginBottom: '1rem' }}>Specifications & Pricing</h3>
              <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                  <thead>
                    <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                      <th style={{ padding: '0.8rem', color: 'var(--accent-color)' }}>Size (Inch)</th>
                      {product.specs[0].nbMm && <th style={{ padding: '0.8rem', color: 'var(--accent-color)' }}>NB (mm)</th>}
                      {product.specs[0].weightKg && <th style={{ padding: '0.8rem', color: 'var(--accent-color)' }}>Weight (Kg)</th>}
                      {product.specs[0].rateInr && <th style={{ padding: '0.8rem', color: 'var(--accent-color)' }}>Rate (₹)</th>}
                    </tr>
                  </thead>
                  <tbody>
                    {product.specs.map((spec, index) => (
                      <tr key={index} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                        <td style={{ padding: '0.8rem' }}>{spec.sizeInch}</td>
                        {spec.nbMm && <td style={{ padding: '0.8rem' }}>{spec.nbMm}</td>}
                        {spec.weightKg && <td style={{ padding: '0.8rem' }}>{spec.weightKg}</td>}
                        {spec.rateInr && <td style={{ padding: '0.8rem' }}>{spec.rateInr}</td>}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          <button className="btn-primary" style={{ width: '100%' }}>
            <span>Request a Quote</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }));
}
