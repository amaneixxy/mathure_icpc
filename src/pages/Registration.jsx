import { useState } from 'react';
import paymentQr from '../assets/payment qr.png';

// Toggle this boolean flag to change the registration status of the contest site
const REGISTRATION_OPEN = true;

export default function Registration() {
  const [showPaymentModal, setShowPaymentModal] = useState(false);

  return (
    <div>
      {/* 1. Page Header */}
      <section className="page-header">
        <div className="container">
          <h1 style={{ color: 'var(--accent)' }}>Registration</h1>
          <p>ICPC Mathura 2026 — GLA University, Mathura</p>

          <div className={`status-badge ${REGISTRATION_OPEN ? 'open' : 'closed'}`}>
            <span style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              backgroundColor: REGISTRATION_OPEN ? '#27c93f' : '#ff5f56',
              display: 'inline-block'
            }}></span>
            {REGISTRATION_OPEN ? 'Registration: OPEN' : 'Registration: CLOSED'}
          </div>
        </div>
      </section>

      <section className="section" style={{ backgroundColor: 'var(--background)' }}>
        <div className="container" style={{ maxWidth: '1000px' }}>

          {/* 2. Registration Steps */}
          <h2 className="section-title" style={{ display: 'block', textAlign: 'center', marginBottom: '2.5rem' }}>
            Registration Process
          </h2>

          <div className="steps-container">
            <div className="step-card">
              <div className="step-number">1</div>
              <h3 className="step-title">Register on ICPC Global</h3>
              <p className="step-desc">
                Go to <a href="https://icpc.global/regionals/finder/mathuraprelim-2027" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-hover)', fontWeight: 600 }}>icpc.global</a> and create an account. Form your team of exactly 3 eligible students and 1 faculty coach. Make sure your team profile is complete to obtain your <strong>ICPC Team ID</strong>.
              </p>
            </div>

            <div className="step-card">
              <div className="step-number">2</div>
              <h3 className="step-title">Register on Mathura Site</h3>
              <p className="step-desc">
                Submit team details on our local Mathura site registration portal. You will need to provide your valid ICPC Team ID, institution details, contact info, and team members&apos; records.
              </p>
            </div>

            <div className="step-card">
              <div className="step-number">3</div>
              <h3 className="step-title">Confirmation & Payment</h3>
              <p className="step-desc">
                Once details are verified, you will receive a confirmation email. Details regarding registration fees (<strong>₹1,500</strong> for the online contest and <strong>₹4,500</strong> for the onsite contest) and payment instructions will be sent to the coach&apos;s email address.
              </p>
            </div>
          </div>

          {/* Registration Overview Block */}
          <div style={{ marginTop: '4rem', borderTop: '1px solid rgba(0,0,0,0.06)', paddingTop: '3rem' }}>
            <div style={{ marginBottom: '2rem' }}>
              <span className="registration-badge">REGISTRATION</span>
              <h2 className="registration-main-title">Register now : Make payment from 15th August to 21st September</h2>
              <p className="registration-sub-desc">
                Complete every step using consistent participant details. All three students and the coach must be from the same institution, and every participant should use the same email address across ICPC registrations.
              </p>
            </div>

            {/* Banner */}
            <div className="payment-notice-banner">
              <div style={{ flex: '1 1 600px' }}>
                <h4 className="payment-notice-title">Do not wait for the payment window</h4>
                <p className="payment-notice-text">
                  Start your team registration now. Fee payment information will be available on this website by <strong>15 August 2026</strong>. Teams that complete registration by then will also receive the payment information by email from the ICPC Mathura Site team.
                </p>
              </div>
              <div>
                <a href="https://icpc.global/regionals/finder/mathuraprelim-2027" className="btn-start-reg">
                  Start registration
                </a>
              </div>
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
            <div className="multi-site-alert" style={{ marginBottom: '3rem' }}>
              <strong>Registering at more than one site?</strong> Complete registration and fee payment separately for each chosen regional site. A team may participate in no more than two regional sites under ICPC Asia West rules.
            </div>
          </div>

          {/* 3. Registration Schedule Summary */}
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

          {/* 4. Registration Form / Link Card */}
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

          {/* 4. Eligibility Criteria */}
          <div className="grid grid-cols-2" style={{ gap: '2rem', alignItems: 'start', marginTop: '3rem' }}>
            <div className="card-plain">
              <h3 style={{ color: 'var(--primary-navy)', marginBottom: '1rem', borderBottom: '2px solid var(--accent)', paddingBottom: '0.5rem' }}>
                Setting Up Teams
              </h3>
              <ul className="criteria-list">
                <li>
                  <div>
                    <strong>Team Size:</strong> Maximum of 3 contestants per team.
                  </div>
                </li>
                <li>
                  <div>
                    <strong>Coach Requirement:</strong> Exactly 1 faculty coach from the same institution.
                  </div>
                </li>
                <li>
                  <div>
                    <strong>Same Institution:</strong> All team members and the coach must be affiliated with the same higher-education institution.
                  </div>
                </li>
                <li>
                  <div>
                    <strong>Contest Duration:</strong> The contest lasts for exactly 5 Hours of continuous problem-solving.
                  </div>
                </li>
                <li>
                  <div>
                    <strong>Allowed Languages:</strong> C, C++, Java, and Python.
                  </div>
                </li>
              </ul>
            </div>

            {/* 5. Important Notes & Warnings */}
            <div className="card-plain">
              <h3 style={{ color: 'var(--primary-navy)', marginBottom: '1rem', borderBottom: '2px solid var(--accent)', paddingBottom: '0.5rem' }}>
                Important Notes
              </h3>
              <p className="text-muted" style={{ fontSize: '0.95rem' }}>
                Please review all eligibility guidelines on the official ICPC website before submitting registration requests. Ineligible registrations will be disqualified automatically without a refund.
              </p>

              <div className="warning-box">
                <span style={{ fontSize: '1.25rem' }}>⚠️</span>
                <div>
                  <strong>Mandatory Step:</strong> All team members must register individual profiles on <strong>icpc.global</strong> before the coach registers the team. Teams without a valid and fully-eligible ICPC Team ID cannot complete local site confirmation.
                </div>
              </div>
            </div>
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
