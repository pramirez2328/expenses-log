import React from "react";
import ExpenseDate from "./ExpenseDate";
import "./ExpensesItem.css";
import Button from "./Button";
function ExpensesItem({ title, amount, date }) {
  return (
    <div className="expense-item">
      <div>{<ExpenseDate date={date} />}</div>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${amount}</div>
      </div>
      <Button />
    </div>
  );
}

export default ExpensesItem;
