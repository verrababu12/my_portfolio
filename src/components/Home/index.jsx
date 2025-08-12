import React from "react";
import TypeWriter from "../TypeWriter/index.jsx";
import "./index.css";

const Home = () => {
  return (
    <header className="home-hero">
      <div className="container hero-inner">
        <div className="hero-left">
          <h1>
            Hi, I'm <span className="name">Veeru</span> 👋
          </h1>
          <h2 className="typewriter-heading">
            <TypeWriter
              words={[
                "I am a Full Stack Developer",
                "I am a Backend Developer",
                "I am a Frontend Developer",
                "I build scalable web apps",
              ]}
              typingSpeed={90}
              deleteSpeed={50}
              delayBetween={1400}
            />
          </h2>
          <div className="cta-row">
            <a
              className="btn"
              href="https://drive.google.com/file/d/1qv52puMwy0xrNyQqbM2j95C_pcdDvC8z/view?usp=sharing"
            >
              My Resume
            </a>
          </div>
        </div>
        <div className="hero-right">
          <img
            src="https://res.cloudinary.com/dpd55e6mf/image/upload/v1732844360/portfolioimage_jjzaye.png"
            alt="profile"
            className="profile"
          />
        </div>
      </div>
    </header>
  );
};

export default Home;
