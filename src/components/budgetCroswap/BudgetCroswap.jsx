import React from "react";
import "./budgetCroswap.css";

import BudgetCroswapImg from "../../images/BudgetCroswap.png";

const BudgetCroswap = () => {
  return (
    <div className="budgetCroswap">
      <div className="budgetText">
        <h2>Croswap Budget</h2>
        <p>
          We believe in maximum transparency and understand that
          budget is an important part of any design project. The graph
          to the right was created to help visualize the average cost
          associated with comprehensive product design services at
          Hopium Studio.
        </p>
      </div>
      <img src={BudgetCroswapImg} />
    </div>
  );
};

export default BudgetCroswap;
