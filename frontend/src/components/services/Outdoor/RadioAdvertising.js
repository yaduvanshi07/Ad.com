import React, { useState } from 'react';

const RadioAdvertising = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedStation, setSelectedStation] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    budget: '',
    locations: '',
    duration: '',
    timeSlot: '',
    audience: ''
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
    alert('Thank you! Our radio advertising specialists will contact you with rate cards and time slot availability within 24 hours.');
    setFormData({ name: '', email: '', company: '', budget: '', locations: '', duration: '', timeSlot: '', audience: '' });
  };

  const radioStations = [
    {
      id: 'fm-hindi',
      category: 'Hindi',
      name: 'Radio Mirchi 98.3 FM',
      language: 'Hindi',
      description: 'Most popular Hindi FM station with youth-focused content',
      audience: 'Youth 18-35, Urban',
      peakHours: '7-11 AM, 5-9 PM',
      avgListeners: '15 lakh daily',
      cost: '₹8,000 - ₹25,000 per 30-sec spot',
      cities: ['Mumbai', 'Delhi', 'Bangalore', 'Chennai', 'Kolkata']
    },
    {
      id: 'red-fm',
      category: 'Hindi',
      name: 'RED FM 93.5',
      language: 'Hindi',
      description: 'Entertainment-focused station with humor and music',
      audience: 'Adults 25-45, Mass market',
      peakHours: '8-12 PM, 6-10 PM',
      avgListeners: '12 lakh daily',
      cost: '₹6,000 - ₹20,000 per 30-sec spot',
      cities: ['Delhi', 'Mumbai', 'Pune', 'Ahmedabad', 'Jaipur']
    },
    {
      id: 'radio-city',
      category: 'English',
      name: 'Radio City 91.1 FM',
      language: 'English/Hindi',
      description: 'Mix of Bollywood and international music',
      audience: 'Young professionals 22-40',
      peakHours: '7-11 AM, 7-11 PM',
      avgListeners: '10 lakh daily',
      cost: '₹7,000 - ₹22,000 per 30-sec spot',
      cities: ['Mumbai', 'Delhi', 'Bangalore', 'Hyderabad', 'Pune']
    },
    {
      id: 'big-fm',
      category: 'Regional',
      name: 'BIG FM 92.7',
      language: 'Regional Languages',
      description: 'Regional content in local languages',
      audience: 'Local population 20-50',
      peakHours: '6-10 AM, 6-10 PM',
      avgListeners: '8 lakh daily',
      cost: '₹4,000 - ₹15,000 per 30-sec spot',
      cities: ['Regional cities', 'Tier 2 & 3 cities']
    },
    {
      id: 'fever-fm',
      category: 'English',
      name: 'Fever FM 104',
      language: 'English',
      description: 'International and contemporary English music',
      audience: 'Urban youth 18-30',
      peakHours: '6-10 AM, 8-12 PM',
      avgListeners: '6 lakh daily',
      cost: '₹5,000 - ₹18,000 per 30-sec spot',
      cities: ['Mumbai', 'Delhi', 'Bangalore', 'Chennai']
    },
    {
      id: 'all-india-radio',
      category: 'Government',
      name: 'All India Radio',
      language: 'Multiple Languages',
      description: 'Government radio with news and cultural programs',
      audience: 'Mass audience all ages',
      peakHours: '6-9 AM, 7-9 PM',
      avgListeners: '20 lakh daily',
      cost: '₹2,000 - ₹8,000 per 30-sec spot',
      cities: ['Pan India coverage']
    }
  ];

  const adFormats = [
    {
      type: 'Spot Advertisement',
      duration: '10-60 seconds',
      description: 'Traditional radio commercials during breaks',
      bestFor: 'Product promotions, brand awareness',
      cost: 'Base rate per spot'
    },
    {
      type: 'Sponsorship Tags',
      duration: '5-10 seconds',
      description: 'Short brand mentions during programs',
      bestFor: 'Brand association, cost-effective reach',
      cost: '30-50% of spot rate'
    },
    {
      type: 'RJ Mentions',
      duration: '15-30 seconds',
      description: 'Radio jockey talks about your brand naturally',
      bestFor: 'Authentic endorsements, trust building',
      cost: 'Premium rates'
    },
    {
      type: 'Contest Sponsorship',
      duration: 'Multiple mentions',
      description: 'Sponsor radio station contests and games',
      bestFor: 'Audience engagement, lead generation',
      cost: 'Package deals'
    },
    {
      type: 'Program Sponsorship',
      duration: 'Full program',
      description: 'Associate your brand with popular shows',
      bestFor: 'Brand positioning, sustained exposure',
      cost: 'Premium packages'
    },
    {
      type: 'Live Reads',
      duration: '30-60 seconds',
      description: 'RJ reads your script live on air',
      bestFor: 'Promotional offers, urgent messages',
      cost: 'Higher than pre-recorded'
    }
  ];

  const timeSlots = [
    {
      slot: 'Prime Morning (6-10 AM)',
      description: 'Commuters and office-goers listening',
      audience: 'Working professionals, high attention',
      costMultiplier: '2.5x base rate',
      reach: 'Maximum daily reach'
    },
    {
      slot: 'Day Time (10 AM-4 PM)',
      description: 'Housewives, students, and shift workers',
      audience: 'Homemakers, students, leisure listeners',
      costMultiplier: '1x base rate',
      reach: 'Moderate reach, longer duration'
    },
    {
      slot: 'Prime Evening (4-8 PM)',
      description: 'Return commute and evening listeners',
      audience: 'Commuters, families, high engagement',
      costMultiplier: '2x base rate',
      reach: 'High reach and engagement'
    },
    {
      slot: 'Night Time (8 PM-12 AM)',
      description: 'Leisure and entertainment seekers',
      audience: 'Youth, entertainment seekers',
      costMultiplier: '1.5x base rate',
      reach: 'Targeted youth reach'
    },
    {
      slot: 'Late Night (12-6 AM)',
      description: 'Night shift workers and insomniacs',
      audience: 'Niche audience, night workers',
      costMultiplier: '0.5x base rate',
      reach: 'Low reach, cost-effective'
    }
  ];

  const advantages = [
    {
      title: 'Mass Reach',
      description: 'Radio reaches millions of listeners across demographics',
      icon: '📻',
      stat: '65% population listens daily'
    },
    {
      title: 'Cost Effective',
      description: 'Lower cost per impression compared to TV and digital',
      icon: '💰',
      stat: '70% cheaper than TV'
    },
    {
      title: 'Local Targeting',
      description: 'Target specific cities and regions effectively',
      icon: '📍',
      stat: 'City-level precision'
    },
    {
      title: 'Immediate Impact',
      description: 'Quick production and instant broadcast capability',
      icon: '⚡',
      stat: 'Same-day broadcast possible'
    },
    {
      title: 'Companion Medium',
      description: 'People listen while multitasking - driving, working',
      icon: '🚗',
      stat: '80% listen while driving'
    },
    {
      title: 'Trust Factor',
      description: 'Radio jockeys build personal connection with audience',
      icon: '🤝',
      stat: '75% trust RJ recommendations'
    }
  ];

  const caseStudies = [
    {
      client: 'Quick Service Restaurant',
      campaign: 'New Menu Launch',
      stations: 'Radio Mirchi + RED FM in 5 cities',
      duration: '4 weeks',
      strategy: 'Prime time spots + RJ mentions + contest sponsorship',
      results: {
        reach: '50 lakh listeners reached',
        footfall: '40% increase in footfall',
        awareness: '60% brand recall improvement'
      }
    },
    {
      client: 'Real Estate Developer',
      campaign: 'New Project Launch',
      stations: 'Radio City + BIG FM in Mumbai',
      duration: '8 weeks',
      strategy: 'Morning drive time + weekend property show sponsorship',
      results: {
        reach: '25 lakh listeners reached',
        footfall: '200% increase in site visits',
        awareness: '45% awareness increase'
      }
    },
    {
      client: 'E-learning Platform',
      campaign: 'Student Acquisition',
      stations: 'Multiple FM stations in 10 cities',
      duration: '12 weeks',
      strategy: 'Student-focused time slots + educational content integration',
      results: {
        reach: '80 lakh listeners reached',
        footfall: '180% increase in sign-ups',
        awareness: '70% brand consideration increase'
      }
    }
  ];

  const filteredStations = radioStations;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-red-500 to-pink-600 text-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Radio Advertising</h1>
          <p className="text-xl mb-8">Reach millions of listeners with compelling audio advertisements across India's top radio stations</p>
          <div className="flex flex-wrap gap-4">
            <div className="bg-white/20 px-4 py-2 rounded-full">
              <span className="text-sm">📻 100+ radio stations</span>
            </div>
            <div className="bg-white/20 px-4 py-2 rounded-full">
              <span className="text-sm">👥 50M+ daily listeners</span>
            </div>
            <div className="bg-white/20 px-4 py-2 rounded-full">
              <span className="text-sm">🎯 Local & national reach</span>
            </div>
            <div className="bg-white/20 px-4 py-2 rounded-full">
              <span className="text-sm">💰 Cost-effective CPM</span>
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
              { id: 'stations', label: 'Radio Stations' },
              { id: 'formats', label: 'Ad Formats' },
              { id: 'time-slots', label: 'Time Slots' },
              { id: 'case-studies', label: 'Case Studies' },
              { id: 'contact', label: 'Get Quote' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 px-2 border-b-2 font-medium text-sm ${
                  activeTab === tab.id
                    ? 'border-red-500 text-red-600'
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
                <h2 className="text-3xl font-bold mb-4">Why Radio Advertising?</h2>
                <p className="text-gray-600 mb-6">
                  Radio remains one of the most intimate and trusted media channels. With its ability to create personal connections and drive immediate action, radio advertising offers unmatched value for businesses of all sizes.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <span className="bg-red-100 p-2 rounded-lg mr-3">🎵</span>
                    <span>Create emotional connections through audio storytelling</span>
                  </div>
                  <div className="flex items-center">
                    <span className="bg-red-100 p-2 rounded-lg mr-3">🚗</span>
                    <span>Reach captive audiences during commute times</span>
                  </div>
                  <div className="flex items-center">
                    <span className="bg-red-100 p-2 rounded-lg mr-3">⏰</span>
                    <span>Quick campaign launch and immediate broadcast</span>
                  </div>
                  <div className="flex items-center">
                    <span className="bg-red-100 p-2 rounded-lg mr-3">🎯</span>
                    <span>Target specific demographics and psychographics</span>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-red-100 to-pink-100 p-8 rounded-lg">
                <h3 className="text-xl font-bold mb-6">Key Advantages</h3>
                <div className="grid grid-cols-2 gap-4">
                  {advantages.map((advantage, index) => (
                    <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
                      <div className="text-2xl mb-2">{advantage.icon}</div>
                      <h4 className="font-bold text-sm mb-1">{advantage.title}</h4>
                      <p className="text-xs text-gray-600 mb-1">{advantage.description}</p>
                      <span className="text-xs font-medium text-red-600">{advantage.stat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-red-50 to-pink-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6 text-center">Radio Advertising Process</h3>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="bg-red-500 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">1</div>
                  <h4 className="font-bold mb-2">Strategy & Planning</h4>
                  <p className="text-sm text-gray-600">Define target audience, select stations, and plan time slots</p>
                </div>
                <div className="text-center">
                  <div className="bg-red-500 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">2</div>
                  <h4 className="font-bold mb-2">Script & Production</h4>
                  <p className="text-sm text-gray-600">Create compelling scripts and produce high-quality audio ads</p>
                </div>
                <div className="text-center">
                  <div className="bg-red-500 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">3</div>
                  <h4 className="font-bold mb-2">Booking & Scheduling</h4>
                  <p className="text-sm text-gray-600">Book optimal time slots and schedule campaign launch</p>
                </div>
                <div className="text-center">
                  <div className="bg-red-500 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">4</div>
                  <h4 className="font-bold mb-2">Monitoring & Reporting</h4>
                  <p className="text-sm text-gray-600">Track performance and provide detailed campaign reports</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'stations' && (
          <div>
            <h2 className="text-3xl font-bold mb-8 text-center">Partner Radio Stations</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredStations.map((station, index) => (
                <div 
                  key={index} 
                  className={`bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-all cursor-pointer ${
                    selectedStation === station.id ? 'ring-2 ring-red-500' : ''
                  }`}
                  onClick={() => setSelectedStation(selectedStation === station.id ? null : station.id)}
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold">{station.name}</h3>
                    <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                      station.category === 'Hindi' ? 'bg-orange-100 text-orange-800' :
                      station.category === 'English' ? 'bg-blue-100 text-blue-800' :
                      station.category === 'Regional' ? 'bg-green-100 text-green-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {station.language}
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{station.description}</p>
                  
                  <div className="space-y-2 text-sm">
                    <div>
                      <span className="font-medium text-gray-700">Target Audience: </span>
                      <span className="text-gray-600">{station.audience}</span>
                    </div>
                    <div>
                      <span className="font-medium text-gray-700">Peak Hours: </span>
                      <span className="text-gray-600">{station.peakHours}</span>
                    </div>
                    <div>
                      <span className="font-medium text-gray-700">Daily Listeners: </span>
                      <span className="font-medium text-red-600">{station.avgListeners}</span>
                    </div>
                    <div>
                      <span className="font-medium text-gray-700">Rate: </span>
                      <span className="font-medium">{station.cost}</span>
                    </div>
                  </div>

                  {selectedStation === station.id && (
                    <div className="mt-4 p-3 bg-red-50 rounded">
                      <h4 className="font-bold text-sm mb-2">Available Cities:</h4>
                      <div className="flex flex-wrap gap-1">
                        {station.cities.map((city, idx) => (
                          <span key={idx} className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full">
                            {city}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'formats' && (
          <div>
            <h2 className="text-3xl font-bold mb-8 text-center">Radio Advertising Formats</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {adFormats.map((format, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-bold mb-3">{format.type}</h3>
                  <div className="space-y-3">
                    <div>
                      <span className="text-sm text-gray-600">Duration: </span>
                      <span className="text-sm font-medium">{format.duration}</span>
                    </div>
                    <p className="text-gray-600 text-sm">{format.description}</p>
                    <div>
                      <span className="text-sm text-gray-600">Best For: </span>
                      <span className="text-sm font-medium">{format.bestFor}</span>
                    </div>
                    <div className="bg-red-50 p-3 rounded">
                      <span className="text-sm font-medium text-red-600">Cost: {format.cost}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'time-slots' && (
          <div>
            <h2 className="text-3xl font-bold mb-8 text-center">Radio Time Slots & Pricing</h2>
            <div className="space-y-4">
              {timeSlots.map((slot, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6">
                  <div className="grid md:grid-cols-4 gap-4 items-center">
                    <div>
                      <h3 className="text-lg font-bold text-red-600">{slot.slot}</h3>
                      <p className="text-sm text-gray-600">{slot.description}</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-sm mb-1">Target Audience</h4>
                      <p className="text-sm text-gray-600">{slot.audience}</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-sm mb-1">Pricing</h4>
                      <p className="text-sm font-medium">{slot.costMultiplier}</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-sm mb-1">Reach</h4>
                      <p className="text-sm text-gray-600">{slot.reach}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 bg-gradient-to-r from-red-50 to-pink-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6 text-center">Prime Time vs Off-Peak Comparison</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-lg">
                  <h4 className="text-xl font-bold mb-4 text-red-600">Prime Time (6-10 AM & 4-8 PM)</h4>
                  <ul className="space-y-2 text-sm">
                    <li>✓ Maximum listener engagement</li>
                    <li>✓ Commuter audience capture</li>
                    <li>✓ Higher attention and recall</li>
                    <li>✓ Best for urgent messages</li>
                    <li>✓ Premium positioning</li>
                  </ul>
                  <div className="mt-4 p-3 bg-red-50 rounded">
                    <span className="font-medium text-red-600">Cost: 2-2.5x base rate</span>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-lg">
                  <h4 className="text-xl font-bold mb-4 text-gray-600">Off-Peak (10 AM-4 PM & Night)</h4>
                  <ul className="space-y-2 text-sm">
                    <li>✓ Cost-effective reach</li>
                    <li>✓ Longer ad duration options</li>
                    <li>✓ Less cluttered environment</li>
                    <li>✓ Good for sustained campaigns</li>
                    <li>✓ Niche audience targeting</li>
                  </ul>
                  <div className="mt-4 p-3 bg-gray-50 rounded">
                    <span className="font-medium text-gray-600">Cost: 0.5-1x base rate</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'case-studies' && (
          <div>
            <h2 className="text-3xl font-bold mb-8 text-center">Radio Advertising Success Stories</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {caseStudies.map((study, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-bold mb-2">{study.client}</h3>
                  <h4 className="text-sm font-medium text-red-600 mb-3">{study.campaign}</h4>
                  <div className="space-y-3 mb-4">
                    <div>
                      <p className="text-sm text-gray-600">Stations:</p>
                      <p className="text-sm font-medium">{study.stations}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Duration:</p>
                      <p className="text-sm">{study.duration}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Strategy:</p>
                      <p className="text-sm">{study.strategy}</p>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-red-50 to-pink-50 p-4 rounded">
                    <p className="text-sm font-bold text-red-600 mb-2">Results:</p>
                    <div className="space-y-1">
                      <p className="text-xs">{study.results.reach}</p>
                      <p className="text-xs">{study.results.footfall}</p>
                      <p className="text-xs font-medium text-green-600">{study.results.awareness}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'contact' && (
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Get Radio Advertising Quote</h2>
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
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
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
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Campaign Budget</label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                    >
                      <option value="">Select budget range</option>
                      <option value="25k-50k">₹25,000 - ₹50,000</option>
                      <option value="50k-100k">₹50,000 - ₹1,00,000</option>
                      <option value="100k-300k">₹1,00,000 - ₹3,00,000</option>
                      <option value="300k+">₹3,00,000+</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Campaign Duration</label>
                    <select
                      name="duration"
                      value={formData.duration}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                    >
                      <option value="">Select duration</option>
                      <option value="1-week">1 Week</option>
                      <option value="2-weeks">2 Weeks</option>
                      <option value="1-month">1 Month</option>
                      <option value="3-months">3 Months</option>
                      <option value="6-months">6 Months</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Time Slot</label>
                  <select
                    name="timeSlot"
                    value={formData.timeSlot}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                  >
                    <option value="">Select time slot</option>
                    <option value="prime-morning">Prime Morning (6-10 AM)</option>
                    <option value="day-time">Day Time (10 AM-4 PM)</option>
                    <option value="prime-evening">Prime Evening (4-8 PM)</option>
                    <option value="night-time">Night Time (8 PM-12 AM)</option>
                    <option value="multiple">Multiple Time Slots</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Target Locations</label>
                  <textarea
                    name="locations"
                    value={formData.locations}
                    onChange={handleInputChange}
                    rows="2"
                    placeholder="Specify cities or regions..."
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                  ></textarea>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Target Audience</label>
                  <textarea
                    name="audience"
                    value={formData.audience}
                    onChange={handleInputChange}
                    rows="3"
                    placeholder="Describe your target audience (age, interests, demographics)..."
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                  ></textarea>
                </div>
                <button
                  onClick={handleSubmit}
                  className="w-full bg-gradient-to-r from-red-500 to-pink-600 text-white py-3 px-4 rounded-md hover:from-red-600 hover:to-pink-700 font-medium"
                >
                  Get Radio Advertising Quote & Time Slot Availability
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RadioAdvertising;