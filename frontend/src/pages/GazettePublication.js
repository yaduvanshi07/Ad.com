import React, { useState } from 'react';
import { FileText, Clock, Shield, CheckCircle, Users, Phone, Mail, MapPin, ChevronDown, Star, ArrowRight, User, Calendar, Newspaper, Award } from 'lucide-react';

const GazettePublication = ({ navigateToPage }) => {
  const [currentPage, setCurrentPage] = useState('info'); // 'info' or 'consultation'
  const [openFAQ, setOpenFAQ] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: ''
  });
  const [formStep, setFormStep] = useState(1);
  const [formFields, setFormFields] = useState({
    oldName: '',
    newName: '',
    nameChangeType: '',
    state: '',
    email: '',
    phone: '',
    package: ''
  });

  const handleFAQToggle = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleFormInputChange = (field, value) => {
    setFormFields(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const nextFormStep = () => {
    if (formStep < 3) setFormStep(formStep + 1);
  };

  const prevFormStep = () => {
    if (formStep > 1) setFormStep(formStep - 1);
  };

  const handleVerificationClick = () => {
    if (navigateToPage) {
      navigateToPage('contact');
    }
  };

  // Consultation Page (the user-friendly one I made earlier)
  const ConsultationPage = () => (
    <div style={{ fontFamily: 'Inter, system-ui, sans-serif', lineHeight: 1.6, color: '#2d3748' }}>
      {/* Header - More personal and welcoming */}
      <section style={{ 
        background: '#4a5568',
        padding: '60px 0 40px',
        color: 'white'
      }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 20px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '15px' }}>
                <div style={{
                  background: '#ed8936',
                  color: 'white',
                  padding: '5px 12px',
                  borderRadius: '15px',
                  fontSize: '0.8rem',
                  fontWeight: '600'
                }}>
                  TRUSTED BY 10,000+ CUSTOMERS
                </div>
              </div>
              
              <h1 style={{ 
                fontSize: '2.8rem', 
                fontWeight: 700, 
                marginBottom: '20px',
                color: '#fff'
              }}>
                Change Your Name Legally in India
              </h1>
              <p style={{ 
                fontSize: '1.2rem', 
                opacity: 0.9, 
                marginBottom: '25px', 
                lineHeight: 1.6,
                maxWidth: '600px'
              }}>
                Complete gazette publication service with expert guidance. We handle all the paperwork 
                so you don't have to worry about the complicated legal process.
              </p>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '30px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                  <Star size={16} style={{ color: '#fbbf24' }} />
                  <Star size={16} style={{ color: '#fbbf24' }} />
                  <Star size={16} style={{ color: '#fbbf24' }} />
                  <Star size={16} style={{ color: '#fbbf24' }} />
                  <Star size={16} style={{ color: '#fbbf24' }} />
                  <span style={{ marginLeft: '5px', fontSize: '0.9rem' }}>4.9/5 from 2,500+ reviews</span>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
                <button style={{
                  padding: '15px 25px',
                  background: '#ed8936',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  fontWeight: 600,
                  fontSize: '1rem',
                  cursor: 'pointer',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
                }}>
                  Get Started Now →
                </button>
                <button 
                  onClick={() => setCurrentPage('info')}
                  style={{
                    padding: '15px 25px',
                    background: 'transparent',
                    color: 'white',
                    border: '2px solid rgba(255,255,255,0.5)',
                    borderRadius: '8px',
                    fontWeight: 600,
                    fontSize: '1rem',
                    cursor: 'pointer'
                  }}
                >
                  ← Back to Details
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gazette Name Change Process Section */}
      <section style={{ padding: '50px 0', background: '#f7fafc' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 20px' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 600, marginBottom: '15px', color: '#2d3748' }}>
              Gazette Name Change Process in India
            </h2>
            <p style={{ color: '#718096', fontSize: '1rem' }}>
              We've made name change as simple as possible - no legal jargon, no confusion
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
            {[
              {
                step: "1",
                title: "Submit Your Documents", 
                desc: "Just upload your basic documents online. We'll check everything and let you know if anything's missing.",
                icon: "📄"
              },
              {
                step: "2", 
                title: "We Handle the Paperwork",
                desc: "Our team takes care of affidavits, newspaper ads, and all the legal stuff. You just sit back and relax.",
                icon: "⚖️"
              },
              {
                step: "3",
                title: "Get Your Gazette Certificate",
                desc: "Once published in the official gazette, you'll get your certificate. Your new name is now legally valid!",
                icon: "🎉"
              }
            ].map((step, index) => (
              <div key={index} style={{
                background: 'white',
                padding: '25px',
                borderRadius: '12px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                border: '1px solid #e2e8f0',
                textAlign: 'center'
              }}>
                <div style={{
                  fontSize: '2.5rem',
                  marginBottom: '15px'
                }}>
                  {step.icon}
                </div>
                <div style={{
                  background: '#ed8936',
                  color: 'white',
                  width: '30px',
                  height: '30px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 15px',
                  fontWeight: 'bold',
                  fontSize: '0.9rem'
                }}>
                  {step.step}
                </div>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 600, marginBottom: '10px', color: '#2d3748' }}>
                  {step.title}
                </h3>
                <p style={{ color: '#718096', fontSize: '0.95rem', lineHeight: 1.5 }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Three Page Form Section */}
      <section style={{ padding: '50px 0', background: 'white' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 20px' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 600, marginBottom: '15px', color: '#2d3748' }}>
              Start Your Name Change Process
            </h2>
            <p style={{ color: '#718096', fontSize: '1rem' }}>
              Fill out the form below to begin your legal name change journey
            </p>
          </div>

          {/* Progress Bar */}
          <div style={{ marginBottom: '30px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
              <span style={{ fontSize: '0.9rem', color: '#718096' }}>
                Step {formStep} of 3
              </span>
              <span style={{ fontSize: '0.9rem', color: '#718096' }}>
                {Math.round((formStep / 3) * 100)}%
              </span>
            </div>
            <div style={{
              width: '100%',
              height: '8px',
              background: '#e2e8f0',
              borderRadius: '4px',
              overflow: 'hidden'
            }}>
              <div style={{
                width: `${(formStep / 3) * 100}%`,
                height: '100%',
                background: '#2c5282',
                transition: 'width 0.3s ease'
              }} />
            </div>
          </div>

          {/* Form Steps */}
          {formStep === 1 && (
            <div style={{
              background: 'white',
              padding: '40px',
              borderRadius: '12px',
              border: '1px solid #e2e8f0',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
            }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '25px', color: '#2d3748' }}>
                Personal Information
              </h3>
              
              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: 500, color: '#4a5568' }}>
                  Old Name *
                </label>
                <input
                  type="text"
                  value={formFields.oldName}
                  onChange={(e) => handleFormInputChange('oldName', e.target.value)}
                  style={{
                    width: '100%',
                    padding: '12px',
                    border: '1px solid #cbd5e0',
                    borderRadius: '6px',
                    fontSize: '1rem'
                  }}
                  placeholder="Enter your current name"
                />
              </div>

              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: 500, color: '#4a5568' }}>
                  New Name *
                </label>
                <input
                  type="text"
                  value={formFields.newName}
                  onChange={(e) => handleFormInputChange('newName', e.target.value)}
                  style={{
                    width: '100%',
                    padding: '12px',
                    border: '1px solid #cbd5e0',
                    borderRadius: '6px',
                    fontSize: '1rem'
                  }}
                  placeholder="Enter your desired new name"
                />
              </div>

              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: 500, color: '#4a5568' }}>
                  Select type of Name Change *
                </label>
                <select
                  value={formFields.nameChangeType}
                  onChange={(e) => handleFormInputChange('nameChangeType', e.target.value)}
                  style={{
                    width: '100%',
                    padding: '12px',
                    border: '1px solid #cbd5e0',
                    borderRadius: '6px',
                    fontSize: '1rem'
                  }}
                >
                  <option value="">- Select -</option>
                  <option value="marriage">Name Change after Marriage</option>
                  <option value="divorce">Name Change after Divorce</option>
                  <option value="religion">Name Change due to Religion</option>
                  <option value="numerology">Name Change due to Numerology</option>
                  <option value="other">Other Reason</option>
                </select>
              </div>

              <div style={{ textAlign: 'right' }}>
                <button
                  onClick={nextFormStep}
                  disabled={!formFields.oldName || !formFields.newName || !formFields.nameChangeType}
                  style={{
                    padding: '12px 25px',
                    background: formFields.oldName && formFields.newName && formFields.nameChangeType ? '#2c5282' : '#cbd5e0',
                    color: 'white',
                    border: 'none',
                    borderRadius: '6px',
                    fontWeight: 600,
                    cursor: formFields.oldName && formFields.newName && formFields.nameChangeType ? 'pointer' : 'not-allowed',
                    fontSize: '1rem'
                  }}
                >
                  Next
                </button>
              </div>
            </div>
          )}

          {formStep === 2 && (
            <div style={{
              background: 'white',
              padding: '40px',
              borderRadius: '12px',
              border: '1px solid #e2e8f0',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
            }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '25px', color: '#2d3748' }}>
                Contact Information
              </h3>
              
              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: 500, color: '#4a5568' }}>
                  Select your State *
                </label>
                <select
                  value={formFields.state}
                  onChange={(e) => handleFormInputChange('state', e.target.value)}
                  style={{
                    width: '100%',
                    padding: '12px',
                    border: '1px solid #cbd5e0',
                    borderRadius: '6px',
                    fontSize: '1rem'
                  }}
                >
                  <option value="">- Select -</option>
                  <option value="delhi">Delhi</option>
                  <option value="maharashtra">Maharashtra</option>
                  <option value="karnataka">Karnataka</option>
                  <option value="tamil-nadu">Tamil Nadu</option>
                  <option value="west-bengal">West Bengal</option>
                  <option value="gujarat">Gujarat</option>
                  <option value="rajasthan">Rajasthan</option>
                  <option value="andhra-pradesh">Andhra Pradesh</option>
                  <option value="telangana">Telangana</option>
                  <option value="kerala">Kerala</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: 500, color: '#4a5568' }}>
                  Email *
                </label>
                <input
                  type="email"
                  value={formFields.email}
                  onChange={(e) => handleFormInputChange('email', e.target.value)}
                  style={{
                    width: '100%',
                    padding: '12px',
                    border: '1px solid #cbd5e0',
                    borderRadius: '6px',
                    fontSize: '1rem'
                  }}
                  placeholder="Enter your email address"
                />
              </div>

              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: 500, color: '#4a5568' }}>
                  Phone/Mobile *
                </label>
                <input
                  type="tel"
                  value={formFields.phone}
                  onChange={(e) => handleFormInputChange('phone', e.target.value)}
                  style={{
                    width: '100%',
                    padding: '12px',
                    border: '1px solid #cbd5e0',
                    borderRadius: '6px',
                    fontSize: '1rem'
                  }}
                  placeholder="Enter your phone number"
                />
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <button
                  onClick={prevFormStep}
                  style={{
                    padding: '12px 25px',
                    background: '#718096',
                    color: 'white',
                    border: 'none',
                    borderRadius: '6px',
                    fontWeight: 600,
                    cursor: 'pointer',
                    fontSize: '1rem'
                  }}
                >
                  Previous
                </button>
                <button
                  onClick={nextFormStep}
                  disabled={!formFields.state || !formFields.email || !formFields.phone}
                  style={{
                    padding: '12px 25px',
                    background: formFields.state && formFields.email && formFields.phone ? '#2c5282' : '#cbd5e0',
                    color: 'white',
                    border: 'none',
                    borderRadius: '6px',
                    fontWeight: 600,
                    cursor: formFields.state && formFields.email && formFields.phone ? 'pointer' : 'not-allowed',
                    fontSize: '1rem'
                  }}
                >
                  Next
                </button>
              </div>
            </div>
          )}

          {formStep === 3 && (
            <div style={{
              background: 'white',
              padding: '40px',
              borderRadius: '12px',
              border: '1px solid #e2e8f0',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
            }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '25px', color: '#2d3748' }}>
                Package Selection
              </h3>
              
              <div style={{ marginBottom: '30px' }}>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: 500, color: '#4a5568' }}>
                  Choose Package *
                </label>
                <select
                  value={formFields.package}
                  onChange={(e) => handleFormInputChange('package', e.target.value)}
                  style={{
                    width: '100%',
                    padding: '12px',
                    border: '1px solid #cbd5e0',
                    borderRadius: '6px',
                    fontSize: '1rem'
                  }}
                >
                  <option value="">- Select -</option>
                  <option value="standard">Standard Package</option>
                  <option value="premium">Premium Package</option>
                  <option value="documentation">Documentation Package</option>
                </select>
              </div>

              <div style={{ 
                background: '#f7fafc', 
                padding: '20px', 
                borderRadius: '8px',
                border: '1px solid #e2e8f0',
                marginBottom: '30px'
              }}>
                <p style={{ margin: 0, color: '#4a5568', fontSize: '0.9rem', lineHeight: 1.5 }}>
                  We offer a separate package for those who need only the Gazette Documents prepared and submitted by us (excluding Affidavit & Newspaper). Please select the <strong>Documentation package</strong> from the dropdown above.
                </p>
              </div>

              <div style={{ 
                background: '#fff5f5', 
                padding: '15px', 
                borderRadius: '6px',
                border: '1px solid #fed7d7',
                marginBottom: '30px'
              }}>
                <p style={{ margin: 0, color: '#c53030', fontSize: '0.85rem' }}>
                  *By placing the request, you are accepting the terms & conditions.
                </p>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ color: '#718096', fontSize: '0.9rem' }}>
                  ← No payment items has been selected yet →
                </div>
                <div style={{ display: 'flex', gap: '15px' }}>
                  <button
                    onClick={prevFormStep}
                    style={{
                      padding: '12px 25px',
                      background: '#718096',
                      color: 'white',
                      border: 'none',
                      borderRadius: '6px',
                      fontWeight: 600,
                      cursor: 'pointer',
                      fontSize: '1rem'
                    }}
                  >
                    Previous
                  </button>
                  <button
                    onClick={() => alert('Form submitted successfully!')}
                    disabled={!formFields.package}
                    style={{
                      padding: '12px 25px',
                      background: formFields.package ? '#2c5282' : '#cbd5e0',
                      color: 'white',
                      border: 'none',
                      borderRadius: '6px',
                      fontWeight: 600,
                      cursor: formFields.package ? 'pointer' : 'not-allowed',
                      fontSize: '1rem'
                    }}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Why Choose Our Service Section */}
      <section style={{ padding: '70px 0', background: '#f7fafc' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 20px' }}>
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '15px', color: '#2d3748' }}>
              Why Choose Our Service?
            </h2>
            <p style={{ fontSize: '1.1rem', color: '#718096' }}>
              Trusted by thousands for legal name change services across India
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
            {[
              {
                icon: <Shield size={50} />,
                title: "100% Legal Compliance",
                description: "Full adherence to government regulations and legal requirements for name change process"
              },
              {
                icon: <Clock size={50} />,
                title: "Fast Processing",
                description: "Streamlined process with expert guidance reduces typical processing time significantly"
              },
              {
                icon: <Users size={50} />,
                title: "Expert Legal Team",
                description: "Experienced legal professionals guide you through every step of the name change process"
              },
              {
                icon: <Award size={50} />,
                title: "Nationwide Recognition",
                description: "Your name change will be legally valid and accepted across all states and government departments"
              }
            ].map((benefit, index) => (
              <div key={index} style={{
                background: 'white',
                padding: '35px 25px',
                borderRadius: '12px',
                textAlign: 'center',
                border: '1px solid #e2e8f0',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
              }}>
                <div style={{
                  color: '#2c5282',
                  marginBottom: '20px',
                  display: 'flex',
                  justifyContent: 'center'
                }}>
                  {benefit.icon}
                </div>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '15px', color: '#2d3748' }}>
                  {benefit.title}
                </h3>
                <p style={{ color: '#718096', lineHeight: 1.6, fontSize: '0.95rem' }}>
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );

  // Main Information Page (detailed, trust-building content)
  const InfoPage = () => (
    <div style={{ fontFamily: 'system-ui, sans-serif', lineHeight: 1.6, color: '#1a1a1a' }}>
      {/* Header Section */}
      <section style={{ 
        background: 'skyblue', 
        padding: '80px 0 60px',
        color: 'white'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '50px', alignItems: 'center' }}>
            <div>
              <h1 style={{ 
                fontSize: '3rem', 
                fontWeight: 800, 
                marginBottom: '20px',
                lineHeight: 1.1,
                color: '#1a1a1a'
              }}>
                Name Change Online in India
              </h1>
              <p style={{ fontSize: '1.1rem', color: '#4a5568', marginBottom: '30px', lineHeight: 1.7 }}>
                Complete legal name change process with official gazette publication. 
                Get your name change legally recognized across all government departments 
                and institutions in India with our expert assistance.
              </p>
              <div style={{ display: 'flex', gap: '15px', marginBottom: '30px' }}>
                <button 
                  onClick={() => setCurrentPage('consultation')}
                  style={{
                    padding: '15px 30px',
                    background: '#f6ad55',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    fontWeight: 600,
                    fontSize: '1rem',
                    cursor: 'pointer',
                    boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
                  }}
                >
                  Get Consultant →
                </button>
                <button 
                  onClick={() => navigateToPage && navigateToPage('home')}
                  style={{
                    padding: '15px 30px',
                    background: 'transparent',
                    color: '#1a1a1a',
                    border: '2px solid #1a1a1a',
                    borderRadius: '8px',
                    fontWeight: 600,
                    fontSize: '1rem',
                    cursor: 'pointer'
                  }}
                >
                  Back to Home
                </button>
              </div>
            </div>
            
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <div style={{
                width: '350px',
                height: '280px',
                background: 'rgba(255,255,255,0.2)',
                borderRadius: '15px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255,255,255,0.3)'
              }}>
                <FileText size={100} style={{ color: '#1a1a1a', opacity: 0.7 }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section style={{ padding: '70px 0', background: '#f7fafc' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '15px', color: '#2d3748' }}>
              HOW IT WORKS?
            </h2>
            <p style={{ fontSize: '1.1rem', color: '#718096', maxWidth: '600px', margin: '0 auto' }}>
              Our streamlined process ensures your name change is legally valid and recognized nationwide
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '50px', alignItems: 'center' }}>
            <div>
              <div style={{ 
                background: '#2c5282',
                color: 'white',
                padding: '20px',
                borderRadius: '15px',
                textAlign: 'center'
              }}>
                <h3 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '20px' }}>
                  Process Overview
                </h3>
                <p style={{ fontSize: '1rem', lineHeight: 1.6, opacity: 0.9 }}>
                  We'll guide you through each step of the name change process, from document preparation 
                  to final gazette publication. Our expert team ensures everything is handled professionally 
                  and in compliance with government requirements.
                </p>
              </div>
            </div>
            
            <div style={{
              background: 'white',
              padding: '40px',
              borderRadius: '15px',
              boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
              border: '2px dashed #cbd5e0'
            }}>
              <div style={{ textAlign: 'center', color: '#718096' }}>
                <FileText size={80} style={{ marginBottom: '20px', opacity: 0.5 }} />
                <p style={{ fontSize: '1.1rem', fontWeight: 600, margin: 0 }}>
                  Process Diagram will be added here
                </p>
                <p style={{ fontSize: '0.9rem', margin: '10px 0 0 0', opacity: 0.7 }}>
                  (You mentioned you'll add the diagram yourself)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Required Documents Section */}
      <section style={{ padding: '70px 0', background: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '15px', color: '#2d3748' }}>
              Required Documents
            </h2>
            <p style={{ fontSize: '1.1rem', color: '#718096' }}>
              Ensure you have all necessary documents ready for a smooth name change process
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '50px', alignItems: 'center' }}>
            <div>
              <h3 style={{ fontSize: '1.8rem', fontWeight: 600, marginBottom: '25px', color: '#2d3748' }}>
                Documents You'll Need
              </h3>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '12px' }}>
                {[
                  "Aadhaar Card (photocopy)",
                  "Passport size photographs (2 copies)",
                  "Birth certificate",
                  "Educational certificates",
                  "Address proof documents",
                  "Identity proof",
                  "Marriage certificate (if applicable)",
                  "Divorce decree (if name change after divorce)"
                ].map((doc, index) => (
                  <div key={index} style={{
                    display: 'flex',
                    alignItems: 'center',
                    padding: '15px 20px',
                    background: '#f7fafc',
                    borderRadius: '8px',
                    border: '1px solid #e2e8f0'
                  }}>
                    <FileText size={18} style={{ color: '#2c5282', marginRight: '12px' }} />
                    <span style={{ fontSize: '0.95rem', color: '#4a5568', fontWeight: 500 }}>{doc}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div style={{
              background: 'linear-gradient(135deg, #2c5282 0%, #2d3748 100%)',
              borderRadius: '15px',
              padding: '50px 40px',
              color: 'white',
              textAlign: 'center'
            }}>
              <Shield size={60} style={{ opacity: 0.8, marginBottom: '20px', margin: '0 auto 20px' }} />
              <h3 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '15px' }}>
                Document Verification
              </h3>
              <p style={{ opacity: 0.9, marginBottom: '25px', fontSize: '1rem', lineHeight: 1.6 }}>
                Our legal experts will verify all your documents to ensure compliance with government requirements 
                and prevent any delays in the name change process.
              </p>
              <div style={{ 
                background: 'rgba(255,255,255,0.1)', 
                padding: '15px', 
                borderRadius: '8px', 
                marginBottom: '25px',
                border: '1px solid rgba(255,255,255,0.2)'
              }}>
                <p style={{ fontSize: '0.9rem', opacity: 0.9, margin: 0 }}>
                  ✓ 100% Document Accuracy Guaranteed<br/>
                  ✓ Free Document Review Service<br/>
                  ✓ Expert Legal Guidance
                </p>
              </div>
              <button 
                onClick={handleVerificationClick}
                style={{
                  padding: '12px 25px',
                  background: '#f6ad55',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  fontSize: '0.95rem'
                }}
              >
                Verify My Documents
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Resources Section */}
      <section style={{ padding: '70px 0', background: '#f7fafc' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '50px' }}>
            <div style={{
              background: 'white',
              padding: '40px',
              borderRadius: '15px',
              boxShadow: '0 4px 20px rgba(0,0,0,0.08)'
            }}>
              <h3 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '20px', color: '#2d3748' }}>
                Steps Required for the Change of Name
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.95rem', color: '#4a5568' }}>
                {[
                  "Due to Marriage - Name change after marriage requires marriage certificate",
                  "Due to Religion - Religious conversion may require additional documentation", 
                  "Due to Numerology - Personal preference for numerological reasons",
                  "Add Father/Husband Name - Adding paternal or spousal name to existing name",
                  "Any Other Reason - Valid personal, professional, or family reasons"
                ].map((reason, index) => (
                  <li key={index} style={{ 
                    display: 'flex', 
                    alignItems: 'flex-start',
                    marginBottom: '12px',
                    paddingLeft: '0'
                  }}>
                    <span style={{ color: '#f6ad55', fontWeight: 'bold', marginRight: '10px' }}>•</span>
                    <span style={{ lineHeight: 1.5 }}>{reason}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div style={{
              background: 'white', 
              padding: '40px',
              borderRadius: '15px',
              boxShadow: '0 4px 20px rgba(0,0,0,0.08)'
            }}>
              <h3 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '20px', color: '#2d3748' }}>
                Online vs Offline Name Change
              </h3>
              <div style={{ fontSize: '0.95rem', color: '#4a5568', lineHeight: 1.6 }}>
                <p style={{ marginBottom: '15px' }}>
                  <strong style={{ color: '#2d3748' }}>Online Process:</strong> Fast, convenient, and paperless. 
                  Submit documents digitally and track progress online. Saves time and reduces physical visits.
                </p>
                <p style={{ marginBottom: '15px' }}>
                  <strong style={{ color: '#2d3748' }}>Offline Process:</strong> Traditional method requiring 
                  multiple office visits, physical document submission, and longer processing times.
                </p>
                <div style={{ 
                  background: '#f0fff4', 
                  padding: '15px', 
                  borderRadius: '8px',
                  border: '1px solid #9ae6b4',
                  marginTop: '20px'
                }}>
                  <p style={{ margin: 0, color: '#2f855a', fontWeight: 600 }}>
                    💡 Recommended: Choose online process for faster, more convenient name change
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact and CTA Section */}
      <section style={{ padding: '70px 0', background: '#2c5282', color: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '20px' }}>
            Ready to Start Your Name Change Process?
          </h2>
          <p style={{ fontSize: '1.2rem', opacity: 0.9, marginBottom: '40px', maxWidth: '600px', margin: '0 auto 40px' }}>
            Join thousands of satisfied customers who have successfully changed their names through our expert service
          </p>
          
          <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginBottom: '50px' }}>
            <button 
              onClick={() => setCurrentPage('consultation')}
              style={{
                padding: '18px 35px',
                background: '#f6ad55',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                fontWeight: 600,
                fontSize: '1.1rem',
                cursor: 'pointer',
                boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
              }}
            >
              Get Consultant Now →
            </button>
            <button style={{
              padding: '18px 35px',
              background: 'transparent',
              color: 'white',
              border: '2px solid rgba(255,255,255,0.3)',
              borderRadius: '8px',
              fontWeight: 600,
              fontSize: '1.1rem',
              cursor: 'pointer'
            }}>
              Download Checklist
            </button>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '30px', marginTop: '50px' }}>
            <div style={{ textAlign: 'center' }}>
              <Phone size={30} style={{ marginBottom: '10px', opacity: 0.8 }} />
              <p style={{ fontWeight: 600, marginBottom: '5px' }}>Call Us</p>
              <p style={{ opacity: 0.8 }}>+91 98765 43210</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <Mail size={30} style={{ marginBottom: '10px', opacity: 0.8 }} />
              <p style={{ fontWeight: 600, marginBottom: '5px' }}>Email Us</p>
              <p style={{ opacity: 0.8 }}>info@namechange.com</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <MapPin size={30} style={{ marginBottom: '10px', opacity: 0.8 }} />
              <p style={{ fontWeight: 600, marginBottom: '5px' }}>Visit Us</p>
              <p style={{ opacity: 0.8 }}>Delhi, Mumbai, Bangalore</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );

  // Render the appropriate page based on current state
  return currentPage === 'consultation' ? <ConsultationPage /> : <InfoPage />;
};

export default GazettePublication;