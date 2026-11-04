import { useState, useMemo } from 'react';
import { selectedTeams, waitingList } from '../data/selectedTeamsData';

export default function Ranklist() {
  const [searchSelected, setSearchSelected] = useState('');
  const [quotaFilter, setQuotaFilter] = useState('all'); // 'all', 'General', 'Female'
  const [searchWaiting, setSearchWaiting] = useState('');

  // Summary counts
  const totalSelected = selectedTeams.length;
  const generalSelected = selectedTeams.filter((t) => t.quota === 'General').length;
  const womenSelected = selectedTeams.filter((t) => t.quota === 'Female').length;
  const totalWaiting = waitingList.length;

  // Filter selected teams
  const filteredSelectedTeams = useMemo(() => {
    const q = searchSelected.trim().toLowerCase();
    return selectedTeams.filter((team) => {
      const matchesSearch =
        !q ||
        team.teamName.toLowerCase().includes(q) ||
        team.institute.toLowerCase().includes(q) ||
        team.teamId.toLowerCase().includes(q);

      const matchesQuota =
        quotaFilter === 'all' ||
        (quotaFilter === 'General' && team.quota === 'General') ||
        (quotaFilter === 'Female' && team.quota === 'Female');

      return matchesSearch && matchesQuota;
    });
  }, [searchSelected, quotaFilter]);

  // Filter waiting list
  const filteredWaitingList = useMemo(() => {
    const q = searchWaiting.trim().toLowerCase();
    return waitingList.filter((team) => {
      return (
        !q ||
        team.teamName.toLowerCase().includes(q) ||
        team.institute.toLowerCase().includes(q) ||
        team.teamId.toLowerCase().includes(q)
      );
    });
  }, [searchWaiting]);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="ranklist-page-wrapper">
      {/* Top Container */}
      <div className="container" style={{ maxWidth: '1100px', paddingTop: '2.5rem', paddingBottom: '4rem' }}>

        {/* ========================================================
            1. Dark Hero Banner (Matches Image 2 Top Section)
           ======================================================== */}
        <div className="ranklist-hero-card">
          {/* Right edge colored stripes (ICPC colors) */}
          <div className="ranklist-hero-stripes" aria-hidden="true">
            <span className="stripe-blue"></span>
            <span className="stripe-yellow"></span>
            <span className="stripe-red"></span>
          </div>

          <div className="ranklist-hero-content">
            <div className="ranklist-hero-kicker">ICPC MATHURA REGIONAL 2026</div>
            <h1 className="ranklist-hero-title">
              Selected Teams for the Mathura Onsite Contest
            </h1>
            <p className="ranklist-hero-subtitle">
              <strong>{totalSelected} selected teams:</strong> {generalSelected} General quota and {womenSelected} All Women quota.
            </p>
            <p className="ranklist-hero-note">
              Serial numbers indicate display order, not contest standing.
            </p>

            {/* Quick Jump Buttons to Sections on Page */}
            <div className="ranklist-tabs-group">
              <button
                type="button"
                className="ranklist-tab-btn active"
                onClick={() => scrollToSection('selected-teams')}
              >
                Selected teams ({totalSelected}) ↓
              </button>
              <button
                type="button"
                className="ranklist-tab-btn"
                onClick={() => scrollToSection('waiting-list')}
              >
                Waiting list ({totalWaiting}) ↓
              </button>
            </div>
          </div>
        </div>

        {/* ========================================================
            2. Next Steps For Selected Teams (Matches Image 2 Bottom)
           ======================================================== */}
        <div className="next-steps-card">
          <h2 className="next-steps-heading">Next steps for selected teams</h2>

          <div className="next-steps-grid">
            {/* Step 1 Box */}
            <div className="next-step-box step-box-email">
              <div className="next-step-label">01 · LOOK OUT FOR YOUR EMAIL</div>
              <div className="next-step-date-title">By 5 November 2026</div>
              <div className="next-step-time">10:00 PM IST</div>
              <p className="next-step-text">
                Selected teams will receive an email containing the <strong>fee-payment link</strong> and <strong>onsite registration form link</strong>.
              </p>
            </div>

            {/* Step 2 Box */}
            <div className="next-step-box step-box-onsite">
              <div className="next-step-label">02 · COMPLETE BOTH FORMALITIES</div>
              <div className="next-step-date-title">By 16 November 2026</div>
              <div className="next-step-time">5:00 PM IST</div>
              <p className="next-step-text">
                Teams must <strong>complete the fee payment</strong> and <strong>submit the onsite registration form</strong> by this deadline.
              </p>
            </div>
          </div>

          {/* Warning / Important Callout */}
          <div className="next-step-alert">
            <strong>Important:</strong> Both the fee payment and registration form submission are mandatory. Teams failing to complete either of these requirements within the deadline will forfeit their slot, which will be offered to the next eligible team on the waiting list.
          </div>
        </div>

        {/* ========================================================
            3. SECTION 1: SELECTED TEAMS TABLE (Matches Image 3)
           ======================================================== */}
        <section id="selected-teams" className="tab-pane-section" style={{ scrollMarginTop: '2rem' }}>
          <div className="table-section-header">
            <h2 className="table-section-title">Selected Teams</h2>
            <p className="table-section-subtitle">
              Scroll horizontally on smaller screens to view all columns.
            </p>
          </div>

          {/* Search & Filter Toolbar */}
          <div className="ranklist-toolbar">
            <div className="ranklist-search-wrapper">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
              <input
                type="text"
                className="ranklist-search-input"
                placeholder="Search selected teams by name, ID, or institute..."
                value={searchSelected}
                onChange={(e) => setSearchSelected(e.target.value)}
              />
              {searchSelected && (
                <button
                  type="button"
                  onClick={() => setSearchSelected('')}
                  className="ranklist-search-clear"
                  title="Clear search"
                >
                  ×
                </button>
              )}
            </div>

            {/* Filter chips */}
            <div className="ranklist-filter-chips">
              <button
                type="button"
                className={`filter-chip ${quotaFilter === 'all' ? 'active' : ''}`}
                onClick={() => setQuotaFilter('all')}
              >
                All ({totalSelected})
              </button>
              <button
                type="button"
                className={`filter-chip ${quotaFilter === 'General' ? 'active' : ''}`}
                onClick={() => setQuotaFilter('General')}
              >
                General ({generalSelected})
              </button>
              <button
                type="button"
                className={`filter-chip ${quotaFilter === 'Female' ? 'active' : ''}`}
                onClick={() => setQuotaFilter('Female')}
              >
                All Women ({womenSelected})
              </button>
            </div>
          </div>

          {/* Card Containing the Table */}
          <div className="ranklist-table-card">
            <div className="table-card-topbar">
              <span>Selected teams, sorted alphabetically by institute name</span>
              <span className="table-count-badge">
                Showing {filteredSelectedTeams.length} of {totalSelected} teams
              </span>
            </div>

            <div className="table-responsive">
              <table className="ranklist-table">
                <thead>
                  <tr>
                    <th style={{ width: '8%', textAlign: 'center' }}>Sl No</th>
                    <th style={{ width: '28%' }}>Team Name</th>
                    <th style={{ width: '16%' }}>Team ID</th>
                    <th style={{ width: '33%' }}>Institute Name</th>
                    <th style={{ width: '15%', textAlign: 'center' }}>Selection Quota</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredSelectedTeams.length > 0 ? (
                    filteredSelectedTeams.map((team) => (
                      <tr key={team.serialNo}>
                        <td className="col-sl-no">{team.serialNo}</td>
                        <td className="col-team-name">{team.teamName}</td>
                        <td className="col-team-id">{team.teamId}</td>
                        <td className="col-institute">{team.institute}</td>
                        <td style={{ textAlign: 'center' }}>
                          {team.quota === 'Female' ? (
                            <span className="quota-pill quota-female" title="All Women Quota">
                              All Women
                            </span>
                          ) : (
                            <span className="quota-pill quota-general">
                              General
                            </span>
                          )}
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="5" className="table-empty-message">
                        No matching teams found. Try adjusting your search query or filter.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Visual Section Divider */}
        <div style={{ margin: '4rem 0 3rem 0', borderTop: '2px dashed #cbd5e1' }} />

        {/* ========================================================
            4. SECTION 2: WAITING LIST TABLE (Matches Image 4)
           ======================================================== */}
        <section id="waiting-list" className="tab-pane-section" style={{ scrollMarginTop: '2rem' }}>
          <div className="table-section-header">
            <h2 className="table-section-title">
              Waiting List — {totalWaiting} Teams
            </h2>
          </div>

          {/* Yellow Warning Callout (Matches Image 4) */}
          <div className="waiting-warning-callout">
            The waiting list is shown in waiting-list priority order, not institute-name order. Inclusion in this list does not confirm selection.
          </div>

          {/* Search Toolbar */}
          <div className="ranklist-toolbar">
            <div className="ranklist-search-wrapper">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
              <input
                type="text"
                className="ranklist-search-input"
                placeholder="Search waiting list by team, ID, or institute..."
                value={searchWaiting}
                onChange={(e) => setSearchWaiting(e.target.value)}
              />
              {searchWaiting && (
                <button
                  type="button"
                  onClick={() => setSearchWaiting('')}
                  className="ranklist-search-clear"
                  title="Clear search"
                >
                  ×
                </button>
              )}
            </div>
          </div>

          {/* Card Containing the Table */}
          <div className="ranklist-table-card">
            <div className="table-card-topbar">
              <span>Waiting list, in priority order</span>
              <span className="table-count-badge">
                Showing {filteredWaitingList.length} of {totalWaiting} teams
              </span>
            </div>

            <div className="table-responsive">
              <table className="ranklist-table">
                <thead>
                  <tr>
                    <th style={{ width: '16%', textAlign: 'center' }}>Waiting List No.</th>
                    <th style={{ width: '26%' }}>Team Name</th>
                    <th style={{ width: '16%' }}>Team ID</th>
                    <th style={{ width: '27%' }}>Institute Name</th>
                    <th style={{ width: '15%', textAlign: 'center' }}>Selection Quota</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredWaitingList.length > 0 ? (
                    filteredWaitingList.map((team) => (
                      <tr key={team.serialNo}>
                        <td className="col-sl-no">{team.serialNo}</td>
                        <td className="col-team-name">{team.teamName}</td>
                        <td className="col-team-id">{team.teamId}</td>
                        <td className="col-institute">{team.institute}</td>
                        <td style={{ textAlign: 'center' }}>
                          {team.quota === 'Female' ? (
                            <span className="quota-pill quota-female" title="All Women Quota">
                              All Women
                            </span>
                          ) : (
                            <span className="quota-pill quota-general">
                              General
                            </span>
                          )}
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="5" className="table-empty-message">
                        No matching teams found in the waiting list.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
