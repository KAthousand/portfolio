import React, { useState, useEffect } from "react";
import "../Title/Title.css";

function Title(props) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <div className="title-container" id="home">
      <div className="title-border">
        <h3>Software Engineer</h3>
      </div>
      <div className="title-illustration-background">
        <div className="title-background-img">
          <div className={visible ? "logo transition" : "logo"}></div>
        </div>
      </div>
      <div className="title-border">
        <h3>
          <a
            href="#about"
            rel="noreferrer"
            alt="link-to-about"
            className="title-link"
          >
            About
          </a>{" "}
          /{" "}
          <a
            href="#Work"
            rel="noreferrer"
            alt="link-to-work"
            className="title-link"
          >
            Work
          </a>{" "}
          /{" "}
          <a
            href="#contact"
            rel="noreferrer"
            alt="link-to-contact"
            className="title-link"
          >
            Contact
          </a>
        </h3>
      </div>
    </div>
  );
}

export default Title;
