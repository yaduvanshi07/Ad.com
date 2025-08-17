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

  const navigationTabs = [
    { icon: "🏠", title: "Home", active: true },
    { icon: "📰", title: "Newspaper Advertising" },
    { icon: "💻", title: "Digital Marketing" },
    { icon: "📻", title: "Radio Advertising" },
    { icon: "🎬", title: "Cinema Advertising" }
  ];

  const [current, setCurrent] = useState(0);
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const goPrev = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  const goNext = () => setCurrent((prev) => (prev + 1) % slides.length);

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
          background: "#333"
        }}>
          {/* Left Arrow for Navigation */}
          <div style={{
            background: "rgba(255, 192, 203, 0.8)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "50px",
            cursor: "pointer"
          }}>
            <span style={{ color: "white", fontSize: "16px" }}>❮</span>
          </div>

          {navigationTabs.map((tab, index) => (
            <div
              key={index}
              onClick={() => setActiveTab(index)}
              style={{
                flex: "1",
                padding: "15px 20px",
                background: index === activeTab ? "white" : "#333",
                color: index === activeTab ? "#333" : "white",
                textAlign: "center",
                cursor: "pointer",
                fontSize: "14px",
                fontWeight: "500",
                transition: "all 0.3s ease",
                borderBottom: index === activeTab ? "3px solid #4472C4" : "none"
              }}
            >
              <span style={{ marginRight: "8px" }}>{tab.icon}</span>
              {tab.title}
            </div>
          ))}

          {/* Right Arrow for Navigation */}
          <div style={{
            background: "#E53E3E",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "50px",
            cursor: "pointer"
          }}>
            <span style={{ color: "white", fontSize: "16px" }}>❯</span>
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