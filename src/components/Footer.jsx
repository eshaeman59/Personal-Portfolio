import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <a href="#hero" className="footer-logo">
          H.Esha Eman<span></span>
        </a>

        <div className="footer-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Journey</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer-socials">
          <a href="#">GitHub</a>
          <a href="#">LinkedIn</a>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 Esha Eman. All rights reserved.</p>

        <a href="#hero">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}

export default Footer;