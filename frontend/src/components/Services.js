import React, { useState } from 'react';

const Services = ({ services }) => {
  const [selectedService, setSelectedService] = useState(null);
  const [showModal, setShowModal] = useState(false);

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
      '📻': 'fas fa-broadcast-tower',
      '🎬': 'fas fa-film'
    };
    return iconMap[iconName] || 'fas fa-star';
  };

  return (
    <section className="services" id="services">
      <div className="container">
        <h2>Our Services</h2>
        <div className="services-grid">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="service-card"
              onClick={() => handleServiceClick(service)}
              style={{ cursor: 'pointer' }}
            >
              <div className="service-icon">
                <i className={getServiceIcon(service.icon)}></i>
              </div>
              <h3>{service.name}</h3>
              <p>{service.description}</p>
              
              <ul className="service-features">
                {service.features && service.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
              
              <button 
                className="cta-button"
                style={{ marginTop: '20px', width: '100%' }}
                onClick={(e) => {
                  e.stopPropagation();
                  handleBookService(service.name);
                }}
              >
                Book Now
              </button>
            </div>
          ))}
        </div>

        {/* Service Details Modal */}
        {showModal && selectedService && (
          <div className="modal-overlay" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <div className="modal-header">
                <h3>{selectedService.name}</h3>
                <button className="modal-close" onClick={closeModal}>
                  <i className="fas fa-times"></i>
                </button>
              </div>
              
              <div className="modal-body">
                <p>{selectedService.description}</p>
                
                <h4 style={{ marginTop: '20px', marginBottom: '15px', color: '#2c3e95' }}>
                  Features Included:
                </h4>
                <ul style={{ listStyle: 'none', padding: '0' }}>
                  {selectedService.features && selectedService.features.map((feature, index) => (
                    <li key={index} style={{ padding: '5px 0', color: '#555' }}>
                      <i className="fas fa-check" style={{ color: '#28a745', marginRight: '10px' }}></i>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div style={{ marginTop: '30px', textAlign: 'center' }}>
                  <button 
                    className="cta-button"
                    onClick={() => handleBookService(selectedService.name)}
                    style={{ marginRight: '10px' }}
                  >
                    Book This Service
                  </button>
                  <button 
                    className="cta-button secondary"
                    onClick={() => alert('Get quote functionality')}
                  >
                    Get Quote
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Additional Services Info */}
        <div style={{ 
          textAlign: 'center', 
          marginTop: '60px', 
          padding: '40px', 
          background: 'linear-gradient(135deg, #2c3e95, #4a90e2)',
          borderRadius: '15px',
          color: 'white'
        }}>
          <h3 style={{ marginBottom: '20px', fontSize: '1.8rem' }}>
            Why Choose VipLav Advertising Co.?
          </h3>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
            gap: '30px',
            marginTop: '30px'
          }}>
            <div>
              <i className="fas fa-clock" style={{ fontSize: '2rem', marginBottom: '15px' }}></i>
              <h4>Quick & Easy Booking</h4>
              <p>Book your ads in just a few clicks with our simple interface</p>
            </div>
            <div>
              <i className="fas fa-rupee-sign" style={{ fontSize: '2rem', marginBottom: '15px' }}></i>
              <h4>Best Prices</h4>
              <p>Get the most competitive rates for all advertising platforms</p>
            </div>
            <div>
              <i className="fas fa-headset" style={{ fontSize: '2rem', marginBottom: '15px' }}></i>
              <h4>24/7 Support</h4>
              <p>Our expert team is always ready to help you with your campaigns</p>
            </div>
            <div>
              <i className="fas fa-chart-line" style={{ fontSize: '2rem', marginBottom: '15px' }}></i>
              <h4>Proven Results</h4>
              <p>Track your campaign performance with detailed analytics</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;