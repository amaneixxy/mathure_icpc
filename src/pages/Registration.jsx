// Toggle this boolean flag to change the registration status of the contest site
const REGISTRATION_OPEN = true;

export default function Registration() {
  return (
    <div>
      {/* 1. Page Header */}
      <section className="page-header">
        <div className="container">
          <h1 style={{ color: 'var(--accent)' }}>Registration</h1>
          <p>ICPC Mathura 2026 — GLA University</p>
          
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
                Go to <a href="https://icpc.global" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-hover)', fontWeight: 600 }}>icpc.global</a> and create an account. Form your team of exactly 3 eligible students and 1 faculty coach. Make sure your team profile is complete to obtain your <strong>ICPC Team ID</strong>.
              </p>
            </div>

            <div className="step-card">
              <div className="step-number">2</div>
              <h3 className="step-title">Register on Mathura Site</h3>
              <p className="step-desc">
                Submit team details on our local Mathura site registration portal. You will need to provide your valid ICPC Team ID, institution details, contact info, and team members' records.
              </p>
            </div>

            <div className="step-card">
              <div className="step-number">3</div>
              <h3 className="step-title">Confirmation & Payment</h3>
              <p className="step-desc">
                Once details are verified, you will receive a confirmation email. Details regarding registration fees and payment instructions will be sent to the coach's email address.
              </p>
            </div>
          </div>

          {/* 3. Registration Form / Link Card */}
          <div style={{ margin: '3rem 0' }}>
            {REGISTRATION_OPEN ? (
              <div className="card-plain text-center" style={{ borderTop: '4px solid #e3a220ff' }}>
                <h3 style={{ color: 'var(--primary-navy)', marginBottom: '1rem' }}>Ready to Register Your Team?</h3>
                <p className="text-muted" style={{ marginBottom: '1.5rem', maxWidth: '600px', marginInline: 'auto' }}>
                  Click below to be redirected to the official ICPC registration portal. Make sure you have your team members' details and coach information ready.
                </p>
                <a 
                  href="https://icpc.global" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-primary"
                  style={{ display: 'inline-flex', padding: '0.85rem 2rem' }}
                >
                  Register Now &rarr;
                </a>
                <p className="text-muted" style={{ fontSize: '0.8rem', marginTop: '1rem' }}>
                  * You will be redirected to the official ICPC registration portal.
                </p>
              </div>
            ) : (
              <div className="card-plain text-center" style={{ borderTop: '4px solid #ff5f56', opacity: 0.85 }}>
                <h3 style={{ color: 'var(--muted-text)', marginBottom: '1rem' }}>Registration is Closed</h3>
                <p className="text-muted" style={{ marginBottom: '0.5rem', maxWidth: '600px', marginInline: 'auto' }}>
                  Registration for the ICPC Mathura 2026 Contest is now closed. Stay tuned for future announcements and next year's cycle.
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
    </div>
  );
}
