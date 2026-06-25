import { useState } from 'react';
import { onsiteTeams } from '../data/onsiteTeams';

// Toggle this boolean flag to change the publication status of the onsite list
const IS_PUBLISHED = false;
const PUBLISHED_DATE = "June 15, 2026";

export default function OnsiteTeams() {
  const [searchQuery, setSearchQuery] = useState('');

  // Filter teams based on query
  const filteredTeams = onsiteTeams.filter((team) => {
    const query = searchQuery.toLowerCase();
    return (
      team.name.toLowerCase().includes(query) ||
      team.institution.toLowerCase().includes(query)
    );
  });

  return (
    <div>
      {/* 1. Page Header */}
      <section className="page-header">
        <div className="container">
          <h1>Onsite Teams</h1>
          <p>ICPC Mathura 2026 — Selected Teams for Onsite Round</p>
        </div>
      </section>

      {/* Main Section */}
      <section className="section" style={{ backgroundColor: 'var(--background)' }}>
        <div className="container" style={{ maxWidth: '1000px' }}>

          {/* 2. Status Banner */}
          <div style={{ marginBottom: '2.5rem' }}>
            {IS_PUBLISHED ? (
              <div
                className="card-plain"
                style={{
                  borderLeft: '4px solid #27c93f',
                  backgroundColor: 'rgba(39, 201, 63, 0.05)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem'
                }}
              >
                <span style={{ fontSize: '1.5rem' }}>📢</span>
                <div>
                  <strong style={{ color: 'var(--primary-navy)' }}>Onsite List Published!</strong>
                  <div className="text-muted" style={{ fontSize: '0.875rem', marginTop: '0.25rem' }}>
                    The list of teams selected from the Preliminary Online Round was published on <strong>{PUBLISHED_DATE}</strong>.
                  </div>
                </div>
              </div>
            ) : (
              <div className="card-plain text-center">
                <span style={{ fontSize: '2.5rem', display: 'block', marginBottom: '1rem' }}>⏳</span>
                <h3 style={{ color: 'var(--primary-navy)', marginBottom: '0.5rem' }}>List Not Yet Published</h3>
                <p className="text-muted" style={{ maxWidth: '600px', marginInline: 'auto' }}>
                  The list of selected teams will be published after the Preliminary Online Round has concluded. Check back soon for updates.
                </p>
              </div>
            )}
          </div>

          {/* 3. Teams Table (only render if list is published) */}
          {IS_PUBLISHED && (
            <div>
              <h2 className="section-title" style={{ display: 'block', textAlign: 'center', marginBottom: '2rem' }}>
                Selected Teams Standings
              </h2>

              {/* Filter search bar */}
              <div className="filter-bar">
                <input
                  type="text"
                  className="search-input"
                  placeholder="Search by team name or institution..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              {/* Table */}
              <div className="table-responsive">
                <table className="schedule-table">
                  <thead>
                    <tr>
                      <th style={{ width: '10%' }}>#</th>
                      <th style={{ width: '30%' }}>Team Name</th>
                      <th style={{ width: '30%' }}>Institution</th>
                      <th style={{ width: '15%' }}>Coach Name</th>
                      <th style={{ width: '15%' }}>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredTeams.length > 0 ? (
                      filteredTeams.map((team, index) => (
                        <tr key={team.id}>
                          <td className="font-mono">{index + 1}</td>
                          <td className="font-bold" style={{ color: 'var(--primary-navy)' }}>{team.name}</td>
                          <td>{team.institution}</td>
                          <td>{team.coach}</td>
                          <td>
                            <span className={team.status === "Confirmed" ? "badge-confirmed" : "badge-waitlisted"}>
                              {team.status}
                            </span>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="5" style={{ textAlign: 'center', padding: '2rem', color: 'var(--muted-text)' }}>
                          No matching teams found. Try searching with a different keyword.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>

              {/* 4. Download Full List PDF Action */}
              <div className="text-center" style={{ marginTop: '2.5rem' }}>
                <a
                  href="/onsite_teams_list.pdf"
                  onClick={(e) => e.preventDefault()}
                  className="btn btn-primary"
                  style={{ display: 'inline-flex', gap: '0.5rem' }}
                >
                  <span>📥</span> Download Full List (PDF)
                </a>
              </div>
            </div>
          )}

        </div>
      </section>
    </div>
  );
}
