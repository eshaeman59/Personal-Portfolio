import "./About.css";

function About() {
  return (
    <section className="about section" id="about">
      <div className="section-container">

        {/* Section Heading */}
        <div className="section-heading">
          <p className="section-label">ABOUT ME</p>

          <h2>
            Turning ideas into <span>digital experiences.</span>
          </h2>

          <p className="section-subtitle">
            A little about me, my journey, and what I love building.
          </p>
        </div>

        {/* About Content */}
        <div className="about-content">

          <div className="about-text">

            <p>
              I'm a frontend developer passionate about creating
              modern, responsive, and user-friendly websites.
            </p>

            <p>
              I enjoy transforming ideas and designs into functional
              web experiences using technologies such as React,
              JavaScript, HTML, and CSS.
            </p>

            <p>
              I'm continuously improving my development skills by
              building real-world projects and exploring modern
              technologies.
            </p>

            <a href="#contact" className="about-button">
              Let's Connect →
            </a>

          </div>

          {/* About Stats */}
          <div className="about-stats">

            <div className="stat-card">
              <h3>01+</h3>
              <p>Years Learning</p>
            </div>

            <div className="stat-card">
              <h3>05+</h3>
              <p>Technologies</p>
            </div>

            <div className="stat-card">
              <h3>03+</h3>
              <p>Projects</p>
            </div>

            <div className="stat-card">
              <h3>100%</h3>
              <p>Passion</p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;