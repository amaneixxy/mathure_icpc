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
            <h2 style={{ color: 'var(--primary-navy)', marginBottom: '1.25rem' }}>About ICPC</h2>
            <p className="text-muted" style={{ lineHeight: 1.8, fontSize: '1rem' }}>
              The International Collegiate Programming Contest (<strong>ICPC</strong>) traces its roots to 1970 when the first competition was hosted by pioneers of the Alpha Chapter of the UPE Computer Science Honor Society. The initiative spread quickly within the United States and Canada as an innovative program to raise ambition, problem-solving aptitude, and opportunities for the strongest students in the field of computing.
            </p>
            <p className="text-muted" style={{ lineHeight: 1.8, fontSize: '1rem', marginTop: '1rem' }}>
              Over time, the contest evolved into a multi-tier competition with the first championship round conducted in 1977. Since then, the contest has expanded into a worldwide collaborative of universities hosting regional competitions that advance teams to the annual global championship round, the ICPC World Finals.
            </p>
            <p className="text-muted" style={{ lineHeight: 1.8, fontSize: '1rem', marginTop: '1rem' }}>
              The ICPC is the premier global programming competition conducted by and for the world’s universities. It is affiliated with the ICPC Foundation and continues to foster creativity, teamwork, and innovation in building new software programs.
            </p>
            <p className="text-muted" style={{ lineHeight: 1.8, fontSize: '1rem', marginTop: '1rem' }}>
              The contest enables students to test their ability to perform under pressure and has raised aspirations and performance of generations of the world’s problem solvers in the computing sciences and engineering.
            </p>
          </div>

          <div className="card-plain" style={{ borderTop: '4px solid var(--secondary-accent)' }}>
            <h2 style={{ color: 'var(--primary-navy)', marginBottom: '1.5rem' }}>Competition Levels</h2>
            <ul style={{ paddingLeft: '1.25rem', lineHeight: 1.8, fontSize: '1rem', color: 'var(--text-secondary)' }}>
              <li>Local Contests</li>
              <li>Regional Contests</li>
              <li>Regional Championships</li>
              <li>The World Finals</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
