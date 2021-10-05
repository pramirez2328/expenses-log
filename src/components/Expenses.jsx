import React from "react";
import ExpensesItem from "./ExpensesItem";
import "./Expenses.css";

function Expenses({ listOfSavedExpenses, onDeleteExpense }) {
  if (listOfSavedExpenses.length === 0) {
    return (
      <h2 style={{ color: "red", textAlign: "center" }}>
        No expenses, try a different year!
      </h2>
    );
  } else {
    return (
      <div className="expenses">
        <h2 className="expenses__subtitle">Expenses</h2>
        {listOfSavedExpenses.map((item) => {
          return (
            <ExpensesItem key={item.id} {...item} onDelete={onDeleteExpense} />
          );
        })}
      </div>
    );
  }
}

export default Expenses;
