import { useState } from 'react';
import { Link } from 'react-router-dom';
import jetbrainsLogo from '../assets/jetbrainslogo.jpg';
import janestreetLogo from '../assets/JaneStreetLogo.png';
import mathuraBanner from '../assets/MathuraSiteBanner.jpg';
import glaLogo from '../assets/GlaNewLogo.jpg';
import paymentQr from '../assets/payment qr.png';

const REGISTRATION_OPEN = true;

export default function Home() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [showPaymentModal, setShowPaymentModal] = useState(false);

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
                    Registration Opened
                  </div>
                  {/* <div className="update-card-subtitle">
                    6th Aug 2026
                  </div> */}
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

                {/* Update Card 3: Contest Date */}
                <div className="update-card">
                  <div className="update-card-title">
                    <span className="badge-new">NEW!</span>
                    Contest Date
                  </div>
                  <div className="update-card-subtitle">
                    27–28 Dec 2026
                  </div>
                </div>

                {/* Update Card 4 */}
                <div className="update-card">
                  <div className="update-card-title">
                    <span className="badge-new">NEW!</span>
                    Report from the Regional Contest Director
                  </div>
                  <div className="update-card-subtitle">
                    ICPC Mathura Site 2026
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
                      <li>Maximum Contest Duration: <strong>5 Hours</strong></li>
                      <li>Supported languages: <strong>C, C++, Java, Python</strong></li>
                    </ul>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Registration Section */}
      <section className="registration-overview-section">
        <div className="container" style={{ maxWidth: '1000px' }}>
          <div style={{ marginBottom: '2rem' }}>
            <span className="registration-badge">REGISTRATION</span>
            <h2 className="registration-main-title">Registration and fee payment are open.</h2>
          </div>

          {/* Banner */}
          {/* <div className="payment-notice-banner">
            <div style={{ flex: '1 1 600px' }}>
              <h4 className="payment-notice-title">Do not wait for the payment window</h4>
              <p className="payment-notice-text">
                Start your team registration now. Fee payment information will be available on this website by <strong>15 August 2026</strong>. Teams that complete registration by then will also receive the payment information by email from the ICPC Mathura Site team.
              </p>
            </div>
            <div>
              <Link to="https://icpc.global/regionals/finder/mathuraprelim-2027" className="btn-start-reg">
                Start registration
              </Link>
            </div>
          </div> */}
          <div style={{ marginTop: '3rem' }}>
            <h2 className="section-title" style={{ display: 'block', textAlign: 'center', marginBottom: '2rem' }}>
              ICPC Mathura 2026 Schedule
            </h2>
            <div className="important-dates-grid">
              {[
                { label: 'Registration Starts', date: '06 August 2026', subtext: '', color: 'blue' },
                { label: 'Registration Closes', date: '20 September 2026', subtext: '05:00 PM IST', color: 'blue' },
                { label: 'Fee Payment Starts', date: '15 August 2026', subtext: '', color: 'yellow' },
                { label: 'Fee Payment Closes', date: '21 September 2026', subtext: '05:00 PM IST', color: 'yellow' },
                { label: 'ICPC India Preliminary Online Contest', date: '03 October 2026', subtext: 'Contest time will be announced later', color: 'red' },
                { label: 'Mathura Multi-Site Onsite Contest', date: '27–28 December 2026', subtext: 'GLA University, Mathura', color: 'red' },
              ].map((item) => (
                <div key={item.label} className={`important-dates-card ${item.color}`}>
                  <div>
                    <h4>{item.label}</h4>
                    <div className="important-dates-date">{item.date}</div>
                    {item.subtext && <p className="important-dates-desc">{item.subtext}</p>}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Registration Overview Block */}
          <div style={{ marginTop: '4rem', borderTop: '1px solid rgba(0,0,0,0.06)', paddingTop: '3rem' }}>
            {/* <div style={{ marginBottom: '2rem' }}>
              <span className="registration-badge">REGISTRATION</span>
              <h2 className="registration-main-title">Registration and fee payment are open.</h2>
            </div> */}

            <div style={{ margin: '3rem 0' }}>
              {REGISTRATION_OPEN ? (
                <div className="card-plain text-center" style={{ borderTop: '4px solid #e3a220ff' }}>
                  <h3 style={{ color: 'var(--primary-navy)', marginBottom: '1rem' }}>Ready to Register Your Team?</h3>
                  <p className="text-muted" style={{ marginBottom: '1.5rem', maxWidth: '600px', marginInline: 'auto' }}>
                    Click below to be redirected to the official ICPC registration portal. Make sure you have your team members&apos; details and coach information ready.
                  </p>
                  <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}>
                    <a
                      href="https://icpc.global/regionals/finder/mathuraprelim-2027"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                      style={{ display: 'inline-flex', padding: '0.85rem 2rem' }}
                    >
                      Register Now &rarr;
                    </a>
                    <button
                      type="button"
                      onClick={() => setShowPaymentModal(true)}
                      className="btn btn-secondary"
                      style={{
                        display: 'inline-flex',
                        padding: '0.85rem 2rem',
                        borderColor: 'var(--primary-navy)',
                        color: 'var(--primary-navy)',
                        cursor: 'pointer'
                      }}
                    >
                      Fee Payment After Registration
                    </button>
                  </div>
                  <p className="text-muted" style={{ fontSize: '0.8rem', marginTop: '1rem' }}>
                    * You will be redirected to the official ICPC registration portal.
                  </p>
                </div>
              ) : (
                <div className="card-plain text-center" style={{ borderTop: '4px solid #ff5f56', opacity: 0.85 }}>
                  <h3 style={{ color: 'var(--muted-text)', marginBottom: '1rem' }}>Registration is Closed</h3>
                  <p className="text-muted" style={{ marginBottom: '0.5rem', maxWidth: '600px', marginInline: 'auto' }}>
                    Registration for the ICPC Mathura 2026 Contest is now closed. Stay tuned for future announcements and next year&apos;s cycle.
                  </p>
                </div>
              )}
            </div>

            {/* Fees Grid */}
            <div className="grid grid-cols-2" style={{ gap: '1.5rem', marginBottom: '2.5rem' }}>
              <div className="fee-card">
                <h3 className="fee-amount">Rs 1,500</h3>
                <p className="fee-desc">per team &bull; Preliminary Online Contest</p>
              </div>
              <div className="fee-card">
                <h3 className="fee-amount">Rs 4,500</h3>
                <p className="fee-desc">per qualifying team &bull; Mathura onsite round</p>
              </div>
            </div>

            {/* Steps Grid */}
            <div className="grid grid-cols-2" style={{ gap: '1.5rem', marginBottom: '2rem' }}>
              <div className="step-block-card">
                <h4 className="step-block-title">1. Form an eligible team</h4>
                <p className="step-block-desc">
                  Three student contestants and one coach from the same institution form the team. Review the official ICPC regional eligibility rules.
                </p>
              </div>
              <div className="step-block-card">
                <h4 className="step-block-title">2. Register on ICPC Global</h4>
                <p className="step-block-desc">
                  The coach creates the team and invites all contestants to complete their profiles with accurate names, email addresses, and institutional information.
                </p>
              </div>
              <div className="step-block-card">
                <h4 className="step-block-title">3. Register for Mathura Site</h4>
                <p className="step-block-desc">
                  Regional-site registration is separate. Teams seeking Mathura selection must register specifically for Mathura Site.
                </p>
              </div>
              <div className="step-block-card">
                <h4 className="step-block-title">4. Complete fee and documents</h4>
                <p className="step-block-desc">
                  Pay the applicable team fee and submit payment proof, undertaking, and institutional verification within the official schedule.
                </p>
              </div>
            </div>

            {/* Warning box */}
            <div className="multi-site-alert">
              <strong>Registering at more than one site?</strong> Complete registration and fee payment separately for each chosen regional site. A team may participate in no more than two regional sites under ICPC Asia West rules.
            </div>

            {/* Buttons */}
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a href="https://icpc.global/regionals/finder/mathuraprelim-2027" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ padding: '0.75rem 2rem' }}>
                Visit ICPC Global
              </a>
              <Link
                to="/rules"
                className="btn btn-outline-white"
                style={{
                  border: '2px solid var(--secondary-accent)',
                  color: 'var(--secondary-accent)',
                  padding: '0.75rem 2rem',
                }}
              >
                Read ICPC Regional Rules
              </Link>
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
            <a href="https://icpc.global/regionals/finder/mathuraprelim-2027" target="_blank" rel="noopener noreferrer" className="card-plain" style={{ padding: '1.5rem', textAlign: 'center', borderTop: '3px solid var(--accent)' }}>
              <div style={{ fontSize: '1.75rem', marginBottom: '0.5rem' }}>🌐</div>
              <h3 style={{ fontSize: '1.05rem', color: 'var(--primary-navy)', marginBottom: '0.5rem' }}>ICPC Global Registration</h3>
              <p style={{ fontSize: '0.8rem', color: 'var(--muted-text)' }}>Official central registration platform.</p>
            </a>

            <a href="https://wc.indiaicpc.in/" target="_blank" rel="noopener noreferrer" className="card-plain" style={{ padding: '1.5rem', textAlign: 'center', borderTop: '3px solid var(--secondary-accent)' }}>
              <div style={{ fontSize: '1.75rem', marginBottom: '0.5rem' }}>🏆</div>
              <h3 style={{ fontSize: '1.05rem', color: 'var(--primary-navy)', marginBottom: '0.5rem' }}>Asia West Championship</h3>
              <p style={{ fontSize: '0.8rem', color: 'var(--muted-text)' }}>Continent Championship information.</p>
            </a>

            <a href="https://icpc.global" target="_blank" rel="noopener noreferrer" className="card-plain" style={{ padding: '1.5rem', textAlign: 'center', borderTop: '3px solid var(--primary-navy)' }}>
              <div style={{ fontSize: '1.75rem', marginBottom: '0.5rem' }}>💻</div>
              <h3 style={{ fontSize: '1.05rem', color: 'var(--primary-navy)', marginBottom: '0.5rem' }}>Practice Portal</h3>
              <p style={{ fontSize: '0.8rem', color: 'var(--muted-text)' }}>ICPC training grounds & mock rounds.</p>
            </a>

            <div className="card-plain" style={{ padding: '1.5rem', textAlign: 'center', borderTop: '3px solid var(--accent-hover)', opacity: 0.7 }}>
              <div style={{ fontSize: '1.75rem', marginBottom: '0.5rem' }}>📁</div>
              <h3 style={{ fontSize: '1.05rem', color: 'var(--primary-navy)', marginBottom: '0.5rem' }}>Previous Problem Sets</h3>
              <p style={{ fontSize: '0.8rem', color: 'var(--muted-text)' }}>Available on request only. Check back later for the archive page.</p>
            </div>

            {/* Row 2 */}
            <Link to="/gallery" className="card-plain" style={{ padding: '1.5rem', textAlign: 'center', borderTop: '3px solid var(--accent-hover)' }}>
              <div style={{ fontSize: '1.75rem', marginBottom: '0.5rem' }}>📸</div>
              <h3 style={{ fontSize: '1.05rem', color: 'var(--primary-navy)', marginBottom: '0.5rem' }}>Photo Gallery</h3>
              <p style={{ fontSize: '0.8rem', color: 'var(--muted-text)' }}>Memories from previous onsite rounds.</p>
            </Link>

            <Link className="card-plain" style={{ padding: '1.5rem', textAlign: 'center', borderTop: '3px solid var(--primary-navy)' }}>
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

      {/* Payment Information Modal */}
      {showPaymentModal && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(15, 23, 42, 0.75)',
            backdropFilter: 'blur(8px)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 10000,
            padding: '1.5rem',
            overflowY: 'auto'
          }}
          onClick={() => setShowPaymentModal(false)}
        >
          <div
            style={{
              backgroundColor: '#ffffff',
              borderRadius: '16px',
              width: '100%',
              maxWidth: '850px',
              padding: '2.5rem',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem',
              maxHeight: '90vh',
              overflowY: 'auto',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              animation: 'fadeIn 0.2s ease-out'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setShowPaymentModal(false)}
              style={{
                position: 'absolute',
                top: '1.5rem',
                right: '1.5rem',
                backgroundColor: '#f1f5f9',
                border: 'none',
                borderRadius: '50%',
                width: '2.5rem',
                height: '2.5rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                fontSize: '1.25rem',
                color: '#64748b',
                transition: 'background-color 0.2s, transform 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#e2e8f0';
                e.currentTarget.style.transform = 'scale(1.05)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#f1f5f9';
                e.currentTarget.style.transform = 'scale(1)';
              }}
              aria-label="Close modal"
            >
              ✕
            </button>

            {/* Header */}
            <div>
              <div
                style={{
                  color: '#ef4444',
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  marginBottom: '0.35rem',
                  fontFamily: 'var(--font-headings)'
                }}
              >
                Mathura Preliminary Fee
              </div>
              <h2
                style={{
                  fontSize: '1.8rem',
                  fontWeight: 800,
                  color: 'var(--primary-navy)',
                  margin: 0,
                  lineHeight: 1.2
                }}
              >
                Pay ₹1,500 and submit proof
              </h2>
            </div>

            {/* Steps Grid */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                gap: '1rem',
              }}
            >
              {/* Step 1 */}
              <div
                style={{
                  border: '1px solid #e2e8f0',
                  borderRadius: '12px',
                  padding: '1.25rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  backgroundColor: '#f8fafc'
                }}
              >
                <div
                  style={{
                    width: '2.5rem',
                    height: '2.5rem',
                    borderRadius: '50%',
                    backgroundColor: '#eff6ff',
                    color: '#2563eb',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 700,
                    flexShrink: 0
                  }}
                >
                  1
                </div>
                <div style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--primary-navy)' }}>
                  Pay the fee
                </div>
              </div>

              {/* Step 2 */}
              <div
                style={{
                  border: '1px solid #e2e8f0',
                  borderRadius: '12px',
                  padding: '1.25rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  backgroundColor: '#f8fafc'
                }}
              >
                <div
                  style={{
                    width: '2.5rem',
                    height: '2.5rem',
                    borderRadius: '50%',
                    backgroundColor: '#eff6ff',
                    color: '#2563eb',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 700,
                    flexShrink: 0
                  }}
                >
                  2
                </div>
                <div style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--primary-navy)' }}>
                  Save UTR & proof
                </div>
              </div>

              {/* Step 3 */}
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLScVfuDP1atIm93gzNiNNbZfn-uc9SbdhD-wrxPLSH5v8dcrTA/viewform"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  border: '1px solid #fecaca',
                  borderRadius: '12px',
                  padding: '1.25rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  backgroundColor: '#b91c1c',
                  color: '#ffffff',
                  textDecoration: 'none',
                  cursor: 'pointer',
                  transition: 'background-color 0.2s'
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#991b1b'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#b91c1c'}
              >
                <div
                  style={{
                    width: '2.5rem',
                    height: '2.5rem',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                    color: '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 700,
                    flexShrink: 0
                  }}
                >
                  3
                </div>
                <div>
                  <div style={{ fontSize: '0.95rem', fontWeight: 700, marginBottom: '0.15rem' }}>
                    Submit payment details
                  </div>
                  <span
                    style={{
                      fontSize: '0.8rem',
                      color: '#fecaca',
                      textDecoration: 'underline',
                      fontWeight: 500,
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.25rem'
                    }}
                  >
                    Google Form ↗
                  </span>
                </div>
              </a>
            </div>

            {/* Required Banner */}
            <div
              style={{
                backgroundColor: '#fffbeb',
                borderLeft: '4px solid #f59e0b',
                borderRadius: '8px',
                padding: '1.25rem',
                fontSize: '0.95rem',
                color: '#b45309',
                lineHeight: 1.5
              }}
            >
              <strong>Required:</strong> Your team will be considered for the Mathura Preliminary only after payment details and proof are submitted through the Google Form.
            </div>

            {/* Main Details Section */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                gap: '2rem',
                marginTop: '0.5rem'
              }}
            >
              {/* Left: Bank Details */}
              <div>
                <h3
                  style={{
                    fontSize: '1.2rem',
                    fontWeight: 700,
                    color: 'var(--primary-navy)',
                    marginBottom: '1rem',
                    fontFamily: 'var(--font-headings)'
                  }}
                >
                  Bank details
                </h3>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '0.85rem'
                  }}
                >
                  {[
                    { label: 'BANK', val: 'Indian Overseas Bank' },
                    { label: 'ACCOUNT NAME', val: 'CONFERANCE & WORKSHOP AC GLA UNIVERSITY' },
                    { label: 'ACCOUNT NUMBER', val: '199901000018885' },
                    { label: 'IFSC CODE', val: 'IOBA0001999' },
                    { label: 'BRANCH', val: 'GLA ENGINEERING COLLEGE, AJHAI' },
                    { label: 'AMOUNT', val: '₹1,500 per team' }
                  ].map((detail) => (
                    <div
                      key={detail.label}
                      style={{
                        border: '1px solid #e2e8f0',
                        borderRadius: '8px',
                        padding: '0.85rem',
                        backgroundColor: '#ffffff',
                        boxShadow: 'var(--shadow-sm)',
                        gridColumn: detail.label === 'ACCOUNT NAME' || detail.label === 'BRANCH' ? 'span 2' : 'auto'
                      }}
                    >
                      <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#64748b', marginBottom: '0.35rem' }}>
                        {detail.label}
                      </div>
                      <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#1e293b', wordBreak: 'break-all' }}>
                        {detail.val}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: QR Code & UPI Space */}
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <h3
                  style={{
                    fontSize: '1.2rem',
                    fontWeight: 700,
                    color: 'var(--primary-navy)',
                    marginBottom: '1rem',
                    fontFamily: 'var(--font-headings)'
                  }}
                >
                  Scan & Pay with UPI
                </h3>
                <div
                  style={{
                    border: '1px solid #e2e8f0',
                    borderRadius: '12px',
                    backgroundColor: '#ffffff',
                    padding: '1.5rem',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexGrow: 1,
                    boxShadow: 'var(--shadow-sm)',
                    gap: '1rem'
                  }}
                >
                  <img
                    src={paymentQr}
                    alt="GLA University UPI Payment QR"
                    style={{
                      width: '200px',
                      height: 'auto',
                      display: 'block',
                      borderRadius: '8px',
                      border: '1px solid #e2e8f0',
                      padding: '0.25rem',
                      backgroundColor: '#ffffff'
                    }}
                  />
                  <div
                    style={{
                      backgroundColor: '#f8fafc',
                      border: '1px solid #e2e8f0',
                      borderRadius: '8px',
                      padding: '0.65rem 0.75rem',
                      width: '100%',
                      textAlign: 'center'
                    }}
                  >
                    <div style={{ fontSize: '0.7rem', fontWeight: 700, color: '#64748b', marginBottom: '0.2rem', letterSpacing: '0.05em' }}>
                      UPI ID
                    </div>
                    <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--primary-navy)', wordBreak: 'break-all', fontFamily: 'var(--font-headings)' }}>
                      CONFERANCEANDWORKSHOPACGLAUNIVERSITY@iob
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
