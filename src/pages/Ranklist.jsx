import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ranklistData } from '../data/ranklist';

export default function Ranklist() {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('rank'); // 'rank', 'solved', 'penalty'
  const [sortOrder, setSortOrder] = useState('asc'); // 'asc', 'desc'

  const handleSort = (field) => {
    if (sortBy === field) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(field);
      // 'solved' is best sorted high-to-low by default (desc)
      // 'rank' and 'penalty' are best sorted low-to-high by default (asc)
      setSortOrder(field === 'solved' ? 'desc' : 'asc');
    }
  };

  // 1. Filter data based on search input
  const filteredData = ranklistData.filter((team) => {
    const query = searchQuery.toLowerCase();
    return (
      team.name.toLowerCase().includes(query) ||
      team.institution.toLowerCase().includes(query)
    );
  });

  // 2. Sort filtered data
  const sortedData = [...filteredData].sort((a, b) => {
    let valueA = a[sortBy];
    let valueB = b[sortBy];

    if (sortBy === 'award') {
      valueA = a.award || '';
      valueB = b.award || '';
    }

    if (valueA < valueB) return sortOrder === 'asc' ? -1 : 1;
    if (valueA > valueB) return sortOrder === 'asc' ? 1 : -1;
    return 0;
  });

  const getAwardBadge = (award) => {
    if (!award) return null;
    if (award.includes('Gold')) return <span className="award-badge gold">{award}</span>;
    if (award.includes('Silver')) return <span className="award-badge silver">{award}</span>;
    if (award.includes('Bronze')) return <span className="award-badge bronze">{award}</span>;
    return <span className="award-badge mention">{award}</span>;
  };

  const getSortIndicator = (field) => {
    if (sortBy !== field) return " ↕";
    return sortOrder === 'asc' ? " ▲" : " ▼";
  };

  return (
    <div>
      {/* 1. Page Header */}
      <section className="page-header">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
            <span style={{ fontSize: '2.5rem', filter: 'drop-shadow(0 0 8px rgba(255,181,102,0.5))' }}>🏆</span>
            <h1>Official Ranklist</h1>
          </div>
          <p>ICPC Mathura 2026 — GLA University</p>
        </div>
      </section>

      <section className="section" style={{ backgroundColor: 'var(--background)' }}>
        <div className="container" style={{ maxWidth: '1000px' }}>
          
          {/* 2. Champion Highlight Card */}
          <div className="champion-card">
            <div className="champion-title">🏆 Mathura Site Champion 2026</div>
            <div className="champion-team">[TBD]</div>
            <div className="champion-institution">Institution: [TBD]</div>
            <div className="champion-badge">Advancing to ICPC Asia West Continent Championship</div>
          </div>

          <h2 className="section-title" style={{ display: 'block', textAlign: 'center', marginBottom: '2rem' }}>
            Standings Table
          </h2>

          {/* 3. Filter Bar */}
          <div className="filter-bar">
            <input
              type="text"
              className="search-input"
              placeholder="Search by team name or institution..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* Ranklist Table */}
          <div className="table-responsive">
            <table className="schedule-table">
              <thead>
                <tr>
                  <th 
                    className="sortable-th"
                    style={{ width: '12%' }}
                    onClick={() => handleSort('rank')}
                  >
                    Rank {getSortIndicator('rank')}
                  </th>
                  <th 
                    className="sortable-th"
                    style={{ width: '28%' }}
                    onClick={() => handleSort('name')}
                  >
                    Team Name {getSortIndicator('name')}
                  </th>
                  <th 
                    className="sortable-th"
                    style={{ width: '30%' }}
                    onClick={() => handleSort('institution')}
                  >
                    Institution {getSortIndicator('institution')}
                  </th>
                  <th 
                    className="sortable-th"
                    style={{ width: '15%', textAlign: 'center' }}
                    onClick={() => handleSort('solved')}
                  >
                    Solved {getSortIndicator('solved')}
                  </th>
                  <th 
                    className="sortable-th"
                    style={{ width: '15%', textAlign: 'center' }}
                    onClick={() => handleSort('penalty')}
                  >
                    Penalty {getSortIndicator('penalty')}
                  </th>
                  <th style={{ width: '20%' }}>Award</th>
                </tr>
              </thead>
              <tbody>
                {sortedData.length > 0 ? (
                  sortedData.map((team) => (
                    <tr key={team.rank}>
                      <td className="font-mono font-bold">{team.rank}</td>
                      <td className="font-bold" style={{ color: 'var(--primary-navy)' }}>{team.name}</td>
                      <td>{team.institution}</td>
                      <td className="font-mono font-bold" style={{ textAlign: 'center' }}>{team.solved}</td>
                      <td className="font-mono" style={{ textAlign: 'center', color: 'var(--muted-text)' }}>{team.penalty}</td>
                      <td>{getAwardBadge(team.award)}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="6" style={{ textAlign: 'center', padding: '2rem', color: 'var(--muted-text)' }}>
                      No matching teams found. Try another search query.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* 4. Download PDF Action */}
          <div className="text-center" style={{ margin: '2rem 0 4rem 0' }}>
            <a 
              href="/ranklist2026.pdf" 
              onClick={(e) => e.preventDefault()}
              className="btn btn-primary"
              style={{ display: 'inline-flex', gap: '0.5rem' }}
            >
              <span>📥</span> Download Official Ranklist (PDF)
            </a>
          </div>

          {/* 5. Past Results Section */}
          <div style={{ borderTop: '1px solid rgba(0,0,0,0.08)', paddingTop: '3rem' }}>
            <h2 className="section-title" style={{ display: 'block', textAlign: 'center', marginBottom: '2rem' }}>
              Previous Years Results
            </h2>
            
            <div className="past-results-grid">
              <div className="past-result-card">
                <div>
                  <div className="past-year">2024</div>
                  <div className="past-champion">🏆 Champion: CtrlAltDefeat</div>
                  <p className="text-muted" style={{ fontSize: '0.85rem', marginBottom: '1.25rem' }}>
                    Institution: IIT Kanpur
                  </p>
                </div>
                <Link to="/results/2024" className="btn btn-outline-white" style={{ border: '1.5px solid var(--secondary-accent)', color: 'var(--secondary-accent)', fontSize: '0.8rem', padding: '0.5rem 1rem' }}>
                  View Results &rarr;
                </Link>
              </div>

              <div className="past-result-card">
                <div>
                  <div className="past-year">2023</div>
                  <div className="past-champion">🏆 Champion: TemplateMagic</div>
                  <p className="text-muted" style={{ fontSize: '0.85rem', marginBottom: '1.25rem' }}>
                    Institution: IIT Roorkee
                  </p>
                </div>
                <Link to="/results/2023" className="btn btn-outline-white" style={{ border: '1.5px solid var(--secondary-accent)', color: 'var(--secondary-accent)', fontSize: '0.8rem', padding: '0.5rem 1rem' }}>
                  View Results &rarr;
                </Link>
              </div>

              <div className="past-result-card">
                <div>
                  <div className="past-year">2022</div>
                  <div className="past-champion">🏆 Champion: O(1)Dream</div>
                  <p className="text-muted" style={{ fontSize: '0.85rem', marginBottom: '1.25rem' }}>
                    Institution: IIT Bombay
                  </p>
                </div>
                <Link to="/results/2022" className="btn btn-outline-white" style={{ border: '1.5px solid var(--secondary-accent)', color: 'var(--secondary-accent)', fontSize: '0.8rem', padding: '0.5rem 1rem' }}>
                  View Results &rarr;
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
