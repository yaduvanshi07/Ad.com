import React, { useState } from 'react';

const HelpCenter = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const helpTopics = {
    getting_started: [
      {
        title: "How to create an account?",
        content: "To create an account, click on the 'Sign Up' button in the top right corner. Fill in your details including name, email, password, and company information. Verify your email address to activate your account.",
        tags: ["account", "registration", "signup"]
      },
      {
        title: "How to book your first advertising campaign?",
        content: "1. Browse our services and select the ones you need\n2. Add services to your cart\n3. Review your selection and proceed to checkout\n4. Fill in campaign details and payment information\n5. Our team will contact you to finalize the campaign",
        tags: ["booking", "campaign", "first-time"]
      },
      {
        title: "What information do I need to provide?",
        content: "You'll need to provide: business details, target audience information, campaign objectives, budget, timeline, and any specific requirements. For creative services, you may also need to provide brand assets and messaging.",
        tags: ["requirements", "information", "setup"]
      }
    ],
    services: [
      {
        title: "What advertising services do you offer?",
        content: "We offer comprehensive advertising services including: Newspaper Advertising, Cinema Advertising, TV Advertising, Radio Advertising, Digital Marketing, Outdoor Advertising, and more. Each service has multiple packages and customization options.",
        tags: ["services", "offerings", "packages"]
      },
      {
        title: "How do I choose the right service for my business?",
        content: "Consider your target audience, budget, campaign goals, and timeline. Our team can help you choose the best combination of services. We also offer free consultations to understand your needs and recommend the most effective solutions.",
        tags: ["selection", "consultation", "planning"]
      },
      {
        title: "Can I customize my advertising package?",
        content: "Yes! We offer flexible packages that can be customized to meet your specific needs. Contact our sales team to discuss custom requirements and get a personalized quote.",
        tags: ["customization", "packages", "flexibility"]
      }
    ],
    billing: [
      {
        title: "What payment methods do you accept?",
        content: "We accept all major payment methods including credit/debit cards, net banking, UPI, and bank transfers. Payment plans can be arranged for larger campaigns.",
        tags: ["payment", "methods", "billing"]
      },
      {
        title: "Do you offer payment plans?",
        content: "Yes, we offer flexible payment plans for larger campaigns. This can include upfront payment, milestone-based payments, or monthly installments. Contact our sales team to discuss payment options.",
        tags: ["payment plans", "installments", "flexibility"]
      },
      {
        title: "What is your refund policy?",
        content: "Our refund policy varies by service type. Generally, we offer full refunds for cancellations made within 24 hours of booking. For ongoing campaigns, refunds are calculated based on services already delivered.",
        tags: ["refunds", "cancellation", "policy"]
      }
    ],
    technical: [
      {
        title: "How do I track my campaign performance?",
        content: "You can track your campaign performance through our dashboard. We provide detailed analytics including reach, engagement, conversions, and ROI. Reports are updated in real-time for digital campaigns and weekly for traditional media.",
        tags: ["tracking", "analytics", "performance"]
      },
      {
        title: "What if I need to make changes to my campaign?",
        content: "Campaign changes can be made through your account dashboard or by contacting our support team. Changes are subject to media availability and may incur additional costs. We recommend planning changes well in advance.",
        tags: ["changes", "modifications", "updates"]
      },
      {
        title: "How do I contact customer support?",
        content: "You can contact our support team through multiple channels: Live chat on our website, email at support@viplavadvertising.com, phone at +91-11-4567-8902, or through the contact form on our website.",
        tags: ["support", "contact", "help"]
      }
    ]
  };

  const categories = [
    { id: 'all', name: 'All Topics', icon: '🔍' },
    { id: 'getting_started', name: 'Getting Started', icon: '🚀' },
    { id: 'services', name: 'Services', icon: '📱' },
    { id: 'billing', name: 'Billing & Payment', icon: '💳' },
    { id: 'technical', name: 'Technical Support', icon: '⚙️' }
  ];

  const filteredTopics = Object.entries(helpTopics)
    .filter(([category, topics]) => 
      selectedCategory === 'all' || category === selectedCategory
    )
    .flatMap(([category, topics]) => 
      topics.filter(topic => 
        searchQuery === '' || 
        topic.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        topic.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
        topic.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      )
    );

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
            Help Center
          </h1>
          <p style={{
            fontSize: "20px",
            maxWidth: "800px",
            margin: "0 auto",
            opacity: "0.9"
          }}>
            Find answers to your questions and get the support you need to make the most of our advertising services.
          </p>
        </div>
      </div>

      {/* Search Section */}
      <div style={{ padding: "40px 20px" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <div style={{
            backgroundColor: "white",
            padding: "40px",
            borderRadius: "15px",
            boxShadow: "0 15px 35px rgba(0,0,0,0.1)",
            textAlign: "center"
          }}>
            <h2 style={{ fontSize: "28px", marginBottom: "20px", color: "#333" }}>
              How can we help you?
            </h2>
            <div style={{
              display: "flex",
              gap: "15px",
              maxWidth: "600px",
              margin: "0 auto"
            }}>
              <input
                type="text"
                placeholder="Search for help topics..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  flex: 1,
                  padding: "15px 20px",
                  border: "2px solid #e1e5e9",
                  borderRadius: "25px",
                  fontSize: "16px",
                  outline: "none"
                }}
              />
              <button style={{
                backgroundColor: "#667eea",
                color: "white",
                padding: "15px 25px",
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
              }}>
                Search
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Category Tabs */}
      <div style={{ padding: "20px 20px 40px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{
            display: "flex",
            justifyContent: "center",
            gap: "15px",
            marginBottom: "40px",
            flexWrap: "wrap"
          }}>
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                style={{
                  padding: "12px 24px",
                  backgroundColor: selectedCategory === category.id ? "#667eea" : "transparent",
                  color: selectedCategory === category.id ? "white" : "#667eea",
                  border: `2px solid #667eea`,
                  borderRadius: "25px",
                  cursor: "pointer",
                  fontSize: "16px",
                  fontWeight: "600",
                  transition: "all 0.3s ease",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px"
                }}
              >
                <span>{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>

          {/* Help Topics */}
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            {filteredTopics.length > 0 ? (
              filteredTopics.map((topic, index) => (
                <div key={index} style={{
                  backgroundColor: "white",
                  borderRadius: "12px",
                  boxShadow: "0 5px 15px rgba(0,0,0,0.08)",
                  overflow: "hidden"
                }}>
                  <div style={{ padding: "25px 30px" }}>
                    <h3 style={{ fontSize: "20px", marginBottom: "15px", color: "#333" }}>
                      {topic.title}
                    </h3>
                    <p style={{ color: "#666", lineHeight: "1.6", fontSize: "16px", marginBottom: "15px" }}>
                      {topic.content}
                    </p>
                    <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                      {topic.tags.map((tag, tagIndex) => (
                        <span key={tagIndex} style={{
                          backgroundColor: "#f0f9ff",
                          color: "#0ea5e9",
                          padding: "4px 12px",
                          borderRadius: "15px",
                          fontSize: "12px",
                          fontWeight: "500"
                        }}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div style={{
                backgroundColor: "white",
                padding: "60px 40px",
                borderRadius: "15px",
                boxShadow: "0 5px 15px rgba(0,0,0,0.08)",
                textAlign: "center"
              }}>
                <div style={{ fontSize: "60px", marginBottom: "20px" }}>🔍</div>
                <h3 style={{ fontSize: "24px", marginBottom: "15px", color: "#333" }}>
                  No results found
                </h3>
                <p style={{ color: "#666", lineHeight: "1.6", marginBottom: "25px" }}>
                  Try adjusting your search terms or browse our help categories above.
                </p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('all');
                  }}
                  style={{
                    backgroundColor: "#667eea",
                    color: "white",
                    padding: "12px 24px",
                    border: "none",
                    borderRadius: "20px",
                    fontSize: "14px",
                    fontWeight: "600",
                    cursor: "pointer",
                    transition: "all 0.3s ease"
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = "#5a67d8";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = "#667eea";
                  }}
                >
                  Clear Search
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Contact Support Section */}
      <div style={{ padding: "40px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{
            backgroundColor: "white",
            padding: "60px 40px",
            borderRadius: "15px",
            boxShadow: "0 15px 35px rgba(0,0,0,0.1)",
            textAlign: "center"
          }}>
            <h3 style={{ fontSize: "28px", marginBottom: "20px", color: "#333" }}>
              Still Need Help?
            </h3>
            <p style={{ color: "#666", lineHeight: "1.6", marginBottom: "30px", maxWidth: "600px", margin: "0 auto 30px" }}>
              Can't find what you're looking for? Our support team is here to help you with any specific questions or issues.
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
                onClick={() => window.location.href = '/faq'}
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
                View FAQ
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpCenter;
