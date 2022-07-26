import React from "react";
import "./designNFTs.css";

import AlienGroupImg from "../../images/001.jpg";
import AlienGroupImg1 from "../../images/Group123.png";

const DesignNFTs = () => {
  return (
    <div className="designNFTs">
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
        <img src={AlienGroupImg} />
        <img src={AlienGroupImg1} />
      </div>
      <hr />
    </div>
  );
};

export default DesignNFTs;
