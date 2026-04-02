import React, { useEffect } from "react";
import "./App.css";
import Navbar from "./partials/Navbar";
import Hero from "./partials/Hero";
import About from "./partials/About";
import Stats from "./partials/Stats";
import Projects from "./partials/Projects";
import Skills from "./partials/Skills";
import Contact from "./partials/Contact";
import Footer from "./partials/Footer";
import data from "./assets/data";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 600,
    });
  }, []);

  return (
    <div className="portfolio-app">
      <Navbar />
      <Hero
        name={data.name}
        title={data.title}
        bio={data.bio}
        social={data.social}
      />
      <About about={data.about} location={data.social.location} />
      <Stats stats={data.stats} />
      <Projects projects={data.projects} />
      <Skills skills={data.skills} />
      <Contact social={data.social} />
      <Footer />
    </div>
  );
}

export default App;
