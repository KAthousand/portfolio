import React, { useEffect, useState } from "react";
import "../Nav/Nav.css";

function Nav(props) {
  const [mount, setMount] = useState(false);
  const [fullNav, setFullNav] = useState(false);

  useEffect(() => {
    setMount(true);
  }, []);
  return (
    <>
      <div className={fullNav ? "nav-full open-nav" : "nav-full"}>
        <div className={fullNav ? "nav-full-link open-link" : "nav-full-link"}>
          <h3>
            <a href="#">About</a>
          </h3>
          <h3>
            <a href="#">Work</a>
          </h3>
          <h3>
            <a href="#">Contact</a>
          </h3>
        </div>
      </div>
      <div className={mount ? "nav-container nav-transition" : "nav-container"}>
        <button onClick={() => setFullNav(!fullNav)}>+</button>
        <div
          className={
            mount ? "nav-icon-container icon-transition" : "nav-icon-container"
          }
        >
          <button>1</button>
          <button>2</button>
          <button>3</button>
        </div>
      </div>
    </>
  );
}

export default Nav;
