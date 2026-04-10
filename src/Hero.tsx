import heroImg from './assets/IMG_4077.JPG.jpeg';

const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <div>
        <h1>Hi, I'm Saksham</h1>
        <p>A Professional Photographer capturing life's finest moments.</p>
        <a href="#projects" className="cta-button">View My Portfolio</a>
      </div>
      <img src={heroImg} alt="A portrait of Saksham" width="300" height="300" />
    </section>
  );
};

export default Hero;