import { Link } from 'react-router-dom';

export default function PublishedAnnouncement() {
  return (
    <div className="published-announcement-card">
      {/* Top kicker tag */}
      <div className="published-kicker">ICPC MATHURA REGIONAL 2026</div>

      {/* Main Title */}
      <h2 className="published-title">Selected Teams &amp; Waiting List Published</h2>

      {/* Description */}
      <p className="published-desc">
        We are pleased to announce that the list of <strong>100 selected teams</strong> and the <strong>12-team waiting list</strong> for the ICPC Mathura Regional Onsite Contest 2026 has been published.
      </p>

      {/* Action Button */}
      <div style={{ marginBottom: '1.75rem' }}>
        <Link to="/ranklist" className="btn-published-cta">
          <span>View Selected Teams &amp; Waiting List</span>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </Link>
      </div>

      {/* Side-by-side Step Cards */}
      <div className="published-steps-grid">
        {/* Email Notification Card */}
        <div className="published-step-box step-box-email">
          <div className="step-box-header">
            <span className="step-box-label">Email notification</span>
          </div>
          <div className="step-box-deadline">
            By 5 November 2026, 10:00 PM IST
          </div>
          <p className="step-box-intro">
            All selected teams will receive an official email containing the following details:
          </p>
          <ul className="step-box-list">
            <li>Registration fee payment link</li>
            <li>Onsite registration form link</li>
          </ul>
          <p className="step-box-note">
            Teams are requested to check their registered email addresses regularly (including the Spam/Junk folder) and complete all the required formalities within the prescribed deadline.
          </p>
        </div>

        {/* Complete Onsite Registration Card */}
        <div className="published-step-box step-box-onsite">
          <div className="step-box-header">
            <span className="step-box-label">Complete onsite registration</span>
          </div>
          <div className="step-box-deadline">
            Deadline: By 16 November 2026, 5:00 PM IST
          </div>
          <p className="step-box-intro">
            All selected teams must complete the onsite registration process by the stipulated deadline, including:
          </p>
          <ul className="step-box-list">
            <li>
              <strong>Registration Fee Payment:</strong> Pay the prescribed registration fee using the payment link provided in the official email.
            </li>
            <li>
              <strong>Onsite Registration Form:</strong> Duly fill in and submit the onsite registration form with all the required team details.
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Alert Callout */}
      <div className="published-alert-callout">
        <strong>Important:</strong> Both the fee payment and registration form submission are mandatory. Teams failing to complete either of these requirements within the deadline will forfeit their onsite participation opportunity, and the vacant slots may be offered to teams on the waiting list.
      </div>
    </div>
  );
}

