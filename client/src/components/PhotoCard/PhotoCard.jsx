import React from "react";
import "../PhotoCard/PhotoCard.css";

function PhotoCard(props) {
  const { visible } = props;
  return (
    <div
      className={
        visible
          ? "photo-card-container card-transition"
          : "photo-card-container"
      }
    >
      <h1>PhotoCard</h1>
    </div>
  );
}

export default PhotoCard;
