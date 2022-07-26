import React from "react";
import "./budgetAliens.css";
import BudgetAliensImg from "../../images/BudgetAliens.png";

const BudgetAliens = () => {
  return (
    <div className="budgetAliens">
      <div className="budgetText">
        <h2>Terra Aliens Budget</h2>
        <p>
          We believe in maximum transparency and understand that
          budget is an important part of any design project. The graph
          to the right was created to help visualize the average cost
          associated with comprehensive product design services at
          Hopium Studio.
        </p>
      </div>
      <img src={BudgetAliensImg} />
      <hr />
    </div>
  );
};

export default BudgetAliens;
