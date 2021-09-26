import React, { useState } from "react";
import ExpensesItem from "./ExpensesItem";
import "./Expenses.css";
import expenses from "../utilities/expenses";

function Expenses() {
  const [listOfExpenses, setListOfExpenses] = useState(expenses);

  const handleDelete = (id) => {
    let newList = listOfExpenses.filter((i) => i.id !== id);
    setListOfExpenses(newList);
  };

  return (
    <div className="expenses">
      <h2 className="expenses__subtitle">Expenses</h2>
      {listOfExpenses.map((item) => {
        return <ExpensesItem key={item.id} {...item} onDelete={handleDelete} />;
      })}
    </div>
  );
}

export default Expenses;
