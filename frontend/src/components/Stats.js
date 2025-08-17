import React, { useState, useEffect } from 'react';

const Stats = ({ stats }) => {
  const [animatedStats, setAnimatedStats] = useState({});
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Initialize animated stats with 0
    const initialStats = {};
    Object.keys(stats).forEach(key => {
      initialStats[key] = 0;
    });
    setAnimatedStats(initialStats);

    // Intersection Observer to trigger animation when section is visible
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          animateNumbers();
        }
      },
      { threshold: 0.5 }
    );

    const statsSection = document.getElementById('stats-section');
    if (statsSection) {
      observer.observe(statsSection);
    }

    return () => {
      if (statsSection) {
        observer.unobserve(statsSection);
      }
    };
  }, [stats]);

  const animateNumbers = () => {
    const duration = 2000; // 2 seconds
    const steps = 60; // 60 steps for smooth animation
    const stepDuration = duration / steps;

    Object.keys(stats).forEach(key => {
      const targetValue = parseInt(stats[key].replace(/\D/g, '')) || 0;
      const suffix = stats[key].replace(/\d/g, '');
      let currentValue = 0;
      const increment = targetValue / steps;

      const timer = setInterval(() => {
        currentValue += increment;
        if (currentValue >= targetValue) {
          currentValue = targetValue;
          clearInterval(timer);
        }
        
        setAnimatedStats(prev => ({
          ...prev,
          [key]: Math.floor(currentValue) + suffix
        }));
      }, stepDuration);
    });
  };

  const statsConfig = [
    {
      key: 'customers',
      label: 'Satisfied Customers',
      icon: 'fas fa-users',
      color: '#ffc107'
    },
    {
      key: 'teamMembers',
      label: 'Expert Team Members',
      icon: 'fas fa-user-tie',
      color: '#28a745'
    },
    {
      key: 'advertisingChoices',
      label: 'Advertising Choices',
      icon: 'fas fa-bullhorn',
      color: '#17a2b8'
    },
    {
      key: 'vendorCollaborations',
      label: 'Vendor Collaborations',
      icon: 'fas fa-handshake',
      color: '#fd7e14'
    },
    {
      key: 'campaigns',
      label: 'Successful Campaigns',
      icon: 'fas fa-rocket',
      color: '#e83e8c'
    },
    {
      key: 'specializedAreas',
      label: 'Specialized Areas',
      icon: 'fas fa-star',
      color: '#6f42c1'
    }
  ];

  return (
    <section className="stats" id="stats-section">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <h2 style={{ color: 'white', fontSize: '2.5rem', marginBottom: '20px' }}>
            Our Achievements
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.1rem' }}>
            Numbers that speak for our excellence and dedication
          </p>
        </div>
        
        <div className="stats-grid">
          {statsConfig.map((statConfig) => (
            <div key={statConfig.key} className="stat-item">
              <div style={{ marginBottom: '20px' }}>
                <i 
                  className={statConfig.icon} 
                  style={{ 
                    fontSize: '3rem', 
                    color: statConfig.color,
                    marginBottom: '15px',
                    display: 'block'
                  }} 
                />
              </div>
              <span className="stat-number" style={{ color: statConfig.color }}>
                {animatedStats[statConfig.key] || stats[statConfig.key] || '0'}
              </span>
              <div className="stat-label">{statConfig.label}</div>
              
              {/* Progress bar */}
              <div style={{
                width: '100%',
                height: '4px',
                background: 'rgba(255,255,255,0.2)',
                borderRadius: '2px',
                marginTop: '15px',
                overflow: 'hidden'
              }}>
                <div 
                  style={{
                    width: isVisible ? '100%' : '0%',
                    height: '100%',
                    background: statConfig.color,
                    transition: 'width 2s ease-in-out',
                    borderRadius: '2px'
                  }}
                />
              </div>
            </div>
          ))}
        </div>
        
        {/* Additional Info */}
        <div style={{ 
          textAlign: 'center', 
          marginTop: '60px',
          padding: '30px',
          background: 'rgba(255,255,255,0.1)',
          borderRadius: '15px',
          backdropFilter: 'blur(10px)'
        }}>
          <h3 style={{ color: '#ffc107', marginBottom: '15px' }}>
            Trusted by Leading Brands Across India
          </h3>
          <p style={{ color: 'rgba(255,255,255,0.9)' }}>
            From startups to Fortune 500 companies, we've helped businesses of all sizes 
            achieve their advertising goals with our comprehensive solutions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Stats;