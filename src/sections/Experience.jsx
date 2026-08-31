import "./Experience.css";

function Experience() {
  const journey = [
    {
      year: "2026",
      title: "Frontend Development",
      organization: "Personal Projects & Learning",
      description:
        "Focused on building modern web applications using React, JavaScript, responsive CSS, and component-based development.",
      technologies: ["React", "JavaScript", "CSS"],
    },
    {
      year: "2025",
      title: "Full-Stack Development",
      organization: "Development Projects",
      description:
        "Expanded my development skills by working with Node.js, Express.js, MongoDB, REST APIs, and full-stack application architecture.",
      technologies: ["Node.js", "Express.js", "MongoDB"],
    },
    {
      year: "2024",
      title: "Started Web Development",
      organization: "Learning Journey",
      description:
        "Started learning the fundamentals of web development and built a strong foundation in HTML, CSS, JavaScript, and modern development tools.",
      technologies: ["HTML", "CSS", "JavaScript"],
    },
  ];

  return (
    <section className="experience section" id="experience">
      <div className="section-container">

        {/* Section Heading */}

        <div className="section-heading experience-heading">
          <p className="section-label">MY JOURNEY</p>

          <h2>
            Learning, building, <span>growing.</span>
          </h2>

          <p className="section-subtitle">
            My journey as a developer is focused on continuous
            learning, practical projects, and improving my skills.
          </p>
        </div>

        {/* Timeline */}

        <div className="timeline">

          {journey.map((item, index) => (
            <div className="timeline-item" key={index}>

              {/* Timeline Indicator */}

              <div className="timeline-indicator">
                <span></span>
              </div>

              {/* Timeline Content */}

              <div className="timeline-content">

                <div className="timeline-top">

                  <span className="timeline-year">
                    {item.year}
                  </span>

                  <span className="timeline-number">
                    0{index + 1}
                  </span>

                </div>

                <h3>{item.title}</h3>

                <h4>{item.organization}</h4>

                <p>{item.description}</p>

                <div className="timeline-technologies">

                  {item.technologies.map((technology) => (
                    <span key={technology}>
                      {technology}
                    </span>
                  ))}

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Experience;