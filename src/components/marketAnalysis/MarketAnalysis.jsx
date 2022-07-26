import React from "react";
import "./marketAnalysis.css";
import AlienImg from "../../images/image 14.png";

const MarketAnalysis = () => {
  return (
    <div className="marketAnalysis">
      <div className="groupText">
        <h2>Market Analysis</h2>
        <p>
          Terra Aliens ordered from us the design of the entire NFT
          collection. However, before starting the design grinding
          process, the Hopium team conducted a detailed market
          analysis to create the most individual and unique collection
          possible.
        </p>
        <p>
          By the way, we always analyze the market while designing
          collections for our clients. We don't aim for copycats but
          for genuinely unique avatars that people would love to use
          as PFP.
        </p>
        <img src={AlienImg} />
      </div>
      <hr />
    </div>
  );
};

export default MarketAnalysis;
