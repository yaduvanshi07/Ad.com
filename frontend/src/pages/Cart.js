import React, { useState } from 'react';

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      service: 'Newspaper Advertising',
      type: 'Front Page Display Ad',
      publication: 'The Times of India',
      duration: '1 week',
      price: 15000,
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop'
    },
    {
      id: 2,
      service: 'Cinema Advertising',
      type: 'Pre-show Video Ad',
      publication: 'PVR Cinemas',
      duration: '2 weeks',
      price: 25000,
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=100&h=100&fit=crop'
    },
    {
      id: 3,
      service: 'Digital Marketing',
      type: 'Google Ads Campaign',
      publication: 'Google Ads',
      duration: '1 month',
      price: 30000,
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=100&h=100&fit=crop'
    }
  ]);

  const [couponCode, setCouponCode] = useState('');
  const [appliedCoupon, setAppliedCoupon] = useState(null);

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    setCartItems(items =>
      items.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const applyCoupon = () => {
    if (couponCode.toLowerCase() === 'welcome20') {
      setAppliedCoupon({ code: 'WELCOME20', discount: 20 });
      alert('Coupon applied! 20% discount added.');
    } else if (couponCode.toLowerCase() === 'first50') {
      setAppliedCoupon({ code: 'FIRST50', discount: 50 });
      alert('Coupon applied! ₹50 discount added.');
    } else {
      alert('Invalid coupon code. Please try again.');
    }
    setCouponCode('');
  };

  const removeCoupon = () => {
    setAppliedCoupon(null);
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const discount = appliedCoupon ? 
    (appliedCoupon.code === 'WELCOME20' ? subtotal * 0.2 : appliedCoupon.discount) : 0;
  const total = subtotal - discount;
  const gst = total * 0.18;
  const finalTotal = total + gst;

  if (cartItems.length === 0) {
    return (
      <div style={{ minHeight: '100vh', backgroundColor: '#f8f9fa', display: 'flex', alignItems: 'center' }}>
        <div style={{ width: '100%', padding: '20px', textAlign: 'center' }}>
          <div style={{ maxWidth: '500px', margin: '0 auto' }}>
            <div style={{ fontSize: '80px', marginBottom: '20px' }}>🛒</div>
            <h1 style={{ fontSize: '32px', color: '#333', marginBottom: '15px' }}>
              Your cart is empty
            </h1>
            <p style={{ color: '#666', fontSize: '18px', marginBottom: '30px' }}>
              Looks like you haven't added any advertising services to your cart yet.
            </p>
            <button
              onClick={() => window.location.href = '/services'}
              style={{
                backgroundColor: '#667eea',
                color: 'white',
                padding: '15px 30px',
                border: 'none',
                borderRadius: '25px',
                fontSize: '16px',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#5a67d8';
                e.target.style.transform = 'translateY(-1px)';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = '#667eea';
                e.target.style.transform = 'translateY(0)';
              }}
            >
              Browse Services
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f8f9fa', padding: '40px 20px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '36px', color: '#333', marginBottom: '40px', textAlign: 'center' }}>
          Shopping Cart
        </h1>

        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '40px' }}>
          {/* Cart Items */}
          <div>
            <h2 style={{ fontSize: '24px', color: '#333', marginBottom: '20px' }}>
              Cart Items ({cartItems.length})
            </h2>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {cartItems.map(item => (
                <div key={item.id} style={{
                  backgroundColor: 'white',
                  padding: '20px',
                  borderRadius: '12px',
                  boxShadow: '0 5px 15px rgba(0,0,0,0.08)',
                  display: 'flex',
                  gap: '20px',
                  alignItems: 'center'
                }}>
                  <img
                    src={item.image}
                    alt={item.service}
                    style={{
                      width: '80px',
                      height: '80px',
                      borderRadius: '8px',
                      objectFit: 'cover'
                    }}
                  />
                  
                  <div style={{ flex: 1 }}>
                    <h3 style={{ fontSize: '18px', color: '#333', marginBottom: '8px' }}>
                      {item.service}
                    </h3>
                    <p style={{ color: '#666', fontSize: '14px', marginBottom: '5px' }}>
                      {item.type}
                    </p>
                    <p style={{ color: '#666', fontSize: '14px', marginBottom: '5px' }}>
                      {item.publication} • {item.duration}
                    </p>
                    <p style={{ color: '#667eea', fontSize: '16px', fontWeight: '600' }}>
                      ₹{item.price.toLocaleString()}
                    </p>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      style={{
                        width: '30px',
                        height: '30px',
                        border: '1px solid #e1e5e9',
                        backgroundColor: 'white',
                        borderRadius: '50%',
                        cursor: 'pointer',
                        fontSize: '16px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      -
                    </button>
                    <span style={{ fontSize: '16px', fontWeight: '600', minWidth: '30px', textAlign: 'center' }}>
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      style={{
                        width: '30px',
                        height: '30px',
                        border: '1px solid #e1e5e9',
                        backgroundColor: 'white',
                        borderRadius: '50%',
                        cursor: 'pointer',
                        fontSize: '16px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      +
                    </button>
                  </div>

                  <div style={{ textAlign: 'right' }}>
                    <p style={{ color: '#333', fontSize: '18px', fontWeight: '600', marginBottom: '10px' }}>
                      ₹{(item.price * item.quantity).toLocaleString()}
                    </p>
                    <button
                      onClick={() => removeItem(item.id)}
                      style={{
                        backgroundColor: 'transparent',
                        color: '#e53e3e',
                        border: '1px solid #e53e3e',
                        padding: '8px 16px',
                        borderRadius: '20px',
                        cursor: 'pointer',
                        fontSize: '14px',
                        transition: 'all 0.3s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.backgroundColor = '#e53e3e';
                        e.target.style.color = 'white';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.backgroundColor = 'transparent';
                        e.target.style.color = '#e53e3e';
                      }}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Order Summary */}
          <div style={{ height: 'fit-content' }}>
            <div style={{
              backgroundColor: 'white',
              padding: '30px',
              borderRadius: '12px',
              boxShadow: '0 5px 15px rgba(0,0,0,0.08)'
            }}>
              <h3 style={{ fontSize: '20px', color: '#333', marginBottom: '25px' }}>
                Order Summary
              </h3>

              {/* Coupon Section */}
              <div style={{ marginBottom: '25px' }}>
                <div style={{ display: 'flex', gap: '10px', marginBottom: '15px' }}>
                  <input
                    type="text"
                    placeholder="Enter coupon code"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                    style={{
                      flex: 1,
                      padding: '10px 12px',
                      border: '2px solid #e1e5e9',
                      borderRadius: '8px',
                      fontSize: '14px',
                      outline: 'none'
                    }}
                  />
                  <button
                    onClick={applyCoupon}
                    style={{
                      backgroundColor: '#667eea',
                      color: 'white',
                      padding: '10px 16px',
                      border: 'none',
                      borderRadius: '8px',
                      cursor: 'pointer',
                      fontSize: '14px',
                      fontWeight: '600'
                    }}
                  >
                    Apply
                  </button>
                </div>
                
                {appliedCoupon && (
                  <div style={{
                    backgroundColor: '#f0f9ff',
                    border: '1px solid #0ea5e9',
                    borderRadius: '8px',
                    padding: '12px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}>
                    <span style={{ color: '#0ea5e9', fontSize: '14px' }}>
                      Coupon {appliedCoupon.code} applied
                    </span>
                    <button
                      onClick={removeCoupon}
                      style={{
                        backgroundColor: 'transparent',
                        border: 'none',
                        color: '#0ea5e9',
                        cursor: 'pointer',
                        fontSize: '14px'
                      }}
                    >
                      ✕
                    </button>
                  </div>
                )}
              </div>

              {/* Price Breakdown */}
              <div style={{ marginBottom: '25px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                  <span style={{ color: '#666' }}>Subtotal</span>
                  <span>₹{subtotal.toLocaleString()}</span>
                </div>
                
                {appliedCoupon && (
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                    <span style={{ color: '#666' }}>Discount</span>
                    <span style={{ color: '#10b981' }}>
                      -₹{discount.toLocaleString()}
                    </span>
                  </div>
                )}
                
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                  <span style={{ color: '#666' }}>GST (18%)</span>
                  <span>₹{gst.toLocaleString()}</span>
                </div>
                
                <hr style={{ border: 'none', borderTop: '1px solid #e1e5e9', margin: '15px 0' }} />
                
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '18px', fontWeight: '600' }}>
                  <span>Total</span>
                  <span>₹{finalTotal.toLocaleString()}</span>
                </div>
              </div>

              {/* Checkout Button */}
              <button
                style={{
                  width: '100%',
                  backgroundColor: '#667eea',
                  color: 'white',
                  padding: '15px 20px',
                  border: 'none',
                  borderRadius: '8px',
                  fontSize: '16px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#5a67d8';
                  e.target.style.transform = 'translateY(-1px)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = '#667eea';
                  e.target.style.transform = 'translateY(0)';
                }}
              >
                Proceed to Checkout
              </button>

              {/* Continue Shopping */}
              <button
                onClick={() => window.location.href = '/services'}
                style={{
                  width: '100%',
                  backgroundColor: 'transparent',
                  color: '#667eea',
                  padding: '12px 20px',
                  border: '2px solid #667eea',
                  borderRadius: '8px',
                  fontSize: '14px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  marginTop: '15px',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#667eea';
                  e.target.style.color = 'white';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = 'transparent';
                  e.target.style.color = '#667eea';
                }}
              >
                Continue Shopping
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
