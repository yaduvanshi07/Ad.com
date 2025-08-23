import React, { useState } from 'react';

const TransitMedia = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedFormat, setSelectedFormat] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    budget: '',
    locations: '',
    duration: '',
    format: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    if (!formData.name || !formData.email) {
      alert('Please fill in required fields');
      return;
    }
    alert('Thank you! Our transit media specialists will contact you within 24 hours with location availability and pricing.');
    setFormData({ name: '', email: '', company: '', budget: '', locations: '', duration: '', format: '' });
  };

  const transitFormats = [
    {
      id: 'bus-ads',
      title: 'Bus Advertising',
      icon: '🚌',
      description: 'High-impact advertising on city buses with massive daily reach',
      formats: [
        'Bus Side Panels - Full side coverage',
        'Bus Back Panels - Rear visibility',
        'Bus Interior Cards - Inside passenger view',
        'Bus Wraps - Complete bus coverage'
      ],
      reach: '2M+ daily impressions',
      cost: '₹15,000 - ₹45,000/month',
      bestFor: 'Mass market campaigns, local businesses'
    },
    {
      id: 'metro-ads',
      title: 'Metro/Subway Advertising',
      icon: '🚇',
      description: 'Premium advertising in metro stations and trains',
      formats: [
        'Platform Posters - Station platforms',
        'Train Wraps - Exterior train coverage',
        'Interior Cards - Inside train cars',
        'Digital Screens - Dynamic content display'
      ],
      reach: '5M+ monthly passengers',
      cost: '₹25,000 - ₹80,000/month',
      bestFor: 'Urban professionals, commuters'
    },
    {
      id: 'taxi-ads',
      title: 'Taxi & Auto Advertising',
      icon: '🚕',
      description: 'Mobile advertising on taxis and auto-rickshaws',
      formats: [
        'Taxi Top Signs - Roof-mounted displays',
        'Door Panels - Side door advertising',
        'Interior Screens - Passenger-facing screens',
        'Auto Back Panels - Rear panel ads'
      ],
      reach: '500K+ daily views',
      cost: '₹8,000 - ₹25,000/month',
      bestFor: 'Local services, quick service restaurants'
    },
    {
      id: 'airport-ads',
      title: 'Airport Advertising',
      icon: '✈️',
      description: 'Premium advertising in airports and terminals',
      formats: [
        'Terminal Displays - Large format screens',
        'Baggage Claim Ads - Carousel advertising',
        'Gate Area Posters - Waiting area displays',
        'Jet Bridge Ads - Boarding bridge coverage'
      ],
      reach: '1M+ monthly travelers',
      cost: '₹50,000 - ₹200,000/month',
      bestFor: 'Luxury brands, international businesses'
    },
    {
      id: 'train-ads',
      title: 'Railway Advertising',
      icon: '🚆',
      description: 'Advertising on trains and railway stations',
      formats: [
        'Platform Hoardings - Station displays',
        'Train Exterior - Side panel wraps',
        'Coach Interior - Inside advertisements',
        'Foot Over Bridge - Walkway displays'
      ],
      reach: '3M+ daily passengers',
      cost: '₹20,000 - ₹60,000/month',
      bestFor: 'Regional campaigns, travel services'
    },
    {
      id: 'bus-stop-ads',
      title: 'Bus Stop Advertising',
      icon: '🚏',
      description: 'Strategic advertising at bus stops and shelters',
      formats: [
        'Shelter Panels - Backlit displays',
        'Digital Screens - Interactive content',
        'Bench Advertising - Seating area ads',
        'Pole Kiosks - Vertical displays'
      ],
      reach: '800K+ weekly footfall',
      cost: '₹12,000 - ₹35,000/month',
      bestFor: 'Neighborhood targeting, retail'
    }
  ];

  const advantages = [
    {
      title: 'Captive Audience',
      description: 'Commuters have extended exposure time during their journey',
      icon: '👥',
      stat: '45 min average exposure'
    },
    {
      title: 'High Frequency',
      description: 'Repeated daily exposure builds strong brand recall',
      icon: '🔄',
      stat: '15+ times per week'
    },
    {
      title: 'Geographic Targeting',
      description: 'Target specific routes and neighborhoods precisely',
      icon: '📍',
      stat: 'Route-level precision'
    },
    {
      title: 'Cost Effective',
      description: 'Lower cost per impression compared to TV and digital',
      icon: '💰',
      stat: '70% cost savings'
    },
    {
      title: 'Weather Protected',
      description: 'Indoor transit advertising is visible in all weather',
      icon: '🌧️',
      stat: '365 days visibility'
    },
    {
      title: 'Mass Reach',
      description: 'Access millions of commuters across the city',
      icon: '📊',
      stat: '10M+ monthly reach'
    }
  ];

  const cities = [
    {
      name: 'Mumbai',
      transit: ['Local Trains', 'BEST Buses', 'Metro', 'Taxis'],
      dailyRiders: '12M+',
      routes: '400+ routes'
    },
    {
      name: 'Delhi NCR',
      transit: ['Delhi Metro', 'DTC Buses', 'Auto Rickshaws', 'Airport Express'],
      dailyRiders: '15M+',
      routes: '500+ routes'
    },
    {
      name: 'Bangalore',
      transit: ['BMTC Buses', 'Namma Metro', 'Auto Rickshaws', 'Airport'],
      dailyRiders: '8M+',
      routes: '300+ routes'
    },
    {
      name: 'Chennai',
      transit: ['MTC Buses', 'Chennai Metro', 'Auto Rickshaws', 'Trains'],
      dailyRiders: '6M+',
      routes: '250+ routes'
    },
    {
      name: 'Kolkata',
      transit: ['Kolkata Metro', 'WBTC Buses', 'Trams', 'Taxis'],
      dailyRiders: '5M+',
      routes: '200+ routes'
    },
    {
      name: 'Hyderabad',
      transit: ['TSRTC Buses', 'Hyderabad Metro', 'Auto Rickshaws'],
      dailyRiders: '4M+',
      routes: '180+ routes'
    }
  ];

  const caseStudies = [
    {
      client: 'Food Delivery App',
      campaign: 'Metro Station Campaign',
      objective: 'Increase app downloads in urban areas',
      strategy: 'Platform posters + digital screens in 50 metro stations',
      results: {
        impressions: '25M impressions/month',
        downloads: '180% increase in downloads',
        roi: '450% ROI'
      }
    },
    {
      client: 'Banking Service',
      campaign: 'Bus Advertising Campaign',
      objective: 'Promote new savings account',
      strategy: 'Bus exterior panels across 200 buses in 5 cities',
      results: {
        impressions: '15M impressions/month',
        downloads: '120% increase in account openings',
        roi: '320% ROI'
      }
    },
    {
      client: 'E-commerce Platform',
      campaign: 'Airport Advertising',
      objective: 'Target premium customers',
      strategy: 'Digital displays in business lounges and departure gates',
      results: {
        impressions: '5M impressions/month',
        downloads: '200% increase in premium subscriptions',
        roi: '380% ROI'
      }
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-500 to-red-600 text-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Transit Media Advertising</h1>
          <p className="text-xl mb-8">Reach millions of commuters daily with strategic transit advertising across India's major cities</p>
          <div className="flex flex-wrap gap-4">
            <div className="bg-white/20 px-4 py-2 rounded-full">
              <span className="text-sm">🚌 10M+ daily commuter reach</span>
            </div>
            <div className="bg-white/20 px-4 py-2 rounded-full">
              <span className="text-sm">📍 500+ transit routes</span>
            </div>
            <div className="bg-white/20 px-4 py-2 rounded-full">
              <span className="text-sm">💰 Cost-effective CPM</span>
            </div>
            <div className="bg-white/20 px-4 py-2 rounded-full">
              <span className="text-sm">📊 Real-time tracking</span>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4">
          <nav className="flex space-x-8">
            {[
              { id: 'overview', label: 'Overview' },
              { id: 'formats', label: 'Ad Formats' },
              { id: 'locations', label: 'Locations' },
              { id: 'case-studies', label: 'Case Studies' },
              { id: 'contact', label: 'Get Quote' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 px-2 border-b-2 font-medium text-sm ${
                  activeTab === tab.id
                    ? 'border-orange-500 text-orange-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        {activeTab === 'overview' && (
          <div className="space-y-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">Why Transit Media?</h2>
                <p className="text-gray-600 mb-6">
                  Transit advertising offers unparalleled reach to urban consumers during their daily commute. With extended exposure times and high frequency, your message becomes part of their routine.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <span className="bg-orange-100 p-2 rounded-lg mr-3">🎯</span>
                    <span>Reach commuters when they're most receptive</span>
                  </div>
                  <div className="flex items-center">
                    <span className="bg-orange-100 p-2 rounded-lg mr-3">⏰</span>
                    <span>Extended exposure time during commute</span>
                  </div>
                  <div className="flex items-center">
                    <span className="bg-orange-100 p-2 rounded-lg mr-3">💡</span>
                    <span>High recall rates due to routine exposure</span>
                  </div>
                  <div className="flex items-center">
                    <span className="bg-orange-100 p-2 rounded-lg mr-3">📱</span>
                    <span>Perfect complement to digital campaigns</span>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-orange-100 to-red-100 p-8 rounded-lg">
                <h3 className="text-xl font-bold mb-6">Key Advantages</h3>
                <div className="grid grid-cols-2 gap-4">
                  {advantages.map((advantage, index) => (
                    <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
                      <div className="text-2xl mb-2">{advantage.icon}</div>
                      <h4 className="font-bold text-sm mb-1">{advantage.title}</h4>
                      <p className="text-xs text-gray-600 mb-1">{advantage.description}</p>
                      <span className="text-xs font-medium text-orange-600">{advantage.stat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'formats' && (
          <div>
            <h2 className="text-3xl font-bold mb-8 text-center">Transit Advertising Formats</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {transitFormats.map((format, index) => (
                <div 
                  key={index} 
                  className={`bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-all cursor-pointer ${
                    selectedFormat === format.id ? 'ring-2 ring-orange-500' : ''
                  }`}
                  onClick={() => setSelectedFormat(selectedFormat === format.id ? null : format.id)}
                >
                  <div className="text-4xl mb-4">{format.icon}</div>
                  <h3 className="text-xl font-bold mb-3">{format.title}</h3>
                  <p className="text-gray-600 mb-4">{format.description}</p>
                  
                  {selectedFormat === format.id && (
                    <div className="mt-4 space-y-3">
                      <div>
                        <h4 className="font-bold text-sm mb-2">Available Formats:</h4>
                        <ul className="text-xs space-y-1">
                          {format.formats.map((item, idx) => (
                            <li key={idx} className="text-gray-600">• {item}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="grid grid-cols-1 gap-2 text-xs">
                        <div><span className="font-medium">Reach:</span> {format.reach}</div>
                        <div><span className="font-medium">Cost:</span> {format.cost}</div>
                        <div><span className="font-medium">Best For:</span> {format.bestFor}</div>
                      </div>
                    </div>
                  )}
                  
                  <div className="mt-4 space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Reach:</span>
                      <span className="font-medium text-orange-600">{format.reach}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Starting from:</span>
                      <span className="font-medium">{format.cost.split(' - ')[0]}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'locations' && (
          <div>
            <h2 className="text-3xl font-bold mb-8 text-center">Available Locations</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {cities.map((city, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-bold mb-3">{city.name}</h3>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-medium text-sm mb-2">Transit Options:</h4>
                      <div className="flex flex-wrap gap-1">
                        {city.transit.map((option, idx) => (
                          <span key={idx} className="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded-full">
                            {option}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Daily Riders:</span>
                      <span className="font-medium">{city.dailyRiders}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Available Routes:</span>
                      <span className="font-medium">{city.routes}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-12 bg-gradient-to-r from-orange-50 to-red-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6 text-center">Coverage Map</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bold mb-4">Northern India</h4>
                  <ul className="space-y-2 text-sm">
                    <li>✓ Delhi NCR - Metro, Buses, Airport</li>
                    <li>✓ Chandigarh - City Buses</li>
                    <li>✓ Jaipur - JCTSL Buses</li>
                    <li>✓ Lucknow - Metro, Buses</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-4">Western India</h4>
                  <ul className="space-y-2 text-sm">
                    <li>✓ Mumbai - Local Trains, Metro, BEST</li>
                    <li>✓ Pune - PMPML Buses, Metro</li>
                    <li>✓ Ahmedabad - BRTS, AMTS Buses</li>
                    <li>✓ Surat - City Buses</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-4">Southern India</h4>
                  <ul className="space-y-2 text-sm">
                    <li>✓ Bangalore - BMTC, Namma Metro</li>
                    <li>✓ Chennai - MTC, Chennai Metro</li>
                    <li>✓ Hyderabad - TSRTC, Metro</li>
                    <li>✓ Kochi - KSRTC Buses</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-4">Eastern India</h4>
                  <ul className="space-y-2 text-sm">
                    <li>✓ Kolkata - Metro, Buses, Trams</li>
                    <li>✓ Bhubaneswar - City Buses</li>
                    <li>✓ Guwahati - City Buses</li>
                    <li>✓ Patna - City Buses</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'case-studies' && (
          <div>
            <h2 className="text-3xl font-bold mb-8 text-center">Transit Media Success Stories</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {caseStudies.map((study, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-bold mb-2">{study.client}</h3>
                  <h4 className="text-sm font-medium text-orange-600 mb-3">{study.campaign}</h4>
                  <div className="mb-4">
                    <p className="text-sm text-gray-600 mb-1">Objective:</p>
                    <p className="text-sm">{study.objective}</p>
                  </div>
                  <div className="mb-4">
                    <p className="text-sm text-gray-600 mb-1">Strategy:</p>
                    <p className="text-sm font-medium">{study.strategy}</p>
                  </div>
                  <div className="bg-gradient-to-r from-orange-50 to-red-50 p-4 rounded">
                    <p className="text-sm font-bold text-orange-600 mb-2">Results:</p>
                    <div className="space-y-1">
                      <p className="text-xs">{study.results.impressions}</p>
                      <p className="text-xs">{study.results.downloads}</p>
                      <p className="text-xs font-medium text-green-600">{study.results.roi}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'contact' && (
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Get Transit Media Quote</h2>
            <div className="bg-white rounded-lg shadow-md p-8">
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Company</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Campaign Budget</label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                    >
                      <option value="">Select budget range</option>
                      <option value="50k-100k">₹50,000 - ₹1,00,000</option>
                      <option value="100k-300k">₹1,00,000 - ₹3,00,000</option>
                      <option value="300k-500k">₹3,00,000 - ₹5,00,000</option>
                      <option value="500k+">₹5,00,000+</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Campaign Duration</label>
                    <select
                      name="duration"
                      value={formData.duration}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                    >
                      <option value="">Select duration</option>
                      <option value="1-month">1 Month</option>
                      <option value="3-months">3 Months</option>
                      <option value="6-months">6 Months</option>
                      <option value="12-months">12 Months</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Ad Format</label>
                  <select
                    name="format"
                    value={formData.format}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  >
                    <option value="">Select format</option>
                    <option value="bus-ads">Bus Advertising</option>
                    <option value="metro-ads">Metro/Subway Advertising</option>
                    <option value="taxi-ads">Taxi & Auto Advertising</option>
                    <option value="airport-ads">Airport Advertising</option>
                    <option value="train-ads">Railway Advertising</option>
                    <option value="bus-stop-ads">Bus Stop Advertising</option>
                    <option value="multiple">Multiple Formats</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Target Locations</label>
                  <textarea
                    name="locations"
                    value={formData.locations}
                    onChange={handleInputChange}
                    rows="3"
                    placeholder="Specify cities, routes, or areas you want to target..."
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  ></textarea>
                </div>
                <button
                  onClick={handleSubmit}
                  className="w-full bg-gradient-to-r from-orange-500 to-red-600 text-white py-3 px-4 rounded-md hover:from-orange-600 hover:to-red-700 font-medium"
                >
                  Get Transit Media Quote & Availability
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TransitMedia;