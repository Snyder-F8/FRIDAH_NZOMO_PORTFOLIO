
export const projects = [
  {
    title: "Supplier Pre-qualification Portal",
    category: "Collaborative Project",
    description:
      "A web portal developed collaboratively to support the supplier pre-qualification process. I contributed to the backend, working alongside a colleague on an application that reused an existing frontend codebase.",
    tech: ["React", "JavaScript", "Backend Development"],
  },
  {
    title: "TicketVibez",
    category: "Academic Project",
    description:
      "An event ticketing and management application developed using Flask, Python, and PostgreSQL.",
    tech: ["Python", "Flask", "PostgreSQL"],
  },
  {
    title: "Sereluna Beauty",
    category: "Academic Project",
    description:
      "A beauty-focused website developed as a school project.",
    tech: [],
  },
  {
    title: "Employee QR System",
    category: "Python Project",
    description:
      "A brief project involving Python and an employee QR code system, with Oracle database integration.",
    tech: ["Python", "Flask", "Oracle"],
  },
];

export default function Projects() {
  return (
    <main className="projects-page container">
      <section className="projects-intro">
        <p className="section-label">MY WORK</p>

        <h1>Projects I've Worked On</h1>

        <p>
          A selection of academic and collaborative projects
          that reflect my experience building applications,
          working with databases, and solving practical problems.
        </p>
      </section>

      <section className="projects-grid" aria-label="Portfolio projects">
        {projects.map((project) => (
          <article className="project-card" key={project.title}>
            <p className="project-category">{project.category}</p>

            <h2>{project.title}</h2>

            <p className="project-description">
              {project.description}
            </p>

            {project.tech.length > 0 && (
              <div className="project-tech">
                {project.tech.map((technology) => (
                  <span className="tech-tag" key={technology}>
                    {technology}
                  </span>
                ))}
              </div>
            )}

            <p className="project-link-note">
              Project details available on request
            </p>
          </article>
        ))}
      </section>
    </main>
  );
}
