import React, { useState } from 'react';

const DigitalMarketing = () => {
  const [activeService, setActiveService] = useState('seo');

  const services = {
    seo: {
      title: "Search Engine Optimization",
      icon: "🔍",
      description: "Improve your website's visibility and organic ranking on search engines",
      features: [
        "Keyword Research & Analysis",
        "On-page SEO Optimization",
        "Technical SEO Audit",
        "Link Building Campaigns",
        "Local SEO for businesses",
        "Monthly Performance Reports"
      ],
      packages: [
        { name: "Basic SEO", price: "₹15,000", duration: "Monthly" },
        { name: "Advanced SEO", price: "₹25,000", duration: "Monthly" },
        { name: "Enterprise SEO", price: "₹45,000", duration: "Monthly" }
      ]
    },
    social: {
      title: "Social Media Marketing",
      icon: "📱",
      description: "Build your brand presence and engage with customers across social platforms",
      features: [
        "Content Strategy & Planning",
        "Post Creation & Scheduling",
        "Community Management",
        "Paid Social Advertising",
        "Influencer Collaborations",
        "Analytics & Reporting"
      ],
      packages: [
        { name: "Startup Package", price: "₹12,000", duration: "Monthly" },
        { name: "Growth Package", price: "₹20,000", duration: "Monthly" },
        { name: "Premium Package", price: "₹35,000", duration: "Monthly" }
      ]
    },
    ppc: {
      title: "Pay-Per-Click Advertising",
      icon: "💰",
      description: "Drive immediate traffic and conversions through targeted paid campaigns",
      features: [
        "Google Ads Campaign Setup",
        "Facebook & Instagram Ads",
        "Keyword Research & Bidding",
        "Ad Copy Creation & Testing",
        "Landing Page Optimization",
        "Conversion Tracking & ROI"
      ],
      packages: [
        { name: "Starter PPC", price: "₹10,000", duration: "Monthly" },
        { name: "Professional PPC", price: "₹18,000", duration: "Monthly" },
        { name: "Enterprise PPC", price: "₹30,000", duration: "Monthly" }
      ]
    }
  };

  const digitalStats = [
    { value: "4.9B+", label: "Internet Users Globally" },
    { value: "4.7B+", label: "Social Media Users" },
    { value: "68%", label: "Mobile Traffic Share" },
    { value: "3.5B+", label: "Google Searches Daily" }
  ];

  return (
    <div className="digital-marketing">
      <div className="container mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
            <span className="text-2xl">📊</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Digital Marketing</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Accelerate your business growth with comprehensive digital marketing strategies. 
            From SEO to social media, we help you dominate the digital landscape and reach 
            your target audience where they spend most of their time.
          </p>
        </div>

        {/* Digital Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {digitalStats.map((stat, index) => (
            <div key={index} className="text-center p-6 bg-gradient-to-br from-blue-500 to-purple-600 text-white rounded-lg">
              <div className="text-2xl md:text-3xl font-bold">{stat.value}</div>
              <div className="text-sm md:text-base">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Service Navigation */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-lg bg-gray-100 p-1">
            <button
              onClick={() => setActiveService('seo')}
              className={`px-4 md:px-6 py-2 rounded-md font-medium transition-colors text-sm md:text-base ${
                activeService === 'seo'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              SEO
            </button>
            <button
              onClick={() => setActiveService('social')}
              className={`px-4 md:px-6 py-2 rounded-md font-medium transition-colors text-sm md:text-base ${
                activeService === 'social'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              Social Media
            </button>
            <button
              onClick={() => setActiveService('ppc')}
              className={`px-4 md:px-6 py-2 rounded-md font-medium transition-colors text-sm md:text-base ${
                activeService === 'ppc'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              PPC Ads
            </button>
          </div>
        </div>

        {/* Active Service Content */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <div className="text-6xl mb-4">{services[activeService].icon}</div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">{services[activeService].title}</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">{services[activeService].description}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            {/* Features */}
            <div>
              <h3 className="text-2xl font-bold mb-6">What's Included</h3>
              <div className="space-y-4">
                {services[activeService].features.map((feature, index) => (
                  <div key={index} className="flex items-center p-4 bg-white rounded-lg shadow-md">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                      <span className="text-blue-600 font-bold text-sm">{index + 1}</span>
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Packages */}
            <div>
              <h3 className="text-2xl font-bold mb-6">Choose Your Package</h3>
              <div className="space-y-4">
                {services[activeService].packages.map((pkg, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                    <div className="flex justify-between items-center mb-4">
                      <div>
                        <h4 className="text-xl font-semibold text-gray-800">{pkg.name}</h4>
                        <p className="text-sm text-gray-500">{pkg.duration}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-blue-600">{pkg.price}</div>
                        <div className="text-sm text-gray-500">per month</div>
                      </div>
                    </div>
                    <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors">
                      Select Package
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Process Timeline */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">Our Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
              <h3 className="font-semibold mb-2">Strategy & Planning</h3>
              <p className="text-sm text-gray-600">Analyze your business and create a customized digital strategy</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
              <h3 className="font-semibold mb-2">Implementation</h3>
              <p className="text-sm text-gray-600">Execute campaigns across chosen digital channels</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
              <h3 className="font-semibold mb-2">Monitoring & Optimization</h3>
              <p className="text-sm text-gray-600">Track performance and optimize for better results</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">4</div>
              <h3 className="font-semibold mb-2">Reporting & Analysis</h3>
              <p className="text-sm text-gray-600">Detailed reports with insights and recommendations</p>
            </div>
          </div>
        </div>

        {/* Why Choose Digital Marketing */}
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-8">
          <h2 className="text-3xl font-bold text-center mb-8">Why Digital Marketing?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="font-semibold text-lg mb-2">Measurable ROI</h3>
              <p className="text-gray-600">Track every click, conversion, and rupee spent with detailed analytics and reporting.</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="font-semibold text-lg mb-2">Precise Targeting</h3>
              <p className="text-gray-600">Reach exactly the right audience based on demographics, interests, and behavior.</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">💡</div>
              <h3 className="font-semibold text-lg mb-2">Cost Effective</h3>
              <p className="text-gray-600">Get better results with smaller budgets compared to traditional advertising methods.</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="font-semibold text-lg mb-2">Global Reach</h3>
              <p className="text-gray-600">Expand your business beyond geographical boundaries and reach customers worldwide.</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="font-semibold text-lg mb-2">Real-time Results</h3>
              <p className="text-gray-600">See immediate impact and make quick adjustments to optimize your campaigns.</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="font-semibold text-lg mb-2">Customer Engagement</h3>
              <p className="text-gray-600">Build stronger relationships through direct interaction and personalized experiences.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DigitalMarketing;