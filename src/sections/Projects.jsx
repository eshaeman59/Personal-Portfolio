import "./Projects.css";

function Projects() {
  const projects = [
    {
      number: "01",
      title: "E-Commerce Platform",
      description:
        "A modern full-stack e-commerce platform where users can browse products, manage their cart, and complete purchases through a clean and responsive interface.",
      technologies: [
        "React",
        "JavaScript",
        "Node.js",
        "Express.js",
        "MongoDB",
      ],
      type: "Featured Project",
    },
    {
      number: "02",
      title: "Smart Task Management System",
      description:
        "A task management application designed to help administrators assign tasks, manage deadlines, and monitor employee work through a structured dashboard.",
      technologies: [
        "React",
        "Ant Design",
        "Node.js",
        "MongoDB",
        "Socket.io",
      ],
      type: "Web Application",
    },
    {
      number: "03",
      title: "Student Management System",
      description:
        "A student management application that organizes students, subjects, teachers, lectures, and examination information in one place.",
      technologies: [
        "React",
        "JavaScript",
        "CSS",
        "LocalStorage",
      ],
      type: "Web Application",
    },
  ];

  return (
    <section className="projects section" id="projects">
      <div className="section-container">

        {/* Section Heading */}

        <div className="section-heading projects-heading">
          <p className="section-label">MY PROJECTS</p>

          <h2>
            Things I've <span>built.</span>
          </h2>

          <p className="section-subtitle">
            A selection of projects that demonstrate my
            development skills and problem-solving abilities.
          </p>
        </div>

        {/* Projects */}

        <div className="projects-list">

          {projects.map((project, index) => (
            <article
              className={`project-card ${
                index === 0 ? "featured-project" : ""
              }`}
              key={project.number}
            >

              {/* Project Visual */}

              <div className="project-visual">

                <div className="project-window">

                  <div className="window-header">

                    <div className="window-dots">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>

                    <div className="window-address">
                      portfolio-project
                    </div>

                  </div>

                  <div className="project-preview">

                    <div className="preview-line large"></div>
                    <div className="preview-line"></div>

                    <div className="preview-grid">

                      <div></div>
                      <div></div>
                      <div></div>

                    </div>

                  </div>

                </div>

              </div>

              {/* Project Information */}

              <div className="project-info">

                <div className="project-top">

                  <span className="project-number">
                    {project.number}
                  </span>

                  <span className="project-type">
                    {project.type}
                  </span>

                </div>

                <h3>{project.title}</h3>

                <p className="project-description">
                  {project.description}
                </p>

                {/* Technologies */}

                <div className="project-technologies">

                  {project.technologies.map((technology) => (
                    <span key={technology}>
                      {technology}
                    </span>
                  ))}

                </div>

                {/* Buttons */}

                <div className="project-links">

                  <a href="#" className="project-link primary-project-link">
                    Live Demo
                    <span>↗</span>
                  </a>

                  <a href="#" className="project-link">
                    GitHub
                    <span>↗</span>
                  </a>

                </div>

              </div>

            </article>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;