import React from "react";
import photo from "../../assets/kylethousand.jpg";
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
      <div
        className={
          visible ? "photo-card-content transition" : "photo-card-content"
        }
      >
        <div className={visible ? "selfie transition" : "selfie"}>
          {/* <img src={photo} alt="photo-of-kyle" className/> */}
        </div>
        <div className={visible ? "box-one transition" : "box-one"}></div>
        <div className={visible ? "box-two transition" : "box-two"}></div>
        <div
          className={visible ? "box-three box-transition" : "box-three"}
        ></div>
        <div
          className={
            visible ? "hand-illustration hand-transition" : "hand-illustration"
          }
        ></div>
        <div
          className={visible ? "photo-card-text transition" : "photo-card-text"}
        >
          <h1>Meet Kyle.</h1>
        </div>
      </div>
    </div>
  );
}

export default PhotoCard;
