import React, { useState, useEffect } from 'react';

const TVAdvertising = () => {
  const [selectedChannel, setSelectedChannel] = useState(null);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [animateNumbers, setAnimateNumbers] = useState(false);

  useEffect(() => {
    // Animate numbers on component mount
    const timer = setTimeout(() => setAnimateNumbers(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const channelCategories = [
    {
      category: "News Channels",
      icon: "📺",
      channels: [
        { name: "Aaj Tak", viewership: "95M", rate: "₹2,50,000", prime: true },
        { name: "Times Now", viewership: "60M", rate: "₹1,80,000", prime: true },
        { name: "NDTV", viewership: "45M", rate: "₹1,50,000", prime: false },
        { name: "Republic TV", viewership: "70M", rate: "₹2,00,000", prime: true }
      ]
    },
    {
      category: "Entertainment",
      icon: "🎭",
      channels: [
        { name: "Colors TV", viewership: "120M", rate: "₹3,50,000", prime: true },
        { name: "Star Plus", viewership: "140M", rate: "₹4,00,000", prime: true },
        { name: "Zee TV", viewership: "110M", rate: "₹3,20,000", prime: true },
        { name: "Sony TV", viewership: "100M", rate: "₹3,00,000", prime: true }
      ]
    },
    {
      category: "Sports Channels",
      icon: "⚽",
      channels: [
        { name: "Star Sports", viewership: "80M", rate: "₹5,00,000", prime: true },
        { name: "Sony Sports", viewership: "65M", rate: "₹4,20,000", prime: true },
        { name: "ESPN", viewership: "40M", rate: "₹2,80,000", prime: false }
      ]
    },
    {
      category: "Regional",
      icon: "🏛️",
      channels: [
        { name: "Sun TV", viewership: "85M", rate: "₹2,20,000", prime: true },
        { name: "Asianet", viewership: "50M", rate: "₹1,60,000", prime: false },
        { name: "ETV Telugu", viewership: "75M", rate: "₹2,00,000", prime: true }
      ]
    }
  ];

  const timeSlots = [
    {
      slot: "Prime Time (7 PM - 11 PM)",
      icon: "🌟",
      multiplier: "3x",
      description: "Maximum viewership hours",
      color: "#FFD700"
    },
    {
      slot: "Morning (6 AM - 12 PM)",
      icon: "🌅",
      multiplier: "1.5x",
      description: "News and morning shows",
      color: "#FF6B6B"
    },
    {
      slot: "Afternoon (12 PM - 6 PM)",
      icon: "☀️",
      multiplier: "1.2x",
      description: "Daily soaps and movies",
      color: "#4ECDC4"
    },
    {
      slot: "Late Night (11 PM - 6 AM)",
      icon: "🌙",
      multiplier: "0.8x",
      description: "Movies and repeat telecasts",
      color: "#A8E6CF"
    }
  ];

  const adFormats = [
    {
      format: "Commercial Spots",
      duration: "10-30 seconds",
      description: "Traditional TV commercials during program breaks",
      icon: "⏱️",
      pricing: "₹50K - ₹5L per spot"
    },
    {
      format: "Sponsorship Tags",
      duration: "5-10 seconds",
      description: "Brand mentions with 'Powered by' or 'Presented by'",
      icon: "🏷️",
      pricing: "₹30K - ₹2L per episode"
    },
    {
      format: "Program Integration",
      duration: "Variable",
      description: "Product placement within shows and programs",
      icon: "🎬",
      pricing: "₹1L - ₹10L per integration"
    },
    {
      format: "Ticker Ads",
      duration: "Continuous",
      description: "Running text ads during news programs",
      icon: "📊",
      pricing: "₹20K - ₹1L per day"
    }
  ];

  const packages = [
    {
      name: "Starter Package",
      icon: "🚀",
      price: "₹2,50,000",
      duration: "1 Week",
      features: [
        "5 Commercial Spots Daily",
        "2 Prime Time Slots",
        "Basic Analytics",
        "Single Channel Focus"
      ],
      channels: "1-2 Channels",
      reach: "50M+ Viewers"
    },
    {
      name: "Professional Package",
      icon: "💼",
      price: "₹8,50,000",
      duration: "1 Month",
      features: [
        "15 Commercial Spots Daily",
        "6 Prime Time Slots",
        "Detailed Analytics",
        "Multi-Channel Coverage",
        "Creative Support"
      ],
      channels: "5-8 Channels",
      reach: "200M+ Viewers",
      popular: true
    },
    {
      name: "Enterprise Package",
      icon: "🏢",
      price: "₹25,00,000",
      duration: "3 Months",
      features: [
        "Unlimited Commercial Spots",
        "Premium Prime Time Slots",
        "Advanced Analytics",
        "Pan-India Coverage",
        "Dedicated Account Manager",
        "Creative Production"
      ],
      channels: "15+ Channels",
      reach: "500M+ Viewers"
    }
  ];

  const stats = [
    { label: "TV Households in India", value: "210M+", icon: "🏠" },
    { label: "Daily TV Viewers", value: "900M+", icon: "👥" },
    { label: "Average Viewing Time", value: "3.5 hrs", icon: "⏰" },
    { label: "Ad Recall Rate", value: "75%", icon: "🧠" }
  ];

  const handleBookSlot = () => {
    if (selectedChannel && selectedTimeSlot) {
      alert(`Booking request for ${selectedChannel.name} during ${selectedTimeSlot.slot}. Our team will contact you shortly!`);
    } else {
      alert('Please select both a channel and time slot to proceed.');
    }
  };

  return (
    <div style={{ fontFamily: "'Poppins', sans-serif", backgroundColor: "#f8fafc" }}>
      {/* Hero Section */}
      <div style={{
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        color: "white",
        padding: "80px 20px",
        textAlign: "center"
      }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ fontSize: "60px", marginBottom: "20px" }}>📺</div>
          <h1 style={{
            fontSize: "48px",
            fontWeight: "800",
            marginBottom: "20px",
            textShadow: "2px 2px 4px rgba(0,0,0,0.3)"
          }}>
            TV Advertising
          </h1>
          <p style={{
            fontSize: "20px",
            maxWidth: "600px",
            margin: "0 auto 40px",
            lineHeight: "1.6",
            opacity: "0.9"
          }}>
            Captivate your audience in the ultimate immersive environment. TV advertising 
            offers unparalleled attention and engagement, reaching viewers when they're most 
            receptive to your message.
          </p>
          <button style={{
            background: "linear-gradient(45deg, #FF6B6B, #FF8E8E)",
            color: "white",
            border: "none",
            padding: "15px 40px",
            fontSize: "18px",
            fontWeight: "bold",
            borderRadius: "30px",
            cursor: "pointer",
            boxShadow: "0 8px 25px rgba(255, 107, 107, 0.3)",
            transition: "transform 0.3s ease"
          }}
          onMouseOver={(e) => e.target.style.transform = "translateY(-3px)"}
          onMouseOut={(e) => e.target.style.transform = "translateY(0)"}
          onClick={handleBookSlot}>
            Start TV Campaign
          </button>
        </div>
      </div>

      {/* Stats Section */}
      <div style={{
        padding: "60px 20px",
        backgroundColor: "white"
      }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{
            textAlign: "center",
            fontSize: "36px",
            marginBottom: "50px",
            color: "#2d3748"
          }}>
            TV Advertising Impact
          </h2>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "30px"
          }}>
            {stats.map((stat, index) => (
              <div key={index} style={{
                textAlign: "center",
                padding: "30px",
                backgroundColor: "#f7fafc",
                borderRadius: "15px",
                border: "1px solid #e2e8f0",
                transition: "transform 0.3s ease"
              }}
              onMouseOver={(e) => e.target.style.transform = "translateY(-5px)"}
              onMouseOut={(e) => e.target.style.transform = "translateY(0)"}>
                <div style={{ fontSize: "40px", marginBottom: "15px" }}>{stat.icon}</div>
                <div style={{
                  fontSize: animateNumbers ? "32px" : "24px",
                  fontWeight: "bold",
                  color: "#667eea",
                  marginBottom: "10px",
                  transition: "font-size 0.5s ease"
                }}>
                  {stat.value}
                </div>
                <div style={{ fontSize: "16px", color: "#718096" }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Channel Categories */}
      <div style={{ padding: "80px 20px", backgroundColor: "#f7fafc" }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
          <h2 style={{
            textAlign: "center",
            fontSize: "36px",
            marginBottom: "20px",
            color: "#2d3748"
          }}>
            Choose Your TV Channels
          </h2>
          <p style={{
            textAlign: "center",
            fontSize: "18px",
            color: "#718096",
            marginBottom: "50px"
          }}>
            Select from premium TV channels across different categories
          </p>
          
          {channelCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} style={{ marginBottom: "50px" }}>
              <h3 style={{
                fontSize: "24px",
                fontWeight: "bold",
                color: "#4a5568",
                marginBottom: "20px",
                display: "flex",
                alignItems: "center",
                gap: "10px"
              }}>
                <span style={{ fontSize: "28px" }}>{category.icon}</span>
                {category.category}
              </h3>
              
              <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: "20px"
              }}>
                {category.channels.map((channel, channelIndex) => (
                  <div key={channelIndex}
                    style={{
                      backgroundColor: selectedChannel?.name === channel.name ? "#667eea" : "white",
                      color: selectedChannel?.name === channel.name ? "white" : "#2d3748",
                      padding: "25px",
                      borderRadius: "15px",
                      border: `2px solid ${selectedChannel?.name === channel.name ? "#667eea" : "#e2e8f0"}`,
                      cursor: "pointer",
                      transition: "all 0.3s ease",
                      position: "relative",
                      boxShadow: selectedChannel?.name === channel.name ? "0 10px 30px rgba(102, 126, 234, 0.3)" : "0 5px 15px rgba(0,0,0,0.08)"
                    }}
                    onClick={() => setSelectedChannel(channel)}
                    onMouseOver={(e) => {
                      if (selectedChannel?.name !== channel.name) {
                        e.target.style.transform = "translateY(-3px)";
                        e.target.style.boxShadow = "0 8px 25px rgba(0,0,0,0.15)";
                      }
                    }}
                    onMouseOut={(e) => {
                      if (selectedChannel?.name !== channel.name) {
                        e.target.style.transform = "translateY(0)";
                        e.target.style.boxShadow = "0 5px 15px rgba(0,0,0,0.08)";
                      }
                    }}>
                    
                    {channel.prime && (
                      <div style={{
                        position: "absolute",
                        top: "10px",
                        right: "10px",
                        backgroundColor: "#FFD700",
                        color: "#2d3748",
                        padding: "4px 8px",
                        borderRadius: "12px",
                        fontSize: "12px",
                        fontWeight: "bold"
                      }}>
                        PRIME
                      </div>
                    )}
                    
                    <h4 style={{
                      fontSize: "20px",
                      fontWeight: "bold",
                      marginBottom: "10px"
                    }}>
                      {channel.name}
                    </h4>
                    <div style={{ marginBottom: "8px" }}>
                      <strong>Viewership:</strong> {channel.viewership}
                    </div>
                    <div style={{
                      fontSize: "18px",
                      fontWeight: "bold",
                      color: selectedChannel?.name === channel.name ? "#FFD700" : "#667eea"
                    }}>
                      Starting at {channel.rate}/spot
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Time Slots Section */}
      <div style={{ padding: "80px 20px", backgroundColor: "white" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{
            textAlign: "center",
            fontSize: "36px",
            marginBottom: "20px",
            color: "#2d3748"
          }}>
            Select Time Slots
          </h2>
          <p style={{
            textAlign: "center",
            fontSize: "18px",
            color: "#718096",
            marginBottom: "50px"
          }}>
            Choose optimal timing for maximum audience reach
          </p>
          
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "25px"
          }}>
            {timeSlots.map((slot, index) => (
              <div key={index}
                style={{
                  backgroundColor: selectedTimeSlot?.slot === slot.slot ? slot.color : "white",
                  color: selectedTimeSlot?.slot === slot.slot ? "white" : "#2d3748",
                  padding: "30px",
                  borderRadius: "20px",
                  border: `3px solid ${selectedTimeSlot?.slot === slot.slot ? slot.color : "#e2e8f0"}`,
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  textAlign: "center",
                  boxShadow: selectedTimeSlot?.slot === slot.slot ? `0 15px 35px ${slot.color}40` : "0 5px 15px rgba(0,0,0,0.08)"
                }}
                onClick={() => setSelectedTimeSlot(slot)}
                onMouseOver={(e) => {
                  if (selectedTimeSlot?.slot !== slot.slot) {
                    e.target.style.transform = "translateY(-5px)";
                    e.target.style.boxShadow = "0 10px 25px rgba(0,0,0,0.15)";
                  }
                }}
                onMouseOut={(e) => {
                  if (selectedTimeSlot?.slot !== slot.slot) {
                    e.target.style.transform = "translateY(0)";
                    e.target.style.boxShadow = "0 5px 15px rgba(0,0,0,0.08)";
                  }
                }}>
                
                <div style={{ fontSize: "40px", marginBottom: "15px" }}>{slot.icon}</div>
                <h3 style={{
                  fontSize: "18px",
                  fontWeight: "bold",
                  marginBottom: "10px"
                }}>
                  {slot.slot}
                </h3>
                <div style={{
                  fontSize: "24px",
                  fontWeight: "bold",
                  marginBottom: "8px",
                  color: selectedTimeSlot?.slot === slot.slot ? "#FFE4B5" : slot.color
                }}>
                  {slot.multiplier} Rate
                </div>
                <p style={{
                  fontSize: "14px",
                  opacity: "0.9"
                }}>
                  {slot.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Ad Formats */}
      <div style={{ padding: "80px 20px", backgroundColor: "#f7fafc" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{
            textAlign: "center",
            fontSize: "36px",
            marginBottom: "50px",
            color: "#2d3748"
          }}>
            TV Advertisement Formats
          </h2>
          
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "30px"
          }}>
            {adFormats.map((format, index) => (
              <div key={index} style={{
                backgroundColor: "white",
                padding: "30px",
                borderRadius: "20px",
                border: "1px solid #e2e8f0",
                transition: "transform 0.3s ease, box-shadow 0.3s ease"
              }}
              onMouseOver={(e) => {
                e.target.style.transform = "translateY(-8px)";
                e.target.style.boxShadow = "0 15px 35px rgba(0,0,0,0.1)";
              }}
              onMouseOut={(e) => {
                e.target.style.transform = "translateY(0)";
                e.target.style.boxShadow = "0 5px 15px rgba(0,0,0,0.05)";
              }}>
                <div style={{ fontSize: "40px", marginBottom: "20px" }}>{format.icon}</div>
                <h3 style={{
                  fontSize: "22px",
                  fontWeight: "bold",
                  marginBottom: "10px",
                  color: "#2d3748"
                }}>
                  {format.format}
                </h3>
                <div style={{
                  backgroundColor: "#667eea",
                  color: "white",
                  padding: "5px 12px",
                  borderRadius: "15px",
                  fontSize: "12px",
                  fontWeight: "bold",
                  marginBottom: "15px",
                  display: "inline-block"
                }}>
                  {format.duration}
                </div>
                <p style={{
                  color: "#718096",
                  marginBottom: "20px",
                  lineHeight: "1.6"
                }}>
                  {format.description}
                </p>
                <div style={{
                  fontSize: "18px",
                  fontWeight: "bold",
                  color: "#667eea"
                }}>
                  {format.pricing}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Packages Section */}
      <div style={{ padding: "80px 20px", backgroundColor: "white" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{
            textAlign: "center",
            fontSize: "36px",
            marginBottom: "50px",
            color: "#2d3748"
          }}>
            TV Advertising Packages
          </h2>
          
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
            gap: "30px"
          }}>
            {packages.map((pkg, index) => (
              <div key={index}
                style={{
                  backgroundColor: pkg.popular ? "#667eea" : "white",
                  color: pkg.popular ? "white" : "#2d3748",
                  padding: "40px",
                  borderRadius: "25px",
                  border: pkg.popular ? "3px solid #667eea" : "2px solid #e2e8f0",
                  textAlign: "center",
                  position: "relative",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  transform: pkg.popular ? "scale(1.05)" : "scale(1)",
                  boxShadow: pkg.popular ? "0 20px 40px rgba(102, 126, 234, 0.3)" : "0 10px 25px rgba(0,0,0,0.08)"
                }}
                onClick={() => setSelectedPackage(pkg)}
                onMouseOver={(e) => {
                  if (!pkg.popular) {
                    e.target.style.transform = "scale(1.02)";
                    e.target.style.boxShadow = "0 15px 30px rgba(0,0,0,0.15)";
                  }
                }}
                onMouseOut={(e) => {
                  if (!pkg.popular) {
                    e.target.style.transform = "scale(1)";
                    e.target.style.boxShadow = "0 10px 25px rgba(0,0,0,0.08)";
                  }
                }}>
                
                {pkg.popular && (
                  <div style={{
                    position: "absolute",
                    top: "-15px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    backgroundColor: "#FFD700",
                    color: "#2d3748",
                    padding: "8px 20px",
                    borderRadius: "20px",
                    fontSize: "14px",
                    fontWeight: "bold"
                  }}>
                    MOST POPULAR
                  </div>
                )}
                
                <div style={{ fontSize: "50px", marginBottom: "20px" }}>{pkg.icon}</div>
                <h3 style={{
                  fontSize: "26px",
                  fontWeight: "bold",
                  marginBottom: "15px"
                }}>
                  {pkg.name}
                </h3>
                
                <div style={{
                  fontSize: "36px",
                  fontWeight: "800",
                  marginBottom: "10px",
                  color: pkg.popular ? "#FFE4B5" : "#667eea"
                }}>
                  {pkg.price}
                </div>
                
                <div style={{
                  fontSize: "16px",
                  marginBottom: "30px",
                  opacity: "0.8"
                }}>
                  {pkg.duration} Campaign
                </div>
                
                <div style={{
                  backgroundColor: pkg.popular ? "rgba(255,255,255,0.2)" : "#f7fafc",
                  padding: "20px",
                  borderRadius: "15px",
                  marginBottom: "20px"
                }}>
                  <div style={{ marginBottom: "10px" }}>
                    <strong>📺 {pkg.channels}</strong>
                  </div>
                  <div>
                    <strong>👥 {pkg.reach}</strong>
                  </div>
                </div>
                
                <div style={{ textAlign: "left", marginBottom: "30px" }}>
                  {pkg.features.map((feature, featureIndex) => (
                    <div key={featureIndex} style={{
                      padding: "8px 0",
                      borderBottom: "1px solid rgba(255,255,255,0.2)",
                      display: "flex",
                      alignItems: "center",
                      gap: "10px"
                    }}>
                      <span style={{
                        color: pkg.popular ? "#FFE4B5" : "#48BB78",
                        fontWeight: "bold"
                      }}>✓</span>
                      {feature}
                    </div>
                  ))}
                </div>
                
                <button style={{
                  backgroundColor: pkg.popular ? "white" : "#667eea",
                  color: pkg.popular ? "#667eea" : "white",
                  border: "none",
                  padding: "15px 40px",
                  fontSize: "16px",
                  fontWeight: "bold",
                  borderRadius: "25px",
                  cursor: "pointer",
                  width: "100%",
                  transition: "all 0.3s ease"
                }}
                onMouseOver={(e) => {
                  e.target.style.transform = "translateY(-2px)";
                  e.target.style.boxShadow = "0 10px 20px rgba(0,0,0,0.2)";
                }}
                onMouseOut={(e) => {
                  e.target.style.transform = "translateY(0)";
                  e.target.style.boxShadow = "none";
                }}>
                  Select Package
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div style={{
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        color: "white",
        padding: "80px 20px",
        textAlign: "center"
      }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2 style={{
            fontSize: "36px",
            fontWeight: "bold",
            marginBottom: "20px"
          }}>
            Ready to Launch Your TV Campaign?
          </h2>
          <p style={{
            fontSize: "18px",
            marginBottom: "40px",
            opacity: "0.9",
            lineHeight: "1.6"
          }}>
            Reach millions of viewers across India with strategic TV advertising. 
            Our experts will help you choose the perfect channels, time slots, and formats 
            to maximize your campaign effectiveness.
          </p>
          
          <div style={{
            display: "flex",
            gap: "20px",
            justifyContent: "center",
            flexWrap: "wrap"
          }}>
            <button style={{
              background: "linear-gradient(45deg, #FF6B6B, #FF8E8E)",
              color: "white",
              border: "none",
              padding: "18px 40px",
              fontSize: "18px",
              fontWeight: "bold",
              borderRadius: "30px",
              cursor: "pointer",
              boxShadow: "0 10px 30px rgba(255, 107, 107, 0.4)",
              transition: "transform 0.3s ease"
            }}
            onClick={handleBookSlot}
            onMouseOver={(e) => e.target.style.transform = "translateY(-3px)"}
            onMouseOut={(e) => e.target.style.transform = "translateY(0)"}>
              📺 Book TV Slots Now
            </button>
            
            <button style={{
              backgroundColor: "transparent",
              color: "white",
              border: "2px solid white",
              padding: "18px 40px",
              fontSize: "18px",
              fontWeight: "bold",
              borderRadius: "30px",
              cursor: "pointer",
              transition: "all 0.3s ease"
            }}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = "white";
              e.target.style.color = "#667eea";
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = "transparent";
              e.target.style.color = "white";
            }}>
              📞 Get Expert Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TVAdvertising;