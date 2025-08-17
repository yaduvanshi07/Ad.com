import React, { useState } from 'react';

const HowToBook = () => {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      id: "newspaper",
      name: "Newspaper Advertising",
      icon: "📰",
      description: "Book ads in leading newspapers across India",
      color: "#2E5BBA",
      steps: [
        {
          number: "01",
          title: "Select Newspaper & Edition",
          description: "Choose from our network of 500+ newspapers and select your preferred edition (Morning/Evening)",
          details: ["Browse newspaper list", "Select edition", "Choose publication date", "Check circulation numbers"]
        },
        {
          number: "02",
          title: "Choose Ad Type & Size",
          description: "Select from Display Ads, Classified Ads, or Special Categories based on your needs",
          details: ["Display advertisement", "Classified advertisement", "Matrimonial ads", "Obituary notices", "Tender notices"]
        },
        {
          number: "03",
          title: "Design & Content",
          description: "Upload your ad design or use our professional design services",
          details: ["Upload ad design", "Provide ad content", "Choose fonts & colors", "Review mockup", "Finalize design"]
        },
        {
          number: "04",
          title: "Book & Confirm",
          description: "Review pricing, make payment, and get instant confirmation",
          details: ["Review quote", "Make payment", "Get confirmation", "Receive ad proof", "Track publication"]
        }
      ]
    },
    {
      id: "digital",
      name: "Digital Marketing",
      icon: "💻",
      description: "Complete digital marketing solutions to boost your online presence",
      color: "#E53E3E",
      steps: [
        {
          number: "01",
          title: "Campaign Strategy",
          description: "Our experts analyze your business and create a customized digital marketing strategy",
          details: ["Business analysis", "Target audience research", "Competitor analysis", "Strategy development", "Budget planning"]
        },
        {
          number: "02",
          title: "Channel Selection",
          description: "Choose from SEO, PPC, Social Media, Email Marketing, or comprehensive packages",
          details: ["Search Engine Optimization", "Pay Per Click", "Social Media Marketing", "Email Marketing", "Content Marketing"]
        },
        {
          number: "03",
          title: "Implementation",
          description: "Our team implements the strategy with regular monitoring and optimization",
          details: ["Campaign setup", "Content creation", "Ad management", "Performance monitoring", "Regular optimization"]
        },
        {
          number: "04",
          title: "Reporting & Growth",
          description: "Get detailed reports and continuous optimization for maximum ROI",
          details: ["Weekly reports", "Performance analysis", "Strategy adjustments", "ROI tracking", "Growth planning"]
        }
      ]
    },
    {
      id: "radio",
      name: "Radio Advertising",
      icon: "📻",
      description: "Reach millions through strategic radio campaigns",
      color: "#38A169",
      steps: [
        {
          number: "01",
          title: "Station Selection",
          description: "Choose from our network of radio stations across different cities and regions",
          details: ["Browse radio stations", "Check listenership", "Select time slots", "Choose programs", "Review rates"]
        },
        {
          number: "02",
          title: "Campaign Planning",
          description: "Plan your radio campaign with optimal timing and frequency",
          details: ["Campaign duration", "Ad frequency", "Time slot selection", "Program sponsorship", "RJ mentions"]
        },
        {
          number: "03",
          title: "Creative Development",
          description: "Create compelling radio ads with professional voice artists and music",
          details: ["Script writing", "Voice recording", "Music selection", "Sound effects", "Ad production"]
        },
        {
          number: "04",
          title: "Launch & Monitor",
          description: "Launch your campaign and monitor performance with detailed reports",
          details: ["Campaign launch", "Performance tracking", "Listener feedback", "Ad rotation", "Success metrics"]
        }
      ]
    },
    {
      id: "cinema",
      name: "Cinema Advertising",
      icon: "🎬",
      description: "Advertise in cinema halls nationwide with maximum impact",
      color: "#9F7AEA",
      steps: [
        {
          number: "01",
          title: "Cinema Selection",
          description: "Choose from our network of cinema halls and multiplexes across India",
          details: ["Browse cinema list", "Check footfall", "Select locations", "Choose movie genres", "Review demographics"]
        },
        {
          number: "02",
          title: "Ad Format & Duration",
          description: "Select from various ad formats and durations for maximum impact",
          details: ["Pre-show ads", "Intermission ads", "Lobby displays", "Standee placement", "Branded content"]
        },
        {
          number: "03",
          title: "Creative Production",
          description: "Create high-impact video ads optimized for cinema viewing",
          details: ["Video production", "High-resolution format", "Sound optimization", "Visual effects", "Brand integration"]
        },
        {
          number: "04",
          title: "Scheduling & Launch",
          description: "Schedule your ads and launch across selected cinema halls",
          details: ["Ad scheduling", "Cinema coordination", "Quality checks", "Launch monitoring", "Audience feedback"]
        }
      ]
    },
    {
      id: "tv",
      name: "TV Advertising",
      icon: "📺",
      description: "Broadcast your message to millions across India",
      color: "#F6AD55",
      steps: [
        {
          number: "01",
          title: "Channel & Time Selection",
          description: "Choose from national and regional TV channels with optimal time slots",
          details: ["Channel selection", "Prime time slots", "Program sponsorship", "Regional coverage", "Audience targeting"]
        },
        {
          number: "02",
          title: "Campaign Strategy",
          description: "Develop a comprehensive TV advertising strategy for maximum reach",
          details: ["Target audience", "Geographic coverage", "Campaign duration", "Ad frequency", "Budget allocation"]
        },
        {
          number: "03",
          title: "Ad Production",
          description: "Create compelling TV commercials with professional production quality",
          details: ["Script development", "Video production", "Editing & post-production", "Sound design", "Quality testing"]
        },
        {
          number: "04",
          title: "Broadcast & Analytics",
          description: "Launch your campaign and track performance with detailed analytics",
          details: ["Campaign launch", "Viewership tracking", "Performance metrics", "ROI analysis", "Optimization"]
        }
      ]
    },
    {
      id: "outdoor",
      name: "Outdoor Advertising",
      icon: "🏢",
      description: "Dominate outdoor spaces with strategic billboard and hoarding placements",
      color: "#4FD1C7",
      steps: [
        {
          number: "01",
          title: "Location Selection",
          description: "Choose strategic outdoor locations for maximum visibility and impact",
          details: ["High-traffic areas", "Strategic locations", "Visibility analysis", "Demographic study", "Competition check"]
        },
        {
          number: "02",
          title: "Format & Size",
          description: "Select from various outdoor advertising formats and sizes",
          details: ["Billboards", "Hoardings", "Bus shelters", "Transit media", "Digital displays"]
        },
        {
          number: "03",
          title: "Design & Production",
          description: "Create eye-catching outdoor designs that work in all weather conditions",
          details: ["Design creation", "Weather-proofing", "Print production", "Installation planning", "Quality checks"]
        },
        {
          number: "04",
          title: "Installation & Maintenance",
          description: "Install your ads and maintain them for optimal performance",
          details: ["Professional installation", "Regular maintenance", "Performance monitoring", "Damage assessment", "Replacement planning"]
        }
      ]
    }
  ];

  const benefits = [
    {
      icon: "⚡",
      title: "Quick Booking",
      description: "Book your advertising campaign in minutes with our streamlined process"
    },
    {
      icon: "🎯",
      title: "Expert Guidance",
      description: "Get professional advice from our experienced media planners"
    },
    {
      icon: "💰",
      title: "Best Prices",
      description: "Guaranteed best rates with our extensive vendor network"
    },
    {
      icon: "📊",
      title: "Transparent Reporting",
      description: "Real-time campaign performance updates and detailed analytics"
    }
  ];

  const contactMethods = [
    {
      icon: "📞",
      title: "Call Us",
      description: "+91 98765 43210",
      action: "Call Now"
    },
    {
      icon: "💬",
      title: "WhatsApp",
      description: "Send us a message",
      action: "Chat Now"
    },
    {
      icon: "📧",
      title: "Email",
      description: "info@viplavadvertising.com",
      action: "Send Email"
    },
    {
      icon: "🏢",
      title: "Visit Office",
      description: "Schedule a meeting",
      action: "Book Appointment"
    }
  ];

  const handleServiceSelect = (service) => {
    setSelectedService(service);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const resetSelection = () => {
    setSelectedService(null);
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f8f9fa' }}>
      {/* Hero Section */}
      <div style={{
        
        background: "linear-gradient(135deg,rgb(236, 239, 241) 0%,rgb(237, 239, 243) 100%)",
        color: "white",
        padding: "80px 20px",
        textAlign: "center"
      }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h1 style={{
            fontSize: "48px",
            fontWeight: "bold",
            marginBottom: "20px"
          }}>
            How to Book Your Advertising Campaign
          </h1>
          <p style={{
            fontSize: "20px",
            maxWidth: "600px",
            margin: "0 auto",
            opacity: "0.9"
          }}>
            Choose your service and follow simple steps to get started with Viplav Advertising
          </p>
        </div>
      </div>

      {/* Service Selection Section */}
      {!selectedService && (
        <div style={{ padding: "80px 20px" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <h2 style={{
              textAlign: "center",
              fontSize: "36px",
              color: "#2E5BBA",
              marginBottom: "20px"
            }}>
              Choose Your Advertising Service
            </h2>
            <p style={{
              textAlign: "center",
              fontSize: "18px",
              color: "#666",
              marginBottom: "60px",
              maxWidth: "600px",
              margin: "0 auto 60px"
            }}>
              Select the service you want to book and we'll show you exactly how to get started
            </p>
            
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
              gap: "30px"
            }}>
              {services.map((service) => (
                <div 
                  key={service.id}
                  style={{
                    backgroundColor: "white",
                    borderRadius: "16px",
                    padding: "30px",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                    textAlign: "center",
                    transition: "all 0.3s ease",
                    cursor: "pointer",
                    border: `3px solid transparent`
                  }}
                  onClick={() => handleServiceSelect(service)}
                  onMouseEnter={(e) => {
                    e.target.style.transform = "translateY(-5px)";
                    e.target.style.borderColor = service.color;
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = "translateY(0)";
                    e.target.style.borderColor = "transparent";
                  }}
                >
                  <div style={{
                    fontSize: "48px",
                    marginBottom: "20px"
                  }}>
                    {service.icon}
                  </div>
                  <h3 style={{
                    fontSize: "24px",
                    color: service.color,
                    marginBottom: "15px"
                  }}>
                    {service.name}
                  </h3>
                  <p style={{
                    color: "#666",
                    lineHeight: "1.6",
                    marginBottom: "20px"
                  }}>
                    {service.description}
                  </p>
                  <button style={{
                    backgroundColor: service.color,
                    color: "white",
                    border: "none",
                    padding: "12px 24px",
                    borderRadius: "8px",
                    fontSize: "16px",
                    fontWeight: "bold",
                    cursor: "pointer",
                    transition: "all 0.3s ease"
                  }}
                  onMouseEnter={(e) => e.target.style.transform = "scale(1.05)"}
                  onMouseLeave={(e) => e.target.style.transform = "scale(1)"}>
                    Choose This Service
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Service-Specific Steps Section */}
      {selectedService && (
        <div style={{ padding: "80px 20px" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            {/* Back Button */}
            <div style={{
              textAlign: "left",
              marginBottom: "30px"
            }}>
              <button 
                onClick={resetSelection}
                style={{
                  backgroundColor: "#666",
                  color: "white",
                  border: "none",
                  padding: "10px 20px",
                  borderRadius: "8px",
                  fontSize: "16px",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  transition: "all 0.3s ease"
                }}
                onMouseEnter={(e) => e.target.style.backgroundColor = "#555"}
                onMouseLeave={(e) => e.target.style.backgroundColor = "#666"}
              >
                ← Back to Services
              </button>
            </div>

            {/* Service Header */}
            <div style={{
              textAlign: "center",
              marginBottom: "60px"
            }}>
              <div style={{
                fontSize: "48px",
                marginBottom: "20px"
              }}>
                {selectedService.icon}
              </div>
              <h2 style={{
                fontSize: "36px",
                color: selectedService.color,
                marginBottom: "15px"
              }}>
                {selectedService.name}
              </h2>
              <p style={{
                fontSize: "18px",
                color: "#666",
                maxWidth: "600px",
                margin: "0 auto"
              }}>
                {selectedService.description}
              </p>
            </div>

            {/* Steps */}
            <h3 style={{
              textAlign: "center",
              fontSize: "28px",
              color: "#2E5BBA",
              marginBottom: "50px"
            }}>
              How to Book {selectedService.name}
            </h3>
            
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "30px"
            }}>
              {selectedService.steps.map((step, index) => (
                <div key={index} style={{
                  backgroundColor: "white",
                  borderRadius: "16px",
                  padding: "30px",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                  textAlign: "center",
                  transition: "transform 0.3s ease",
                  border: `3px solid ${selectedService.color}20`
                }}
                onMouseEnter={(e) => e.target.style.transform = "translateY(-5px)"}
                onMouseLeave={(e) => e.target.style.transform = "translateY(0)"}>
                  <div style={{
                    backgroundColor: selectedService.color,
                    color: "white",
                    width: "60px",
                    height: "60px",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "24px",
                    fontWeight: "bold",
                    margin: "0 auto 20px"
                  }}>
                    {step.number}
                  </div>
                  <h4 style={{
                    fontSize: "22px",
                    color: selectedService.color,
                    marginBottom: "15px"
                  }}>
                    {step.title}
                  </h4>
                  <p style={{
                    color: "#666",
                    lineHeight: "1.6",
                    marginBottom: "20px"
                  }}>
                    {step.description}
                  </p>
                  <ul style={{
                    textAlign: "left",
                    listStyle: "none",
                    padding: "0"
                  }}>
                    {step.details.map((detail, idx) => (
                      <li key={idx} style={{
                        padding: "8px 0",
                        borderBottom: "1px solid #eee",
                        color: "#555",
                        fontSize: "14px"
                      }}>
                        ✓ {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Get Started Button */}
            <div style={{
              textAlign: "center",
              marginTop: "50px"
            }}>
              <button style={{
                backgroundColor: selectedService.color,
                color: "white",
                border: "none",
                padding: "18px 36px",
                borderRadius: "12px",
                fontSize: "20px",
                fontWeight: "bold",
                cursor: "pointer",
                transition: "all 0.3s ease",
                boxShadow: `0 8px 25px ${selectedService.color}40`
              }}
              onMouseEnter={(e) => e.target.style.transform = "scale(1.05)"}
              onMouseLeave={(e) => e.target.style.transform = "scale(1)"}>
                Get Started with {selectedService.name}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Benefits Section */}
      <div style={{ 
        backgroundColor: "white", 
        padding: "80px 20px" 
      }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{
            textAlign: "center",
            fontSize: "36px",
            color: "#2E5BBA",
            marginBottom: "60px"
          }}>
            Why Choose VipLav Advertising?
          </h2>
          
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "30px"
          }}>
            {benefits.map((benefit, index) => (
              <div key={index} style={{
                textAlign: "center",
                padding: "30px 20px"
              }}>
                <div style={{
                  fontSize: "36px",
                  marginBottom: "20px"
                }}>
                  {benefit.icon}
                </div>
                <h3 style={{
                  fontSize: "22px",
                  color: "#2E5BBA",
                  marginBottom: "15px"
                }}>
                  {benefit.title}
                </h3>
                <p style={{
                  color: "#666",
                  lineHeight: "1.6"
                }}>
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div style={{ 
        backgroundColor: "#2E5BBA", 
        color: "white",
        padding: "80px 20px" 
      }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{
            textAlign: "center",
            fontSize: "36px",
            marginBottom: "60px"
          }}>
            Ready to Get Started?
          </h2>
          
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "30px"
          }}>
            {contactMethods.map((method, index) => (
              <div key={index} style={{
                backgroundColor: "rgba(255,255,255,0.1)",
                borderRadius: "12px",
                padding: "30px",
                textAlign: "center",
                backdropFilter: "blur(10px)"
              }}>
                <div style={{
                  fontSize: "36px",
                  marginBottom: "20px"
                }}>
                  {method.icon}
                </div>
                <h3 style={{
                  fontSize: "22px",
                  marginBottom: "10px"
                }}>
                  {method.title}
                </h3>
                <p style={{
                  marginBottom: "20px",
                  opacity: "0.9"
                }}>
                  {method.description}
                </p>
                <button style={{
                  backgroundColor: "white",
                  color: "#2E5BBA",
                  border: "none",
                  padding: "12px 24px",
                  borderRadius: "8px",
                  fontSize: "16px",
                  fontWeight: "bold",
                  cursor: "pointer",
                  transition: "all 0.3s ease"
                }}
                onMouseEnter={(e) => e.target.style.transform = "scale(1.05)"}
                onMouseLeave={(e) => e.target.style.transform = "scale(1)"}>
                  {method.action}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowToBook;
