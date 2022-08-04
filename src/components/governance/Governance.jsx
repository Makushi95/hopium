import React from "react";
import "./governance.css";

import GovernanceImg1 from "../../images/Croswap003a.jpg";
import GovernanceImg2 from "../../images/Luart003b.png";

const Governance = () => {
  return (
    <div className="governance">
      <div className="groupText">
        <h2>Governace Tab</h2>
        <p>
          Governance is a democratic system brought into the
          blockchain. In everyday life, citizens vote for politicians.
          In the blockchain space, if the users or investors hold
          utility tokens, they can vote on strategic decisions,
          partnerships or changes in the project.
          <p>
            The more tokens you own, the bigger your voting power is.
            For the CroSwap company, we designed a proposal system
            where $CROS owners could create their manifesto, and other
            users could vote on it. Hopium also introduced a preview
            of past proposals, number of votes, publishing dates, etc.
          </p>
        </p>
        <div className="groupImg">
          <img src={GovernanceImg1} alt="" />
          <img src={GovernanceImg2} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Governance;
