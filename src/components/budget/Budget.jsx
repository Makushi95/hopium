import React from "react";
import "./budget.css";
import BudgetArrows from "../budgetArrows/BudgetArrows";
import Graph from "../../images/Graph1111.png";

const Budget = () => {
  return (
    <div className="budget">
      <BudgetArrows />
      <div className="budgetText">
        <h2>Luart Budget</h2>
        <p>
          We believe in maximum transparency and understand that
          budget is an important part of any design project. The graph
          to the right was created to help visualize the average cost
          associated with comprehensive product design services at
          Hopium Studio
        </p>
      </div>
      <img src={Graph} alt="" />
      <hr />
    </div>
  );
};

export default Budget;
