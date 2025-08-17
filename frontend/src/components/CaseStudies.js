import React, { useState } from 'react';

const CaseStudies = ({ caseStudies }) => {
  const [selectedStudy, setSelectedStudy] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');

  // Extended case studies with more detailed information
  const extendedCaseStudies = [
    ...caseStudies,
    {
      id: 3,
      title: "Mercedes Benz - Digital Presence",
      description: "Expanded online presence and targeted specific demographics through comprehensive digital marketing strategy",
      industry: "Automotive",
      results: "250% increase in online engagement",
      duration: "6 months",
      budget: "₹15-20 Lakhs",
      challenges: ["Reaching premium audience", "Brand positioning", "Digital transformation"],
      solutions: ["Targeted social media campaigns", "SEO optimization", "Premium content creation"],
      metrics: {
        "Social Engagement": "+250%",
        "Website Traffic": "+180%",
        "Lead Generation": "+200%",
        "Brand Awareness": "+150%"
      }
    },
    {
      id: 4,
      title: "Skoda Auto India - Lead Generation",
      description: "Enhanced visibility and generated substantial leads through multi-channel advertising approach",
      industry: "Automotive",
      results: "500+ qualified leads generated",
      duration: "4 months",
      budget: "₹10-15 Lakhs",
      challenges: ["Market competition", "Lead quality", "Cost optimization"],
      solutions: ["Newspaper advertising", "Digital campaigns", "Radio sponsorships"],
      metrics: {
        "Qualified Leads": "500+",
        "Cost per Lead": "-40%",
        "Brand Visibility": "+180%",
        "Sales Conversion": "+25%"
      }
    },
    {
      id: 5,
      title: "State Bank of India - App Promotion",
      description: "Promoted SBI-Anywhere mobile banking app to drive downloads and user engagement",
      industry: "Banking",
      results: "1M+ app downloads achieved",
      duration: "3 months",
      budget: "₹25-30 Lakhs",
      challenges: ["Digital adoption", "Trust building", "Mass reach"],
      solutions: ["Multi-media campaigns", "Educational content", "Regional targeting"],
      metrics: {
        "App Downloads": "1M+",
        "User Engagement": "+300%",
        "Transaction Volume": "+150%",
        "Customer Acquisition": "+200%"
      }
    },
    {
      id: 6,
      title: "CarDekho - Used Car Sales",
      description: "Increased second-hand car sales across major Indian cities through targeted advertising",
      industry: "Automotive",
      results: "40% increase in listings",
      duration: "5 months",
      budget: "₹8-12 Lakhs",
      challenges: ["City-specific targeting", "Competition", "Trust factor"],
      solutions: ["Location-based ads", "Testimonial campaigns", "Digital presence"],
      metrics: {
        "Listing Increase": "+40%",
        "User Base": "+60%",
        "Transaction Value": "+35%",
        "Market Share": "+15%"
      }
    }
  ];

  const industries = ['all', ...new Set(extendedCaseStudies.map(study => study.industry.toLowerCase()))];

  const filteredStudies = activeFilter === 'all' 
    ? extendedCaseStudies 
    : extendedCaseStudies.filter(study => study.industry.toLowerCase() === activeFilter);

  const handleStudyClick = (study) => {
    setSelectedStudy(study);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedStudy(null);
  };

  const getIndustryIcon = (industry) => {
    const iconMap = {
      'logistics': 'fas fa-truck',
      'fintech': 'fas fa-coins',
      'automotive': 'fas fa-car',
      'banking': 'fas fa-university',
      'technology': 'fas fa-laptop-code'
    };
    return iconMap[industry.toLowerCase()] || 'fas fa-briefcase';
  };

  const getIndustryColor = (industry) => {
    const colorMap = {
      'logistics': '#e74c3c',
      'fintech': '#2ecc71',
      'automotive': '#3498db',
      'banking': '#f39c12',
      'technology': '#9b59b6'
    };
    return colorMap[industry.toLowerCase()] || '#34495e';
  };

  return (
    <section className="case-studies" id="case-studies">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <h2>Success Stories</h2>
          <p style={{ fontSize: '1.1rem', color: '#666', marginTop: '15px' }}>
            Discover how we've helped businesses achieve remarkable results through strategic advertising
          </p>
        </div>

        {/* Filter Buttons */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          flexWrap: 'wrap',
          gap: '10px',
          marginBottom: '40px'
        }}>
          {industries.map(industry => (
            <button
              key={industry}
              onClick={() => setActiveFilter(industry)}
              style={{
                padding: '8px 20px',
                border: '2px solid #2c3e95',
                background: activeFilter === industry ? '#2c3e95' : 'white',
                color: activeFilter === industry ? 'white' : '#2c3e95',
                borderRadius: '25px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                textTransform: 'capitalize',
                fontWeight: '500'
              }}
            >
              {industry === 'all' ? 'All Industries' : industry}
            </button>
          ))}
        </div>
        
        <div className="case-studies-grid">
          {filteredStudies.map((study) => (
            <div key={study.id} className="case-study-card">
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                marginBottom: '15px'
              }}>
                <i 
                  className={getIndustryIcon(study.industry)}
                  style={{ 
                    fontSize: '1.5rem', 
                    color: getIndustryColor(study.industry),
                    marginRight: '10px'
                  }}
                />
                <span className="industry-tag" style={{
                  background: getIndustryColor(study.industry),
                  color: 'white'
                }}>
                  {study.industry}
                </span>
              </div>
              
              <h3>{study.title}</h3>
              <p>{study.description}</p>
              
              {study.duration && (
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between',
                  margin: '15px 0',
                  fontSize: '0.9rem',
                  color: '#666'
                }}>
                  <span><i className="fas fa-clock"></i> {study.duration}</span>
                  {study.budget && (
                    <span><i className="fas fa-rupee-sign"></i> {study.budget}</span>
                  )}
                </div>
              )}
              
              <div className="case-study-meta">
                <div className="results">{study.results}</div>
                <button 
                  onClick={() => handleStudyClick(study)}
                  style={{
                    background: 'none',
                    border: '2px solid #2c3e95',
                    color: '#2c3e95',
                    padding: '6px 12px',
                    borderRadius: '20px',
                    cursor: 'pointer',
                    fontSize: '0.8rem',
                    fontWeight: '500',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseOver={(e) => {
                    e.target.style.background = '#2c3e95';
                    e.target.style.color = 'white';
                  }}
                  onMouseOut={(e) => {
                    e.target.style.background = 'none';
                    e.target.style.color = '#2c3e95';
                  }}
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Case Study Details Modal */}
        {showModal && selectedStudy && (
          <div className="modal-overlay" onClick={closeModal}>
            <div 
              className="modal-content" 
              onClick={(e) => e.stopPropagation()}
              style={{ maxWidth: '700px', maxHeight: '90vh', overflow: 'auto' }}
            >
              <div className="modal-header">
                <div>
                  <h3 style={{ margin: '0 0 5px 0' }}>{selectedStudy.title}</h3>
                  <span 
                    className="industry-tag"
                    style={{
                      background: getIndustryColor(selectedStudy.industry),
                      color: 'white'
                    }}
                  >
                    {selectedStudy.industry}
                  </span>
                </div>
                <button className="modal-close" onClick={closeModal}>
                  <i className="fas fa-times"></i>
                </button>
              </div>
              
              <div className="modal-body">
                <p style={{ fontSize: '1.1rem', marginBottom: '25px', color: '#555' }}>
                  {selectedStudy.description}
                </p>
                
                {/* Project Overview */}
                <div style={{ 
                  display: 'grid', 
                  gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
                  gap: '15px',
                  marginBottom: '30px'
                }}>
                  <div style={{ textAlign: 'center', padding: '15px', background: '#f8f9fa', borderRadius: '8px' }}>
                    <i className="fas fa-clock" style={{ fontSize: '1.5rem', color: '#2c3e95', marginBottom: '8px' }}></i>
                    <div style={{ fontWeight: '600', color: '#2c3e95' }}>Duration</div>
                    <div style={{ color: '#666' }}>{selectedStudy.duration}</div>
                  </div>
                  {selectedStudy.budget && (
                    <div style={{ textAlign: 'center', padding: '15px', background: '#f8f9fa', borderRadius: '8px' }}>
                      <i className="fas fa-rupee-sign" style={{ fontSize: '1.5rem', color: '#28a745', marginBottom: '8px' }}></i>
                      <div style={{ fontWeight: '600', color: '#2c3e95' }}>Budget</div>
                      <div style={{ color: '#666' }}>{selectedStudy.budget}</div>
                    </div>
                  )}
                  <div style={{ textAlign: 'center', padding: '15px', background: '#f8f9fa', borderRadius: '8px' }}>
                    <i className="fas fa-chart-line" style={{ fontSize: '1.5rem', color: '#dc3545', marginBottom: '8px' }}></i>
                    <div style={{ fontWeight: '600', color: '#2c3e95' }}>Result</div>
                    <div style={{ color: '#666', fontSize: '0.9rem' }}>{selectedStudy.results}</div>
                  </div>
                </div>

                {/* Challenges & Solutions */}
                {selectedStudy.challenges && selectedStudy.solutions && (
                  <div style={{ 
                    display: 'grid', 
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                    gap: '20px',
                    marginBottom: '30px'
                  }}>
                    <div>
                      <h4 style={{ color: '#dc3545', marginBottom: '15px' }}>
                        <i className="fas fa-exclamation-triangle"></i> Challenges
                      </h4>
                      <ul style={{ listStyle: 'none', padding: '0' }}>
                        {selectedStudy.challenges.map((challenge, index) => (
                          <li key={index} style={{ padding: '5px 0', color: '#666' }}>
                            <i className="fas fa-times" style={{ color: '#dc3545', marginRight: '8px' }}></i>
                            {challenge}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 style={{ color: '#28a745', marginBottom: '15px' }}>
                        <i className="fas fa-lightbulb"></i> Solutions
                      </h4>
                      <ul style={{ listStyle: 'none', padding: '0' }}>
                        {selectedStudy.solutions.map((solution, index) => (
                          <li key={index} style={{ padding: '5px 0', color: '#666' }}>
                            <i className="fas fa-check" style={{ color: '#28a745', marginRight: '8px' }}></i>
                            {solution}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}

                {/* Metrics */}
                {selectedStudy.metrics && (
                  <div>
                    <h4 style={{ color: '#2c3e95', marginBottom: '20px' }}>
                      <i className="fas fa-chart-bar"></i> Key Metrics
                    </h4>
                    <div style={{ 
                      display: 'grid', 
                      gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
                      gap: '15px'
                    }}>
                      {Object.entries(selectedStudy.metrics).map(([metric, value]) => (
                        <div key={metric} style={{ 
                          textAlign: 'center', 
                          padding: '20px 15px', 
                          background: 'linear-gradient(135deg, #2c3e95, #4a90e2)',
                          color: 'white',
                          borderRadius: '8px'
                        }}>
                          <div style={{ fontSize: '1.8rem', fontWeight: '700', marginBottom: '5px' }}>
                            {value}
                          </div>
                          <div style={{ fontSize: '0.9rem', opacity: '0.9' }}>
                            {metric}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div style={{ textAlign: 'center', marginTop: '30px' }}>
                  <button 
                    className="cta-button"
                    onClick={() => alert('Get similar results functionality')}
                  >
                    Get Similar Results
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* CTA Section */}
        <div style={{
          marginTop: '60px',
          textAlign: 'center',
          background: 'linear-gradient(135deg, #2c3e95, #4a90e2)',
          color: 'white',
          padding: '50px 30px',
          borderRadius: '15px'
        }}>
          <h3 style={{ fontSize: '2rem', marginBottom: '15px' }}>
            Ready to Write Your Success Story?
          </h3>
          <p style={{ fontSize: '1.1rem', marginBottom: '30px', opacity: '0.9' }}>
            Join hundreds of successful businesses who have achieved remarkable results with our advertising solutions.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
            <button 
              className="cta-button"
              onClick={() => alert('Start your campaign functionality')}
              style={{ background: 'white', color: '#2c3e95' }}
            >
              Start Your Campaign
            </button>
            <button 
              className="cta-button"
              onClick={() => alert('Free consultation functionality')}
              style={{ background: 'transparent', border: '2px solid white' }}
            >
              Free Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;