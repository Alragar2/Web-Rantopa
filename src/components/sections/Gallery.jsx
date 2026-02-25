import React from 'react';

const Gallery = () => {
  const images = [
    '/images/gallery-1.jpg',
    '/images/gallery-2.jpg',
    '/images/gallery-3.jpg',
    '/images/gallery-4.jpg',
    '/images/gallery-5.jpg',
    '/images/gallery-6.jpg',
  ];

  return (
    <section id="gallery" className="gallery">
      <h2>Galería</h2>
      <div className="gallery-grid">
        {images.map((image, index) => (
          <div key={index} className="gallery-item">
            <img src={image} alt={`Gallery item ${index + 1}`} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;