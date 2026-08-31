import "./Contact.css";

function Contact() {
  return (
    <section className="contact section" id="contact">
      <div className="section-container">

        <div className="contact-wrapper">

          {/* Contact Information */}

          <div className="contact-info">

            <p className="section-label">
              GET IN TOUCH
            </p>

            <h2>
              Let's build something
              <span> great together.</span>
            </h2>

            <p className="contact-description">
              I'm always interested in learning, building new
              projects, and connecting with people in the tech
              industry. Feel free to reach out.
            </p>

            <div className="contact-details">

              <a
                href="mailto:your-email@example.com"
                className="contact-detail"
              >
                <div className="contact-icon">
                  @
                </div>

                <div>
                  <small>Email</small>
                  <p>your-email@example.com</p>
                </div>
              </a>

              <a
                href="#"
                className="contact-detail"
              >
                <div className="contact-icon">
                  in
                </div>

                <div>
                  <small>LinkedIn</small>
                  <p>Connect with me</p>
                </div>
              </a>

              <a
                href="#"
                className="contact-detail"
              >
                <div className="contact-icon">
                  &lt;/&gt;
                </div>

                <div>
                  <small>GitHub</small>
                  <p>View my projects</p>
                </div>
              </a>

            </div>

          </div>


          {/* Contact Form */}

          <form className="contact-form">

            <div className="form-group">

              <label htmlFor="name">
                Name
              </label>

              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your name"
              />

            </div>


            <div className="form-group">

              <label htmlFor="email">
                Email
              </label>

              <input
                type="email"
                id="email"
                name="email"
                placeholder="your@email.com"
              />

            </div>


            <div className="form-group">

              <label htmlFor="message">
                Message
              </label>

              <textarea
                id="message"
                name="message"
                rows="6"
                placeholder="Tell me about your project..."
              ></textarea>

            </div>


            <button
              type="submit"
              className="contact-button"
            >
              Send Message
              <span>→</span>
            </button>

          </form>

        </div>

      </div>
    </section>
  );
}

export default Contact;