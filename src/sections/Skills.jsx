import "./Skills.css";

function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      description: "Building modern and responsive user interfaces.",
      skills: ["HTML5", "CSS3", "JavaScript", "React", "Responsive Design"],
    },
    {
      title: "Backend",
      description: "Creating APIs and server-side applications.",
      skills: ["Node.js", "Express.js", "REST APIs"],
    },
    {
      title: "Database",
      description: "Working with data storage and database systems.",
      skills: ["MongoDB", "Mongoose"],
    },
    {
      title: "Tools",
      description: "Tools I use to build and manage projects.",
      skills: ["Git", "GitHub", "VS Code", "Vite", "npm"],
    },
  ];

  return (
    <section className="skills section" id="skills">
      <div className="section-container">

        {/* Section Heading */}
        <div className="section-heading skills-heading">
          <p className="section-label">MY SKILLS</p>

          <h2>
            Technologies I <span>work with.</span>
          </h2>

          <p className="section-subtitle">
            A collection of technologies and tools I use to
            create modern web applications.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="skills-grid">

          {skillCategories.map((category, index) => (
            <div className="skill-card" key={index}>

              <div className="skill-number">
                0{index + 1}
              </div>

              <h3>{category.title}</h3>

              <p className="skill-description">
                {category.description}
              </p>

              <div className="skill-list">

                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex}>
                    {skill}
                  </span>
                ))}

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Skills;