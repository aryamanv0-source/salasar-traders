export default function ContactPage() {
  return (
    <div className="bg-gray-50 min-h-screen py-16 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-100 rounded-full blur-[100px] opacity-60 -z-10"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-100 rounded-full blur-[80px] opacity-60 -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-5xl font-black text-gray-900 mb-6 tracking-tight">Let's Talk Business.</h1>
          <p className="text-xl text-gray-600 font-medium">
            Have a bulk requirement or need a custom quote? Get in touch with our sales team today for unbeatable B2B pricing.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Contact Info */}
          <div className="w-full lg:w-1/3 space-y-8">
            <div className="bg-white/80 backdrop-blur-xl p-10 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white">
              <h3 className="text-2xl font-black text-gray-900 mb-8 border-b-2 border-primary-100 pb-4">Direct Contact</h3>
              
              <div className="space-y-8">
                <div className="flex items-start group">
                  <div className="flex-shrink-0 h-14 w-14 bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl flex items-center justify-center text-primary-600 text-2xl group-hover:scale-110 transition-transform shadow-inner">
                    📍
                  </div>
                  <div className="ml-5">
                    <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-1">Headquarters</h4>
                    <p className="text-gray-900 font-semibold text-lg leading-tight">Salasar Traders<br />Nagpur - 440002<br />Maharashtra, India</p>
                  </div>
                </div>
                
                <div className="flex items-start group">
                  <div className="flex-shrink-0 h-14 w-14 bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl flex items-center justify-center text-primary-600 text-2xl group-hover:scale-110 transition-transform shadow-inner">
                    📞
                  </div>
                  <div className="ml-5">
                    <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-1">Sales & Support</h4>
                    <p className="text-gray-900 font-black text-xl tracking-wide">+91 8668458529</p>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="flex-shrink-0 h-14 w-14 bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl flex items-center justify-center text-primary-600 text-2xl group-hover:scale-110 transition-transform shadow-inner">
                    ✉️
                  </div>
                  <div className="ml-5">
                    <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-1">Email Inquiry</h4>
                    <p className="text-primary-600 font-bold text-lg hover:underline cursor-pointer">info@salasartraders.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-industrial-dark p-10 rounded-3xl shadow-2xl border border-gray-800 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary-600/30 blur-2xl rounded-full"></div>
              <h3 className="text-2xl font-black mb-6 border-b-2 border-gray-700 pb-4 relative z-10">Business Hours</h3>
              <ul className="space-y-4 text-lg relative z-10">
                <li className="flex justify-between items-center"><span className="font-semibold text-gray-300">Mon - Sat</span> <span className="font-bold text-white bg-white/10 px-3 py-1 rounded-lg">9:00 AM - 7:00 PM</span></li>
                <li className="flex justify-between items-center"><span className="font-semibold text-gray-500">Sunday</span> <span className="font-bold text-gray-500 border border-gray-700 px-3 py-1 rounded-lg">Closed</span></li>
              </ul>
            </div>
            
            <a href="https://wa.me/918668458529" target="_blank" rel="noopener noreferrer" className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-400 hover:to-green-500 text-white font-black py-5 px-6 rounded-3xl shadow-[0_10px_30px_rgba(34,197,94,0.3)] transition-all flex items-center justify-center text-xl hover:-translate-y-1">
              <span className="mr-3 text-3xl">💬</span> Message on WhatsApp
            </a>
          </div>

          {/* Inquiry Form */}
          <div className="w-full lg:w-2/3">
            <div className="bg-white/90 backdrop-blur-xl p-8 md:p-12 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white">
              <div className="mb-10">
                <span className="inline-block py-1 px-3 rounded-full bg-primary-100 text-primary-700 text-sm font-bold mb-4">Fast Response Guarantee</span>
                <h2 className="text-3xl md:text-4xl font-black text-gray-900 tracking-tight">Send your requirements</h2>
              </div>
              
              <form className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">Full Name <span className="text-red-500">*</span></label>
                    <input type="text" id="name" className="w-full bg-gray-50 border-2 border-gray-100 rounded-xl py-4 px-5 focus:outline-none focus:ring-0 focus:border-primary-500 focus:bg-white transition-all text-lg font-medium" required />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">Company Name</label>
                    <input type="text" id="company" className="w-full bg-gray-50 border-2 border-gray-100 rounded-xl py-4 px-5 focus:outline-none focus:ring-0 focus:border-primary-500 focus:bg-white transition-all text-lg font-medium" />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">Email Address <span className="text-red-500">*</span></label>
                    <input type="email" id="email" className="w-full bg-gray-50 border-2 border-gray-100 rounded-xl py-4 px-5 focus:outline-none focus:ring-0 focus:border-primary-500 focus:bg-white transition-all text-lg font-medium" required />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">Phone Number <span className="text-red-500">*</span></label>
                    <input type="tel" id="phone" className="w-full bg-gray-50 border-2 border-gray-100 rounded-xl py-4 px-5 focus:outline-none focus:ring-0 focus:border-primary-500 focus:bg-white transition-all text-lg font-medium" required />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">Subject / Product Interested In</label>
                  <input type="text" id="subject" className="w-full bg-gray-50 border-2 border-gray-100 rounded-xl py-4 px-5 focus:outline-none focus:ring-0 focus:border-primary-500 focus:bg-white transition-all text-lg font-medium" />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">Your Message / Bill of Materials <span className="text-red-500">*</span></label>
                  <textarea id="message" rows={6} className="w-full bg-gray-50 border-2 border-gray-100 rounded-xl py-4 px-5 focus:outline-none focus:ring-0 focus:border-primary-500 focus:bg-white transition-all text-lg font-medium resize-none" placeholder="Please list quantities, sizes, and specific materials..." required></textarea>
                </div>
                
                <div>
                  <button type="button" className="w-full bg-gray-900 hover:bg-primary-600 text-white font-black text-xl py-5 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.1)] hover:shadow-[0_10px_40px_rgba(37,99,235,0.3)] transition-all hover:-translate-y-1">
                    Send Secure Inquiry
                  </button>
                </div>
              </form>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
