import React, { useState } from 'react';

const Careers = () => {
  const [selectedDepartment, setSelectedDepartment] = useState('all');

  const jobListings = [
    {
      id: 1,
      title: "Senior Digital Marketing Manager",
      department: "Marketing",
      location: "Mumbai, India",
      type: "Full-time",
      experience: "5-8 years",
      description: "Lead digital marketing campaigns and strategies for major brands.",
      requirements: [
        "Expertise in Google Ads, Facebook Ads, and SEO",
        "Strong analytical and leadership skills",
        "Experience in B2B and B2C marketing"
      ]
    },
    {
      id: 2,
      title: "Frontend Developer",
      department: "Technology",
      location: "Remote",
      type: "Full-time",
      experience: "3-5 years",
      description: "Build and maintain our advertising platform's user interface.",
      requirements: [
        "Proficient in React.js and modern JavaScript",
        "Experience with responsive design",
        "Knowledge of UI/UX principles"
      ]
    },
    {
      id: 3,
      title: "Media Sales Executive",
      department: "Sales",
      location: "Delhi, India",
      type: "Full-time",
      experience: "2-4 years",
      description: "Drive sales of our advertising solutions to businesses.",
      requirements: [
        "Strong communication and negotiation skills",
        "Experience in B2B sales",
        "Knowledge of advertising industry"
      ]
    },
    {
      id: 4,
      title: "Content Writer",
      department: "Creative",
      location: "Bangalore, India",
      type: "Full-time",
      experience: "2-3 years",
      description: "Create compelling content for marketing campaigns and brand materials.",
      requirements: [
        "Excellent writing and editing skills",
        "Experience in advertising copywriting",
        "Creative thinking and attention to detail"
      ]
    }
  ];

  const departments = ['all', 'Marketing', 'Technology', 'Sales', 'Creative'];

  const filteredJobs = selectedDepartment === 'all' 
    ? jobListings 
    : jobListings.filter(job => job.department === selectedDepartment);

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
            Join Our Team
          </h1>
          <p style={{
            fontSize: "20px",
            maxWidth: "800px",
            margin: "0 auto",
            opacity: "0.9"
          }}>
            Be part of a dynamic team that's revolutionizing the advertising industry. 
            Grow your career with us and make a real impact.
          </p>
        </div>
      </div>

      {/* Company Culture */}
      <div style={{ padding: "80px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "32px", marginBottom: "40px", color: "#333", textAlign: "center" }}>
            Why Work With Us?
          </h2>
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
                🚀 Growth Opportunities
              </h3>
              <p style={{ color: "#666", lineHeight: "1.6" }}>
                Continuous learning and career advancement in a fast-growing industry. 
                We invest in your professional development.
              </p>
            </div>

            <div style={{
              backgroundColor: "white",
              padding: "40px",
              borderRadius: "15px",
              boxShadow: "0 10px 30px rgba(0,0,0,0.1)"
            }}>
              <h3 style={{ fontSize: "24px", marginBottom: "20px", color: "#333" }}>
                💰 Competitive Benefits
              </h3>
              <p style={{ color: "#666", lineHeight: "1.6" }}>
                Attractive salary packages, health insurance, flexible work hours, 
                and performance-based bonuses.
              </p>
            </div>

            <div style={{
              backgroundColor: "white",
              padding: "40px",
              borderRadius: "15px",
              boxShadow: "0 10px 30px rgba(0,0,0,0.1)"
            }}>
              <h3 style={{ fontSize: "24px", marginBottom: "20px", color: "#333" }}>
                🌍 Work-Life Balance
              </h3>
              <p style={{ color: "#666", lineHeight: "1.6" }}>
                Flexible working arrangements, paid time off, and a supportive 
                environment that values your well-being.
              </p>
            </div>
          </div>

          {/* Job Listings */}
          <div style={{
            backgroundColor: "white",
            padding: "60px 40px",
            borderRadius: "15px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.1)"
          }}>
            <h2 style={{ fontSize: "32px", marginBottom: "30px", color: "#333", textAlign: "center" }}>
              Open Positions
            </h2>
            
            {/* Department Filter */}
            <div style={{
              display: "flex",
              justifyContent: "center",
              gap: "15px",
              marginBottom: "40px",
              flexWrap: "wrap"
            }}>
              {departments.map(dept => (
                <button
                  key={dept}
                  onClick={() => setSelectedDepartment(dept)}
                  style={{
                    padding: "10px 20px",
                    backgroundColor: selectedDepartment === dept ? "#667eea" : "transparent",
                    color: selectedDepartment === dept ? "white" : "#667eea",
                    border: `2px solid #667eea`,
                    borderRadius: "25px",
                    cursor: "pointer",
                    fontSize: "14px",
                    fontWeight: "600",
                    transition: "all 0.3s ease"
                  }}
                >
                  {dept === 'all' ? 'All Departments' : dept}
                </button>
              ))}
            </div>

            {/* Jobs Grid */}
            <div style={{
              display: "grid",
              gap: "30px"
            }}>
              {filteredJobs.map(job => (
                <div key={job.id} style={{
                  border: "1px solid #e1e5e9",
                  borderRadius: "12px",
                  padding: "30px",
                  transition: "all 0.3s ease",
                  cursor: "pointer"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = "0 10px 30px rgba(0,0,0,0.1)";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "none";
                  e.currentTarget.style.transform = "translateY(0)";
                }}>
                  <div style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    marginBottom: "20px",
                    flexWrap: "wrap",
                    gap: "15px"
                  }}>
                    <div>
                      <h3 style={{ fontSize: "22px", marginBottom: "10px", color: "#333" }}>
                        {job.title}
                      </h3>
                      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
                        <span style={{ color: "#667eea", fontSize: "14px" }}>
                          📍 {job.location}
                        </span>
                        <span style={{ color: "#667eea", fontSize: "14px" }}>
                          ⏰ {job.type}
                        </span>
                        <span style={{ color: "#667eea", fontSize: "14px" }}>
                          💼 {job.experience}
                        </span>
                      </div>
                    </div>
                    <span style={{
                      backgroundColor: "#667eea",
                      color: "white",
                      padding: "8px 16px",
                      borderRadius: "20px",
                      fontSize: "12px",
                      fontWeight: "600"
                    }}>
                      {job.department}
                    </span>
                  </div>
                  
                  <p style={{ color: "#666", lineHeight: "1.6", marginBottom: "20px" }}>
                    {job.description}
                  </p>
                  
                  <div>
                    <h4 style={{ fontSize: "16px", marginBottom: "15px", color: "#333" }}>
                      Requirements:
                    </h4>
                    <ul style={{ listStyle: "none", padding: 0 }}>
                      {job.requirements.map((req, index) => (
                        <li key={index} style={{
                          color: "#666",
                          marginBottom: "8px",
                          paddingLeft: "20px",
                          position: "relative"
                        }}>
                          <span style={{
                            position: "absolute",
                            left: "0",
                            color: "#667eea"
                          }}>•</span>
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <button style={{
                    backgroundColor: "#667eea",
                    color: "white",
                    padding: "12px 24px",
                    border: "none",
                    borderRadius: "25px",
                    fontSize: "14px",
                    fontWeight: "600",
                    cursor: "pointer",
                    marginTop: "20px",
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
                    Apply Now
                  </button>
                </div>
              ))}
            </div>

            {filteredJobs.length === 0 && (
              <div style={{ textAlign: "center", padding: "40px", color: "#666" }}>
                <h3>No positions available in this department at the moment.</h3>
                <p>Check back later or contact us for general inquiries.</p>
              </div>
            )}
          </div>

          {/* Contact Section */}
          <div style={{
            backgroundColor: "white",
            padding: "40px",
            borderRadius: "15px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
            marginTop: "40px",
            textAlign: "center"
          }}>
            <h3 style={{ fontSize: "24px", marginBottom: "20px", color: "#333" }}>
              Don't See a Perfect Fit?
            </h3>
            <p style={{ color: "#666", lineHeight: "1.6", marginBottom: "30px" }}>
              We're always looking for talented individuals to join our team. 
              Send us your resume and we'll keep you in mind for future opportunities.
            </p>
            <button style={{
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
            }}>
              Send Resume
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Careers;
