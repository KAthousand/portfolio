import React from "react";
import "../Title/Title.css";

function Title(props) {
  return (
    <div className="title-container">
      <div className="title-border">
        <h3>Software Engineer</h3>
      </div>
      <div className="title-illustration"></div>
      <div className="title-border">
        <h3>
          <a href="#">About</a> / <a href="#">Work</a> / <a href="#">Contact</a>
        </h3>
      </div>
    </div>
  );
}

export default Title;
