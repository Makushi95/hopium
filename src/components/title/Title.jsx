import React from "react";
import "./title.css";

const Title = () => {
  return (
    <div className="title">
      <h1>Product Design For Crypto Projects.</h1>
      <p>
        Concealed is a creative digital agency that designs and builds
        thoughtful digital experiences.
      </p>
      <button type="button" className="buttonFilled">
        Get In Touch
      </button>
      <button type="button" className="buttonTransparent">
        Case Studies
      </button>
      <hr />
    </div>
  );
};

export default Title;
