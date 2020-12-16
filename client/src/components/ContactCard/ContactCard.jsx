import React from "react";
import "../ContactCard/ContactCard.css";
function ContactCard(props) {
  return (
    <div className="contact-card-container">
      <h1>Contact</h1>
      <div className="contact-card-icons">
        <a
          href="https://github.com/KAthousand"
          target="_blank"
          className="contact-icon fa fa-github"
        ></a>
        <a
          href="https://www.linkedin.com/in/kathousand/"
          target="_blank"
          className="contact-icon fa fa-linkedin"
        ></a>
      </div>
      <div className="back-to-top">
        <a href="title">
          <h3>Back to Top</h3>
        </a>
      </div>
    </div>
  );
}

export default ContactCard;
