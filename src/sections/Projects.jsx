import "./Projects.css";
import personalPortfolio from "../assets/Projects/personal-portfolio.png"
import pepsiUIUX from "../assets/Projects/pepsiUIUX.png"
import eCommercePlatform from "../assets/Projects/e-commerece.png"
import smartTaskManagementSystem from "../assets/Projects/task-management-system.png"
function Projects() {
  const projects = [
    {
      number: "01",
      title: "Personal Portfolio",
      description:
        "A modern and responsive personal portfolio website built to showcase my frontend development skills, projects, and technical experience with a clean and professional design.",
      technologies: ["React", "Vite", "JavaScript", "CSS"],
      image: personalPortfolio,
      type: "Featured Project",
      liveDemo: "Ypersonal-portfolio-flame-eta.vercel.app",
      github: "https://github.com/eshaeman59/Personal-Portfolio.git",
    },

    {
      number: "02",
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
      image: eCommercePlatform,
      type: "Full-Stack Project",
      liveDemo: "#",
      github: "#",
    },

    {
      number: "03",
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
      image: smartTaskManagementSystem,
      type: "Web Application",
      liveDemo: "#",
      github: "#",
    },

    {
      number: "04",
      title: "Pepsi UI/UX Showcase",
      description:
        "A Pepsi clone website description is a project summary for a front-end replica of the official Pepsi landing page, built using core web technologies like HTML and CSS.",
      technologies: [
        "React",
        "JavaScript",
        "CSS",
        "LocalStorage",
      ],
      image: pepsiUIUX,
      type: "Web Application",
      liveDemo: "#",
      github: "#",
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
  <img
    src={project.image}
    alt={`${project.title} preview`}
    className="project-image"
  />
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

                  <a
                    href={project.liveDemo}
                    className="project-link primary-project-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                    <span>↗</span>
                  </a>

                  <a
                    href={project.github}
                    className="project-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
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
