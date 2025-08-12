import React, { useEffect, useState } from "react";
import {
  FaPaperPlane,
  FaPhoneSquareAlt,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import "./index.css";

const Contact = () => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const scriptURL =
      "https://script.google.com/macros/s/AKfycbw-_-NjTrC1UDirrmxNKXlZwJdq10uGQb4IVrZO3FrGwE_Acd97eYO6F4kXCUnJjcRL/exec";
    const form = document.forms["submit-to-google-sheet"];

    const handleSubmit = (e) => {
      e.preventDefault();
      fetch(scriptURL, { method: "POST", body: new FormData(form) })
        .then((response) => {
          setMessage("Message Sent Successfully");
          console.log(response);
          setTimeout(() => {
            setMessage("");
          }, 5000);
          form.reset();
        })
        .catch((error) => console.error("Error!", error.message));
    };

    form.addEventListener("submit", handleSubmit);

    return () => {
      form.removeEventListener("submit", handleSubmit);
    };
  }, []);

  return (
    <>
      <div id="contact">
        <div className="container">
          <div className="row">
            <div className="contact-left">
              <h1 className="sub-title">Contact Me</h1>
              <p>
                <FaPaperPlane className="contact-icon" /> verrababu6@gmail.com
              </p>
              <p>
                <FaPhoneSquareAlt className="contact-icon" />
                8074285598
              </p>
              <div className="social-icons">
                <a
                  href="https://facebook.com/veera.babu.33633344"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook className="social-icon fa-facebook" />
                </a>
                <a
                  href="https://instagram.com/veeru_the_learner"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram className="social-icon fa-instagram" />
                </a>
                <a
                  href="https://www.linkedin.com/in/veera-babu-t-37793a23b/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin className="social-icon fa-linkedin" />
                </a>
                <a
                  href="https://twitter.com/Veeru"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaXTwitter className="social-icon" />
                </a>
                <a
                  href="https://github.com/verrababu12"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="social-icon" />
                </a>
              </div>
            </div>
            <div className="contact-right">
              <form name="submit-to-google-sheet">
                <input
                  type="text"
                  name="Name"
                  placeholder="Your Name"
                  required
                />
                <input
                  type="email"
                  name="Email"
                  placeholder="Your Email"
                  required
                />
                <textarea
                  name="Message"
                  rows="6"
                  placeholder="Your Message"
                ></textarea>
                <button type="submit" className="btn btn2">
                  Submit
                </button>
              </form>
              {message && (
                <p id="msg" className="success-message">
                  {message}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;

{
  /* <div className="contact-card-info">
          <h4>Get in touch</h4>
          <p className="muted">
            Or email me directly at{" "}
            <a href="mailto:your.email@example.com">your.email@example.com</a>
          </p>
          <div className="contact-meta">
            <div>
              <strong>Location</strong>
              <div className="muted">Your City, India</div>
            </div>
            <div>
              <strong>Availability</strong>
              <div className="muted">Open to work / freelancing</div>
            </div>
          </div>
        </div> */
}
