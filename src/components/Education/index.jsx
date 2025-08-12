import React from "react";
import "./index.css";

const educationList = [
  {
    degree: "Full Stack Web Dev Course",
    institute: "Nxtwave Distriputive Techonlogies, Hyderabad",
    year: "2022-Ongoing",
    
  },
  {
    degree: "MSc. in Mathematics",
    institute: "Adikavi Nannaya Univercity, Rajamahendravarm",
    year: "2018 - 2020",
  },
  {
    degree: "B.Sc. in Chemistry",
    institute: "Adikavi Nannaya Univercity, Rajamahendravarm",
    year: "2015 - 2018",
  },
  {
    degree: "MPC in Intermediate",
    institute: "Board Of Intermediate Education, Vijayawada",
    year: "2013 - 2015",
  },
  {
    degree: "10 Th Class",
    institute: "Board Of Secondary Education, Andhra Pradesh",
    year: "2008 - 2013",
  },
];

const Education = () => {
  return (
    <div className="container education-wrap">
      <h3 className="section-title">Education</h3>
      <div className="education-list">
        {educationList.map((e, i) => (
          <div key={i} className="edu-item">
            <div className="edu-left">
              <strong>{e.degree}</strong>
              <div className="muted">{e.institute}</div>
            </div>
            <div className="edu-right">{e.year}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
