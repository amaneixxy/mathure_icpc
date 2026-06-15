import { Link } from 'react-router-dom';

export default function ProblemArchive() {
  const archives = [
    { year: 2024, champion: "CtrlAltDefeat (IIT Kanpur)", solved: "11/12 Problems" },
    { year: 2023, champion: "TemplateMagic (IIT Roorkee)", solved: "10/11 Problems" },
    { year: 2022, champion: "O(1)Dream (IIT Bombay)", solved: "11/12 Problems" },
  ];

  return (
    <div>
      <section className="page-header">
        <div className="container">
          <h1>Problem Archive</h1>
          <p>Past contests problem statements and practice portals</p>
        </div>
      </section>

      <section className="section" style={{ backgroundColor: 'var(--background)' }}>
        <div className="container" style={{ maxWidth: '1000px' }}>

          {/* Practice Portals */}
          <div className="card-plain" style={{ marginBottom: '3rem', borderTop: '4px solid var(--accent)' }}>
            <h2 style={{ color: 'var(--primary-navy)', fontSize: '1.4rem', fontWeight: 700, marginBottom: '1rem' }}>
              Practice Portals
            </h2>
            <p className="text-muted" style={{ fontSize: '0.95rem', marginBottom: '1.5rem' }}>
              Sharpen your algorithmic skills and practice on mock problems by visiting the official ICPC training grounds:
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a 
                href="https://icpc.global" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-primary"
              >
                ICPC Global Practice Portal &rarr;
              </a>
              <a 
                href="https://blog.icpc.global" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-outline-white"
                style={{ border: '2px solid var(--secondary-accent)', color: 'var(--secondary-accent)' }}
              >
                ICPC Asia Practice Resources
              </a>
            </div>
          </div>

          {/* Past Problem Set Download Grids */}
          <h2 className="section-title" style={{ display: 'block', textAlign: 'center', marginBottom: '2.5rem' }}>
            Previous Years Problem Sets
          </h2>

          <div className="grid grid-cols-3" style={{ gap: '1.5rem', marginBottom: '3rem' }}>
            {archives.map((item) => (
              <div key={item.year} className="past-result-card" style={{ borderTop: '4px solid var(--secondary-accent)' }}>
                <div>
                  <div className="past-year">{item.year} Regional</div>
                  <div className="past-champion">🏆 Champion: {item.champion.split(" ")[0]}</div>
                  <p className="text-muted" style={{ fontSize: '0.85rem', marginBottom: '1rem' }}>
                    Top solved: <strong>{item.solved}</strong>
                  </p>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginTop: '1rem' }}>
                  <a 
                    href={`/problems-${item.year}.pdf`} 
                    onClick={(e) => e.preventDefault()}
                    className="btn btn-primary" 
                    style={{ fontSize: '0.8rem', padding: '0.5rem 1rem' }}
                  >
                    Download PDF
                  </a>
                  <Link 
                    to={`/results/${item.year}`} 
                    className="btn btn-outline-white text-center" 
                    style={{ border: '1px solid var(--secondary-accent)', color: 'var(--secondary-accent)', fontSize: '0.8rem', padding: '0.5rem 1rem' }}
                  >
                    View Scoreboard
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Important Links Alert */}
          <div className="notes-box">
            <span style={{ fontSize: '1.5rem' }}>ℹ️</span>
            <div>
              <strong>Looking for links?</strong> You can find links to the ICPC Global Registration platform and the ICPC Asia West Continent Championship portals in the footer.
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
