import React from "react";
import "./AddExpense.css";
function AddExpense({ openNewExpense }) {
  return (
    <div className="addAnExpense" onClick={openNewExpense}>
      - ADD AN EXPENSE -
    </div>
  );
}

export default AddExpense;
