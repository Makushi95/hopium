import React from "react";
import "./title.css";
import { Link } from "react-router-dom";

const Title = () => {
  return (
    <div className="title">
      <h1>
        Comprehensive Design Studio For the W
        <span className="longCharacterALT">e</span>b3 Industry
      </h1>
      <p>
        GM! Hopium is your partner in digital visualization, bringing
        cutting-edge DApps, applications and NFTs to life.
      </p>
      <div className="buttonGroup">
        <Link to={"/GetInTouch"}>
          <button type="button" className="buttonFilled">
            Let's build Web3 together 🤝
          </button>
        </Link>
        <Link to={"/CaseStudies"}>
          <button type="button" className="buttonTransparent">
            Case Studies
          </button>
        </Link>
      </div>
      <hr />
    </div>
  );
};

export default Title;
