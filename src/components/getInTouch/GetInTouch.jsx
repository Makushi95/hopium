import React from "react";
import Navigation from "../navigation/Navigation";
import "./getInTouch.css";
import { Widget } from "@typeform/embed-react";

const GetInTouch = () => {
  return (
    <div className="getInTouch">
      <Navigation />
      <Widget
        id="https://yl8ulbjoefv.typeform.com/to/JPQoitFU"
        style={{
          width: "100%",
          height: "798px",
          backgroundColor: "rgba(0,0,0,0)",
        }}
        className="my-form"
      />
    </div>
  );
};

export default GetInTouch;
