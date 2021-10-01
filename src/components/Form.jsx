import React from "react";
import "./Form.css";
function Form() {
  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="title">Title:</label>
          <input type="text" />
        </div>
        <div className="new-expense__control">
          <label htmlFor="title">Amount:</label>
          <input type="number" min="0.01" step="0.01" />
        </div>
        <div className="new-expense__control">
          <label htmlFor="title">Day: </label>
          <input type="date" min="2021-01-01" max="2027-12-31" />
        </div>
        <div className="new-expense__actions">
          <button type="submit">add expense</button>
        </div>
      </div>
    </form>
  );
}

export default Form;
