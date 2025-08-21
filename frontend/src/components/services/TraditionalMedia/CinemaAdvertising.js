import React, { useState } from 'react';

const CinemaAdvertising = () => {
  const [activeTab, setActiveTab] = useState('video');

  const videoPackages = [
    { name: "Premium Cinemas", duration: "30 sec", price: "₹25,000", screens: "50+ screens" },
    { name: "Multiplex Chain", duration: "45 sec", price: "₹45,000", screens: "100+ screens" },
    { name: "National Campaign", duration: "60 sec", price: "₹85,000", screens: "200+ screens" }
  ];

  const staticOptions = [
    { type: "Lobby Standees", price: "₹5,000", duration: "1 week" },
    { type: "Digital Posters", price: "₹8,000", duration: "1 week" },
    { type: "Concession Branding", price: "₹12,000", duration: "2 weeks" }
  ];

  return (
    <div className="cinema-advertising">
      <div className="container mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4">
            <span className="text-2xl">🎬</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Cinema Advertising</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Captivate your audience in the ultimate immersive environment. Cinema advertising 
            offers unparalleled attention and engagement, reaching viewers when they're most 
            receptive to your message.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="text-center p-6 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg">
            <div className="text-3xl font-bold">98%</div>
            <div className="text-sm">Attention Rate</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg">
            <div className="text-3xl font-bold">2.5B+</div>
            <div className="text-sm">Annual Footfall</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-lg">
            <div className="text-3xl font-bold">500+</div>
            <div className="text-sm">Cinema Partners</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg">
            <div className="text-3xl font-bold">85%</div>
            <div className="text-sm">Recall Rate</div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-lg bg-gray-100 p-1">
            <button
              onClick={() => setActiveTab('video')}
              className={`px-6 py-2 rounded-md font-medium transition-colors ${
                activeTab === 'video'
                  ? 'bg-purple-600 text-white'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              Video Ads
            </button>
            <button
              onClick={() => setActiveTab('static')}
              className={`px-6 py-2 rounded-md font-medium transition-colors ${
                activeTab === 'static'
                  ? 'bg-purple-600 text-white'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              Static Displays
            </button>
          </div>
        </div>

        {/* Video Ads Content */}
        {activeTab === 'video' && (
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center mb-8">Video Advertisement Packages</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {videoPackages.map((pkg, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
                  <div className="text-center mb-6">
                    <div className="text-4xl mb-4">🎥</div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">{pkg.name}</h3>
                    <div className="text-3xl font-bold text-purple-600 mb-4">{pkg.price}</div>
                  </div>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                      <span>Duration: {pkg.duration}</span>
                    </div>
                    <div className="flex items-center">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                      <span>Coverage: {pkg.screens}</span>
                    </div>
                    <div className="flex items-center">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                      <span>Pre-movie placement</span>
                    </div>
                    <div className="flex items-center">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                      <span>HD quality guaranteed</span>
                    </div>
                  </div>
                  
                  <button className="w-full bg-purple-600 text-white py-3 px-6 rounded-lg hover:bg-purple-700 transition-colors">
                    Select Package
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Static Displays Content */}
        {activeTab === 'static' && (
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center mb-8">Static Display Options</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {staticOptions.map((option, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
                  <div className="text-center mb-6">
                    <div className="text-4xl mb-4">🖼️</div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">{option.type}</h3>
                    <div className="text-3xl font-bold text-purple-600 mb-4">{option.price}</div>
                  </div>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                      <span>Duration: {option.duration}</span>
                    </div>
                    <div className="flex items-center">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                      <span>High visibility placement</span>
                    </div>
                    <div className="flex items-center">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                      <span>Professional installation</span>
                    </div>
                    <div className="flex items-center">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                      <span>Maintenance included</span>
                    </div>
                  </div>
                  
                  <button className="w-full bg-purple-600 text-white py-3 px-6 rounded-lg hover:bg-purple-700 transition-colors">
                    Book Now
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Why Choose Cinema Advertising */}
        <div className="bg-gray-50 rounded-lg p-8">
          <h2 className="text-3xl font-bold text-center mb-8">Why Choose Cinema Advertising?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start space-x-4">
              <div className="text-2xl">🎯</div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Captive Audience</h3>
                <p className="text-gray-600">Viewers are focused and engaged, with minimal distractions during the cinema experience.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="text-2xl">🔊</div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Premium Experience</h3>
                <p className="text-gray-600">High-quality audio-visual presentation creates maximum impact for your brand message.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="text-2xl">📊</div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Measurable Results</h3>
                <p className="text-gray-600">Track audience reach, demographics, and engagement metrics for your campaigns.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="text-2xl">🌟</div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Brand Association</h3>
                <p className="text-gray-600">Associate your brand with entertainment and positive movie-going experiences.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CinemaAdvertising;