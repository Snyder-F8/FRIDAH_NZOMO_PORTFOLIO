
export const projects = [
  {
    title: "Employee QR System",
    description: "Generates QR codes stored in Oracle DB",
    tech: ["Python", "Flask", "Oracle"],
  },
];

export default function Projects() {
  return (
    <main className="container">
      <h1>My Projects</h1>

      {projects.map((project) => (
        <article key={project.title}>
          <h2>{project.title}</h2>
          <p>{project.description}</p>
          <p>Technologies: {project.tech.join(", ")}</p>
        </article>
      ))}
    </main>
  );
}
