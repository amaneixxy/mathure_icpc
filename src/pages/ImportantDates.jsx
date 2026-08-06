export default function ImportantDates() {
  const events = [
    {
      date: "06 August 2026",
      title: "Registration Starts",
      description: "Teams register on ICPC Global and begin the ICPC Mathura site confirmation process.",
      completed: false,
    },
    {
      date: "20 September 2026",
      title: "Registration Closes",
      description: "Final deadline to register your team for ICPC Mathura 2026.",
      completed: false,
    },
    {
      date: "15 August 2026",
      title: "Fee Payment Starts",
      description: "Confirmed teams may begin submitting payment for ICPC Mathura 2026.",
      completed: false,
    },
    {
      date: "21 September 2026",
      title: "Fee Payment Closes",
      description: "Last date for confirmed ICPC Mathura teams to complete payment.",
      completed: false,
    },
    {
      date: "03 October 2026",
      title: "Preliminary Online Contest",
      description: "Hosted online; top teams qualify for the onsite round at GLA University, Mathura.",
      completed: false,
    },
    {
      date: "27–28 December 2026",
      title: "Onsite Regional Round",
      description: "2-day onsite contest hosted at GLA University, Mathura.",
      completed: false,
    },
  ];

  return (
    <div>
      {/* 1. Page Header */}
      <section className="page-header">
        <div className="container">
          <h1>Important Dates</h1>
          <p>ICPC Mathura 2026 — GLA University, Mathura</p>
        </div>
      </section>

      {/* 2. Timeline Section */}
      <section className="section" style={{ backgroundColor: 'var(--background)' }}>
        <div className="container" style={{ maxWidth: '1000px' }}>
          <div className="timeline-wrapper">
            {events.map((event, index) => {
              const alignmentClass = index % 2 === 0 ? "left" : "right";
              const dotStatusClass = event.completed ? "completed" : "upcoming";

              return (
                <div key={index} className={`timeline-item ${alignmentClass}`}>
                  {/* Timeline bullet dot */}
                  <div className={`timeline-dot ${dotStatusClass}`} title={event.completed ? "Completed Event" : "Upcoming Event"}></div>
                  
                  {/* Timeline Content Card */}
                  <div className="timeline-card">
                    <div className="timeline-date">{event.date}</div>
                    <h3 className="timeline-title">{event.title}</h3>
                    <p className="timeline-description">{event.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* 3. Notes Box */}
          <div className="notes-box">
            <span style={{ fontSize: '1.5rem' }}>ℹ️</span>
            <div>
              <strong>Please Note:</strong> All dates listed above are tentative and subject to change. Check back regularly for updates. For queries, contact us at{' '}
              <a href="mailto:icpc@gla.ac.in" style={{ color: 'var(--accent-hover)', fontWeight: 600 }}>
                icpc@gla.ac.in
              </a>
              .
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
