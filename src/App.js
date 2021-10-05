import React, { useState } from "react";
import "./App.css";
import Expenses from "./components/Expenses";
import NewExpense from "./components/NewExpense";
import savedExpenses from "./utilities/expenses";
import FilterExpenses from "./components/FilterExpenses";
import AddExpense from "./components/AddExpense";

function App() {
  const [expenses, setExpenses] = useState(savedExpenses);
  const [filterArr, setFilterArr] = useState([]);
  const [filter, setFilter] = useState(false);

  const handleSavedExpenses = (item) => {
    setFilter(false);
    setExpenses((prevState) => {
      return [item, ...prevState];
    });
  };

  const handleDelete = (id) => {
    let newList = expenses.filter((i) => i.id !== id);
    setFilter(false);
    setExpenses(newList);
  };

  const handleFilterByYear = (e) => {
    const filterByYear = expenses.filter((item) => {
      return ("" + item.date).includes(e.target.value);
    });

    setFilter(true);
    setFilterArr(filterByYear);
  };

  const noExpensesWarning = (
    <h2 style={{ color: "red", textAlign: "center" }}>
      There are no expenses for that specific year, <br /> Try other year!
    </h2>
  );

  const handleOpenNewExpense = () => {
    console.log("hello");
    document.getElementById("newExpense").style.display = "block";
  };

  return (
    <div id="app">
      <AddExpense openNewExpense={handleOpenNewExpense} />
      <NewExpense onSavedNew={handleSavedExpenses} />
      <FilterExpenses handleFilter={handleFilterByYear} filterValue={filter} />
      <section>
        <Expenses
          listOfSavedExpenses={filter ? filterArr : expenses}
          onDeleteExpense={handleDelete}
        />
      </section>
    </div>
  );
}

export default App;
