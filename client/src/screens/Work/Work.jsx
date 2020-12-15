import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Work/Work.css";
import WorkCard from "../../components/WorkCard/WorkCard";

function Work(props) {
  const [hoverOne, setHoverOne] = useState(false);
  const [hoverTwo, setHoverTwo] = useState(false);
  const [hoverThree, setHoverThree] = useState(false);

  return (
    <div className="work-container">
      <WorkCard />
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
                <Link to="">GitHub</Link>
                <Link to="">Deploy</Link>
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
                <Link to="">GitHub</Link>
                <Link to="">Deploy</Link>
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
                <Link to="">GitHub</Link>
                <Link to="">Deploy</Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Work;
