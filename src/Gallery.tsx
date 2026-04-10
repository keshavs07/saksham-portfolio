import { useEffect } from 'react';

import eventImg1 from './assets/Events/7.JPG';
import eventImg2 from './assets/Events/8.JPG';
import eventImg3 from './assets/Events/9.JPG';
import eventImg4 from './assets/Events/10.JPG';
import eventImg5 from './assets/Events/11.JPG';
import eventImg6 from './assets/Events/12.JPG';

import concertImg1 from './assets/Concerts/1.JPG';
import concertImg2 from './assets/Concerts/2.JPG';
import concertImg3 from './assets/Concerts/3.JPG';
import concertImg4 from './assets/Concerts/4.JPG';
import concertImg5 from './assets/Concerts/5.JPG';
import concertImg6 from './assets/Concerts/6.JPG';

type GalleryProps = {
  collectionId: string;
};

// These are the full collections. You can import and add more local images here!
const galleryData: Record<string, { title: string; description: string; images: string[] }> = {
  events: {
    title: 'Events Showcase',
    description: 'A deeper look into the energy and memorable moments of various events.',
    images: [
      eventImg1,
      eventImg2,
      eventImg3,
      eventImg4,
      eventImg5,
      eventImg6,
    ],
  },
  concerts: {
    title: 'Concerts Showcase',
    description: 'Electrifying live music photography, freezing the passion of the stage.',
    images: [
      concertImg1,
      concertImg2,
      concertImg3,
      concertImg4,
      concertImg5,
      concertImg6,
    ],
  },
};

const Gallery = ({ collectionId }: GalleryProps) => {
  // Scroll to top when the gallery loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [collectionId]);

  const collection = galleryData[collectionId];

  if (!collection) {
    return (
      <section className="gallery-view">
        <h2>Collection not found</h2>
        <a href="#projects" className="cta-button">Go Back</a>
      </section>
    );
  }

  return (
    <section className="gallery-view">
      <div className="gallery-header">
        <a href="#projects" className="back-link">← Back to Portfolio</a>
        <h2>{collection.title}</h2>
        <p>{collection.description}</p>
      </div>
      <div className="gallery-grid">
        {collection.images.map((img, index) => (
          <div key={index} className="gallery-card">
            <img src={img} alt={`${collection.title} - Image ${index + 1}`} loading="lazy" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;