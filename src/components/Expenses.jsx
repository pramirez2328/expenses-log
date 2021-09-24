import React from "react";
import ExpensesItem from "./ExpensesItem";
import "./Expenses.css";
import expenses from "../utilities/expenses";
function Expenses() {
  return (
    <div className="expenses">
      <h2 className="expenses__subtitle">Expenses</h2>
      {expenses.map((item) => {
        return <ExpensesItem key={item.id} {...item} />;
      })}
    </div>
  );
}

export default Expenses;
