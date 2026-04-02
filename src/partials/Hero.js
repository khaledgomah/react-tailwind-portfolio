import React from "react";
import { FaGithub, FaLinkedinIn, FaRegEnvelope, FaArrowDown, FaWhatsapp, FaPhone } from "react-icons/fa";

function Hero({ name, title, bio, social }) {
  return (
    <section className="hero" id="hero">
      {/* Background effects */}
      <div className="hero-bg">
        <div className="hero-grid-overlay"></div>
      </div>
      <div className="hero-orb hero-orb-1"></div>
      <div className="hero-orb hero-orb-2"></div>

      {/* Main content */}
      <div className="hero-content">
        <div className="hero-avatar-container" data-aos="zoom-in" data-aos-duration="800">
          <img 
            src="/me.jpg" 
            alt="Khaled Gomah" 
            className="hero-avatar" 
          />
        </div>
        <div className="hero-badge">
          <span className="badge-dot"></span>
          Available for work
        </div>

        <h1 className="hero-name">
          Hi, I'm <span className="gradient-text">{name}</span>
        </h1>

        <p className="hero-title">{title}</p>

        <p className="hero-bio">{bio}</p>

        <div className="hero-cta">
          <a href="#projects" className="btn btn-primary">
            View Projects
            <FaArrowDown style={{ fontSize: '0.85rem' }} />
          </a>
          <a href="/Khaled_Gomah_CV.pdf" className="btn btn-outline" download>
            Download CV
          </a>
          <a href="#contact" className="btn btn-outline">
            Get In Touch
          </a>
        </div>

        <div className="hero-social">
          {social.github && (
            <a
              href={social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
          )}
          {social.linkedin && (
            <a
              href={social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>
          )}
          {social.email && (
            <a
              href={"mailto:" + social.email}
              className="social-link"
              aria-label="Email"
            >
              <FaRegEnvelope />
            </a>
          )}
          {social.phone && (
            <a
              href={`https://wa.me/${social.phone.replace('+', '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="WhatsApp"
            >
              <FaWhatsapp />
            </a>
          )}
          {social.phone && (
            <a
              href={`tel:${social.phone}`}
              className="social-link"
              aria-label="Phone"
            >
              <FaPhone />
            </a>
          )}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="scroll-indicator">
        <span className="scroll-indicator-text">Scroll</span>
        <span className="scroll-indicator-line"></span>
      </div>
    </section>
  );
}

export default Hero;
