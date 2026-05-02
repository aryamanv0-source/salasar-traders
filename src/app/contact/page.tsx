export default function ContactPage() {
  return (
    <div className="bg-gray-50 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-6">Contact Us</h1>
          <p className="text-xl text-gray-600">
            Have a bulk requirement or need a custom quote? Get in touch with our sales team today.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Contact Info */}
          <div className="w-full lg:w-1/3 space-y-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Get in Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 bg-primary-50 rounded-full flex items-center justify-center text-primary-600 text-xl">
                    📍
                  </div>
                  <div className="ml-4">
                    <h4 className="text-sm font-semibold text-gray-900">Address</h4>
                    <p className="mt-1 text-gray-600">Salasar Traders<br />Nagpur - 440002<br />Maharashtra, India</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 bg-primary-50 rounded-full flex items-center justify-center text-primary-600 text-xl">
                    📞
                  </div>
                  <div className="ml-4">
                    <h4 className="text-sm font-semibold text-gray-900">Phone</h4>
                    <p className="mt-1 text-gray-600">+91 XXXXX XXXXX</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 bg-primary-50 rounded-full flex items-center justify-center text-primary-600 text-xl">
                    ✉️
                  </div>
                  <div className="ml-4">
                    <h4 className="text-sm font-semibold text-gray-900">Email</h4>
                    <p className="mt-1 text-gray-600">info@salasartraders.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Business Hours</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex justify-between"><span>Monday - Saturday:</span> <span>9:00 AM - 7:00 PM</span></li>
                <li className="flex justify-between text-gray-400"><span>Sunday:</span> <span>Closed</span></li>
              </ul>
            </div>
            
            <a href="https://wa.me/910000000000" target="_blank" rel="noopener noreferrer" className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-6 rounded-xl shadow-md transition-colors flex items-center justify-center text-lg">
              <span className="mr-3 text-2xl">💬</span> Message on WhatsApp
            </a>
          </div>

          {/* Inquiry Form */}
          <div className="w-full lg:w-2/3">
            <div className="bg-white p-8 md:p-10 rounded-xl shadow-sm border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Send us a Message</h2>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                    <input type="text" id="name" className="w-full border border-gray-300 rounded-md py-3 px-4 focus:outline-none focus:ring-2 focus:ring-primary-500" required />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">Company Name</label>
                    <input type="text" id="company" className="w-full border border-gray-300 rounded-md py-3 px-4 focus:outline-none focus:ring-2 focus:ring-primary-500" />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                    <input type="email" id="email" className="w-full border border-gray-300 rounded-md py-3 px-4 focus:outline-none focus:ring-2 focus:ring-primary-500" required />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                    <input type="tel" id="phone" className="w-full border border-gray-300 rounded-md py-3 px-4 focus:outline-none focus:ring-2 focus:ring-primary-500" required />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                  <input type="text" id="subject" className="w-full border border-gray-300 rounded-md py-3 px-4 focus:outline-none focus:ring-2 focus:ring-primary-500" />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Your Message / Requirements *</label>
                  <textarea id="message" rows={5} className="w-full border border-gray-300 rounded-md py-3 px-4 focus:outline-none focus:ring-2 focus:ring-primary-500" required></textarea>
                </div>
                
                <div>
                  <button type="button" className="btn-primary w-full md:w-auto px-10 py-3 text-lg">
                    Send Inquiry
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
