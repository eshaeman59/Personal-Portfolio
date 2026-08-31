import "./Hero.css";

function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-container">

        <div className="hero-content">

          <p className="hero-intro">
            Hello, I'm
          </p>

          <h1>H.Esha Eman</h1>
    
          <h2>Frontend Developer</h2>

          <p className="hero-description">
            I build clean, responsive and user-friendly web
            experiences using modern frontend technologies.
          </p>

          <div className="hero-buttons">

            <a href="#projects" className="primary-btn">
              View My Work
            </a>

            <a href="#contact" className="secondary-btn">
              Contact Me
            </a>

          </div>

          <div className="hero-socials">

            <a href="https://github.com/eshaeman59" aria-label="GitHub">
              GitHub
            </a>

            <a href="www.linkedin.com/in/h-esha-eman" aria-label="LinkedIn">
              LinkedIn
            </a>

            <a href="emanesha59@gmail.com" aria-label="Email">
              Email
            </a>

          </div>

        </div>

        <div className="hero-visual">

          <div className="code-card">

            <div className="code-header">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <div className="code-content">

              <p>
                <span className="purple">const</span>{" "}
                <span className="blue">developer</span> = {"{"}
              </p>

              <p className="indent">
                name: <span className="green">"Esha"</span>,
              </p>

              <p className="indent">
                role: <span className="green">
                  "Frontend Developer"
                </span>,
              </p>

              <p className="indent">
                skills: [
              </p>

              <p className="indent-more">
                <span className="green">"React"</span>,
              </p>

              <p className="indent-more">
                <span className="green">"JavaScript"</span>,
              </p>

              <p className="indent-more">
                <span className="green">"CSS"</span>
              </p>

              <p className="indent">
                ]
              </p>

              <p>
                {"}"}
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;

