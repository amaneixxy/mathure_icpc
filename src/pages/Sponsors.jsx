import { useState } from 'react';
import { Link } from 'react-router-dom';
import jetbrainsLogo from '../assets/jetbrainslogo.jpg';
import janestreetLogo from '../assets/JaneStreetLogo.png';
import glaLogo from '../assets/image.png';

const JETBRAINS_VIDEO_URL = 'https://drive.google.com/file/d/1GeAor9Fey7n_wdmtEouOAM21Po_QlLU-/preview';
const JANESTREET_VIDEO_URL = 'https://drive.google.com/file/d/1QD3An-Yw4MfkZF-fwuLzf10r2BPXzqiK/preview';

export default function Sponsors() {
  const [modalVideo, setModalVideo] = useState(null);

  const handleSponsorClick = (sponsor, videoUrl) => {
    setModalVideo({ sponsor, videoUrl });
  };

  const closeModal = () => {
    setModalVideo(null);
  };

  return (
    <div>
      <section className="page-header">
        <div className="container">
          <h1>Our Sponsors</h1>
          <p>Valued partners supporting the competitive programming community</p>
        </div>
      </section>

      <section className="section" style={{ backgroundColor: 'var(--background)' }}>
        <div className="container" style={{ maxWidth: '900px' }}>

          <div className="card-plain" style={{ marginBottom: '3rem', borderTop: '4px solid var(--accent)' }}>
            <h2 className="text-center" style={{ color: 'var(--primary-navy)', fontSize: '1.8rem', fontWeight: 800, marginBottom: '2.5rem', textTransform: 'uppercase', letterSpacing: '2px' }}>
              ICPC Global Sponsors
            </h2>

            <div className="sponsors-grid" style={{ marginBottom: 0 }}>
              <div className="sponsor-logo-box">
                <button
                  type="button"
                  onClick={() => handleSponsorClick('jetbrains', JETBRAINS_VIDEO_URL)}
                  style={{ all: 'unset', cursor: 'pointer', width: '100%' }}
                >
                  <div className="sponsor-logo-placeholder">
                    <img src={jetbrainsLogo} alt="JetBrains Logo" />
                  </div>
                  <p className="text-muted text-center" style={{ fontSize: '0.8rem', marginTop: '0.5rem' }}>
                    JetBrains provides developers with tools that speed up production, freeing them to grow and create.
                  </p>
                </button>
              </div>

              <div className="sponsor-logo-box">
                <button
                  type="button"
                  onClick={() => handleSponsorClick('janestreet', JANESTREET_VIDEO_URL)}
                  style={{ all: 'unset', cursor: 'pointer', width: '100%' }}
                >
                  <div className="sponsor-logo-placeholder">
                    <img src={janestreetLogo} alt="Jane Street Logo" />
                  </div>
                  <p className="text-muted text-center" style={{ fontSize: '0.8rem', marginTop: '0.5rem' }}>
                    Jane Street is a quantitative trading firm with a unique focus on technology and collaborative problem-solving.
                  </p>
                </button>
              </div>
            </div>
          </div>

          <div className="card-plain" style={{ marginBottom: '3rem', borderTop: '4px solid var(--secondary-accent)' }}>
            <h2 className="text-center" style={{ color: 'var(--primary-navy)', fontSize: '1.8rem', fontWeight: 800, marginBottom: '2.5rem', textTransform: 'uppercase', letterSpacing: '2px' }}>
              Regional Sponsor
            </h2>

            <div className="sponsors-grid" style={{ marginBottom: 0 }}>
              <div className="sponsor-logo-box">
                <div className="sponsor-logo-placeholder">
                  <img src={glaLogo} alt="GLA University Logo" />
                </div>
                <span className="sponsor-badge">Host & Regional Sponsor</span>
                <p className="text-muted text-center" style={{ fontSize: '0.8rem', marginTop: '0.5rem' }}>
                  GLA University, Mathura is the proud host and regional sponsor of the ICPC Mathura Site, fostering academic and technical excellence.
                </p>
              </div>
            </div>
          </div>

          {/* Call to Sponsorship */}
          <div className="card-plain text-center" style={{ borderTop: '4px solid var(--accent)' }}>
            <h3 style={{ color: 'var(--primary-navy)', marginBottom: '0.75rem' }}>Become a Partner</h3>
            <p className="text-muted" style={{ marginBottom: '1.5rem', fontSize: '0.95rem', maxWidth: '600px', marginInline: 'auto' }}>
              Partner with the ICPC Mathura Regional Contest to connect with hundreds of top engineering and computer science students across the country.
            </p>
            <Link to="/contact" className="btn btn-primary">
              Contact Sponsorship Team
            </Link>
          </div>

        </div>
      </section>

      {/* Video Modal Popup */}
      {modalVideo && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.75)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 9999,
            padding: '1rem',
          }}
          onClick={closeModal}
        >
          <div
            style={{
              backgroundColor: 'var(--card-bg)',
              borderRadius: '0rem',
              padding: '1.5rem',
              width: '100vw',
              height: '100vh',
              display: 'flex',
              flexDirection: 'column',
              position: 'relative',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={closeModal}
              style={{
                position: 'absolute',
                top: '0.75rem',
                right: '0.75rem',
                background: 'none',
                border: 'none',
                fontSize: '1.5rem',
                cursor: 'pointer',
                color: 'var(--text-primary)',
                width: '2rem',
                height: '2rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              aria-label="Close video"
            >
              ✕
            </button>

            <h3 style={{ color: 'var(--primary-navy)', marginBottom: '1rem', marginTop: 0 }}>
              {modalVideo.sponsor === 'jetbrains' ? 'JetBrains' : 'Jane Street'} Video
            </h3>

            <iframe
              src={modalVideo.videoUrl}
              style={{
                width: '100%',
                height: 'calc(100vh - 5rem)',
                borderRadius: '0rem',
                border: 'none',
                flex: 1,
              }}
              sandbox="allow-same-origin allow-scripts allow-presentation"
              title={`${modalVideo.sponsor} Sponsor Video`}
            />
          </div>
        </div>
      )}
    </div>
  );
}
