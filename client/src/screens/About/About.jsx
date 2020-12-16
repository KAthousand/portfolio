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
    <div className="about-container" id="about" ref={ourRef}>
      <PhotoCard visible={visible} />
      <div className="resume-container">
        <div
          className={visible ? "resume-content transition" : "resume-content"}
        >
          <h3>software engineer in Detroit, Michigan</h3>
          <p>
            Starting with a passion for aesthetic design and artwork, my love of
            functionality and structure evolved into my full-stack development
            career. My working method comes from my service-industry experience;
            a place of approachability, creativity, and calm under pressure. My
            success has come through my innate ambition, attention to detail,
            and desire to communicate my efforts to ensure efficiency and
            viability.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
