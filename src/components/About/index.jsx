import React from "react";
import "./index.css";

const About = () => {
  return (
    <div className="container about-wrap">
      <h3 className="section-title">About Me</h3>
      <div className="about-grid">
        <div className="about-left">
          <img
            src="https://res.cloudinary.com/daehuqvdc/image/upload/v1754974857/Soft_Skills_Vector_Illustration_of_Office_Workers_q3uxav.jpg"
            alt="Veeru"
          />
        </div>
        <div className="about-right">
          <p>
            I'm <strong>Veeru</strong>, a web developer who loves building clean
            UIs and reliable backends. I focus on React, Vite, Node.js and
            databases (MongoDB / MySQL). I enjoy problem solving and learning
            new tech.
          </p>
          <h4>Key Skills</h4>
          <div className="skills">
            <span>React</span>
            <span>JavaScript (ES6+)</span>
            <span>Node.js</span>
            <span>Express</span>
            <span>MongoDB / MySQL</span>
            <span>CSS</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
