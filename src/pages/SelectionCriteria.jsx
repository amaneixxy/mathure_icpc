export default function SelectionCriteria() {
  const steps = [
    {
      num: 1,
      title: "Filter Zero Solves",
      desc: "Discard all teams who could not solve a single problem in the Preliminary Round.",
      badge: "Step 1",
    },
    {
      num: 2,
      title: "Preliminary Ranking",
      desc: "Rank all valid teams based on their performance (problems solved and penalty time) in the Preliminary Round.",
      badge: "Step 2",
    },
    {
      num: 3,
      title: "Top 15 Direct Selection",
      desc: "Select the top 15 (fifteen) ranked teams directly for the Onsite Contest.",
      badge: "Step 3",
    },
    {
      num: 4,
      title: "Rank List Adjustment",
      desc: "Remove these top 15 selected teams from the main Rank List.",
      badge: "Step 4",
    },
    {
      num: 5,
      title: "Distinct Institute Top Ranker",
      desc: "Select the top ranked team from each distinct school or institute.",
      badge: "Step 5",
    },
    {
      num: 6,
      title: "Arrange Institute Winners",
      desc: "Arrange all these top ranked teams with respect to their performance in the Preliminary Round.",
      badge: "Step 6",
    },
    {
      num: 7,
      title: "Fill General Slots",
      desc: "Select teams from the top of the arranged list as long as General slots (up to 95) are available and the list is not exhausted.",
      badge: "Step 7",
    },
    {
      num: 8,
      title: "Iterative Backfill Loop",
      desc: "In case the number of selected teams is less than the available General slots, remove selected teams from the Rank List and repeat Step 5.",
      badge: "Step 8",
    },
  ];

  const contestRules = [
    {
      icon: "🌐",
      title: "Internet Contest Format",
      desc: "The preliminary contest will be conducted over the Internet on the official platform.",
    },
    {
      icon: "🚨",
      title: "Strict Anti-Plagiarism Policy",
      desc: "In case plagiarism is detected in any team's submission, all teams from the respective institute/s may be blacklisted, disqualifying them from participation in any regional site of India.",
    },
    {
      icon: "💬",
      title: "Discussion & Strategy Policy",
      desc: "You are not allowed to discuss strategy, suggestions, or tips in comments with anyone other than your registered team members during the contest.",
    },
    {
      icon: "⚙️",
      title: "Environment & Compilers",
      desc: "The organizing institute will not be responsible if any program does not work in our environment. Please use official compiler versions.",
    },
    {
      icon: "⚖️",
      title: "Judges' Decision is Final",
      desc: "Judges' decision will be treated as final. No correspondence in this regard will be entertained.",
    },
    {
      icon: "📡",
      title: "Internet Failure Liability",
      desc: "Mathura Site will not be responsible for any internet or local infrastructure failure during the contest at contestants' sites.",
    },
    {
      icon: "📝",
      title: "Solution Submission",
      desc: "Each participating team must submit solutions during the contest period to be considered for evaluation.",
    },
    {
      icon: "📊",
      title: "Selection vs Raw Ranking",
      desc: "Selection of teams may or may not strictly reflect the raw overall ranking due to distinct institute limits and reserved female slots.",
    },
  ];

  return (
    <div>
      {/* 1. Page Header */}
      <section className="page-header">
        <div className="container">
          <h1>Selection Criteria & Guidelines</h1>
          <p>ICPC Mathura Site 2026 — GLA University, Mathura</p>
        </div>
      </section>

      {/* Main Section */}
      <section className="section" style={{ backgroundColor: 'var(--background)' }}>
        <div className="container" style={{ maxWidth: '1080px' }}>

          {/* Important Regional Note Banner */}
          <div
            style={{
              backgroundColor: '#fff',
              borderLeft: '6px solid var(--accent)',
              borderRadius: 'var(--border-radius)',
              padding: '1.75rem 2rem',
              boxShadow: 'var(--shadow-md)',
              marginBottom: '3rem',
              background: 'linear-gradient(135deg, rgba(255, 181, 102, 0.08) 0%, rgba(32, 42, 57, 0.03) 100%)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
              <span style={{ fontSize: '1.5rem' }}>📢</span>
              <h3 style={{ color: 'var(--primary-navy)', fontSize: '1.2rem', margin: 0, fontWeight: 700 }}>
                Single Preliminary Online Contest Notification
              </h3>
            </div>
            <p style={{ fontSize: '0.975rem', color: 'var(--text)', lineHeight: 1.6, margin: 0 }}>
              <strong>Note:</strong> There will be a <strong>single Preliminary Online Contest</strong> for all four Regional Sites in India (i.e., <strong>Mathura, Kanpur, Amritapuri, and Chennai</strong>). Each regional site will prepare its own rank list based on the teams registered for that site from the Preliminary Online Contest rankings. Teams participating in multiple regional sites are <strong>mandatorily required to keep the same team members</strong>.
            </p>
          </div>

          {/* 2. Preliminary Contest Summary & Slot Distribution Cards */}
          <div className="grid grid-cols-2" style={{ gap: '2rem', marginBottom: '3.5rem' }}>
            
            {/* Contest Info Card */}
            <div className="card-plain" style={{ borderTop: '4px solid var(--primary-navy)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <span className="registration-badge" style={{ marginBottom: '1rem', display: 'inline-block' }}>PRELIMINARY ROUND</span>
                <h3 style={{ color: 'var(--primary-navy)', fontSize: '1.35rem', marginBottom: '1rem' }}>
                  Preliminary Online Contest Details
                </h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.95rem' }}>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <strong style={{ minWidth: '110px' }}>📅 Date & Day:</strong>
                    <span>Saturday, 03rd October 2026</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <strong style={{ minWidth: '110px' }}>⏰ Time:</strong>
                    <span style={{ color: '#d97706', fontWeight: 700 }}>1:30 PM to 4:30 PM IST</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <strong style={{ minWidth: '110px' }}>💻 Platform:</strong>
                    <span className="sponsor-badge font-mono" style={{ backgroundColor: 'var(--primary-navy)', color: '#fff', padding: '0.2rem 0.6rem', fontSize: '0.85rem' }}>CodeChef</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                    <strong style={{ minWidth: '110px' }}>🏛️ Onsite Round:</strong>
                    <span>27–28 December 2026 at GLA University, Mathura</span>
                  </li>
                </ul>
              </div>
              <div style={{ marginTop: '1.25rem', paddingTop: '1rem', borderTop: '1px solid #e2e8f0', fontSize: '0.875rem', color: 'var(--muted-text)' }}>
                * All teams must mandatorily complete all 3 steps of registration on <a href="http://mathuraicpc.in" style={{ color: 'var(--accent-hover)', fontWeight: 600 }}>mathuraicpc.in</a>.
              </div>
            </div>

            {/* Slots Allocation Card */}
            <div className="card-plain" style={{ borderTop: '4px solid var(--accent)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <span className="registration-badge" style={{ backgroundColor: 'rgba(255, 181, 102, 0.2)', color: '#b45309', marginBottom: '1rem', display: 'inline-block' }}>SLOTS BREAKDOWN</span>
                <h3 style={{ color: 'var(--primary-navy)', fontSize: '1.35rem', marginBottom: '1rem' }}>
                  Onsite Contest Slot Allocation
                </h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.75rem', textAlign: 'center', marginTop: '1rem' }}>
                  <div style={{ backgroundColor: 'var(--background)', padding: '1rem 0.5rem', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                    <div style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--primary-navy)' }}>100</div>
                    <div style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--muted-text)', marginTop: '0.25rem' }}>Total Slots</div>
                  </div>
                  <div style={{ backgroundColor: 'var(--background)', padding: '1rem 0.5rem', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                    <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#2563eb' }}>95</div>
                    <div style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--muted-text)', marginTop: '0.25rem' }}>General Slots</div>
                  </div>
                  <div style={{ backgroundColor: 'var(--background)', padding: '1rem 0.5rem', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                    <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#ec4899' }}>05</div>
                    <div style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--muted-text)', marginTop: '0.25rem' }}>Female Slots#</div>
                  </div>
                </div>
              </div>
              <p style={{ marginTop: '1.25rem', paddingTop: '1rem', borderTop: '1px solid #e2e8f0', fontSize: '0.875rem', color: 'var(--muted-text)', margin: 0 }}>
                Participation in the online contest is mandatory for all teams aiming for selection in the Mathura Onsite contest.
              </p>
            </div>

          </div>

          {/* 3. Selection Procedure Step-by-Step */}
          <div style={{ marginBottom: '4rem' }}>
            <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
              <span className="registration-badge">SELECTION ALGORITHM</span>
              <h2 className="section-title" style={{ display: 'block', textAlign: 'center', marginTop: '0.5rem' }}>
                Selection Procedure for On-Site Contest
              </h2>
              <p style={{ maxWidth: '700px', margin: '0.5rem auto 0 auto', color: 'var(--muted-text)', fontSize: '0.95rem' }}>
                Selection for the 100 onsite slots at GLA University follows an official 8-step criteria to ensure institute diversity and merit-based advancement.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem' }}>
              {steps.map((step) => (
                <div
                  key={step.num}
                  className="card-plain"
                  style={{
                    position: 'relative',
                    padding: '1.5rem',
                    display: 'flex',
                    flexDirection: 'column',
                    justify: 'space-between',
                    borderTop: `4px solid ${step.num <= 3 ? 'var(--primary-navy)' : step.num <= 6 ? 'var(--accent)' : 'var(--secondary-accent)'}`,
                    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                  }}
                >
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                      <span
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          width: '32px',
                          height: '32px',
                          borderRadius: '50%',
                          backgroundColor: 'var(--primary-navy)',
                          color: '#fff',
                          fontWeight: 700,
                          fontSize: '0.9rem',
                        }}
                      >
                        {step.num}
                      </span>
                      <span className="font-mono" style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--muted-text)', textTransform: 'uppercase' }}>
                        {step.badge}
                      </span>
                    </div>
                    <h4 style={{ color: 'var(--primary-navy)', fontSize: '1.05rem', fontWeight: 700, marginBottom: '0.5rem' }}>
                      {step.title}
                    </h4>
                    <p style={{ fontSize: '0.875rem', color: 'var(--muted-text)', lineHeight: 1.5, margin: 0 }}>
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 4. Selection in All-Female Slots Section */}
          <div
            style={{
              backgroundColor: '#fff',
              borderRadius: 'var(--border-radius)',
              padding: '2.5rem',
              boxShadow: 'var(--shadow-md)',
              marginBottom: '4rem',
              borderTop: '5px solid #ec4899',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
              <span style={{ fontSize: '2rem' }}>👩‍💻</span>
              <div>
                <h3 style={{ color: 'var(--primary-navy)', fontSize: '1.4rem', fontWeight: 700, margin: 0 }}>
                  Selection in All Female Slot (05 Reserved Slots)
                </h3>
                <p style={{ color: 'var(--muted-text)', fontSize: '0.9rem', margin: 0 }}>
                  Special allocation criteria encouraging female participation in ICPC
                </p>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.5rem', marginTop: '1.5rem' }}>
              <div style={{ backgroundColor: 'var(--background)', padding: '1.25rem 1.5rem', borderRadius: '10px' }}>
                <h4 style={{ color: 'var(--primary-navy)', fontSize: '1rem', fontWeight: 700, marginBottom: '0.5rem' }}>
                  Selection Procedure for Female Slots
                </h4>
                <p style={{ fontSize: '0.925rem', color: 'var(--text)', lineHeight: 1.6, margin: 0 }}>
                  The <strong>05 reserved slots for all female teams</strong> will be filled in a similar manner after selecting 95 teams for the General Slots (i.e., selecting the best all-women&apos;s team from each institute).
                </p>
              </div>

              <div style={{ backgroundColor: 'rgba(236, 72, 153, 0.05)', padding: '1.25rem 1.5rem', borderRadius: '10px', border: '1px solid rgba(236, 72, 153, 0.2)' }}>
                <h4 style={{ color: '#be185d', fontSize: '1rem', fontWeight: 700, marginBottom: '0.5rem' }}>
                  # Definition of &quot;All Female Team&quot;
                </h4>
                <p style={{ fontSize: '0.925rem', color: 'var(--text)', lineHeight: 1.6, marginBottom: '0.75rem' }}>
                  A team consisting <strong>entirely of female contestants</strong>. The gender of the coach does <em>not</em> need to be female. Slots for such &quot;All Female Teams&quot; are reserved to encourage and promote the participation of female contestants in the ICPC.
                </p>
                <div style={{ borderTop: '1px dashed rgba(236, 72, 153, 0.3)', paddingTop: '0.75rem', marginTop: '0.75rem' }}>
                  <p style={{ fontSize: '0.9rem', margin: 0 }}>
                    <strong>Clarification:</strong> In case a team consists of only 02 contestants and both are female, will it be considered as an &quot;All female team&quot;?
                  </p>
                  <p style={{ fontSize: '0.9rem', color: '#be185d', fontWeight: 700, marginTop: '0.25rem', margin: 0 }}>
                    Answer: Yes, even the same is true for a single contestant team.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 5. Preliminary Online Contest Rules */}
          <div style={{ marginBottom: '3rem' }}>
            <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
              <span className="registration-badge">CONTEST RULES</span>
              <h2 className="section-title" style={{ display: 'block', textAlign: 'center', marginTop: '0.5rem' }}>
                Online Contest Rules & Code of Conduct
              </h2>
            </div>

            <div className="grid grid-cols-2" style={{ gap: '1.25rem' }}>
              {contestRules.map((rule, idx) => (
                <div
                  key={idx}
                  className="card-plain"
                  style={{
                    display: 'flex',
                    gap: '1rem',
                    alignItems: 'flex-start',
                    padding: '1.25rem 1.5rem',
                    backgroundColor: '#fff',
                  }}
                >
                  <span style={{ fontSize: '1.75rem', lineHeight: 1 }}>{rule.icon}</span>
                  <div>
                    <h4 style={{ color: 'var(--primary-navy)', fontSize: '1rem', fontWeight: 700, marginBottom: '0.35rem' }}>
                      {rule.title}
                    </h4>
                    <p style={{ fontSize: '0.875rem', color: 'var(--muted-text)', lineHeight: 1.5, margin: 0 }}>
                      {rule.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Note Box */}
          <div className="warning-box" style={{ marginTop: '3rem' }}>
            <span style={{ fontSize: '1.5rem' }}>⚖️</span>
            <div>
              <strong>Final Selection Authority:</strong> All selection procedures and slot allocations are conducted strictly under the official ICPC Asia Region guidelines. Decisions made by the ICPC Mathura Site Contest Director are final and binding.
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
