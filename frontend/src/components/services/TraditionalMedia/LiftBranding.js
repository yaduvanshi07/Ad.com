import React, { useState } from 'react';

const LiftBranding = () => {
  const [selectedType, setSelectedType] = useState('wraps');

  const brandingTypes = {
    wraps: {
      title: "Elevator Wraps",
      icon: "🚪",
      description: "Complete elevator interior transformation with high-impact visual branding",
      options: [
        { name: "Standard Wrap", size: "4 walls", price: "₹25,000", duration: "3 months" },
        { name: "Premium Wrap", size: "4 walls + ceiling", price: "₹35,000", duration: "3 months" },
        { name: "Luxury Wrap", size: "Full interior + floor", price: "₹50,000", duration: "3 months" }
      ]
    },
    digital: {
      title: "Digital Screens",
      icon: "📺",
      description: "Dynamic digital displays inside elevators for engaging video content",
      options: [
        { name: "Basic Screen", size: "22-inch LCD", price: "₹15,000", duration: "Monthly" },
        { name: "HD Screen", size: "32-inch LED", price: "₹22,000", duration: "Monthly" },
        { name: "Interactive Screen", size: "32-inch Touch", price: "₹35,000", duration: "Monthly" }
      ]
    },
    audio: {
      title: "Audio Announcements",
      icon: "🔊",
      description: "Custom audio messages and background music for elevator journeys",
      options: [
        { name: "Voice Ads", size: "30-sec spots", price: "₹8,000", duration: "Monthly" },
        { name: "Background Music", size: "Branded playlist", price: "₹12,000", duration: "Monthly" },
        { name: "Interactive Audio", size: "Motion-triggered", price: "₹18,000", duration: "Monthly" }
      ]
    }
  };

  const buildings = [
    { name: "Corporate Towers", count: "50+ buildings", audience: "Business professionals" },
    { name: "Shopping Malls", count: "25+ malls", audience: "Shoppers & families" },
    { name: "Residential Complexes", count: "100+ societies", audience: "Residents & visitors" },
    { name: "Hospitals", count: "15+ hospitals", audience: "Patients & healthcare workers" }
  ];

  return (
    <div className="lift-branding">
      <div className="container mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-4">
            <span className="text-2xl">🏢</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Lift Branding</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform elevator spaces into powerful advertising opportunities. Capture your 
            audience's attention during their vertical journey with creative lift branding solutions 
            in prime commercial and residential locations.
          </p>
        </div>

        {/* Key Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="text-center p-6 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg">
            <div className="text-3xl font-bold">45 Sec</div>
            <div className="text-sm">Average Ride Time</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-r from-blue-500 to-orange-500 text-white rounded-lg">
            <div className="text-3xl font-bold">100%</div>
            <div className="text-sm">Attention Rate</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-lg">
            <div className="text-3xl font-bold">200+</div>
            <div className="text-sm">Partner Locations</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-r from-purple-500 to-green-500 text-white rounded-lg">
            <div className="text-3xl font-bold">50K+</div>
            <div className="text-sm">Daily Impressions</div>
          </div>
        </div>

        {/* Branding Type Navigation */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-lg bg-gray-100 p-1">
            {Object.keys(brandingTypes).map((key) => (
              <button
                key={key}
                onClick={() => setSelectedType(key)}
                className={`px-6 py-2 rounded-md font-medium transition-colors ${
                  selectedType === key
                    ? 'bg-orange-600 text-white'
                    : 'text-gray-600 hover:text-gray-800'
                }`}
              >
                {brandingTypes[key].title}
              </button>
            ))}
          </div>
        </div>

        {/* Selected Branding Type Content */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <div className="text-6xl mb-4">{brandingTypes[selectedType].icon}</div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">{brandingTypes[selectedType].title}</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">{brandingTypes[selectedType].description}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {brandingTypes[selectedType].options.map((option, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{option.name}</h3>
                  <div className="text-3xl font-bold text-orange-600 mb-4">{option.price}</div>
                  <div className="text-sm text-gray-500 mb-2">{option.size}</div>
                  <div className="text-sm text-gray-500">{option.duration}</div>
                </div>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                    <span className="text-sm">Professional installation</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                    <span className="text-sm">High-quality materials</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                    <span className="text-sm">Maintenance included</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                    <span className="text-sm">Performance tracking</span>
                  </div>
                </div>
                
                <button className="w-full bg-orange-600 text-white py-3 px-6 rounded-lg hover:bg-orange-700 transition-colors">
                  Book Now
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Available Locations */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">Available Locations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {buildings.map((building, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">🏢</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{building.name}</h3>
                <div className="text-orange-600 font-semibold mb-2">{building.count}</div>
                <p className="text-sm text-gray-600">{building.audience}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Advantages */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">Why Lift Branding Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="text-4xl mb-4">👁️</div>
              <h3 className="font-semibold text-lg mb-2">Captive Audience</h3>
              <p className="text-gray-600">People have nothing else to look at during elevator rides, ensuring 100% attention to your brand.</p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="font-semibold text-lg mb-2">Targeted Reach</h3>
              <p className="text-gray-600">Choose specific building types to reach your exact target demographic effectively.</p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-4">🔄</div>
              <h3 className="font-semibold text-lg mb-2">Repeated Exposure</h3>
              <p className="text-gray-600">Regular building users see your brand multiple times daily, increasing recall significantly.</p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-4">💡</div>
              <h3 className="font-semibold text-lg mb-2">Premium Environment</h3>
              <p className="text-gray-600">Associate your brand with upscale locations and professional environments.</p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="font-semibold text-lg mb-2">Measurable Impact</h3>
              <p className="text-gray-600">Track foot traffic, engagement, and conversion metrics for your campaigns.</p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="font-semibold text-lg mb-2">Cost Effective</h3>
              <p className="text-gray-600">Lower cost per impression compared to traditional outdoor advertising mediums.</p>
            </div>
          </div>
        </div>

        {/* Installation Process */}
        <div className="bg-gray-50 rounded-lg p-8">
          <h2 className="text-3xl font-bold text-center mb-8">Installation Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
              <h3 className="font-semibold mb-2">Site Survey</h3>
              <p className="text-sm text-gray-600">Detailed measurement and assessment of elevator spaces</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
              <h3 className="font-semibold mb-2">Design Creation</h3>
              <p className="text-sm text-gray-600">Custom design creation and client approval</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
              <h3 className="font-semibold mb-2">Professional Installation</h3>
              <p className="text-sm text-gray-600">Expert installation with minimal downtime</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">4</div>
              <h3 className="font-semibold mb-2">Monitoring & Maintenance</h3>
              <p className="text-sm text-gray-600">Ongoing maintenance and performance tracking</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiftBranding;