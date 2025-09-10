import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Phone, MessageCircle, Play, TrendingUp, Users, Award } from "lucide-react";

const Hero = ({ navigateToPage }) => {
  const slides = [
    {
      title: "Transform Your Business",
      subtitle: "with Strategic Advertising",
      description: "Connect with your audience through our comprehensive advertising solutions. From traditional media to digital platforms, we deliver results that matter.",
      stats: { reach: "2M+", clients: "500+", success: "95%" },
      cta: "Start Your Campaign",
      theme: "newspaper"
    },
    {
      title: "Digital Excellence",
      subtitle: "Meets Creative Innovation", 
      description: "Leverage cutting-edge digital marketing strategies to amplify your brand presence across all major platforms and social channels.",
      stats: { campaigns: "1000+", roi: "300%", platforms: "15+" },
      cta: "Explore Digital",
      theme: "digital"
    },
    {
      title: "Multimedia Impact",
      subtitle: "Cinema & Broadcast Solutions",
      description: "Captivate audiences with premium video content, cinema advertising, and broadcast campaigns that create lasting impressions.",
      stats: { screens: "500+", viewers: "10M+", cities: "50+" },
      cta: "Book Media",
      theme: "media"
    }
  ];

  const allServices = [
    { icon: "🏠", title: "Dashboard", page: "home", color: "#4f46e5" },
    { icon: "📰", title: "Print Media", page: "newspaper-advertising", color: "#059669" },
    { icon: "🎬", title: "Cinema Ads", page: "cinema-advertising", color: "#dc2626" },
    { icon: "📺", title: "Broadcasting", page: "tv-advertising", color: "#7c3aed" },
    { icon: "🏢", title: "Building Media", page: "lift-branding", color: "#ea580c" },
    { icon: "📱", title: "SMS Marketing", page: "hyperlocal-sms", color: "#0891b2" },
    { icon: "🎯", title: "OTT Platforms", page: "ott-media", color: "#be185d" },
    { icon: "💻", title: "Digital Strategy", page: "digital-marketing", color: "#0d9488" },
    { icon: "📢", title: "Public Relations", page: "digital-pr", color: "#9333ea" },
    { icon: "🎯", title: "Programmatic", page: "programmatic-ads", color: "#c2410c" },
    { icon: "🚌", title: "Transit Ads", page: "transit-media", color: "#7c2d12" },
    { icon: "🏗️", title: "Outdoor Media", page: "outdoor-dooh", color: "#365314" },
    { icon: "📻", title: "Radio Spots", page: "radio-advertising", color: "#b91c1c" },
    { icon: "⭐", title: "Influencers", page: "influencer-marketing", color: "#a21caf" },
    { icon: "📋", title: "Legal Services", page: "document-name-correction", color: "#1f2937" },
    { icon: "📜", title: "Publications", page: "gazette-publication", color: "#374151" }
  ];

  const [current, setCurrent] = useState(0);
  const [activeTab, setActiveTab] = useState(0);
  const [startIndex, setStartIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const visibleTabs = 6;

  useEffect(() => {
    const timer = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % slides.length);
        setIsTransitioning(false);
      }, 300);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const goPrev = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
      setIsTransitioning(false);
    }, 300);
  };

  const goNext = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
      setIsTransitioning(false);
    }, 300);
  };

  const navigateTabsLeft = () => {
    setStartIndex((prev) => Math.max(0, prev - 1));
  };

  const navigateTabsRight = () => {
    setStartIndex((prev) => Math.min(allServices.length - visibleTabs, prev + 1));
  };

  const handleTabClick = (index) => {
    const actualIndex = startIndex + index;
    setActiveTab(actualIndex);
    const service = allServices[actualIndex];
    
    if (service.page !== 'home') {
      const serviceRoutes = {
        "newspaper-advertising": "/services/print-media",
        "cinema-advertising": "/services/cinema-advertising",
        "tv-advertising": "/services/broadcast-media",
        "lift-branding": "/services/building-media",
        "hyperlocal-sms": "/services/sms-marketing",
        "ott-media": "/services/ott-platforms",
        "digital-marketing": "/services/digital-strategy",
        "digital-pr": "/services/public-relations",
        "programmatic-ads": "/services/programmatic-advertising",
        "transit-media": "/services/transit-advertising",
        "outdoor-dooh": "/services/outdoor-media",
        "radio-advertising": "/services/radio-advertising",
        "influencer-marketing": "/services/influencer-marketing",
        "document-name-correction": "/services/legal-services",
        "gazette-publication": "/services/publications"
      };
      
      const route = serviceRoutes[service.page];
      if (route) {
        window.location.href = route;
      }
    }
  };

  const visibleServices = allServices.slice(startIndex, startIndex + visibleTabs);
  const currentSlide = slides[current];

  const getThemeGradient = (theme) => {
    switch(theme) {
      case 'newspaper': return 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
      case 'digital': return 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)';
      case 'media': return 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)';
      default: return 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        
        {/* Enhanced Navigation Header */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-6">
          <div className="flex items-center bg-gradient-to-r from-slate-800 to-slate-900">
            {/* Left Navigation */}
            <button 
              onClick={navigateTabsLeft}
              disabled={startIndex === 0}
              className={`flex items-center justify-center w-14 h-16 transition-all duration-300 ${
                startIndex === 0 
                  ? 'bg-slate-600 cursor-not-allowed opacity-50' 
                  : 'bg-red-600 hover:bg-red-700 cursor-pointer'
              }`}
            >
              <ChevronLeft className="w-5 h-5 text-white" />
            </button>

            {/* Service Navigation Tabs */}
            <div className="flex flex-1 overflow-hidden">
              {visibleServices.map((service, index) => {
                const isActive = (startIndex + index) === activeTab;
                return (
                  <button
                    key={startIndex + index}
                    onClick={() => handleTabClick(index)}
                    className={`flex-1 px-3 py-4 text-sm font-medium transition-all duration-300 relative group ${
                      isActive 
                        ? 'bg-white text-slate-800 shadow-lg' 
                        : 'text-white hover:bg-slate-700'
                    }`}
                    style={{
                      borderBottom: isActive ? `3px solid ${service.color}` : 'none'
                    }}
                  >
                    <div className="flex flex-col items-center gap-1">
                      <span className="text-lg">{service.icon}</span>
                      <span className="text-xs leading-tight">{service.title}</span>
                    </div>
                    
                    {isActive && (
                      <div 
                        className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0"
                        style={{
                          borderLeft: '6px solid transparent',
                          borderRight: '6px solid transparent',
                          borderTop: `8px solid ${service.color}`
                        }}
                      />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Right Navigation */}
            <button 
              onClick={navigateTabsRight}
              disabled={startIndex >= allServices.length - visibleTabs}
              className={`flex items-center justify-center w-14 h-16 transition-all duration-300 ${
                startIndex >= allServices.length - visibleTabs
                  ? 'bg-slate-600 cursor-not-allowed opacity-50'
                  : 'bg-red-600 hover:bg-red-700 cursor-pointer'
              }`}
            >
              <ChevronRight className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>

        {/* Hero Content Area */}
        <div className="bg-white rounded-xl shadow-xl overflow-hidden relative">
          <div 
            className="min-h-[500px] relative overflow-hidden"
            style={{ background: getThemeGradient(currentSlide.theme) }}
          >
            
            {/* Content Slides */}
            <div className={`transition-all duration-500 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
              <div className="flex items-center min-h-[500px] relative z-10">
                
                {/* Left Content Section */}
                <div className="flex-1 px-12 py-16 text-white">
                  <div className="max-w-2xl">
                    
                    {/* Stats Row */}
                    <div className="flex gap-6 mb-6">
                      {Object.entries(currentSlide.stats).map(([key, value]) => (
                        <div key={key} className="text-center">
                          <div className="text-2xl font-bold">{value}</div>
                          <div className="text-sm opacity-80 capitalize">{key}</div>
                        </div>
                      ))}
                    </div>

                    {/* Main Headlines */}
                    <h1 className="text-5xl font-bold leading-tight mb-3">
                      {currentSlide.title}
                    </h1>
                    <h2 className="text-4xl font-light leading-tight mb-6 opacity-90">
                      {currentSlide.subtitle}
                    </h2>
                    
                    <p className="text-lg leading-relaxed mb-8 opacity-90 max-w-xl">
                      {currentSlide.description}
                    </p>

                    {/* Action Buttons */}
                    <div className="flex gap-4">
                      <button 
                        onClick={() => window.location.href = '/services/consultation'}
                        className="bg-white text-slate-800 px-8 py-3 rounded-lg font-semibold hover:bg-slate-100 transition-all duration-300 shadow-lg flex items-center gap-2"
                      >
                        <Play className="w-4 h-4" />
                        {currentSlide.cta}
                      </button>
                      
                      <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-slate-800 transition-all duration-300 flex items-center gap-2">
                        <TrendingUp className="w-4 h-4" />
                        View Portfolio
                      </button>
                    </div>
                  </div>
                </div>

                {/* Right Visual Section */}
                <div className="flex-1 px-12 py-16 flex justify-center items-center">
                  <div className="relative">
                    {/* Main Circle */}
                    <div className="w-80 h-80 bg-white bg-opacity-20 rounded-full flex items-center justify-center backdrop-blur-sm">
                      <div className="w-64 h-64 bg-white bg-opacity-30 rounded-full flex items-center justify-center backdrop-blur-sm">
                        <div className="text-center text-white">
                          <div className="text-6xl mb-4">
                            {currentSlide.theme === 'newspaper' && '📰'}
                            {currentSlide.theme === 'digital' && '💻'}
                            {currentSlide.theme === 'media' && '🎬'}
                          </div>
                          <div className="font-semibold text-lg">
                            {currentSlide.theme === 'newspaper' && 'Print Media'}
                            {currentSlide.theme === 'digital' && 'Digital Solutions'}
                            {currentSlide.theme === 'media' && 'Video Content'}
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Floating Elements */}
                    <div className="absolute -top-4 -right-4 w-16 h-16 bg-white bg-opacity-25 rounded-full flex items-center justify-center backdrop-blur-sm">
                      <Users className="w-8 h-8 text-white" />
                    </div>
                    <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-white bg-opacity-25 rounded-full flex items-center justify-center backdrop-blur-sm">
                      <Award className="w-8 h-8 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button 
              onClick={goPrev}
              className="absolute left-6 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-sm z-20"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            
            <button 
              onClick={goNext}
              className="absolute right-6 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-sm z-20"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>

            {/* Slide Indicators */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-3 z-20">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === current ? 'bg-white' : 'bg-white bg-opacity-50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Contact Floating Actions */}
        <div className="fixed left-0 top-1/2 transform -translate-y-1/2 z-50 flex flex-col gap-3">
          <button
            onClick={() => window.open('tel:+919876543210')}
            className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-r-lg shadow-lg transition-all duration-300 hover:translate-x-1"
          >
            <Phone className="w-5 h-5" />
          </button>
          
          <button
            onClick={() => window.open('https://wa.me/919876543210')}
            className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-r-lg shadow-lg transition-all duration-300 hover:translate-x-1"
          >
            <MessageCircle className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;