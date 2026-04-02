import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Close menu when clicking outside or scrolling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={"navbar" + (scrolled ? " scrolled" : "")}>
      <div className="navbar-inner">
        <a href="#hero" className="navbar-logo">
          {'<'}Khaled{' />'}
        </a>
        <button 
          className="navbar-toggle" 
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
        <div className={`navbar-links ${menuOpen ? "open" : ""}`}>
          <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
          <a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
          <a href="/Khaled_Gomah_CV.pdf" className="cv-link" download onClick={() => setMenuOpen(false)}>Download CV</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
