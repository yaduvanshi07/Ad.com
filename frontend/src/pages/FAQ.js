import React, { useState } from 'react';

const FAQ = () => {
  const [openCategory, setOpenCategory] = useState('general');
  const [openQuestions, setOpenQuestions] = useState({});

  const faqData = {
    general: [
      {
        question: "What services does VipLav Advertising Co. offer?",
        answer: "We offer a comprehensive range of advertising services including Newspaper Advertising, Cinema Advertising, TV Advertising, Radio Advertising, Digital Marketing, Outdoor Advertising, and more. Our services cover both traditional and digital media platforms."
      },
      {
        question: "How do I get started with an advertising campaign?",
        answer: "Getting started is easy! Simply browse our services, select the ones that fit your needs, add them to your cart, and proceed to checkout. Our team will then contact you to discuss campaign details and requirements."
      },
      {
        question: "What is the typical timeline for launching a campaign?",
        answer: "Campaign timelines vary by service type. Newspaper ads can be launched within 24-48 hours, while TV and cinema campaigns typically take 1-2 weeks. Digital campaigns can often start within 24 hours."
      },
      {
        question: "Do you provide campaign performance reports?",
        answer: "Yes! We provide detailed performance reports for all campaigns. Digital campaigns include real-time analytics, while traditional media campaigns include reach estimates and audience demographics."
      }
    ],
    pricing: [
      {
        question: "How are your advertising rates determined?",
        answer: "Our rates are based on several factors including media type, placement, duration, target audience, and market demand. We offer competitive pricing and can provide custom quotes for specific requirements."
      },
      {
        question: "Do you offer package deals or discounts?",
        answer: "Yes! We offer various package deals and discounts for bulk bookings, long-term contracts, and new customers. Contact our sales team for the best available offers."
      },
      {
        question: "Are there any hidden costs or additional fees?",
        answer: "No hidden costs! All our prices are transparent and include GST. Any additional services (like creative design) are clearly communicated upfront."
      },
      {
        question: "What payment methods do you accept?",
        answer: "We accept all major payment methods including credit/debit cards, net banking, UPI, and bank transfers. Payment plans can be arranged for larger campaigns."
      }
    ],
    newspaper: [
      {
        question: "Which newspapers do you work with?",
        answer: "We work with all major national and regional newspapers including The Times of India, Hindustan Times, The Hindu, Dainik Bhaskar, Amar Ujala, and many more across different states."
      },
      {
        question: "What types of newspaper ads can I book?",
        answer: "We offer front page ads, display ads, classified ads, obituary notices, tender notices, and more. You can choose from various sizes and positions."
      },
      {
        question: "How far in advance should I book newspaper ads?",
        answer: "For regular ads, we recommend booking 2-3 days in advance. For special editions or festivals, book at least 1-2 weeks ahead."
      }
    ],
    digital: [
      {
        question: "What digital marketing services do you provide?",
        answer: "Our digital services include Google Ads, Facebook/Instagram Ads, SEO, Content Marketing, Email Marketing, Social Media Management, and more."
      },
      {
        question: "How do you target the right audience for digital campaigns?",
        answer: "We use advanced targeting options including demographics, interests, behaviors, location, and custom audiences to ensure your ads reach the most relevant potential customers."
      },
      {
        question: "Can you help with creative design for digital ads?",
        answer: "Yes! Our creative team can design engaging ad creatives, banners, videos, and other digital assets to maximize your campaign performance."
      }
    ]
  };

  const toggleQuestion = (questionIndex) => {
    setOpenQuestions(prev => ({
      ...prev,
      [questionIndex]: !prev[questionIndex]
    }));
  };

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
            Frequently Asked Questions
          </h1>
          <p style={{
            fontSize: "20px",
            maxWidth: "800px",
            margin: "0 auto",
            opacity: "0.9"
          }}>
            Find answers to common questions about our advertising services and how we can help grow your business.
          </p>
        </div>
      </div>

      {/* FAQ Content */}
      <div style={{ padding: "80px 20px" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          {/* Category Tabs */}
          <div style={{
            display: "flex",
            justifyContent: "center",
            gap: "15px",
            marginBottom: "50px",
            flexWrap: "wrap"
          }}>
            {Object.keys(faqData).map(category => (
              <button
                key={category}
                onClick={() => setOpenCategory(category)}
                style={{
                  padding: "12px 24px",
                  backgroundColor: openCategory === category ? "#667eea" : "transparent",
                  color: openCategory === category ? "white" : "#667eea",
                  border: `2px solid #667eea`,
                  borderRadius: "25px",
                  cursor: "pointer",
                  fontSize: "16px",
                  fontWeight: "600",
                  transition: "all 0.3s ease",
                  textTransform: "capitalize"
                }}
              >
                {category === 'general' ? 'General' : 
                 category === 'pricing' ? 'Pricing & Payment' :
                 category === 'newspaper' ? 'Newspaper Ads' : 'Digital Marketing'}
              </button>
            ))}
          </div>

          {/* FAQ Items */}
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            {faqData[openCategory].map((item, index) => (
              <div key={index} style={{
                backgroundColor: "white",
                borderRadius: "12px",
                boxShadow: "0 5px 15px rgba(0,0,0,0.08)",
                overflow: "hidden"
              }}>
                <button
                  onClick={() => toggleQuestion(index)}
                  style={{
                    width: "100%",
                    padding: "25px 30px",
                    backgroundColor: "transparent",
                    border: "none",
                    textAlign: "left",
                    cursor: "pointer",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    fontSize: "18px",
                    fontWeight: "600",
                    color: "#333",
                    transition: "background-color 0.3s ease"
                  }}
                  onMouseEnter={(e) => e.target.style.backgroundColor = "#f8f9fa"}
                  onMouseLeave={(e) => e.target.style.backgroundColor = "transparent"}
                >
                  <span>{item.question}</span>
                  <span style={{
                    fontSize: "20px",
                    color: "#667eea",
                    transition: "transform 0.3s ease",
                    transform: openQuestions[index] ? "rotate(45deg)" : "rotate(0deg)"
                  }}>
                    +
                  </span>
                </button>
                
                {openQuestions[index] && (
                  <div style={{
                    padding: "0 30px 25px 30px",
                    borderTop: "1px solid #f1f5f9"
                  }}>
                    <p style={{
                      color: "#666",
                      lineHeight: "1.6",
                      fontSize: "16px",
                      margin: 0
                    }}>
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Contact Section */}
          <div style={{
            backgroundColor: "white",
            padding: "60px 40px",
            borderRadius: "15px",
            boxShadow: "0 15px 35px rgba(0,0,0,0.1)",
            marginTop: "60px",
            textAlign: "center"
          }}>
            <h3 style={{ fontSize: "28px", marginBottom: "20px", color: "#333" }}>
              Still Have Questions?
            </h3>
            <p style={{ color: "#666", lineHeight: "1.6", marginBottom: "30px", maxWidth: "600px", margin: "0 auto 30px" }}>
              Can't find the answer you're looking for? Our support team is here to help you with any specific questions about our services.
            </p>
            <div style={{ display: "flex", gap: "20px", justifyContent: "center", flexWrap: "wrap" }}>
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
                Contact Support
              </button>
              <button
                onClick={() => window.location.href = '/services'}
                style={{
                  backgroundColor: "transparent",
                  color: "#667eea",
                  padding: "15px 30px",
                  border: "2px solid #667eea",
                  borderRadius: "25px",
                  fontSize: "16px",
                  fontWeight: "600",
                  cursor: "pointer",
                  transition: "all 0.3s ease"
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "#667eea";
                  e.target.style.color = "white";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "transparent";
                  e.target.style.color = "#667eea";
                }}
              >
                Browse Services
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
