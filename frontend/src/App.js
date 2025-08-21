import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Stats from './components/Stats';
import DealsOffers from './components/DealsOffers';
import CaseStudies from './components/CaseStudies';
import Footer from './components/Footer';
import HowToBook from './pages/HowToBook';
import DocumentNameCorrection from './pages/DocumentNameCorrection';
import GazettePublication from './pages/GazettePublication';

// Traditional Media Components - Import only existing files
import CinemaAdvertising from './components/services/TraditionalMedia/CinemaAdvertising';
import DigitalMarketing from './components/services/TraditionalMedia/DigitalMarketing';
import TVAdvertising from './components/services/TraditionalMedia/TVAdvertising';
import NewspaperAdvertising from './components/services/TraditionalMedia/NewspaperAdvertising';
import LiftBranding from './components/services/TraditionalMedia/LiftBranding';
import HyperlocalSMS from './components/services/TraditionalMedia/HyperlocalSMS';

// Create placeholder components for services that don't exist yet
// const NewspaperAdvertising = () => <ComingSoonPage service="Newspaper Advertising" />;
// const LiftBranding = () => <ComingSoonPage service="Lift Branding" />;
// const HyperlocalSMS = () => <ComingSoonPage service="Hyperlocal SMS" />;
const OTTMediaBuying = () => <ComingSoonPage service="OTT/Media Buying" />;
const DigitalPR = () => <ComingSoonPage service="Digital PR" />;
const ProgrammaticAds = () => <ComingSoonPage service="Programmatic Ads" />;

// Outdoor & Transit Components
const TransitMedia = () => <ComingSoonPage service="Transit Media" />;
const OutdoorDOOH = () => <ComingSoonPage service="Outdoor/DOOH" />;
const RadioAdvertising = () => <ComingSoonPage service="Radio Advertising" />;
const InfluencerMarketing = () => <ComingSoonPage service="Influencer Marketing" />;

// Coming Soon Page Component
const ComingSoonPage = ({ service }) => {
  return (
    <div style={{
      minHeight: "80vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "linear-gradient(135deg, #2E5BBA 0%, #add8e6 100%)",
      padding: "20px"
    }}>
      <div style={{
        backgroundColor: "white",
        padding: "50px",
        borderRadius: "20px",
        boxShadow: "0 15px 40px rgba(0, 0, 0, 0.2)",
        textAlign: "center",
        maxWidth: "600px",
        animation: "fadeIn 0.6s ease-in"
      }}>
        <div style={{ fontSize: "60px", marginBottom: "20px" }}>🚀</div>
        <h1 style={{ 
          color: "#2E5BBA", 
          marginBottom: "20px",
          fontSize: "32px",
          fontWeight: "bold"
        }}>
          {service}
        </h1>
        <h2 style={{ 
          color: "#666", 
          marginBottom: "20px",
          fontSize: "24px",
          fontWeight: "normal"
        }}>
          Coming Soon!
        </h2>
        <p style={{ 
          color: "#666", 
          marginBottom: "30px",
          fontSize: "18px",
          lineHeight: "1.6"
        }}>
          We're working hard to bring you this amazing service. 
          Stay tuned for updates and exciting features!
        </p>
        <div style={{
          display: "flex",
          gap: "20px",
          justifyContent: "center",
          flexWrap: "wrap"
        }}>
          <button 
            onClick={() => window.history.back()}
            style={{
              backgroundColor: "#4472C4",
              color: "white",
              padding: "15px 30px",
              border: "none",
              borderRadius: "10px",
              cursor: "pointer",
              fontWeight: "bold",
              fontSize: "16px",
              transition: "all 0.3s ease",
              boxShadow: "0 4px 15px rgba(68, 114, 196, 0.3)"
            }}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = "#3a5ba0";
              e.target.style.transform = "translateY(-2px)";
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = "#4472C4";
              e.target.style.transform = "translateY(0)";
            }}
          >
            ← Go Back
          </button>
          <button 
            onClick={() => window.location.href = '/'}
            style={{
              backgroundColor: "#E53E3E",
              color: "white",
              padding: "15px 30px",
              border: "none",
              borderRadius: "10px",
              cursor: "pointer",
              fontWeight: "bold",
              fontSize: "16px",
              transition: "all 0.3s ease",
              boxShadow: "0 4px 15px rgba(229, 62, 62, 0.3)"
            }}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = "#cc3333";
              e.target.style.transform = "translateY(-2px)";
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = "#E53E3E";
              e.target.style.transform = "translateY(0)";
            }}
          >
            🏠 Home
          </button>
        </div>
      </div>
    </div>
  );
};

// Homepage Component
const HomePage = ({ services, deals, stats, caseStudies, navigateToPage }) => {
  return (
    <>
      <Hero navigateToPage={navigateToPage} />
      <DealsOffers deals={deals} />
      <Services services={services} navigateToPage={navigateToPage} />
      <Stats stats={stats} />
      <CaseStudies caseStudies={caseStudies} />
    </>
  );
};

// Main App Component with Routing
const App = () => {
  const [loading, setLoading] = useState(true);
  const [services, setServices] = useState([]);
  const [deals, setDeals] = useState([]);
  const [stats, setStats] = useState({});
  const [caseStudies, setCaseStudies] = useState([]);
  
  const navigateToPage = (page) => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    // Simulate loading and fetch data
    const fetchData = async () => {
      try {
        setLoading(true);
        
        // In a real app, these would be actual API calls
        // For now, we'll use the default data immediately
        
        setServices([
          {
            id: 1,
            name: "Newspaper Advertising",
            description: "Book ads in leading newspapers across India",
            icon: "📰",
            features: ["Display Ads", "Classified Ads", "Obituary", "Tender Notice"]
          },
          {
            id: 2,
            name: "Digital Marketing",
            description: "Complete digital marketing solutions",
            icon: "💻",
            features: ["Social Media Marketing", "SEO", "PPC", "Content Marketing"]
          },
          {
            id: 3,
            name: "Radio Advertising",
            description: "Reach millions through radio campaigns",
            icon: "📻",
            features: ["Prime Time Slots", "RJ Mentions", "Sponsorship", "Jingles"]
          },
          {
            id: 4,
            name: "Cinema Advertising",
            description: "Advertise in cinema halls nationwide",
            icon: "🎬",
            features: ["On-Screen Ads", "Lobby Display", "Slide Ads", "Video Ads"]
          },
          {
            id: 5,
            name: "TV Advertising",
            description: "Reach audiences through television campaigns",
            icon: "📺",
            features: ["Prime Time", "Channel Sponsorship", "Program Integration", "Commercial Spots"]
          },
          {
            id: 6,
            name: "Outdoor/DOOH",
            description: "Digital and traditional outdoor advertising",
            icon: "🏢",
            features: ["Billboards", "Digital Displays", "Transit Advertising", "Street Furniture"]
          }
        ]);
        
        setDeals([
          {
            id: 1,
            title: "Lights, Camera, Advertise!",
            description: "Reach Millions of Eyeballs with Hyperlocal Cinema Ad!",
            price: "Starting at Rs. 11000/-*",
            category: "cinema"
          },
          {
            id: 2,
            title: "Hire Dedicated Media Planner",
            description: "for your business Today!",
            price: "@ just 499/-*",
            category: "media-planning"
          },
          {
            id: 3,
            title: "Digital Marketing Package",
            description: "Complete social media and SEO solutions",
            price: "Starting at Rs. 5000/-*",
            category: "digital"
          }
        ]);
        
        setStats({
          customers: "50000+",
          teamMembers: "200+",
          advertisingChoices: "1000+",
          vendorCollaborations: "5000+",
          campaigns: "25000+",
          specializedAreas: "15+"
        });
        
        setCaseStudies([
          {
            id: 1,
            title: "CHEP India - Sustainability Campaign",
            description: "Raised awareness about sustainable practices and unauthorized equipment usage",
            industry: "Logistics",
            results: "40% increase in brand awareness"
          },
          {
            id: 2,
            title: "Binomo - Pan India Download Campaign",
            description: "Created brand awareness and boosted app downloads across India",
            industry: "Fintech",
            results: "300% increase in app downloads"
          },
          {
            id: 3,
            title: "Local Restaurant Chain - Digital Campaign",
            description: "Increased foot traffic through targeted local advertising",
            industry: "Food & Beverage",
            results: "25% increase in customers"
          }
        ]);
        
        // Simulate loading time
        setTimeout(() => {
          setLoading(false);
        }, 1000);
        
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f9fafb"
      }}>
        <div style={{
          textAlign: "center",
          padding: "40px"
        }}>
          <div style={{
            width: "60px",
            height: "60px",
            border: "4px solid #e0e7ff",
            borderTop: "4px solid #4472C4",
            borderRadius: "50%",
            animation: "spin 1s linear infinite",
            margin: "0 auto 20px"
          }}></div>
          <h2 style={{ color: "#4472C4", marginBottom: "10px" }}>Loading VipLav Advertising...</h2>
          <p style={{ color: "#666" }}>Please wait while we prepare your experience</p>
        </div>
        <style>{`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}</style>
      </div>
    );
  }

  return (
    <Router>
      <div className="App" style={{ minHeight: "100vh", backgroundColor: "#f9fafb" }}>
        <Header />
        <Routes>
          {/* Homepage Route */}
          <Route 
            path="/" 
            element={
              <HomePage 
                services={services}
                deals={deals}
                stats={stats}
                caseStudies={caseStudies}
                navigateToPage={navigateToPage}
              />
            } 
          />
          
          {/* How to Book Route */}
          <Route path="/how-to-book" element={<HowToBook />} />
          
          {/* Traditional Media Services Routes */}
          <Route path="/services/newspaper-advertising" element={<NewspaperAdvertising />} />
          <Route path="/services/cinema-advertising" element={<CinemaAdvertising />} />
          <Route path="/services/tv-advertising" element={<TVAdvertising />} />
          <Route path="/services/lift-branding" element={<LiftBranding />} />
          <Route path="/services/hyperlocal-sms" element={<HyperlocalSMS />} />
          
          {/* Digital Solutions Services Routes */}
          <Route path="/services/ott-media-buying" element={<OTTMediaBuying />} />
          <Route path="/services/digital-marketing" element={<DigitalMarketing />} />
          <Route path="/services/digital-pr" element={<DigitalPR />} />
          <Route path="/services/programmatic-ads" element={<ProgrammaticAds />} />
          <Route path="/services/document-name-correction" element={<DocumentNameCorrection navigateToPage={navigateToPage} />} />
          <Route path="/services/gazette-publication" element={<GazettePublication navigateToPage={navigateToPage} />} />
          
          {/* Outdoor & Transit Services Routes */}
          <Route path="/services/transit-media" element={<TransitMedia />} />
          <Route path="/services/outdoor-dooh" element={<OutdoorDOOH />} />
          <Route path="/services/radio-advertising" element={<RadioAdvertising />} />
          <Route path="/services/influencer-marketing" element={<InfluencerMarketing />} />
          
          {/* 404 Route */}
          <Route path="*" element={
                <div style={{
              minHeight: "80vh",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
              background: "linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%)",
              padding: "20px"
                }}>
                  <div style={{
                    backgroundColor: "white",
                padding: "50px",
                borderRadius: "20px",
                boxShadow: "0 15px 40px rgba(0, 0, 0, 0.2)",
                    textAlign: "center",
                maxWidth: "600px"
              }}>
                <div style={{ fontSize: "80px", marginBottom: "20px" }}>🔍</div>
                <h1 style={{ 
                  color: "#ff6b6b", 
                  marginBottom: "20px",
                  fontSize: "36px"
                }}>
                  Page Not Found
                </h1>
                <p style={{ 
                  color: "#666", 
                  marginBottom: "30px",
                  fontSize: "18px"
                }}>
                  Oops! The page you're looking for doesn't exist.
                    </p>
                    <button 
                  onClick={() => window.location.href = '/'}
                      style={{
                    backgroundColor: "#ff6b6b",
                        color: "white",
                    padding: "15px 30px",
                        border: "none",
                    borderRadius: "10px",
                        cursor: "pointer",
                        fontWeight: "bold",
                        fontSize: "16px",
                    transition: "all 0.3s ease"
                      }}
                  onMouseOver={(e) => e.target.style.backgroundColor = "#ee5a24"}
                  onMouseOut={(e) => e.target.style.backgroundColor = "#ff6b6b"}
                    >
                  🏠 Go to Homepage
                    </button>
                  </div>
                </div>
          } />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;