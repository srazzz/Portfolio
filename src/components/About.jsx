import './About.css';

const About = () => {
  return (
    <section className="about section" id="about">
      <div className="container">
        <h2 className="section-title fade-in-up">About Me</h2>
        <div className="about-content">
          <h3 className="about-headline fade-in-up">
            Hey, I'm <span className="highlight-name">Srazzz</span> 👋
            <br /><br />
            I'm a goofy developer who loves building things, fixing them and managing things. I vibe with MERN, React Native, and AWS, but I'm always curious about anything new that comes my way.
            <br /><br />
            At the end of the day, I'm just a software engineer who believes one thing:
            <br />
            <em style={{ color: 'var(--primary-color)' }}>it's not about the technology, it's the mindset.</em>
            <br />
            Once the fundamentals click, everything else is basically syntax.
            <br /><br />
            I like keeping work fun and full of learning moments—big or small.
          </h3>
        </div>
      </div>
    </section>
  );
};

export default About;