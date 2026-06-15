export default function RulesEligibility() {
  const teamRequirements = [
    { rule: "Maximum 3 contestants per team.", key: "Contestants" },
    { rule: "Exactly 1 faculty coach.", key: "Coach" },
    { rule: "All members (contestants & coach) must represent the same institution.", key: "Institution" },
  ];

  const contestFormat = [
    { label: "Contest Duration", value: "5 Hours" },
    { label: "Number of Problems", value: "8 to 12 algorithmic challenges" },
    { label: "Evaluation Criteria", value: "Most problems solved; tiebroken by lowest penalty time" },
  ];

  return (
    <div>
      <section className="page-header">
        <div className="container">
          <h1>Rules & Eligibility</h1>
          <p>ICPC Mathura Regional Guidelines</p>
        </div>
      </section>

      <section className="section" style={{ backgroundColor: 'var(--background)' }}>
        <div className="container" style={{ maxWidth: '1000px' }}>
          
          <div className="grid grid-cols-2" style={{ gap: '2rem', alignItems: 'start', marginBottom: '3rem' }}>
            {/* Team Structure */}
            <div className="card-plain" style={{ borderTop: '4px solid var(--accent)' }}>
              <h2 style={{ color: 'var(--primary-navy)', fontSize: '1.4rem', fontWeight: 700, marginBottom: '1.5rem' }}>
                Setting Up Teams
              </h2>
              <ul className="criteria-list">
                {teamRequirements.map((item, idx) => (
                  <li key={idx}>
                    <div>
                      <strong>{item.key}:</strong> {item.rule}
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Programming Languages */}
            <div className="card-plain" style={{ borderTop: '4px solid var(--secondary-accent)' }}>
              <h2 style={{ color: 'var(--primary-navy)', fontSize: '1.4rem', fontWeight: 700, marginBottom: '1.5rem' }}>
                Allowed Languages
              </h2>
              <p className="text-muted" style={{ fontSize: '0.95rem', marginBottom: '1.25rem' }}>
                All competitive programming solution submissions must compile and execute on the grading servers using one of the following official languages:
              </p>
              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                {['C', 'C++', 'Java', 'Python'].map((lang) => (
                  <span 
                    key={lang} 
                    className="sponsor-badge font-mono" 
                    style={{ fontSize: '0.9rem', padding: '0.4rem 1.25rem', backgroundColor: 'var(--primary-dark)', color: '#ffffff', borderColor: 'var(--accent)' }}
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Contest Format */}
          <div className="card-plain" style={{ marginBottom: '3rem', borderTop: '4px solid var(--primary-navy)' }}>
            <h2 style={{ color: 'var(--primary-navy)', fontSize: '1.4rem', fontWeight: 700, marginBottom: '1.5rem', textCenter: 'center' }}>
              Contest Format
            </h2>
            <div className="grid grid-cols-3" style={{ gap: '1.5rem' }}>
              {contestFormat.map((fmt, idx) => (
                <div key={idx} style={{ textAlign: 'center', padding: '1rem', backgroundColor: 'var(--background)', borderRadius: '8px' }}>
                  <div className="text-muted" style={{ fontSize: '0.85rem', fontWeight: 600, textTransform: 'uppercase', marginBottom: '0.25rem' }}>
                    {fmt.label}
                  </div>
                  <div style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--primary-navy)' }}>
                    {fmt.value}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Note Box */}
          <div className="warning-box">
            <span style={{ fontSize: '1.5rem' }}>⚠️</span>
            <div>
              <strong>Eligibility Verification:</strong> All participant records, age limits, and institutional affiliations will be strictly verified before onsite seat confirmation. Ineligibility or incorrect profile details on the ICPC Global portal will lead to instant disqualification.
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
