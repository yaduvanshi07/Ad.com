import React, { useState } from 'react';

const InfluencerMarketing = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    budget: '',
    campaign: '',
    platform: '',
    audience: '',
    goals: ''
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
    alert('Thank you! Our influencer marketing specialists will contact you with influencer recommendations and campaign strategy within 24 hours.');
    setFormData({ name: '', email: '', company: '', budget: '', campaign: '', platform: '', audience: '', goals: '' });
  };

  const influencerTiers = [
    {
      id: 'nano',
      category: 'nano',
      title: 'Nano Influencers',
      followers: '1K - 10K followers',
      icon: '🌱',
      description: 'Highly engaged micro-communities with authentic connections',
      engagement: '8-12% engagement rate',
      costRange: '₹2,000 - ₹8,000 per post',
      bestFor: 'Local businesses, niche products, authentic reviews',
      platforms: ['Instagram', 'YouTube', 'TikTok'],
      characteristics: [
        'High engagement rates',
        'Authentic content creation',
        'Niche expertise',
        'Cost-effective campaigns',
        'Local market influence'
      ]
    },
    {
      id: 'micro',
      category: 'micro',
      title: 'Micro Influencers',
      followers: '10K - 100K followers',
      icon: '📱',
      description: 'Perfect balance of reach and engagement for targeted campaigns',
      engagement: '5-8% engagement rate',
      costRange: '₹8,000 - ₹50,000 per post',
      bestFor: 'Product launches, brand awareness, targeted demographics',
      platforms: ['Instagram', 'YouTube', 'LinkedIn', 'TikTok'],
      characteristics: [
        'Strong community trust',
        'Professional content quality',
        'Category expertise',
        'Measurable ROI',
        'Multi-platform presence'
      ]
    },
    {
      id: 'macro',
      category: 'macro',
      title: 'Macro Influencers',
      followers: '100K - 1M followers',
      icon: '🎬',
      description: 'Significant reach with maintained authenticity and engagement',
      engagement: '3-5% engagement rate',
      costRange: '₹50,000 - ₹3,00,000 per post',
      bestFor: 'Brand campaigns, product showcases, mass awareness',
      platforms: ['Instagram', 'YouTube', 'Twitter', 'LinkedIn'],
      characteristics: [
        'Wide audience reach',
        'Professional production',
        'Brand collaboration experience',
        'Cross-platform influence',
        'Trend-setting capability'
      ]
    },
    {
      id: 'mega',
      category: 'mega',
      title: 'Mega Influencers',
      followers: '1M+ followers',
      icon: '⭐',
      description: 'Celebrity-level reach for maximum brand visibility and impact',
      engagement: '1-3% engagement rate',
      costRange: '₹3,00,000 - ₹25,00,000 per post',
      bestFor: 'Major campaigns, celebrity endorsements, viral content',
      platforms: ['Instagram', 'YouTube', 'Twitter', 'Facebook'],
      characteristics: [
        'Massive audience reach',
        'Celebrity status',
        'Viral potential',
        'Media coverage amplification',
        'Premium brand associations'
      ]
    }
  ];

  const platforms = [
    {
      name: 'Instagram',
      icon: '📸',
      demographics: 'Gen Z & Millennials (18-34)',
      contentTypes: ['Posts', 'Stories', 'Reels', 'IGTV'],
      strengths: ['Visual storytelling', 'High engagement', 'Shopping integration'],
      avgCost: '₹5,000 - ₹2,00,000 per post'
    },
    {
      name: 'YouTube',
      icon: '📺',
      demographics: 'All age groups (16-55)',
      contentTypes: ['Long-form videos', 'Shorts', 'Live streams', 'Reviews'],
      strengths: ['In-depth content', 'Educational value', 'Long-term impact'],
      avgCost: '₹10,000 - ₹5,00,000 per video'
    },
    {
      name: 'LinkedIn',
      icon: '💼',
      demographics: 'Professionals (25-55)',
      contentTypes: ['Articles', 'Posts', 'Video content', 'Live events'],
      strengths: ['B2B reach', 'Thought leadership', 'Professional credibility'],
      avgCost: '₹8,000 - ₹1,50,000 per post'
    },
    {
      name: 'Twitter',
      icon: '🐦',
      demographics: 'News consumers (20-50)',
      contentTypes: ['Tweets', 'Threads', 'Spaces', 'Video tweets'],
      strengths: ['Real-time engagement', 'Trending topics', 'Viral potential'],
      avgCost: '₹3,000 - ₹75,000 per campaign'
    },
    {
      name: 'TikTok',
      icon: '🎵',
      demographics: 'Gen Z (16-28)',
      contentTypes: ['Short videos', 'Live streams', 'Duets', 'Challenges'],
      strengths: ['Viral content', 'Creative formats', 'Youth engagement'],
      avgCost: '₹4,000 - ₹1,00,000 per video'
    },
    {
      name: 'Facebook',
      icon: '👥',
      demographics: 'Millennials & Gen X (25-55)',
      contentTypes: ['Posts', 'Stories', 'Live videos', 'Groups'],
      strengths: ['Community building', 'Event promotion', 'Older demographics'],
      avgCost: '₹5,000 - ₹1,20,000 per post'
    }
  ];

  const services = [
    {
      title: 'Influencer Discovery',
      icon: '🔍',
      description: 'AI-powered matching to find the perfect influencers for your brand',
      features: ['Advanced filtering', 'Audience analysis', 'Engagement verification', 'Fraud detection']
    },
    {
      title: 'Campaign Strategy',
      icon: '📋',
      description: 'Comprehensive campaign planning and content strategy development',
      features: ['Goal setting', 'Content planning', 'Timeline creation', 'KPI definition']
    },
    {
      title: 'Content Creation',
      icon: '🎨',
      description: 'Professional content production and creative direction',
      features: ['Creative briefs', 'Content approval', 'Brand guidelines', 'Quality control']
    },
    {
      title: 'Campaign Management',
      icon: '⚙️',
      description: 'End-to-end campaign execution and influencer coordination',
      features: ['Contract management', 'Timeline tracking', 'Communication hub', 'Performance monitoring']
    },
    {
      title: 'Performance Analytics',
      icon: '📊',
      description: 'Detailed reporting and ROI measurement across all campaigns',
      features: ['Real-time tracking', 'Engagement metrics', 'ROI calculation', 'Competitive analysis']
    },
    {
      title: 'Relationship Management',
      icon: '🤝',
      description: 'Long-term influencer relationship building and retention',
      features: ['Influencer database', 'Performance history', 'Collaboration tracking', 'Loyalty programs']
    }
  ];

  const campaignTypes = [
    {
      type: 'Product Launch',
      description: 'Generate buzz and awareness for new product introductions',
      duration: '2-4 weeks',
      influencers: 'Mix of micro and macro influencers',
      deliverables: 'Unboxing videos, reviews, tutorials',
      expectedROI: '300-500% ROI'
    },
    {
      type: 'Brand Awareness',
      description: 'Increase brand visibility and recall across target demographics',
      duration: '4-8 weeks',
      influencers: 'Macro and mega influencers',
      deliverables: 'Brand story content, lifestyle integration',
      expectedROI: '200-400% ROI'
    },
    {
      type: 'Sales Conversion',
      description: 'Drive immediate sales through compelling product showcases',
      duration: '1-3 weeks',
      influencers: 'High-converting micro influencers',
      deliverables: 'Product demos, discount codes, swipe-ups',
      expectedROI: '400-800% ROI'
    },
    {
      type: 'Event Promotion',
      description: 'Build excitement and drive attendance for events',
      duration: '3-6 weeks',
      influencers: 'Local and industry-specific influencers',
      deliverables: 'Event previews, live coverage, FOMO content',
      expectedROI: '250-450% ROI'
    },
    {
      type: 'App Downloads',
      description: 'Increase mobile app installs and user acquisition',
      duration: '2-6 weeks',
      influencers: 'Tech and lifestyle influencers',
      deliverables: 'App tutorials, feature highlights, user journeys',
      expectedROI: '350-600% ROI'
    },
    {
      type: 'Content Marketing',
      description: 'Create valuable content that builds brand authority',
      duration: '6-12 weeks',
      influencers: 'Expert and thought leader influencers',
      deliverables: 'Educational content, how-to guides, industry insights',
      expectedROI: '200-350% ROI'
    }
  ];

  const caseStudies = [
    {
      client: 'Fashion E-commerce',
      campaign: 'Summer Collection Launch',
      influencers: '50 micro + 5 macro influencers',
      platforms: ['Instagram', 'TikTok'],
      duration: '4 weeks',
      budget: '₹15,00,000',
      results: {
        reach: '25M+ impressions',
        engagement: '8.5% average engagement rate',
        conversions: '450% ROI, 12K orders generated',
        brandLift: '65% brand awareness increase'
      }
    },
    {
      client: 'Gaming App',
      campaign: 'User Acquisition Campaign',
      influencers: '100 nano + 20 micro influencers',
      platforms: ['YouTube', 'Instagram', 'TikTok'],
      duration: '6 weeks',
      budget: '₹20,00,000',
      results: {
        reach: '40M+ video views',
        engagement: '12% average engagement rate',
        conversions: '380% ROI, 500K app downloads',
        brandLift: '55% install rate increase'
      }
    },
    {
      client: 'Health & Wellness',
      campaign: 'Product Education Series',
      influencers: '30 micro + 10 macro health influencers',
      platforms: ['YouTube', 'Instagram', 'LinkedIn'],
      duration: '8 weeks',
      budget: '₹25,00,000',
      results: {
        reach: '35M+ content views',
        engagement: '9.2% average engagement rate',
        conversions: '520% ROI, ₹1.3Cr sales generated',
        brandLift: '75% brand trust improvement'
      }
    }
  ];

  const filteredInfluencers = selectedCategory === 'all' 
    ? influencerTiers 
    : influencerTiers.filter(tier => tier.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Influencer Marketing</h1>
          <p className="text-xl mb-8">Connect with millions through authentic influencer partnerships and data-driven campaign strategies</p>
          <div className="flex flex-wrap gap-4">
            <div className="bg-white/20 px-4 py-2 rounded-full">
              <span className="text-sm">🎯 10,000+ verified influencers</span>
            </div>
            <div className="bg-white/20 px-4 py-2 rounded-full">
              <span className="text-sm">📈 Average 400% ROI</span>
            </div>
            <div className="bg-white/20 px-4 py-2 rounded-full">
              <span className="text-sm">🌐 All major platforms</span>
            </div>
            <div className="bg-white/20 px-4 py-2 rounded-full">
              <span className="text-sm">📊 Real-time analytics</span>
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
              { id: 'influencers', label: 'Influencer Tiers' },
              { id: 'platforms', label: 'Platforms' },
              { id: 'campaigns', label: 'Campaign Types' },
              { id: 'case-studies', label: 'Case Studies' },
              { id: 'contact', label: 'Get Started' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 px-2 border-b-2 font-medium text-sm ${
                  activeTab === tab.id
                    ? 'border-indigo-500 text-indigo-600'
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
                <h2 className="text-3xl font-bold mb-4">Why Influencer Marketing?</h2>
                <p className="text-gray-600 mb-6">
                  Influencer marketing leverages the trust and authenticity that influencers have built with their audiences. It's one of the most effective ways to reach your target customers through genuine recommendations and engaging content.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <span className="bg-indigo-100 p-2 rounded-lg mr-3">🎯</span>
                    <span>Precise audience targeting based on demographics and interests</span>
                  </div>
                  <div className="flex items-center">
                    <span className="bg-indigo-100 p-2 rounded-lg mr-3">💝</span>
                    <span>Authentic content that resonates with real audiences</span>
                  </div>
                  <div className="flex items-center">
                    <span className="bg-indigo-100 p-2 rounded-lg mr-3">📈</span>
                    <span>Higher engagement rates than traditional advertising</span>
                  </div>
                  <div className="flex items-center">
                    <span className="bg-indigo-100 p-2 rounded-lg mr-3">💰</span>
                    <span>Measurable ROI with detailed performance analytics</span>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-indigo-100 to-purple-100 p-8 rounded-lg">
                <h3 className="text-xl font-bold mb-6">Our Services</h3>
                <div className="grid grid-cols-1 gap-4">
                  {services.map((service, index) => (
                    <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
                      <div className="flex items-center mb-2">
                        <span className="text-2xl mr-3">{service.icon}</span>
                        <h4 className="font-bold text-sm">{service.title}</h4>
                      </div>
                      <p className="text-xs text-gray-600 mb-2">{service.description}</p>
                      <div className="flex flex-wrap gap-1">
                        {service.features.map((feature, idx) => (
                          <span key={idx} className="text-xs bg-indigo-50 text-indigo-600 px-2 py-1 rounded">
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6 text-center">Influencer Marketing Process</h3>
              <div className="grid md:grid-cols-5 gap-4">
                <div className="text-center">
                  <div className="bg-indigo-500 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">1</div>
                  <h4 className="font-bold mb-2">Strategy Development</h4>
                  <p className="text-sm text-gray-600">Define goals, target audience, and campaign objectives</p>
                </div>
                <div className="text-center">
                  <div className="bg-indigo-500 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">2</div>
                  <h4 className="font-bold mb-2">Influencer Discovery</h4>
                  <p className="text-sm text-gray-600">Identify and vet the perfect influencers for your brand</p>
                </div>
                <div className="text-center">
                  <div className="bg-indigo-500 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">3</div>
                  <h4 className="font-bold mb-2">Campaign Execution</h4>
                  <p className="text-sm text-gray-600">Manage content creation and campaign launch</p>
                </div>
                <div className="text-center">
                  <div className="bg-indigo-500 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">4</div>
                  <h4 className="font-bold mb-2">Performance Tracking</h4>
                  <p className="text-sm text-gray-600">Monitor real-time metrics and engagement</p>
                </div>
                <div className="text-center">
                  <div className="bg-indigo-500 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">5</div>
                  <h4 className="font-bold mb-2">Optimization & Reporting</h4>
                  <p className="text-sm text-gray-600">Analyze results and optimize future campaigns</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'influencers' && (
          <div>
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold">Influencer Tiers & Pricing</h2>
              <div className="flex space-x-2">
                <button
                  onClick={() => setSelectedCategory('all')}
                  className={`px-4 py-2 rounded-lg text-sm font-medium ${
                    selectedCategory === 'all' ? 'bg-indigo-500 text-white' : 'bg-gray-200 text-gray-700'
                  }`}
                >
                  All Tiers
                </button>
                <button
                  onClick={() => setSelectedCategory('nano')}
                  className={`px-4 py-2 rounded-lg text-sm font-medium ${
                    selectedCategory === 'nano' ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-700'
                  }`}
                >
                  Nano
                </button>
                <button
                  onClick={() => setSelectedCategory('micro')}
                  className={`px-4 py-2 rounded-lg text-sm font-medium ${
                    selectedCategory === 'micro' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
                  }`}
                >
                  Micro
                </button>
                <button
                  onClick={() => setSelectedCategory('macro')}
                  className={`px-4 py-2 rounded-lg text-sm font-medium ${
                    selectedCategory === 'macro' ? 'bg-purple-500 text-white' : 'bg-gray-200 text-gray-700'
                  }`}
                >
                  Macro
                </button>
                <button
                  onClick={() => setSelectedCategory('mega')}
                  className={`px-4 py-2 rounded-lg text-sm font-medium ${
                    selectedCategory === 'mega' ? 'bg-pink-500 text-white' : 'bg-gray-200 text-gray-700'
                  }`}
                >
                  Mega
                </button>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {filteredInfluencers.map((tier, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="text-4xl mr-4">{tier.icon}</div>
                    <div>
                      <h3 className="text-xl font-bold">{tier.title}</h3>
                      <p className="text-sm text-gray-600">{tier.followers}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{tier.description}</p>
                  
                  <div className="space-y-3 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Engagement Rate:</span>
                      <span className="font-medium text-green-600">{tier.engagement}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Cost Range:</span>
                      <span className="font-medium">{tier.costRange}</span>
                    </div>
                    <div>
                      <span className="text-sm text-gray-600">Best For: </span>
                      <span className="text-sm font-medium">{tier.bestFor}</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-medium text-sm mb-2">Available Platforms:</h4>
                    <div className="flex flex-wrap gap-1">
                      {tier.platforms.map((platform, idx) => (
                        <span key={idx} className="bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded-full">
                          {platform}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium text-sm mb-2">Key Characteristics:</h4>
                    <ul className="text-xs text-gray-600 space-y-1">
                      {tier.characteristics.map((char, idx) => (
                        <li key={idx}>• {char}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'platforms' && (
          <div>
            <h2 className="text-3xl font-bold mb-8 text-center">Platform Expertise</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {platforms.map((platform, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="text-4xl mr-3">{platform.icon}</div>
                    <h3 className="text-xl font-bold">{platform.name}</h3>
                  </div>
                  
                  <div className="space-y-3 mb-4">
                    <div>
                      <span className="text-sm font-medium text-gray-700">Demographics: </span>
                      <span className="text-sm text-gray-600">{platform.demographics}</span>
                    </div>
                    <div>
                      <span className="text-sm font-medium text-gray-700">Content Types: </span>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {platform.contentTypes.map((type, idx) => (
                          <span key={idx} className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
                            {type}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <span className="text-sm font-medium text-gray-700">Key Strengths: </span>
                      <ul className="text-sm text-gray-600 mt-1">
                        {platform.strengths.map((strength, idx) => (
                          <li key={idx}>• {strength}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-indigo-50 p-3 rounded">
                    <span className="text-sm font-medium text-indigo-600">Average Cost: {platform.avgCost}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'campaigns' && (
          <div>
            <h2 className="text-3xl font-bold mb-8 text-center">Campaign Types & Strategies</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {campaignTypes.map((campaign, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-bold mb-3">{campaign.type}</h3>
                  <p className="text-gray-600 mb-4">{campaign.description}</p>
                  
                  <div className="space-y-2 text-sm mb-4">
                    <div>
                      <span className="font-medium text-gray-700">Duration: </span>
                      <span className="text-gray-600">{campaign.duration}</span>
                    </div>
                    <div>
                      <span className="font-medium text-gray-700">Influencers: </span>
                      <span className="text-gray-600">{campaign.influencers}</span>
                    </div>
                    <div>
                      <span className="font-medium text-gray-700">Deliverables: </span>
                      <span className="text-gray-600">{campaign.deliverables}</span>
                    </div>
                  </div>
                  
                  <div className="bg-green-50 p-3 rounded">
                    <span className="text-sm font-medium text-green-600">{campaign.expectedROI}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'case-studies' && (
          <div>
            <h2 className="text-3xl font-bold mb-8 text-center">Influencer Marketing Success Stories</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {caseStudies.map((study, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-bold mb-2">{study.client}</h3>
                  <h4 className="text-sm font-medium text-indigo-600 mb-3">{study.campaign}</h4>
                  <div className="space-y-2 mb-4 text-sm">
                    <div>
                      <span className="text-gray-600">Influencers: </span>
                      <span className="font-medium">{study.influencers}</span>
                    </div>
                    <div>
                      <span className="text-gray-600">Platforms: </span>
                      <span className="font-medium">{study.platforms.join(', ')}</span>
                    </div>
                    <div>
                      <span className="text-gray-600">Duration: </span>
                      <span className="font-medium">{study.duration}</span>
                    </div>
                    <div>
                      <span className="text-gray-600">Budget: </span>
                      <span className="font-medium">{study.budget}</span>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-4 rounded">
                    <p className="text-sm font-bold text-indigo-600 mb-2">Results:</p>
                    <div className="space-y-1 text-xs">
                      <p>{study.results.reach}</p>
                      <p>{study.results.engagement}</p>
                      <p className="font-medium text-green-600">{study.results.conversions}</p>
                      <p>{study.results.brandLift}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'contact' && (
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Launch Your Influencer Campaign</h2>
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
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
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
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Campaign Budget</label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    >
                      <option value="">Select budget range</option>
                      <option value="100k-300k">₹1,00,000 - ₹3,00,000</option>
                      <option value="300k-500k">₹3,00,000 - ₹5,00,000</option>
                      <option value="500k-1m">₹5,00,000 - ₹10,00,000</option>
                      <option value="1m-2m">₹10,00,000 - ₹20,00,000</option>
                      <option value="2m+">₹20,00,000+</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Campaign Type</label>
                    <select
                      name="campaign"
                      value={formData.campaign}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    >
                      <option value="">Select campaign type</option>
                      <option value="product-launch">Product Launch</option>
                      <option value="brand-awareness">Brand Awareness</option>
                      <option value="sales-conversion">Sales Conversion</option>
                      <option value="event-promotion">Event Promotion</option>
                      <option value="app-downloads">App Downloads</option>
                      <option value="content-marketing">Content Marketing</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Platforms</label>
                  <select
                    name="platform"
                    value={formData.platform}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  >
                    <option value="">Select platforms</option>
                    <option value="instagram">Instagram</option>
                    <option value="youtube">YouTube</option>
                    <option value="linkedin">LinkedIn</option>
                    <option value="tiktok">TikTok</option>
                    <option value="twitter">Twitter</option>
                    <option value="multiple">Multiple Platforms</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Target Audience</label>
                  <textarea
                    name="audience"
                    value={formData.audience}
                    onChange={handleInputChange}
                    rows="3"
                    placeholder="Describe your target audience (age, gender, interests, location)..."
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  ></textarea>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Campaign Goals</label>
                  <textarea
                    name="goals"
                    value={formData.goals}
                    onChange={handleInputChange}
                    rows="3"
                    placeholder="What do you want to achieve with this campaign? (brand awareness, sales, downloads, etc.)"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  ></textarea>
                </div>
                <button
                  onClick={handleSubmit}
                  className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 px-4 rounded-md hover:from-indigo-700 hover:to-purple-700 font-medium"
                >
                  Get Influencer Recommendations & Campaign Strategy
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default InfluencerMarketing;