import React, { useState } from 'react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      alert('Thank you for your message! We will get back to you soon.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 2000);
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
            Contact Us
          </h1>
          <p style={{
            fontSize: "20px",
            maxWidth: "800px",
            margin: "0 auto",
            opacity: "0.9"
          }}>
            Ready to start your advertising campaign? Get in touch with our team of experts.
          </p>
        </div>
      </div>

      {/* Contact Information & Form */}
      <div style={{ padding: "80px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "60px",
            alignItems: "start"
          }}>
            {/* Contact Information */}
            <div>
              <h2 style={{ fontSize: "32px", marginBottom: "40px", color: "#333" }}>
                Get in Touch
              </h2>
              
              <div style={{ marginBottom: "40px" }}>
                <h3 style={{ fontSize: "20px", marginBottom: "20px", color: "#333" }}>
                  📍 Office Address
                </h3>
                <p style={{ color: "#666", lineHeight: "1.6" }}>
                  VipLav Advertising Co.<br />
                  123 Business Park, Sector 15<br />
                  Gurugram, Haryana 122001<br />
                  India
                </p>
              </div>

              <div style={{ marginBottom: "40px" }}>
                <h3 style={{ fontSize: "20px", marginBottom: "20px", color: "#333" }}>
                  📞 Phone Numbers
                </h3>
                <div style={{ marginBottom: "15px" }}>
                  <strong style={{ color: "#333" }}>Main Office:</strong><br />
                  <span style={{ color: "#667eea", fontSize: "18px" }}>+91-11-4567-8900</span>
                </div>
                <div style={{ marginBottom: "15px" }}>
                  <strong style={{ color: "#333" }}>Sales Team:</strong><br />
                  <span style={{ color: "#667eea", fontSize: "18px" }}>+91-11-4567-8901</span>
                </div>
                <div>
                  <strong style={{ color: "#333" }}>Support:</strong><br />
                  <span style={{ color: "#667eea", fontSize: "18px" }}>+91-11-4567-8902</span>
                </div>
              </div>

              <div style={{ marginBottom: "40px" }}>
                <h3 style={{ fontSize: "20px", marginBottom: "20px", color: "#333" }}>
                  📧 Email Addresses
                </h3>
                <div style={{ marginBottom: "15px" }}>
                  <strong style={{ color: "#333" }}>General Inquiries:</strong><br />
                  <span style={{ color: "#667eea" }}>info@viplavadvertising.com</span>
                </div>
                <div style={{ marginBottom: "15px" }}>
                  <strong style={{ color: "#333" }}>Sales:</strong><br />
                  <span style={{ color: "#667eea" }}>sales@viplavadvertising.com</span>
                </div>
                <div>
                  <strong style={{ color: "#333" }}>Support:</strong><br />
                  <span style={{ color: "#667eea" }}>support@viplavadvertising.com</span>
                </div>
              </div>

              <div>
                <h3 style={{ fontSize: "20px", marginBottom: "20px", color: "#333" }}>
                  🕒 Business Hours
                </h3>
                <p style={{ color: "#666", lineHeight: "1.6" }}>
                  <strong>Monday - Friday:</strong> 9:00 AM - 6:00 PM<br />
                  <strong>Saturday:</strong> 10:00 AM - 4:00 PM<br />
                  <strong>Sunday:</strong> Closed<br />
                  <strong>24/7 Support:</strong> Available for urgent matters
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div style={{
              backgroundColor: "white",
              padding: "40px",
              borderRadius: "15px",
              boxShadow: "0 15px 35px rgba(0,0,0,0.1)"
            }}>
              <h3 style={{ fontSize: "24px", marginBottom: "30px", color: "#333", textAlign: "center" }}>
                Send us a Message
              </h3>
              
              <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: "20px" }}>
                  <label style={{ display: "block", marginBottom: "8px", color: "#333", fontWeight: "600" }}>
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    style={{
                      width: "100%",
                      padding: "12px 16px",
                      border: "2px solid #e1e5e9",
                      borderRadius: "8px",
                      fontSize: "16px",
                      outline: "none",
                      transition: "border-color 0.3s ease"
                    }}
                    onFocus={(e) => e.target.style.borderColor = "#667eea"}
                    onBlur={(e) => e.target.style.borderColor = "#e1e5e9"}
                  />
                </div>

                <div style={{ marginBottom: "20px" }}>
                  <label style={{ display: "block", marginBottom: "8px", color: "#333", fontWeight: "600" }}>
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    style={{
                      width: "100%",
                      padding: "12px 16px",
                      border: "2px solid #e1e5e9",
                      borderRadius: "8px",
                      fontSize: "16px",
                      outline: "none",
                      transition: "border-color 0.3s ease"
                    }}
                    onFocus={(e) => e.target.style.borderColor = "#667eea"}
                    onBlur={(e) => e.target.style.borderColor = "#e1e5e9"}
                  />
                </div>

                <div style={{ marginBottom: "20px" }}>
                  <label style={{ display: "block", marginBottom: "8px", color: "#333", fontWeight: "600" }}>
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    style={{
                      width: "100%",
                      padding: "12px 16px",
                      border: "2px solid #e1e5e9",
                      borderRadius: "8px",
                      fontSize: "16px",
                      outline: "none",
                      transition: "border-color 0.3s ease"
                    }}
                    onFocus={(e) => e.target.style.borderColor = "#667eea"}
                    onBlur={(e) => e.target.style.borderColor = "#e1e5e9"}
                  />
                </div>

                <div style={{ marginBottom: "20px" }}>
                  <label style={{ display: "block", marginBottom: "8px", color: "#333", fontWeight: "600" }}>
                    Company Name
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    style={{
                      width: "100%",
                      padding: "12px 16px",
                      border: "2px solid #e1e5e9",
                      borderRadius: "8px",
                      fontSize: "16px",
                      outline: "none",
                      transition: "border-color 0.3s ease"
                    }}
                    onFocus={(e) => e.target.style.borderColor = "#667eea"}
                    onBlur={(e) => e.target.style.borderColor = "#e1e5e9"}
                  />
                </div>

                <div style={{ marginBottom: "20px" }}>
                  <label style={{ display: "block", marginBottom: "8px", color: "#333", fontWeight: "600" }}>
                    Service of Interest
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    style={{
                      width: "100%",
                      padding: "12px 16px",
                      border: "2px solid #e1e5e9",
                      borderRadius: "8px",
                      fontSize: "16px",
                      outline: "none",
                      transition: "border-color 0.3s ease"
                    }}
                    onFocus={(e) => e.target.style.borderColor = "#667eea"}
                    onBlur={(e) => e.target.style.borderColor = "#e1e5e9"}
                  >
                    <option value="">Select a service</option>
                    <option value="newspaper">Newspaper Advertising</option>
                    <option value="cinema">Cinema Advertising</option>
                    <option value="tv">TV Advertising</option>
                    <option value="digital">Digital Marketing</option>
                    <option value="radio">Radio Advertising</option>
                    <option value="outdoor">Outdoor Advertising</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div style={{ marginBottom: "30px" }}>
                  <label style={{ display: "block", marginBottom: "8px", color: "#333", fontWeight: "600" }}>
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows="5"
                    style={{
                      width: "100%",
                      padding: "12px 16px",
                      border: "2px solid #e1e5e9",
                      borderRadius: "8px",
                      fontSize: "16px",
                      outline: "none",
                      resize: "vertical",
                      transition: "border-color 0.3s ease"
                    }}
                    onFocus={(e) => e.target.style.borderColor = "#667eea"}
                    onBlur={(e) => e.target.style.borderColor = "#e1e5e9"}
                    placeholder="Tell us about your advertising needs..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  style={{
                    width: "100%",
                    backgroundColor: isSubmitting ? "#ccc" : "#667eea",
                    color: "white",
                    padding: "15px 20px",
                    border: "none",
                    borderRadius: "8px",
                    fontSize: "16px",
                    fontWeight: "600",
                    cursor: isSubmitting ? "not-allowed" : "pointer",
                    transition: "all 0.3s ease"
                  }}
                  onMouseEnter={(e) => {
                    if (!isSubmitting) {
                      e.target.style.backgroundColor = "#5a67d8";
                      e.target.style.transform = "translateY(-1px)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isSubmitting) {
                      e.target.style.backgroundColor = "#667eea";
                      e.target.style.transform = "translateY(0)";
                    }
                  }}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          </div>

          {/* Map Section */}
          <div style={{
            backgroundColor: "white",
            padding: "60px 40px",
            borderRadius: "15px",
            boxShadow: "0 15px 35px rgba(0,0,0,0.1)",
            marginTop: "60px",
            textAlign: "center"
          }}>
            <h2 style={{ fontSize: "32px", marginBottom: "40px", color: "#333" }}>
              Find Us on the Map
            </h2>
            <div style={{
              height: "400px",
              backgroundColor: "#f0f0f0",
              borderRadius: "10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "18px",
              color: "#666"
            }}>
              🗺️ Interactive Map Coming Soon
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
