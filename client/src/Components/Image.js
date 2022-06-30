import React from "react";
import "./Image.css";
import IMG from "../Images/well-done.png";

export default function Image() {
  return (
    <div className="image-container">
      <img src={IMG}></img>
      <h1>Add A Todo</h1>
    </div>
  );
}
