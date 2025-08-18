// routes/newspaperAdvertising.js
const express = require('express');
const router = express.Router();

// Sample data - in production, this would come from a database
const cities = [
  { id: 'delhi', name: 'Delhi' },
  { id: 'mumbai', name: 'Mumbai' },
  { id: 'bangalore', name: 'Bangalore' },
  { id: 'chennai', name: 'Chennai' },
  { id: 'kolkata', name: 'Kolkata' },
  { id: 'hyderabad', name: 'Hyderabad' },
  { id: 'pune', name: 'Pune' },
  { id: 'ahmedabad', name: 'Ahmedabad' },
  { id: 'jaipur', name: 'Jaipur' },
  { id: 'surat', name: 'Surat' },
  { id: 'lucknow', name: 'Lucknow' },
  { id: 'kanpur', name: 'Kanpur' },
  { id: 'nagpur', name: 'Nagpur' },
  { id: 'indore', name: 'Indore' },
  { id: 'thane', name: 'Thane' },
  { id: 'bhopal', name: 'Bhopal' },
  { id: 'visakhapatnam', name: 'Visakhapatnam' },
  { id: 'pimpri', name: 'Pimpri-Chinchwad' },
  { id: 'patna', name: 'Patna' },
  { id: 'vadodara', name: 'Vadodara' }
];

const newspapers = [
  { id: 'times-of-india', name: 'Times of India' },
  { id: 'hindustan-times', name: 'Hindustan Times' },
  { id: 'indian-express', name: 'Indian Express' },
  { id: 'hindu', name: 'The Hindu' },
  { id: 'deccan-chronicle', name: 'Deccan Chronicle' },
  { id: 'economic-times', name: 'Economic Times' },
  { id: 'dainik-jagran', name: 'Dainik Jagran' },
  { id: 'dainik-bhaskar', name: 'Dainik Bhaskar' },
  { id: 'amar-ujala', name: 'Amar Ujala' },
  { id: 'punjab-kesari', name: 'Punjab Kesari' },
  { id: 'malayala-manorama', name: 'Malayala Manorama' },
  { id: 'eenadu', name: 'Eenadu' },
  { id: 'anandabazar-patrika', name: 'Anandabazar Patrika' },
  { id: 'rajasthan-patrika', name: 'Rajasthan Patrika' },
  { id: 'navbharat-times', name: 'Navbharat Times' }
];

const categories = [
  { id: 'tender-notices', name: 'Tender/Notices' },
  { id: 'matrimonial', name: 'Matrimonial' },
  { id: 'property', name: 'Property' },
  { id: 'jobs', name: 'Jobs/Recruitment' },
  { id: 'vehicles', name: 'Vehicles' },
  { id: 'business', name: 'Business' },
  { id: 'education', name: 'Education' },
  { id: 'services', name: 'Services' },
  { id: 'obituary', name: 'Obituary' },
  { id: 'lost-found', name: 'Lost & Found' },
  { id: 'personal', name: 'Personal' },
  { id: 'change-of-name', name: 'Change of Name' },
  { id: 'court-notice', name: 'Court Notice' },
  { id: 'public-notice', name: 'Public Notice' }
];

// GET /api/newspaperadvertising/cities
router.get('/cities', (req, res) => {
  try {
    res.json(cities);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch cities' });
  }
});

// GET /api/newspaperadvertising/newspapers
router.get('/newspapers', (req, res) => {
  try {
    res.json(newspapers);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch newspapers' });
  }
});

// GET /api/newspaperadvertising/categories
router.get('/categories', (req, res) => {
  try {
    res.json(categories);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch categories' });
  }
});

// POST /api/newspaperadvertising/search
router.post('/search', (req, res) => {
  try {
    const { adType, city, newspaper, category } = req.body;
    
    // Validate required fields
    if (!adType || !city || !newspaper) {
      return res.status(400).json({ 
        error: 'Missing required fields: adType, city, and newspaper are required' 
      });
    }
    
    // Generate search results
    const results = generateSearchResults({ adType, city, newspaper, category });
    
    res.json({
      search_id: `search_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      timestamp: new Date().toISOString(),
      search_params: { adType, city, newspaper, category },
      results
    });
  } catch (error) {
    res.status(500).json({ error: 'Search failed', message: error.message });
  }
});

// Helper function to generate search results
function generateSearchResults(params) {
  const basePrice = 1000;
  let multiplier = 1;
  
  // Ad type pricing
  switch (params.adType) {
    case 'text-classified':
      multiplier = 1;
      break;
    case 'display-classified':
      multiplier = 2;
      break;
    case 'display-ad':
      multiplier = 5;
      break;
    default:
      multiplier = 1;
  }
  
  // City-based pricing
  const cityMultipliers = {
    'delhi': 1.5,
    'mumbai': 1.8,
    'bangalore': 1.4,
    'chennai': 1.3,
    'kolkata': 1.2,
    'hyderabad': 1.3,
    'pune': 1.2,
    'ahmedabad': 1.1
  };
  
  const cityMultiplier = cityMultipliers[params.city] || 1.0;
  const estimatedPrice = Math.round(basePrice * multiplier * cityMultiplier);
  
  return {
    available_slots: [
      {
        date: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString().split('T')[0],
        price: estimatedPrice,
        discount: '10%',
        discounted_price: Math.round(estimatedPrice * 0.9)
      },
      {
        date: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
        price: estimatedPrice,
        discount: '15%',
        discounted_price: Math.round(estimatedPrice * 0.85)
      },
      {
        date: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
        price: estimatedPrice,
        discount: '20%',
        discounted_price: Math.round(estimatedPrice * 0.8)
      }
    ],
    package_options: [
      {
        id: 'basic',
        name: 'Basic Package',
        duration: '1 day',
        price: estimatedPrice,
        features: ['Single publication', 'Standard placement', 'Black & white']
      },
      {
        id: 'premium',
        name: 'Premium Package',
        duration: '3 days',
        price: Math.round(estimatedPrice * 2.5),
        features: ['Multiple publications', 'Prime placement', 'Bold text', 'Border highlight']
      },
      {
        id: 'deluxe',
        name: 'Deluxe Package',
        duration: '7 days',
        price: Math.round(estimatedPrice * 5),
        features: ['All newspapers', 'Top placement', 'Color highlight', 'Box border', 'Logo inclusion']
      }
    ],
    estimated_reach: Math.floor(Math.random() * (500000 - 50000) + 50000),
    booking_deadline: new Date(Date.now() + 2 * 60 * 60 * 1000).toISOString(),
    publication_guidelines: {
      max_words: params.adType === 'text-classified' ? 25 : 50,
      max_lines: params.adType === 'text-classified' ? 3 : 5,
      image_allowed: params.adType !== 'text-classified',
      color_options: params.adType === 'display-ad'
    },
    terms_conditions: [
      'Payment must be completed 24 hours before publication',
      'Cancellation allowed up to 12 hours before publication',
      'Content subject to editorial approval',
      'Prices may vary based on content length and formatting',
      'GST will be added to the final amount'
    ]
  };
}

// GET /api/newspaperadvertising/pricing/:adType
router.get('/pricing/:adType', (req, res) => {
  try {
    const { adType } = req.params;
    const { city } = req.query;
    
    const results = generateSearchResults({ adType, city: city || 'delhi' });
    res.json({
      ad_type: adType,
      city: city || 'delhi',
      pricing: results.package_options,
      base_reach: results.estimated_reach
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch pricing', message: error.message });
  }
});

// POST /api/newspaperadvertising/validate
router.post('/validate', (req, res) => {
  try {
    const { content, adType, wordCount } = req.body;
    
    const maxWords = {
      'text-classified': 25,
      'display-classified': 50,
      'display-ad': 100
    };
    
    const isValid = wordCount <= (maxWords[adType] || 25);
    
    res.json({
      valid: isValid,
      word_count: wordCount,
      max_words: maxWords[adType] || 25,
      estimated_lines: Math.ceil(wordCount / 8),
      suggestions: isValid ? [] : ['Content exceeds maximum word limit', 'Consider shortening your message']
    });
  } catch (error) {
    res.status(500).json({ error: 'Validation failed', message: error.message });
  }
});

module.exports = router;