import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  // Close menu when clicking outside or scrolling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ["hero", "about", "experience", "projects", "skills", "contact"];
      const scrollPosition = window.scrollY + 200;

      let current = "";
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollPosition) {
          current = section;
        }
      }
      setActiveSection(current);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={"navbar" + (scrolled ? " scrolled" : "")}>
      <div className="navbar-inner">
        <div className="navbar-logo"></div>
        <button 
          className="navbar-toggle" 
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
        <div className={`navbar-links ${menuOpen ? "open" : ""}`}>
          <a href="#about" className={activeSection === "about" ? "active" : ""} onClick={() => setMenuOpen(false)}>About</a>
          <a href="#experience" className={activeSection === "experience" ? "active" : ""} onClick={() => setMenuOpen(false)}>Experience</a>
          <a href="#projects" className={activeSection === "projects" ? "active" : ""} onClick={() => setMenuOpen(false)}>Projects</a>
          <a href="#skills" className={activeSection === "skills" ? "active" : ""} onClick={() => setMenuOpen(false)}>Skills</a>
          <a href="#contact" className={activeSection === "contact" ? "active" : ""} onClick={() => setMenuOpen(false)}>Contact</a>
          <a href="/Khaled_Gomah_CV.pdf" className="cv-link" target="_blank" rel="noopener noreferrer" onClick={() => setMenuOpen(false)}>Download CV</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
