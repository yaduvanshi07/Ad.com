import React, { useState } from 'react';

const DigitalPR = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    budget: '',
    goals: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your interest! We will contact you soon.');
    setFormData({ name: '', email: '', company: '', budget: '', goals: '' });
  };

  const services = [
    {
      icon: '📰',
      title: 'Press Release Distribution',
      description: 'Strategic distribution to relevant media outlets and journalists'
    },
    {
      icon: '🎯',
      title: 'Media Outreach',
      description: 'Targeted outreach to industry-specific publications and influencers'
    },
    {
      icon: '📊',
      title: 'Brand Monitoring',
      description: 'Real-time monitoring of brand mentions across digital platforms'
    },
    {
      icon: '📝',
      title: 'Content Creation',
      description: 'Professional press releases, articles, and thought leadership pieces'
    },
    {
      icon: '📈',
      title: 'Crisis Management',
      description: 'Rapid response strategies for reputation management'
    },
    {
      icon: '🤝',
      title: 'Influencer Relations',
      description: 'Building relationships with key industry influencers and journalists'
    }
  ];

  const packages = [
    {
      name: 'Starter',
      price: '₹25,000/month',
      features: [
        '2 Press Releases per month',
        'Basic media list (50 contacts)',
        'Social media amplification',
        'Monthly performance report'
      ]
    },
    {
      name: 'Professional',
      price: '₹50,000/month',
      features: [
        '4 Press Releases per month',
        'Premium media list (200 contacts)',
        'Crisis response plan',
        'Bi-weekly reports',
        'Media training session'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom Pricing',
      features: [
        'Unlimited press releases',
        'Custom media database',
        '24/7 crisis management',
        'Weekly strategy calls',
        'Dedicated PR manager',
        'International outreach'
      ]
    }
  ];

  const caseStudies = [
    {
      client: 'Tech Startup',
      challenge: 'Product launch visibility',
      result: '300% increase in media coverage',
      metrics: '50+ publications covered the launch'
    },
    {
      client: 'Healthcare Company',
      challenge: 'Crisis management',
      result: 'Successfully managed reputation crisis',
      metrics: '90% positive sentiment recovery in 30 days'
    },
    {
      client: 'E-commerce Brand',
      challenge: 'Brand awareness',
      result: 'Established thought leadership',
      metrics: '25 executive interviews secured'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Digital PR Services</h1>
          <p className="text-xl mb-8">Build credibility, manage reputation, and amplify your brand story across digital media</p>
          <div className="flex flex-wrap gap-4">
            <div className="bg-white/20 px-4 py-2 rounded-full">
              <span className="text-sm">📈 Average 250% increase in media coverage</span>
            </div>
            <div className="bg-white/20 px-4 py-2 rounded-full">
              <span className="text-sm">⚡ 48-hour crisis response</span>
            </div>
            <div className="bg-white/20 px-4 py-2 rounded-full">
              <span className="text-sm">🎯 Industry-specific expertise</span>
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
              { id: 'services', label: 'Services' },
              { id: 'packages', label: 'Packages' },
              { id: 'case-studies', label: 'Case Studies' },
              { id: 'contact', label: 'Get Started' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 px-2 border-b-2 font-medium text-sm ${
                  activeTab === tab.id
                    ? 'border-blue-500 text-blue-600'
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
                <h2 className="text-3xl font-bold mb-4">Why Digital PR Matters</h2>
                <p className="text-gray-600 mb-6">
                  In today's digital landscape, traditional PR has evolved. Digital PR combines the credibility of traditional media with the reach and targeting capabilities of digital marketing.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Build brand credibility through earned media coverage</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Improve SEO through high-quality backlinks</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Manage and protect your online reputation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Reach target audiences through trusted publications</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-blue-100 to-purple-100 p-8 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Our Digital PR Process</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center mr-3">1</div>
                    <span>Strategy Development</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center mr-3">2</div>
                    <span>Content Creation</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center mr-3">3</div>
                    <span>Media Outreach</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center mr-3">4</div>
                    <span>Monitoring & Reporting</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'services' && (
          <div>
            <h2 className="text-3xl font-bold mb-8 text-center">Our Digital PR Services</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'packages' && (
          <div>
            <h2 className="text-3xl font-bold mb-8 text-center">Choose Your Digital PR Package</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {packages.map((pkg, index) => (
                <div key={index} className={`bg-white rounded-lg shadow-md p-6 relative ${pkg.popular ? 'border-2 border-blue-500' : ''}`}>
                  {pkg.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm">Most Popular</span>
                    </div>
                  )}
                  <h3 className="text-xl font-bold mb-2">{pkg.name}</h3>
                  <div className="text-2xl font-bold text-blue-600 mb-4">{pkg.price}</div>
                  <ul className="space-y-2 mb-6">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button className={`w-full py-2 px-4 rounded-lg font-medium ${
                    pkg.popular 
                      ? 'bg-blue-500 text-white hover:bg-blue-600' 
                      : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                  }`}>
                    Get Started
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'case-studies' && (
          <div>
            <h2 className="text-3xl font-bold mb-8 text-center">Success Stories</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {caseStudies.map((study, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-bold mb-2">{study.client}</h3>
                  <div className="mb-4">
                    <p className="text-sm text-gray-600 mb-1">Challenge:</p>
                    <p className="text-sm">{study.challenge}</p>
                  </div>
                  <div className="mb-4">
                    <p className="text-sm text-gray-600 mb-1">Result:</p>
                    <p className="text-sm font-medium text-green-600">{study.result}</p>
                  </div>
                  <div className="bg-blue-50 p-3 rounded">
                    <p className="text-sm font-medium">{study.metrics}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'contact' && (
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Get Started with Digital PR</h2>
            <div className="bg-white rounded-lg shadow-md p-8">
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Company</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Budget Range</label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select budget range</option>
                    <option value="25k-50k">₹25,000 - ₹50,000</option>
                    <option value="50k-100k">₹50,000 - ₹1,00,000</option>
                    <option value="100k+">₹1,00,000+</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">PR Goals</label>
                  <textarea
                    name="goals"
                    value={formData.goals}
                    onChange={handleInputChange}
                    rows="4"
                    placeholder="Tell us about your PR goals and challenges..."
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  ></textarea>
                </div>
                <button
                  onClick={handleSubmit}
                  className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 font-medium"
                >
                  Request PR Strategy Consultation
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DigitalPR;