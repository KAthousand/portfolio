import React, { useState } from "react";
import "../WorkContent/WorkContent.css";
function WorkContent(props) {
  const [hoverOne, setHoverOne] = useState(false);
  const [hoverTwo, setHoverTwo] = useState(false);
  const [hoverThree, setHoverThree] = useState(false);
  return (
    <div className="work-content">
      <div
        className="blackjack"
        onMouseEnter={() => setHoverOne(true)}
        onMouseLeave={() => setHoverOne(false)}
      >
        {hoverOne && (
          <div className="description">
            <div className="description-text">
              <h1>Blackjack</h1>
              <p>
                Play a game of blackjack written completely in HTML, CSS, and
                vanilla JavaScript
              </p>
            </div>
            <div className="link-container">
              <a
                href="https://github.com/KAthousand/blackjackGame"
                target="_blank"
                className="contact-icon fa fa-github"
                rel="noreferrer"
                alt="link-to-github"
              >
                {" "}
              </a>
              <a
                href="https://kathousand.github.io/blackjackGame/"
                target="_blank"
                className="contact-icon fa fa-external-link-square"
                rel="noreferrer"
                alt="link-to-deploy"
              >
                {" "}
              </a>
            </div>
          </div>
        )}
      </div>
      <div
        className="paloma"
        onMouseEnter={() => setHoverTwo(true)}
        onMouseLeave={() => setHoverTwo(false)}
      >
        {hoverTwo && (
          <div className="description">
            <div className="description-text">
              <h1>Paloma</h1>
              <p>
                A recipe database and search engine for classic cocktail
                recipes.
              </p>
            </div>
            <div className="link-container">
              <a
                href="https://github.com/KAthousand/blackjackGame"
                target="_blank"
                className="contact-icon fa fa-github"
                rel="noreferrer"
                alt="link-to-github"
              >
                {" "}
              </a>
              <a
                href="https://kathousand.github.io/blackjackGame/"
                target="_blank"
                className="contact-icon fa fa-external-link-square"
                rel="noreferrer"
                alt="link-to-deploy"
              >
                {" "}
              </a>
            </div>
          </div>
        )}
      </div>
      <div
        className="high-noon"
        onMouseEnter={() => setHoverThree(true)}
        onMouseLeave={() => setHoverThree(false)}
      >
        {hoverThree && (
          <div className="description">
            <div className="description-text">
              <h1>High Noon</h1>
              <p>
                A Western shooting gallery game designed to improve your type
                speed and accuracy.
              </p>
            </div>
            <div className="link-container">
              <a
                href="https://github.com/KAthousand/blackjackGame"
                target="_blank"
                className="contact-icon fa fa-github"
                rel="noreferrer"
                alt="link-to-github"
              >
                {" "}
              </a>
              <a
                href="https://kathousand.github.io/blackjackGame/"
                target="_blank"
                className="contact-icon fa fa-external-link-square"
                rel="noreferrer"
                alt="link-to-deploy"
              >
                {" "}
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default WorkContent;
