import React from "react";
import "../ContactCard/ContactCard.css";
function ContactCard(props) {
  return (
    <div className="contact-card-container">
      <div className="ufo">
        <div className="contact-card-icons">
          <a
            href="https://github.com/KAthousand"
            target="_blank"
            className="contact-icon fa fa-github"
            rel="noreferrer"
            alt="link-to-github"
          >
            {" "}
          </a>
          <a
            href="https://www.linkedin.com/in/kathousand/"
            target="_blank"
            className="contact-icon fa fa-linkedin"
            rel="noreferrer"
            alt="link-to-linkedin"
          >
            {" "}
          </a>
        </div>
        <div className="back-to-top">
          <a href="title">
            <h3>Back to Top</h3>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ContactCard;
