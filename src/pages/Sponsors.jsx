import { Link } from 'react-router-dom';
import jetbrainsLogo from '../assets/jetbrainslogo.jpg';
import janestreetLogo from '../assets/JaneStreetLogo.png';
import glaLogo from '../assets/glaLogo.png';

export default function Sponsors() {
  return (
    <div>
      <section className="page-header">
        <div className="container">
          <h1>Our Sponsors</h1>
          <p>Valued partners supporting the competitive programming community</p>
        </div>
      </section>

      <section className="section" style={{ backgroundColor: 'var(--background)' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          
          <div className="card-plain" style={{ marginBottom: '3rem', borderTop: '4px solid var(--accent)' }}>
            <h2 className="text-center" style={{ color: 'var(--primary-navy)', fontSize: '1.8rem', fontWeight: 800, marginBottom: '2.5rem', textTransform: 'uppercase', letterSpacing: '2px' }}>
              ICPC Global Sponsors
            </h2>
            
            <div className="sponsors-grid" style={{ marginBottom: 0 }}>
              <div className="sponsor-logo-box">
                <div className="sponsor-logo-placeholder">
                  <img src={jetbrainsLogo} alt="JetBrains Logo" />
                </div>
                <span className="sponsor-badge">Global Programming Tools Sponsor</span>
                <p className="text-muted text-center" style={{ fontSize: '0.8rem', marginTop: '0.5rem' }}>
                  JetBrains provides developers with tools that speed up production, freeing them to grow and create.
                </p>
              </div>

              <div className="sponsor-logo-box">
                <div className="sponsor-logo-placeholder">
                  <img src={janestreetLogo} alt="Jane Street Logo" />
                </div>
                <span className="sponsor-badge">Titanium Multi-Regional Sponsor</span>
                <p className="text-muted text-center" style={{ fontSize: '0.8rem', marginTop: '0.5rem' }}>
                  Jane Street is a quantitative trading firm with a unique focus on technology and collaborative problem-solving.
                </p>
              </div>
            </div>
          </div>

          <div className="card-plain" style={{ marginBottom: '3rem', borderTop: '4px solid var(--secondary-accent)' }}>
            <h2 className="text-center" style={{ color: 'var(--primary-navy)', fontSize: '1.8rem', fontWeight: 800, marginBottom: '2.5rem', textTransform: 'uppercase', letterSpacing: '2px' }}>
              Regional Sponsor
            </h2>
            
            <div className="sponsors-grid" style={{ marginBottom: 0 }}>
              <div className="sponsor-logo-box">
                <div className="sponsor-logo-placeholder">
                  <img src={glaLogo} alt="GLA University Logo" />
                </div>
                <span className="sponsor-badge">Host & Regional Sponsor</span>
                <p className="text-muted text-center" style={{ fontSize: '0.8rem', marginTop: '0.5rem' }}>
                  GLA University, Mathura is the proud host and regional sponsor of the ICPC Mathura Site, fostering academic and technical excellence.
                </p>
              </div>
            </div>
          </div>

          {/* Call to Sponsorship */}
          <div className="card-plain text-center" style={{ borderTop: '4px solid var(--accent)' }}>
            <h3 style={{ color: 'var(--primary-navy)', marginBottom: '0.75rem' }}>Become a Partner</h3>
            <p className="text-muted" style={{ marginBottom: '1.5rem', fontSize: '0.95rem', maxWidth: '600px', marginInline: 'auto' }}>
              Partner with the ICPC Mathura Regional Contest to connect with hundreds of top engineering and computer science students across the country.
            </p>
            <Link to="/contact" className="btn btn-primary">
              Contact Sponsorship Team
            </Link>
          </div>

        </div>
      </section>
    </div>
  );
}
