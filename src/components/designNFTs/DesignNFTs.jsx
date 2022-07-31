import React from "react";
import "./designNFTs.css";

import AlienGroupImg from "../../images/001.jpg";
import AlienGroupImg1 from "../../images/Group123.png";

const DesignNFTs = () => {
  return (
    <div className="designNFTs">
      <div className="groupText">
        <h2>Design NFTs</h2>
        <p>
          After many discussions with the team, we started the
          sketching process of the main character. Dozens of hours
          passed before we created the final base version of the Terra
          Alien, but it was worth it. We must make many adjustments to
          create the ultimate version, so the process took some time.
        </p>
        <p>
          After designing the base of the entire collection, the
          Hopium team came up with the rarity traits - the most
          significant part of each NFT collection.
        </p>
        <img src={AlienGroupImg} />
        <img src={AlienGroupImg1} />
      </div>
      <hr />
    </div>
  );
};

export default DesignNFTs;
