import React from "react";
import "./budgetLuart.css";
import Graph from "../../images/Graph1111.png";

const BudgetLuart = () => {
  return (
    <div className="budgetLuart">
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
      <img src={Graph} />
    </div>
  );
};

export default BudgetLuart;
