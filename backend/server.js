const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
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

// Routes
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

// Health check
app.get('/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    timestamp: new Date().toISOString(),
    service: 'BookMyAd API'
  });
});

app.get('/', (req, res) => {
  res.json({ 
    message: 'BookMyAd Backend API is running!',
    version: '2.0.0',
    endpoints: [
      'GET /api/services',
      'GET /api/services/:slug',
      'GET /api/deals',
      'GET /api/stats',
      'GET /api/case-studies',
      'GET /api/testimonials',
      'GET /api/blog',
      'POST /api/contact',
      'POST /api/quote',
      'POST /api/book-now',
      'POST /api/newsletter',
      'POST /api/callback',
      'GET /api/search'
    ]
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: 'Something went wrong on our end. Please try again later.'
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'API endpoint not found'
  });
});

app.listen(PORT, () => {
  console.log(`🚀 BookMyAd Server is running on port ${PORT}`);
  console.log(`📱 API Documentation available at http://localhost:${PORT}`);
});