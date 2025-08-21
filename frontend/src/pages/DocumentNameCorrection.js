import React from 'react';

const DocumentNameCorrection = ({ navigateToPage }) => {
  const subcategories = [
    'Passport',
    'Aadhaar Card',
    'PAN Card',
    'Driving Licence',
    'Education Documents'
  ];

  return (
    <section style={{ padding: '100px 0 60px' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 20px' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: 12 }}>Document Name Correction</h1>
        <p style={{ color: '#64748b', marginBottom: 24 }}>
          We assist with name correction services across the following document categories. Select your category and proceed to book.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 16 }}>
          {subcategories.map((name) => (
            <div key={name} style={{ border: '1px solid #e2e8f0', borderRadius: 12, padding: 16, background: 'white' }}>
              <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 700 }}>{name}</h3>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 24 }}>
          <button
            onClick={() => navigateToPage && navigateToPage('home')}
            style={{ padding: '10px 16px', background: '#f5f5dc', color: '#8b4513', borderRadius: 8 }}
          >
            Back to Home
          </button>
        </div>
      </div>
    </section>
  );
};

export default DocumentNameCorrection;

