import React from "react";
import ExpenseDate from "./ExpenseDate";
import "./ExpensesItem.css";
import Button from "./Button";
function ExpensesItem({ id, title, amount, date, onDelete }) {
  return (
    <div className="expense-item">
      <div>{<ExpenseDate date={date} />}</div>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${amount}</div>
      </div>
      <Button onDelete={onDelete} id={id} />
    </div>
  );
}

export default ExpensesItem;
