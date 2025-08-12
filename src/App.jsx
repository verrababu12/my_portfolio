import React from "react";
import Navbar from "./components/Navbar/index.jsx";
import Home from "./components/Home/index.jsx";
import About from "./components/About/index.jsx";
import Services from "./components/Services/index.jsx";
import Skills from "./components/Skills/index.jsx";
import Education from "./components/Education/index.jsx";
import Projects from "./components/Projects/index.jsx";
import Contact from "./components/Contact/index.jsx";
import Footer from "./components/Footer/index.jsx";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <section id="home">
          <Home />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="services">
          <Services />
        </section>
        <section id="education">
          <Education />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
