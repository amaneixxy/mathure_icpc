import { organizingCommitteeGroups } from '../data/people';

export default function People() {
  return (
    <div>
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1>Organizing Committee</h1>
          <p>ICPC Asia Region – Mathura Site | GLA University</p>
        </div>
      </section>

      {/* Main Section */}
      <section className="section" style={{ backgroundColor: 'var(--background)' }}>
        <div className="container" style={{ maxWidth: '1000px' }}>
          {organizingCommitteeGroups.map((group, gIdx) => (
            <div key={gIdx} style={{ marginBottom: '4rem' }}>
              {/* Category Title with Underline */}
              <div style={{ textAlign: 'center', marginBottom: '2.25rem' }}>
                <h2 
                  className="font-mono" 
                  style={{ 
                    fontSize: '1.5rem', 
                    color: 'var(--primary-navy)', 
                    fontWeight: 700, 
                    margin: 0,
                    letterSpacing: '-0.02em' 
                  }}
                >
                  {group.title}
                </h2>
                <div 
                  style={{ 
                    width: '48px', 
                    height: '3px', 
                    backgroundColor: 'var(--accent)', 
                    margin: '0.5rem auto 0 auto', 
                    borderRadius: '2px' 
                  }} 
                />
              </div>

              {/* Cards Grid (Strictly 2 cards per row for multiple members, centered for single member) */}
              <div 
                style={{ 
                  display: 'grid', 
                  gridTemplateColumns: group.members.length === 1 
                    ? 'minmax(280px, 460px)' 
                    : undefined,
                  justifyContent: 'center',
                  gap: '1.75rem'
                }}
                className={group.members.length > 1 ? 'grid grid-cols-2' : ''}
              >
                {group.members.map((member, mIdx) => (
                  <div 
                    key={mIdx} 
                    className="card-plain" 
                    style={{ 
                      backgroundColor: 'var(--primary-navy)', 
                      color: '#ffffff',
                      borderTop: '4px solid var(--accent)',
                      borderRadius: '16px',
                      padding: '2.25rem 1.75rem',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      textAlign: 'center',
                      gap: '1.25rem',
                      boxShadow: 'var(--shadow-md)',
                      position: 'relative',
                      overflow: 'hidden'
                    }}
                  >
                    {/* Avatar Badge */}
                    <div 
                      style={{ 
                        width: '80px', 
                        height: '80px', 
                        borderRadius: '50%', 
                        backgroundColor: 'var(--accent)', 
                        color: 'var(--primary-dark)',
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center', 
                        fontSize: '1.65rem', 
                        fontWeight: 700,
                        boxShadow: '0 0 16px rgba(255, 181, 102, 0.45)',
                        flexShrink: 0
                      }}
                    >
                      {member.initials}
                    </div>

                    {/* Content */}
                    <div style={{ width: '100%' }}>
                      <h3 
                        className="font-mono" 
                        style={{ 
                          color: '#ffffff', 
                          fontSize: '1.3rem', 
                          fontWeight: 700, 
                          marginBottom: '0.35rem',
                          letterSpacing: '-0.01em'
                        }}
                      >
                        {member.name}
                      </h3>

                      <div 
                        className="font-mono" 
                        style={{ 
                          color: 'var(--accent)', 
                          fontSize: '0.875rem', 
                          fontWeight: 700, 
                          marginBottom: '0.35rem' 
                        }}
                      >
                        {member.role}
                      </div>

                      <p style={{ color: 'rgba(255, 255, 255, 0.75)', fontSize: '0.85rem', margin: '0.15rem 0', lineHeight: 1.4 }}>
                        {member.dept}
                      </p>

                      <p style={{ color: 'rgba(255, 255, 255, 0.55)', fontSize: '0.8rem', margin: '0.15rem 0' }}>
                        {member.institution}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Acknowledgements */}
          <div className="text-center text-muted" style={{ fontSize: '0.95rem', fontStyle: 'italic', borderTop: '1px solid rgba(0,0,0,0.08)', paddingTop: '2.5rem', marginTop: '4rem' }}>
            We thank the GLA University administration, Computer Engineering and Applications department faculty, and all student volunteers who dedicate their time to make this contest possible. Special gratitude goes to the ICPC Asia Regional Contest Headquarters for their continuous operational guidance.
          </div>

        </div>
      </section>
    </div>
  );
}



