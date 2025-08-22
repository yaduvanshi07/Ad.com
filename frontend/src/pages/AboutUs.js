import React from 'react';

const AboutUs = () => {
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
            About VipLav Advertising Co.
          </h1>
          <p style={{
            fontSize: "20px",
            maxWidth: "800px",
            margin: "0 auto",
            opacity: "0.9"
          }}>
            More than just ads — we build lasting partnerships, offering customized advertising solutions to power your brand's success.
          </p>
        </div>
      </div>

      {/* Company Story */}
      <div style={{ padding: "80px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "40px",
            marginBottom: "60px"
          }}>
            <div style={{
              backgroundColor: "white",
              padding: "40px",
              borderRadius: "15px",
              boxShadow: "0 10px 30px rgba(0,0,0,0.1)"
            }}>
              <h3 style={{ fontSize: "24px", marginBottom: "20px", color: "#333" }}>
                🎯 Our Mission
              </h3>
              <p style={{ color: "#666", lineHeight: "1.6" }}>
                To democratize advertising by making premium media accessible to businesses of all sizes, 
                while delivering measurable results and exceptional customer service.
              </p>
            </div>

            <div style={{
              backgroundColor: "white",
              padding: "40px",
              borderRadius: "15px",
              boxShadow: "0 10px 30px rgba(0,0,0,0.1)"
            }}>
              <h3 style={{ fontSize: "24px", marginBottom: "20px", color: "#333" }}>
                🌟 Our Vision
              </h3>
              <p style={{ color: "#666", lineHeight: "1.6" }}>
                To become the most trusted and innovative advertising partner for businesses across India, 
                revolutionizing how brands connect with their audiences.
              </p>
            </div>

            <div style={{
              backgroundColor: "white",
              padding: "40px",
              borderRadius: "15px",
              boxShadow: "0 10px 30px rgba(0,0,0,0.1)"
            }}>
              <h3 style={{ fontSize: "24px", marginBottom: "20px", color: "#333" }}>
                💎 Our Values
              </h3>
              <p style={{ color: "#666", lineHeight: "1.6" }}>
                Integrity, Innovation, Customer Success, and Excellence in everything we do. 
                We believe in building long-term relationships based on trust and results.
              </p>
            </div>
          </div>

          {/* Company Stats */}
          <div style={{
            backgroundColor: "white",
            padding: "60px 40px",
            borderRadius: "15px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
            marginBottom: "60px"
          }}>
            <h2 style={{ fontSize: "32px", marginBottom: "40px", color: "#333", textAlign: "center" }}>
              Our Impact in Numbers
            </h2>
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "30px"
            }}>
              <div style={{ textAlign: "center" }}>
                <div style={{ fontSize: "48px", fontWeight: "bold", color: "#667eea", marginBottom: "10px" }}>
                  50,000+
                </div>
                <div style={{ color: "#666", fontSize: "18px" }}>Happy Customers</div>
              </div>
              <div style={{ textAlign: "center" }}>
                <div style={{ fontSize: "48px", fontWeight: "bold", color: "#667eea", marginBottom: "10px" }}>
                  25,000+
                </div>
                <div style={{ color: "#666", fontSize: "18px" }}>Successful Campaigns</div>
              </div>
              <div style={{ textAlign: "center" }}>
                <div style={{ fontSize: "48px", fontWeight: "bold", color: "#667eea", marginBottom: "10px" }}>
                  200+
                </div>
                <div style={{ color: "#666", fontSize: "18px" }}>Team Members</div>
              </div>
              <div style={{ textAlign: "center" }}>
                <div style={{ fontSize: "48px", fontWeight: "bold", color: "#667eea", marginBottom: "10px" }}>
                  15+
                </div>
                <div style={{ color: "#666", fontSize: "18px" }}>Years Experience</div>
              </div>
            </div>
          </div>

          {/* Team Section */}
          <div style={{
            backgroundColor: "white",
            padding: "60px 40px",
            borderRadius: "15px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.1)"
          }}>
            <h2 style={{ fontSize: "32px", marginBottom: "40px", color: "#333", textAlign: "center" }}>
              Meet Our Leadership Team
            </h2>
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "30px"
            }}>
              <div style={{ textAlign: "center" }}>
                <div style={{
                  width: "120px",
                  height: "120px",
                  borderRadius: "50%",
                  backgroundColor: "#667eea",
                  margin: "0 auto 20px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "48px",
                  color: "white"
                }}>
                  👨‍💼
                </div>
                <h4 style={{ fontSize: "20px", marginBottom: "10px", color: "#333" }}>
                  Rajesh Kumar
                </h4>
                <p style={{ color: "#666", fontSize: "16px" }}>CEO & Founder</p>
              </div>
              <div style={{ textAlign: "center" }}>
                <div style={{
                  width: "120px",
                  height: "120px",
                  borderRadius: "50%",
                  backgroundColor: "#764ba2",
                  margin: "0 auto 20px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "48px",
                  color: "white"
                }}>
                  👩‍💼
                </div>
                <h4 style={{ fontSize: "20px", marginBottom: "10px", color: "#333" }}>
                  Priya Sharma
                </h4>
                <p style={{ color: "#666", fontSize: "16px" }}>COO</p>
              </div>
              <div style={{ textAlign: "center" }}>
                <div style={{
                  width: "120px",
                  height: "120px",
                  borderRadius: "50%",
                  backgroundColor: "#f093fb",
                  margin: "0 auto 20px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "48px",
                  color: "white"
                }}>
                  👨‍💻
                </div>
                <h4 style={{ fontSize: "20px", marginBottom: "10px", color: "#333" }}>
                  Amit Patel
                </h4>
                <p style={{ color: "#666", fontSize: "16px" }}>CTO</p>
              </div>
              <div style={{ textAlign: "center" }}>
                <div style={{
                  width: "120px",
                  height: "120px",
                  borderRadius: "50%",
                  backgroundColor: "#4facfe",
                  margin: "0 auto 20px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "48px",
                  color: "white"
                }}>
                  👩‍🎨
                </div>
                <h4 style={{ fontSize: "20px", marginBottom: "10px", color: "#333" }}>
                  Neha Singh
                </h4>
                <p style={{ color: "#666", fontSize: "16px" }}>Creative Director</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
