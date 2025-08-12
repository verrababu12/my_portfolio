import React from "react";
import "./index.css";

const services = [
  {
    title: "Frontend Development",
    desc: "React + Vite apps, responsive UI, performance optimizations.",
  },
  {
    title: "Backend Development",
    desc: "Node.js, Express APIs, authentication, REST & CRUD.",
  },
  {
    title: "Full-Stack Integration",
    desc: "End-to-end apps, DB design, deployment and CI.",
  },
];

const Services = () => {
  return (
    <div className="container services-wrap">
      <h3 className="section-title">Services</h3>
      <div className="services-grid">
        {services.map((s, i) => (
          <div key={i} className="service-card">
            <h4>{s.title}</h4>
            <p>{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
