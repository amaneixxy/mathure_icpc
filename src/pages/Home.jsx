import { useState } from 'react';
import { Link } from 'react-router-dom';
import jetbrainsLogo from '../assets/jetbrainslogo.jpg';
import janestreetLogo from '../assets/JaneStreetLogo.png';
import mathuraBanner from '../assets/MathuraSiteBanner.jpg';
import glaLogo from '../assets/image.png';

export default function Home() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div>
      {/* 1. Header Banner Area */}
      <section style={{ backgroundColor: 'var(--primary-dark)', padding: '2.5rem 0', borderBottom: '2px solid var(--accent)' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'center' }}>
          <div className="banner-wrapper" style={{ margin: 0, padding: '0.75rem', width: '100%', maxWidth: '850px' }}>
            <img
              src={mathuraBanner}
              alt="ICPC Mathura Site Banner"
              className="banner-img"
              style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '4px' }}
            />
          </div>
        </div>
      </section>

      {/* 2. Main Layout Grid Section */}
      <section className="section" style={{ backgroundColor: 'var(--background)', padding: '3rem 0' }}>
        <div className="container">
          <div className="home-grid">

            {/* Left Column: Vertical Sidebar Updates Widget */}
            <aside className="sidebar-updates">
              <div className="sidebar-header">
                Important Updates
              </div>

              <div className="sidebar-content">
                {/* Update Card 1 */}
                <div className="update-card">
                  <div className="update-card-title">
                    <span className="badge-new">NEW!</span>
                    Report from the Regional Contest Director
                  </div>
                  <div className="update-card-subtitle">
                    ICPC Mathura Site 2026
                  </div>
                </div>

                {/* Update Card 2 */}
                <div className="update-card">
                  <div className="update-card-title">
                    <span className="badge-new">NEW!</span>
                    Preliminary Online Contest
                  </div>
                  <div className="update-card-subtitle">
                    3rd Oct 2026
                  </div>
                </div>

                {/* Update Card 3 */}
                <div className="update-card">
                  <div className="update-card-title">
                    Registration Opens Soon
                  </div>
                  <div className="update-card-subtitle">
                    Keep checking the registration portal
                  </div>
                </div>



                {/* Link Card: Visit ICPC Asia West Continent Page */}
                <a
                  href="https://wc.indiaicpc.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="championship-card"
                  style={{ marginTop: '0.5rem', textDecoration: 'none' }}
                >
                  <div className="championship-card-title">Championship Portal</div>
                  <div className="championship-card-desc">
                    Visit ICPC Asia West Continent Championship Page &rarr;
                  </div>
                </a>
              </div>
            </aside>

            {/* Right Column: Main Content */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>

              {/* Welcome Card */}
              <div className="card-plain" style={{ borderTop: '4px solid var(--accent)', padding: '2.5rem' }}>
                <h1 style={{ color: 'var(--primary-navy)', fontSize: '2.2rem', marginBottom: '0.5rem' }}>
                  Welcome to ICPC Mathura Site
                </h1>
                {/* <p className="font-mono" style={{ color: 'var(--accent-hover)', fontWeight: 700, fontSize: '1.1rem', marginBottom: '1.5rem' }}>
                  Hosted by GLA University, Mathura
                </p> */}

                <div className="notes-box" style={{ borderLeftColor: 'var(--accent)', marginBottom: '1.75rem', animation: 'blink 1.2s infinite' }}>
                  <span style={{ fontSize: '1.5rem' }}>📅</span>
                  <div>
                    <strong>Onsite Regional Round:</strong> The 2-day championship is scheduled for <strong>27–28 December 2026</strong>.
                  </div>
                </div>

                <div style={{ color: 'var(--text)', fontSize: '0.975rem', lineHeight: 1.7, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <p>
                    The <strong>International Collegiate Programming Contest (ICPC)</strong> is the premier global competitive programming contest conducted for university students. Over the past decades, the ICPC has grown to become the largest and most prestigious computer science competition in the world, fostering creativity, teamwork, and innovation in building new software programs.
                  </p>
                  <p>
                    Teams of three students represent their university to solve complex algorithmic and mathematical problems. The contest tests their programming capabilities, logical reasoning, and mental endurance under a strict 5-hour time constraint.
                  </p>
                  <p>
                    Hosted officially by the <strong>Department of Computer Engineering and Applications, GLA University</strong>, the ICPC Mathura Site brings together the finest undergraduate programmers from across India. The winners of this regional contest will advance directly to the ICPC Asia West Continent Championship and ultimately compete on the global stage.
                  </p>
                </div>

                <div style={{ display: 'flex', gap: '1rem', marginTop: '2.5rem', flexWrap: 'wrap' }}>
                  <Link to="/registration" className="btn btn-primary" style={{ padding: '0.75rem 2rem' }}>
                    Register Team &rarr;
                  </Link>
                  <Link
                    to="/dates"
                    className="btn btn-outline-white"
                    style={{ border: '2px solid var(--secondary-accent)', color: 'var(--secondary-accent)', padding: '0.75rem 2rem' }}
                  >
                    View Schedule Dates
                  </Link>
                </div>
              </div>

              {/* Setting Up Teams Quick Info */}
              <div className="card-plain" style={{ borderTop: '4px solid var(--secondary-accent)', padding: '2rem' }}>
                <h2 style={{ color: 'var(--primary-navy)', fontSize: '1.4rem', marginBottom: '1.25rem' }}>
                  Quick Requirements
                </h2>
                <div className="grid grid-cols-2" style={{ gap: '1.5rem' }}>
                  <div>
                    <h3 style={{ fontSize: '1rem', color: 'var(--primary-navy)', marginBottom: '0.5rem' }}>Team Structure</h3>
                    <ul style={{ paddingLeft: '1.25rem', fontSize: '0.9rem', color: 'var(--muted-text)', display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                      <li>Maximum 3 contestants per team</li>
                      <li>1 coach from the same institution</li>
                      <li>Same institution affiliation requirement</li>
                    </ul>
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1rem', color: 'var(--primary-navy)', marginBottom: '0.5rem' }}>Contest Rules</h3>
                    <ul style={{ paddingLeft: '1.25rem', fontSize: '0.9rem', color: 'var(--muted-text)', display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                      <li>Contest Duration: <strong>5 Hours</strong></li>
                      <li>Supported languages: <strong>C, C++, Java, Python</strong></li>
                    </ul>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 3. IMPORTANT LINKS SECTION */}
      <section className="section" style={{ backgroundColor: '#ffffff', padding: '3.5rem 0', borderTop: '1px solid rgba(0,0,0,0.06)' }} id="important-links">
        <div className="container">
          <div className="section-title-wrap">
            <h2 className="section-title">Important Links</h2>
          </div>

          <div className="grid grid-cols-4" style={{ gap: '1.25rem', marginTop: '2rem' }}>
            <a href="https://icpc.global" target="_blank" rel="noopener noreferrer" className="card-plain" style={{ padding: '1.5rem', textAlign: 'center', borderTop: '3px solid var(--accent)' }}>
              <div style={{ fontSize: '1.75rem', marginBottom: '0.5rem' }}>🌐</div>
              <h3 style={{ fontSize: '1.05rem', color: 'var(--primary-navy)', marginBottom: '0.5rem' }}>ICPC Global Registration</h3>
              <p style={{ fontSize: '0.8rem', color: 'var(--muted-text)' }}>Official central registration platform.</p>
            </a>

            <a href="https://acm-icpc.asia/" target="_blank" rel="noopener noreferrer" className="card-plain" style={{ padding: '1.5rem', textAlign: 'center', borderTop: '3px solid var(--secondary-accent)' }}>
              <div style={{ fontSize: '1.75rem', marginBottom: '0.5rem' }}>🏆</div>
              <h3 style={{ fontSize: '1.05rem', color: 'var(--primary-navy)', marginBottom: '0.5rem' }}>Asia West Championship</h3>
              <p style={{ fontSize: '0.8rem', color: 'var(--muted-text)' }}>Continent Championship information.</p>
            </a>

            <a href="https://icpc.global" target="_blank" rel="noopener noreferrer" className="card-plain" style={{ padding: '1.5rem', textAlign: 'center', borderTop: '3px solid var(--primary-navy)' }}>
              <div style={{ fontSize: '1.75rem', marginBottom: '0.5rem' }}>💻</div>
              <h3 style={{ fontSize: '1.05rem', color: 'var(--primary-navy)', marginBottom: '0.5rem' }}>Practice Portal</h3>
              <p style={{ fontSize: '0.8rem', color: 'var(--muted-text)' }}>ICPC training grounds & mock rounds.</p>
            </a>

            <Link to="/archive" className="card-plain" style={{ padding: '1.5rem', textAlign: 'center', borderTop: '3px solid var(--accent-hover)' }}>
              <div style={{ fontSize: '1.75rem', marginBottom: '0.5rem' }}>📁</div>
              <h3 style={{ fontSize: '1.05rem', color: 'var(--primary-navy)', marginBottom: '0.5rem' }}>Previous Problem Sets</h3>
              <p style={{ fontSize: '0.8rem', color: 'var(--muted-text)' }}>Download past contest PDF archives.</p>
            </Link>

            {/* Row 2 */}
            <Link to="/gallery" className="card-plain" style={{ padding: '1.5rem', textAlign: 'center', borderTop: '3px solid var(--accent-hover)' }}>
              <div style={{ fontSize: '1.75rem', marginBottom: '0.5rem' }}>📸</div>
              <h3 style={{ fontSize: '1.05rem', color: 'var(--primary-navy)', marginBottom: '0.5rem' }}>Photo Gallery</h3>
              <p style={{ fontSize: '0.8rem', color: 'var(--muted-text)' }}>Memories from previous onsite rounds.</p>
            </Link>

            <Link  className="card-plain" style={{ padding: '1.5rem', textAlign: 'center', borderTop: '3px solid var(--primary-navy)' }}>
              <div style={{ fontSize: '1.75rem', marginBottom: '0.5rem' }}>📅</div>
              <h3 style={{ fontSize: '1.05rem', color: 'var(--primary-navy)', marginBottom: '0.5rem' }}>Program Schedule</h3>
              <p style={{ fontSize: '0.8rem', color: 'var(--muted-text)' }}>Full schedule of contest events.</p>
            </Link>

            <Link to="/how-to-reach" className="card-plain" style={{ padding: '1.5rem', textAlign: 'center', borderTop: '3px solid var(--secondary-accent)' }}>
              <div style={{ fontSize: '1.75rem', marginBottom: '0.5rem' }}>✈️</div>
              <h3 style={{ fontSize: '1.05rem', color: 'var(--primary-navy)', marginBottom: '0.5rem' }}>How to Reach</h3>
              <p style={{ fontSize: '0.8rem', color: 'var(--muted-text)' }}>Travel directions & campus map guide.</p>
            </Link>

            <Link to="/onsite-teams" className="card-plain" style={{ padding: '1.5rem', textAlign: 'center', borderTop: '3px solid var(--accent)' }}>
              <div style={{ fontSize: '1.75rem', marginBottom: '0.5rem' }}>👥</div>
              <h3 style={{ fontSize: '1.05rem', color: 'var(--primary-navy)', marginBottom: '0.5rem' }}>Onsite Teams</h3>
              <p style={{ fontSize: '0.8rem', color: 'var(--muted-text)' }}>Lookup list of selected onsite teams.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* 4. SPONSORS SECTION */}
      <section className="section" style={{ backgroundColor: 'var(--background)', borderTop: '1px solid rgba(0,0,0,0.06)' }} id="sponsors">
        <div className="container">
          <div className="section-title-wrap">
            <h2 className="section-title">Our Sponsors</h2>
          </div>

          {/* Global Sponsors */}
          <div style={{ marginTop: '2.5rem', marginBottom: '3rem' }}>
            <h3 className="text-center" style={{ color: 'var(--primary-navy)', fontSize: '1.65rem', fontWeight: 700, marginBottom: '1.75rem', textTransform: 'uppercase', letterSpacing: '2px' }}>
              Global Sponsors
            </h3>
            <div className="sponsors-grid">
              <div className="sponsor-logo-box">
                <div className="sponsor-logo-placeholder">
                  <img src={jetbrainsLogo} alt="JetBrains Logo" />
                </div>
                <span className="sponsor-badge">Global Programming Tools Sponsor</span>
              </div>

              <div className="sponsor-logo-box">
                <div className="sponsor-logo-placeholder">
                  <img src={janestreetLogo} alt="Jane Street Logo" />
                </div>
                <span className="sponsor-badge">Titanium Multi-Regional Sponsor</span>
              </div>
            </div>
          </div>

          {/* Regional Sponsors */}
          <div style={{ marginBottom: '2.5rem' }}>
            <h3 className="text-center" style={{ color: 'var(--primary-navy)', fontSize: '1.65rem', fontWeight: 700, marginBottom: '1.75rem', textTransform: 'uppercase', letterSpacing: '2px' }}>
              Regional Sponsor
            </h3>
            <div className="sponsors-grid">
              <div className="sponsor-logo-box">
                <div className="sponsor-logo-placeholder">
                  <img src={glaLogo} alt="GLA University Logo" />
                </div>
                <span className="sponsor-badge">Host & Regional Sponsor</span>
              </div>
            </div>
          </div>

          <div className="text-center text-muted" style={{ fontSize: '0.95rem', marginTop: '1.5rem' }}>
            Interested in sponsoring the ICPC Mathura?{' '}
            <Link to="/contact" style={{ color: 'var(--secondary-accent)', fontWeight: 600 }}>
              Contact us
            </Link>
            .
          </div>
        </div>
      </section>
    </div>
  );
}
