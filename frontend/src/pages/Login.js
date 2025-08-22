import React, { useState } from 'react';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
    company: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate authentication
    setTimeout(() => {
      if (isLogin) {
        alert('Login successful! Welcome back.');
      } else {
        alert('Registration successful! Please check your email to verify your account.');
      }
      setFormData({
        email: '',
        password: '',
        confirmPassword: '',
        firstName: '',
        lastName: '',
        company: ''
      });
      setIsSubmitting(false);
    }, 2000);
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f8f9fa', display: 'flex', alignItems: 'center' }}>
      <div style={{ width: '100%', padding: '20px' }}>
        <div style={{ maxWidth: '500px', margin: '0 auto' }}>
          {/* Logo/Brand */}
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h1 style={{ fontSize: '32px', color: '#667eea', marginBottom: '10px' }}>
              VipLav Advertising Co.
            </h1>
            <p style={{ color: '#666', fontSize: '16px' }}>
              {isLogin ? 'Welcome back! Please sign in to your account.' : 'Create your account to get started.'}
            </p>
          </div>

          {/* Auth Form */}
          <div style={{
            backgroundColor: 'white',
            padding: '40px',
            borderRadius: '15px',
            boxShadow: '0 15px 35px rgba(0,0,0,0.1)'
          }}>
            {/* Toggle Buttons */}
            <div style={{
              display: 'flex',
              marginBottom: '30px',
              backgroundColor: '#f8f9fa',
              borderRadius: '10px',
              padding: '5px'
            }}>
              <button
                onClick={() => setIsLogin(true)}
                style={{
                  flex: 1,
                  padding: '12px 20px',
                  backgroundColor: isLogin ? '#667eea' : 'transparent',
                  color: isLogin ? 'white' : '#667eea',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontSize: '16px',
                  fontWeight: '600',
                  transition: 'all 0.3s ease'
                }}
              >
                Sign In
              </button>
              <button
                onClick={() => setIsLogin(false)}
                style={{
                  flex: 1,
                  padding: '12px 20px',
                  backgroundColor: !isLogin ? '#667eea' : 'transparent',
                  color: !isLogin ? 'white' : '#667eea',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontSize: '16px',
                  fontWeight: '600',
                  transition: 'all 0.3s ease'
                }}
              >
                Sign Up
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit}>
              {!isLogin && (
                <>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginBottom: '20px' }}>
                    <div>
                      <label style={{ display: 'block', marginBottom: '8px', color: '#333', fontWeight: '600' }}>
                        First Name *
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                        style={{
                          width: '100%',
                          padding: '12px 16px',
                          border: '2px solid #e1e5e9',
                          borderRadius: '8px',
                          fontSize: '16px',
                          outline: 'none',
                          transition: 'border-color 0.3s ease'
                        }}
                        onFocus={(e) => e.target.style.borderColor = '#667eea'}
                        onBlur={(e) => e.target.style.borderColor = '#e1e5e9'}
                      />
                    </div>
                    <div>
                      <label style={{ display: 'block', marginBottom: '8px', color: '#333', fontWeight: '600' }}>
                        Last Name *
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                        style={{
                          width: '100%',
                          padding: '12px 16px',
                          border: '2px solid #e1e5e9',
                          borderRadius: '8px',
                          fontSize: '16px',
                          outline: 'none',
                          transition: 'border-color 0.3s ease'
                        }}
                        onFocus={(e) => e.target.style.borderColor = '#667eea'}
                        onBlur={(e) => e.target.style.borderColor = '#e1e5e9'}
                      />
                    </div>
                  </div>

                  <div style={{ marginBottom: '20px' }}>
                    <label style={{ display: 'block', marginBottom: '8px', color: '#333', fontWeight: '600' }}>
                      Company Name
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        border: '2px solid #e1e5e9',
                        borderRadius: '8px',
                        fontSize: '16px',
                        outline: 'none',
                        transition: 'border-color 0.3s ease'
                      }}
                      onFocus={(e) => e.target.style.borderColor = '#667eea'}
                      onBlur={(e) => e.target.style.borderColor = '#e1e5e9'}
                    />
                  </div>
                </>
              )}

              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', marginBottom: '8px', color: '#333', fontWeight: '600' }}>
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    border: '2px solid #e1e5e9',
                    borderRadius: '8px',
                    fontSize: '16px',
                    outline: 'none',
                    transition: 'border-color 0.3s ease'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#667eea'}
                  onBlur={(e) => e.target.style.borderColor = '#e1e5e9'}
                />
              </div>

              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', marginBottom: '8px', color: '#333', fontWeight: '600' }}>
                  Password *
                </label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    border: '2px solid #e1e5e9',
                    borderRadius: '8px',
                    fontSize: '16px',
                    outline: 'none',
                    transition: 'border-color 0.3s ease'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#667eea'}
                  onBlur={(e) => e.target.style.borderColor = '#e1e5e9'}
                />
              </div>

              {!isLogin && (
                <div style={{ marginBottom: '20px' }}>
                  <label style={{ display: 'block', marginBottom: '8px', color: '#333', fontWeight: '600' }}>
                    Confirm Password *
                  </label>
                  <input
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    required
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      border: '2px solid #e1e5e9',
                      borderRadius: '8px',
                      fontSize: '16px',
                      outline: 'none',
                      transition: 'border-color 0.3s ease'
                    }}
                    onFocus={(e) => e.target.style.borderColor = '#667eea'}
                    onBlur={(e) => e.target.style.borderColor = '#e1e5e9'}
                  />
                </div>
              )}

              {isLogin && (
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
                  <label style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                    <input type="checkbox" style={{ marginRight: '8px' }} />
                    <span style={{ color: '#666', fontSize: '14px' }}>Remember me</span>
                  </label>
                  <a href="#" style={{ color: '#667eea', textDecoration: 'none', fontSize: '14px' }}>
                    Forgot password?
                  </a>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                style={{
                  width: '100%',
                  backgroundColor: isSubmitting ? '#ccc' : '#667eea',
                  color: 'white',
                  padding: '15px 20px',
                  border: 'none',
                  borderRadius: '8px',
                  fontSize: '16px',
                  fontWeight: '600',
                  cursor: isSubmitting ? 'not-allowed' : 'pointer',
                  transition: 'all 0.3s ease',
                  marginBottom: '20px'
                }}
                onMouseEnter={(e) => {
                  if (!isSubmitting) {
                    e.target.style.backgroundColor = '#5a67d8';
                    e.target.style.transform = 'translateY(-1px)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isSubmitting) {
                    e.target.style.backgroundColor = '#667eea';
                    e.target.style.transform = 'translateY(0)';
                  }
                }}
              >
                {isSubmitting ? 'Processing...' : (isLogin ? 'Sign In' : 'Create Account')}
              </button>

              {!isLogin && (
                <p style={{ color: '#666', fontSize: '14px', textAlign: 'center', lineHeight: '1.5' }}>
                  By creating an account, you agree to our{' '}
                  <a href="/terms-of-service" style={{ color: '#667eea', textDecoration: 'none' }}>Terms of Service</a>
                  {' '}and{' '}
                  <a href="/privacy-policy" style={{ color: '#667eea', textDecoration: 'none' }}>Privacy Policy</a>
                </p>
              )}
            </form>

            {/* Social Login */}
            <div style={{ marginTop: '30px', textAlign: 'center' }}>
              <div style={{ position: 'relative', marginBottom: '20px' }}>
                <hr style={{ border: 'none', borderTop: '1px solid #e1e5e9' }} />
                <span style={{
                  position: 'absolute',
                  top: '-10px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  backgroundColor: 'white',
                  padding: '0 15px',
                  color: '#666',
                  fontSize: '14px'
                }}>
                  Or continue with
                </span>
              </div>

              <div style={{ display: 'flex', gap: '15px', justifyContent: 'center' }}>
                <button style={{
                  flex: 1,
                  padding: '12px 20px',
                  backgroundColor: '#1877f2',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontSize: '14px',
                  fontWeight: '600',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#166fe5';
                  e.target.style.transform = 'translateY(-1px)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = '#1877f2';
                  e.target.style.transform = 'translateY(0)';
                }}>
                  Facebook
                </button>
                <button style={{
                  flex: 1,
                  padding: '12px 20px',
                  backgroundColor: '#db4437',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontSize: '14px',
                  fontWeight: '600',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#c23321';
                  e.target.style.transform = 'translateY(-1px)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = '#db4437';
                  e.target.style.transform = 'translateY(0)';
                }}>
                  Google
                </button>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div style={{ textAlign: 'center', marginTop: '30px' }}>
            <p style={{ color: '#666', fontSize: '16px' }}>
              {isLogin ? "Don't have an account? " : "Already have an account? "}
              <button
                onClick={() => setIsLogin(!isLogin)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#667eea',
                  cursor: 'pointer',
                  fontSize: '16px',
                  fontWeight: '600',
                  textDecoration: 'underline'
                }}
              >
                {isLogin ? 'Sign up here' : 'Sign in here'}
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
