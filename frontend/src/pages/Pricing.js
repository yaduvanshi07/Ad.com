import React, { useState } from 'react';

const Pricing = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('monthly');

  const pricingPlans = {
    newspaper: [
      {
        name: "Basic Package",
        price: { monthly: 5000, yearly: 50000 },
        features: [
          "Front page display ad",
          "2 publications per month",
          "Basic design support",
          "Performance report",
          "Email support"
        ],
        popular: false
      },
      {
        name: "Professional Package",
        price: { monthly: 15000, yearly: 150000 },
        features: [
          "Front page + inside pages",
          "5 publications per month",
          "Premium design support",
          "Detailed analytics",
          "Priority support",
          "Custom placement options"
        ],
        popular: true
      },
      {
        name: "Enterprise Package",
        price: { monthly: 30000, yearly: 300000 },
        features: [
          "Multi-page coverage",
          "Unlimited publications",
          "Dedicated account manager",
          "Advanced targeting",
          "24/7 support",
          "Custom campaign strategy"
        ],
        popular: false
      }
    ],
    digital: [
      {
        name: "Starter",
        price: { monthly: 8000, yearly: 80000 },
        features: [
          "Google Ads management",
          "₹20,000 ad spend budget",
          "Basic reporting",
          "Email support",
          "Monthly optimization"
        ],
        popular: false
      },
      {
        name: "Growth",
        price: { monthly: 20000, yearly: 200000 },
        features: [
          "Google + Facebook Ads",
          "₹50,000 ad spend budget",
          "Advanced targeting",
          "Weekly optimization",
          "Priority support",
          "Conversion tracking"
        ],
        popular: true
      },
      {
        name: "Premium",
        price: { monthly: 40000, yearly: 400000 },
        features: [
          "Full digital marketing suite",
          "₹100,000+ ad spend budget",
          "Custom strategy",
          "Daily optimization",
          "Dedicated manager",
          "Advanced analytics"
        ],
        popular: false
      }
    ],
    cinema: [
      {
        name: "Single Screen",
        price: { monthly: 12000, yearly: 120000 },
        features: [
          "Pre-show video ad",
          "1 cinema chain",
          "Basic targeting",
          "Performance report",
          "Email support"
        ],
        popular: false
      },
      {
        name: "Multi-Screen",
        price: { monthly: 25000, yearly: 250000 },
        features: [
          "Pre-show + lobby ads",
          "3 cinema chains",
          "Advanced targeting",
          "Detailed analytics",
          "Priority support",
          "Creative consultation"
        ],
        popular: true
      },
      {
        name: "Premium Network",
        price: { monthly: 50000, yearly: 500000 },
        features: [
          "Full cinema network",
          "Custom ad formats",
          "Exclusive placements",
          "Dedicated manager",
          "24/7 support",
          "Strategic planning"
        ],
        popular: false
      }
    ]
  };

  const getDiscount = () => selectedPeriod === 'yearly' ? 15 : 0;

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f8f9fa' }}>
      {/* Hero Section */}
      <div style={{
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
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
            Transparent Pricing
          </h1>
          <p style={{
            fontSize: "20px",
            maxWidth: "800px",
            margin: "0 auto",
            opacity: "0.9"
          }}>
            Choose the perfect advertising package for your business. All prices include GST and are transparent with no hidden costs.
          </p>
        </div>
      </div>

      {/* Billing Toggle */}
      <div style={{ padding: "40px 20px", textAlign: "center" }}>
        <div style={{ maxWidth: "400px", margin: "0 auto" }}>
          <div style={{
            backgroundColor: "white",
            padding: "8px",
            borderRadius: "25px",
            display: "flex",
            boxShadow: "0 5px 15px rgba(0,0,0,0.1)"
          }}>
            <button
              onClick={() => setSelectedPeriod('monthly')}
              style={{
                flex: 1,
                padding: "12px 24px",
                backgroundColor: selectedPeriod === 'monthly' ? "#667eea" : "transparent",
                color: selectedPeriod === 'monthly' ? "white" : "#667eea",
                border: "none",
                borderRadius: "20px",
                cursor: "pointer",
                fontSize: "16px",
                fontWeight: "600",
                transition: "all 0.3s ease"
              }}
            >
              Monthly
            </button>
            <button
              onClick={() => setSelectedPeriod('yearly')}
              style={{
                flex: 1,
                padding: "12px 24px",
                backgroundColor: selectedPeriod === 'yearly' ? "#667eea" : "transparent",
                color: selectedPeriod === 'yearly' ? "white" : "#667eea",
                border: "none",
                borderRadius: "20px",
                cursor: "pointer",
                fontSize: "16px",
                fontWeight: "600",
                transition: "all 0.3s ease"
              }}
            >
              Yearly
              <span style={{ 
                backgroundColor: "#10b981", 
                color: "white", 
                padding: "2px 8px", 
                borderRadius: "10px", 
                fontSize: "12px", 
                marginLeft: "8px" 
              }}>
                Save {getDiscount()}%
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Pricing Sections */}
      <div style={{ padding: "40px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          
          {/* Newspaper Advertising */}
          <div style={{ marginBottom: "80px" }}>
            <h2 style={{ fontSize: "32px", color: "#333", marginBottom: "40px", textAlign: "center" }}>
              📰 Newspaper Advertising
            </h2>
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "30px"
            }}>
              {pricingPlans.newspaper.map((plan, index) => (
                <div key={index} style={{
                  backgroundColor: "white",
                  borderRadius: "15px",
                  padding: "40px 30px",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                  position: "relative",
                  border: plan.popular ? "3px solid #667eea" : "1px solid #e1e5e9",
                  transform: plan.popular ? "scale(1.05)" : "scale(1)",
                  transition: "all 0.3s ease"
                }}>
                  {plan.popular && (
                    <div style={{
                      position: "absolute",
                      top: "-15px",
                      left: "50%",
                      transform: "translateX(-50%)",
                      backgroundColor: "#667eea",
                      color: "white",
                      padding: "8px 20px",
                      borderRadius: "20px",
                      fontSize: "14px",
                      fontWeight: "600"
                    }}>
                      Most Popular
                    </div>
                  )}
                  
                  <h3 style={{ fontSize: "24px", color: "#333", marginBottom: "20px", textAlign: "center" }}>
                    {plan.name}
                  </h3>
                  
                  <div style={{ textAlign: "center", marginBottom: "30px" }}>
                    <div style={{ fontSize: "48px", fontWeight: "bold", color: "#667eea", marginBottom: "10px" }}>
                      ₹{plan.price[selectedPeriod].toLocaleString()}
                    </div>
                    <div style={{ color: "#666", fontSize: "16px" }}>
                      per {selectedPeriod === 'monthly' ? 'month' : 'year'}
                    </div>
                  </div>
                  
                  <ul style={{ listStyle: "none", padding: 0, marginBottom: "30px" }}>
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} style={{
                        color: "#666",
                        marginBottom: "15px",
                        paddingLeft: "25px",
                        position: "relative"
                      }}>
                        <span style={{
                          position: "absolute",
                          left: "0",
                          color: "#10b981",
                          fontSize: "18px"
                        }}>✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <button style={{
                    width: "100%",
                    backgroundColor: plan.popular ? "#667eea" : "transparent",
                    color: plan.popular ? "white" : "#667eea",
                    padding: "15px 20px",
                    border: `2px solid #667eea`,
                    borderRadius: "25px",
                    fontSize: "16px",
                    fontWeight: "600",
                    cursor: "pointer",
                    transition: "all 0.3s ease"
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = plan.popular ? "#5a67d8" : "#667eea";
                    e.target.style.color = "white";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = plan.popular ? "#667eea" : "transparent";
                    e.target.style.color = plan.popular ? "white" : "#667eea";
                  }}>
                    Get Started
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Digital Marketing */}
          <div style={{ marginBottom: "80px" }}>
            <h2 style={{ fontSize: "32px", color: "#333", marginBottom: "40px", textAlign: "center" }}>
              💻 Digital Marketing
            </h2>
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "30px"
            }}>
              {pricingPlans.digital.map((plan, index) => (
                <div key={index} style={{
                  backgroundColor: "white",
                  borderRadius: "15px",
                  padding: "40px 30px",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                  position: "relative",
                  border: plan.popular ? "3px solid #667eea" : "1px solid #e1e5e9",
                  transform: plan.popular ? "scale(1.05)" : "scale(1)",
                  transition: "all 0.3s ease"
                }}>
                  {plan.popular && (
                    <div style={{
                      position: "absolute",
                      top: "-15px",
                      left: "50%",
                      transform: "translateX(-50%)",
                      backgroundColor: "#667eea",
                      color: "white",
                      padding: "8px 20px",
                      borderRadius: "20px",
                      fontSize: "14px",
                      fontWeight: "600"
                    }}>
                      Most Popular
                    </div>
                  )}
                  
                  <h3 style={{ fontSize: "24px", color: "#333", marginBottom: "20px", textAlign: "center" }}>
                    {plan.name}
                  </h3>
                  
                  <div style={{ textAlign: "center", marginBottom: "30px" }}>
                    <div style={{ fontSize: "48px", fontWeight: "bold", color: "#667eea", marginBottom: "10px" }}>
                      ₹{plan.price[selectedPeriod].toLocaleString()}
                    </div>
                    <div style={{ color: "#666", fontSize: "16px" }}>
                      per {selectedPeriod === 'monthly' ? 'month' : 'year'}
                    </div>
                  </div>
                  
                  <ul style={{ listStyle: "none", padding: 0, marginBottom: "30px" }}>
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} style={{
                        color: "#666",
                        marginBottom: "15px",
                        paddingLeft: "25px",
                        position: "relative"
                      }}>
                        <span style={{
                          position: "absolute",
                          left: "0",
                          color: "#10b981",
                          fontSize: "18px"
                        }}>✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <button style={{
                    width: "100%",
                    backgroundColor: plan.popular ? "#667eea" : "transparent",
                    color: plan.popular ? "white" : "#667eea",
                    padding: "15px 20px",
                    border: `2px solid #667eea`,
                    borderRadius: "25px",
                    fontSize: "16px",
                    fontWeight: "600",
                    cursor: "pointer",
                    transition: "all 0.3s ease"
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = plan.popular ? "#5a67d8" : "#667eea";
                    e.target.style.color = "white";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = plan.popular ? "#667eea" : "transparent";
                    e.target.style.color = plan.popular ? "white" : "#667eea";
                  }}>
                    Get Started
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Cinema Advertising */}
          <div style={{ marginBottom: "80px" }}>
            <h2 style={{ fontSize: "32px", color: "#333", marginBottom: "40px", textAlign: "center" }}>
              🎬 Cinema Advertising
            </h2>
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "30px"
            }}>
              {pricingPlans.cinema.map((plan, index) => (
                <div key={index} style={{
                  backgroundColor: "white",
                  borderRadius: "15px",
                  padding: "40px 30px",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                  position: "relative",
                  border: plan.popular ? "3px solid #667eea" : "1px solid #e1e5e9",
                  transform: plan.popular ? "scale(1.05)" : "scale(1)",
                  transition: "all 0.3s ease"
                }}>
                  {plan.popular && (
                    <div style={{
                      position: "absolute",
                      top: "-15px",
                      left: "50%",
                      transform: "translateX(-50%)",
                      backgroundColor: "#667eea",
                      color: "white",
                      padding: "8px 20px",
                      borderRadius: "20px",
                      fontSize: "14px",
                      fontWeight: "600"
                    }}>
                      Most Popular
                    </div>
                  )}
                  
                  <h3 style={{ fontSize: "24px", color: "#333", marginBottom: "20px", textAlign: "center" }}>
                    {plan.name}
                  </h3>
                  
                  <div style={{ textAlign: "center", marginBottom: "30px" }}>
                    <div style={{ fontSize: "48px", fontWeight: "bold", color: "#667eea", marginBottom: "10px" }}>
                      ₹{plan.price[selectedPeriod].toLocaleString()}
                    </div>
                    <div style={{ color: "#666", fontSize: "16px" }}>
                      per {selectedPeriod === 'monthly' ? 'month' : 'year'}
                    </div>
                  </div>
                  
                  <ul style={{ listStyle: "none", padding: 0, marginBottom: "30px" }}>
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} style={{
                        color: "#666",
                        marginBottom: "15px",
                        paddingLeft: "25px",
                        position: "relative"
                      }}>
                        <span style={{
                          position: "absolute",
                          left: "0",
                          color: "#10b981",
                          fontSize: "18px"
                        }}>✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <button style={{
                    width: "100%",
                    backgroundColor: plan.popular ? "#667eea" : "transparent",
                    color: plan.popular ? "white" : "#667eea",
                    padding: "15px 20px",
                    border: `2px solid #667eea`,
                    borderRadius: "25px",
                    fontSize: "16px",
                    fontWeight: "600",
                    cursor: "pointer",
                    transition: "all 0.3s ease"
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = plan.popular ? "#5a67d8" : "#667eea";
                    e.target.style.color = "white";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = plan.popular ? "#667eea" : "transparent";
                    e.target.style.color = plan.popular ? "white" : "#667eea";
                  }}>
                    Get Started
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Custom Quote Section */}
          <div style={{
            backgroundColor: "white",
            padding: "60px 40px",
            borderRadius: "15px",
            boxShadow: "0 15px 35px rgba(0,0,0,0.1)",
            textAlign: "center"
          }}>
            <h3 style={{ fontSize: "28px", marginBottom: "20px", color: "#333" }}>
              Need a Custom Package?
            </h3>
            <p style={{ color: "#666", lineHeight: "1.6", marginBottom: "30px", maxWidth: "600px", margin: "0 auto 30px" }}>
              Don't see a package that fits your needs? We can create a custom advertising solution tailored specifically for your business.
            </p>
            <button
              onClick={() => window.location.href = '/contact-us'}
              style={{
                backgroundColor: "#667eea",
                color: "white",
                padding: "15px 30px",
                border: "none",
                borderRadius: "25px",
                fontSize: "16px",
                fontWeight: "600",
                cursor: "pointer",
                transition: "all 0.3s ease"
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = "#5a67d8";
                e.target.style.transform = "translateY(-1px)";
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "#667eea";
                e.target.style.transform = "translateY(0)";
              }}
            >
              Get Custom Quote
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
