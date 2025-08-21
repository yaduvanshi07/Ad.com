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
import NewspaperAdvertising from './components/NewspaperAdvertising';
import DocumentNameCorrection from './pages/DocumentNameCorrection';
import GazettePublication from './pages/GazettePublication';

// Main App Component with Routing
const App = () => {
  const [loading, setLoading] = useState(true);
  const [services, setServices] = useState([]);
  const [deals, setDeals] = useState([]);
  const [stats, setStats] = useState({});
  const [caseStudies, setCaseStudies] = useState([]);
  const [currentPage, setCurrentPage] = useState('home');
  
  const navigateToPage = (page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    // Simulate loading and fetch data
    const fetchData = async () => {
      try {
        setLoading(true);
        
        // Fetch services
        const servicesResponse = await fetch('/api/services');
        const servicesData = await servicesResponse.json();
        setServices(servicesData);

        // Fetch deals
        const dealsResponse = await fetch('/api/deals');
        const dealsData = await dealsResponse.json();
        setDeals(dealsData);

        // Fetch stats
        const statsResponse = await fetch('/api/stats');
        const statsData = await statsResponse.json();
        setStats(statsData);

        // Fetch case studies
        const caseStudiesResponse = await fetch('/api/case-studies');
        const caseStudiesData = await caseStudiesResponse.json();
        setCaseStudies(caseStudiesData);

        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        // Set default data if API fails
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
          }
        ]);
        
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="loading">
        <div className="spinner"></div>
      </div>
    );
  }

  return (
    <Router>
      <div className="App" style={{ minHeight: "100vh", backgroundColor: "#f9fafb" }}>
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              {currentPage === 'home' && (
                <>
                  <Hero navigateToPage={navigateToPage} />
                  <DealsOffers deals={deals} />
                  <Services services={services} navigateToPage={navigateToPage} />
                  <Stats stats={stats} />
                  <CaseStudies caseStudies={caseStudies} />
                </>
              )}
              {currentPage === 'newspaper-advertising' && <NewspaperAdvertising navigateToPage={navigateToPage} />}
              {currentPage === 'document-name-correction' && <DocumentNameCorrection navigateToPage={navigateToPage} />}
              {currentPage === 'gazette-publication' && <GazettePublication navigateToPage={navigateToPage} />}
              
              {/* Coming Soon Pages */}
              {currentPage !== 'home' && currentPage !== 'newspaper-advertising' && (
                <div style={{
                  minHeight: "100vh",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "linear-gradient(135deg, #2E5BBA 0%, #add8e6 100%)"
                }}>
                  <div style={{
                    backgroundColor: "white",
                    padding: "40px",
                    borderRadius: "15px",
                    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
                    textAlign: "center",
                    maxWidth: "500px"
                  }}>
                    <h2 style={{ color: "#333", marginBottom: "20px" }}>
                      {currentPage.replace('-', ' ').toUpperCase()} Coming Soon!
                    </h2>
                    <p style={{ color: "#666", marginBottom: "30px" }}>
                      This feature is under development. Please check back later.
                    </p>
                    <button 
                      onClick={() => navigateToPage('home')}
                      style={{
                        backgroundColor: "#4472C4",
                        color: "white",
                        padding: "12px 30px",
                        border: "none",
                        borderRadius: "8px",
                        cursor: "pointer",
                        fontWeight: "bold",
                        fontSize: "16px",
                        transition: "background-color 0.3s ease"
                      }}
                      onMouseOver={(e) => e.target.style.backgroundColor = "#3a5ba0"}
                      onMouseOut={(e) => e.target.style.backgroundColor = "#4472C4"}
                    >
                      Back to Home
                    </button>
                  </div>
                </div>
              )}
            </>
          } />
          <Route path="/how-to-book" element={<HowToBook />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;