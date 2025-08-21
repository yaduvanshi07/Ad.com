import React, { useState, useEffect } from 'react';

const NewspaperAdvertising = () => {
  // State management
  const [cities, setCities] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('Matrimonial');
  const [selectedCity, setSelectedCity] = useState('Mumbai');
  const [loading, setLoading] = useState(true);

  // Mock data for demonstration
  useEffect(() => {
    const mockData = () => {
      setTimeout(() => {
        setCities([
          { id: 1, name: 'Mumbai', state: 'Maharashtra' },
          { id: 2, name: 'Delhi', state: 'Delhi' },
          { id: 3, name: 'Bangalore', state: 'Karnataka' },
          { id: 4, name: 'Chennai', state: 'Tamil Nadu' },
          { id: 5, name: 'Kolkata', state: 'West Bengal' }
        ]);
        
        setCategories([
          { id: 1, name: 'Matrimonial' },
          { id: 2, name: 'Property' },
          { id: 3, name: 'Jobs' },
          { id: 4, name: 'Education' },
          { id: 5, name: 'Business' }
        ]);
        
        setLoading(false);
      }, 500);
    };

    mockData();
  }, []);

  const handleSubmit = () => {
    alert(`Searching for ${selectedCategory} ads in ${selectedCity}`);
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
      backgroundColor: '#f5f5f5', 
      color: '#333', 
      lineHeight: 1.6, 
      padding: '20px',
      minHeight: '100vh'
    }}>
      <div style={{ 
        maxWidth: '1000px', 
        margin: '0 auto', 
        backgroundColor: 'white', 
        padding: '20px', 
        boxShadow: '0 0 10px rgba(0,0,0,0.1)' 
      }}>
        {/* Header */}
        <header style={{ 
          textAlign: 'center', 
          marginBottom: '30px', 
          paddingBottom: '20px', 
          borderBottom: '2px solid #e0e0e0' 
        }}>
          <h1 style={{ 
            fontSize: '28px', 
            color: '#d32f2f', 
            marginBottom: '10px', 
            fontWeight: '700' 
          }}>
            Book Advertisements for Indian Newspapers Instantly!
          </h1>
        </header>
        
        {/* Ad Samples */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          marginBottom: '30px',
          flexWrap: 'wrap'
        }}>
          <div style={{ 
            flex: 1, 
            margin: '0 10px', 
            padding: '15px', 
            border: '1px solid #ccc', 
            backgroundColor: '#fff', 
            textAlign: 'center',
            minWidth: '200px'
          }}>
            <h3 style={{ 
              fontWeight: '700', 
              fontSize: '18px', 
              marginBottom: '5px', 
              color: '#333' 
            }}>
              WANTED BRIDGE
            </h3>
            <p style={{ fontSize: '14px', color: '#666' }}>
              BUSINESS PROPOSES
            </p>
          </div>
          <div style={{ 
            flex: 1, 
            margin: '0 10px', 
            padding: '15px', 
            border: '1px solid #ccc', 
            backgroundColor: '#fff', 
            textAlign: 'center',
            minWidth: '200px'
          }}>
            <h3 style={{ 
              fontWeight: '700', 
              fontSize: '18px', 
              marginBottom: '5px', 
              color: '#333' 
            }}>
              EQUATION
            </h3>
            <p style={{ fontSize: '14px', color: '#666' }}>
              REAL BASE FOR SALE
            </p>
          </div>
        </div>
        
        {/* Ad Types */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          marginBottom: '30px',
          flexWrap: 'wrap'
        }}>
          <div style={{ 
            margin: '0 15px', 
            textAlign: 'center', 
            fontSize: '15px', 
            fontWeight: '500' 
          }}>
            Book Classified Text Ad
          </div>
          <div style={{ 
            margin: '0 15px', 
            textAlign: 'center', 
            fontSize: '15px', 
            fontWeight: '500' 
          }}>
            Book Classified Display Ad
          </div>
          <div style={{ 
            margin: '0 15px', 
            textAlign: 'center', 
            fontSize: '15px', 
            fontWeight: '500' 
          }}>
            Book Display Ad
          </div>
        </div>
        
        {/* Stats */}
        <div style={{ 
          backgroundColor: '#1976d2', 
          color: 'white', 
          padding: '20px', 
          marginBottom: '30px', 
          display: 'flex', 
          justifyContent: 'space-around', 
          textAlign: 'center',
          flexWrap: 'wrap'
        }}>
          <div style={{ padding: '0 15px' }}>
            <div style={{ fontSize: '24px', fontWeight: '700', marginBottom: '5px' }}>270+</div>
            <div style={{ fontSize: '14px' }}>Newspapers</div>
          </div>
          <div style={{ padding: '0 15px' }}>
            <div style={{ fontSize: '24px', fontWeight: '700', marginBottom: '5px' }}>2,225+</div>
            <div style={{ fontSize: '14px' }}>Others</div>
          </div>
          <div style={{ padding: '0 15px' }}>
            <div style={{ fontSize: '24px', fontWeight: '700', marginBottom: '5px' }}>1,89,537+</div>
            <div style={{ fontSize: '14px' }}>Happy Advertisers</div>
          </div>
          <div style={{ padding: '0 15px' }}>
            <div style={{ fontSize: '16px', fontWeight: '700', marginBottom: '5px' }}>Online / Cash Payment</div>
          </div>
          <div style={{ padding: '0 15px' }}>
            <div style={{ fontSize: '16px', fontWeight: '700', marginBottom: '5px' }}>Accreditation</div>
          </div>
        </div>
        
        {/* Booking Form */}
        <div style={{ 
          backgroundColor: '#f9f9f9', 
          padding: '25px', 
          border: '1px solid #ddd', 
          marginBottom: '30px' 
        }}>
          <h2 style={{ 
            textAlign: 'center', 
            marginBottom: '20px', 
            fontSize: '20px', 
            color: '#333' 
          }}>
            Confused? Need help
          </h2>
          
          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            marginBottom: '20px',
            flexWrap: 'wrap'
          }}>
            <div style={{ flex: 1, margin: '0 15px', minWidth: '200px' }}>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>
                Specify Category:
              </label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                style={{
                  width: '100%',
                  padding: '10px',
                  border: '1px solid #ccc',
                  borderRadius: '4px',
                  fontSize: '15px'
                }}
              >
                {categories.map((category) => (
                  <option key={category.id} value={category.name}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>
            
            <div style={{ flex: 1, margin: '0 15px', minWidth: '200px' }}>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>
                Select Location:
              </label>
              <select
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                style={{
                  width: '100%',
                  padding: '10px',
                  border: '1px solid #ccc',
                  borderRadius: '4px',
                  fontSize: '15px'
                }}
              >
                {cities.map((city) => (
                  <option key={city.id} value={city.name}>
                    {city.name} {city.state ? `(${city.state})` : ''}
                  </option>
                ))}
              </select>
            </div>
          </div>
          
          <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <button 
              onClick={handleSubmit}
              style={{
                backgroundColor: '#d32f2f',
                color: 'white',
                border: 'none',
                padding: '12px 30px',
                fontSize: '16px',
                fontWeight: '500',
                cursor: 'pointer',
                borderRadius: '4px'
              }}
            >
              Click here
            </button>
          </div>
        </div>
        
        {/* Newspapers */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(3, 1fr)', 
          gap: '15px', 
          marginBottom: '30px' 
        }}>
          {['THE TIMES OF INDIA', 'MIRROR', 'The Tribune', 'The Economic Times', 'Chronicle', 'Hindustan Times'].map((paper, index) => (
            <div key={index} style={{ 
              padding: '15px', 
              border: '1px solid #ddd', 
              textAlign: 'center', 
              backgroundColor: '#fff', 
              fontWeight: '500' 
            }}>
              {paper}
            </div>
          ))}
        </div>
        
        {/* Footer */}
        <footer style={{ 
          textAlign: 'center', 
          paddingTop: '20px', 
          borderTop: '1px solid #e0e0e0', 
          color: '#666', 
          fontSize: '14px' 
        }}>
          <p>28/01/03 08:00 AM</p>
        </footer>
      </div>
    </div>
  );
};

export default NewspaperAdvertising;