// STEP 1: Make sure this import is at the top of the file
import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { newspapers, cities, categories, searchFilters, utilityFunctions } from '../../../data/newspaperData';

// (Keep the 'images' array definition here as it was)
const images = [
  'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
  'https://images.unsplash.com/photo-1560185007-c5ca9d2c015d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
  'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
];


const NewspaperAdvertising = () => {
  // STEP 2: Call useNavigate() INSIDE the component
  const navigate = useNavigate();

  // State management (this was already correct)
  const [cities, setCities] = useState([]);
  const [categories, setCategories] = useState([]);
  const [newspapers, setNewspapers] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('Matrimonial');
  const [selectedCity, setSelectedCity] = useState('Mumbai');
  const [selectedNewspaper, setSelectedNewspaper] = useState('The Times of India');
  const [selectedDisplay, setSelectedDisplay] = useState('Display Classified');
  const [loading, setLoading] = useState(true);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Slideshow effect (this was already correct)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); 

    return () => clearInterval(timer);
  }, []);


  // Mock data for demonstration (this was already correct)
  useEffect(() => {
    const mockData = () => {
      setTimeout(() => {
        setCities([
          { id: 1, name: 'Mumbai', state: '' },
          { id: 2, name: 'Delhi', state: '' },
          { id: 3, name: 'Bangalore', state: '' },
          { id: 4, name: 'Chennai', state: '' },
          { id: 5, name: 'Kolkata', state: '' }
        ]);
        
        setCategories([
          { id: 1, name: 'Matrimonial' },
          { id: 2, name: 'Property' },
          { id: 3, name: 'Jobs' },
          { id: 4, name: 'Education' },
          { id: 5, name: 'Business' }
        ]);

        setNewspapers([
          { id: 1, name: 'The Times of India' },
          { id: 2, name: 'The Hindu' },
          { id: 3, name: 'Hindustan Times' },
          { id: 4, name: 'The Economic Times' },
          { id: 5, name: 'Indian Express' }
        ]);
        
        setLoading(false);
      }, 500);
    };

    mockData();
  }, []);

  const handleSubmit = () => {
    alert(`Searching for ${selectedCategory} ads in ${selectedCity}`);
  };

  // STEP 3: REPLACE your old handleModifySearch function with this one.
  // It is now inside the component and can access the state variables and the navigate function.
  const handleModifySearch = () => {
    navigate('/packages', { 
      state: { 
        category: selectedCategory, 
        city: selectedCity,
        newspaper: selectedNewspaper,
        display: selectedDisplay
      } 
    });
  };

  if (loading) {
    return (
      <div style={{ 
        minHeight: '100vh', 
        backgroundColor: '#f5f5f5', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center' 
      }}>
        <div style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '20px', fontWeight: 'bold' }}>Loading Newspaper Platform</h2>
        </div>
      </div>
    );
  }

  return (
    <div style={{ 
      backgroundColor: '#4a4a4a', 
      minHeight: '100vh',
      padding: '0',
      margin: '0',
      fontFamily: 'Arial, sans-serif'
    }}>

      {/* Main Content */}
      <div style={{ padding: '40px 20px' }}>
        <div style={{ 
          maxWidth: '1200px', 
          margin: '0 auto'
        }}>
          {/* Header */}
          <h1 style={{ 
            fontSize: '48px', 
            color: 'white', 
            marginBottom: '40px', 
            fontWeight: '400',
            textAlign: 'center',
            textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
          }}>
            Book Advertisements for Indian Newspapers Instantly!
          </h1>
          
          {/* Ad Samples with Background Images - 4 components */}
          <div style={{ 
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '20px',
            marginBottom: '40px',
            justifyItems: 'center'
          }}>
            {/* Classified Text Ad */}
            <div style={{ textAlign: 'center', width: '100%', maxWidth: '320px' }}>
              <div style={{
                width: '100%',
                height: '200px',
                backgroundColor: 'white',
                border: '2px solid #ccc',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '15px',
                backgroundImage: 'url("https://images.unsplash.com/photo-1495020689067-958852a7765e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                position: 'relative',
                borderRadius: '8px',
                overflow: 'hidden'
              }}>
                <div style={{ 
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundColor: 'rgba(255,255,255,0.92)'
                }}></div>
                <div style={{ 
                  position: 'relative',
                  zIndex: 1,
                  padding: '20px', 
                  textAlign: 'center',
                  width: '100%',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center'
                }}>
                  <div style={{ fontSize: '14px', fontWeight: 'bold', marginBottom: '10px', color: '#d32f2f' }}>WANTED BRIDES</div>
                  <div style={{ fontSize: '11px', color: '#666', marginBottom: '5px' }}>S.R.M. Divorcee, Age High</div>
                  <div style={{ fontSize: '11px', color: '#666', marginBottom: '5px' }}>Qualified, Earning 50000</div>
                  <div style={{ fontSize: '11px', color: '#666' }}>Cast No Bar</div>
                </div>
              </div>
             
              {/* Dropdown for component 1 */}
              <div style={{ marginBottom: '10px' }}>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '10px',
                    border: '1px solid #ccc',
                    fontSize: '14px',
                    backgroundColor: 'white',
                    borderRadius: '5px',
                    color: '#999'
                  }}
                >
                  <option value="">Matrimonial</option>
                  {categories.map((category) => (
                    <option key={category.id} value={category.name}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Classified Display Ad */}
            <div style={{ textAlign: 'center', width: '100%', maxWidth: '320px' }}>
              <div style={{
                width: '100%',
                height: '200px',
                backgroundColor: 'white',
                border: '2px solid #ccc',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '15px',
                backgroundImage: 'url("https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                borderRadius: '8px',
                overflow: 'hidden',
                position: 'relative'
              }}>
                <div style={{ 
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundColor: 'rgba(255,255,255,0.85)'
                }}></div>
                <div style={{ 
                  position: 'relative',
                  zIndex: 1,
                  width: '90%',
                  height: '90%',
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gridTemplateRows: '1fr 1fr',
                  gap: '8px'
                }}>
                  <div style={{ backgroundColor: '#ffeb3b', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', borderRadius: '4px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
                    <div style={{ fontSize: '11px', fontWeight: 'bold', color: '#333' }}>EDUCATION</div>
                    <div style={{ fontSize: '9px', color: '#333' }}>BBA/MBA</div>
                    <div style={{ fontSize: '9px', color: '#333' }}>BCA/MCA</div>
                  </div>
                  <div style={{ backgroundColor: '#f5f5f5', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', borderRadius: '4px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
                    <div style={{ fontSize: '10px', fontWeight: 'bold', color: '#333' }}>PUBLIC NOTICE</div>
                    <div style={{ fontSize: '8px', color: '#666' }}>Important Notice</div>
                  </div>
                  <div style={{ backgroundColor: '#8bc34a', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', borderRadius: '4px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
                    <div style={{ fontSize: '10px', fontWeight: 'bold', color: 'white' }}>FOR SALE</div>
                    <div style={{ fontSize: '8px', color: 'white' }}>House Plot</div>
                  </div>
                  <div style={{ backgroundColor: '#e0e0e0', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', borderRadius: '4px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
                    <div style={{ fontSize: '8px', color: '#333', fontWeight: 'bold' }}>OBITUARY</div>
                    <div style={{ fontSize: '8px', color: '#333' }}>VACANT</div>
                  </div>
                </div>
              </div>
            
              
              {/* Dropdown for component 2 */}
              <div style={{ marginBottom: '10px' }}>
                <select
                  value={selectedCity}
                  onChange={(e) => setSelectedCity(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '10px',
                    border: '1px solid #ccc',
                    fontSize: '14px',
                    backgroundColor: 'white',
                    borderRadius: '5px',
                    color: '#999'
                  }}
                >
                  <option value="">Mumbai, Delhi</option>
                  {cities.map((city) => (
                    <option key={city.id} value={city.name}>
                      {city.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Display Ad */}
            <div style={{ textAlign: 'center', width: '100%', maxWidth: '320px' }}>
              <div style={{
                width: '100%',
                height: '200px',
                backgroundColor: 'white',
                border: '2px solid #ccc',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '15px',
                backgroundImage: 'url("https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2126&q=80")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                borderRadius: '8px',
                overflow: 'hidden',
                position: 'relative'
              }}>
                <div style={{ 
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundColor: 'rgba(255,255,255,0.90)'
                }}></div>
                <div style={{ 
                  position: 'relative',
                  zIndex: 1,
                  width: '90%',
                  height: '85%',
                  display: 'flex',
                  padding: '10px',
                  gap: '8px'
                }}>
                  <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <div style={{ backgroundColor: '#2196f3', color: 'white', padding: '8px', fontSize: '11px', textAlign: 'center', fontWeight: 'bold', borderRadius: '4px' }}>
                      Tender Notice
                    </div>
                    <div style={{ backgroundColor: '#ff9800', color: 'white', padding: '20px', fontSize: '16px', textAlign: 'center', fontWeight: 'bold', flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '4px', marginTop: '8px' }}>
                      PG Business
                    </div>
                  </div>
                  <div style={{ flex: 1, backgroundColor: '#4caf50', borderRadius: '4px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
                    <div style={{ fontSize: '14px', fontWeight: 'bold', marginBottom: '10px' }}>BUYLAND</div>
                    <div style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '5px' }}>2/3</div>
                    <div style={{ fontSize: '12px', fontWeight: 'bold' }}>BHK FLAT</div>
                  </div>
                </div>
              </div>
             
              
              {/* Dropdown for component 3 */}
              <div style={{ marginBottom: '10px' }}>
                <select
                  value={selectedNewspaper}
                  onChange={(e) => setSelectedNewspaper(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '10px',
                    border: '1px solid #ccc',
                    fontSize: '14px',
                    backgroundColor: 'white',
                    borderRadius: '5px',
                    color: '#999'
                  }}
                >
                  <option value="">The Times of India</option>
                  {newspapers.map((newspaper) => (
                    <option key={newspaper.id} value={newspaper.name}>
                      {newspaper.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* MODIFIED 4th Component - Premium Ad with Single Image Slideshow */}
            <div style={{ textAlign: 'center', width: '100%', maxWidth: '320px' }}>
              <div style={{
                width: '100%',
                height: '200px',
                backgroundColor: 'white',
                border: '2px solid #ccc',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '15px',
                borderRadius: '8px',
                overflow: 'hidden',
                position: 'relative'
              }}>
                <img 
                  src={images[currentImageIndex]} 
                  alt="Premium Service" 
                  style={{ 
                    width: '100%', 
                    height: '100%', 
                    objectFit: 'cover',
                    transition: 'opacity 0.5s ease-in-out' // Smooth transition
                  }}
                />
              </div>
             
              {/* Dropdown for component 4 */}
              <div style={{ marginBottom: '10px' }}>
                <select
                  value={selectedDisplay}
                  onChange={(e) => setSelectedDisplay(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '10px',
                    border: '1px solid #ccc',
                    fontSize: '14px',
                    backgroundColor: 'white',
                    borderRadius: '5px',
                    color: '#999'
                  }}
                >
                  
                  <option value="Display Classified">Display Classified</option>
                  <option value="Premium Display">Text Classified Ad</option>
                  <option value="Banner Display">Display Ad</option>
                </select>
              </div>
            </div>
          </div>

          {/* Modify Search Button (similar to image 2) */}
          <div style={{ 
            display: 'flex', 
            justifyContent: 'center',
            marginBottom: '40px'
          }}>
            <button 
              onClick={handleModifySearch}
              style={{
                backgroundColor: '#dc3545',
                color: 'white',
                border: 'none',
                padding: '15px 40px',
                fontSize: '16px',
                fontWeight: 'bold',
                cursor: 'pointer',
                borderRadius: '5px',
                boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
              }}
            >
              Modify Search
            </button>
          </div>
          
          {/* Stats */}
          <div style={{ 
            backgroundColor: 'rgba(255,255,255,0.1)', 
            padding: '20px', 
            marginBottom: '40px', 
            display: 'flex', 
            justifyContent: 'space-around', 
            textAlign: 'center',
            flexWrap: 'wrap',
            borderRadius: '5px'
          }}>
            <div style={{ padding: '0 15px', color: 'white' }}>
              <div style={{ fontSize: '24px', fontWeight: '700', marginBottom: '5px' }}>270+</div>
              <div style={{ fontSize: '14px' }}>Newspapers</div>
            </div>
            <div style={{ padding: '0 15px', color: 'white' }}>
              <div style={{ fontSize: '24px', fontWeight: '700', marginBottom: '5px' }}>2,225+</div>
              <div style={{ fontSize: '14px' }}>Offers</div>
            </div>
            <div style={{ padding: '0 15px', color: 'white' }}>
              <div style={{ fontSize: '24px', fontWeight: '700', marginBottom: '5px' }}>1,89,537+</div>
              <div style={{ fontSize: '14px' }}>Happy Advertisers</div>
            </div>
            <div style={{ padding: '0 15px', color: 'white' }}>
              <div style={{ fontSize: '16px', fontWeight: '700', marginBottom: '5px' }}>💳</div>
              <div style={{ fontSize: '14px' }}>Online / Cash Payment</div>
            </div>
            <div style={{ padding: '0 15px', color: 'white' }}>
              <div style={{ fontSize: '16px', fontWeight: '700', marginBottom: '5px' }}>🏆</div>
              <div style={{ fontSize: '14px' }}>Accreditation</div>
            </div>
          </div>
          
          {/* Booking Form */}
          <div style={{ 
            backgroundColor: 'rgba(255,255,255,0.95)', 
            padding: '25px', 
            borderRadius: '5px',
            marginBottom: '40px' 
          }}>
            <h2 style={{ 
              textAlign: 'left', 
              marginBottom: '20px', 
              fontSize: '18px', 
              color: '#333',
              fontWeight: 'normal'
            }}>
              Confused? Need help
            </h2>
            
            <div style={{ 
              display: 'flex', 
              alignItems: 'flex-end',
              gap: '20px',
              flexWrap: 'wrap'
            }}>
              <div style={{ flex: '1', minWidth: '200px' }}>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500', color: '#333' }}>
                  Specify Category :
                </label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '10px',
                    border: '1px solid #ccc',
                    fontSize: '15px',
                    backgroundColor: 'white'
                  }}
                >
                  {categories.map((category) => (
                    <option key={category.id} value={category.name}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>
              
              <div style={{ flex: '1', minWidth: '200px' }}>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500', color: '#333' }}>
                  Select Location:
                </label>
                <select
                  value={selectedCity}
                  onChange={(e) => setSelectedCity(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '10px',
                    border: '1px solid #ccc',
                    fontSize: '15px',
                    backgroundColor: 'white'
                  }}
                >
                  {cities.map((city) => (
                    <option key={city.id} value={city.name}>
                      {city.name}
                    </option>
                  ))}
                </select>
              </div>
              
              <div>
                <button 
                  onClick={handleSubmit}
                  style={{
                    backgroundColor: '#e53e3e',
                    color: 'white',
                    border: 'none',
                    padding: '12px 30px',
                    fontSize: '16px',
                    fontWeight: 'bold',
                    cursor: 'pointer'
                  }}
                >
                  Click here
                </button>
              </div>
            </div>
          </div>
          
          {/* Categories Grid */}
          <div style={{
            backgroundColor: 'white',
            padding: '30px',
            borderRadius: '10px',
            marginBottom: '40px',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
          }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
              gap: '15px',
              marginBottom: '30px'
            }}>
              {[
                { name: 'MATRIMONIAL', icon: '💑', color: '#ff4081' },
                { name: 'PROPERTY', icon: '🏠', color: '#2196f3' },
                { name: 'RECRUITMENT', icon: '💼', color: '#4caf50' },
                { name: 'BUSINESS', icon: '💼', color: '#ff9800' },
                { name: 'PERSONAL', icon: '🎁', color: '#e91e63' },
                { name: 'VEHICLES', icon: '🚗', color: '#ff5722' },
                { name: 'SERVICES', icon: '🛠️', color: '#607d8b' },
                { name: 'LOST OF CERTIFICATES OR MARKSHEETS', icon: '🔍', color: '#795548' },
                { name: 'LOSS OF DOCUMENTS', icon: '📋', color: '#9c27b0' },
                { name: 'LOST AND FOUND', icon: '🔎', color: '#3f51b5' },
                { name: 'CHANGE OF NAME', icon: '📝', color: '#00bcd4' },
                { name: 'LOST SHARE CERTIFICATE', icon: '📄', color: '#ffeb3b' },
                { name: 'COURT OR MARRIAGE NOTICE', icon: '⚖️', color: '#cddc39' },
                { name: 'PUBLIC NOTICE', icon: '📢', color: '#ffc107' },
                { name: 'WEDDING ARRANGEMENT', icon: '💒', color: '#f44336' },
                { name: 'TRAVEL', icon: '✈️', color: '#009688' },
                { name: 'TO RENT', icon: '🏘️', color: '#ff6f00' },
                { name: 'TENDERS', icon: '📋', color: '#1976d2' },
                { name: 'SITUATION WANTED', icon: '🌍', color: '#388e3c' },
                { name: 'ANNOUNCEMENT', icon: '📢', color: '#7b1fa2' },
                { name: 'RETAIL', icon: '🛍️', color: '#5d4037' },
                { name: 'OBITUARY', icon: '🕊️', color: '#424242' },
                { name: 'MARRIAGE BUREAU', icon: '💐', color: '#d32f2f' },
                { name: 'COMMERCIAL PERSONAL', icon: '🔧', color: '#303f9f' },
                { name: 'EDUCATION', icon: '🎓', color: '#1565c0' },
                { name: 'COMPUTERS', icon: '💻', color: '#0277bd' },
                { name: 'REMEMBRANCE', icon: '🌹', color: '#c2185b' },
                { name: 'ASTROLOGY', icon: '⭐', color: '#f57c00' }
              ].map((category, index) => (
                <div key={index} style={{
                  display: 'flex',
                  alignItems: 'center',
                  padding: '15px',
                  border: '1px solid #e0e0e0',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  backgroundColor: '#fafafa'
                }}>
                  <div style={{
                    fontSize: '20px',
                    marginRight: '10px',
                    backgroundColor: category.color,
                    width: '35px',
                    height: '35px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '16px'
                  }}>
                    {category.icon}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{
                      fontSize: '12px',
                      fontWeight: '600',
                      color: '#333',
                      marginBottom: '2px'
                    }}>
                      {category.name}
                    </div>
                    <div style={{
                      fontSize: '11px',
                      color: '#ff6600',
                      fontWeight: '500'
                    }}>
                      👆 Click here
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Company Notice Section */}
            <div style={{
              backgroundColor: '#4a4a4a',
              color: 'white',
              padding: '15px',
              borderRadius: '5px',
              marginBottom: '20px',
              textAlign: 'center',
              fontSize: '16px',
              fontWeight: '500'
            }}>
              Select Your Ad Category In the Newspaper Where Your Notice Advertisement will be Published
            </div>

            {/* Tabs */}
            <div style={{
              display: 'flex',
              marginBottom: '20px',
              borderBottom: '1px solid #e0e0e0'
            }}>
              {['Company', 'Shares', 'Property', 'Notice under DRT Act'].map((tab, index) => (
                <div key={index} style={{
                  padding: '12px 20px',
                  backgroundColor: index === 0 ? '#e53e3e' : 'transparent',
                  color: index === 0 ? 'white' : '#666',
                  fontWeight: '500',
                  cursor: 'pointer',
                  borderTopLeftRadius: index === 0 ? '5px' : '0',
                  borderTopRightRadius: index === 0 ? '5px' : '0'
                }}>
                  {tab}
                </div>
              ))}
            </div>

            {/* Company Options */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '15px'
            }}>
              {[
                { name: 'UNAUDITED FINANCIAL RESULTS', icon: '📊', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&w=100&q=80' },
                { name: 'INVITING FIXED DEPOSITS', icon: '💰', image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&w=100&q=80' },
                { name: 'LEGAL NOTICE', icon: '⚖️', image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&w=100&q=80' },
                { name: 'INSOLVENCY NOTICE', icon: '📋', image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&w=100&q=80' }
              ].map((item, index) => (
                <div key={index} style={{
                  display: 'flex',
                  alignItems: 'center',
                  padding: '15px',
                  border: '1px solid #e0e0e0',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  backgroundColor: '#fafafa',
                  transition: 'all 0.3s ease'
                }}>
                  <div style={{
                    width: '50px',
                    height: '40px',
                    borderRadius: '5px',
                    backgroundImage: `url(${item.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    marginRight: '15px'
                  }}></div>
                  <div style={{ flex: 1 }}>
                    <div style={{
                      fontSize: '13px',
                      fontWeight: '600',
                      color: '#333',
                      marginBottom: '5px'
                    }}>
                      {item.name}
                    </div>
                    <div style={{
                      fontSize: '11px',
                      color: '#ff6600',
                      fontWeight: '500'
                    }}>
                      👆 Click Here
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Newspapers - Horizontal Scrolling */}
          <div style={{
            overflow: 'hidden',
            marginBottom: '40px'
          }}>
            <style>{`
              @keyframes scroll {
                0% {
                  transform: translateX(0);
                }
                100% {
                  transform: translateX(-50%);
                }
              }
              .scrolling-newspapers {
                animation: scroll 20s linear infinite;
              }
            `}</style>
            <div 
              className="scrolling-newspapers"
              style={{ 
                display: 'flex', 
                gap: '20px',
                width: 'calc(200% + 20px)'
              }}
            >
              {[...Array(2)].map((_, duplicateIndex) => 
                [
                  { name: 'THE TIMES OF INDIA', logo: 'TOI' },
                  { name: 'THE HINDU', logo: 'TH' },
                  { name: 'MIRROR', logo: 'M' },
                  { name: 'The Tribune', logo: 'TT' },
                  { name: 'THE ECONOMIC TIMES', logo: 'ET' },
                  { name: 'আনন্দবাজার পত্রিকা', logo: 'AB' },
                  { name: 'Chronicle', logo: 'C' },
                  { name: 'Hindustan Times', logo: 'HT' },
                  { name: 'প্রতিদিন', logo: 'P' },
                  { name: 'The Telegraph', logo: 'TT' }
                ].map((paper, index) => (
                  <div key={`${duplicateIndex}-${index}`} style={{ 
                    padding: '20px', 
                    backgroundColor: 'white', 
                    textAlign: 'center', 
                    fontWeight: '500',
                    fontSize: '14px',
                    borderRadius: '3px',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                    minHeight: '80px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    minWidth: '200px',
                    flexShrink: 0,
                    backgroundImage: paper.name === 'THE TIMES OF INDIA' ? 'url("https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")' : 'none',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    position: 'relative'
                  }}>
                    {paper.name === 'THE TIMES OF INDIA' && (
                      <div style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: 'rgba(255, 255, 255, 0.9)',
                        borderRadius: '3px'
                      }}></div>
                    )}
                    <span style={{ position: 'relative', zIndex: 1 }}>
                      {paper.name}
                    </span>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* FAQ Section */}
          <div style={{
            backgroundColor: 'white',
            borderRadius: '8px',
            overflow: 'hidden',
            marginBottom: '30px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
          }}>
            <div style={{
              backgroundColor: '#6c6c6c',
              color: 'white',
              padding: '15px 20px',
              fontSize: '18px',
              fontWeight: '500'
            }}>
              Frequently Asked Questions
            </div>
            <div style={{ padding: '0' }}>
              {[
                'Q. How much does an Ad in a Newspaper cost?',
                'Q. How do I get an ad published in the Newspaper ?',
                'Q. What are the various Ad formats available in Newspapers ?',
                'Q. When is the deadline for booking a Newspaper Ad?'
              ].map((question, index) => (
                <div key={index} style={{
                  borderBottom: index < 3 ? '1px solid #e0e0e0' : 'none',
                  padding: '15px 20px',
                  cursor: 'pointer',
                  transition: 'background-color 0.2s ease'
                }}>
                  <div style={{
                    fontSize: '15px',
                    color: '#333',
                    fontWeight: '400'
                  }}>
                    {question}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* How To Book Section */}
          <div style={{
            backgroundColor: 'white',
            borderRadius: '8px',
            overflow: 'hidden',
            marginBottom: '30px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
          }}>
            <div style={{
              backgroundColor: '#6c6c6c',
              color: 'white',
              padding: '15px 20px',
              fontSize: '18px',
              fontWeight: '500'
            }}>
              How To Book Advertisement In Newspapers?
            </div>
            <div style={{ padding: '25px 20px' }}>
              <div style={{
                fontSize: '14px',
                color: '#666',
                lineHeight: '1.6',
                marginBottom: '20px'
              }}>
                We are functioning in the advertising industry for over a decade, and hence we figured out that the advertisers need an easy ad booking option. There is no time to visit the local agencies every time one books an ad. So, we have brought the online ad booking option for our advertisers.
              </div>
              
              <div style={{
                fontSize: '14px',
                color: '#666',
                fontWeight: '600',
                marginBottom: '15px'
              }}>
                Now, releaseMyAd shall assist you to book ads instantly with 5 easy ad booking steps:
              </div>
              
              <div style={{ marginBottom: '20px' }}>
                {[
                  'Start by selecting your desired category for booking ad.',
                  'Next, select your ad format from classified text, classified display or display.',
                  'Select your choice of newspaper and then, pick up an ad booking package or an edition and then proceed to compose ad, or you may upload your designed ad matter.',
                  'At this stage, you will have to select the sub-category under the main heading of your ad.',
                  'Finally, you will need to select your publication dates and make payment via our various online or offline payment modes.'
                ].map((step, index) => (
                  <div key={index} style={{
                    display: 'flex',
                    marginBottom: '12px',
                    fontSize: '14px',
                    color: '#666',
                    lineHeight: '1.5'
                  }}>
                    <span style={{
                      fontWeight: 'bold',
                      marginRight: '8px',
                      minWidth: '20px'
                    }}>
                      {index + 1}.
                    </span>
                    <span>{step}</span>
                  </div>
                ))}
              </div>
              
              <div style={{
                fontSize: '14px',
                color: '#666',
                lineHeight: '1.6',
                marginBottom: '15px'
              }}>
                However, for advertising in the display format, you may select the ad category and then call at <strong>09830629298</strong> to start negotiating for the ad rates and then proceed to book ad.
              </div>
              
              <div style={{
                fontSize: '14px',
                color: '#666',
                lineHeight: '1.6'
              }}>
                Classified text, classified display, and display ads are the three ad booking formats that you need to select from in order to place advertisements in the leading newspapers of the country.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewspaperAdvertising;