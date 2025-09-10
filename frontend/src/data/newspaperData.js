// Database Structure for Newspaper Advertising Platform

// 1. NEWSPAPERS TABLE
const newspapers = [
  {
    id: 1,
    name: "The Times of India",
    code: "TOI",
    language: "English",
    type: "National",
    logo: "https://logowik.com/content/uploads/images/the-times-of-india-toi5087.jpg",
    website: "https://timesofindia.indiatimes.com",
    circulation: 2800000,
    readership: 7600000,
    founded: 1838,
    headquarters: "Mumbai",
    isActive: true,
    pricing: {
      classified_text: {
        baseRate: 25,
        perWord: 8,
        minWords: 10
      },
      classified_display: {
        baseRate: 450,
        perSqCm: 180
      },
      display: {
        baseRate: 2500,
        perSqCm: 850
      }
    }
  },
  {
    id: 2,
    name: "The Hindu",
    code: "TH",
    language: "English",
    type: "National",
    logo: "https://www.thehindu.com/theme/images/th-online/logo.png",
    website: "https://www.thehindu.com",
    circulation: 1450000,
    readership: 4200000,
    founded: 1878,
    headquarters: "Chennai",
    isActive: true,
    pricing: {
      classified_text: {
        baseRate: 22,
        perWord: 7,
        minWords: 10
      },
      classified_display: {
        baseRate: 400,
        perSqCm: 160
      },
      display: {
        baseRate: 2200,
        perSqCm: 750
      }
    }
  },
  {
    id: 3,
    name: "Hindustan Times",
    code: "HT",
    language: "English",
    type: "National",
    logo: "https://www.hindustantimes.com/images/app-images/ht2020/desktop/logo.png",
    website: "https://www.hindustantimes.com",
    circulation: 1160000,
    readership: 3800000,
    founded: 1924,
    headquarters: "New Delhi",
    isActive: true,
    pricing: {
      classified_text: {
        baseRate: 24,
        perWord: 8,
        minWords: 10
      },
      classified_display: {
        baseRate: 420,
        perSqCm: 170
      },
      display: {
        baseRate: 2300,
        perSqCm: 800
      }
    }
  },
  {
    id: 4,
    name: "The Economic Times",
    code: "ET",
    language: "English",
    type: "Business",
    logo: "https://economictimes.indiatimes.com/photo/47887819.cms",
    website: "https://economictimes.indiatimes.com",
    circulation: 800000,
    readership: 2400000,
    founded: 1961,
    headquarters: "Mumbai",
    isActive: true,
    pricing: {
      classified_text: {
        baseRate: 30,
        perWord: 10,
        minWords: 10
      },
      classified_display: {
        baseRate: 500,
        perSqCm: 200
      },
      display: {
        baseRate: 2800,
        perSqCm: 950
      }
    }
  },
  {
    id: 5,
    name: "Indian Express",
    code: "IE",
    language: "English",
    type: "National",
    logo: "https://indianexpress.com/wp-content/themes/indianexpress/images/indian-express-logo-n.svg",
    website: "https://indianexpress.com",
    circulation: 950000,
    readership: 2800000,
    founded: 1932,
    headquarters: "Mumbai",
    isActive: true,
    pricing: {
      classified_text: {
        baseRate: 23,
        perWord: 7,
        minWords: 10
      },
      classified_display: {
        baseRate: 390,
        perSqCm: 155
      },
      display: {
        baseRate: 2100,
        perSqCm: 720
      }
    }
  },
  {
    id: 6,
    name: "Navbharat Times",
    code: "NBT",
    language: "Hindi",
    type: "Regional",
    logo: "https://navbharattimes.indiatimes.com/photo/72975260.cms",
    website: "https://navbharattimes.indiatimes.com",
    circulation: 1200000,
    readership: 3600000,
    founded: 1950,
    headquarters: "New Delhi",
    isActive: true,
    pricing: {
      classified_text: {
        baseRate: 20,
        perWord: 6,
        minWords: 10
      },
      classified_display: {
        baseRate: 350,
        perSqCm: 140
      },
      display: {
        baseRate: 1900,
        perSqCm: 650
      }
    }
  }
];

// 2. CITIES TABLE
const cities = [
  {
    id: 1,
    name: "Mumbai",
    state: "Maharashtra",
    region: "West",
    population: 12478447,
    isMetro: true,
    tier: 1,
    coordinates: { lat: 19.0760, lng: 72.8777 },
    timeZone: "Asia/Kolkata"
  },
  {
    id: 2,
    name: "Delhi",
    state: "Delhi",
    region: "North",
    population: 11034555,
    isMetro: true,
    tier: 1,
    coordinates: { lat: 28.7041, lng: 77.1025 },
    timeZone: "Asia/Kolkata"
  },
  {
    id: 3,
    name: "Bangalore",
    state: "Karnataka",
    region: "South",
    population: 8443675,
    isMetro: true,
    tier: 1,
    coordinates: { lat: 12.9716, lng: 77.5946 },
    timeZone: "Asia/Kolkata"
  },
  {
    id: 4,
    name: "Chennai",
    state: "Tamil Nadu",
    region: "South",
    population: 7088000,
    isMetro: true,
    tier: 1,
    coordinates: { lat: 13.0827, lng: 80.2707 },
    timeZone: "Asia/Kolkata"
  },
  {
    id: 5,
    name: "Kolkata",
    state: "West Bengal",
    region: "East",
    population: 4496694,
    isMetro: true,
    tier: 1,
    coordinates: { lat: 22.5726, lng: 88.3639 },
    timeZone: "Asia/Kolkata"
  },
  {
    id: 6,
    name: "Pune",
    state: "Maharashtra",
    region: "West",
    population: 3124458,
    isMetro: false,
    tier: 1,
    coordinates: { lat: 18.5204, lng: 73.8567 },
    timeZone: "Asia/Kolkata"
  },
  {
    id: 7,
    name: "Hyderabad",
    state: "Telangana",
    region: "South",
    population: 6809970,
    isMetro: true,
    tier: 1,
    coordinates: { lat: 17.3850, lng: 78.4867 },
    timeZone: "Asia/Kolkata"
  },
  {
    id: 8,
    name: "Ahmedabad",
    state: "Gujarat",
    region: "West",
    population: 5570585,
    isMetro: false,
    tier: 1,
    coordinates: { lat: 23.0225, lng: 72.5714 },
    timeZone: "Asia/Kolkata"
  },
  {
    id: 9,
    name: "Jaipur",
    state: "Rajasthan",
    region: "North",
    population: 3046163,
    isMetro: false,
    tier: 2,
    coordinates: { lat: 26.9124, lng: 75.7873 },
    timeZone: "Asia/Kolkata"
  },
  {
    id: 10,
    name: "Lucknow",
    state: "Uttar Pradesh",
    region: "North",
    population: 2815601,
    isMetro: false,
    tier: 2,
    coordinates: { lat: 26.8467, lng: 80.9462 },
    timeZone: "Asia/Kolkata"
  },
  {
    id: 11,
    name: "Chandigarh",
    state: "Chandigarh",
    region: "North",
    population: 1055450,
    isMetro: false,
    tier: 2,
    coordinates: { lat: 30.7333, lng: 76.7794 },
    timeZone: "Asia/Kolkata"
  },
  {
    id: 12,
    name: "Indore",
    state: "Madhya Pradesh",
    region: "Central",
    population: 1964086,
    isMetro: false,
    tier: 2,
    coordinates: { lat: 22.7196, lng: 75.8577 },
    timeZone: "Asia/Kolkata"
  }
];

// 3. CATEGORIES TABLE
const categories = [
  {
    id: 1,
    name: "Matrimonial",
    code: "MAT",
    icon: "💑",
    color: "#ff4081",
    description: "Marriage proposals, bride/groom wanted",
    isPopular: true,
    subcategories: [
      { id: 101, name: "Bride Wanted", code: "BW" },
      { id: 102, name: "Groom Wanted", code: "GW" },
      { id: 103, name: "Second Marriage", code: "SM" },
      { id: 104, name: "NRI Matrimonial", code: "NRI" }
    ]
  },
  {
    id: 2,
    name: "Property",
    code: "PROP",
    icon: "🏠",
    color: "#2196f3",
    description: "Buy, sell, rent properties",
    isPopular: true,
    subcategories: [
      { id: 201, name: "For Sale", code: "FS" },
      { id: 202, name: "To Rent", code: "TR" },
      { id: 203, name: "Wanted", code: "WTD" },
      { id: 204, name: "Commercial", code: "COM" },
      { id: 205, name: "Plot/Land", code: "PL" }
    ]
  },
  {
    id: 3,
    name: "Recruitment",
    code: "JOB",
    icon: "💼",
    color: "#4caf50",
    description: "Job openings and opportunities",
    isPopular: true,
    subcategories: [
      { id: 301, name: "Situation Vacant", code: "SV" },
      { id: 302, name: "Situation Wanted", code: "SW" },
      { id: 303, name: "Part Time", code: "PT" },
      { id: 304, name: "Work from Home", code: "WFH" }
    ]
  },
  {
    id: 4,
    name: "Business",
    code: "BIZ",
    icon: "📊",
    color: "#ff9800",
    description: "Business opportunities and services",
    isPopular: false,
    subcategories: [
      { id: 401, name: "Business Opportunity", code: "BO" },
      { id: 402, name: "Partnership", code: "PART" },
      { id: 403, name: "Franchise", code: "FR" },
      { id: 404, name: "Investment", code: "INV" }
    ]
  },
  {
    id: 5,
    name: "Personal",
    code: "PERS",
    icon: "🎁",
    color: "#e91e63",
    description: "Personal announcements and messages",
    isPopular: false,
    subcategories: [
      { id: 501, name: "Birthday", code: "BD" },
      { id: 502, name: "Anniversary", code: "ANN" },
      { id: 503, name: "Congratulations", code: "CONG" },
      { id: 504, name: "Condolence", code: "COND" }
    ]
  },
  {
    id: 6,
    name: "Vehicles",
    code: "VEH",
    icon: "🚗",
    color: "#ff5722",
    description: "Buy, sell vehicles",
    isPopular: true,
    subcategories: [
      { id: 601, name: "Car", code: "CAR" },
      { id: 602, name: "Two Wheeler", code: "2W" },
      { id: 603, name: "Commercial Vehicle", code: "CV" },
      { id: 604, name: "Others", code: "OTH" }
    ]
  },
  {
    id: 7,
    name: "Services",
    code: "SERV",
    icon: "🛠️",
    color: "#607d8b",
    description: "Professional and personal services",
    isPopular: false,
    subcategories: [
      { id: 701, name: "Consultancy", code: "CONS" },
      { id: 702, name: "Repair Services", code: "REP" },
      { id: 703, name: "Tuition", code: "TUT" },
      { id: 704, name: "Healthcare", code: "HC" }
    ]
  },
  {
    id: 8,
    name: "Education",
    code: "EDU",
    icon: "🎓",
    color: "#1565c0",
    description: "Educational institutions and courses",
    isPopular: true,
    subcategories: [
      { id: 801, name: "Admission", code: "ADM" },
      { id: 802, name: "Coaching", code: "COACH" },
      { id: 803, name: "Distance Learning", code: "DL" },
      { id: 804, name: "Skill Development", code: "SD" }
    ]
  },
  {
    id: 9,
    name: "Public Notice",
    code: "PUB",
    icon: "📢",
    color: "#ffc107",
    description: "Official announcements and legal notices",
    isPopular: false,
    subcategories: [
      { id: 901, name: "Legal Notice", code: "LN" },
      { id: 902, name: "Change of Name", code: "CON" },
      { id: 903, name: "Lost Documents", code: "LD" },
      { id: 904, name: "Court Notice", code: "CN" }
    ]
  },
  {
    id: 10,
    name: "Lost & Found",
    code: "LF",
    icon: "🔍",
    color: "#795548",
    description: "Lost and found items",
    isPopular: false,
    subcategories: [
      { id: 1001, name: "Lost", code: "LOST" },
      { id: 1002, name: "Found", code: "FOUND" }
    ]
  }
];

// 4. NEWSPAPER COVERAGE (EDITIONS) TABLE
const newspaperEditions = [
  // Times of India Editions
  { id: 1, newspaperId: 1, cityId: 1, editionName: "Mumbai", isMainEdition: true, circulation: 850000 },
  { id: 2, newspaperId: 1, cityId: 2, editionName: "Delhi", isMainEdition: true, circulation: 920000 },
  { id: 3, newspaperId: 1, cityId: 3, editionName: "Bangalore", isMainEdition: true, circulation: 420000 },
  { id: 4, newspaperId: 1, cityId: 4, editionName: "Chennai", isMainEdition: true, circulation: 380000 },
  { id: 5, newspaperId: 1, cityId: 5, editionName: "Kolkata", isMainEdition: true, circulation: 320000 },
  { id: 6, newspaperId: 1, cityId: 6, editionName: "Pune", isMainEdition: false, circulation: 280000 },
  { id: 7, newspaperId: 1, cityId: 9, editionName: "Jaipur", isMainEdition: false, circulation: 180000 },
  { id: 8, newspaperId: 1, cityId: 10, editionName: "Lucknow", isMainEdition: false, circulation: 160000 },
  
  // The Hindu Editions
  { id: 9, newspaperId: 2, cityId: 4, editionName: "Chennai", isMainEdition: true, circulation: 450000 },
  { id: 10, newspaperId: 2, cityId: 2, editionName: "Delhi", isMainEdition: true, circulation: 280000 },
  { id: 11, newspaperId: 2, cityId: 3, editionName: "Bangalore", isMainEdition: true, circulation: 320000 },
  { id: 12, newspaperId: 2, cityId: 1, editionName: "Mumbai", isMainEdition: false, circulation: 180000 },
  { id: 13, newspaperId: 2, cityId: 5, editionName: "Kolkata", isMainEdition: true, circulation: 150000 },
  { id: 14, newspaperId: 2, cityId: 7, editionName: "Hyderabad", isMainEdition: true, circulation: 200000 },
  
  // Hindustan Times Editions
  { id: 15, newspaperId: 3, cityId: 2, editionName: "Delhi", isMainEdition: true, circulation: 580000 },
  { id: 16, newspaperId: 3, cityId: 1, editionName: "Mumbai", isMainEdition: true, circulation: 220000 },
  { id: 17, newspaperId: 3, cityId: 6, editionName: "Pune", isMainEdition: false, circulation: 120000 },
  { id: 18, newspaperId: 3, cityId: 11, editionName: "Chandigarh", isMainEdition: false, circulation: 95000 },
  { id: 19, newspaperId: 3, cityId: 10, editionName: "Lucknow", isMainEdition: false, circulation: 85000 },
  
  // Economic Times Editions
  { id: 20, newspaperId: 4, cityId: 1, editionName: "Mumbai", isMainEdition: true, circulation: 280000 },
  { id: 21, newspaperId: 4, cityId: 2, editionName: "Delhi", isMainEdition: true, circulation: 320000 },
  { id: 22, newspaperId: 4, cityId: 3, editionName: "Bangalore", isMainEdition: true, circulation: 120000 },
  { id: 23, newspaperId: 4, cityId: 4, editionName: "Chennai", isMainEdition: true, circulation: 80000 },
  
  // Indian Express Editions
  { id: 24, newspaperId: 5, cityId: 1, editionName: "Mumbai", isMainEdition: true, circulation: 320000 },
  { id: 25, newspaperId: 5, cityId: 2, editionName: "Delhi", isMainEdition: true, circulation: 280000 },
  { id: 26, newspaperId: 5, cityId: 6, editionName: "Pune", isMainEdition: false, circulation: 95000 },
  { id: 27, newspaperId: 5, cityId: 8, editionName: "Ahmedabad", isMainEdition: true, circulation: 140000 },
  { id: 28, newspaperId: 5, cityId: 11, editionName: "Chandigarh", isMainEdition: false, circulation: 85000 },
  
  // Navbharat Times Editions
  { id: 29, newspaperId: 6, cityId: 2, editionName: "Delhi", isMainEdition: true, circulation: 580000 },
  { id: 30, newspaperId: 6, cityId: 1, editionName: "Mumbai", isMainEdition: true, circulation: 420000 },
  { id: 31, newspaperId: 6, cityId: 10, editionName: "Lucknow", isMainEdition: true, circulation: 200000 }
];

// 5. PACKAGES TABLE
const packages = [
  {
    id: 1,
    name: "Premium Metro Pack",
    description: "Complete coverage across major metropolitan cities with premium placement guarantee",
    categoryId: 1, // Matrimonial
    adType: "classified_display",
    totalPrice: 18435,
    originalPrice: 22000,
    discount: 16,
    minSize: "3x5", // cm
    features: ["Premium Placement", "Weekend Editions", "Digital Copy", "Analytics Report"],
    estimatedReach: "2.5M readers",
    isBestSeller: true,
    isPopular: false,
    rating: 4.8,
    reviews: 156,
    validityDays: 7,
    newspaperEditions: [1, 2, 3, 4, 5, 6, 7, 8], // TOI editions
    createdAt: "2024-01-15T10:00:00Z",
    isActive: true
  },
  {
    id: 2,
    name: "Elite Regional Bundle",
    description: "Strategic regional coverage combining TOI and NBT for maximum visibility",
    categoryId: 1, // Matrimonial
    adType: "classified_display",
    totalPrice: 17940,
    originalPrice: 20000,
    discount: 10,
    minSize: "3x5",
    features: ["Dual Publication", "Regional Focus", "Enhanced Visibility"],
    estimatedReach: "1.8M readers",
    isBestSeller: false,
    isPopular: true,
    rating: 4.6,
    reviews: 89,
    validityDays: 7,
    newspaperEditions: [1, 2, 10, 29, 30], // TOI + NBT select editions
    createdAt: "2024-01-20T10:00:00Z",
    isActive: true
  },
  {
    id: 3,
    name: "Smart City Package",
    description: "Targeted coverage in smart cities with digital integration benefits",
    categoryId: 1, // Matrimonial
    adType: "classified_display",
    totalPrice: 15750,
    originalPrice: 18000,
    discount: 12,
    minSize: "3x5",
    features: ["Smart City Focus", "Digital Integration", "Social Media Boost"],
    estimatedReach: "1.2M readers",
    isBestSeller: false,
    isPopular: false,
    rating: 4.4,
    reviews: 67,
    validityDays: 5,
    newspaperEditions: [2, 7, 11, 10, 29], // Delhi, Jaipur, Chandigarh, Lucknow
    createdAt: "2024-02-01T10:00:00Z",
    isActive: true
  },
  {
    id: 4,
    name: "Mumbai Exclusive",
    description: "Comprehensive Mumbai coverage across all local editions",
    categoryId: 2, // Property
    adType: "classified_display",
    totalPrice: 12500,
    originalPrice: 15000,
    discount: 17,
    minSize: "3x5",
    features: ["Local Expertise", "Suburb Coverage", "Weekend Special"],
    estimatedReach: "800K readers",
    isBestSeller: false,
    isPopular: false,
    rating: 4.2,
    reviews: 45,
    validityDays: 3,
    newspaperEditions: [1, 12, 16, 24, 30], // Mumbai editions across newspapers
    createdAt: "2024-02-05T10:00:00Z",
    isActive: true
  },
  {
    id: 5,
    name: "Heritage Connect",
    description: "Premium placement in India's most trusted newspaper brand",
    categoryId: 1, // Matrimonial
    adType: "display",
    totalPrice: 19500,
    originalPrice: 23000,
    discount: 15,
    minSize: "5x8",
    features: ["Premium Readership", "Trust Factor", "Editorial Placement", "Weekend Magazine"],
    estimatedReach: "1.5M readers",
    isBestSeller: false,
    isPopular: true,
    rating: 4.7,
    reviews: 123,
    validityDays: 7,
    newspaperEditions: [9, 10, 11, 12, 13, 14], // The Hindu editions
    createdAt: "2024-01-25T10:00:00Z",
    isActive: true
  },
  {
    id: 6,
    name: "Business Elite",
    description: "Premium business newspaper coverage for recruitment ads",
    categoryId: 3, // Recruitment
    adType: "display",
    totalPrice: 25000,
    originalPrice: 28000,
    discount: 11,
    minSize: "8x10",
    features: ["Business Readership", "Executive Audience", "Premium Days", "LinkedIn Integration"],
    estimatedReach: "900K readers",
    isBestSeller: false,
    isPopular: false,
    rating: 4.5,
    reviews: 34,
    validityDays: 5,
    newspaperEditions: [20, 21, 22, 23], // Economic Times editions
    createdAt: "2024-02-10T10:00:00Z",
    isActive: true
  },
  {
    id: 7,
    name: "Regional Hindi Express",
    description: "Hindi newspaper coverage for maximum local reach",
    categoryId: 2, // Property
    adType: "classified_display",
    totalPrice: 14200,
    originalPrice: 16000,
    discount: 11,
    minSize: "3x5",
    features: ["Hindi Audience", "Local Connection", "Cultural Appeal", "Mass Reach"],
    estimatedReach: "1.1M readers",
    isBestSeller: false,
    isPopular: true,
    rating: 4.3,
    reviews: 78,
    validityDays: 5,
    newspaperEditions: [29, 30, 31], // Navbharat Times editions
    createdAt: "2024-02-12T10:00:00Z",
    isActive: true
  },
  {
    id: 8,
    name: "Express Value Pack",
    description: "Cost-effective solution with wide geographic coverage",
    categoryId: 3, // Recruitment
    adType: "classified_display",
    totalPrice: 13500,
    originalPrice: 15500,
    discount: 13,
    minSize: "3x5",
    features: ["Wide Coverage", "Budget Friendly", "Multi-City", "Quick Results"],
    estimatedReach: "950K readers",
    isBestSeller: false,
    isPopular: false,
    rating: 4.1,
    reviews: 52,
    validityDays: 5,
    newspaperEditions: [24, 25, 26, 27, 28], // Indian Express editions
    createdAt: "2024-02-15T10:00:00Z",
    isActive: true
  }
];

// 6. AD TYPES TABLE
const adTypes = [
  {
    id: 1,
    name: "Classified Text",
    code: "classified_text",
    description: "Simple text-based classified ads",
    minWordCount: 10,
    maxWordCount: 50,
    allowsImages: false,
    allowsFormatting: false,
    basePrice: 150,
    pricePerWord: 8
  },
  {
    id: 2,
    name: "Classified Display",
    code: "classified_display",
    description: "Enhanced classified ads with formatting and basic graphics",
    minSize: "3x5", // cm
    maxSize: "20x15", // cm
    allowsImages: true,
    allowsFormatting: true,
    allowsColor: false,
    basePrice: 450,
    pricePerSqCm: 180
  },
  {
    id: 3,
    name: "Display Ad",
    code: "display",
    description: "Full-color display advertisements with complete design freedom",
    minSize: "5x8", // cm
    maxSize: "32x25", // cm
    allowsImages: true,
    allowsFormatting: true,
    allowsColor: true,
    allowsLogo: true,
    basePrice: 2500,
    pricePerSqCm: 850
  }
];

// 7. SEARCH FILTERS AND HELPER FUNCTIONS
const searchFilters = {
  // Get newspapers by city
  getNewspapersByCity: (cityId) => {
    const editionsInCity = newspaperEditions.filter(edition => edition.cityId === cityId);
    const newspaperIds = [...new Set(editionsInCity.map(edition => edition.newspaperId))];
    return newspapers.filter(newspaper => newspaperIds.includes(newspaper.id));
  },
  
  // Get cities by newspaper
  getCitiesByNewspaper: (newspaperId) => {
    const newspaperEditionsFiltered = newspaperEditions.filter(edition => edition.newspaperId === newspaperId);
    const cityIds = [...new Set(newspaperEditionsFiltered.map(edition => edition.cityId))];
    return cities.filter(city => cityIds.includes(city.id));
  },
  
  // Get packages by filters
  getPackagesByFilters: (filters) => {
    let filteredPackages = [...packages];
    
    if (filters.categoryId) {
      filteredPackages = filteredPackages.filter(pkg => pkg.categoryId === parseInt(filters.categoryId));
    }
    
    if (filters.cityId) {
      const editionsInCity = newspaperEditions
        .filter(edition => edition.cityId === parseInt(filters.cityId))
        .map(edition => edition.id);
      filteredPackages = filteredPackages.filter(pkg => 
        pkg.newspaperEditions.some(editionId => editionsInCity.includes(editionId))
      );
    }
    
    if (filters.newspaperId) {
      const newspaperEditionsFiltered = newspaperEditions
        .filter(edition => edition.newspaperId === parseInt(filters.newspaperId))
        .map(edition => edition.id);
      filteredPackages = filteredPackages.filter(pkg => 
        pkg.newspaperEditions.some(editionId => newspaperEditionsFiltered.includes(editionId))
      );
    }
    
    if (filters.adType) {
      filteredPackages = filteredPackages.filter(pkg => pkg.adType === filters.adType);
    }
    
    if (filters.minPrice) {
      filteredPackages = filteredPackages.filter(pkg => pkg.totalPrice >= parseInt(filters.minPrice));
    }
    
    if (filters.maxPrice) {
      filteredPackages = filteredPackages.filter(pkg => pkg.totalPrice <= parseInt(filters.maxPrice));
    }
    
    // Sort packages
    if (filters.sortBy === 'price-low') {
      filteredPackages.sort((a, b) => a.totalPrice - b.totalPrice);
    } else if (filters.sortBy === 'price-high') {
      filteredPackages.sort((a, b) => b.totalPrice - a.totalPrice);
    } else if (filters.sortBy === 'rating') {
      filteredPackages.sort((a, b) => b.rating - a.rating);
    } else if (filters.sortBy === 'discount') {
      filteredPackages.sort((a, b) => b.discount - a.discount);
    } else {
      // Default: popularity (bestsellers first, then popular, then by rating)
      filteredPackages.sort((a, b) => {
        const aScore = (a.isBestSeller ? 3 : 0) + (a.isPopular ? 2 : 0) + (a.rating / 10);
        const bScore = (b.isBestSeller ? 3 : 0) + (b.isPopular ? 2 : 0) + (b.rating / 10);
        return bScore - aScore;
      });
    }
    
    return filteredPackages;
  },
  
  // Get package details with complete information
  getPackageDetails: (packageId) => {
    const pkg = packages.find(p => p.id === parseInt(packageId));
    if (!pkg) return null;
    
    // Get newspaper edition details
    const editionDetails = pkg.newspaperEditions.map(editionId => {
      const edition = newspaperEditions.find(e => e.id === editionId);
      if (!edition) return null;
      
      const newspaper = newspapers.find(n => n.id === edition.newspaperId);
      const city = cities.find(c => c.id === edition.cityId);
      
      return {
        ...edition,
        newspaper,
        city
      };
    }).filter(Boolean);
    
    // Get category details
    const category = categories.find(c => c.id === pkg.categoryId);
    
    return {
      ...pkg,
      editions: editionDetails,
      category,
      totalCirculation: editionDetails.reduce((sum, edition) => sum + edition.circulation, 0)
    };
  },
  
  // Calculate custom ad price
  calculateAdPrice: (newspaperId, adType, dimensions = null, wordCount = null) => {
    const newspaper = newspapers.find(n => n.id === parseInt(newspaperId));
    if (!newspaper) return 0;
    
    const pricing = newspaper.pricing[adType];
    if (!pricing) return 0;
    
    if (adType === 'classified_text') {
      const words = Math.max(wordCount || 0, pricing.minWords);
      return pricing.baseRate + (words * pricing.perWord);
    } else {
      // For display ads, calculate area (width x height)
      if (!dimensions || !dimensions.width || !dimensions.height) return pricing.baseRate;
      const area = dimensions.width * dimensions.height;
      return pricing.baseRate + (area * pricing.perSqCm);
    }
  },
  
  // Get popular categories
  getPopularCategories: () => {
    return categories.filter(cat => cat.isPopular);
  },
  
  // Get metro cities
  getMetroCities: () => {
    return cities.filter(city => city.isMetro);
  },
  
  // Search packages by text
  searchPackages: (searchText) => {
    const searchTerm = searchText.toLowerCase();
    return packages.filter(pkg => 
      pkg.name.toLowerCase().includes(searchTerm) ||
      pkg.description.toLowerCase().includes(searchTerm) ||
      pkg.features.some(feature => feature.toLowerCase().includes(searchTerm))
    );
  }
};

// 8. ADDITIONAL UTILITY FUNCTIONS
const utilityFunctions = {
  // Format price to Indian currency
  formatPrice: (price) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(price);
  },
  
  // Calculate savings
  calculateSavings: (originalPrice, currentPrice) => {
    const savings = originalPrice - currentPrice;
    const percentage = Math.round((savings / originalPrice) * 100);
    return { amount: savings, percentage };
  },
  
  // Get newspaper by code
  getNewspaperByCode: (code) => {
    return newspapers.find(n => n.code === code);
  },
  
  // Get city by name
  getCityByName: (name) => {
    return cities.find(c => c.name.toLowerCase() === name.toLowerCase());
  },
  
  // Get category by code
  getCategoryByCode: (code) => {
    return categories.find(c => c.code === code);
  },
  
  // Get trending packages (based on reviews and ratings)
  getTrendingPackages: (limit = 5) => {
    return packages
      .filter(pkg => pkg.isActive)
      .sort((a, b) => (b.rating * b.reviews) - (a.rating * a.reviews))
      .slice(0, limit);
  },
  
  // Get best deal packages (highest discount)
  getBestDeals: (limit = 5) => {
    return packages
      .filter(pkg => pkg.isActive && pkg.discount > 0)
      .sort((a, b) => b.discount - a.discount)
      .slice(0, limit);
  }
};

// 9. SAMPLE USAGE DATA FOR TESTING
const sampleQueries = {
  // Sample search queries for testing
  matrimonialInMumbai: {
    categoryId: 1,
    cityId: 1,
    adType: 'classified_display',
    sortBy: 'popularity'
  },
  
  propertyInDelhi: {
    categoryId: 2,
    cityId: 2,
    minPrice: 10000,
    maxPrice: 20000,
    sortBy: 'price-low'
  },
  
  jobsNationwide: {
    categoryId: 3,
    adType: 'display',
    sortBy: 'rating'
  }
};

// Export all data and functions
export {
  newspapers,
  cities,
  categories,
  newspaperEditions,
  packages,
  adTypes,
  searchFilters,
  utilityFunctions,
  sampleQueries
};

// Default export for easy importing
export default {
  newspapers,
  cities,
  categories,
  newspaperEditions,
  packages,
  adTypes,
  searchFilters,
  utilityFunctions,
  sampleQueries
};