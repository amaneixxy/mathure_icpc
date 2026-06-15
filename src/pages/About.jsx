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
            <h2 style={{ color: 'var(--primary-navy)', marginBottom: '1.25rem' }}>A Little About Us</h2>
            <p className="text-muted" style={{ lineHeight: 1.7, fontSize: '1rem', marginBottom: '1.25rem' }}>
              The <strong>International Collegiate Programming Contest (ICPC)</strong> is the premier global competitive programming contest conducted for university students. Over the past decades, the ICPC has grown to become the largest and most prestigious computer science competition in the world, fostering creativity, teamwork, and innovation in building new software programs.
            </p>
            <p className="text-muted" style={{ lineHeight: 1.7, fontSize: '1rem', marginBottom: '1.25rem' }}>
              Teams of three students represent their university to solve complex algorithmic and mathematical problems. The contest tests their programming capabilities, logical reasoning, and mental endurance under a strict 5-hour time constraint.
            </p>
          </div>

          <div className="card-plain" style={{ borderTop: '4px solid var(--secondary-accent)' }}>
            <h2 style={{ color: 'var(--primary-navy)', marginBottom: '1.25rem' }}>GLA University & Mathura Site</h2>
            <p className="text-muted" style={{ lineHeight: 1.7, fontSize: '1rem', marginBottom: '1.25rem' }}>
              The <strong>ICPC Asia Region Mathura Site</strong> is officially hosted by <strong>GLA University, Mathura</strong>. GLA University has been a hub of academic excellence in engineering and technology, providing state-of-the-art lab infrastructures and resources for high-caliber programming rounds.
            </p>
            <p className="text-muted" style={{ lineHeight: 1.7, fontSize: '1rem' }}>
              Led by Regional Contest Director (RCD) <strong>Dr. Rohit Agarwal</strong>, the Mathura site brings together the finest programming talent from across India. The winners of this regional site advance directly to the ICPC Asia West Continent Championship and eventually compete on the world stage in the ICPC World Finals.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
