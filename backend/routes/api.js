const express = require('express');
const router = express.Router();

// In-memory storage (replace with database in production)
let quotes = [];
let newsletters = [];
let contacts = [];
let stats = {
  customers: 5000,
  campaigns: 12000,
  teamMembers: 150,
  vendors: 800
};

// Get all quotes
router.get('/quotes', (req, res) => {
  try {
    res.status(200).json({
      success: true,
      data: quotes,
      count: quotes.length
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    });
  }
});

// Submit quote request
router.post('/quote', (req, res) => {
  try {
    const { name, email, phone, service, budget, message } = req.body;

    // Validation
    if (!name || !email || !phone || !service) {
      return res.status(400).json({
        success: false,
        message: 'Name, email, phone, and service are required'
      });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: 'Please provide a valid email address'
      });
    }

    // Phone validation
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
    if (!phoneRegex.test(phone.replace(/[\s\-\(\)]/g, ''))) {
      return res.status(400).json({
        success: false,
        message: 'Please provide a valid phone number'
      });
    }

    const newQuote = {
      id: Date.now().toString(),
      name: name.trim(),
      email: email.toLowerCase().trim(),
      phone: phone.trim(),
      service,
      budget: budget || 'Not specified',
      message: message || '',
      status: 'pending',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };

    quotes.push(newQuote);

    res.status(201).json({
      success: true,
      message: 'Quote request submitted successfully',
      data: newQuote
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    });
  }
});

// Newsletter subscription
router.post('/newsletter', (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({
        success: false,
        message: 'Email is required'
      });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: 'Please provide a valid email address'
      });
    }

    // Check if email already exists
    const existingSubscription = newsletters.find(
      sub => sub.email.toLowerCase() === email.toLowerCase()
    );

    if (existingSubscription) {
      return res.status(409).json({
        success: false,
        message: 'Email is already subscribed'
      });
    }

    const newSubscription = {
      id: Date.now().toString(),
      email: email.toLowerCase().trim(),
      status: 'active',
      subscribedAt: new Date().toISOString()
    };

    newsletters.push(newSubscription);

    res.status(201).json({
      success: true,
      message: 'Successfully subscribed to newsletter',
      data: newSubscription
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    });
  }
});

// Contact form submission
router.post('/contact', (req, res) => {
  try {
    const { name, email, phone, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        message: 'Name, email, subject, and message are required'
      });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: 'Please provide a valid email address'
      });
    }

    const newContact = {
      id: Date.now().toString(),
      name: name.trim(),
      email: email.toLowerCase().trim(),
      phone: phone || '',
      subject: subject.trim(),
      message: message.trim(),
      status: 'new',
      createdAt: new Date().toISOString()
    };

    contacts.push(newContact);

    res.status(201).json({
      success: true,
      message: 'Contact message sent successfully',
      data: newContact
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    });
  }
});

// Get statistics
router.get('/stats', (req, res) => {
  try {
    const updatedStats = {
      ...stats,
      totalQuotes: quotes.length,
      totalSubscribers: newsletters.length,
      totalContacts: contacts.length,
      lastUpdated: new Date().toISOString()
    };

    res.status(200).json({
      success: true,
      data: updatedStats
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    });
  }
});

// Get services list
router.get('/services', (req, res) => {
  try {
    const services = [
      {
        id: 'newspaper',
        name: 'Newspaper Advertising',
        description: 'Reach millions through print media advertising',
        features: ['Wide Reach', 'Cost Effective', 'Credible Platform']
      },
      {
        id: 'digital',
        name: 'Digital Marketing',
        description: 'Comprehensive online marketing solutions',
        features: ['SEO', 'PPC', 'Content Marketing', 'Analytics']
      },
      {
        id: 'social',
        name: 'Social Media Marketing',
        description: 'Engage your audience on social platforms',
        features: ['Facebook Ads', 'Instagram Marketing', 'Twitter Campaigns']
      },
      {
        id: 'radio',
        name: 'Radio Advertising',
        description: 'Audio advertising across radio stations',
        features: ['Prime Time Slots', 'Targeted Audience', 'High Frequency']
      },
      {
        id: 'tv',
        name: 'TV Commercials',
        description: 'Television advertising campaigns',
        features: ['Visual Impact', 'Mass Reach', 'Brand Building']
      },
      {
        id: 'outdoor',
        name: 'Outdoor Advertising',
        description: 'Billboard and outdoor media advertising',
        features: ['High Visibility', 'Location Based', '24/7 Exposure']
      }
    ];

    res.status(200).json({
      success: true,
      data: services
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    });
  }
});

// Get case studies
router.get('/case-studies', (req, res) => {
  try {
    const caseStudies = [
      {
        id: 1,
        client: 'Mercedes Benz',
        industry: 'Automotive',
        challenge: 'Expand online presence and target specific demographics',
        solution: 'Social media campaigns and targeted advertising',
        results: '250% increase in online engagement',
        image: '/images/mercedes-case.jpg'
      },
      {
        id: 2,
        client: 'State Bank of India',
        industry: 'Banking',
        challenge: 'Promote mobile banking app downloads',
        solution: 'Multi-channel advertising campaign',
        results: '500K+ app downloads in 3 months',
        image: '/images/sbi-case.jpg'
      },
      {
        id: 3,
        client: 'CarDekho',
        industry: 'Automotive',
        challenge: 'Increase second-hand car sales in major cities',
        solution: 'Localized digital marketing campaigns',
        results: '40% increase in sales across target cities',
        image: '/images/cardekho-case.jpg'
      }
    ];

    res.status(200).json({
      success: true,
      data: caseStudies
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    });
  }
});

// Health check endpoint
router.get('/health', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'API is running successfully',
    timestamp: new Date().toISOString()
  });
});

module.exports = router;