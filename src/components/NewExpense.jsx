import React from "react";
import "./NewExpense.css";
import Form from "./Form";
function NewExpense({ onSavedNew }) {
  const handleSavedExpense = (item) => {
    onSavedNew(item);
  };
  return (
    <div className="new-expense hideNewExpense" id="newExpense">
      <Form onSavedNewExpense={handleSavedExpense} />
    </div>
  );
}

export default NewExpense;
