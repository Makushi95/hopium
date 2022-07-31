import React from "react";
import "./rarity.css";

import AlienTraitsImg from "../../images/Frame123.png";
import Blue from "../../images/Blue.png";
import Cyan from "../../images/Cyan.png";
import Yellow from "../../images/Yellow.png";

const Rarity = () => {
  return (
    <div className="rarity">
      <div className="groupText">
        <h2>Rarity Traits</h2>
        <p>
          "NFT traits are attributes, attitudes, characteristics, or
          categories used to differentiate a design when creating PFP
          NFTs. "
        </p>
        <p>
          To take the visualization to another level, we decided to
          make 6 attributes since the collection has a max. 3,666
          pieces.
        </p>
        <p>Hopium created:</p>
        <ul>
          <li>
            <p>20 different backgrounds,</p>
          </li>
          <li>
            <p>30 genesis features,</p>
          </li>
          <li>
            <p>46 items of clothing,</p>
          </li>
          <li>
            <p>41 months,</p>
          </li>
          <li>
            <p>36 types of eyes and </p>
          </li>
          <li>
            <p>45 hats.</p>
          </li>
        </ul>
        <p>
          Finally, we ended with 218 traits total, while 60 were 1/1
          NFTs (10x pieces).
        </p>
        <p>
          They are a good "gift" for influencers and partners while
          promoting the project because 1/1s are truly unique.
        </p>
        <p>
          Check the Aliens' traits <a href="/Rarity">here!</a>
        </p>
        <img src={AlienTraitsImg} />
        <img src={Blue} />
        <img src={Cyan} />
        <img src={Yellow} />
      </div>
    </div>
  );
};

export default Rarity;
