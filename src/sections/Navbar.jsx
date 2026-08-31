
import "./Navbar.css";
function Navbar() {
  return (
    <header className="navbar">
      <div className="nav-container">

        <a href="#hero" className="logo">
        H.Esha Eman<span></span>
        </a>

        <nav className="nav-links">
          <a href="#hero">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </nav>

        <a href="#contact" className="nav-button">
          Let's Talk
        </a>

      </div>
    </header>
  );
}

export default Navbar;

