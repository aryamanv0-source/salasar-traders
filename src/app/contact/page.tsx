export default function ContactPage() {
  return (
    <div className="container" style={{ paddingTop: '4rem', paddingBottom: '4rem' }}>
      <div className="text-center mb-4">
        <h1 className="text-gradient">Contact Us</h1>
        <p className="text-secondary" style={{ maxWidth: '600px', margin: '0 auto' }}>
          Get in touch with us for quotes, bulk orders, or any inquiries regarding our products.
        </p>
      </div>

      <div className="grid grid-cols-2" style={{ gap: '4rem' }}>
        <div className="glass-panel">
          <h2 style={{ marginBottom: '1.5rem' }}>Send a Message</h2>
          <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>Name</label>
              <input type="text" style={{ width: '100%', padding: '0.8rem', borderRadius: '8px', border: '1px solid var(--border-color)', background: 'rgba(0,0,0,0.2)', color: '#fff' }} />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>Email</label>
              <input type="email" style={{ width: '100%', padding: '0.8rem', borderRadius: '8px', border: '1px solid var(--border-color)', background: 'rgba(0,0,0,0.2)', color: '#fff' }} />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>Message</label>
              <textarea rows={4} style={{ width: '100%', padding: '0.8rem', borderRadius: '8px', border: '1px solid var(--border-color)', background: 'rgba(0,0,0,0.2)', color: '#fff' }}></textarea>
            </div>
            <button type="button" className="btn-primary" style={{ marginTop: '1rem' }}>
              <span>Submit Inquiry</span>
            </button>
          </form>
        </div>

        <div>
          <div className="glass-panel mb-2">
            <h3 className="text-gradient mb-1">Company Address</h3>
            <p className="text-secondary">
              Salasar Traders<br/>
              Nagpur - 440002, Maharashtra, India<br/>
            </p>
          </div>
          
          <div className="glass-panel mb-2">
            <h3 className="text-gradient mb-1">Contact Person</h3>
            <p className="text-secondary">
              <strong>P Vyas</strong> (Proprietor)<br/>
              GST - 27**********1Z4
            </p>
          </div>

          <div className="glass-panel">
            <h3 className="text-gradient mb-1">Business Hours</h3>
            <p className="text-secondary">
              Monday - Saturday: 9:00 AM - 7:00 PM<br/>
              Sunday: Closed
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
