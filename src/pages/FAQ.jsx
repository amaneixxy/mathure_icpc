import { useState } from 'react';
import { Link } from 'react-router-dom';
import { faqs } from '../data/faqs';

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <div>
      {/* 1. Page Header */}
      <section className="page-header">
        <div className="container">
          <h1>Frequently Asked Questions</h1>
          <p>ICPC Mathura — GLA University</p>
        </div>
      </section>

      {/* Main Section */}
      <section className="section" style={{ backgroundColor: 'var(--background)' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          
          <h2 className="section-title" style={{ display: 'block', textAlign: 'center', marginBottom: '2.5rem' }}>
            General Inquiries
          </h2>

          {/* 2. FAQ Accordion Grid */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '4rem' }}>
            {faqs.map((faq, index) => {
              const isOpen = activeIndex === index;
              return (
                <div key={index} className="accordion" style={{ margin: 0 }}>
                  <div 
                    className={`accordion-header ${isOpen ? 'open' : ''}`}
                    onClick={() => toggleFAQ(index)}
                    style={{ backgroundColor: isOpen ? 'rgba(255, 181, 102, 0.05)' : '#ffffff' }}
                  >
                    <span style={{ fontSize: '1.025rem', fontWeight: 700 }}>{faq.q}</span>
                    <span className="accordion-icon" style={{ transform: isOpen ? 'rotate(45deg)' : 'rotate(0)' }}>
                      +
                    </span>
                  </div>
                  
                  <div 
                    className={`accordion-content ${isOpen ? 'open' : ''}`}
                    style={{ 
                      maxHeight: isOpen ? '300px' : '0', 
                      transition: 'max-height var(--transition-normal) ease-in-out' 
                    }}
                  >
                    <div className="accordion-inner" style={{ backgroundColor: '#fafbfd' }}>
                      <p style={{ color: 'var(--muted-text)', fontSize: '0.975rem', lineHeight: 1.6 }}>
                        {faq.a}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* 3. Contact Prompt Card */}
          <div className="card-plain text-center">
            <h3 style={{ color: 'var(--primary-navy)', marginBottom: '0.75rem' }}>Still Have Questions?</h3>
            <p className="text-muted" style={{ marginBottom: '1.5rem', fontSize: '0.95rem' }}>
              If you couldn't find the answers you were looking for, please feel free to reach out to our team.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
              <a href="mailto:icpc@gla.ac.in" className="btn btn-primary">
                Email Support
              </a>
              <Link to="/contact" className="btn btn-outline-white" style={{ border: '2px solid var(--secondary-accent)', color: 'var(--secondary-accent)' }}>
                Visit Contact Page
              </Link>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
