import React, { useLayoutEffect, useState, useRef } from "react";
import PhotoCard from "../../components/PhotoCard/PhotoCard";
import "../About/About.css";

function About(props) {
  const [visible, setVisible] = useState(false);

  // useRef so we can set a divs ref to this.
  const ourRef = useRef(null);

  useLayoutEffect(() => {
    // create function to grab top position of any element
    const topPosition = (element) => element.getBoundingClientRect().top;
    // use function to capture the top of the div we are referencing
    const divPosition = topPosition(ourRef.current);

    // create a function that will capture the scroll position, and compare it to the div position
    const onScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      // trigger the state change when the divs position is greater than the scroll position
      if (divPosition < scrollPosition) {
        setVisible(true);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="about-container" ref={ourRef}>
      <PhotoCard visible={visible} />
      <div className="resume-container"></div>
    </div>
  );
}

export default About;
