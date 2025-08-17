import React, { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Main Header */}
      <div style={{
        background: "linear-gradient(135deg, #2E5BBA 0%, #add8e6 100%)",
        color: "white",
        padding: "8px 0",
        fontFamily: "Arial, sans-serif"
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
          <div style={{ display: "flex", alignItems: "center" }}>
            <div style={{
              backgroundColor: "#4472C4",
              color: "white",
              padding: "10px 10px",
              borderRadius: "4px",
              fontWeight: "bold",
              fontSize: "10px"
            }}>
              
              <span style={{
                // backgroundColor: "white",
                color: "orange",
                // padding: "0px 0px",
                borderRadius: "2px",
                marginLeft: "4px",
                fontSize: "35px"
              }}>VIPLAV </span>
              <span style={{ fontSize: "25px", display: "block", marginTop:"-10px" }}>ADVERTISING COMPANY</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div style={{ display: "flex", gap: "25px", fontSize: "17px", alignItems: "center" }}>
            <div style={{ cursor: "pointer", transition: "color 0.3s ease" }}>Services ▼</div>
            <div style={{ cursor: "pointer", transition: "color 0.3s ease" }}>Blog</div>
            <div style={{ cursor: "pointer", transition: "color 0.3s ease" }}>How to book</div>
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