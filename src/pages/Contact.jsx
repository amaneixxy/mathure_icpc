export default function Contact() {
  return (
    <div>
      {/* 1. Page Header */}
      <section className="page-header">
        <div className="container">
          <h1>Contact Us</h1>
          <p>ICPC Mathura — GLA University, Mathura</p>
        </div>
      </section>

      {/* Main Section */}
      <section className="section" style={{ backgroundColor: 'var(--background)' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          
          {/* Single Column Contact Info Card */}
          <div className="card-plain" style={{ borderTop: '4px solid var(--accent)', marginBottom: '3.5rem', padding: '2.5rem' }}>
            <h2 style={{ color: 'var(--primary-navy)', fontSize: '1.65rem', fontWeight: 700, marginBottom: '2rem' }}>
              Contact Information
            </h2>
            
            <div className="contact-info-list" style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
              {/* RCD Contact */}
              <div className="contact-info-item">
                <span className="contact-info-icon" style={{ fontSize: '1.75rem' }}>👤</span>
                <div className="contact-info-text">
                  <strong>Regional Contest Director (RCD)</strong>
                  <p style={{ color: 'var(--text)', fontWeight: 700, fontSize: '1.05rem', margin: '0.25rem 0' }}>Prof. Anup Kumar Gupta</p>
                  <p style={{ fontSize: '0.9rem', color: 'var(--muted-text)', lineHeight: 1.5 }}>
                    Vice Chancellor, GLA University, Mathura
                  </p>
                </div>
              </div>

              {/* Deputy RCD Contact */}
              <div className="contact-info-item">
                <span className="contact-info-icon" style={{ fontSize: '1.75rem' }}>👤</span>
                <div className="contact-info-text">
                  <strong>Deputy Regional Contest Director</strong>
                  <p style={{ color: 'var(--text)', fontWeight: 700, fontSize: '1.05rem', margin: '0.25rem 0' }}>Prof. Rohit Agarwal</p>
                  <p style={{ fontSize: '0.9rem', color: 'var(--muted-text)', lineHeight: 1.5 }}>
                    Department of Computer Engineering and Applications,<br />
                    GLA University, Mathura- 281406, Uttar Pradesh, India
                  </p>
                </div>
              </div>

              {/* Local Email */}
              <div className="contact-info-item">
                <span className="contact-info-icon" style={{ fontSize: '1.75rem' }}>✉️</span>
                <div className="contact-info-text">
                  <strong>Local Site Email Support</strong>
                  <p><a href="mailto:icpc@gla.ac.in" style={{ color: 'var(--accent-hover)', fontWeight: 600, fontSize: '1rem' }}>icpc@gla.ac.in</a></p>
                </div>
              </div>

              {/* Global Email */}
              <div className="contact-info-item">
                <span className="contact-info-icon" style={{ fontSize: '1.75rem' }}>🌐</span>
                <div className="contact-info-text">
                  <strong>ICPC Global Platform Support</strong>
                  <p><a href="mailto:support@icpc.global" style={{ color: 'var(--secondary-accent)', fontSize: '1rem' }}>support@icpc.global</a></p>
                </div>
              </div>
            </div>

            {/* Social Channels */}
            <div style={{ marginTop: '2.5rem', borderTop: '1px solid rgba(0,0,0,0.06)', paddingTop: '1.75rem' }}>
              <strong style={{ display: 'block', fontSize: '1rem', color: 'var(--primary-navy)', marginBottom: '1rem' }}>
                Follow Our Channels
              </strong>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <a href="#" className="btn btn-outline-white" style={{ border: '1px solid rgba(0,0,0,0.1)', color: 'var(--text)', padding: '0.5rem 1.25rem', fontSize: '0.85rem' }}>
                  Twitter X
                </a>
                <a href="#" className="btn btn-outline-white" style={{ border: '1px solid rgba(0,0,0,0.1)', color: 'var(--text)', padding: '0.5rem 1.25rem', fontSize: '0.85rem' }}>
                  LinkedIn
                </a>
                <a href="#" className="btn btn-outline-white" style={{ border: '1px solid rgba(0,0,0,0.1)', color: 'var(--text)', padding: '0.5rem 1.25rem', fontSize: '0.85rem' }}>
                  Instagram
                </a>
              </div>
            </div>
          </div>

          {/* Embedded Map Section */}
          <h2 className="section-title" style={{ display: 'block', textAlign: 'center', marginBottom: '2rem' }}>
            Find Us on Campus
          </h2>
          <div style={{ borderRadius: 'var(--border-radius)', overflow: 'hidden', boxShadow: 'var(--shadow-md)', border: '1px solid rgba(0,0,0,0.06)' }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3549.4447479707166!2d77.59253457544865!3d27.611116276239166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39736ce114c00001%3A0xc395f191b79a5cc6!2sGLA%20University!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="320"
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
