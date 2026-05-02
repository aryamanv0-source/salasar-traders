export default function AboutPage() {
  return (
    <div className="container" style={{ paddingTop: '4rem', paddingBottom: '4rem' }}>
      <div className="text-center mb-4">
        <h1 className="text-gradient">About Salasar Traders</h1>
        <p className="text-secondary" style={{ maxWidth: '600px', margin: '0 auto' }}>
          Quality Valves. Trusted Solutions. A legacy of excellence in industrial supplies.
        </p>
      </div>

      <div className="grid grid-cols-2" style={{ gap: '4rem', alignItems: 'center' }}>
        <div className="glass-panel">
          <h2 style={{ marginBottom: '1rem' }}>Our Legacy</h2>
          <p className="text-secondary mb-1">
            Salasar Traders is a highly acclaimed trader, wholesaler, and distributor based in Nagpur, Maharashtra. With over 9 years of unparalleled experience, we have established ourselves as a beacon of quality in the industrial supply sector.
          </p>
          <p className="text-secondary">
            Our commitment to durability, precision engineering, and premium quality makes us the preferred choice for clients seeking reliable fluid transportation and control solutions.
          </p>
        </div>

        <div className="grid grid-cols-2" style={{ gap: '1rem' }}>
          <div className="glass-panel text-center" style={{ padding: '2rem 1rem' }}>
            <h3 className="text-gradient" style={{ fontSize: '2.5rem' }}>9+</h3>
            <p>Years Experience</p>
          </div>
          <div className="glass-panel text-center" style={{ padding: '2rem 1rem' }}>
            <h3 className="text-gradient" style={{ fontSize: '2.5rem' }}>100%</h3>
            <p>Quality Assured</p>
          </div>
          <div className="glass-panel text-center" style={{ padding: '2rem 1rem' }}>
            <h3 className="text-gradient" style={{ fontSize: '2.5rem' }}>50+</h3>
            <p>Product Types</p>
          </div>
          <div className="glass-panel text-center" style={{ padding: '2rem 1rem' }}>
            <h3 className="text-gradient" style={{ fontSize: '2.5rem' }}>81%</h3>
            <p>Response Rate</p>
          </div>
        </div>
      </div>
    </div>
  );
}
