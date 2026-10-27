export default function Home() {
  return (
    <main>
      <section className="hero">
        <p className="hero-greeting">
          Hello, welcome to my portfolio.
        </p>

        <h1>
          Hi, I'm Sereluna.
        </h1>

        <h2>
          Software Developer & Data Scientist
        </h2>

        <p className="hero-description">
          I build practical software solutions and transform
          data into meaningful insights to solve real-world problems.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="button">
            View My Projects
          </a>

          <a href="#contact" className="button">
            Contact Me
          </a>
        </div>
      </section>
    </main>
  );
}
