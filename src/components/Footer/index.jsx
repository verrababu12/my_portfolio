import React from "react";
import "./index.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p>© {new Date().getFullYear()} Veeru. Built with React + Vite.</p>
      </div>
    </footer>
  );
};

export default Footer;
