import React from "react";
import "./dapp.css";
import LeaderboardDiag from "../../images/1 JPEG-5.png";

const Dapp = () => {
  return (
    <div className="dapp">
      <div className="groupText">
        <h2>Dapp</h2>
        <p>
          Moreover, when the visual brand identity was ready, the main
          challenge was to develop the DApp that would meet the
          requirements of the founders and the community. On top of
          that, it had to be intuitive and easy to use.
        </p>
        <p>
          Hopium designed the DApp that consists of the user's
          dashboard, trade, staking, LQ, vesting, airdrop, DAO and
          leaderboard features, launchpad, and the Marketplace.
        </p>
      </div>
      <img src={LeaderboardDiag} />
      <hr />
    </div>
  );
};

export default Dapp;
