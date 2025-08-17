import React, { useState, useEffect } from "react";

const Hero = () => {
  const slides = [
    {
      title: "Easiest and Fastest ad booking",
      subtitle: "at the Lowest Price",
      description: "Book your Newspaper display ads in any regional or National Newspaper, Instantly!",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=400&fit=crop&auto=format",
      button: "BOOK NOW"
    },
    {
      title: "Digital Marketing Solutions", 
      subtitle: "at Affordable Rates",
      description: "Reach millions with our comprehensive digital marketing services!",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=400&fit=crop&auto=format",
      button: "BOOK NOW"
    },
    {
      title: "Radio & Cinema Advertising",
      subtitle: "Maximum Reach & Impact",
      description: "Connect with your audience through powerful audio-visual campaigns!",
      image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=500&h=400&fit=crop&auto=format",
      button: "BOOK NOW"
    }
  ];

  const allServices = [
    { icon: "🏠", title: "Home", active: true },
    { icon: "🎬", title: "Cinema Advertising" },
    { icon: "📺", title: "TV Advertising" },
    { icon: "🛗", title: "Lift Branding" },
    { icon: "📱", title: "Hyperlocal SMS" },
    { icon: "📱", title: "OTT/Media Buying" },
    { icon: "💻", title: "Digital Marketing" },
    { icon: "📢", title: "Digital PR" },
    { icon: "🎯", title: "Programmatic Ads" },
    { icon: "🚌", title: "Transit Media" },
    { icon: "🏢", title: "Outdoor/DOOH" },
    { icon: "📻", title: "Radio Advertising" },
    { icon: "🌟", title: "Influencer Marketing" }
  ];

  const [current, setCurrent] = useState(0);
  const [activeTab, setActiveTab] = useState(0);
  const [startIndex, setStartIndex] = useState(0);
  const visibleTabs = 6; // Number of tabs visible at once

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const goPrev = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  const goNext = () => setCurrent((prev) => (prev + 1) % slides.length);

  const navigateTabsLeft = () => {
    setStartIndex((prev) => Math.max(0, prev - 1));
  };

  const navigateTabsRight = () => {
    setStartIndex((prev) => Math.min(allServices.length - visibleTabs, prev + 1));
  };

  const handleTabClick = (index) => {
    const actualIndex = startIndex + index;
    setActiveTab(actualIndex);
    
    // Navigate to the service page if it's not Home
    if (actualIndex > 0) {
      // You can add navigation logic here
      console.log(`Navigating to: ${allServices[actualIndex].title}`);
    }
  };

  const visibleServices = allServices.slice(startIndex, startIndex + visibleTabs);

  return (
    <div style={{ 
      background: "linear-gradient(135deg, #2E5BBA 0%, #add8e6 100%)",
      fontFamily: "Arial, sans-serif",
      padding: "20px",
      minHeight: "600px"
    }}>
      {/* Container with border radius */}
      <div style={{
        maxWidth: "1200px",
        margin: "0 auto",
        borderRadius: "15px",
        overflow: "hidden",
        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
        position: "relative"
      }}>
        
        {/* Navigation Tabs */}
        <div style={{
          display: "flex",
          background: "#333",
          alignItems: "center"
        }}>
          {/* Left Arrow for Navigation Tabs */}
          <div 
            onClick={navigateTabsLeft}
            style={{
              background: "#E53E3E",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "50px",
              height: "60px",
              cursor: startIndex === 0 ? "not-allowed" : "pointer",
              opacity: startIndex === 0 ? 0.5 : 1,
              transition: "all 0.3s ease"
            }}
          >
            <span style={{ color: "white", fontSize: "18px", fontWeight: "bold" }}>❮</span>
          </div>

          {/* Service Tabs */}
          <div style={{
            display: "flex",
            flex: "1",
            overflow: "hidden",
            transition: "all 0.4s ease-in-out"
          }}>
            {visibleServices.map((tab, index) => (
              <div
                key={startIndex + index}
                onClick={() => handleTabClick(index)}
                style={{
                  flex: "1",
                  padding: "15px 12px",
                  background: (startIndex + index) === activeTab ? "white" : "#333",
                  color: (startIndex + index) === activeTab ? "#333" : "white",
                  textAlign: "center",
                  cursor: "pointer",
                  fontSize: "13px",
                  fontWeight: "600",
                  transition: "all 0.3s ease",
                  borderBottom: (startIndex + index) === activeTab ? "3px solid #4472C4" : "none",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  minWidth: "0",
                  position: "relative",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px"
                }}
                onMouseEnter={(e) => {
                  if ((startIndex + index) !== activeTab) {
                    e.target.style.background = "#444";
                  }
                }}
                onMouseLeave={(e) => {
                  if ((startIndex + index) !== activeTab) {
                    e.target.style.background = "#333";
                  }
                }}
              >
                <span style={{ fontSize: "16px" }}>{tab.icon}</span>
                <span style={{
                  fontSize: "12px",
                  lineHeight: "1.2",
                  fontWeight: "600"
                }}>
                  {tab.title}
                </span>
                {/* Dropdown indicator for Home tab */}
                {(startIndex + index) === 0 && (startIndex + index) === activeTab && (
                  <div style={{
                    position: "absolute",
                    bottom: "5px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: "0",
                    height: "0",
                    borderLeft: "4px solid transparent",
                    borderRight: "4px solid transparent",
                    borderTop: "6px solid #333"
                  }}></div>
                )}
              </div>
            ))}
          </div>

          {/* Right Arrow for Navigation Tabs */}
          <div 
            onClick={navigateTabsRight}
            style={{
              background: "#E53E3E",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "50px",
              height: "60px",
              cursor: startIndex >= allServices.length - visibleTabs ? "not-allowed" : "pointer",
              opacity: startIndex >= allServices.length - visibleTabs ? 0.5 : 1,
              transition: "all 0.3s ease"
            }}
          >
            <span style={{ color: "white", fontSize: "18px", fontWeight: "bold" }}>❯</span>
          </div>
        </div>

        {/* Hero Content */}
        <div style={{
          background: "linear-gradient(135deg, #f5f5f5 0%, #e8e8e8 100%)",
          position: "relative",
          minHeight: "450px"
        }}>
          {slides.map((slide, index) => (
            <div
              key={index}
              style={{
                display: index === current ? "flex" : "none",
                alignItems: "center",
                minHeight: "450px",
                position: "relative"
              }}
            >
              {/* Left Image Section */}
              <div style={{
                flex: "0 0 45%",
                padding: "40px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              }}>
                <img 
                  src={slide.image}
                  alt="Business advertising"
                  style={{
                    width: "100%",
                    maxWidth: "400px",
                    height: "350px",
                    objectFit: "cover",
                    borderRadius: "10px",
                    boxShadow: "0 8px 25px rgba(0,0,0,0.15)"
                  }}
                />
              </div>

              {/* Right Content Section */}
              <div style={{ 
                flex: "1",
                padding: "40px 40px 40px 20px",
                color: "#333"
              }}>
                <h1 style={{
                  fontSize: "42px",
                  fontWeight: "bold",
                  lineHeight: "1.2",
                  margin: "0 0 10px 0",
                  color: "#666"
                }}>
                  {slide.title}
                </h1>
                <h2 style={{
                  fontSize: "42px", 
                  fontWeight: "bold",
                  lineHeight: "1.2",
                  margin: "0 0 25px 0",
                  color: "#333"
                }}>
                  {slide.subtitle}
                </h2>
                
                <p style={{
                  fontSize: "18px",
                  lineHeight: "1.6",
                  margin: "0 0 35px 0",
                  color: "#666",
                  maxWidth: "500px"
                }}>
                  {slide.description}
                </p>

                <button style={{
                  background: "#666",
                  color: "white",
                  padding: "12px 25px",
                  fontSize: "14px",
                  fontWeight: "bold",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                  transition: "all 0.3s ease"
                }}
                onMouseOver={(e) => {
                  e.target.style.background = "#555";
                }}
                onMouseOut={(e) => {
                  e.target.style.background = "#666";
                }}>
                  {slide.button}
                </button>
              </div>

              {/* Navigation Arrows */}
              <button onClick={goPrev} style={{
                position: "absolute",
                left: "20px",
                top: "50%",
                transform: "translateY(-50%)",
                background: "#4472C4",
                border: "none",
                borderRadius: "50%",
                width: "45px",
                height: "45px",
                cursor: "pointer",
                fontSize: "18px",
                color: "white",
                boxShadow: "0 4px 12px rgba(68, 114, 196, 0.3)",
                transition: "all 0.3s ease",
                zIndex: 10
              }}
              onMouseOver={(e) => {
                e.target.style.background = "#3a5ba0";
                e.target.style.transform = "translateY(-50%) scale(1.05)";
              }}
              onMouseOut={(e) => {
                e.target.style.background = "#4472C4";
                e.target.style.transform = "translateY(-50%) scale(1)";
              }}>❮</button>
              
              <button onClick={goNext} style={{
                position: "absolute", 
                right: "20px",
                top: "50%",
                transform: "translateY(-50%)",
                background: "#4472C4",
                border: "none",
                borderRadius: "50%",
                width: "45px",
                height: "45px", 
                cursor: "pointer",
                fontSize: "18px",
                color: "white",
                boxShadow: "0 4px 12px rgba(68, 114, 196, 0.3)",
                transition: "all 0.3s ease",
                zIndex: 10
              }}
              onMouseOver={(e) => {
                e.target.style.background = "#3a5ba0";
                e.target.style.transform = "translateY(-50%) scale(1.05)";
              }}
              onMouseOut={(e) => {
                e.target.style.background = "#4472C4";
                e.target.style.transform = "translateY(-50%) scale(1)";
              }}>❯</button>
            </div>
          ))}
        </div>
      </div>

      {/* Fixed Contact Icons */}
      <div style={{
        position: "fixed",
        left: "0",
        top: "50%",
        transform: "translateY(-50%)",
        zIndex: 1000,
        display: "flex",
        flexDirection: "column",
        gap: "2px"
      }}>
        <div style={{
          backgroundColor: "#E53E3E",
          color: "white",
          padding: "10px 12px",
          borderRadius: "0 6px 6px 0",
          cursor: "pointer",
          fontSize: "16px",
          boxShadow: "0 3px 10px rgba(229, 62, 62, 0.3)",
          transition: "all 0.3s ease"
        }}
        onMouseOver={(e) => {
          e.target.style.transform = "translateX(5px)";
        }}
        onMouseOut={(e) => {
          e.target.style.transform = "translateX(0)";
        }}>📞</div>
        <div style={{
          backgroundColor: "#25D366",
          color: "white", 
          padding: "10px 12px",
          borderRadius: "0 6px 6px 0",
          cursor: "pointer",
          fontSize: "16px",
          boxShadow: "0 3px 10px rgba(37, 211, 102, 0.3)",
          transition: "all 0.3s ease"
        }}
        onMouseOver={(e) => {
          e.target.style.transform = "translateX(5px)";
        }}
        onMouseOut={(e) => {
          e.target.style.transform = "translateX(0)";
        }}>💬</div>
      </div>
    </div>
  );
};

export default Hero;