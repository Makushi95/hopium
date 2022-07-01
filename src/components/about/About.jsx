import React from "react";
import "./about.css";

const About = () => {
  return (
    <div className="about">
      <div className="panels">
        <div className="left panel">
          <p>
            <b>
              We’ve helped some of the biggest names in Web3 raise
              capital for their project.
            </b>
            From launching IDO’s to NFT memberships to advising on
            investor relations, we ensure the brands we build bring
            long term financial value for our clients.
          </p>
          <h2>Product Design</h2>
          <h2>UX App Analytics</h2>
          <h2>NFT Collections</h2>
        </div>
        <hr />
        <div className="right panel">
          <p>
            <b>
              “Branding is a vital element in growing a business. Over
              the last 18 months, Noir has helped Compass shape our
              vision, values and ethos as well as create next-level
              brand visuals, experiences and assets. The team is
              thorough and responsive and always exceed our
              expectations.”
            </b>
          </p>
          <div className="lines">
            <hr className="line" />
            <hr className="line" />
            <hr className="line" />
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default About;
