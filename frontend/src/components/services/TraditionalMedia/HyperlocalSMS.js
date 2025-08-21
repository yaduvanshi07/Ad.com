import React, { useState } from 'react';

const HyperlocalSMS = () => {
  const [activeTab, setActiveTab] = useState('location');

  const locationPackages = [
    { radius: "1 KM", audience: "5,000-10,000", price: "₹2,000", features: ["Immediate vicinity", "Local shops", "Residential areas"] },
    { radius: "3 KM", audience: "15,000-25,000", price: "₹5,000", features: ["Extended locality", "Multiple areas", "Mixed demographics"] },
    { radius: "5 KM", audience: "30,000-50,000", price: "₹8,000", features: ["City district", "Commercial zones", "Broad reach"] }
  ];

  const campaignTypes = [
    {
      type: "Flash Sales",
      icon: "⚡",
      description: "Time-sensitive offers to drive immediate foot traffic",
      examples: ["50% off next 2 hours", "Limited stock alert", "Today only deals"]
    },
    {
      type: "Event Notifications",
      icon: "📅",
      description: "Promote local events, launches, and activities",
      examples: ["Store opening", "Product launch", "Community events"]
    },
    {
      type: "Service Reminders",
      icon: "🔔",
      description: "Appointment reminders and service notifications",
      examples: ["Appointment confirmations", "Service due dates", "Payment reminders"]
    }
  ];

  const industries = [
    { name: "Retail & Shopping", icon: "🛍️", usage: "Flash sales, new arrivals, store events" },
    { name: "Restaurants & Food", icon: "🍽️", usage: "Daily specials, happy hours, delivery offers" },
    { name: "Healthcare", icon: "🏥", usage: "Appointment reminders, health camps, check-ups" },
    { name: "Education", icon: "🎓", usage: "Admission alerts, exam schedules, events" },
    { name: "Real Estate", icon: "🏡", usage: "Property launches, open houses, investment opportunities" },
    { name: "Automotive", icon: "🚗", usage: "Service reminders, new launches, test drives" }
  ];

  return (
    <div className="hyperlocal-sms">
      <div className="container mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
            <span className="text-2xl">📱</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Hyperlocal SMS Marketing</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Target customers within specific geographic areas with precision SMS campaigns. 
            Reach people when they're nearby your business location and drive immediate 
            foot traffic with location-based messaging.
          </p>
        </div>

        {/* SMS Marketing Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="text-center p-6 bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-lg">
            <div className="text-3xl font-bold">98%</div>
            <div className="text-sm">Open Rate</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-r from-blue-500 to-green-500 text-white rounded-lg">
            <div className="text-3xl font-bold">3 Min</div>
            <div className="text-sm">Average Read Time</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg">
            <div className="text-3xl font-bold">45%</div>
            <div className="text-sm">Response Rate</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-lg">
            <div className="text-3xl font-bold">5X</div>
            <div className="text-sm">ROI Average</div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-lg bg-gray-100 p-1">
            <button
              onClick={() => setActiveTab('location')}
              className={`px-6 py-2 rounded-md font-medium transition-colors ${
                activeTab === 'location'
                  ? 'bg-green-600 text-white'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              Location Targeting
            </button>
            <button
              onClick={() => setActiveTab('campaigns')}
              className={`px-6 py-2 rounded-md font-medium transition-colors ${
                activeTab === 'campaigns'
                  ? 'bg-green-600 text-white'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              Campaign Types
            </button>
            <button
              onClick={() => setActiveTab('industries')}
              className={`px-6 py-2 rounded-md font-medium transition-colors ${
                activeTab === 'industries'
                  ? 'bg-green-600 text-white'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              Industries
            </button>
          </div>
        </div>

        {/* Location Targeting Tab */}
        {activeTab === 'location' && (
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center mb-8">Location-Based Targeting</h2>
            
            {/* Map Visualization */}
            <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-8 mb-8 text-center">
              <div className="text-6xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold mb-4">Precision Targeting</h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Define exact geographic boundaries around your business location. Our advanced 
                geo-targeting technology ensures your messages reach only the most relevant audience.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {locationPackages.map((pkg, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
                  <div className="text-center mb-6">
                    <div className="text-4xl mb-4">📍</div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">{pkg.radius} Radius</h3>
                    <div className="text-3xl font-bold text-green-600 mb-4">{pkg.price}</div>
                    <div className="text-sm text-gray-500 mb-2">Target Audience: {pkg.audience}</div>
                  </div>
                  
                  <div className="space-y-3 mb-6">
                    {pkg.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center">
                        <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <button className="w-full bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 transition-colors">
                    Select Package
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Campaign Types Tab */}
        {activeTab === 'campaigns' && (
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center mb-8">Campaign Types</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {campaignTypes.map((campaign, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
                  <div className="text-center mb-6">
                    <div className="text-5xl mb-4">{campaign.icon}</div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">{campaign.type}</h3>
                    <p className="text-gray-600 mb-6">{campaign.description}</p>
                  </div>
                  
                  <div className="space-y-3 mb-6">
                    <h4 className="font-semibold text-gray-800">Example Messages:</h4>
                    {campaign.examples.map((example, idx) => (
                      <div key={idx} className="bg-gray-50 p-3 rounded-md text-sm text-gray-700">
                        "{example}"
                      </div>
                    ))}
                  </div>
                  
                  <button className="w-full bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 transition-colors">
                    Start Campaign
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Industries Tab */}
        {activeTab === 'industries' && (
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center mb-8">Industry Applications</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industries.map((industry, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                  <div className="text-center mb-4">
                    <div className="text-4xl mb-3">{industry.icon}</div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{industry.name}</h3>
                  </div>
                  <p className="text-sm text-gray-600 text-center mb-4">{industry.usage}</p>
                  <button className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors text-sm">
                    View Examples
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Features & Benefits */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">Why Hyperlocal SMS Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="font-semibold text-lg mb-2">Precise Targeting</h3>
              <p className="text-gray-600">Reach only customers within walking distance of your business location.</p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="font-semibold text-lg mb-2">Immediate Impact</h3>
              <p className="text-gray-600">Drive instant foot traffic with time-sensitive offers and promotions.</p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="font-semibold text-lg mb-2">Cost Effective</h3>
              <p className="text-gray-600">Lower cost per acquisition compared to broad-based advertising campaigns.</p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="font-semibold text-lg mb-2">Real-time Analytics</h3>
              <p className="text-gray-600">Track open rates, click-through rates, and conversion metrics instantly.</p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="font-semibold text-lg mb-2">Privacy Compliant</h3>
              <p className="text-gray-600">Fully compliant with data protection and privacy regulations.</p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="font-semibold text-lg mb-2">High Engagement</h3>
              <p className="text-gray-600">SMS has 98% open rates and 90% are read within 3 minutes.</p>
            </div>
          </div>
        </div>

        {/* Campaign Process */}
        <div className="bg-gray-50 rounded-lg p-8">
          <h2 className="text-3xl font-bold text-center mb-8">Campaign Setup Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
              <h3 className="font-semibold mb-2">Define Location</h3>
              <p className="text-sm text-gray-600">Set geographic boundaries and target radius</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
              <h3 className="font-semibold mb-2">Create Message</h3>
              <p className="text-sm text-gray-600">Craft compelling SMS content with clear call-to-action</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
              <h3 className="font-semibold mb-2">Schedule Campaign</h3>
              <p className="text-sm text-gray-600">Choose optimal timing for maximum engagement</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">4</div>
              <h3 className="font-semibold mb-2">Launch & Monitor</h3>
              <p className="text-sm text-gray-600">Deploy campaign and track real-time performance</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">5</div>
              <h3 className="font-semibold mb-2">Analyze Results</h3>
              <p className="text-sm text-gray-600">Review metrics and optimize future campaigns</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HyperlocalSMS;