import './Hero.css';
import sravaniImage from '../assets/sravani.png';

const Hero = () => {
  const handleViewProjects = () => {
    document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
  };

  const handleDownloadResume = () => {
    // Open resume PDF from public folder
    window.open('/Durga-Sravani-Vadlamanu.pdf', '_blank');
  };

  return (
    <section className="hero section" id="home">
      <div className="hero-background"></div>
      <div className="container">
        <div className="hero-content">
          <div className="hero-text fade-in-up">
            <h1 className="hero-headline">
              Hi, I'm <span className="gradient-text">Sravani</span>.
              <br />
              I'm a Product Engineer.
            </h1>
            <p className="hero-subheading">
              Mobile Developer • MERN Stack Developer • Software Engineer
            </p>
            <div className="hero-buttons">
              <button className="btn btn-primary" onClick={handleViewProjects}>
                View Projects
              </button>
              <button className="btn btn-secondary" onClick={handleDownloadResume}>
                Download Resume
              </button>
            </div>
          </div>
          <div className="hero-illustration fade-in">
            <div className="illustration-container">
              <img 
                src={sravaniImage} 
                alt="Sravani" 
                className="hero-image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

