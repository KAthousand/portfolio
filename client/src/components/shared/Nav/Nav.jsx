import React, { useEffect, useState } from "react";
import "../Nav/Nav.css";

function Nav(props) {
  const [mount, setMount] = useState(false);

  useEffect(() => {
    setMount(true);
  }, []);
  return (
    <div className={mount ? "nav-container nav-transition" : "nav-container"}>
      <button>+</button>
      <div className="nav-icon-container">
        <button>1</button>
        <button>2</button>
        <button>3</button>
      </div>
    </div>
  );
}

export default Nav;
