export default function AboutPage() {
  return (
    <div className="bg-gray-50 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-6">About Salasar Traders</h1>
          <p className="text-xl text-gray-600">
            A trusted legacy of supplying premium industrial, hardware, and construction materials since our inception.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Company Overview</h2>
            <div className="prose prose-lg text-gray-600">
              <p className="mb-4">
                Based in the industrial hub of Nagpur, Maharashtra, Salasar Traders is a leading supplier, trader, and distributor catering to the diverse needs of the manufacturing, construction, and hardware sectors.
              </p>
              <p className="mb-4">
                We take pride in our robust supply chain network, enabling us to deliver high-quality fasteners, industrial tools, pipes, fittings, and construction materials at competitive wholesale prices.
              </p>
              <p>
                Our commitment to excellence and customer satisfaction has made us the preferred choice for countless B2B clients across India. We believe in building long-term partnerships based on trust, transparency, and timely delivery.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center">
              <div className="text-4xl font-extrabold text-primary-600 mb-2">9+</div>
              <div className="text-gray-500 font-medium">Years Experience</div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center">
              <div className="text-4xl font-extrabold text-primary-600 mb-2">100%</div>
              <div className="text-gray-500 font-medium">Quality Assured</div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center">
              <div className="text-4xl font-extrabold text-primary-600 mb-2">1000+</div>
              <div className="text-gray-500 font-medium">Products</div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center">
              <div className="text-4xl font-extrabold text-primary-600 mb-2">24/7</div>
              <div className="text-gray-500 font-medium">Support</div>
            </div>
          </div>
        </div>

        {/* Location Map Placeholder */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="p-8 border-b border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900">Our Location</h2>
            <p className="text-gray-600 mt-2">Visit our facility in Nagpur to explore our inventory.</p>
          </div>
          <div className="bg-gray-200 h-96 w-full flex items-center justify-center relative">
            <div className="text-center">
              <div className="text-6xl mb-2">📍</div>
              <p className="font-medium text-gray-700">Nagpur - 440002, Maharashtra, India</p>
            </div>
            {/* Real map iframe can be embedded here */}
          </div>
        </div>

      </div>
    </div>
  );
}
