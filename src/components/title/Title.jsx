import React from "react";
import "./title.css";
import { Link } from "react-router-dom";
import Navigation from "../navigation/Navigation";
import BackgroundVideo from "../../images/videoBackgroundHero.mp4";

const Title = () => {
  return (
    <div className="title">
      <video
        id="background-video"
        autoPlay
        loop
        muted
        style={{
          opacity: "0.3",
          position: "absolute",
          width: "100%",
          left: "50%",
          top: "38%",
          height: "125%",
          objectFit: "cover",
          transform: "translate(-50%, -50%)",
          zIndex: "-1",
        }}>
        <source src={BackgroundVideo} type="video/mp4" />
      </video>
      <Navigation />
      <h1>
        Comprehensive Design Studio For the W
        <span className="longCharacterALT">e</span>b3 Industry
      </h1>
      <p>
        GM! Hopium is your partner in digital visualization, bringing
        cutting-edge DApps, applications and NFTs to life.
      </p>
      <Link to={"/GetInTouch"}>
        <button type="button" className="buttonFilled">
          Let's build WEB3 together 🤝
        </button>
      </Link>
      <Link to={"/CaseStudies"}>
        <button type="button" className="buttonTransparent">
          Case Studies
        </button>
      </Link>
      <hr />
    </div>
  );
};

export default Title;
