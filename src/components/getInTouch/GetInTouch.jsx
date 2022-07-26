import React from "react";
import Navigation from "../navigation/Navigation";
import "./getInTouch.css";

const GetInTouch = () => {
  return (
    <div className="getInTouch">
      <Navigation />
      <form method="post">
        <p>Please list your email below:</p>
        <input type="email" name="email" id="email" />
      </form>
    </div>
  );
};

export default GetInTouch;
