import React from "react";
import "./whitepaper.css";

import WhitepaperImg1 from "../../images/Croswap003b.jpg";

const Whitepaper = () => {
  return (
    <div className="whitepaper">
      <div className="groupText">
        <h2>Whitepaper</h2>
        <p>
          Not only that, but we also designed a whitepaper that was
          used as a document to attract the broader market and
          indicate unique selling propositions. On 20 slides, we
          covered the $CROS tokenomics, Cronos ecosystem, CroSwap
          partners and their business assumptions. The pretty-designed
          Whitepaper allowed them to put all the necessary things
          about the project in one document, raise the funding and
          expand their vision.
        </p>
        <img src={WhitepaperImg1} alt="" />
      </div>
    </div>
  );
};

export default Whitepaper;
