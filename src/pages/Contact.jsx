import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    institution: '',
    subject: 'Registration Query',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.institution.trim()) newErrors.institution = 'Institution is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error for field when typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Simulate form submission success
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        institution: '',
        subject: 'Registration Query',
        message: ''
      });
    }
  };

  return (
    <div>
      {/* 1. Page Header */}
      <section className="page-header">
        <div className="container">
          <h1>Contact Us</h1>
          <p>ICPC Mathura — GLA University</p>
        </div>
      </section>

      {/* Main Section */}
      <section className="section" style={{ backgroundColor: 'var(--background)' }}>
        <div className="container" style={{ maxWidth: '1000px' }}>
          
          {/* Two-Column Grid */}
          <div className="grid grid-cols-2" style={{ gap: '3rem', alignItems: 'start', marginBottom: '3.5rem' }}>
            
            {/* Left Column: Contact Info */}
            <div className="card-plain" style={{ borderTop: '4px solid var(--accent)' }}>
              <h2 style={{ color: 'var(--primary-navy)', fontSize: '1.5rem', fontWeight: 700, marginBottom: '1.5rem' }}>
                Contact Information
              </h2>
              
              <div className="contact-info-list">
                {/* RCD Contact */}
                <div className="contact-info-item">
                  <span className="contact-info-icon">👤</span>
                  <div className="contact-info-text">
                    <strong>Regional Contest Director (RCD)</strong>
                    <p style={{ color: 'var(--text)', fontWeight: 700, fontSize: '0.95rem', margin: '0.2rem 0' }}>Dr. Rohit Agarwal</p>
                    <p style={{ fontSize: '0.85rem', color: 'var(--muted-text)', lineHeight: 1.4 }}>
                      Head of the Department,<br />
                      Department of Computer Engineering and Applications,<br />
                      GLA University, Mathura- 281406, Uttar Pradesh, India
                    </p>
                  </div>
                </div>

                {/* Local Email */}
                <div className="contact-info-item">
                  <span className="contact-info-icon">✉️</span>
                  <div className="contact-info-text">
                    <strong>Local Site Email Support</strong>
                    <p><a href="mailto:icpc@gla.ac.in" style={{ color: 'var(--accent-hover)', fontWeight: 600 }}>icpc@gla.ac.in</a></p>
                  </div>
                </div>

                {/* Global Email */}
                <div className="contact-info-item">
                  <span className="contact-info-icon">🌐</span>
                  <div className="contact-info-text">
                    <strong>ICPC Global Platform Support</strong>
                    <p><a href="mailto:support@icpc.global" style={{ color: 'var(--secondary-accent)' }}>support@icpc.global</a></p>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div style={{ marginTop: '2.5rem', borderTop: '1px solid rgba(0,0,0,0.06)', paddingTop: '1.5rem' }}>
                <strong style={{ display: 'block', fontSize: '0.95rem', color: 'var(--primary-navy)', marginBottom: '0.75rem' }}>
                  Follow Our Channels
                </strong>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <a href="#" className="btn btn-outline-white" style={{ border: '1px solid rgba(0,0,0,0.1)', color: 'var(--text)', padding: '0.5rem 1rem', fontSize: '0.8rem' }}>
                    Twitter X
                  </a>
                  <a href="#" className="btn btn-outline-white" style={{ border: '1px solid rgba(0,0,0,0.1)', color: 'var(--text)', padding: '0.5rem 1rem', fontSize: '0.8rem' }}>
                    LinkedIn
                  </a>
                  <a href="#" className="btn btn-outline-white" style={{ border: '1px solid rgba(0,0,0,0.1)', color: 'var(--text)', padding: '0.5rem 1rem', fontSize: '0.8rem' }}>
                    Instagram
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="card-plain" style={{ borderTop: '4px solid var(--secondary-accent)' }}>
              <h2 style={{ color: 'var(--primary-navy)', fontSize: '1.5rem', fontWeight: 700, marginBottom: '2rem' }}>
                Send a Message
              </h2>

              {submitted ? (
                <div 
                  className="text-center" 
                  style={{ 
                    padding: '2.5rem 1.5rem', 
                    backgroundColor: 'rgba(39, 201, 63, 0.05)', 
                    border: '1.5px solid #27c93f', 
                    borderRadius: 'var(--border-radius)' 
                  }}
                >
                  <span style={{ fontSize: '3rem', display: 'block', marginBottom: '1rem' }}>✅</span>
                  <h3 style={{ color: '#27c93f', marginBottom: '0.5rem' }}>Message Sent!</h3>
                  <p className="text-muted" style={{ fontSize: '0.95rem', lineHeight: 1.5 }}>
                    Thank you! We have received your query and will get back to you within 48 hours.
                  </p>
                  <button 
                    className="btn btn-primary" 
                    style={{ marginTop: '1.5rem', padding: '0.5rem 1.5rem', fontSize: '0.85rem' }}
                    onClick={() => setSubmitted(false)}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  {/* Name */}
                  <div className="form-group">
                    <label className="form-label" htmlFor="name">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="form-input"
                      value={formData.name}
                      onChange={handleChange}
                    />
                    {errors.name && <span style={{ color: '#ff5f56', fontSize: '0.75rem', fontWeight: 600 }}>{errors.name}</span>}
                  </div>

                  {/* Email */}
                  <div className="form-group">
                    <label className="form-label" htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="form-input"
                      value={formData.email}
                      onChange={handleChange}
                    />
                    {errors.email && <span style={{ color: '#ff5f56', fontSize: '0.75rem', fontWeight: 600 }}>{errors.email}</span>}
                  </div>

                  {/* Institution */}
                  <div className="form-group">
                    <label className="form-label" htmlFor="institution">Institution / University *</label>
                    <input
                      type="text"
                      id="institution"
                      name="institution"
                      className="form-input"
                      value={formData.institution}
                      onChange={handleChange}
                    />
                    {errors.institution && <span style={{ color: '#ff5f56', fontSize: '0.75rem', fontWeight: 600 }}>{errors.institution}</span>}
                  </div>

                  {/* Subject Dropdown */}
                  <div className="form-group">
                    <label className="form-label" htmlFor="subject">Subject Query *</label>
                    <select
                      id="subject"
                      name="subject"
                      className="form-select"
                      value={formData.subject}
                      onChange={handleChange}
                    >
                      <option value="Registration Query">Registration Query</option>
                      <option value="Technical Issue">Technical Issue</option>
                      <option value="Sponsorship">Sponsorship Query</option>
                      <option value="Other">Other Query</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div className="form-group">
                    <label className="form-label" htmlFor="message">Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      className="form-textarea"
                      value={formData.message}
                      onChange={handleChange}
                    ></textarea>
                    {errors.message && <span style={{ color: '#ff5f56', fontSize: '0.75rem', fontWeight: 600 }}>{errors.message}</span>}
                  </div>

                  {/* Submit button */}
                  <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '1rem', display: 'flex', gap: '0.5rem' }}>
                    Send Message &rarr;
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* 3. Embedded Map Card */}
          <h2 className="section-title" style={{ display: 'block', textAlign: 'center', marginBottom: '2rem' }}>
            Find Us on Campus
          </h2>
          <div style={{ borderRadius: 'var(--border-radius)', overflow: 'hidden', boxShadow: 'var(--shadow-md)', border: '1px solid rgba(0,0,0,0.06)' }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3549.4447479707166!2d77.59253457544865!3d27.611116276239166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39736ce114c00001%3A0xc395f191b79a5cc6!2sGLA%20University!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="GLA University Mathura Map location"
            ></iframe>
          </div>

        </div>
      </section>
    </div>
  );
}
