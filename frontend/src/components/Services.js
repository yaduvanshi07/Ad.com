import React, { useState } from 'react';

const Services = ({ services }) => {
  const [selectedService, setSelectedService] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showMoreServices, setShowMoreServices] = useState(false);
  const [hoveredCards, setHoveredCards] = useState({});

  const handleServiceClick = (service) => {
    setSelectedService(service);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedService(null);
  };

  const handleBookService = (serviceName) => {
    alert(`Booking ${serviceName}... This would redirect to booking form.`);
    closeModal();
  };

  const getServiceIcon = (iconName) => {
    const iconMap = {
      '📰': 'fas fa-newspaper',
      '💻': 'fas fa-laptop',
      '🌐': 'fas fa-globe',
      '📧': 'fas fa-envelope',
      '📻': 'fas fa-broadcast-tower',
      '🎬': 'fas fa-film',
      '📺': 'fas fa-tv',
      '🌟': 'fas fa-user-friends',
      '🏢': 'fas fa-building',
      '📱': 'fas fa-mobile-alt',
      '🎯': 'fas fa-bullseye',
      '📢': 'fas fa-megaphone',
      '🖥️': 'fas fa-desktop',
      '🚌': 'fas fa-bus'
    };
    return iconMap[iconName] || 'fas fa-star';
  };

  // Six canonical services to show as cards
  const defaultServices = [
    {
      id: 1,
      name: 'Newspaper Advertising',
      description: 'Front page, display and classified ads in top national and regional dailies.',
      icon: '📰',
      image: '/services/newspaper.jpg',
      features: []
    },
    {
      id: 2,
      name: 'Cinema Advertising',
      description: 'On‑screen ads and lobby placements across multiplex chains.',
      icon: '🎬',
      image: '/services/cinema.jpg',
      features: []
    },
    {
      id: 3,
      name: 'TV Advertising',
      description: 'Prime-time packages , Regional & national channels , Category targeting',
      icon: '📺',
      image: '/services/tv.jpg',
      features: []
    },
    {
      id: 4,
      name: 'Radio Advertising',
      description: 'City-wide reach with RJ mentions, sponsorships and spot ads.',
      icon: '📻',
      image: '/services/radio.jpg',
      features: []
    },
    {
      id: 5,
      name: 'Digital Marketing',
      description: 'Meta & Google Ads, SEO & Content, Remarketing & funnels',
      icon: '📧',
      image: '/services/digital.jpg',
      features: []
    },
    {
      id: 6,
      name: 'Influencer Marketing',
      description: 'Creator collaborations across Instagram, YouTube and more.',
      icon: '🌟',
      image: '/services/influencer.jpg',
      features: []
    }
  ];

  // Additional services
  const additionalServices = [
    {
      id: 7,
      name: 'Lift Branding',
      description: 'Brand your message in elevators across commercial and residential buildings.',
      icon: '🏢',
      features: ['Premium locations', 'High visibility', 'Targeted audience']
    },
    {
      id: 8,
      name: 'Hyperlocal SMS',
      description: 'Location-based SMS campaigns for maximum local reach.',
      icon: '📱',
      features: ['Geo-targeting', 'Bulk messaging', 'Analytics tracking']
    },
    {
      id: 9,
      name: 'OTT/Media Buying',
      description: 'Connected TV and streaming platform advertising solutions.',
      icon: '🎯',
      features: ['Premium platforms', 'Targeted reach', 'Video content']
    },
    {
      id: 10,
      name: 'Digital PR',
      description: 'Online reputation management and digital public relations.',
      icon: '🌐',
      features: ['Press releases', 'Media outreach', 'Brand reputation']
    },
    {
      id: 11,
      name: 'Programmatic Ads',
      description: 'Automated ad buying for precise targeting and optimization.',
      icon: '🖥️',
      features: ['Real-time bidding', 'AI optimization', 'Cross-platform']
    },
    {
      id: 12,
      name: 'Transit Media',
      description: 'Bus, metro, and airport advertising for mobile audiences.',
      icon: '🚌',
      features: ['High footfall', 'Multiple formats', 'Route optimization']
    },
    {
      id: 13,
      name: 'Outdoor/DOOH',
      description: 'Digital and traditional outdoor advertising solutions.',
      icon: '📺',
      features: ['Billboard campaigns', 'Digital displays', 'Prime locations']
    }
  ];

  const headerHeight = 32; // Reduced from 48px to 32px

  const styles = {
    services: {
      padding: '80px 0',
      backgroundColor: '#f8fafc',
      fontFamily: '"Poppins", sans-serif'
    },
    container: {
      maxWidth: '1400px',
      margin: '0 auto',
      padding: '0 60px'
    },
    title: {
      fontSize: '3.5rem',
      fontWeight: '900',
      textAlign: 'center',
      marginBottom: '15px',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      letterSpacing: '-0.02em'
    },
    subtitle: {
      fontSize: '1.3rem',
      textAlign: 'center',
      color: '#64748b',
      marginBottom: '60px',
      fontWeight: '400'
    },
    servicesGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '40px',
      marginBottom: '50px'
    },
    serviceCard: {
      position: 'relative',
      borderRadius: '18px',
      overflow: 'hidden',
      boxShadow: '0 15px 35px rgba(0,0,0,0.1)',
      transition: 'all 0.4s ease',
      cursor: 'pointer',
      height: '280px',
      transform: 'translateY(0)',
    },
    serviceHeader: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: `${headerHeight}px`,
      backgroundColor: '#f5f5dc',
      color: '#8b4513',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: '700', // Reduced from 800
      letterSpacing: '0.3px', // Reduced from 0.5px
      textTransform: 'uppercase',
      borderTopLeftRadius: '18px',
      borderTopRightRadius: '18px',
      zIndex: 2,
      boxShadow: '0 4px 15px rgba(245, 245, 220, 0.6)',
      fontSize: '0.8rem' // Added smaller font size
    },
    serviceCardHover: {
      transform: 'translateY(-15px)',
      boxShadow: '0 30px 60px rgba(0,0,0,0.15)'
    },
    serviceImage: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      transition: 'all 0.6s ease'
    },
    serviceOverlay: {
      position: 'absolute',
      top: `${headerHeight}px`,
      left: '0',
      right: '0',
      bottom: '36px', // Reduced from 50px to account for smaller button
      background: 'linear-gradient(45deg, rgba(102, 126, 234, 0.95) 0%, rgba(118, 75, 162, 0.95) 100%)',
      padding: '20px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      color: 'white',
      opacity: '0',
      transition: 'all 0.6s ease',
    },
    serviceOverlayVisible: {
      opacity: '1'
    },
    serviceIcon: {
      fontSize: '2.5rem',
      marginBottom: '12px',
      color: '#fff'
    },
    serviceName: {
      fontSize: '1.5rem',
      fontWeight: '800',
      marginBottom: '10px',
      color: '#fff',
      letterSpacing: '-0.01em',
      textShadow: '0 2px 4px rgba(0,0,0,0.3)',
      lineHeight: '1.2'
    },
    serviceDescription: {
      fontSize: '0.9rem',
      lineHeight: '1.4',
      marginBottom: '12px',
      color: 'rgba(255,255,255,0.95)',
      fontWeight: '500',
      textShadow: '0 1px 2px rgba(0,0,0,0.2)'
    },
    serviceFeatures: {
      listStyle: 'none',
      padding: '0',
      margin: '0'
    },
    serviceFeatureItem: {
      padding: '2px 0',
      fontSize: '0.8rem',
      color: 'rgba(255,255,255,0.85)',
      position: 'relative',
      paddingLeft: '12px'
    },
    serviceFooter: {
      position: 'absolute',
      bottom: '0',
      left: '0',
      right: '0',
      padding: '0',
      background: 'rgba(0,0,0,0.1)',
      backdropFilter: 'blur(10px)',
      borderBottomLeftRadius: '18px',
      borderBottomRightRadius: '18px'
    },
    ctaButton: {
      width: '100%',
      padding: '10px 16px', // Reduced from 14px 20px
      backgroundColor: '#f5f5dc',
      color: '#8b4513',
      border: 'none',
      borderRadius: '0 0 18px 18px',
      fontSize: '0.85rem', // Reduced from 1rem
      fontWeight: '600', // Reduced from 700
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      boxShadow: '0 4px 15px rgba(245, 245, 220, 0.6)',
      letterSpacing: '0.3px', // Reduced from 0.5px
      textTransform: 'uppercase'
    },
    ctaButtonHover: {
      backgroundColor: '#f0e68c',
      transform: 'translateY(-2px)',
      boxShadow: '0 8px 25px rgba(240, 230, 140, 0.8)'
    },
    showMoreButton: {
      display: 'block',
      margin: '40px auto',
      padding: '15px 40px',
      backgroundColor: 'transparent',
      color: '#667eea',
      border: '2px solid #667eea',
      borderRadius: '50px',
      fontSize: '1.2rem',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s ease'
    },
    additionalServicesGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '24px',
      marginBottom: '50px'
    },
    additionalServiceCard: {
      backgroundColor: 'white',
      borderRadius: '12px',
      padding: '20px',
      boxShadow: '0 8px 25px rgba(0,0,0,0.08)',
      transition: 'all 0.3s ease',
      height: 'auto',
      minHeight: '180px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'center',
      border: '1px solid #f1f5f9'
    },
    whyChooseSection: {
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      borderRadius: '25px',
      padding: '60px 40px',
      color: 'white',
      textAlign: 'center'
    },
    whyChooseTitle: {
      fontSize: '2.5rem',
      fontWeight: '700',
      marginBottom: '50px',
      color: '#fff'
    },
    whyChooseGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '40px'
    },
    whyChooseItem: {
      textAlign: 'center'
    },
    whyChooseIcon: {
      fontSize: '3rem',
      marginBottom: '20px',
      color: '#ffd700'
    },
    whyChooseItemTitle: {
      fontSize: '1.4rem',
      fontWeight: '600',
      marginBottom: '15px',
      color: '#fff'
    },
    whyChooseItemDesc: {
      fontSize: '1rem',
      lineHeight: '1.6',
      color: 'rgba(255,255,255,0.9)'
    }
  };

  return (
    <section style={styles.services} id="services">
      <div style={styles.container}>
        <h2 style={styles.title}>What Media are you looking for?</h2>
        <p style={styles.subtitle}>Book your ads easily and reach your target audience effectively</p>
        
        <div style={styles.servicesGrid}>
          {defaultServices.map((service) => {
            const isHovered = hoveredCards[service.id] || false;
            
            return (
              <div 
                key={service.id} 
                style={{
                  ...styles.serviceCard,
                  ...(isHovered ? styles.serviceCardHover : {})
                }}
                onClick={() => handleServiceClick(service)}
                onMouseEnter={() => setHoveredCards(prev => ({...prev, [service.id]: true}))}
                onMouseLeave={() => setHoveredCards(prev => ({...prev, [service.id]: false}))}
              >
                <div style={styles.serviceHeader}>{service.name}</div>
                <img 
                  src={service.image} 
                  alt={service.name} 
                  style={{
                    ...styles.serviceImage,
                    transform: isHovered ? 'scale(1.1)' : 'scale(1)'
                  }}
                />
                
                <div style={{
                  ...styles.serviceOverlay,
                  ...(isHovered ? styles.serviceOverlayVisible : {})
                }}>
                  <div style={styles.serviceIcon}>
                    <i className={getServiceIcon(service.icon)}></i>
                  </div>
                  <h3 style={styles.serviceName}>{service.name}</h3>
                  <p style={styles.serviceDescription}>{service.description}</p>
                  <ul style={styles.serviceFeatures}>
                    {service.features && service.features.map((feature, index) => (
                      <li key={index} style={styles.serviceFeatureItem}>
                        • {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div style={styles.serviceFooter}>
                  <button 
                    style={styles.ctaButton}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleBookService(service.name);
                    }}
                    onMouseEnter={(e) => {
                      Object.assign(e.target.style, styles.ctaButtonHover);
                    }}
                    onMouseLeave={(e) => {
                      Object.assign(e.target.style, styles.ctaButton);
                    }}
                  >
                    Book Now
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Show More Button */}
        <button 
          style={styles.showMoreButton}
          onClick={() => setShowMoreServices(!showMoreServices)}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = '#667eea';
            e.target.style.color = 'white';
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = 'transparent';
            e.target.style.color = '#667eea';
          }}
        >
          {showMoreServices ? 'Show Less Services' : 'Show More Services'}
        </button>

        {/* Additional Services */}
        {showMoreServices && (
          <div style={styles.additionalServicesGrid}>
            {additionalServices.map((service) => (
              <div 
                key={service.id} 
                style={styles.additionalServiceCard}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 15px 40px rgba(0,0,0,0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.08)';
                }}
              >
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px', flex: 1 }}>
                  <div style={{ fontSize: '1.8rem', color: '#667eea' }}>
                    <i className={getServiceIcon(service.icon)}></i>
                  </div>
                  <h4 style={{ fontSize: '1rem', fontWeight: '700', color: '#2d3748', margin: 0, textAlign: 'center' }}>
                    {service.name}
                  </h4>
                  <p style={{ fontSize: '0.85rem', color: '#64748b', textAlign: 'center', margin: 0, lineHeight: '1.4' }}>
                    {service.description}
                  </p>
                </div>
                <button 
                  style={{
                    width: '100%',
                    padding: '8px 16px',
                    backgroundColor: '#f5f5dc',
                    color: '#8b4513',
                    border: 'none',
                    borderRadius: '8px',
                    fontSize: '0.85rem',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    marginTop: '12px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.3px'
                  }}
                  onClick={() => handleBookService(service.name)}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = '#f0e68c';
                    e.target.style.transform = 'translateY(-1px)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = '#f5f5dc';
                    e.target.style.transform = 'translateY(0)';
                  }}
                >
                  Book Now
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Why Choose VipLav Advertising Co. */}
        <div style={styles.whyChooseSection}>
          <h3 style={styles.whyChooseTitle}>Why Choose VipLav Advertising Co.?</h3>
          <div style={styles.whyChooseGrid}>
            <div style={styles.whyChooseItem}>
              <i className="fas fa-clock" style={styles.whyChooseIcon}></i>
              <h4 style={styles.whyChooseItemTitle}>Quick & Easy Booking</h4>
              <p style={styles.whyChooseItemDesc}>Book your ads in just a few clicks with our simple interface</p>
            </div>
            <div style={styles.whyChooseItem}>
              <i className="fas fa-rupee-sign" style={styles.whyChooseIcon}></i>
              <h4 style={styles.whyChooseItemTitle}>Best Prices</h4>
              <p style={styles.whyChooseItemDesc}>Get the most competitive rates for all advertising platforms</p>
            </div>
            <div style={styles.whyChooseItem}>
              <i className="fas fa-headset" style={styles.whyChooseIcon}></i>
              <h4 style={styles.whyChooseItemTitle}>24/7 Support</h4>
              <p style={styles.whyChooseItemDesc}>Our expert team is always ready to help you with your campaigns</p>
            </div>
            <div style={styles.whyChooseItem}>
              <i className="fas fa-chart-line" style={styles.whyChooseIcon}></i>
              <h4 style={styles.whyChooseItemTitle}>Proven Results</h4>
              <p style={styles.whyChooseItemDesc}>Track your campaign performance with detailed analytics</p>
            </div>
          </div>
        </div>

        {/* Service Details Modal */}
        {showModal && selectedService && (
          <div 
            style={{
              position: 'fixed',
              top: '0',
              left: '0',
              right: '0',
              bottom: '0',
              backgroundColor: 'rgba(0,0,0,0.7)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: '1000',
              backdropFilter: 'blur(5px)'
            }}
            onClick={closeModal}
          >
            <div 
              style={{
                backgroundColor: 'white',
                borderRadius: '20px',
                padding: '40px',
                maxWidth: '600px',
                width: '90%',
                maxHeight: '80%',
                overflow: 'auto',
                boxShadow: '0 25px 50px rgba(0,0,0,0.3)'
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
                <h3 style={{ fontSize: '2rem', fontWeight: '700', color: '#2d3748', margin: '0' }}>
                  {selectedService.name}
                </h3>
                <button 
                  style={{
                    background: 'none',
                    border: 'none',
                    fontSize: '1.5rem',
                    cursor: 'pointer',
                    color: '#64748b',
                    padding: '5px'
                  }}
                  onClick={closeModal}
                >
                  <i className="fas fa-times"></i>
                </button>
              </div>
              
              <div>
                <p style={{ fontSize: '1.1rem', lineHeight: '1.6', color: '#4a5568', marginBottom: '25px' }}>
                  {selectedService.description}
                </p>
                
                <h4 style={{ fontSize: '1.4rem', fontWeight: '600', marginBottom: '15px', color: '#2d3748' }}>
                  Features Included:
                </h4>
                <ul style={{ listStyle: 'none', padding: '0', marginBottom: '30px' }}>
                  {selectedService.features && selectedService.features.map((feature, index) => (
                    <li key={index} style={{ 
                      padding: '8px 0', 
                      color: '#4a5568',
                      fontSize: '1rem',
                      position: 'relative',
                      paddingLeft: '25px'
                    }}>
                      <i className="fas fa-check" style={{ 
                        color: '#10b981', 
                        position: 'absolute',
                        left: '0',
                        top: '10px'
                      }}></i>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div style={{ textAlign: 'center' }}>
                  <button 
                    style={{
                      padding: '12px 30px',
                      backgroundColor: '#ff6b6b',
                      color: 'white',
                      border: 'none',
                      borderRadius: '50px',
                      fontSize: '1.1rem',
                      fontWeight: '600',
                      cursor: 'pointer',
                      marginRight: '15px',
                      transition: 'all 0.3s ease'
                    }}
                    onClick={() => handleBookService(selectedService.name)}
                  >
                    Book This Service
                  </button>
                  <button 
                    style={{
                      padding: '12px 30px',
                      backgroundColor: 'transparent',
                      color: '#667eea',
                      border: '2px solid #667eea',
                      borderRadius: '50px',
                      fontSize: '1.1rem',
                      fontWeight: '600',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease'
                    }}
                    onClick={() => alert('Get quote functionality')}
                  >
                    Get Quote
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      <Services />
    </div>
  );
}

export default App;