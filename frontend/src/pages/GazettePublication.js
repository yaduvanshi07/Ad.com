import React from 'react';

const GazettePublication = ({ navigateToPage }) => {
  return (
    <section style={{ padding: '100px 0 60px' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 20px' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: 12 }}>Gazette Publication</h1>
        <p style={{ color: '#64748b', marginBottom: 24 }}>
          Official name change and public notice publication assistance. Contact us to get started.
        </p>

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

export default GazettePublication;

