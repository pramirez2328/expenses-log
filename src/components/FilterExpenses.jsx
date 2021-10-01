import React from "react";
import "./FilterExpenses.css";
function FilterExpenses() {
  return (
    <div id="filter-expenses">
      <h3>Filter expenses by year</h3>
      <select name="selectYear" id="selectYear">
        <option className="options" value="">
          Select a year
        </option>
        <option value="2020">2020</option>
        <option value="2021">2021</option>
        <option value="2022">2022</option>
        <option value="2023">2023</option>
        <option value="2024">2024</option>
        <option value="2024">2024</option>
        <option value="2025">2025</option>
        <option value="2026">2026</option>
        <option value="2027">2027</option>
      </select>
    </div>
  );
}

export default FilterExpenses;
