import React from "react";
import "./pricing.css";
import Graph from "../../images/Graph.png";

const Pricing = () => {
  return (
    <div className="pricing" id="pricing">
      <h2>Pricing</h2>
      <p>
        We understand the importance of long-term planning and
        budgeting. Below, you will find an approximate curve helping
        you to make average calculations on comprehensive product
        design for your project.
      </p>
      <img src={Graph} alt="graph" />
      <hr />
    </div>
  );
};

export default Pricing;
