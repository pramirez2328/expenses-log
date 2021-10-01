import React, { useState } from "react";
import "./Form.css";
function Form({ onSavedNewExpense }) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [day, setDay] = useState("");

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleAmount = (e) => {
    setAmount(e.target.value);
  };

  const handleDay = (e) => {
    setDay(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const [y, m, d] = day.split("-");
    const newExpenseObj = {
      id: new Date(),
      title,
      amount,
      date: new Date(+y, +m - 1, +d),
    };

    onSavedNewExpense(newExpenseObj);

    setTitle("");
    setAmount("");
    setDay("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="title">Title:</label>
          <input type="text" value={title} onChange={handleTitle} />
        </div>
        <div className="new-expense__control">
          <label htmlFor="title">Amount:</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={amount}
            onChange={handleAmount}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="title">Day: </label>
          <input
            type="date"
            min="2021-01-01"
            max="2027-12-31"
            value={day}
            onChange={handleDay}
          />
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add expense</button>
        </div>
      </div>
    </form>
  );
}

export default Form;
