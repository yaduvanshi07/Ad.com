import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const navigate = useNavigate();

  const handleServiceClick = (service) => {
    const serviceRoutes = {
      "Newspaper Ads": "/services/newspaper-advertising",
      "Digital Marketing": "/services/digital-marketing",
      "Social Media": "/services/digital-marketing",
      "Radio Ads": "/services/radio-advertising",
      "TV Commercials": "/services/tv-advertising",
      "Outdoor Advertising": "/services/outdoor-dooh"
    };
    
    if (serviceRoutes[service]) {
      navigate(serviceRoutes[service]);
    }
  };

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    
    if (!email) {
      alert('Please enter your email address');
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setSubscribed(true);
        setEmail('');
        setTimeout(() => setSubscribed(false), 3000);
      } else {
        throw new Error('Failed to subscribe');
      }
    } catch (error) {
      console.error('Newsletter subscription failed:', error);
      alert('Failed to subscribe. Please try again.');
    }
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <h3>VipLav Advertising Co.</h3>
              <p>More than just ads — we build lasting partnerships, offering customized advertising solutions to power your brand’s success.</p>
            </div>
          </div>

          <div className="footer-section">
            <h4>Top Services</h4>
            <ul>
              <li><span onClick={() => handleServiceClick("Newspaper Ads")} style={{ cursor: 'pointer', transition: 'color 0.3s ease' }} onMouseEnter={(e) => e.target.style.color = '#3b82f6'} onMouseLeave={(e) => e.target.style.color = 'rgba(255, 255, 255, 0.7)'}>Newspaper Ads</span></li>
              <li><span onClick={() => handleServiceClick("Digital Marketing")} style={{ cursor: 'pointer', transition: 'color 0.3s ease' }} onMouseEnter={(e) => e.target.style.color = '#3b82f6'} onMouseLeave={(e) => e.target.style.color = 'rgba(255, 255, 255, 0.7)'}>Digital Marketing</span></li>
              <li><span onClick={() => handleServiceClick("Social Media")} style={{ cursor: 'pointer', transition: 'color 0.3s ease' }} onMouseEnter={(e) => e.target.style.color = '#3b82f6'} onMouseLeave={(e) => e.target.style.color = 'rgba(255, 255, 255, 0.7)'}>Social Media</span></li>
              <li><span onClick={() => handleServiceClick("Radio Ads")} style={{ cursor: 'pointer', transition: 'color 0.3s ease' }} onMouseEnter={(e) => e.target.style.color = '#3b82f6'} onMouseLeave={(e) => e.target.style.color = 'rgba(255, 255, 255, 0.7)'}>Radio Ads</span></li>
              <li><span onClick={() => handleServiceClick("TV Commercials")} style={{ cursor: 'pointer', transition: 'color 0.3s ease' }} onMouseEnter={(e) => e.target.style.color = '#3b82f6'} onMouseLeave={(e) => e.target.style.color = 'rgba(255, 255, 255, 0.7)'}>TV Commercials</span></li>
              <li><span onClick={() => handleServiceClick("Outdoor Advertising")} style={{ cursor: 'pointer', transition: 'color 0.3s ease' }} onMouseEnter={(e) => e.target.style.color = '#3b82f6'} onMouseLeave={(e) => e.target.style.color = 'rgba(255, 255, 255, 0.7)'}>Outdoor Advertising</span></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Company</h4>
            <ul>
              <li><span onClick={() => navigate('/about-us')} style={{ cursor: 'pointer', transition: 'color 0.3s ease' }} onMouseEnter={(e) => e.target.style.color = '#3b82f6'} onMouseLeave={(e) => e.target.style.color = 'rgba(255, 255, 255, 0.7)'}>About Us</span></li>
              <li><span onClick={() => navigate('/careers')} style={{ cursor: 'pointer', transition: 'color 0.3s ease' }} onMouseEnter={(e) => e.target.style.color = '#3b82f6'} onMouseLeave={(e) => e.target.style.color = 'rgba(255, 255, 255, 0.7)'}>Careers</span></li>
              <li><span onClick={() => navigate('/case-studies')} style={{ cursor: 'pointer', transition: 'color 0.3s ease' }} onMouseEnter={(e) => e.target.style.color = '#3b82f6'} onMouseLeave={(e) => e.target.style.color = 'rgba(255, 255, 255, 0.7)'}>Case Studies</span></li>
              <li><span onClick={() => navigate('/blog')} style={{ cursor: 'pointer', transition: 'color 0.3s ease' }} onMouseEnter={(e) => e.target.style.color = '#3b82f6'} onMouseLeave={(e) => e.target.style.color = 'rgba(255, 255, 255, 0.7)'}>Blog</span></li>
              <li><span onClick={() => navigate('/contact-us')} style={{ cursor: 'pointer', transition: 'color 0.3s ease' }} onMouseEnter={(e) => e.target.style.color = '#3b82f6'} onMouseLeave={(e) => e.target.style.color = 'rgba(255, 255, 255, 0.7)'}>Contact Us</span></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Support</h4>
            <ul>
              <li><span onClick={() => navigate('/help-center')} style={{ cursor: 'pointer', transition: 'color 0.3s ease' }} onMouseEnter={(e) => e.target.style.color = '#3b82f6'} onMouseLeave={(e) => e.target.style.color = 'rgba(255, 255, 255, 0.7)'}>Help Center</span></li>
              <li><span onClick={() => navigate('/faq')} style={{ cursor: 'pointer', transition: 'color 0.3s ease' }} onMouseEnter={(e) => e.target.style.color = '#3b82f6'} onMouseLeave={(e) => e.target.style.color = 'rgba(255, 255, 255, 0.7)'}>FAQ</span></li>
              <li><span onClick={() => navigate('/pricing')} style={{ cursor: 'pointer', transition: 'color 0.3s ease' }} onMouseEnter={(e) => e.target.style.color = '#3b82f6'} onMouseLeave={(e) => e.target.style.color = 'rgba(255, 255, 255, 0.7)'}>Pricing</span></li>
              <li><span onClick={() => navigate('/terms-of-service')} style={{ cursor: 'pointer', transition: 'color 0.3s ease' }} onMouseEnter={(e) => e.target.style.color = '#3b82f6'} onMouseLeave={(e) => e.target.style.color = 'rgba(255, 255, 255, 0.7)'}>Terms of Service</span></li>
              <li><span onClick={() => navigate('/privacy-policy')} style={{ cursor: 'pointer', transition: 'color 0.3s ease' }} onMouseEnter={(e) => e.target.style.color = '#3b82f6'} onMouseLeave={(e) => e.target.style.color = 'rgba(255, 255, 255, 0.7)'}>Privacy Policy</span></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Newsletter</h4>
            <p>Subscribe to get the latest updates and offers</p>
            <form onSubmit={handleNewsletterSubmit} className="newsletter-form">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" disabled={subscribed}>
                {subscribed ? 'Subscribed!' : 'Subscribe'}
              </button>
            </form>
            <div className="social-links">
              <a href="#facebook" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
              <a href="#twitter" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
              <a href="#linkedin" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
              <a href="#instagram" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; 2025 VipLav Advertising Co. All rights reserved.</p>
            <div className="footer-contact-info">
              <span>📧 info@viplavadvertising.com</span>
              <span>📞 +91-11-4567-8900</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;