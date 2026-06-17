export default function About() {
  return (
    <div>
      <section className="page-header">
        <div className="container">
          <h1>About ICPC</h1>
          <p>The Olympics of Computer Programming</p>
        </div>
      </section>

      <section className="section" style={{ backgroundColor: 'var(--background)' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <div className="card-plain" style={{ marginBottom: '2.5rem', borderTop: '4px solid var(--accent)' }}>
            <h2 style={{ color: 'var(--primary-navy)', marginBottom: '1.25rem' }}>The Legacy of the ICPC</h2>
            <p className="text-muted" style={{ lineHeight: 1.7, fontSize: '1rem' }}>
              The <strong>International Collegiate Programming Contest (ICPC)</strong> is the premier global competitive programming competition for university students. Often called the <strong>"Olympics of Computer Science,"</strong> it is the oldest and largest contest of its kind, engaging over 73,000 students from 3,400+ universities across 100 countries annually.
            </p>
          </div>

          <div className="card-plain" style={{ borderTop: '4px solid var(--secondary-accent)' }}>
            <h2 style={{ color: 'var(--primary-navy)', marginBottom: '1.5rem' }}>Historical Evolution</h2>
            
            <div className="timeline" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', position: 'relative', paddingLeft: '1.5rem', borderLeft: '3px solid var(--accent)' }}>
              
              <div style={{ position: 'relative' }}>
                <div style={{ position: 'absolute', left: '-29px', top: '4px', width: '15px', height: '15px', borderRadius: '50%', backgroundColor: 'var(--accent)', border: '3px solid var(--card-bg)' }} />
                <h3 style={{ color: 'var(--primary-navy)', fontSize: '1.1rem', marginBottom: '0.5rem' }}>
                  <strong>1970</strong> (The Origin)
                </h3>
                <p className="text-muted" style={{ fontSize: '0.95rem', lineHeight: 1.6, margin: 0 }}>
                  The contest began at Texas A&M University, hosted by the Upsilon Pi Epsilon (UPE) honor society. Early competitors wrote solutions on paper, which were manually punched onto mainframe computing cards.
                </p>
              </div>

              <div style={{ position: 'relative' }}>
                <div style={{ position: 'absolute', left: '-29px', top: '4px', width: '15px', height: '15px', borderRadius: '50%', backgroundColor: 'var(--accent)', border: '3px solid var(--card-bg)' }} />
                <h3 style={{ color: 'var(--primary-navy)', fontSize: '1.1rem', marginBottom: '0.5rem' }}>
                  <strong>1977</strong> (First Finals)
                </h3>
                <p className="text-muted" style={{ fontSize: '0.95rem', lineHeight: 1.6, margin: 0 }}>
                  The inaugural ICPC World Finals took place in Atlanta, Georgia, with Michigan State University claiming the first title.
                </p>
              </div>

              <div style={{ position: 'relative' }}>
                <div style={{ position: 'absolute', left: '-29px', top: '4px', width: '15px', height: '15px', borderRadius: '50%', backgroundColor: 'var(--accent)', border: '3px solid var(--card-bg)' }} />
                <h3 style={{ color: 'var(--primary-navy)', fontSize: '1.1rem', marginBottom: '0.5rem' }}>
                  <strong>1989–2017</strong> (Global Expansion)
                </h3>
                <p className="text-muted" style={{ fontSize: '0.95rem', lineHeight: 1.6, margin: 0 }}>
                  Headquartered at Baylor University and boosted by a long-term partnership with IBM, the contest witnessed a 2,000% explosion in global participation.
                </p>
              </div>

              <div style={{ position: 'relative' }}>
                <div style={{ position: 'absolute', left: '-29px', top: '4px', width: '15px', height: '15px', borderRadius: '50%', backgroundColor: 'var(--accent)', border: '3px solid var(--card-bg)' }} />
                <h3 style={{ color: 'var(--primary-navy)', fontSize: '1.1rem', marginBottom: '0.5rem' }}>
                  <strong>2018–Present</strong>
                </h3>
                <p className="text-muted" style={{ fontSize: '0.95rem', lineHeight: 1.6, margin: 0 }}>
                  Today, the competition operates under the independent ICPC Foundation, serving as a massive global ecosystem for tech innovation.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
