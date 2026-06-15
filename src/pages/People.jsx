import { RCD, committees } from '../data/people';

export default function People() {
  const getInitials = (name) => {
    return name
      .replace(/Dr\.|Prof\.|Mr\.|Mrs\./g, '')
      .trim()
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase();
  };

  return (
    <div>
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1>Organizing Committee</h1>
          <p>GLA University, Mathura</p>
        </div>
      </section>

      {/* Main Section */}
      <section className="section" style={{ backgroundColor: 'var(--background)' }}>
        <div className="container" style={{ maxWidth: '1000px' }}>
          
          {/* Regional Contest Director Card (Full Width) */}
          <div 
            className="card-plain" 
            style={{ 
              backgroundColor: 'var(--primary-navy)', 
              color: '#ffffff',
              borderTop: '5px solid var(--accent)',
              padding: '2.5rem',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              gap: '1.25rem',
              marginBottom: '4rem',
              boxShadow: 'var(--shadow-lg)'
            }}
          >
            <div 
              style={{ 
                width: '100px', 
                height: '100px', 
                borderRadius: '50%', 
                backgroundColor: 'var(--accent)', 
                color: 'var(--primary-dark)',
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                fontSize: '2rem', 
                fontWeight: 700,
                boxShadow: '0 0 15px rgba(255, 181, 102, 0.4)'
              }}
            >
              {RCD.initials}
            </div>
            <div>
              <h2 style={{ color: '#ffffff', fontSize: '1.75rem', fontWeight: 700, marginBottom: '0.25rem' }}>{RCD.name}</h2>
              <p className="font-mono" style={{ color: 'var(--accent)', fontSize: '0.95rem', fontWeight: 600 }}>
                {RCD.role}
              </p>
              <p style={{ color: 'rgba(255, 255, 255, 0.75)', fontSize: '0.875rem', marginTop: '0.25rem' }}>
                {RCD.dept}
              </p>
              <p style={{ color: 'rgba(255, 255, 255, 0.55)', fontSize: '0.85rem', marginTop: '0.25rem' }}>
                {RCD.institution}
              </p>
            </div>
          </div>

          {/* Grouped Committees */}
          {committees.map((committee, idx) => (
            <div key={idx} style={{ marginBottom: '3.5rem' }}>
              <h2 className="section-title" style={{ display: 'block', textAlign: 'center', marginBottom: '2rem', fontSize: '1.4rem' }}>
                {committee.title}
              </h2>
              
              <div className="grid grid-cols-2" style={{ gap: '1.5rem' }}>
                {committee.members.map((member, mIdx) => (
                  <div 
                    key={mIdx} 
                    className="card-plain" 
                    style={{ 
                      display: 'flex', 
                      flexDirection: 'column', 
                      alignItems: 'center', 
                      textAlign: 'center',
                      padding: '2rem 1.5rem',
                      gap: '1rem',
                      borderTop: '3px solid var(--secondary-accent)'
                    }}
                  >
                    <div 
                      style={{ 
                        width: '64px', 
                        height: '64px', 
                        borderRadius: '50%', 
                        backgroundColor: 'var(--primary-navy)', 
                        color: '#ffffff',
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center', 
                        fontSize: '1.25rem', 
                        fontWeight: 700,
                        border: '2px solid var(--accent)'
                      }}
                    >
                      {getInitials(member.name)}
                    </div>
                    <div>
                      <h3 style={{ color: 'var(--primary-navy)', fontSize: '1.15rem', fontWeight: 700, marginBottom: '0.25rem' }}>{member.name}</h3>
                      <div className="font-mono" style={{ color: 'var(--accent-hover)', fontSize: '0.8rem', fontWeight: 700 }}>
                        {member.role}
                      </div>
                      <p className="text-muted" style={{ fontSize: '0.8rem', marginTop: '0.25rem' }}>
                        {member.dept}
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
