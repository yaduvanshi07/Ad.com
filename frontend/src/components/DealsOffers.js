import React from 'react';

const BooksOffers = () => {
  const mediaServices = [
    {
      title: "Newspaper Advertising",
      actionText: "Book Now",
      bgColor: "#e3f2fd"
    },
    {
      title: "Digital Marketing",
      actionText: "Book Now",
      bgColor: "#e3f2fd"
    },
    {
      title: "Radio Advertising",
      actionText: "Book Now",
      bgColor: "#e3f2fd"
    },
    {
      title: "Influencer",
      actionText: "Fill Query or Call 880033...",
      bgColor: "#e3f2fd"
    }
  ];

  return (
    <div style={styles.wrapper}>
      {/* Main Title and Hire Section */}
      <section style={styles.mainSection}>
        <div style={styles.container}>
          <h1 style={styles.mainTitle}>Books and Offers</h1>
          
          {/* Hire Card */}
          <div style={styles.hireCard}>
            <h2 style={styles.hireTitle}>Hire Dedicated Media Planner for your business Today!</h2>
            <div style={styles.hireDetails}>
              <p style={styles.hirePrice}>Just 499/-</p>
              <button style={styles.hireButton}>Hire Now</button>
            </div>
          </div>
          
          <div style={styles.divider}></div>
        </div>
      </section>

      {/* Media Services Section */}
      <section style={styles.mediaSection}>
        <div style={styles.container}>
          <h2 style={styles.mediaTitle}>What Media are you looking for?</h2>
          <p style={styles.mediaSubtitle}>
            The right place for your business: BookMyAd provides 360-degree solutions. Book the best advertising options for you online here:
          </p>
          
          <div style={styles.mediaGrid}>
            {/* Newspaper Advertising */}
            <div style={styles.mediaCard}>
              <div style={{...styles.mediaImageContainer, backgroundColor: "#e3f2fd"}}>
                <div style={styles.newspaperIcon}>📰</div>
              </div>
              <div style={styles.mediaCardContent}>
                <h3 style={styles.mediaCardTitle}>Start Your</h3>
                <h4 style={styles.mediaCardService}>Newspaper Advertising</h4>
                <button style={styles.mediaCardButton}>Book Now</button>
              </div>
            </div>
            
            {/* Digital Marketing */}
            <div style={styles.mediaCard}>
              <div style={{...styles.mediaImageContainer, backgroundColor: "#e3f2fd"}}>
                <div style={styles.digitalIcon}>💻</div>
              </div>
              <div style={styles.mediaCardContent}>
                <h3 style={styles.mediaCardTitle}>Start Your</h3>
                <h4 style={styles.mediaCardService}>Digital Marketing</h4>
                <button style={styles.mediaCardButton}>Book Now</button>
              </div>
            </div>
            
            {/* Radio Advertising */}
            <div style={styles.mediaCard}>
              <div style={{...styles.mediaImageContainer, backgroundColor: "#e3f2fd"}}>
                <div style={styles.radioIcon}>📻</div>
              </div>
              <div style={styles.mediaCardContent}>
                <h3 style={styles.mediaCardTitle}>Start Your</h3>
                <h4 style={styles.mediaCardService}>Radio Advertising</h4>
                <button style={styles.mediaCardButton}>Book Now</button>
              </div>
            </div>
            
            {/* Influencer */}
            <div style={styles.mediaCard}>
              <div style={{...styles.mediaImageContainer, backgroundColor: "#e3f2fd"}}>
                <div style={styles.influencerIcon}>👥</div>
              </div>
              <div style={styles.mediaCardContent}>
                <h3 style={styles.mediaCardTitle}>Start Your</h3>
                <h4 style={styles.mediaCardService}>Influencer</h4>
                <button style={{...styles.mediaCardButton, backgroundColor: "#ff4444"}}>
                  Fill Query or Call 880033...
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const styles = {
  wrapper: {
    backgroundColor: '#f8f9fa',
    padding: '20px 0 40px 0',
    fontFamily: 'Arial, sans-serif',
    minHeight: '100vh'
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px'
  },
  mainTitle: {
    fontSize: '2.2rem',
    color: '#333',
    marginBottom: '30px',
    textAlign: 'center',
    fontWeight: 'bold',
    textTransform: 'uppercase'
  },
  mainSection: {
    marginBottom: '30px'
  },
  hireCard: {
    backgroundColor: '#fff',
    borderRadius: '10px',
    padding: '30px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    textAlign: 'center',
    marginBottom: '30px',
    border: '1px solid #eee'
  },
  hireTitle: {
    fontSize: '1.8rem',
    color: '#333',
    marginBottom: '20px',
    fontWeight: '600',
    lineHeight: '1.4'
  },
  hireDetails: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '30px',
    flexWrap: 'wrap'
  },
  hirePrice: {
    fontSize: '1.5rem',
    color: '#333',
    fontWeight: 'bold',
    margin: '0'
  },
  hireButton: {
    padding: '12px 30px',
    backgroundColor: '#ff4444',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    fontSize: '1.1rem',
    cursor: 'pointer',
    fontWeight: '600',
    transition: 'all 0.3s',
    ':hover': {
      backgroundColor: '#e03e3e',
      transform: 'translateY(-2px)'
    }
  },
  divider: {
    height: '1px',
    backgroundColor: '#ddd',
    margin: '30px 0',
    width: '100%'
  },
  mediaSection: {
    padding: '20px 0'
  },
  mediaTitle: {
    fontSize: '2rem',
    color: '#333',
    marginBottom: '15px',
    textAlign: 'center',
    fontWeight: 'bold'
  },
  mediaSubtitle: {
    fontSize: '1.1rem',
    color: '#666',
    textAlign: 'center',
    marginBottom: '40px',
    lineHeight: '1.6',
    maxWidth: '800px',
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  mediaGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '25px',
    maxWidth: '1200px',
    margin: '0 auto'
  },
  mediaCard: {
    backgroundColor: '#fff',
    borderRadius: '10px',
    overflow: 'hidden',
    boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
    transition: 'all 0.3s',
    ':hover': {
      transform: 'translateY(-5px)',
      boxShadow: '0 8px 20px rgba(0,0,0,0.15)'
    }
  },
  mediaImageContainer: {
    height: '180px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative'
  },
  newspaperIcon: {
    fontSize: '80px',
    color: '#333'
  },
  digitalIcon: {
    fontSize: '80px',
    color: '#333'
  },
  radioIcon: {
    fontSize: '80px',
    color: '#333'
  },
  influencerIcon: {
    fontSize: '80px',
    color: '#333'
  },
  mediaCardContent: {
    padding: '25px',
    textAlign: 'center'
  },
  mediaCardTitle: {
    fontSize: '1.1rem',
    color: '#666',
    marginBottom: '5px',
    fontWeight: '400'
  },
  mediaCardService: {
    fontSize: '1.4rem',
    color: '#333',
    marginBottom: '20px',
    fontWeight: 'bold'
  },
  mediaCardButton: {
    padding: '12px 25px',
    backgroundColor: '#333',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    fontSize: '1rem',
    cursor: 'pointer',
    fontWeight: '600',
    width: '100%',
    transition: 'all 0.3s',
    ':hover': {
      backgroundColor: '#222'
    }
  }
};

export default BooksOffers;