
export default function Contact() {
  return (
    <main className="contact-page container">
      <section className="contact-intro">
        <p className="section-label">LET'S CONNECT</p>

        <h1>Let's Work Together.</h1>

        <p>
          Have an opportunity, a project idea, or just want
          to connect? I'd love to hear from you.
        </p>
      </section>

      <section className="contact-layout">
        <div className="contact-details">
          <h2>Get in Touch</h2>

          <p>
            I'm always open to discussing software development,
            technology, data, and opportunities to grow and
            collaborate.
          </p>

          <div className="contact-item">
            <span className="contact-label">EMAIL</span>
            <a href="mailto:your.email@example.com">
              your.email@example.com
            </a>
          </div>

          <div className="contact-item">
            <span className="contact-label">LINKEDIN</span>
            <a
              href="https://www.linkedin.com/in/your-profile"
              target="_blank"
              rel="noreferrer"
            >
              View my LinkedIn profile ↗
            </a>
          </div>

          <div className="contact-item">
            <span className="contact-label">GITHUB</span>
            <a
              href="https://github.com/your-username"
              target="_blank"
              rel="noreferrer"
            >
              Explore my projects ↗
            </a>
          </div>
        </div>

        <form
          className="contact-form"
          onSubmit={(event) => event.preventDefault()}
        >
          <h2>Send Me a Message</h2>

          <label htmlFor="name">Your Name</label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Jane Doe"
            required
          />

          <label htmlFor="email">Your Email</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="jane@example.com"
            required
          />

          <label htmlFor="subject">Subject</label>
          <input
            id="subject"
            name="subject"
            type="text"
            placeholder="What would you like to discuss?"
            required
          />

          <label htmlFor="message">Your Message</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            placeholder="Write your message here..."
            required
          />

          <button type="submit" className="button">
            Send Message
          </button>

          <p className="form-note">
            Contact form functionality will be added later.
          </p>
        </form>
      </section>
    </main>
  );
}

