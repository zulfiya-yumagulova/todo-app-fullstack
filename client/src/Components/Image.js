import React from "react";
import "./Image.css";
import IMG from "../Images/well-done.png";

export default function Image() {
  return (
    <div className="image-container">
      <img src={IMG}></img>
      {/* <p>Add Something</p> */}
    </div>
  );
}
