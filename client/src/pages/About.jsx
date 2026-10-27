
export default function About() {
  return (
    <main className="about-page container">
      <section className="about-intro">
        <p className="section-label">GET TO KNOW ME</p>

        <h1>About Me</h1>

        <p className="about-lead">
          I'm a software developer with a background in
          information technology and data science.
        </p>

        <p>
          I enjoy building practical software solutions,
          working with data, and understanding how technology
          can solve real-world problems. My experience includes
          application development, database systems, testing,
          and supporting business-critical applications.
        </p>

        <p>
          I'm continually growing my skills in software
          engineering and exploring how to build and protect
          reliable, secure systems.
        </p>
      </section>

      <section className="about-skills">
        <h2>What I Bring</h2>

        <div className="skills-grid">
          <article className="skill-card">
            <h3>Software Development</h3>
            <p>
              Building and supporting applications and APIs
              that address practical business needs.
            </p>
          </article>

          <article className="skill-card">
            <h3>Databases & Systems</h3>
            <p>
              Working with SQL, Oracle databases, reporting,
              and application support.
            </p>
          </article>

          <article className="skill-card">
            <h3>Testing & Problem Solving</h3>
            <p>
              Supporting system testing, investigating issues,
              and helping applications work as expected.
            </p>
          </article>

          <article className="skill-card">
            <h3>Data & Analysis</h3>
            <p>
              Using data tools and analytical thinking to
              turn information into useful insights.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}

