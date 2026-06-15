export default function SelectionCriteria() {
  const criteriaList = [
    {
      title: "Rank-based Selection",
      description: "Top teams by rank in the Preliminary Online Round are directly selected for the onsite contest.",
      icon: "📊",
    },
    {
      title: "Tiebreaker Guidelines",
      description: "In case of equal problems solved, the cumulative penalty time (time taken to solve plus incorrect attempts) is used as the tiebreaker.",
      icon: "⏱️",
    },
    {
      title: "Institution Diversity",
      description: "Selection lists are balanced to account for geographic and institution diversity as per the ICPC Asia Region guidelines.",
      icon: "🏢",
    },
    {
      title: "GLA University Teams",
      description: "GLA University teams meeting the minimum qualifying requirements receive priority slots as host institution allocations.",
      icon: "🎓",
    },
    {
      title: "Wildcard Entries",
      description: "The Contest Director reserves the right to issue wildcard entries to deserving teams under special selection rubrics.",
      icon: "🃏",
    },
  ];

  return (
    <div>
      {/* 1. Page Header */}
      <section className="page-header">
        <div className="container">
          <h1>Team Selection Criteria</h1>
          <p>ICPC Mathura 2026 — Onsite Round Slots Selection</p>
        </div>
      </section>

      {/* Main Section */}
      <section className="section" style={{ backgroundColor: 'var(--background)' }}>
        <div className="container" style={{ maxWidth: '1000px' }}>

          {/* 2. Selection Process Explanation (Two Column Layout) */}
          <div className="grid grid-cols-2" style={{ gap: '3rem', alignItems: 'center', marginBottom: '4rem' }}>
            <div className="about-text">
              <h2 className="section-title" style={{ textAlign: 'left', display: 'inline-block', marginBottom: '1rem' }}>
                Onsite Qualification Pathway
              </h2>
              <p>
                To qualify for the prestigious onsite round at <strong>GLA University, Mathura</strong>, all registered teams must participate in the initial online round.
              </p>
              <p>
                Due to laboratory seating capacities, onsite contest participation is capped. The selection metrics guarantee a competitive, diverse, and fair representation of the top algorithmic teams across India.
              </p>
            </div>

            {/* CSS-only Flowchart Infographic */}
            <div>
              <div className="flowchart">
                <div className="flowchart-step">1. All Registered Teams</div>
                <div className="flowchart-arrow">▼</div>
                <div className="flowchart-step">2. Preliminary Online Round</div>
                <div className="flowchart-arrow">▼</div>
                <div className="flowchart-step">3. Top N Teams Selected</div>
                <div className="flowchart-arrow">▼</div>
                <div className="flowchart-step">4. Onsite Round at GLA University</div>
              </div>
            </div>
          </div>

          {/* 3. Criteria Details Grid */}
          <h2 className="section-title" style={{ display: 'block', textAlign: 'center', marginBottom: '2.5rem' }}>
            Selection Parameters
          </h2>

          <div className="grid grid-cols-3" style={{ gap: '1.5rem', marginBottom: '3rem' }}>
            {criteriaList.map((item, index) => (
              <div key={index} className="card-plain" style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <div style={{ fontSize: '2rem', marginBottom: '0.25rem' }}>{item.icon}</div>
                <h3 style={{ color: 'var(--primary-navy)', fontSize: '1.15rem', fontWeight: 700 }}>{item.title}</h3>
                <p className="text-muted" style={{ fontSize: '0.9rem', lineHeight: 1.5 }}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* 4. Note Box */}
          <div className="notes-box">
            <span style={{ fontSize: '1.5rem' }}>ℹ️</span>
            <div>
              <strong>Final Authority:</strong> Final selections and team slots are at the sole discretion of the ICPC Mathura Site Contest Director. All team allocation decisions are final and binding.
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
