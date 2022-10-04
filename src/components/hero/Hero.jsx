import React from "react";
import "./hero.css";
import Navigation from "../navigation/Navigation";
import BackgroundVideo from "../../images/videoBackgroundHero.mp4";
import Title from "../title/Title";

const Hero = () => {
  return (
    <div className="hero" id="hello">
      <Navigation />
      <Title />
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
          height: "124%",
          objectFit: "cover",
          transform: "translate(-50%, -50%)",
          zIndex: "4",
        }}>
        <source src={BackgroundVideo} type="video/mp4" />
      </video>
    </div>
  );
};

export default Hero;
