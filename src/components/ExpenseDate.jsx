import React from "react";
import expensesDate from "../utilities/expensesDate";
import "./ExpenseDate.css";

function ExpenseDate({ date }) {
  let day = expensesDate(date);

  return (
    <div className="expense-date">
      <div className="expense-date__month">{day.month}</div>
      <div className="expense-date__day">{day.dayOfTheWeek}</div>
      <div className="expense-date__year">{day.year}</div>
    </div>
  );
}

export default ExpenseDate;
