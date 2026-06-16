import { useState } from 'react';
import { galleryImages } from '../data/gallery';

export default function Gallery() {
  const [selectedYear, setSelectedYear] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState(null); // stores index in active (filtered) list

  // 1. Filter images based on selected tab
  const filteredImages = galleryImages.filter((img) => {
    if (selectedYear === 'All') return true;
    return img.year.toString() === selectedYear;
  });

  const openLightbox = (index) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    if (lightboxIndex === null) return;
    const newIndex = lightboxIndex === 0 ? filteredImages.length - 1 : lightboxIndex - 1;
    setLightboxIndex(newIndex);
  };

  const handleNext = (e) => {
    e.stopPropagation();
    if (lightboxIndex === null) return;
    const newIndex = lightboxIndex === filteredImages.length - 1 ? 0 : lightboxIndex + 1;
    setLightboxIndex(newIndex);
  };

  return (
    <div>
      {/* 1. Page Header */}
      <section className="page-header">
        <div className="container">
          <h1>Moments Gallery</h1>
          <p>ICPC Mathura onsite events at GLA University</p>
        </div>
      </section>

      {/* Main Section */}
      <section className="section" style={{ backgroundColor: 'var(--background)' }}>
        <div className="container" style={{ maxWidth: '1100px' }}>
          
          {/* 2. Year Filter Tabs */}
          <div className="tabs-container">
            {['All', '2026', '2025', '2024', '2023'].map((year) => (
              <button
                key={year}
                className={`tab-btn ${selectedYear === year ? 'active' : ''}`}
                onClick={() => {
                  setSelectedYear(year);
                  setLightboxIndex(null); // Close lightbox if tab changes to prevent errors
                }}
              >
                {year === 'All' ? 'All Years' : `${year} Edition`}
              </button>
            ))}
          </div>

          {/* 3. Masonry-style Grid or Empty State */}
          {filteredImages.length > 0 ? (
            <div className="gallery-grid">
              {filteredImages.map((img, index) => (
                <div 
                  key={index} 
                  className="gallery-card"
                  onClick={() => openLightbox(index)}
                >
                  <div className="gallery-img-container">
                    <img 
                      src={img.src} 
                      alt={img.caption} 
                      className="gallery-img"
                    />
                  </div>
                  <div className="gallery-info">
                    <div className="gallery-caption">{img.caption}</div>
                    <span className="gallery-year-badge">{img.year}</span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            /* 4. Empty State */
            <div className="card-plain text-center" style={{ padding: '3.5rem 2rem', maxStyle: '600px', marginInline: 'auto' }}>
              <span style={{ fontSize: '3rem', display: 'block', marginBottom: '1rem' }}>📷</span>
              <h3 style={{ color: 'var(--primary-navy)', marginBottom: '0.5rem' }}>No Photos Found</h3>
              <p className="text-muted">
                Photos from this year's event will be added after the onsite contest is completed. Stay tuned!
              </p>
            </div>
          )}

          {/* Lightbox Modal (renders conditionally) */}
          {lightboxIndex !== null && filteredImages[lightboxIndex] && (
            <div className="lightbox-overlay" onClick={closeLightbox}>
              <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
                {/* Close button */}
                <button className="lightbox-close" onClick={closeLightbox}>&times;</button>
                
                {/* Navigation Arrows */}
                {filteredImages.length > 1 && (
                  <>
                    <button className="lightbox-nav lightbox-prev" onClick={handlePrev}>&#10094;</button>
                    <button className="lightbox-nav lightbox-next" onClick={handleNext}>&#10095;</button>
                  </>
                )}

                {/* Lightbox Image */}
                <img 
                  src={filteredImages[lightboxIndex].src} 
                  alt={filteredImages[lightboxIndex].caption} 
                  className="lightbox-img"
                />
                
                {/* Lightbox Caption */}
                <div className="lightbox-caption">
                  {filteredImages[lightboxIndex].caption} 
                  <span style={{ color: 'var(--accent)', marginLeft: '10px', fontSize: '0.9rem', fontFamily: 'var(--font-headings)' }}>
                    ({filteredImages[lightboxIndex].year})
                  </span>
                </div>
              </div>
            </div>
          )}

        </div>
      </section>
    </div>
  );
}
