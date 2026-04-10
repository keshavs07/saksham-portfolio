import eventImg1 from './assets/Events/7.JPG';
import eventImg2 from './assets/Events/8.JPG';
import eventImg3 from './assets/Events/9.JPG';
import eventImg4 from './assets/Events/10.JPG';

import concertImg1 from './assets/Concerts/1.JPG';
import concertImg2 from './assets/Concerts/2.JPG';
import concertImg3 from './assets/Concerts/3.JPG';
import concertImg4 from './assets/Concerts/4.JPG';

type Project = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  link?: string;
  images: string[];
};

const projects: Project[] = [
  {
    id: 'events',
    title: 'Events',
    description: 'Capturing the energy and memorable moments of various events and gatherings.',
    tags: ['Event', 'Candid', 'People'],
    link: '#gallery-events',
    images: [
      eventImg1,
      eventImg2,
      eventImg3,
      eventImg4,
    ],
  },
  {
    id: 'concerts',
    title: 'Concerts',
    description: 'Electrifying live music photography, freezing the passion and atmosphere of the stage.',
    tags: ['Concert', 'Live Music', 'Night'],
    link: '#gallery-concerts',
    images: [
      concertImg1,
      concertImg2,
      concertImg3,
      concertImg4,
    ],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h2>Featured Collections</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.title} className="project-card">
            <div className="project-gallery">
              {project.images.map((img, index) => (
                <img key={index} src={img} alt={`${project.title} showcase ${index + 1}`} className="project-image" />
              ))}
            </div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-tech">
              {project.tags.map(tag => <span key={tag} className="tech-tag">{tag}</span>)}
            </div>
            <div className="project-links">
              <a href={project.link} className="cta-button" style={{ padding: '0.6rem 1.2rem', fontSize: '0.8rem' }}>View Gallery</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;