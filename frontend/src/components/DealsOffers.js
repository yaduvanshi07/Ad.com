import React, { useEffect, useMemo, useState } from 'react';

// Deals & Offers carousel (2 items per view) with 3 default offer banners
const DealsOffers = ({ deals = [] }) => {
  const defaultOffers = useMemo(() => ([
    {
      id: 'newspaper',
      headline: 'Make Headlines with Your Brand!',
      subheadline: '📰 Newspaper Advertising',
      badge: 'Ads starting at ₹1999/- | Book Now',
      cta: 'Book Now',
      theme: { bg: '#eaf3ff', accent: '#1d4ed8', text: '#1f2937' }
    },
    {
      id: 'cinema',
      headline: 'Big Screen, Bigger Impact!',
      subheadline: '🎬 Cinema Advertising',
      badge: 'Reach moviegoers from just ₹4999/-',
      cta: 'Book Now',
      theme: { bg: '#eefcf4', accent: '#10b981', text: '#1f2937' }
    },
    {
      id: 'tv',
      headline: 'Be Seen Across Millions of Homes!',
      subheadline: '📺 TV Advertising',
      badge: 'TV Ads from ₹9999/- | Limited Slots',
      cta: 'Book Now',
      theme: { bg: '#f3f1ff', accent: '#7c3aed', text: '#1f2937' }
    },
    {
      id: 'radio',
      headline: 'Let the City Hear You!',
      subheadline: '📻 Radio Advertising',
      badge: 'On-air Ads from ₹2999/- | Book Now',
      cta: 'Book Now',
      theme: { bg: '#fdf3e7', accent: '#e53935', text: '#1f2937' }
    },
    {
      id: 'transit',
      headline: 'Move Your Brand Everywhere!',
      subheadline: '🚌 Transit Media',
      badge: 'Bus & Metro Ads from ₹4999/-',
      cta: 'Book Now',
      theme: { bg: '#fff7ed', accent: '#f59e0b', text: '#1f2937' }
    },
    {
      id: 'digital',
      headline: 'Dominate the Digital Space!',
      subheadline: '💻 Digital Marketing',
      badge: 'Campaigns starting at just ₹1999/-',
      cta: 'Start Now',
      theme: { bg: '#eef2ff', accent: '#2563eb', text: '#1f2937' }
    }
  ]), []);

  // Merge incoming deals (if any) into a uniform shape
  const normalizedDeals = Array.isArray(deals) && deals.length > 0
    ? deals.map((d, i) => ({
        id: d.id || `deal-${i}`,
        headline: d.title || 'Special Offer',
        subheadline: d.description || '',
        badge: d.price || '',
        cta: 'Book Now',
        theme: { bg: '#eaf3ff', accent: '#e53935', text: '#1f2937' }
      }))
    : [];

  // Always use our curated six offers to guarantee full rotation
  const offers = defaultOffers;

  const [page, setPage] = useState(0);
  const itemsPerPage = 2;
  const totalPages = Math.ceil(offers.length / itemsPerPage);
  const start = page * itemsPerPage;
  const visible = offers.slice(start, start + itemsPerPage);

  const goToPage = (p) => setPage(Math.max(0, Math.min(totalPages - 1, p)));

  // Auto-rotate pages every 1 second
  useEffect(() => {
    if (totalPages <= 1) return;
    const id = setInterval(() => {
      setPage((prev) => (prev + 1) % totalPages);
    }, 1000);
    return () => clearInterval(id);
  }, [totalPages]);

  return (
    <section style={styles.sectionWrapper}>
        <div style={styles.container}>
        <h2 style={styles.title}>Deals and Offers</h2>

        <div style={styles.sliderWrapper}>
          <div style={styles.track}>
            {visible.map((offer) => (
              <div key={offer.id} style={{ ...styles.bannerCard, background: offer.theme.bg }}>
                <div style={styles.bannerContent}>
                  <div>
                    <h3 style={{ ...styles.bannerHeadline, color: offer.theme.text }}>{offer.headline}</h3>
                    {offer.subheadline && (
                      <p style={{ ...styles.bannerSub, color: '#555' }}>{offer.subheadline}</p>
                    )}
                    <div style={styles.bannerCtaRow}>
                      {offer.badge && (
                        <span style={{ ...styles.badge, borderColor: offer.theme.accent, color: offer.theme.accent }}>{offer.badge}</span>
                      )}
                      <button style={{ ...styles.ctaBtn, backgroundColor: offer.theme.accent }}>{offer.cta}</button>
              </div>
            </div>
              </div>
            </div>
            ))}
              </div>
            </div>
            
        <div style={styles.dotsRow}>
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => goToPage(i)}
              aria-label={`Go to page ${i + 1}`}
              style={{
                ...styles.dot,
                borderColor: i === page ? '#e53935' : '#333',
                backgroundColor: i === page ? 'transparent' : '#333'
              }}
            />
          ))}
          </div>
        </div>
      </section>
  );
};

const styles = {
  sectionWrapper: {
    background: '#f3f4f6',
    padding: '40px 0'
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px'
  },
  title: {
    fontSize: '2rem',
    fontWeight: '800',
    textAlign: 'center',
    marginBottom: '20px',
    color: '#111827'
  },
  sliderWrapper: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    alignItems: 'center'
  },
  track: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '16px'
  },
  bannerCard: {
    borderRadius: '12px',
    overflow: 'hidden',
    minHeight: '120px',
    display: 'flex',
    alignItems: 'stretch',
    boxShadow: '0 6px 18px rgba(0,0,0,0.08)'
  },
  bannerContent: {
    flex: 1,
    padding: '18px 24px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '16px'
  },
  bannerHeadline: {
    fontSize: '20px',
    fontWeight: '700',
    margin: '0 0 8px 0'
  },
  bannerSub: {
    fontSize: '14px',
    margin: '0 0 12px 0'
  },
  bannerCtaRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    flexWrap: 'wrap'
  },
  badge: {
    border: '2px solid',
    padding: '6px 10px',
    borderRadius: '30px',
    fontWeight: '700',
    fontSize: '12px',
    backgroundColor: '#fff'
  },
  ctaBtn: {
    border: 'none',
    color: '#fff',
    padding: '10px 16px',
    borderRadius: '6px',
    fontWeight: '700',
    cursor: 'pointer'
  },
  dotsRow: {
    display: 'flex',
    justifyContent: 'center',
    gap: '10px',
    marginTop: '16px'
  },
  dot: {
    width: '12px',
    height: '12px',
    borderRadius: '50%',
    border: '2px solid',
    backgroundColor: '#333',
    cursor: 'pointer'
  }
};

export default DealsOffers;