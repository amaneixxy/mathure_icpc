import { useParams, Link } from 'react-router-dom';
import { pastResults } from '../data/results';

export default function Results() {
  const { year } = useParams();
  const yearData = pastResults[year];

  // Graceful handling of invalid or missing years
  if (!yearData) {
    return (
      <div>
        <section className="page-header">
          <div className="container">
            <h1>Results Not Found</h1>
            <p>Contest Results — ICPC Mathura</p>
          </div>
        </section>
        <section className="section" style={{ backgroundColor: 'var(--background)' }}>
          <div className="container text-center" style={{ maxWidth: '600px' }}>
            <div className="card-plain">
              <span style={{ fontSize: '2.5rem', display: 'block', marginBottom: '1rem' }}>⚠️</span>
              <h3 style={{ color: 'var(--primary-navy)', marginBottom: '1rem' }}>No Data Available</h3>
              <p className="text-muted" style={{ marginBottom: '2rem' }}>
                We do not have historical results records available for the year <strong>{year}</strong>.
              </p>
              <Link to="/ranklist" className="btn btn-primary">
                &larr; Back to Ranklist
              </Link>
            </div>
          </div>
        </section>
      </div>
    );
  }

  // Find the champion team (Rank 1)
  const championTeam = yearData.find(team => team.rank === 1) || yearData[0];

  const getAwardBadge = (award) => {
    if (!award) return null;
    if (award.includes('Gold')) return <span className="award-badge gold">{award}</span>;
    if (award.includes('Silver')) return <span className="award-badge silver">{award}</span>;
    if (award.includes('Bronze')) return <span className="award-badge bronze">{award}</span>;
    return <span className="award-badge mention">{award}</span>;
  };

  return (
    <div>
      {/* 1. Page Header */}
      <section className="page-header">
        <div className="container">
          <h1>Contest Results — {year}</h1>
          <p>ICPC Mathura Site Archives</p>
        </div>
      </section>

      {/* Main Section */}
      <section className="section" style={{ backgroundColor: 'var(--background)' }}>
        <div className="container" style={{ maxWidth: '1000px' }}>
          
          {/* Back Button */}
          <div style={{ marginBottom: '1.5rem' }}>
            <Link to="/ranklist" style={{ color: 'var(--accent-hover)', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}>
              &larr; Back to Ranklist
            </Link>
          </div>

          {/* 2. Winner Card */}
          {championTeam && (
            <div className="champion-card">
              <div className="champion-title">🏆 Mathura Site Champion {year}</div>
              <div className="champion-team">{championTeam.name}</div>
              <div className="champion-institution">Institution: {championTeam.institution}</div>
              <div className="champion-badge">Solved {championTeam.solved} Problems</div>
            </div>
          )}

          <h2 className="section-title" style={{ display: 'block', textAlign: 'center', marginBottom: '2.5rem' }}>
            Official Standings {year}
          </h2>

          {/* 3. Results Table */}
          <div className="table-responsive" style={{ marginBottom: '3rem' }}>
            <table className="schedule-table">
              <thead>
                <tr>
                  <th style={{ width: '12%' }}>Rank</th>
                  <th style={{ width: '38%' }}>Team Name</th>
                  <th style={{ width: '30%' }}>Institution</th>
                  <th style={{ width: '10%', textAlign: 'center' }}>Solved</th>
                  <th style={{ width: '10%', textAlign: 'center' }}>Penalty</th>
                  <th style={{ width: '20%' }}>Award</th>
                </tr>
              </thead>
              <tbody>
                {yearData.map((team) => (
                  <tr key={team.rank}>
                    <td className="font-mono font-bold">{team.rank}</td>
                    <td className="font-bold" style={{ color: 'var(--primary-navy)' }}>{team.name}</td>
                    <td>{team.institution}</td>
                    <td className="font-mono font-bold" style={{ textAlign: 'center' }}>{team.solved}</td>
                    <td className="font-mono" style={{ textAlign: 'center', color: 'var(--muted-text)' }}>{team.penalty}</td>
                    <td>{getAwardBadge(team.award)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* 4 & 5. Problem Set and Director's Report Actions */}
          <div className="grid grid-cols-2" style={{ gap: '1.5rem', marginBottom: '2rem' }}>
            <div className="card-plain text-center" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem' }}>
              <span style={{ fontSize: '2rem' }}>📝</span>
              <h3 style={{ color: 'var(--primary-navy)' }}>Problem Set {year}</h3>
              <p className="text-muted" style={{ fontSize: '0.85rem' }}>
                Download the official problem statement bundle from the {year} onsite round.
              </p>
              <a 
                href={`/problems-${year}.pdf`} 
                onClick={(e) => e.preventDefault()}
                className="btn btn-outline-white" 
                style={{ border: '2px solid var(--secondary-accent)', color: 'var(--secondary-accent)', fontSize: '0.9rem', marginTop: '0.5rem' }}
              >
                Download Problem Set (PDF)
              </a>
            </div>

            <div className="card-plain text-center" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem' }}>
              <span style={{ fontSize: '2rem' }}>📊</span>
              <h3 style={{ color: 'var(--primary-navy)' }}>Director's Report {year}</h3>
              <p className="text-muted" style={{ fontSize: '0.85rem' }}>
                Read the final summary, stats, and official reviews of the {year} regional.
              </p>
              <a 
                href={`/report-${year}.pdf`} 
                onClick={(e) => e.preventDefault()}
                className="btn btn-outline-white" 
                style={{ border: '2px solid var(--secondary-accent)', color: 'var(--secondary-accent)', fontSize: '0.9rem', marginTop: '0.5rem' }}
              >
                Download Director's Report (PDF)
              </a>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
