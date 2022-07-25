import React from "react";
import "./launchpad.css";
import LaunchpadImg1 from "../../images/Launchpad1.png";
import LaunchpadImg2 from "../../images/Launchpad2.png";

const Launchpad = () => {
  return (
    <div className="launchpad">
      <div className="groupText">
        <h2>NFT Launchpad</h2>
        <p>
          The launchpad service is a program led by experienced crypto
          entities that incubate early-stage startups, providing
          know-how, connections and marketing support. Crypto
          Launchpad is an evergreen product because there will always
          be new projects that want to launch, so delivering a great
          user experience is critical to staying on the market with
          your LP.
        </p>
        <p>
          By delivering the seamless NFT minting experience for the
          Luart Launchpad, 19 projects used the incubation service,
          onboarding 58k people into the Terra Ecosystem.
        </p>
      </div>
      <img src={LaunchpadImg1} />
      <img src={LaunchpadImg2} />
    </div>
  );
};

export default Launchpad;
