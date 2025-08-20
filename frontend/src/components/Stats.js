import React, { useState, useEffect } from 'react';

// The Stats component displays animated numerical data in a responsive grid.
// It uses an IntersectionObserver to trigger the number animation when the component
// scrolls into the viewport.
const Stats = ({ stats }) => {
  // State to hold the animated values, initialized to 0.
  const [animatedStats, setAnimatedStats] = useState({});
  // State to track if the component is visible in the viewport,
  // used to trigger the progress bar animation.
  const [isVisible, setIsVisible] = useState(false);

  // useEffect hook to handle the IntersectionObserver.
  // It runs once on component mount to set up the observer.
  useEffect(() => {
    // Initialize animated stats with 0 for all keys in the `stats` prop.
    const initialStats = {};
    Object.keys(stats).forEach(key => {
      initialStats[key] = 0;
    });
    setAnimatedStats(initialStats);

    // Create a new IntersectionObserver instance.
    const observer = new IntersectionObserver(
      ([entry]) => {
        // If the observed element is intersecting the viewport...
        if (entry.isIntersecting) {
          // Set isVisible to true to trigger the progress bar.
          setIsVisible(true);
          // Animate the numbers.
          animateNumbers();
          // Disconnect the observer after the animation is triggered to run it only once.
          observer.disconnect();
        }
      },
      // The threshold determines when the callback is executed. 0.3 means
      // when 30% of the target is visible.
      { threshold: 0.3 }
    );

    // Find the section element by its ID and start observing it.
    const statsSection = document.getElementById('stats-section');
    if (statsSection) {
      observer.observe(statsSection);
    }

    // Cleanup function: disconnect the observer when the component unmounts.
    return () => {
      if (statsSection) {
        observer.unobserve(statsSection);
      }
    };
  }, [stats]); // Re-run effect if the stats prop changes.

  // Function to animate the numbers from 0 to their target value.
  const animateNumbers = () => {
    const duration = 2500; // 2.5 seconds
    const steps = 80; // More steps for a smoother animation.
    const stepDuration = duration / steps;

    // Loop through each key in the stats prop to animate each one.
    Object.keys(stats).forEach(key => {
      // Extract the numerical value and any suffix (like 'K' or '+').
      const targetValue = parseInt(stats[key].replace(/\D/g, '')) || 0;
      const suffix = stats[key].replace(/\d/g, '');
      let currentValue = 0;
      const increment = targetValue / steps;

      // Use setInterval to increment the number over time.
      const timer = setInterval(() => {
        currentValue += increment;
        // If the current value reaches or exceeds the target, stop the animation.
        if (currentValue >= targetValue) {
          currentValue = targetValue;
          clearInterval(timer);
        }
        
        // Update the state with the new value. The functional update (`prev => ...`)
        // ensures we're working with the latest state.
        setAnimatedStats(prev => ({
          ...prev,
          [key]: Math.floor(currentValue) + suffix
        }));
      }, stepDuration);
    });
  };

  // Configuration for each stat card, including key, label, icon, and colors.
  const statsConfig = [
    { key: 'customers', label: 'Satisfied Customers', icon: 'fas fa-users', color: '#ff6b6b', bgGradient: 'linear-gradient(135deg, #ff6b6b, #ff8e8e)' },
    { key: 'teamMembers', label: 'Expert Team Members', icon: 'fas fa-user-tie', color: '#4ecdc4', bgGradient: 'linear-gradient(135deg, #4ecdc4, #6ee7df)' },
    { key: 'advertisingChoices', label: 'Advertising Choices', icon: 'fas fa-bullhorn', color: '#45b7d1', bgGradient: 'linear-gradient(135deg, #45b7d1, #6bc5e0)' },
    { key: 'vendorCollaborations', label: 'Vendor Collaborations', icon: 'fas fa-handshake', color: '#f9ca24', bgGradient: 'linear-gradient(135deg, #f9ca24, #fdd835)' },
    { key: 'campaigns', label: 'Successful Campaigns', icon: 'fas fa-rocket', color: '#a55eea', bgGradient: 'linear-gradient(135deg, #a55eea, #c44569)' }
  ];

  // Inline styles for the component.
  const styles = {
    statsSection: {
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      padding: '60px 0',
      position: 'relative',
      overflow: 'hidden',
      fontFamily: '"Poppins", sans-serif'
    },
    backgroundPattern: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      opacity: 0.1,
      backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      backgroundSize: '60px 60px'
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 15px',
      position: 'relative',
      zIndex: 2
    },
    header: {
      textAlign: 'center',
      marginBottom: '50px'
    },
    title: {
      color: 'white',
      fontSize: '2.5rem',
      fontWeight: '900',
      marginBottom: '10px',
      textShadow: '0 4px 20px rgba(0,0,0,0.3)',
      letterSpacing: '-0.02em'
    },
    subtitle: {
      color: 'rgba(255,255,255,0.9)',
      fontSize: '1rem',
      fontWeight: '400',
      maxWidth: '600px',
      margin: '0 auto',
      lineHeight: '1.6'
    },
    // Flexbox for a single row layout.
    statsGrid: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '15px',
      marginBottom: '50px',
      padding: '0 15px',
      flexWrap: 'nowrap',
      overflowX: 'hidden',
      WebkitOverflowScrolling: 'touch', // Enable smooth scrolling on iOS
    },
    statCard: {
      background: 'rgba(255, 255, 255, 0.15)',
      backdropFilter: 'blur(20px)',
      borderRadius: '15px',
      padding: '25px 15px',
      textAlign: 'center',
      border: '1px solid rgba(255, 255, 255, 0.2)',
      transition: 'all 0.4s ease',
      position: 'relative',
      overflow: 'hidden',
      flex: '0 0 200px', 
      margin: '5px'
    },
    statCardHover: {
      transform: 'translateY(-5px)',
      boxShadow: '0 15px 30px rgba(0,0,0,0.2)',
      background: 'rgba(255, 255, 255, 0.25)'
    },
    iconContainer: {
      width: '50px',
      height: '50px',
      margin: '0 auto 10px',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      transition: 'all 0.4s ease'
    },
    icon: {
      fontSize: '1.5rem',
      color: 'white',
      zIndex: 2,
      position: 'relative'
    },
    statNumber: {
      fontSize: '2rem',
      fontWeight: '900',
      marginBottom: '5px',
      display: 'block',
      textShadow: '0 2px 10px rgba(0,0,0,0.3)',
      letterSpacing: '-0.02em'
    },
    statLabel: {
      color: 'rgba(255,255,255,0.95)',
      fontSize: '0.8rem',
      fontWeight: '600',
      marginBottom: '10px',
      textTransform: 'uppercase',
      letterSpacing: '0.5px',
      // Added height to maintain consistency
      height: '1.8rem', 
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      lineHeight: '1.1'
    },
    progressContainer: {
      width: '80%',
      height: '4px',
      background: 'rgba(255,255,255,0.2)',
      borderRadius: '10px',
      overflow: 'hidden',
      position: 'relative',
      margin: '0 auto'
    },
    progressBar: {
      height: '100%',
      borderRadius: '10px',
      transition: 'width 2.5s cubic-bezier(0.4, 0, 0.2, 1)',
      position: 'relative'
    },
    progressGlow: {
      position: 'absolute',
      top: '-1px',
      right: '-5px',
      width: '10px',
      height: '5px',
      borderRadius: '50%',
      filter: 'blur(4px)',
      opacity: 0.8
    },
    floatingElement: {
      position: 'absolute',
      width: '80px',
      height: '80px',
      borderRadius: '50%',
      background: 'rgba(255,255,255,0.05)',
      animation: 'float 6s ease-in-out infinite'
    }
  };

  return (
    <section style={styles.statsSection} id="stats-section">
      <div style={styles.backgroundPattern}></div>

      {/* Floating decorative elements for a dynamic background effect */}
      <div style={{...styles.floatingElement, top: '10%', left: '5%', animationDelay: '0s'}}></div>
      <div style={{...styles.floatingElement, top: '25%', right: '10%', animationDelay: '2s'}}></div>
      <div style={{...styles.floatingElement, bottom: '10%', left: '15%', animationDelay: '4s'}}></div>

      <div style={styles.container}>
        {/* Header section with a title and subtitle */}
        <div style={styles.header}>
          <h2 style={styles.title}>Our Achievements</h2>
          <p style={styles.subtitle}>
            Numbers that speak for our excellence and dedication in transforming businesses through strategic advertising
          </p>
        </div>

        {/* The main grid of stat cards */}
        <div style={styles.statsGrid}>
          {statsConfig.map((statConfig, index) => (
            <div
              key={statConfig.key}
              style={styles.statCard}
              onMouseEnter={(e) => {
                Object.assign(e.currentTarget.style, styles.statCardHover);
              }}
              onMouseLeave={(e) => {
                Object.assign(e.currentTarget.style, styles.statCard);
              }}
            >
              {/* Stat icon with a gradient background and shadow */}
              <div
                style={{
                  ...styles.iconContainer,
                  background: statConfig.bgGradient,
                  boxShadow: `0 10px 25px ${statConfig.color}40`
                }}
              >
                <i className={statConfig.icon} style={styles.icon} />
              </div>

              {/* The animated number */}
              <span
                style={{
                  ...styles.statNumber,
                  color: statConfig.color
                }}
              >
                {animatedStats[statConfig.key] || '0'}
              </span>

              {/* The label for the stat */}
              <div style={styles.statLabel}>{statConfig.label}</div>

              {/* Animated progress bar */}
              <div style={styles.progressContainer}>
                <div
                  style={{
                    ...styles.progressBar,
                    width: isVisible ? '100%' : '0%',
                    background: statConfig.bgGradient,
                    boxShadow: `0 0 10px ${statConfig.color}60`,
                    animationDelay: `${index * 0.15}s`
                  }}
                >
                  <div
                    style={{
                      ...styles.progressGlow,
                      background: statConfig.color
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Global CSS for keyframes and responsive design */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(180deg); }
        }
      `}</style>
    </section>
  );
};

export default Stats;
