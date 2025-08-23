import React, { useState } from 'react';

const ProgrammaticAds = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    budget: '',
    objective: '',
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
    alert('Thank you! Our programmatic advertising experts will contact you within 24 hours.');
    setFormData({ name: '', email: '', company: '', budget: '', objective: '', audience: '' });
  };

  const adFormats = [
    {
      icon: '📱',
      title: 'Display Ads',
      description: 'Banner ads across premium websites and mobile apps',
      targeting: 'Demographic, behavioral, contextual',
      reach: '2M+ websites globally'
    },
    {
      icon: '📺',
      title: 'Video Ads',
      description: 'Pre-roll, mid-roll, and outstream video advertising',
      targeting: 'Interest-based, lookalike audiences',
      reach: 'YouTube, streaming platforms'
    },
    {
      icon: '📢',
      title: 'Audio Ads',
      description: 'Podcast and streaming audio advertisements',
      targeting: 'Music preferences, listening habits',
      reach: 'Spotify, podcasts, radio apps'
    },
    {
      icon: '🏠',
      title: 'Connected TV',
      description: 'TV advertising on streaming services and smart TVs',
      targeting: 'Household data, viewing behavior',
      reach: 'Netflix, Prime Video, Hotstar'
    },
    {
      icon: '📍',
      title: 'Location-Based',
      description: 'Geo-targeted mobile advertising',
      targeting: 'Location history, foot traffic',
      reach: 'Mobile apps, location services'
    },
    {
      icon: '🛒',
      title: 'Shopping Ads',
      description: 'Product ads on e-commerce platforms',
      targeting: 'Purchase intent, shopping behavior',
      reach: 'Amazon, Flipkart, Google Shopping'
    }
  ];

  const platforms = [
    {
      name: 'Google Display & Video 360',
      logo: '🎯',
      features: ['Advanced audience targeting', 'Cross-device campaigns', 'Brand safety controls']
    },
    {
      name: 'The Trade Desk',
      logo: '📊',
      features: ['Premium inventory access', 'AI-powered optimization', 'Transparent reporting']
    },
    {
      name: 'Amazon DSP',
      logo: '🛍️',
      features: ['Amazon audience data', 'Retail media network', 'Purchase-based targeting']
    },
    {
      name: 'Adobe Advertising Cloud',
      logo: '🔧',
      features: ['Creative optimization', 'Attribution modeling', 'Cross-channel campaigns']
    }
  ];

  const benefits = [
    {
      title: 'Real-Time Bidding',
      description: 'Automated bidding ensures you pay the optimal price for each impression',
      metric: 'Up to 40% cost reduction'
    },
    {
      title: 'Precise Targeting',
      description: 'Reach your exact audience using first-party and third-party data',
      metric: '85% targeting accuracy'
    },
    {
      title: 'Cross-Device Reach',
      description: 'Follow users across desktop, mobile, tablet, and connected TV',
      metric: '95% device coverage'
    },
    {
      title: 'Brand Safety',
      description: 'Advanced filters protect your brand from inappropriate content',
      metric: '99.9% brand safe inventory'
    },
    {
      title: 'Real-Time Analytics',
      description: 'Monitor campaign performance and optimize in real-time',
      metric: 'Live reporting updates'
    },
    {
      title: 'Fraud Protection',
      description: 'AI-powered fraud detection ensures genuine ad views',
      metric: '<0.1% invalid traffic'
    }
  ];

  const caseStudies = [
    {
      industry: 'E-commerce Fashion',
      challenge: 'Increase online sales during festive season',
      strategy: 'Dynamic retargeting + lookalike audiences',
      results: {
        roas: '650% ROAS',
        conversions: '300% increase in conversions',
        cpa: '45% reduction in CPA'
      }
    },
    {
      industry: 'SaaS Technology',
      challenge: 'Generate quality leads for B2B software',
      strategy: 'LinkedIn + contextual targeting',
      results: {
        roas: '420% ROAS',
        conversions: '180% increase in qualified leads',
        cpa: '35% reduction in cost per lead'
      }
    },
    {
      industry: 'Healthcare',
      challenge: 'Promote new medical device to doctors',
      strategy: 'Medical publication targeting + video ads',
      results: {
        roas: '380% ROAS',
        conversions: '150% increase in inquiries',
        cpa: '25% reduction in acquisition cost'
      }
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Programmatic Advertising</h1>
          <p className="text-xl mb-8">Precision-targeted, data-driven advertising that reaches the right audience at the right moment</p>
          <div className="flex flex-wrap gap-4">
            <div className="bg-white/20 px-4 py-2 rounded-full">
              <span className="text-sm">🎯 99% targeting precision</span>
            </div>
            <div className="bg-white/20 px-4 py-2 rounded-full">
              <span className="text-sm">⚡ Real-time optimization</span>
            </div>
            <div className="bg-white/20 px-4 py-2 rounded-full">
              <span className="text-sm">📊 Transparent reporting</span>
            </div>
            <div className="bg-white/20 px-4 py-2 rounded-full">
              <span className="text-sm">💰 Average 400% ROAS</span>
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
              { id: 'platforms', label: 'Platforms' },
              { id: 'case-studies', label: 'Case Studies' },
              { id: 'contact', label: 'Get Started' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 px-2 border-b-2 font-medium text-sm ${
                  activeTab === tab.id
                    ? 'border-purple-500 text-purple-600'
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
                <h2 className="text-3xl font-bold mb-4">What is Programmatic Advertising?</h2>
                <p className="text-gray-600 mb-6">
                  Programmatic advertising uses artificial intelligence and machine learning to buy ad space in real-time, ensuring your ads reach the most relevant audience at the optimal price point.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-purple-100 p-2 rounded-lg mr-4">
                      <span className="text-2xl">🤖</span>
                    </div>
                    <div>
                      <h3 className="font-bold">AI-Powered Optimization</h3>
                      <p className="text-sm text-gray-600">Machine learning algorithms optimize your campaigns 24/7</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-purple-100 p-2 rounded-lg mr-4">
                      <span className="text-2xl">⚡</span>
                    </div>
                    <div>
                      <h3 className="font-bold">Real-Time Bidding</h3>
                      <p className="text-sm text-gray-600">Bid on ad inventory in milliseconds for optimal placement</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-purple-100 p-2 rounded-lg mr-4">
                      <span className="text-2xl">📊</span>
                    </div>
                    <div>
                      <h3 className="font-bold">Data-Driven Targeting</h3>
                      <p className="text-sm text-gray-600">Leverage first-party and third-party data for precision targeting</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-purple-100 to-pink-100 p-8 rounded-lg">
                <h3 className="text-xl font-bold mb-6">Key Benefits</h3>
                <div className="grid grid-cols-2 gap-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
                      <h4 className="font-bold text-sm mb-2">{benefit.title}</h4>
                      <p className="text-xs text-gray-600 mb-2">{benefit.description}</p>
                      <span className="text-xs font-medium text-purple-600">{benefit.metric}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'formats' && (
          <div>
            <h2 className="text-3xl font-bold mb-8 text-center">Programmatic Ad Formats</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {adFormats.map((format, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                  <div className="text-4xl mb-4">{format.icon}</div>
                  <h3 className="text-xl font-bold mb-3">{format.title}</h3>
                  <p className="text-gray-600 mb-4">{format.description}</p>
                  <div className="space-y-2">
                    <div>
                      <span className="text-sm font-medium text-gray-700">Targeting: </span>
                      <span className="text-sm text-gray-600">{format.targeting}</span>
                    </div>
                    <div>
                      <span className="text-sm font-medium text-gray-700">Reach: </span>
                      <span className="text-sm text-purple-600">{format.reach}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'platforms' && (
          <div>
            <h2 className="text-3xl font-bold mb-8 text-center">Our Programmatic Platforms</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {platforms.map((platform, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6">
                  <div className="flex items-center mb-4">
                    <div className="text-3xl mr-3">{platform.logo}</div>
                    <h3 className="text-xl font-bold">{platform.name}</h3>
                  </div>
                  <ul className="space-y-2">
                    {platform.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'case-studies' && (
          <div>
            <h2 className="text-3xl font-bold mb-8 text-center">Programmatic Success Stories</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {caseStudies.map((study, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-bold mb-2">{study.industry}</h3>
                  <div className="mb-4">
                    <p className="text-sm text-gray-600 mb-1">Challenge:</p>
                    <p className="text-sm">{study.challenge}</p>
                  </div>
                  <div className="mb-4">
                    <p className="text-sm text-gray-600 mb-1">Strategy:</p>
                    <p className="text-sm font-medium">{study.strategy}</p>
                  </div>
                  <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded">
                    <p className="text-sm font-bold text-purple-600 mb-2">Results:</p>
                    <div className="space-y-1">
                      <p className="text-xs">{study.results.roas}</p>
                      <p className="text-xs">{study.results.conversions}</p>
                      <p className="text-xs">{study.results.cpa}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'contact' && (
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Launch Your Programmatic Campaign</h2>
            <div className="bg-white rounded-lg shadow-md p-8">
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Company</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Monthly Ad Budget</label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  >
                    <option value="">Select budget range</option>
                    <option value="50k-100k">₹50,000 - ₹1,00,000</option>
                    <option value="100k-500k">₹1,00,000 - ₹5,00,000</option>
                    <option value="500k-1m">₹5,00,000 - ₹10,00,000</option>
                    <option value="1m+">₹10,00,000+</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Campaign Objective</label>
                  <select
                    name="objective"
                    value={formData.objective}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  >
                    <option value="">Select objective</option>
                    <option value="brand-awareness">Brand Awareness</option>
                    <option value="lead-generation">Lead Generation</option>
                    <option value="sales">Sales & Conversions</option>
                    <option value="app-installs">App Installs</option>
                    <option value="website-traffic">Website Traffic</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Target Audience</label>
                  <textarea
                    name="audience"
                    value={formData.audience}
                    onChange={handleInputChange}
                    rows="3"
                    placeholder="Describe your target audience (demographics, interests, behaviors)..."
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  ></textarea>
                </div>
                <button
                  onClick={handleSubmit}
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 px-4 rounded-md hover:from-purple-700 hover:to-pink-700 font-medium"
                >
                  Get Programmatic Strategy & Quote
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProgrammaticAds;