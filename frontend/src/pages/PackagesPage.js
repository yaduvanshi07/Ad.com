import React, { useState, useEffect } from 'react';
import { Filter, Search, Star, MapPin, Eye, ShoppingCart, ChevronDown, Sparkles, Clock, Users } from 'lucide-react';

// Enhanced mock data with more realistic details
const allPackages = [
  { 
    id: 1, 
    name: 'Premium Metro Pack', 
    newspaper: 'The Times of India', 
    cities: ['Delhi', 'Mumbai', 'Bangalore'], 
    price: 18435, 
    originalPrice: 22000,
    isBestSeller: true, 
    isPopular: false,
    rating: 4.8,
    reviews: 156,
    details: 'Complete coverage across major metropolitan cities with premium placement guarantee',
    coverage: 'Delhi NCR, Mumbai Metropolitan, Bangalore Urban, Chandigarh, Rajasthan (Jaipur), Uttar Pradesh - 9 major cities covered',
    features: ['Premium Placement', 'Weekend Editions', 'Digital Copy', 'Analytics Report'],
    estimatedReach: '2.5M readers',
    category: 'matrimonial'
  },
  { 
    id: 2, 
    name: 'Elite Regional Bundle', 
    newspaper: 'The Times of India', 
    cities: ['Delhi', 'Lucknow'], 
    price: 17940, 
    originalPrice: 20000,
    isBestSeller: false, 
    isPopular: true,
    rating: 4.6,
    reviews: 89,
    details: 'Strategic regional coverage combining TOI and NBT for maximum visibility',
    coverage: 'Times of India Delhi NCR, Maharashtra Mumbai, Uttarakhand + Navbharat Times Delhi NCR, Lucknow - Dual newspaper advantage',
    features: ['Dual Publication', 'Regional Focus', 'Enhanced Visibility'],
    estimatedReach: '1.8M readers',
    category: 'matrimonial'
  },
  { 
    id: 3, 
    name: 'Smart City Package', 
    newspaper: 'The Times of India', 
    cities: ['Delhi', 'Lucknow'], 
    price: 15750, 
    originalPrice: 18000,
    isBestSeller: false, 
    isPopular: false,
    rating: 4.4,
    reviews: 67,
    details: 'Targeted coverage in smart cities with digital integration benefits',
    coverage: 'Delhi NCR, Uttarakhand, Chandigarh, Rajasthan Jaipur, UP + NBT Delhi NCR, Lucknow - 8 strategic locations',
    features: ['Smart City Focus', 'Digital Integration', 'Social Media Boost'],
    estimatedReach: '1.2M readers',
    category: 'matrimonial'
  },
  { 
    id: 4, 
    name: 'Mumbai Exclusive', 
    newspaper: 'The Times of India', 
    cities: ['Mumbai'], 
    price: 12500, 
    originalPrice: 15000,
    isBestSeller: false, 
    isPopular: false,
    rating: 4.2,
    reviews: 45,
    details: 'Comprehensive Mumbai coverage across all local editions',
    coverage: 'All Mumbai editions including Thane, Navi Mumbai, Western and Central suburbs - Complete metro coverage',
    features: ['Local Expertise', 'Suburb Coverage', 'Weekend Special'],
    estimatedReach: '800K readers',
    category: 'property'
  },
  { 
    id: 5, 
    name: 'Heritage Connect', 
    newspaper: 'The Hindu', 
    cities: ['Delhi', 'Mumbai', 'Chennai'], 
    price: 19500, 
    originalPrice: 23000,
    isBestSeller: false, 
    isPopular: true,
    rating: 4.7,
    reviews: 123,
    details: 'Premium placement in India\'s most trusted newspaper brand',
    coverage: 'Delhi, Mumbai, Chennai, Kolkata, Bangalore - All major metro editions with premium readership',
    features: ['Premium Readership', 'Trust Factor', 'Editorial Placement', 'Weekend Magazine'],
    estimatedReach: '1.5M readers',
    category: 'matrimonial'
  }
];

const PackagesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('matrimonial');
  const [selectedCity, setSelectedCity] = useState('all');
  const [selectedNewspaper, setSelectedNewspaper] = useState('all');
  const [selectedDisplay, setSelectedDisplay] = useState('display');
  const [sortBy, setSortBy] = useState('popularity');
  const [showFilters, setShowFilters] = useState(false);
  const [filteredPackages, setFilteredPackages] = useState(allPackages);

  useEffect(() => {
    let filtered = allPackages.filter(pkg => {
      if (selectedCategory !== 'all' && pkg.category !== selectedCategory) return false;
      if (selectedCity !== 'all' && !pkg.cities.some(city => city.toLowerCase() === selectedCity.toLowerCase())) return false;
      if (selectedNewspaper !== 'all' && pkg.newspaper !== selectedNewspaper) return false;
      return true;
    });

    // Sort packages
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price-low': return a.price - b.price;
        case 'price-high': return b.price - a.price;
        case 'rating': return b.rating - a.rating;
        default: return (b.isBestSeller ? 1 : 0) + (b.isPopular ? 0.5 : 0) - ((a.isBestSeller ? 1 : 0) + (a.isPopular ? 0.5 : 0));
      }
    });

    setFilteredPackages(filtered);
  }, [selectedCategory, selectedCity, selectedNewspaper, sortBy]);

  const ProgressStep = ({ step, title, subtitle, isActive, isCompleted }) => (
    <div className={`flex items-center px-6 py-4 relative ${
      isActive ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white' : 
      isCompleted ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-600'
    } ${step < 3 ? 'clip-path-arrow' : 'rounded-r-lg'} transition-all duration-300`}>
      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-4 ${
        isActive ? 'bg-white text-blue-600' : 
        isCompleted ? 'bg-green-500 text-white' : 'bg-gray-300 text-gray-600'
      }`}>
        {step}
      </div>
      <div>
        <div className="font-semibold text-sm">{title}</div>
        <div className="text-xs opacity-80">{subtitle}</div>
      </div>
    </div>
  );

  const PackageCard = ({ pkg }) => (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden group">
      {/* Badge Section */}
      <div className="relative">
        {pkg.isBestSeller && (
          <div className="absolute top-4 -right-2 bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-1 text-xs font-bold transform rotate-3 shadow-lg">
            <Sparkles className="inline w-3 h-3 mr-1" />
            BESTSELLER
          </div>
        )}
        {pkg.isPopular && !pkg.isBestSeller && (
          <div className="absolute top-4 -right-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 text-xs font-bold transform rotate-3 shadow-lg">
            <Users className="inline w-3 h-3 mr-1" />
            POPULAR
          </div>
        )}
      </div>

      {/* Header */}
      <div className="p-6 border-b border-gray-100">
        <div className="flex items-center justify-between mb-4">
          <img 
            src="https://logowik.com/content/uploads/images/the-times-of-india-toi5087.jpg" 
            alt="Newspaper Logo" 
            className="h-8 object-contain"
          />
          <div className="flex items-center text-yellow-500">
            <Star className="w-4 h-4 fill-current" />
            <span className="text-sm font-medium text-gray-700 ml-1">{pkg.rating}</span>
            <span className="text-xs text-gray-500 ml-1">({pkg.reviews})</span>
          </div>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
        <p className="text-gray-600 text-sm leading-relaxed">{pkg.details}</p>
      </div>

      {/* Features */}
      <div className="p-6 border-b border-gray-100">
        <div className="flex flex-wrap gap-2 mb-4">
          {pkg.features.map((feature, index) => (
            <span key={index} className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">
              {feature}
            </span>
          ))}
        </div>
        
        <div className="space-y-3">
          <div className="flex items-start">
            <MapPin className="w-4 h-4 text-gray-400 mt-0.5 mr-2 flex-shrink-0" />
            <p className="text-sm text-gray-600 leading-relaxed">{pkg.coverage}</p>
          </div>
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center text-gray-500">
              <Eye className="w-4 h-4 mr-1" />
              <span>{pkg.estimatedReach}</span>
            </div>
            <div className="flex items-center text-gray-500">
              <Clock className="w-4 h-4 mr-1" />
              <span>3cm × 5cm min</span>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing & Actions */}
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <div className="flex items-center">
              <span className="text-2xl font-bold text-green-600">₹{pkg.price.toLocaleString()}</span>
              <span className="text-sm text-gray-500 line-through ml-2">₹{pkg.originalPrice.toLocaleString()}</span>
            </div>
            <div className="text-xs text-gray-500 mt-1">
              Save ₹{(pkg.originalPrice - pkg.price).toLocaleString()} ({Math.round(((pkg.originalPrice - pkg.price) / pkg.originalPrice) * 100)}% off)
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-3">
          <button className="flex items-center justify-center px-4 py-3 border-2 border-gray-800 text-gray-800 rounded-lg hover:bg-gray-800 hover:text-white transition-all duration-200 font-medium">
            <Eye className="w-4 h-4 mr-2" />
            View Details
          </button>
          <button className="flex items-center justify-center px-4 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 font-medium">
            <ShoppingCart className="w-4 h-4 mr-2" />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-6">
        
        {/* Progress Steps */}
        <div className="flex items-center mb-8 bg-white rounded-lg shadow-sm overflow-hidden">
          <ProgressStep step={1} title="SELECT PACKAGE" subtitle={`(${selectedCategory})`} isActive={true} />
          <ProgressStep step={2} title="COMPOSE AD" subtitle="(Using sample ads)" isActive={false} />
          <ProgressStep step={3} title="MAKE PAYMENT" subtitle="(Online or Offline)" isActive={false} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-bold text-gray-900">Filters</h2>
                <Filter className="w-5 h-5 text-gray-500" />
              </div>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">Category</label>
                  <select 
                    value={selectedCategory} 
                    onChange={e => setSelectedCategory(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  >
                    <option value="all">All Categories</option>
                    <option value="matrimonial">Matrimonial</option>
                    <option value="property">Property</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">City</label>
                  <select 
                    value={selectedCity} 
                    onChange={e => setSelectedCity(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  >
                    <option value="all">All Cities</option>
                    <option value="mumbai">Mumbai</option>
                    <option value="delhi">Delhi</option>
                    <option value="bangalore">Bangalore</option>
                    <option value="chennai">Chennai</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">Publication</label>
                  <select 
                    value={selectedNewspaper} 
                    onChange={e => setSelectedNewspaper(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  >
                    <option value="all">All Publications</option>
                    <option value="The Times of India">The Times of India</option>
                    <option value="The Hindu">The Hindu</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">Ad Type</label>
                  <select 
                    value={selectedDisplay} 
                    onChange={e => setSelectedDisplay(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  >
                    <option value="display">Display Classified</option>
                    <option value="text">Text Ad</option>
                  </select>
                </div>

                <button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 px-4 rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 font-semibold">
                  <Search className="w-4 h-4 inline mr-2" />
                  Update Results
                </button>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Sort Controls */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 bg-white rounded-lg p-4 shadow-sm">
              <div className="mb-4 sm:mb-0">
                <h3 className="text-lg font-semibold text-gray-900">
                  Available Packages ({filteredPackages.length})
                </h3>
                <p className="text-sm text-gray-600">Choose the perfect package for your needs</p>
              </div>
              
              <div className="flex items-center space-x-4">
                <span className="text-sm font-medium text-gray-700">Sort by:</span>
                <select 
                  value={sortBy} 
                  onChange={e => setSortBy(e.target.value)}
                  className="p-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="popularity">Popularity</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Rating</option>
                </select>
              </div>
            </div>

            {/* Packages Grid */}
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
              {filteredPackages.map(pkg => (
                <PackageCard key={pkg.id} pkg={pkg} />
              ))}
            </div>

            {filteredPackages.length === 0 && (
              <div className="text-center py-12 bg-white rounded-lg shadow-sm">
                <Search className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">No packages found</h3>
                <p className="text-gray-600">Try adjusting your filters to see more results</p>
              </div>
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        .clip-path-arrow {
          clip-path: polygon(0 0, calc(100% - 20px) 0, 100% 50%, calc(100% - 20px) 100%, 0 100%);
          margin-right: 10px;
        }
      `}</style>
    </div>
  );
};

export default PackagesPage;