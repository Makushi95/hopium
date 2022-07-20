import React from "react";
import "./budgetArrows.css";
import ArrowLeft from "../../images/Arrow-left.png";
import ArrowRight from "../../images/Arrow-right.png";

const BudgetArrows = () => {
  return (
    <div className="arrows">
      <button className="preview">
        <img src={ArrowLeft} alt="" />
        Preview
      </button>
      <button className="next">
        Next
        <img src={ArrowRight} alt="" />
      </button>
    </div>
  );
};

export default BudgetArrows;
