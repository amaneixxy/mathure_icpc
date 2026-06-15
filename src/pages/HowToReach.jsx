export default function HowToReach() {
  const distances = [
    { from: "Delhi (via Yamuna Expressway)", dist: "~145 km", time: "~2.5 hours" },
    { from: "Agra", dist: "~55 km", time: "~1 hour" },
    { from: "Kanpur", dist: "~270 km", time: "~4.5 hours" },
    { from: "Lucknow", dist: "~320 km", time: "~5 hours" },
  ];

  return (
    <div>
      {/* 1. Page Header */}
      <section className="page-header">
        <div className="container">
          <h1>How to Reach</h1>
          <p style={{ color: '#ffffff', opacity: 0.9, marginTop: '0.5rem', fontFamily: 'var(--font-body)', fontSize: '0.95rem' }}>
            GLA University, 17km Stone, NH-2, Mathura-Delhi Road, Mathura — 281406, Uttar Pradesh, India
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section" style={{ backgroundColor: 'var(--background)' }}>
        <div className="container" style={{ maxWidth: '1100px' }}>
          
          <h2 className="section-title" style={{ display: 'block', textAlign: 'center', marginBottom: '3rem' }}>
            Travel Guide & Modes
          </h2>

          {/* 3 Travel Mode Cards */}
          <div className="grid grid-cols-3" style={{ gap: '1.5rem', marginBottom: '4rem' }}>
            {/* By Train */}
            <div className="card-plain" style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <span style={{ fontSize: '2.5rem', marginBottom: '0.25rem' }}>🚂</span>
              <h3 style={{ color: 'var(--primary-navy)', fontWeight: 700 }}>By Train</h3>
              <p className="text-muted" style={{ fontSize: '0.9rem', lineHeight: 1.6 }}>
                <strong>Mathura Junction (MTJ)</strong> is the nearest railway station, well connected to Delhi, Agra, Kanpur, Mumbai, and most major Indian cities.
              </p>
              <p className="text-muted" style={{ fontSize: '0.9rem', lineHeight: 1.6, borderTop: '1px solid rgba(0,0,0,0.06)', paddingTop: '0.75rem' }}>
                <em>From Mathura Junction:</em> Take a local auto-rickshaw or taxi cab (~20 mins, ~10 km) directly to GLA University campus on NH-2 (Mathura-Delhi Highway).
              </p>
            </div>

            {/* By Road */}
            <div className="card-plain" style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <span style={{ fontSize: '2.5rem', marginBottom: '0.25rem' }}>🚗</span>
              <h3 style={{ color: 'var(--primary-navy)', fontWeight: 700 }}>By Road</h3>
              <p className="text-muted" style={{ fontSize: '0.9rem', lineHeight: 1.6 }}>
                GLA University is located directly on <strong>National Highway 2 (NH-2, Mathura-Delhi Road)</strong>, roughly 17 km from Mathura city center.
              </p>
              <div style={{ marginTop: 'auto', borderTop: '1px solid rgba(0,0,0,0.06)', paddingTop: '0.75rem' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.8rem', textAlign: 'left' }}>
                  <thead>
                    <tr style={{ borderBottom: '1px solid rgba(0,0,0,0.1)' }}>
                      <th>From</th>
                      <th>Dist</th>
                      <th>Time</th>
                    </tr>
                  </thead>
                  <tbody>
                    {distances.map((d, index) => (
                      <tr key={index} style={{ borderBottom: '1px solid rgba(0,0,0,0.04)' }}>
                        <td style={{ padding: '0.35rem 0', fontWeight: 600 }}>{d.from.split(" ")[0]}</td>
                        <td style={{ padding: '0.35rem 0' }}>{d.dist}</td>
                        <td style={{ padding: '0.35rem 0' }}>{d.time}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* By Air */}
            <div className="card-plain" style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <span style={{ fontSize: '2.5rem', marginBottom: '0.25rem' }}>✈️</span>
              <h3 style={{ color: 'var(--primary-navy)', fontWeight: 700 }}>By Air</h3>
              <p className="text-muted" style={{ fontSize: '0.9rem', lineHeight: 1.6 }}>
                <strong>Agra Airport (AGR)</strong> is the closest local terminal (~60 km away).
              </p>
              <p className="text-muted" style={{ fontSize: '0.9rem', lineHeight: 1.6 }}>
                <strong>Indira Gandhi International Airport (DEL)</strong> in Delhi (~160 km away) has comprehensive global connectivity.
              </p>
              <p className="text-muted" style={{ fontSize: '0.9rem', lineHeight: 1.6, borderTop: '1px solid rgba(0,0,0,0.06)', paddingTop: '0.75rem' }}>
                <em>From Airport:</em> Hire a pre-paid taxi or travel via Yamuna Expressway to arrive at GLA University campus.
              </p>
            </div>
          </div>

          {/* 5. Google Maps Embed */}
          <h2 className="section-title" style={{ display: 'block', textAlign: 'center', marginBottom: '2rem' }}>
            Google Maps Location
          </h2>
          <div style={{ borderRadius: 'var(--border-radius)', overflow: 'hidden', boxShadow: 'var(--shadow-lg)', marginBottom: '3rem', border: '2px solid var(--accent)' }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3549.4447479707166!2d77.59253457544865!3d27.611116276239166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39736ce114c00001%3A0xc395f191b79a5cc6!2sGLA%20University!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="GLA University Mathura Google Maps Location"
            ></iframe>
          </div>

          {/* 6. On-Campus Info Alert Box */}
          <div className="notes-box">
            <span style={{ fontSize: '1.75rem' }}>🚩</span>
            <div>
              <strong>On-Campus Directions:</strong> Once you arrive at the GLA University main gate, please follow the designated ICPC signposts to direct you to the <strong>Main Auditorium</strong> and <strong>Computer Science Department</strong> labs. Student volunteer coordinators will be posted at the entry checkpoint to assist you with registration badges and luggage routing.
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
