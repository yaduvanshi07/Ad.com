import React, { useState, useEffect } from 'react';

const NewspaperAdvertising = () => {
  // State management
  const [cities, setCities] = useState([]);
  const [newspapers, setNewspapers] = useState([]);
  const [categories, setCategories] = useState([]);
  const [filteredNewspapers, setFilteredNewspapers] = useState([]);
  
  // Form state
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedNewspaper, setSelectedNewspaper] = useState('');
  const [selectedAdType, setSelectedAdType] = useState('display-classified');
  
  // UI state
  const [loading, setLoading] = useState(true);
  const [searching, setSearching] = useState(false);
  const [error, setError] = useState(null);
  const [searchResults, setSearchResults] = useState(null);
  const [showAnimation, setShowAnimation] = useState(false);
  
  // API Base URL
  const API_BASE = 'http://localhost:3001/api/newspaperadvertising';

  // Mock data for demonstration
  useEffect(() => {
    const mockData = () => {
      setTimeout(() => {
        setCities([
          { id: 1, name: 'Mumbai', state: 'Maharashtra' },
          { id: 2, name: 'Delhi', state: 'Delhi' },
          { id: 3, name: 'Bangalore', state: 'Karnataka' },
          { id: 4, name: 'Chennai', state: 'Tamil Nadu' },
          { id: 5, name: 'Kolkata', state: 'West Bengal' },
          { id: 6, name: 'Pune', state: 'Maharashtra' },
          { id: 7, name: 'Hyderabad', state: 'Telangana' },
          { id: 8, name: 'Ahmedabad', state: 'Gujarat' }
        ]);
        
        setNewspapers([
          { id: 1, name: 'Times of India', city: 'Mumbai', language: 'English', circulation: '3.2M', type: 'National' },
          { id: 2, name: 'Hindustan Times', city: 'Delhi', language: 'English', circulation: '1.6M', type: 'National' },
          { id: 3, name: 'The Hindu', city: 'Chennai', language: 'English', circulation: '1.5M', type: 'National' },
          { id: 4, name: 'Dainik Jagran', city: 'Delhi', language: 'Hindi', circulation: '3.8M', type: 'National' },
          { id: 5, name: 'Mumbai Mirror', city: 'Mumbai', language: 'English', circulation: '800K', type: 'Regional' },
          { id: 6, name: 'Deccan Chronicle', city: 'Hyderabad', language: 'English', circulation: '1.2M', type: 'Regional' },
          { id: 7, name: 'Gujarat Samachar', city: 'Ahmedabad', language: 'Gujarati', circulation: '1.1M', type: 'Regional' },
          { id: 8, name: 'Karnataka Malla', city: 'Bangalore', language: 'Kannada', circulation: '900K', type: 'Regional' }
        ]);
        
        setCategories([
          { id: 1, name: 'Matrimonial', icon: '💍' },
          { id: 2, name: 'Property', icon: '🏠' },
          { id: 3, name: 'Jobs', icon: '💼' },
          { id: 4, name: 'Education', icon: '🎓' },
          { id: 5, name: 'Business', icon: '🏢' },
          { id: 6, name: 'Automotive', icon: '🚗' },
          { id: 7, name: 'Services', icon: '🔧' },
          { id: 8, name: 'Personal', icon: '👤' }
        ]);
        
        setFilteredNewspapers([
          { id: 1, name: 'Times of India', city: 'Mumbai', language: 'English', circulation: '3.2M', type: 'National' },
          { id: 2, name: 'Hindustan Times', city: 'Delhi', language: 'English', circulation: '1.6M', type: 'National' },
          { id: 3, name: 'The Hindu', city: 'Chennai', language: 'English', circulation: '1.5M', type: 'National' },
          { id: 4, name: 'Dainik Jagran', city: 'Delhi', language: 'Hindi', circulation: '3.8M', type: 'National' }
        ]);
        
        setLoading(false);
        setShowAnimation(true);
      }, 1500);
    };

    mockData();
  }, []);

  // Filter newspapers when city changes
  useEffect(() => {
    if (selectedCity && newspapers.length > 0) {
      const filtered = newspapers.filter(newspaper => 
        newspaper?.city?.toLowerCase() === selectedCity.toLowerCase()
      );
      setFilteredNewspapers(filtered || []);
      if (selectedNewspaper && !filtered.some(n => n?.name === selectedNewspaper)) {
        setSelectedNewspaper('');
      }
    } else {
      setFilteredNewspapers(newspapers || []);
    }
  }, [selectedCity, newspapers]);

  // Handle search
  const handleSearch = async () => {
    if (!selectedCategory || !selectedCity) {
      setError('Please select both category and city to search');
      setTimeout(() => setError(null), 3000);
      return;
    }

    setSearching(true);
    setError(null);

    // Mock search with delay
    setTimeout(() => {
      const mockResult = {
        category: { name: selectedCategory },
        city: { name: selectedCity },
        pricing: {
          perWord: selectedAdType === 'text-classified' ? 15 : null,
          perSqCm: selectedAdType !== 'text-classified' ? 250 : null,
          minimum: selectedAdType === 'display-ad' ? 2000 : 500
        },
        newspapers: filteredNewspapers.slice(0, 4)
      };
      
      setSearchResults(mockResult);
      setSearching(false);
    }, 2000);
  };

  // Reset form
  const handleReset = () => {
    setSelectedCategory('');
    setSelectedCity('');
    setSelectedNewspaper('');
    setSelectedAdType('display-classified');
    setSearchResults(null);
    setError(null);
    setFilteredNewspapers(newspapers || []);
  };

  // Loading state with enhanced animation
  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 flex items-center justify-center overflow-hidden relative">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 text-center text-white">
          <div className="relative mb-8">
            <div className="animate-spin rounded-full h-20 w-20 border-4 border-transparent border-t-white border-r-white mx-auto"></div>
            <div className="absolute inset-0 animate-ping rounded-full h-20 w-20 border-4 border-white/30 mx-auto"></div>
          </div>
          <div className="space-y-2">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-white to-blue-300 bg-clip-text text-transparent">
              Loading Newspaper Platform
            </h2>
            <div className="flex justify-center space-x-1">
              <div className="animate-bounce h-2 w-2 bg-white rounded-full" style={{animationDelay: '0ms'}}></div>
              <div className="animate-bounce h-2 w-2 bg-white rounded-full" style={{animationDelay: '150ms'}}></div>
              <div className="animate-bounce h-2 w-2 bg-white rounded-full" style={{animationDelay: '300ms'}}></div>
            </div>
          </div>
        </div>
        
        {/* Floating elements */}
        <div className="absolute top-20 left-10 animate-float">
          <div className="text-6xl opacity-20">📰</div>
        </div>
        <div className="absolute top-40 right-20 animate-float-delayed">
          <div className="text-4xl opacity-20">📝</div>
        </div>
        <div className="absolute bottom-20 left-20 animate-float">
          <div className="text-5xl opacity-20">🎯</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>

      {/* Floating newspaper icons */}
      <div className="absolute top-20 left-10 animate-float opacity-20">
        <div className="text-4xl">📰</div>
      </div>
      <div className="absolute top-32 right-16 animate-float-delayed opacity-20">
        <div className="text-3xl">📊</div>
      </div>
      <div className="absolute bottom-32 left-16 animate-float opacity-20">
        <div className="text-5xl">📈</div>
      </div>
      <div className="absolute bottom-40 right-20 animate-float-delayed opacity-20">
        <div className="text-4xl">🎯</div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Enhanced Header */}
        <div className={`text-center text-white mb-12 ${showAnimation ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div className="mb-6">
            <h1 className="text-5xl md:text-7xl font-black mb-4 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
              NewsAd Pro
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            India's Premier Newspaper Advertising Platform
          </h2>
          <p className="text-xl text-blue-200 max-w-2xl mx-auto">
            Book newspaper ads online in just 3 simple steps. Reach millions across India with our extensive network.
          </p>
          
          {/* Feature highlights */}
          <div className="flex flex-wrap justify-center gap-6 mt-8 text-sm">
            <div className="flex items-center bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
              <span className="text-green-400 mr-2">✓</span>
              Instant Booking
            </div>
            <div className="flex items-center bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
              <span className="text-green-400 mr-2">✓</span>
              Best Prices
            </div>
            <div className="flex items-center bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
              <span className="text-green-400 mr-2">✓</span>
              500+ Newspapers
            </div>
          </div>
        </div>

        {/* Enhanced Main Form */}
        <div className={`max-w-7xl mx-auto bg-white/10 backdrop-blur-xl rounded-3xl p-8 md:p-12 shadow-2xl border border-white/20 ${showAnimation ? 'animate-fade-in-up-delayed' : 'opacity-0'}`}>
          {/* Error Display with enhanced styling */}
          {error && (
            <div className="mb-8 bg-red-500/20 border-l-4 border-red-500 rounded-lg p-4 text-white animate-shake">
              <div className="flex items-center">
                <span className="text-2xl mr-3">⚠️</span>
                <p className="font-semibold">{error}</p>
              </div>
            </div>
          )}

          {/* Step indicator */}
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-white mb-6">Book Your Ad in 3 Easy Steps</h3>
            <div className="flex justify-center items-center space-x-4">
              <div className="flex items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold ${selectedCategory ? 'bg-green-500' : 'bg-blue-500'}`}>
                  1
                </div>
                <span className="ml-2 text-white font-medium">Category</span>
              </div>
              <div className="w-8 h-1 bg-white/30 rounded"></div>
              <div className="flex items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold ${selectedCity ? 'bg-green-500' : 'bg-blue-500'}`}>
                  2
                </div>
                <span className="ml-2 text-white font-medium">Location</span>
              </div>
              <div className="w-8 h-1 bg-white/30 rounded"></div>
              <div className="flex items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold ${selectedAdType ? 'bg-green-500' : 'bg-blue-500'}`}>
                  3
                </div>
                <span className="ml-2 text-white font-medium">Ad Type</span>
              </div>
            </div>
          </div>

          {/* Enhanced Form Controls */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            {/* Category Selection */}
            <div className="group">
              <label className="block text-white font-bold mb-3 text-lg">
                <span className="text-2xl mr-2">📋</span>
                Select Category
              </label>
              <div className="relative">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full p-4 rounded-xl border-2 border-transparent bg-white/95 text-gray-800 font-medium focus:ring-4 focus:ring-blue-500/50 focus:outline-none focus:border-blue-500 transition-all duration-300 appearance-none cursor-pointer hover:bg-white group-hover:shadow-lg"
                >
                  <option value="">Choose Category</option>
                  {categories && categories.length > 0 ? (
                    categories.map((category) => (
                      <option key={category?.id || Math.random()} value={category?.name || ''}>
                        {category?.icon ? `${category.icon} ` : ''}{category?.name || 'Unknown Category'}
                      </option>
                    ))
                  ) : (
                    <option value="" disabled>No categories available</option>
                  )}
                </select>
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                  <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </div>
              </div>
            </div>

            {/* City Selection */}
            <div className="group">
              <label className="block text-white font-bold mb-3 text-lg">
                <span className="text-2xl mr-2">🏙️</span>
                Select City
              </label>
              <div className="relative">
                <select
                  value={selectedCity}
                  onChange={(e) => setSelectedCity(e.target.value)}
                  className="w-full p-4 rounded-xl border-2 border-transparent bg-white/95 text-gray-800 font-medium focus:ring-4 focus:ring-blue-500/50 focus:outline-none focus:border-blue-500 transition-all duration-300 appearance-none cursor-pointer hover:bg-white group-hover:shadow-lg"
                >
                  <option value="">Choose City</option>
                  {cities && cities.length > 0 ? (
                    cities.map((city) => (
                      <option key={city?.id || Math.random()} value={city?.name || ''}>
                        {city?.name || 'Unknown City'} {city?.state ? `(${city.state})` : ''}
                      </option>
                    ))
                  ) : (
                    <option value="" disabled>No cities available</option>
                  )}
                </select>
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                  <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </div>
              </div>
            </div>

            {/* Newspaper Selection */}
            <div className="group">
              <label className="block text-white font-bold mb-3 text-lg">
                <span className="text-2xl mr-2">📰</span>
                Select Newspaper <span className="text-sm font-normal opacity-75">(Optional)</span>
              </label>
              <div className="relative">
                <select
                  value={selectedNewspaper}
                  onChange={(e) => setSelectedNewspaper(e.target.value)}
                  className="w-full p-4 rounded-xl border-2 border-transparent bg-white/95 text-gray-800 font-medium focus:ring-4 focus:ring-blue-500/50 focus:outline-none focus:border-blue-500 transition-all duration-300 appearance-none cursor-pointer hover:bg-white group-hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={!selectedCity}
                >
                  <option value="">All Newspapers</option>
                  {filteredNewspapers && filteredNewspapers.length > 0 ? (
                    filteredNewspapers.map((newspaper) => (
                      <option key={newspaper?.id || Math.random()} value={newspaper?.name || ''}>
                        {newspaper?.name || 'Unknown Newspaper'} 
                        {newspaper?.language ? ` (${newspaper.language})` : ''}
                      </option>
                    ))
                  ) : selectedCity ? (
                    <option value="" disabled>No newspapers available in selected city</option>
                  ) : (
                    <option value="" disabled>Select city first</option>
                  )}
                </select>
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                  <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Ad Type Selection */}
          <div className="mb-12">
            <h3 className="text-white text-2xl font-bold mb-8 text-center">
              <span className="text-3xl mr-3">🎯</span>
              Choose Your Ad Type
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Text Classified */}
              <div 
                className={`cursor-pointer p-8 rounded-2xl transition-all duration-500 group relative overflow-hidden ${
                  selectedAdType === 'text-classified' 
                    ? 'bg-gradient-to-br from-blue-500 to-purple-600 text-white transform scale-105 shadow-2xl' 
                    : 'bg-white/15 text-white hover:bg-white/25 hover:scale-105 hover:shadow-xl'
                }`}
                onClick={() => setSelectedAdType('text-classified')}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10 text-center">
                  <div className="text-6xl mb-6 transform group-hover:scale-110 transition-transform duration-300">📝</div>
                  <h4 className="text-xl font-bold mb-4">Text Classified Ad</h4>
                  <p className="text-sm opacity-90 mb-6 leading-relaxed">Simple text-based classified advertisements with maximum impact</p>
                  <div className="bg-white/20 rounded-full px-4 py-2 inline-block">
                    <span className="font-bold">Starting ₹15/word</span>
                  </div>
                </div>
              </div>

              {/* Display Classified */}
              <div 
                className={`cursor-pointer p-8 rounded-2xl transition-all duration-500 group relative overflow-hidden ${
                  selectedAdType === 'display-classified' 
                    ? 'bg-gradient-to-br from-green-500 to-blue-600 text-white transform scale-105 shadow-2xl' 
                    : 'bg-white/15 text-white hover:bg-white/25 hover:scale-105 hover:shadow-xl'
                }`}
                onClick={() => setSelectedAdType('display-classified')}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-green-400/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10 text-center">
                  <div className="text-6xl mb-6 transform group-hover:scale-110 transition-transform duration-300">🎨</div>
                  <h4 className="text-xl font-bold mb-4">Display Classified</h4>
                  <p className="text-sm opacity-90 mb-6 leading-relaxed">Enhanced classified ads with borders, colors and better formatting</p>
                  <div className="bg-white/20 rounded-full px-4 py-2 inline-block">
                    <span className="font-bold">Starting ₹250/sqcm</span>
                  </div>
                </div>
              </div>

              {/* Display Ad */}
              <div 
                className={`cursor-pointer p-8 rounded-2xl transition-all duration-500 group relative overflow-hidden ${
                  selectedAdType === 'display-ad' 
                    ? 'bg-gradient-to-br from-purple-500 to-pink-600 text-white transform scale-105 shadow-2xl' 
                    : 'bg-white/15 text-white hover:bg-white/25 hover:scale-105 hover:shadow-xl'
                }`}
                onClick={() => setSelectedAdType('display-ad')}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10 text-center">
                  <div className="text-6xl mb-6 transform group-hover:scale-110 transition-transform duration-300">🖼️</div>
                  <h4 className="text-xl font-bold mb-4">Display Ad</h4>
                  <p className="text-sm opacity-90 mb-6 leading-relaxed">Full display advertisements with premium images and graphics</p>
                  <div className="bg-white/20 rounded-full px-4 py-2 inline-block">
                    <span className="font-bold">Premium Pricing</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button
              onClick={handleSearch}
              disabled={searching || !selectedCategory || !selectedCity}
              className={`group relative px-12 py-5 rounded-2xl font-bold text-xl transition-all duration-500 overflow-hidden ${
                searching || !selectedCategory || !selectedCity
                  ? 'bg-gray-600 cursor-not-allowed text-gray-400'
                  : 'bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white shadow-2xl hover-shadow-3xl transform hover:scale-105 active:scale-95'
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              <span className="relative z-10 flex items-center justify-center">
                {searching ? (
                  <>
                    <div className="animate-spin rounded-full h-6 w-6 border-2 border-white border-t-transparent mr-3"></div>
                    Searching Magic...
                  </>
                ) : (
                  <>
                    SEARCH NOW
                    <span className="ml-3 text-2xl group-hover:animate-bounce">🚀</span>
                  </>
                )}
              </span>
            </button>

            <button
              onClick={handleReset}
              className="group relative px-12 py-5 rounded-2xl font-bold text-xl bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white transition-all duration-500 shadow-2xl hover-shadow-3xl transform hover:scale-105 active:scale-95 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              <span className="relative z-10 flex items-center justify-center">
                RESET
                <span className="ml-3 text-2xl group-hover:animate-spin">🔄</span>
              </span>
            </button>
          </div>
        </div>

        {/* Enhanced Search Results */}
        {searchResults && (
          <div className="max-w-7xl mx-auto mt-12 bg-white/10 backdrop-blur-xl rounded-3xl p-8 md:p-12 shadow-2xl border border-white/20 animate-fade-in-up">
            <div className="text-center mb-10">
              <h3 className="text-4xl font-black text-white mb-4">
                <span className="text-5xl mr-4">🎉</span>
                Search Results
              </h3>
              <div className="w-32 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto rounded-full"></div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
              {/* Selected Options */}
              <div className="bg-gradient-to-br from-white/20 to-white/10 rounded-2xl p-8 backdrop-blur-sm">
                <h4 className="text-xl font-bold text-white mb-6 flex items-center">
                  <span className="text-2xl mr-3">✅</span>
                  Your Selection
                </h4>
                <div className="space-y-4 text-white">
                  <div className="flex items-center p-3 bg-white/10 rounded-lg">
                    <span className="font-semibold w-24">Category:</span>
                    <span className="bg-blue-500 px-3 py-1 rounded-full text-sm">{searchResults?.category?.name || selectedCategory}</span>
                  </div>
                  <div className="flex items-center p-3 bg-white/10 rounded-lg">
                    <span className="font-semibold w-24">City:</span>
                    <span className="bg-green-500 px-3 py-1 rounded-full text-sm">{searchResults?.city?.name || selectedCity}</span>
                  </div>
                  <div className="flex items-center p-3 bg-white/10 rounded-lg">
                    <span className="font-semibold w-24">Ad Type:</span>
                    <span className="bg-purple-500 px-3 py-1 rounded-full text-sm">{selectedAdType.replace('-', ' ').toUpperCase()}</span>
                  </div>
                  {selectedNewspaper && (
                    <div className="flex items-center p-3 bg-white/10 rounded-lg">
                      <span className="font-semibold w-24">Newspaper:</span>
                      <span className="bg-orange-500 px-3 py-1 rounded-full text-sm">{selectedNewspaper}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Pricing Information */}
              <div className="bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-2xl p-8 backdrop-blur-sm">
                <h4 className="text-xl font-bold text-white mb-6 flex items-center">
                  <span className="text-2xl mr-3">💰</span>
                  Pricing Information
                </h4>
                {searchResults?.pricing && (
                  <div className="space-y-4 text-white">
                    {searchResults.pricing.perWord && (
                      <div className="flex justify-between items-center p-4 bg-white/10 rounded-lg">
                        <span className="font-semibold">Per Word:</span>
                        <span className="text-2xl font-bold text-green-400">₹{searchResults.pricing.perWord}</span>
                      </div>
                    )}
                    {searchResults.pricing.perSqCm && (
                      <div className="flex justify-between items-center p-4 bg-white/10 rounded-lg">
                        <span className="font-semibold">Per Sq Cm:</span>
                        <span className="text-2xl font-bold text-blue-400">₹{searchResults.pricing.perSqCm}</span>
                      </div>
                    )}
                    <div className="flex justify-between items-center p-4 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-lg border border-yellow-500/30">
                      <span className="font-semibold">Minimum Cost:</span>
                      <span className="text-2xl font-bold text-yellow-400">₹{searchResults.pricing.minimum}</span>
                    </div>
                    
                    {/* Additional pricing info */}
                    <div className="mt-6 p-4 bg-white/5 rounded-lg">
                      <h5 className="font-bold text-white mb-3">💡 Pricing Tips:</h5>
                      <ul className="text-sm text-white/80 space-y-2">
                        <li>• Bulk bookings get up to 20% discount</li>
                        <li>• Weekend editions cost 30% more</li>
                        <li>• Prime positions available at premium rates</li>
                        <li>• Festival seasons have special pricing</li>
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Available Newspapers */}
            {searchResults?.newspapers && searchResults.newspapers.length > 0 && (
              <div className="mb-10 bg-white/10 rounded-2xl p-8 backdrop-blur-sm">
                <h4 className="text-2xl font-bold text-white mb-8 text-center">
                  <span className="text-3xl mr-3">📰</span>
                  Available Newspapers ({searchResults.newspapers.length})
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {searchResults.newspapers.map((newspaper, index) => (
                    <div 
                      key={newspaper?.id || Math.random()} 
                      className="bg-gradient-to-br from-white/15 to-white/5 rounded-xl p-6 hover:from-white/25 hover:to-white/10 transition-all duration-300 group cursor-pointer transform hover:scale-105 hover:shadow-xl animate-fade-in-up"
                      style={{animationDelay: `${index * 150}ms`}}
                    >
                      <div className="text-center">
                        <div className="text-4xl mb-4 group-hover:animate-bounce">📰</div>
                        <h5 className="font-bold text-white text-lg mb-2">{newspaper?.name || 'Unknown'}</h5>
                        <div className="space-y-2">
                          <p className="text-blue-200 text-sm flex items-center justify-center">
                            <span className="mr-2">🌐</span>
                            {newspaper?.language || 'Unknown'}
                          </p>
                          <p className="text-green-200 text-sm flex items-center justify-center">
                            <span className="mr-2">👥</span>
                            {newspaper?.circulation || 'N/A'} readers
                          </p>
                        </div>
                        <div className="mt-4">
                          <span className="inline-block px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs rounded-full font-semibold">
                            {newspaper?.type || 'General'}
                          </span>
                        </div>
                        
                        {/* Additional newspaper details */}
                        <div className="mt-4 pt-4 border-t border-white/20">
                          <div className="flex justify-between text-xs text-white/70">
                            <span>📍 {newspaper?.city}</span>
                            <span>⭐ 4.5/5</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Show all newspapers button */}
                <div className="text-center mt-8">
                  <button className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 backdrop-blur-sm">
                    View All Newspapers ({filteredNewspapers.length})
                  </button>
                </div>
              </div>
            )}

            {/* Enhanced Call to Action */}
            <div className="text-center space-y-6">
              <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-2xl p-8 backdrop-blur-sm border border-green-500/30">
                <h4 className="text-3xl font-bold text-white mb-4">🎯 Ready to Book Your Ad?</h4>
                <p className="text-white/80 mb-6 text-lg">Get instant quotes and book your newspaper advertisement now!</p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                  <button className="group relative bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-10 py-4 rounded-xl font-bold text-lg transition-all duration-500 shadow-2xl hover-shadow-3xl transform hover:scale-105 active:scale-95 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                    <span className="relative z-10 flex items-center justify-center">
                      BOOK NOW
                      <span className="ml-3 text-2xl group-hover:animate-pulse">📞</span>
                    </span>
                  </button>
                  
                  <button className="group relative bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-4 rounded-xl font-bold text-lg transition-all duration-500 shadow-2xl hover-shadow-3xl transform hover:scale-105 active:scale-95 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                    <span className="relative z-10 flex items-center justify-center">
                      GET QUOTE
                      <span className="ml-3 text-2xl group-hover:animate-bounce">💬</span>
                    </span>
                  </button>
                  
                  <button className="group relative bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-10 py-4 rounded-xl font-bold text-lg transition-all duration-500 shadow-2xl hover-shadow-3xl transform hover:scale-105 active:scale-95 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                    <span className="relative z-10 flex items-center justify-center">
                      CALL EXPERT
                      <span className="ml-3 text-2xl group-hover:animate-pulse">🎯</span>
                    </span>
                  </button>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-white/70 text-sm">
                  <div className="flex items-center justify-center">
                    <span className="text-green-400 mr-2 text-lg">✓</span>
                    <div>
                      <div className="font-semibold">24/7 Support</div>
                      <div>Round the clock assistance</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-center">
                    <span className="text-green-400 mr-2 text-lg">✓</span>
                    <div>
                      <div className="font-semibold">Instant Confirmation</div>
                      <div>Immediate booking confirmation</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-center">
                    <span className="text-green-400 mr-2 text-lg">✓</span>
                    <div>
                      <div className="font-semibold">Best Rates</div>
                      <div>Guaranteed lowest prices</div>
                    </div>
                  </div>
                </div>
                
                {/* Contact info */}
                <div className="mt-8 p-6 bg-white/5 rounded-xl">
                  <h5 className="font-bold text-white mb-4">📞 Contact Information</h5>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-white/80">
                    <div className="flex items-center">
                      <span className="mr-2">📱</span>
                      <span>+91-9876543210</span>
                    </div>
                    <div className="flex items-center">
                      <span className="mr-2">📧</span>
                      <span>support@newsadpro.com</span>
                    </div>
                    <div className="flex items-center">
                      <span className="mr-2">💬</span>
                      <span>WhatsApp Available</span>
                    </div>
                    <div className="flex items-center">
                      <span className="mr-2">⏰</span>
                      <span>9 AM - 9 PM (Mon-Sat)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Enhanced Statistics Section */}
        <div className="mt-16 max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">Why Choose NewsAd Pro?</h3>
            <p className="text-xl text-blue-200">Join thousands of satisfied customers</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div className="text-center bg-white/5 rounded-xl p-6 backdrop-blur-sm">
              <div className="text-4xl font-bold text-yellow-400 mb-2">500+</div>
              <div className="text-white/70">Newspapers</div>
            </div>
            <div className="text-center bg-white/5 rounded-xl p-6 backdrop-blur-sm">
              <div className="text-4xl font-bold text-green-400 mb-2">10K+</div>
              <div className="text-white/70">Happy Customers</div>
            </div>
            <div className="text-center bg-white/5 rounded-xl p-6 backdrop-blur-sm">
              <div className="text-4xl font-bold text-blue-400 mb-2">50+</div>
              <div className="text-white/70">Cities Covered</div>
            </div>
            <div className="text-center bg-white/5 rounded-xl p-6 backdrop-blur-sm">
              <div className="text-4xl font-bold text-purple-400 mb-2">99%</div>
              <div className="text-white/70">Success Rate</div>
            </div>
          </div>
        </div>

        {/* Footer Section */}
        <div className="mt-16 text-center text-white/60">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="bg-white/5 rounded-xl p-6 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                <div className="text-4xl mb-4">🏆</div>
                <h5 className="font-bold text-white mb-2">Trusted Platform</h5>
                <p className="text-sm">Over 10,000+ successful ad campaigns and growing every day</p>
              </div>
              <div className="bg-white/5 rounded-xl p-6 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                <div className="text-4xl mb-4">⚡</div>
                <h5 className="font-bold text-white mb-2">Lightning Fast</h5>
                <p className="text-sm">Book your ads in less than 5 minutes with our streamlined process</p>
              </div>
              <div className="bg-white/5 rounded-xl p-6 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                <div className="text-4xl mb-4">💯</div>
                <h5 className="font-bold text-white mb-2">Best Value</h5>
                <p className="text-sm">Guaranteed lowest rates in market with premium service quality</p>
              </div>
            </div>
            
            {/* Social links */}
            <div className="flex justify-center space-x-6 mb-8">
              <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
                <span>📘</span>
              </div>
              <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
                <span>🐦</span>
              </div>
              <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
                <span>📷</span>
              </div>
              <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
                <span>💼</span>
              </div>
            </div>
            
            <div className="border-t border-white/20 pt-8">
              <p className="text-sm mb-2">
                © 2025 NewsAd Pro - India's Premier Newspaper Advertising Platform
              </p>
              <p className="text-xs text-white/40">
                Made with ❤️ for advertisers across India | Privacy Policy | Terms of Service
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS Styles */}
      <style>
        {`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(-3deg); }
        }
        
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fade-in-up-delayed {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-5px); }
          75% { transform: translateX(5px); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out;
        }
        
        .animate-fade-in-up-delayed {
          animation: fade-in-up-delayed 1.2s ease-out 0.3s both;
        }
        
        .animate-shake {
          animation: shake 0.6s ease-in-out;
        }
        
        .hover-shadow-3xl:hover {
          box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25);
        }
        
        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }
        
        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }
        
        ::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 4px;
        }
        
        ::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.3);
          border-radius: 4px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.5);
        }
        `}
      </style>
    </div>
  );
};

export default NewspaperAdvertising;