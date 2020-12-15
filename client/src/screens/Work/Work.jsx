import React, { useState } from "react";

import "../Work/Work.css";
import WorkCard from "../../components/WorkCard/WorkCard";

function Work(props) {
  const [hover, setHover] = useState({
    one: false,
    two: false,
    three: false,
  });

  const handleHover = (e) => {
    setHover(!hover);
  };
  return (
    <div className="work-container">
      <WorkCard />
      <div className="work-content">
        <div
          className="blackjack"
          name="one"
          onMouseEnter={(e) => handleHover(e)}
          onMouseLeave={handleHover}
        >
          <div className={hover && "description"}></div>
        </div>
        <div
          className="paloma"
          onMouseEnter={handleHover}
          onMouseLeave={handleHover}
        >
          <div className={hover && "description"}></div>
        </div>
        <div
          className="high-noon"
          onMouseEnter={handleHover}
          onMouseLeave={handleHover}
        >
          <div className={hover && "description"}></div>
        </div>
      </div>
    </div>
  );
}

export default Work;
