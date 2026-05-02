import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="container">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <span className="badge">Premium Industrial Solutions</span>
          <h1>Quality Valves. <br/><span className="text-gradient">Trusted Solutions.</span></h1>
          <p>
            Salasar Traders is a leading wholesaler and distributor of premium pipe fittings, HDPE pipes, and state-of-the-art industrial valves in Nagpur, India.
          </p>
          <div className="hero-actions">
            <Link href="/products" className="btn-primary">
              <span>View Products</span>
            </Link>
            <Link href="/contact" className="btn-secondary">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="mb-4">
        <h2 className="text-center mb-2">Our Top Categories</h2>
        <div className="grid grid-cols-3">
          <div className="glass-panel text-center">
            <h3>Industrial Valves</h3>
            <p className="mb-1 text-secondary">Cast Iron, Bronze, and Ductile Iron check, gate, and ball valves.</p>
            <Link href="/products" className="btn-secondary" style={{ fontSize: '0.8rem', padding: '0.5rem 1rem' }}>Explore Valves</Link>
          </div>
          
          <div className="glass-panel text-center">
            <h3>HDPE & GI Pipes</h3>
            <p className="mb-1 text-secondary">Durable Polyethylene and Galvanized Iron pipes for industrial use.</p>
            <Link href="/products" className="btn-secondary" style={{ fontSize: '0.8rem', padding: '0.5rem 1rem' }}>View Pipes</Link>
          </div>
          
          <div className="glass-panel text-center">
            <h3>Pipe Fittings</h3>
            <p className="mb-1 text-secondary">A wide range of Astral tees, bends, elbows, and ACC cover blocks.</p>
            <Link href="/products" className="btn-secondary" style={{ fontSize: '0.8rem', padding: '0.5rem 1rem' }}>See Fittings</Link>
          </div>
        </div>
      </section>
      
      {/* Testimonials / Stats */}
      <section className="mb-4">
        <div className="glass-panel text-center" style={{ padding: '4rem 2rem' }}>
          <h2 className="text-gradient mb-1">9+ Years of Excellence</h2>
          <p className="text-secondary mb-2">Serving countless industries with precision-engineered products and leak-proof performance.</p>
          <div className="grid grid-cols-4" style={{ marginTop: '3rem' }}>
            <div>
              <h3 className="text-gradient">Premium</h3>
              <p>Quality</p>
            </div>
            <div>
              <h3 className="text-gradient">Reliable</h3>
              <p>Performance</p>
            </div>
            <div>
              <h3 className="text-gradient">Precision</h3>
              <p>Engineered</p>
            </div>
            <div>
              <h3 className="text-gradient">100%</h3>
              <p>Satisfaction</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
