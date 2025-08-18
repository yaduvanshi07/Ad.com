// server.js - Main server file for BookMyAd API
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
require('dotenv').config();

// Import routes (you'll need to create these route files)
// const newspaperRoutes = require('./routes/newspaperAdvertising');
// const digitalMarketingRoutes = require('./routes/digitalMarketing');
// const radioRoutes = require('./routes/radioAdvertising');
// const cinemaRoutes = require('./routes/cinemaAdvertising');
// const televisionRoutes = require('./routes/televisionAdvertising');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors({
  origin: ['http://localhost:3000', 'http://127.0.0.1:3000', 'http://localhost:5000'],
  credentials: true
}));

app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));
app.use(morgan('combined'));

// Legacy bodyParser middleware for backward compatibility
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Sample data for the BookMyAd website
const servicesData = [
  {
    id: 1,
    name: "Newspaper Advertising",
    description: "Book your Newspaper display ads in any regional or National Newspaper, Instantly!",
    icon: "📰",
    slug: "newspaper-advertising",
    features: [
      "Display Advertisements",
      "Classified Advertisements", 
      "Matrimonial Ads",
      "Obituary/Remembrance",
      "Tender Notice",
      "Name Change/Lost & Found",
      "Property Ads",
      "Recruitment Ads"
    ],
    benefits: [
      "Instant booking",
      "Lowest prices guaranteed",
      "Wide newspaper network",
      "Professional ad design",
      "Quick publication"
    ]
  },
  {
    id: 2,
    name: "Digital Marketing",
    description: "Complete digital marketing solutions to boost your online presence",
    icon: "💻",
    slug: "digital-marketing",
    features: [
      "Social Media Marketing",
      "Search Engine Optimization (SEO)",
      "Pay Per Click (PPC)",
      "Content Marketing",
      "Email Marketing",
      "Influencer Marketing",
      "Website Development",
      "Online Reputation Management"
    ],
    benefits: [
      "Targeted audience reach",
      "Measurable results",
      "Cost-effective campaigns",
      "24/7 online presence",
      "Data-driven strategies"
    ]
  },
  {
    id: 3,
    name: "Radio Advertising",
    description: "Reach millions through strategic radio campaigns",
    icon: "📻",
    slug: "radio-advertising",
    features: [
      "Prime Time Slots",
      "RJ Mentions & Endorsements",
      "Program Sponsorship",
      "Custom Jingles",
      "Live Reads",
      "Contest Sponsorship",
      "Traffic Updates",
      "News Sponsorship"
    ],
    benefits: [
      "High frequency reach",
      "Local market penetration",
      "Audio branding",
      "Cost-effective medium",
      "Emotional connection"
    ]
  },
  {
    id: 4,
    name: "Cinema Advertising",
    description: "Advertise in cinema halls nationwide with maximum impact",
    icon: "🎬",
    slug: "cinema-advertising",
    features: [
      "On-Screen Video Ads",
      "Lobby Display",
      "Slide Advertisements",
      "Standee Placement",
      "Sampling Activities",
      "Branded Popcorn",
      "Ticket Jacket Ads",
      "Washroom Branding"
    ],
    benefits: [
      "Captive audience",
      "High impact medium",
      "Premium demographics",
      "Uncluttered environment",
      "Enhanced recall value"
    ]
  },
  {
    id: 5,
    name: "Television Advertising",
    description: "Broadcast your message to millions across India",
    icon: "📺",
    slug: "television-advertising",
    features: [
      "National TV Campaigns",
      "Regional TV Advertising",
      "Program Sponsorship",
      "Sports Sponsorship",
      "News Channel Ads",
      "Prime Time Slots",
      "Break Bumpers",
      "Channel Partnerships"
    ],
    benefits: [
      "Mass reach",
      "Audio-visual impact",
      "Brand building",
      "Demographic targeting",
      "High credibility"
    ]
  }
];

const dealsData = [
  {
    id: 1,
    title: "Hire Dedicated Media Planner",
    subtitle: "for your business Today!",
    price: "@ just 499/-*",
    originalPrice: "2000/-",
    discount: "75% OFF",
    image: "/api/placeholder/400/250",
    category: "media-planning",
    features: ["Personalized strategy", "Market analysis", "Campaign optimization"],
    cta: "Hire Now",
    popular: true
  },
  {
    id: 2,
    title: "Let the whole city",
    subtitle: "hear about your brand",
    price: "Go on air only at Rs. 9999*",
    originalPrice: "25000/-",
    discount: "60% OFF",
    image: "/api/placeholder/400/250",
    category: "radio",
    features: ["Prime time slots", "Professional recording", "Multiple stations"],
    cta: "Book Now",
    popular: false
  },
  {
    id: 3,
    title: "Cinema Advertising Special",
    subtitle: "Lights, Camera, Advertise!",
    price: "Starting at Rs. 11000/-*",
    originalPrice: "18000/-",
    discount: "40% OFF",
    image: "/api/placeholder/400/250",
    category: "cinema",
    features: ["On-screen ads", "Lobby displays", "Premium halls"],
    cta: "Book Now",
    popular: false
  },
  {
    id: 4,
    title: "Newspaper Ad Package",
    subtitle: "Get published in 48 hours!",
    price: "Use code WINTER50",
    originalPrice: "5000/-",
    discount: "50% OFF",
    image: "/api/placeholder/400/250",
    category: "newspaper",
    features: ["Multiple newspapers", "Professional design", "Quick approval"],
    cta: "Book Now",
    popular: true
  }
];

const statsData = {
  customers: "50000+",
  teamMembers: "200+",
  advertisingChoices: "1000+",
  vendorCollaborations: "5000+",
  campaigns: "25000+",
  specializedAreas: "15+",
  yearsOfExperience: "10+",
  citiesCovered: "500+",
  satisfactionRate: "98%"
};

const caseStudiesData = [
  {
    id: 1,
    title: "CHEP India - Sustainability Campaign",
    description: "Comprehensive awareness campaign about sustainable practices and unauthorized equipment usage across multiple channels",
    industry: "Logistics & Supply Chain",
    client: "CHEP India",
    duration: "6 months",
    channels: ["Newspaper", "Digital", "Radio"],
    results: {
      brandAwareness: "40% increase",
      reach: "2.5 million",
      engagement: "15% CTR"
    },
    image: "/api/placeholder/300/200",
    testimonial: "BookMyAd delivered exceptional results for our sustainability campaign."
  },
  {
    id: 2,
    title: "Binomo - Pan India Download Campaign",
    description: "Multi-channel brand awareness and app download campaign targeting tier-1 and tier-2 cities",
    industry: "Fintech",
    client: "Binomo",
    duration: "3 months",
    channels: ["Digital", "Cinema", "Television"],
    results: {
      appDownloads: "300% increase",
      reach: "5 million",
      costPerInstall: "Reduced by 45%"
    },
    image: "/api/placeholder/300/200",
    testimonial: "Outstanding campaign execution with measurable results."
  },
  {
    id: 3,
    title: "Mercedes Benz - Digital Presence Enhancement",
    description: "Luxury brand positioning and targeted digital campaigns for specific demographics",
    industry: "Automotive - Luxury",
    client: "Mercedes Benz India",
    duration: "12 months",
    channels: ["Digital", "Print", "Cinema"],
    results: {
      onlineEngagement: "250% increase",
      leadGeneration: "180% boost",
      brandRecall: "65% improvement"
    },
    image: "/api/placeholder/300/200",
    testimonial: "Exceptional understanding of luxury automotive market."
  },
  {
    id: 4,
    title: "Skoda Auto India - Lead Generation Campaign",
    description: "Integrated marketing campaign to enhance visibility and generate quality leads",
    industry: "Automotive",
    client: "Skoda Auto India",
    duration: "4 months",
    channels: ["Digital", "Newspaper", "Radio"],
    results: {
      qualifiedLeads: "500+ generated",
      testDrives: "35% increase",
      salesConversion: "25% improvement"
    },
    image: "/api/placeholder/300/200",
    testimonial: "Professional approach with excellent ROI on ad spend."
  },
  {
    id: 5,
    title: "Local Restaurant Chain Expansion",
    description: "Hyperlocal marketing campaign for restaurant chain expansion",
    industry: "Food & Beverage",
    client: "Punjab Grill",
    duration: "8 months",
    channels: ["Digital", "Print", "Radio"],
    results: {
      footfalls: "60% increase",
      brandAwareness: "75% in new markets",
      revenueGrowth: "45% YoY"
    },
    image: "/api/placeholder/300/200",
    testimonial: "Perfect execution of our expansion strategy."
  }
];

const testimonialsData = [
  {
    id: 1,
    name: "Rajesh Sharma",
    company: "Tech Startup",
    designation: "Marketing Head",
    message: "BookMyAd transformed our advertising strategy. The results exceeded our expectations!",
    rating: 5,
    image: "/api/placeholder/100/100"
  },
  {
    id: 2,
    name: "Priya Patel",
    company: "Fashion Retail",
    designation: "Brand Manager",
    message: "Professional service and excellent ROI. Highly recommended for all advertising needs.",
    rating: 5,
    image: "/api/placeholder/100/100"
  },
  {
    id: 3,
    name: "Amit Kumar",
    company: "Real Estate",
    designation: "Sales Director",
    message: "Their newspaper advertising solutions helped us reach our target audience effectively.",
    rating: 4,
    image: "/api/placeholder/100/100"
  }
];

const blogData = [
  {
    id: 1,
    title: "The Future of Newspaper Advertising in Digital Age",
    excerpt: "Despite digital transformation, newspaper advertising remains a powerful medium...",
    author: "BookMyAd Team",
    date: "2024-08-10",
    category: "Advertising Trends",
    image: "/api/placeholder/400/250",
    readTime: "5 min read"
  },
  {
    id: 2,
    title: "Cinema Advertising: Capturing Captive Audiences",
    excerpt: "Learn how cinema advertising can provide unmatched brand recall and engagement...",
    author: "Marketing Expert",
    date: "2024-08-08",
    category: "Cinema Advertising",
    image: "/api/placeholder/400/250",
    readTime: "7 min read"
  },
  {
    id: 3,
    title: "Digital Marketing ROI: Measuring Success",
    excerpt: "Key metrics and strategies to measure the return on investment for your digital campaigns...",
    author: "Digital Strategist",
    date: "2024-08-05",
    category: "Digital Marketing",
    image: "/api/placeholder/400/250",
    readTime: "6 min read"
  }
];

// Newspaper advertising specific data
const cities = [
  { id: 1, name: "Mumbai", state: "Maharashtra", region: "West" },
  { id: 2, name: "Delhi", state: "Delhi", region: "North" },
  { id: 3, name: "Bangalore", state: "Karnataka", region: "South" },
  { id: 4, name: "Chennai", state: "Tamil Nadu", region: "South" },
  { id: 5, name: "Kolkata", state: "West Bengal", region: "East" },
  { id: 6, name: "Hyderabad", state: "Telangana", region: "South" },
  { id: 7, name: "Pune", state: "Maharashtra", region: "West" },
  { id: 8, name: "Ahmedabad", state: "Gujarat", region: "West" },
  { id: 9, name: "Jaipur", state: "Rajasthan", region: "North" },
  { id: 10, name: "Lucknow", state: "Uttar Pradesh", region: "North" }
];

const newspapers = [
  { id: 1, name: "Times of India", city: "Mumbai", language: "English", circulation: "3.2M", type: "National" },
  { id: 2, name: "Hindustan Times", city: "Delhi", language: "English", circulation: "1.6M", type: "National" },
  { id: 3, name: "The Hindu", city: "Chennai", language: "English", circulation: "1.4M", type: "National" },
  { id: 4, name: "Economic Times", city: "Mumbai", language: "English", circulation: "0.8M", type: "Business" },
  { id: 5, name: "Dainik Jagran", city: "Delhi", language: "Hindi", circulation: "2.8M", type: "National" },
  { id: 6, name: "Maharashtra Times", city: "Mumbai", language: "Marathi", circulation: "1.2M", type: "Regional" },
  { id: 7, name: "Deccan Chronicle", city: "Hyderabad", language: "English", circulation: "0.9M", type: "Regional" },
  { id: 8, name: "Indian Express", city: "Mumbai", language: "English", circulation: "1.1M", type: "National" },
  { id: 9, name: "DNA", city: "Mumbai", language: "English", circulation: "0.5M", type: "Regional" },
  { id: 10, name: "Mid-Day", city: "Mumbai", language: "English", circulation: "0.6M", type: "Regional" }
];

const categories = [
  { id: 1, name: "Property", description: "Real estate advertisements", icon: "🏠" },
  { id: 2, name: "Matrimonial", description: "Marriage and relationship ads", icon: "💍" },
  { id: 3, name: "Jobs", description: "Employment opportunities", icon: "💼" },
  { id: 4, name: "Business", description: "Business promotions and services", icon: "🏢" },
  { id: 5, name: "Education", description: "Educational institutions and courses", icon: "🎓" },
  { id: 6, name: "Automobiles", description: "Vehicle sales and services", icon: "🚗" },
  { id: 7, name: "Personal", description: "Personal announcements", icon: "👤" },
  { id: 8, name: "Lost & Found", description: "Missing items and persons", icon: "🔍" }
];

// Routes - Uncomment when route files are created
// app.use('/api/newspaperadvertising', newspaperRoutes);
// app.use('/api/digitalmarketing', digitalMarketingRoutes);
// app.use('/api/radioadvertising', radioRoutes);
// app.use('/api/cinemaadvertising', cinemaRoutes);
// app.use('/api/televisionadvertising', televisionRoutes);

// ============================================
// NEWSPAPER ADVERTISING ROUTES
// ============================================

// Get all cities
app.get('/api/newspaperadvertising/cities', (req, res) => {
  try {
    res.json({
      success: true,
      data: cities,
      count: cities.length
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to fetch cities',
      error: error.message
    });
  }
});

// Get newspapers by city or all newspapers
app.get('/api/newspaperadvertising/newspapers', (req, res) => {
  try {
    const { city, language, type } = req.query;
    let filteredNewspapers = newspapers;
    
    if (city) {
      filteredNewspapers = filteredNewspapers.filter(n => 
        n.city.toLowerCase().includes(city.toLowerCase())
      );
    }
    
    if (language) {
      filteredNewspapers = filteredNewspapers.filter(n => 
        n.language.toLowerCase() === language.toLowerCase()
      );
    }
    
    if (type) {
      filteredNewspapers = filteredNewspapers.filter(n => 
        n.type.toLowerCase() === type.toLowerCase()
      );
    }
    
    res.json({
      success: true,
      data: filteredNewspapers,
      count: filteredNewspapers.length,
      filters: { city, language, type }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to fetch newspapers',
      error: error.message
    });
  }
});

// Get all categories
app.get('/api/newspaperadvertising/categories', (req, res) => {
  try {
    res.json({
      success: true,
      data: categories,
      count: categories.length
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to fetch categories',
      error: error.message
    });
  }
});

// Search for newspaper advertising options
app.post('/api/newspaperadvertising/search', (req, res) => {
  try {
    const { category, city, newspaper, adType } = req.body;
    
    // Validate required fields
    if (!category || !city) {
      return res.status(400).json({
        success: false,
        message: 'Category and city are required fields'
      });
    }
    
    // Find matching city
    const selectedCity = cities.find(c => 
      c.name.toLowerCase() === city.toLowerCase() || c.id == city
    );
    
    if (!selectedCity) {
      return res.status(404).json({
        success: false,
        message: 'City not found'
      });
    }
    
    // Find matching newspapers in the city
    const availableNewspapers = newspapers.filter(n => 
      n.city.toLowerCase() === selectedCity.name.toLowerCase()
    );
    
    // Find matching category
    const selectedCategory = categories.find(c => 
      c.name.toLowerCase() === category.toLowerCase() || c.id == category
    );
    
    if (!selectedCategory) {
      return res.status(404).json({
        success: false,
        message: 'Category not found'
      });
    }
    
    // Mock pricing based on ad type
    const getPricing = (type) => {
      const pricingMap = {
        'text-classified': { perWord: 5, minimum: 100, unit: 'per word' },
        'display-classified': { perSqCm: 150, minimum: 500, unit: 'per sq cm' },
        'display-ad': { perSqCm: 300, minimum: 2000, unit: 'per sq cm' }
      };
      return pricingMap[type] || pricingMap['text-classified'];
    };
    
    const searchResults = {
      category: selectedCategory,
      city: selectedCity,
      newspapers: availableNewspapers,
      adType: adType || 'text-classified',
      pricing: getPricing(adType),
      available: availableNewspapers.length > 0,
      searchId: `search_${Date.now()}`,
      validUntil: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString()
    };
    
    console.log('Search request processed:', { category, city, newspaper, adType });
    
    res.json({
      success: true,
      data: searchResults,
      message: `Found ${availableNewspapers.length} newspapers in ${selectedCity.name} for ${selectedCategory.name} category`
    });
  } catch (error) {
    console.error('Search error:', error);
    res.status(500).json({
      success: false,
      message: 'Search failed',
      error: error.message
    });
  }
});

// Get pricing for specific ad type
app.get('/api/newspaperadvertising/pricing/:adType', (req, res) => {
  try {
    const { adType } = req.params;
    const { newspaper, city } = req.query;
    
    const pricingData = {
      'text-classified': {
        type: 'Text Classified Ad',
        pricing: { perWord: 5, minimum: 100, currency: 'INR' },
        description: 'Simple text-based classified advertisements',
        features: ['Basic text formatting', 'Contact details included', 'Quick approval'],
        estimatedTime: '24-48 hours'
      },
      'display-classified': {
        type: 'Display Classified Ad',
        pricing: { perSqCm: 150, minimum: 500, currency: 'INR' },
        description: 'Enhanced classified ads with borders and formatting',
        features: ['Enhanced formatting', 'Border options', 'Logo inclusion', 'Better visibility'],
        estimatedTime: '48-72 hours'
      },
      'display-ad': {
        type: 'Display Advertisement',
        pricing: { perSqCm: 300, minimum: 2000, currency: 'INR' },
        description: 'Full display advertisements with images and graphics',
        features: ['Full color printing', 'Custom design', 'Premium placement', 'High visibility'],
        estimatedTime: '72-96 hours'
      }
    };
    
    const pricing = pricingData[adType];
    
    if (!pricing) {
      return res.status(404).json({
        success: false,
        message: 'Pricing information not found for this ad type'
      });
    }
    
    // Add dynamic pricing based on newspaper and city (mock logic)
    if (newspaper || city) {
      pricing.dynamicPricing = {
        newspaper: newspaper || 'Not specified',
        city: city || 'Not specified',
        multiplier: 1.0 // In real scenario, this would vary by newspaper/city
      };
    }
    
    res.json({
      success: true,
      data: pricing,
      adType: adType
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to fetch pricing information',
      error: error.message
    });
  }
});

// Validate ad content and get cost estimate
app.post('/api/newspaperadvertising/validate', (req, res) => {
  try {
    const { adContent, adType, newspaper, category, city } = req.body;
    
    if (!adContent || !adType) {
      return res.status(400).json({
        success: false,
        message: 'Ad content and ad type are required'
      });
    }
    
    // Basic validation
    const wordCount = adContent.trim().split(/\s+/).length;
    const charCount = adContent.length;
    
    // Calculate estimated cost
    let estimatedCost = 0;
    const warnings = [];
    const suggestions = [];
    
    switch (adType) {
      case 'text-classified':
        estimatedCost = Math.max(wordCount * 5, 100);
        if (wordCount < 10) {
          suggestions.push('Consider adding more descriptive words for better visibility');
        }
        if (wordCount > 50) {
          warnings.push('Long ads may be expensive. Consider shortening for cost optimization');
        }
        break;
        
      case 'display-classified':
        // Assuming 10 sq cm for basic display classified
        estimatedCost = Math.max(10 * 150, 500);
        suggestions.push('Display classified ads attract more attention than text ads');
        break;
        
      case 'display-ad':
        // Assuming 20 sq cm for basic display ad
        estimatedCost = Math.max(20 * 300, 2000);
        suggestions.push('Consider professional design services for maximum impact');
        break;
        
      default:
        estimatedCost = 100;
    }
    
    // Content validation
    if (!adContent.includes('contact') && !adContent.includes('phone') && !adContent.includes('email')) {
      suggestions.push('Include contact information for better response');
    }
    
    if (adContent.length < 20) {
      warnings.push('Very short ad content may not provide enough information');
    }
    
    const validation = {
      isValid: true,
      wordCount,
      charCount,
      estimatedCost,
      adType,
      category: category || 'Not specified',
      city: city || 'Not specified',
      newspaper: newspaper || 'Not specified',
      warnings,
      suggestions,
      breakdown: {
        baseCost: estimatedCost * 0.8,
        taxes: estimatedCost * 0.18,
        serviceFee: estimatedCost * 0.02
      },
      validationId: `val_${Date.now()}`
    };
    
    console.log('Validation request processed:', { adType, wordCount, estimatedCost });
    
    res.json({
      success: true,
      data: validation,
      message: 'Ad content validated successfully'
    });
  } catch (error) {
    console.error('Validation error:', error);
    res.status(500).json({
      success: false,
      message: 'Validation failed',
      error: error.message
    });
  }
});

// Legacy API routes (maintaining backward compatibility)
app.get('/api/services', (req, res) => {
  res.json({
    success: true,
    data: servicesData
  });
});

app.get('/api/services/:slug', (req, res) => {
  const service = servicesData.find(s => s.slug === req.params.slug);
  if (!service) {
    return res.status(404).json({
      success: false,
      message: 'Service not found'
    });
  }
  res.json({
    success: true,
    data: service
  });
});

app.get('/api/deals', (req, res) => {
  res.json({
    success: true,
    data: dealsData
  });
});

app.get('/api/stats', (req, res) => {
  res.json({
    success: true,
    data: statsData
  });
});

app.get('/api/case-studies', (req, res) => {
  res.json({
    success: true,
    data: caseStudiesData
  });
});

app.get('/api/testimonials', (req, res) => {
  res.json({
    success: true,
    data: testimonialsData
  });
});

app.get('/api/blog', (req, res) => {
  res.json({
    success: true,
    data: blogData
  });
});

// Contact form submission
app.post('/api/contact', (req, res) => {
  const { name, email, phone, message, service, company } = req.body;
  
  // Validation
  if (!name || !email || !phone) {
    return res.status(400).json({
      success: false,
      message: 'Name, email, and phone are required fields'
    });
  }
  
  // Here you would typically save to database
  console.log('Contact form submission:', { name, email, phone, message, service, company });
  
  res.json({ 
    success: true, 
    message: 'Thank you for your inquiry! Our team will contact you within 2 hours during business hours.' 
  });
});

// Quote request
app.post('/api/quote', (req, res) => {
  const { service, budget, timeline, requirements, contactInfo } = req.body;
  
  if (!service || !contactInfo?.email || !contactInfo?.phone) {
    return res.status(400).json({
      success: false,
      message: 'Service selection and contact information are required'
    });
  }
  
  console.log('Quote request:', { service, budget, timeline, requirements, contactInfo });
  
  res.json({ 
    success: true, 
    message: 'Quote request received! Our media planners will contact you within 24 hours with a customized proposal.' 
  });
});

// Book Now request
app.post('/api/book-now', (req, res) => {
  const { service, adType, budget, timeline, contactInfo, requirements } = req.body;
  
  if (!service || !contactInfo?.email || !contactInfo?.phone) {
    return res.status(400).json({
      success: false,
      message: 'Service selection and contact information are required'
    });
  }
  
  console.log('Book Now request:', { service, adType, budget, timeline, contactInfo, requirements });
  
  res.json({ 
    success: true, 
    message: 'Booking request received! Our team will call you within 30 minutes to discuss your requirements.' 
  });
});

// Newsletter subscription
app.post('/api/newsletter', (req, res) => {
  const { email, name } = req.body;
  
  if (!email) {
    return res.status(400).json({
      success: false,
      message: 'Email is required'
    });
  }
  
  console.log('Newsletter subscription:', { email, name });
  
  res.json({ 
    success: true, 
    message: 'Successfully subscribed to our newsletter! You\'ll receive the latest advertising tips and offers.' 
  });
});

// Callback request
app.post('/api/callback', (req, res) => {
  const { phone, name, preferredTime } = req.body;
  
  if (!phone) {
    return res.status(400).json({
      success: false,
      message: 'Phone number is required'
    });
  }
  
  console.log('Callback request:', { phone, name, preferredTime });
  
  res.json({ 
    success: true, 
    message: 'Callback request received! We will call you back shortly.' 
  });
});

// Search functionality
app.get('/api/search', (req, res) => {
  const { query } = req.query;
  
  if (!query) {
    return res.status(400).json({
      success: false,
      message: 'Search query is required'
    });
  }
  
  const searchResults = [];
  
  // Search in services
  servicesData.forEach(service => {
    if (service.name.toLowerCase().includes(query.toLowerCase()) || 
        service.description.toLowerCase().includes(query.toLowerCase())) {
      searchResults.push({
        type: 'service',
        ...service
      });
    }
  });
  
  // Search in case studies
  caseStudiesData.forEach(study => {
    if (study.title.toLowerCase().includes(query.toLowerCase()) || 
        study.description.toLowerCase().includes(query.toLowerCase())) {
      searchResults.push({
        type: 'case-study',
        ...study
      });
    }
  });
  
  res.json({
    success: true,
    data: searchResults,
    query: query
  });
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    memory: process.memoryUsage(),
    service: 'BookMyAd API'
  });
});

// Legacy health check
app.get('/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    timestamp: new Date().toISOString(),
    service: 'BookMyAd API'
  });
});

// Root endpoint
app.get('/api', (req, res) => {
  res.json({ 
    message: 'BookMyAd Backend API Server',
    version: '2.1.0',
    endpoints: {
      // Main API endpoints
      services: '/api/services',
      deals: '/api/deals',
      stats: '/api/stats',
      caseStudies: '/api/case-studies',
      testimonials: '/api/testimonials',
      blog: '/api/blog',
      contact: 'POST /api/contact',
      quote: 'POST /api/quote',
      bookNow: 'POST /api/book-now',
      newsletter: 'POST /api/newsletter',
      callback: 'POST /api/callback',
      search: '/api/search',
      health: '/api/health',
      
      // Specialized service endpoints (when route files are created)
      newspaper: '/api/newspaperadvertising',
      digitalMarketing: '/api/digitalmarketing',
      radio: '/api/radioadvertising',
      cinema: '/api/cinemaadvertising',
      television: '/api/televisionadvertising'
    }
  });
});

// Legacy root endpoint
app.get('/', (req, res) => {
  res.json({ 
    message: 'BookMyAd Backend API is running!',
    version: '2.1.0',
    redirectTo: '/api'
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Error occurred:', err.stack);
  res.status(500).json({
    success: false,
    error: 'Something went wrong on our end!',
    message: process.env.NODE_ENV === 'development' ? err.message : 'Internal server error'
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    error: 'Not Found',
    message: `API endpoint ${req.originalUrl} not found`
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 BookMyAd Server running on port ${PORT}`);
  console.log(`📊 Health check: http://localhost:${PORT}/api/health`);
  console.log(`📰 Main API: http://localhost:${PORT}/api`);
  console.log(`🌐 Environment: ${process.env.NODE_ENV || 'development'}`);
  console.log(`📱 CORS enabled for: http://localhost:3000, http://127.0.0.1:3000`);
});

module.exports = app;