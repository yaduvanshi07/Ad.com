import React, { useState } from 'react';

const OutdoorDOOH = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    budget: '',
    locations: '',
    format: '',
    objective: ''
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
    alert('Thank you! Our outdoor advertising specialists will contact you with site availability and media planning within 24 hours.');
    setFormData({ name: '', email: '', company: '', budget: '', locations: '', format: '', objective: '' });
  };

  const outdoorFormats = [
    {
      id: 'billboards',
      category: 'traditional',
      title: 'Billboard Advertising',
      icon: '🏗️',
      description: 'Large-format static billboards on highways and major roads',
      sizes: ['30x20 feet', '40x30 feet', '60x40 feet'],
      locations: 'Highways, expressways, major intersections',
      visibility: '24/7 visibility',
      cost: '₹50,000 - ₹200,000/month',
      bestFor: 'Brand awareness, product launches'
    },
    {
      id: 'digital-billboards',
      category: 'digital',
      title: 'Digital Billboards',
      icon: '📺',
      description: 'LED digital displays with dynamic content capabilities',
      sizes: ['20x10 feet', '30x20 feet', '50x30 feet'],
      locations: 'Premium locations, malls, airports',
      visibility: 'Dynamic content rotation',
      cost: '₹80,000 - ₹400,000/month',
      bestFor: 'Multiple campaigns, real-time updates'
    },
    {
      id: 'hoardings',
      category: 'traditional',
      title: 'Hoardings',
      icon: '📋',
      description: 'Medium format displays in urban commercial areas',
      sizes: ['20x10 feet', '25x15 feet', '30x20 feet'],
      locations: 'Commercial areas, busy streets',
      visibility: '24/7 static display',
      cost: '₹25,000 - ₹100,000/month',
      bestFor: 'Local businesses, retail promotion'
    },
    {
      id: 'digital-screens',
      category: 'digital',
      title: 'Digital Screens',
      icon: '💻',
      description: 'Interactive digital displays in malls and commercial spaces',
      sizes: ['55 inch', '75 inch', '98 inch'],
      locations: 'Malls, offices, restaurants',
      visibility: 'Interactive content',
      cost: '₹30,000 - ₹150,000/month',
      bestFor: 'Engagement campaigns, retail'
    },
    {
      id: 'pole-kiosks',
      category: 'traditional',
      title: 'Pole Kiosks',
      icon: '📍',
      description: 'Vertical displays on street poles and intersections',
      sizes: ['6x4 feet', '8x6 feet', '10x8 feet'],
      locations: 'Street intersections, footpaths',
      visibility: 'Eye-level visibility',
      cost: '₹15,000 - ₹50,000/month',
      bestFor: 'Local services, directions'
    },
    {
      id: 'led-walls',
      category: 'digital',
      title: 'LED Video Walls',
      icon: '🎬',
      description: 'Large LED walls for high-impact video content',
      sizes: ['100+ sq ft', 'Custom sizes'],
      locations: 'Times Square equivalents, major venues',
      visibility: 'High-definition video',
      cost: '₹200,000 - ₹1,000,000/month',
      bestFor: 'Premium brands, major campaigns'
    },
    {
      id: 'gantries',
      category: 'traditional',
      title: 'Gantry Advertising',
      icon: '🌉',
      description: 'Overhead displays spanning across highways',
      sizes: ['40x20 feet', '60x30 feet'],
      locations: 'Highway gantries, flyovers',
      visibility: 'Unavoidable visibility',
      cost: '₹100,000 - ₹300,000/month',
      bestFor: 'Highway campaigns, automotive'
    },
    {
      id: 'unipoles',
      category: 'traditional',
      title: 'Unipole Advertising',
      icon: '🗼',
      description: 'Single pole mounted displays at strategic locations',
      sizes: ['20x15 feet', '30x20 feet'],
      locations: 'Highway entry/exit points',
      visibility: 'High-impact positioning',
      cost: '₹60,000 - ₹250,000/month',
      bestFor: 'City entry campaigns, tourism'
    }
  ];

  const advantages = [
    {
      title: 'Massive Reach',
      description: '24/7 visibility to millions of daily commuters and pedestrians',
      icon: '👥',
      stat: '50M+ daily impressions'
    },
    {
      title: 'Brand Building',
      description: 'Large format displays create strong brand presence and recall',
      icon: '🏢',
      stat: '85% brand recall improvement'
    },
    {
      title: 'Location Targeting',
      description: 'Strategic placement near target demographics and locations',
      icon: '📍',
      stat: 'Precision location targeting'
    },
    {
      title: 'Weather Resistant',
      description: 'Outdoor displays work in all weather conditions',
      icon: '🌦️',
      stat: '365 days visibility'
    },
    {
      title: 'Creative Impact',
      description: 'Large canvas for creative and impactful messaging',
      icon: '🎨',
      stat: 'Unlimited creative possibilities'
    },
    {
      title: 'Complement Digital',
      description: 'Perfect integration with digital marketing campaigns',
      icon: '📱',
      stat: '300% campaign amplification'
    }
  ];

  const locations = [
    {
      type: 'Highways & Expressways',
      description: 'High-traffic corridors connecting major cities',
      formats: ['Billboards', 'Gantries', 'Unipoles'],
      audience: 'Inter-city travelers, commercial vehicles',
      dailyTraffic: '100K+ vehicles/day'
    },
    {
      type: 'City Centers',
      description: 'Prime commercial and business districts',
      formats: ['Digital Screens', 'Hoardings', 'LED Walls'],
      audience: 'Urban professionals, shoppers',
      dailyTraffic: '500K+ footfall/day'
    },
    {
      type: 'Shopping Malls',
      description: 'Premium retail and entertainment destinations',
      formats: ['Digital Screens', 'LED Walls', 'Interactive Displays'],
      audience: 'Shoppers, families, youth',
      dailyTraffic: '50K+ visitors/day'
    },
    {
      type: 'Airports',
      description: 'International and domestic terminals',
      formats: ['Digital Billboards', 'LED Walls', 'Premium Displays'],
      audience: 'Business travelers, tourists',
      dailyTraffic: '100K+ passengers/day'
    },
    {
      type: 'Metro Stations',
      description: 'Underground and elevated metro stations',
      formats: ['Digital Screens', 'Platform Displays', 'Escalator Panels'],
      audience: 'Daily commuters, urban population',
      dailyTraffic: '200K+ commuters/day'
    },
    {
      type: 'Residential Areas',
      description: 'High-density residential neighborhoods',
      formats: ['Pole Kiosks', 'Small Hoardings', 'Community Boards'],
      audience: 'Local residents, families',
      dailyTraffic: '50K+ residents'
    }
  ];

  const caseStudies = [
    {
      client: 'Automotive Brand',
      campaign: 'New Car Launch',
      format: 'Highway Billboards + Digital LED',
      locations: '50+ premium locations across 10 cities',
      duration: '3 months',
      results: {
        impressions: '100M+ impressions',
        awareness: '60% brand awareness increase',
        sales: '25% sales lift in campaign cities'
      }
    },
    {
      client: 'E-commerce Giant',
      campaign: 'Festive Season Sale',
      format: 'Digital Billboards + Mall Screens',
      locations: '200+ digital displays in tier-1 cities',
      duration: '1 month',
      results: {
        impressions: '75M+ impressions',
        awareness: '40% brand recall increase',
        sales: '180% online traffic increase'
      }
    },
    {
      client: 'Banking Service',
      campaign: 'Digital Banking Promotion',
      format: 'Metro Station Displays',
      locations: '100+ metro stations in Delhi & Mumbai',
      duration: '6 months',
      results: {
        impressions: '50M+ impressions',
        awareness: '35% brand consideration increase',
        sales: '150% app downloads increase'
      }
    }
  ];

  const filteredFormats = selectedCategory === 'all' 
    ? outdoorFormats 
    : outdoorFormats.filter(format => format.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Outdoor & DOOH Advertising</h1>
          <p className="text-xl mb-8">Dominate the outdoor landscape with strategic billboard, hoarding, and digital out-of-home advertising</p>
          <div className="flex flex-wrap gap-4">
            <div className="bg-white/20 px-4 py-2 rounded-full">
              <span className="text-sm">🏗️ 5000+ premium locations</span>
            </div>
            <div className="bg-white/20 px-4 py-2 rounded-full">
              <span className="text-sm">📺 Digital & traditional formats</span>
            </div>
            <div className="bg-white/20 px-4 py-2 rounded-full">
              <span className="text-sm">👥 50M+ daily reach</span>
            </div>
            <div className="bg-white/20 px-4 py-2 rounded-full">
              <span className="text-sm">📍 Pan-India coverage</span>
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
                    ? 'border-green-500 text-green-600'
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
                <h2 className="text-3xl font-bold mb-4">Why Outdoor Advertising?</h2>
                <p className="text-gray-600 mb-6">
                  Outdoor advertising provides unmatched visibility and brand presence. With strategic placement and creative execution, your message reaches millions daily while building lasting brand recognition.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <span className="bg-green-100 p-2 rounded-lg mr-3">🎯</span>
                    <span>Unavoidable visibility in high-traffic areas</span>
                  </div>
                  <div className="flex items-center">
                    <span className="bg-green-100 p-2 rounded-lg mr-3">⏰</span>
                    <span>24/7 brand presence and exposure</span>
                  </div>
                  <div className="flex items-center">
                    <span className="bg-green-100 p-2 rounded-lg mr-3">💡</span>
                    <span>Large format for maximum creative impact</span>
                  </div>
                  <div className="flex items-center">
                    <span className="bg-green-100 p-2 rounded-lg mr-3">📈</span>
                    <span>Builds brand authority and credibility</span>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-green-100 to-blue-100 p-8 rounded-lg">
                <h3 className="text-xl font-bold mb-6">Key Advantages</h3>
                <div className="grid grid-cols-2 gap-4">
                  {advantages.map((advantage, index) => (
                    <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
                      <div className="text-2xl mb-2">{advantage.icon}</div>
                      <h4 className="font-bold text-sm mb-1">{advantage.title}</h4>
                      <p className="text-xs text-gray-600 mb-1">{advantage.description}</p>
                      <span className="text-xs font-medium text-green-600">{advantage.stat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-blue-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6 text-center">Traditional vs Digital Outdoor</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-lg">
                  <h4 className="text-xl font-bold mb-4 text-gray-800">Traditional Outdoor</h4>
                  <ul className="space-y-2 text-sm">
                    <li>✓ Cost-effective for long-term campaigns</li>
                    <li>✓ High impact static messaging</li>
                    <li>✓ Wide availability across all locations</li>
                    <li>✓ Proven effectiveness and reach</li>
                    <li>✓ Weather-resistant materials</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg">
                  <h4 className="text-xl font-bold mb-4 text-blue-800">Digital DOOH</h4>
                  <ul className="space-y-2 text-sm">
                    <li>✓ Dynamic content and real-time updates</li>
                    <li>✓ Multiple advertisers sharing costs</li>
                    <li>✓ Interactive and engaging formats</li>
                    <li>✓ Precise audience targeting</li>
                    <li>✓ Real-time campaign optimization</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'formats' && (
          <div>
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold">Outdoor Advertising Formats</h2>
              <div className="flex space-x-2">
                <button
                  onClick={() => setSelectedCategory('all')}
                  className={`px-4 py-2 rounded-lg text-sm font-medium ${
                    selectedCategory === 'all' ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-700'
                  }`}
                >
                  All Formats
                </button>
                <button
                  onClick={() => setSelectedCategory('traditional')}
                  className={`px-4 py-2 rounded-lg text-sm font-medium ${
                    selectedCategory === 'traditional' ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-700'
                  }`}
                >
                  Traditional
                </button>
                <button
                  onClick={() => setSelectedCategory('digital')}
                  className={`px-4 py-2 rounded-lg text-sm font-medium ${
                    selectedCategory === 'digital' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
                  }`}
                >
                  Digital
                </button>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredFormats.map((format, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="text-4xl mr-3">{format.icon}</div>
                    <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                      format.category === 'digital' ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-800'
                    }`}>
                      {format.category === 'digital' ? 'Digital' : 'Traditional'}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{format.title}</h3>
                  <p className="text-gray-600 mb-4">{format.description}</p>
                  
                  <div className="space-y-2 text-sm">
                    <div>
                      <span className="font-medium text-gray-700">Sizes: </span>
                      <span className="text-gray-600">{format.sizes.join(', ')}</span>
                    </div>
                    <div>
                      <span className="font-medium text-gray-700">Locations: </span>
                      <span className="text-gray-600">{format.locations}</span>
                    </div>
                    <div>
                      <span className="font-medium text-gray-700">Visibility: </span>
                      <span className="text-gray-600">{format.visibility}</span>
                    </div>
                    <div>
                      <span className="font-medium text-gray-700">Cost: </span>
                      <span className="font-medium text-green-600">{format.cost}</span>
                    </div>
                    <div>
                      <span className="font-medium text-gray-700">Best For: </span>
                      <span className="text-gray-600">{format.bestFor}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'locations' && (
          <div>
            <h2 className="text-3xl font-bold mb-8 text-center">Premium Advertising Locations</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {locations.map((location, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-bold mb-3">{location.type}</h3>
                  <p className="text-gray-600 mb-4">{location.description}</p>
                  
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-medium text-sm mb-2">Available Formats:</h4>
                      <div className="flex flex-wrap gap-1">
                        {location.formats.map((format, idx) => (
                          <span key={idx} className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                            {format}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <span className="text-sm text-gray-600">Target Audience: </span>
                      <span className="text-sm font-medium">{location.audience}</span>
                    </div>
                    <div>
                      <span className="text-sm text-gray-600">Daily Traffic: </span>
                      <span className="text-sm font-medium text-green-600">{location.dailyTraffic}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'case-studies' && (
          <div>
            <h2 className="text-3xl font-bold mb-8 text-center">Outdoor Advertising Success Stories</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {caseStudies.map((study, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-bold mb-2">{study.client}</h3>
                  <h4 className="text-sm font-medium text-green-600 mb-3">{study.campaign}</h4>
                  <div className="space-y-3 mb-4">
                    <div>
                      <p className="text-sm text-gray-600">Format:</p>
                      <p className="text-sm font-medium">{study.format}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Locations:</p>
                      <p className="text-sm">{study.locations}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Duration:</p>
                      <p className="text-sm">{study.duration}</p>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-green-50 to-blue-50 p-4 rounded">
                    <p className="text-sm font-bold text-green-600 mb-2">Results:</p>
                    <div className="space-y-1">
                      <p className="text-xs">{study.results.impressions}</p>
                      <p className="text-xs">{study.results.awareness}</p>
                      <p className="text-xs font-medium text-blue-600">{study.results.sales}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'contact' && (
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Get Outdoor Advertising Quote</h2>
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
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
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
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Campaign Budget</label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    >
                      <option value="">Select budget range</option>
                      <option value="100k-300k">₹1,00,000 - ₹3,00,000</option>
                      <option value="300k-500k">₹3,00,000 - ₹5,00,000</option>
                      <option value="500k-1m">₹5,00,000 - ₹10,00,000</option>
                      <option value="1m+">₹10,00,000+</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Format</label>
                    <select
                      name="format"
                      value={formData.format}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    >
                      <option value="">Select format</option>
                      <option value="billboards">Traditional Billboards</option>
                      <option value="digital-billboards">Digital Billboards</option>
                      <option value="hoardings">Hoardings</option>
                      <option value="digital-screens">Digital Screens</option>
                      <option value="led-walls">LED Video Walls</option>
                      <option value="multiple">Multiple Formats</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Campaign Objective</label>
                  <select
                    name="objective"
                    value={formData.objective}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  >
                    <option value="">Select objective</option>
                    <option value="brand-awareness">Brand Awareness</option>
                    <option value="product-launch">Product Launch</option>
                    <option value="event-promotion">Event Promotion</option>
                    <option value="local-business">Local Business Promotion</option>
                    <option value="retail-traffic">Drive Retail Traffic</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Target Locations</label>
                  <textarea
                    name="locations"
                    value={formData.locations}
                    onChange={handleInputChange}
                    rows="3"
                    placeholder="Specify cities, highways, malls, or specific areas you want to target..."
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  ></textarea>
                </div>
                <button
                  onClick={handleSubmit}
                  className="w-full bg-gradient-to-r from-green-600 to-blue-600 text-white py-3 px-4 rounded-md hover:from-green-700 hover:to-blue-700 font-medium"
                >
                  Get Outdoor Advertising Quote & Site Availability
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default OutdoorDOOH;