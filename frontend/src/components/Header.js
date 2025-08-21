import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const navigate = useNavigate();

  const services = [
    {
      column1: [
        "Newspaper Advertising",
        "Cinema Advertising",
        "TV Advertising",
        "Lift Branding",
        "Hyperlocal SMS"
      ],
      column2: [
        "OTT/Media Buying",
        "Digital Marketing",
        "Digital PR",
        "Programmatic Ads",
        "Document Name Correction",
        "Gazette Publication"
      ],
      column3: [
        "Transit Media",
        "Outdoor/DOOH",
        "Radio Advertising",
        "Influencer Marketing"
      ]
    }
  ];

  return (
    <>
             {/* Main Header */}
       <div style={{
         background: "linear-gradient(135deg, #e0f7fa 0%, #b3e5fc 100%)",
         color: "white",
         padding: "4px 0",
         fontFamily: "'Poppins', 'Montserrat', sans-serif",
         position: "relative"
       }}>
        <div style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 20px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}>
          {/* Logo */}
          <div 
            style={{ 
              display: "flex", 
              alignItems: "center",
              cursor: "pointer",
              gap: "15px"
            }}
            onClick={() => navigate('/')}
            onMouseEnter={(e) => e.target.style.opacity = "0.8"}
            onMouseLeave={(e) => e.target.style.opacity = "1"}
          >
                         {/* Company Logo - Completely transparent */}
             <div style={{
               width: "70px",
               height: "70px",
               backgroundColor: "transparent",
               display: "flex",
               alignItems: "center",
               justifyContent: "center"
             }}>
              <img 
                src="/logos/company-logo.png" 
                alt="VipLav Advertising Logo"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain"
                }}
                onError={(e) => {
                  // Fallback if logo fails to load
                  e.target.style.display = "none";
                  e.target.nextSibling.style.display = "flex";
                }}
              />
              {/* Fallback icon if logo doesn't load */}
              <div style={{
                display: "none",
                width: "100%",
                height: "100%",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "24px",
                color: "#4472C4",
                fontWeight: "bold"
              }}>
                🎯
              </div>
            </div>

                         {/* Brand Name - Now transparent background */}
             <div style={{
               backgroundColor: "transparent",
               color: "white",
               padding: "6px 8px",
               borderRadius: "4px",
               fontWeight: "bold",
               fontSize: "10px"
             }}>
              
              <span style={{
                color: "orange",
                borderRadius: "2px",
                marginLeft: "4px",
                fontSize: "35px",
                fontFamily: "'Montserrat', 'Poppins', sans-serif",
                fontWeight: "800",
                textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
                letterSpacing: "2px"
              }}>VIPLAV</span>
              <span style={{ 
                fontSize: "25px", 
                display: "block", 
                marginTop:"-10px",
                fontFamily: "'Poppins', 'Montserrat', sans-serif",
                fontWeight: "600",
                letterSpacing: "1px",
                textShadow: "1px 1px 3px rgba(0,0,0,0.3)"
              }}>ADVERTISING CO.</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div style={{ display: "flex", gap: "25px", fontSize: "17px", alignItems: "center" }}>
            <div 
              style={{ 
                cursor: "pointer", 
                transition: "color 0.3s ease",
                position: "relative"
              }}
              onClick={() => setIsServicesOpen(!isServicesOpen)}
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              Services ▼
              
              {/* Services Dropdown */}
              {isServicesOpen && (
                <div style={{
                  position: "absolute",
                  top: "100%",
                  left: "-350px",
                  backgroundColor: "white",
                  color: "#333",
                  borderRadius: "8px",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
                  padding: "15px",
                  minWidth: "900px",
                  zIndex: 1000,
                  display: "flex",
                  flexDirection: "column",
                  gap: "15px"
                }}>
                  {/* Main Header */}
                  <div style={{
                    textAlign: "center",
                    borderBottom: "3px solid #2E5BBA",
                    paddingBottom: "10px",
                    marginBottom: "15px"
                  }}>
                    <h2 style={{
                      margin: "0",
                      color: "#2E5BBA",
                      fontSize: "22px",
                      fontWeight: "bold"
                    }}>
                      Our Services
                    </h2>
                  </div>

                  {/* Services Columns */}
                  <div style={{
                    display: "flex",
                    gap: "50px"
                  }}>
                    {/* Column 1 */}
                    <div style={{ flex: 1 }}>
                      <h4 style={{ 
                        margin: "0 0 10px 0", 
                        color: "#2E5BBA", 
                        fontSize: "15px",
                        fontWeight: "bold",
                        borderBottom: "2px solid #2E5BBA",
                        paddingBottom: "3px"
                      }}>
                        Traditional Media
                      </h4>
                      {services[0].column1.map((service, index) => (
                        <div 
                          key={index}
                          style={{
                            padding: "5px 0",
                            cursor: "pointer",
                            transition: "color 0.3s ease",
                            fontSize: "13px",
                            display: "flex",
                            alignItems: "center",
                            gap: "8px"
                          }}
                          onMouseEnter={(e) => e.target.style.color = "#2E5BBA"}
                          onMouseLeave={(e) => e.target.style.color = "#333"}
                        >
                          <span style={{ fontSize: "16px" }}>
                            {index === 0 ? "📰" : 
                             index === 1 ? "🎬" : 
                             index === 2 ? "📺" : 
                             index === 3 ? "🛗" : "📱"}
                          </span>
                          {service}
                        </div>
                      ))}
                    </div>

                    {/* Column 2 */}
                    <div style={{ flex: 1 }}>
                      <h4 style={{ 
                        margin: "0 0 10px 0", 
                        color: "#2E5BBA", 
                        fontSize: "15px",
                        fontWeight: "bold",
                        borderBottom: "2px solid #2E5BBA",
                        paddingBottom: "3px"
                      }}>
                        Digital Solutions
                      </h4>
                      {services[0].column2.map((service, index) => (
                        <div 
                          key={index}
                          style={{
                            padding: "5px 0",
                            cursor: "pointer",
                            transition: "color 0.3s ease",
                            fontSize: "13px",
                            display: "flex",
                            alignItems: "center",
                            gap: "8px"
                          }}
                          onMouseEnter={(e) => e.target.style.color = "#2E5BBA"}
                          onMouseLeave={(e) => e.target.style.color = "#333"}
                        >
                          <span style={{ fontSize: "16px" }}>
                            {index === 0 ? "📱" : 
                             index === 1 ? "💻" : 
                             index === 2 ? "📢" : "🎯"}
                          </span>
                          {service}
                        </div>
                      ))}
                    </div>

                    {/* Column 3 */}
                    <div style={{ flex: 1 }}>
                      <h4 style={{ 
                        margin: "0 0 10px 0", 
                        color: "#2E5BBA", 
                        fontSize: "15px",
                        fontWeight: "bold",
                        borderBottom: "2px solid #2E5BBA",
                        paddingBottom: "3px"
                      }}>
                        Outdoor & Transit
                      </h4>
                      {services[0].column3.map((service, index) => (
                        <div 
                          key={index}
                          style={{
                            padding: "5px 0",
                            cursor: "pointer",
                            transition: "color 0.3s ease",
                            fontSize: "13px",
                            display: "flex",
                            alignItems: "center",
                            gap: "8px"
                          }}
                          onMouseEnter={(e) => e.target.style.color = "#2E5BBA"}
                          onMouseLeave={(e) => e.target.style.color = "#333"}
                        >
                          <span style={{ fontSize: "16px" }}>
                            {index === 0 ? "🚌" : 
                             index === 1 ? "🏢" : 
                             index === 2 ? "📻" : "🌟"}
                          </span>
                          {service}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div style={{ cursor: "pointer", transition: "color 0.3s ease" }}>Blog</div>
            <div 
              style={{ 
                cursor: "pointer", 
                transition: "color 0.3s ease",
                fontWeight: "bold"
              }}
              onClick={() => navigate('/how-to-book')}
              onMouseEnter={(e) => e.target.style.color = "#FFD700"}
              onMouseLeave={(e) => e.target.style.color = "white"}
            >
              How to book
            </div>
            <div style={{ cursor: "pointer", transition: "color 0.3s ease" }}>Login</div>
            <div style={{ cursor: "pointer", transition: "color 0.3s ease" }}>🛒 Cart (0)</div>
            <div style={{
              cursor: "pointer",
              backgroundColor: "#E53E3E",
              padding: "6px 12px",
              borderRadius: "4px",
              fontWeight: "bold",
              transition: "all 0.3s ease"
            }}
            onMouseOver={(e) => e.target.style.backgroundColor = "#cc3333"}
            onMouseOut={(e) => e.target.style.backgroundColor = "#E53E3E"}>
              Contact us
            </div>
          </div>
        </div>
      </div>


      {/* <div style={{
        backgroundColor: "#5B7BD6",
        color: "white",
        fontFamily: "Arial, sans-serif"
      }}>
        <div style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex"
        }}>
          <div style={{
            backgroundColor: "rgba(255,255,255,0.2)",
            padding: "12px 10px",
            cursor: "pointer",
            transition: "background-color 0.3s ease"
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = "rgba(255,255,255,0.3)"}
          onMouseOut={(e) => e.target.style.backgroundColor = "rgba(255,255,255,0.2)"}>❮</div>

          <div style={{ display: "flex", flex: 1 }}>
            <div style={{
              padding: "12px 20px",
              backgroundColor: "rgba(255,255,255,0.1)",
              borderBottom: "2px solid white",
              cursor: "pointer",
              fontSize: "13px",
              transition: "background-color 0.3s ease"
            }}>🏠 Home</div>
            <div style={{
              padding: "12px 20px",
              backgroundColor: "rgba(0,0,0,0.2)",
              cursor: "pointer",
              fontSize: "13px",
              transition: "background-color 0.3s ease"
            }}
            onMouseOver={(e) => e.target.style.backgroundColor = "rgba(0,0,0,0.3)"}
            onMouseOut={(e) => e.target.style.backgroundColor = "rgba(0,0,0,0.2)"}>📰 Newspaper Advertising</div>
            <div style={{ 
              padding: "12px 20px", 
              cursor: "pointer", 
              fontSize: "13px",
              transition: "background-color 0.3s ease"
            }}
            onMouseOver={(e) => e.target.style.backgroundColor = "rgba(255,255,255,0.1)"}
            onMouseOut={(e) => e.target.style.backgroundColor = "transparent"}>
              💻 Digital Marketing
            </div>
            <div style={{ 
              padding: "12px 20px", 
              cursor: "pointer", 
              fontSize: "13px",
              transition: "background-color 0.3s ease"
            }}
            onMouseOver={(e) => e.target.style.backgroundColor = "rgba(255,255,255,0.1)"}
            onMouseOut={(e) => e.target.style.backgroundColor = "transparent"}>
              📻 Radio Advertising
            </div>
            <div style={{ 
              padding: "12px 20px", 
              cursor: "pointer", 
              fontSize: "13px",
              transition: "background-color 0.3s ease"
            }}
            onMouseOver={(e) => e.target.style.backgroundColor = "rgba(255,255,255,0.1)"}
            onMouseOut={(e) => e.target.style.backgroundColor = "transparent"}>
              🎬 Cinema Advertising
            </div>
          </div>

          <div style={{
            backgroundColor: "#E53E3E",
            padding: "12px 10px",
            cursor: "pointer",
            transition: "background-color 0.3s ease"
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = "#cc3333"}
          onMouseOut={(e) => e.target.style.backgroundColor = "#E53E3E"}>❯</div>
        </div>
      </div> */}

      {/* Enhanced Fixed Call Back Button */}
      <div style={{
        position: "fixed",
        right: "0",
        top: "50%",
        transform: "translateY(-50%)",
        background: "linear-gradient(45deg, #E53E3E, #ff4757)",
        color: "white",
        padding: "15px 8px",
        writingMode: "vertical-rl",
        cursor: "pointer",
        zIndex: 1000,
        fontSize: "13px",
        fontWeight: "bold",
        borderRadius: "8px 0 0 8px",
        boxShadow: "0 5px 20px rgba(229, 62, 62, 0.4)",
        transition: "all 0.3s ease",
        textTransform: "uppercase",
        letterSpacing: "1px"
      }}
      onMouseOver={(e) => {
        e.target.style.transform = "translateY(-50%) translateX(-5px)";
        e.target.style.boxShadow = "0 8px 30px rgba(229, 62, 62, 0.6)";
      }}
      onMouseOut={(e) => {
        e.target.style.transform = "translateY(-50%) translateX(0)";
        e.target.style.boxShadow = "0 5px 20px rgba(229, 62, 62, 0.4)";
      }}>
        📞 Call Back
      </div>
    </>
  );
};

export default Header;