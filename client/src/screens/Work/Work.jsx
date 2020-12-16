import React from "react";
import "../Work/Work.css";
import WorkCard from "../../components/WorkCard/WorkCard";
import WorkContent from "../../components/WorkContent/WorkContent";

function Work(props) {
  return (
    <div className="work-container" id="work">
      <WorkCard />
      <WorkContent />
    </div>
  );
}

export default Work;
