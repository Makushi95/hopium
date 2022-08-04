import React from "react";
import "./staking.css";

import StakingImg1 from "../../images/Croswap003a.png";
import StakingImg2 from "../../images/Croswap002a.jpg";
import StakingImg3 from "../../images/Croswap002b.jpg";

const Staking = () => {
  return (
    <div className="staking">
      <div className="groupText">
        <h2>Staking</h2>
        <p>
          Staking is a way to multiply the tokens (for a user) and to
          reduce the circulating supply (for the project). Each crypto
          project allows investors to earn interest on their tokens by
          depositing them in the pools with different APRs. However,
          CroSwap went further and offered their stakers an
          opportunity to participate in the DHOs (Diamond Hand
          Offerings) of projects at the early stage.
          <p>
            The system works like a launchpad - the more tokens you
            have, the bigger allocation you can get. Hopium Studio
            designed the tier model, deposits preview, and the
            end-to-end design process for the token staker - from
            entering the DApp to getting an allocation.
          </p>
        </p>
        <div className="groupImg">
          <img src={StakingImg1} alt="" />
          <img src={StakingImg2} alt="" />
          <img src={StakingImg3} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Staking;
