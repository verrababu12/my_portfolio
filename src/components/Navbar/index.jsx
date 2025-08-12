import React, { useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa"; // Importing icons from react-icons
import "./index.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <h1 className="navbar-heading">
        <span className="name">V</span>eeru.
      </h1>
      <div className={`desktopMenu ${isMenuOpen ? "active" : ""}`}>
        <Link
          className="desktopMenuListItem"
          to="home"
          smooth={true}
          duration={500}
          onClick={handleMenuToggle}
        >
          Home
        </Link>
        <Link
          className="desktopMenuListItem"
          to="about"
          smooth={true}
          duration={500}
          onClick={handleMenuToggle}
        >
          About
        </Link>
        <Link
          className="desktopMenuListItem"
          to="skills"
          smooth={true}
          duration={500}
          onClick={handleMenuToggle}
        >
          Skills
        </Link>
        <Link
          className="desktopMenuListItem"
          to="services"
          smooth={true}
          duration={500}
          onClick={handleMenuToggle}
        >
          Services
        </Link>
        <Link
          className="desktopMenuListItem"
          to="education"
          smooth={true}
          duration={500}
          onClick={handleMenuToggle}
        >
          Education
        </Link>
        <Link
          className="desktopMenuListItem"
          to="contact"
          smooth={true}
          duration={500}
          onClick={handleMenuToggle}
        >
          Contact
        </Link>
      </div>

      {/* Menu icon for small screens */}
      <div className="menu-icon" onClick={handleMenuToggle}>
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
};

export default Navbar;

// import React from "react";
// import "./index.css";

// const Navbar = () => {
//   const scrollTo = (id) => {
//     const el = document.getElementById(id);
//     if (el) el.scrollIntoView({ behavior: "smooth" });
//   };

//   return (
//     <nav className="nav">
//       <div className="nav-inner container">
//         <div className="brand" onClick={() => scrollTo("home")}>
//           Veeru
//         </div>
//         <ul className="nav-links">
//           <li onClick={() => scrollTo("home")}>Home</li>
//           <li onClick={() => scrollTo("about")}>About</li>
//           <li onClick={() => scrollTo("skills")}>Skills</li>
//           <li onClick={() => scrollTo("services")}>Services</li>
//           <li onClick={() => scrollTo("education")}>Education</li>
//           <li onClick={() => scrollTo("projects")}>Projects</li>
//           <li onClick={() => scrollTo("contact")}>Contact</li>
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
