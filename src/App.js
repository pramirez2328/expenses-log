import React, { useState } from "react";
import "./App.css";
import Expenses from "./components/Expenses";
import NewExpense from "./components/NewExpense";
import savedExpenses from "./utilities/expenses";
function App() {
  const [expenses, setExpenses] = useState(savedExpenses);
  const handleSavedExpenses = (item) => {
    setExpenses((prevState) => {
      return [...prevState, item];
    });
  };

  const handleDelete = (id) => {
    let newList = expenses.filter((i) => i.id !== id);
    setExpenses(newList);
  };

  return (
    <div id="app">
      <NewExpense onSavedNew={handleSavedExpenses} />
      <section>
        <Expenses
          listOfSavedExpenses={expenses}
          onDeleteExpense={handleDelete}
        />
      </section>
    </div>
  );
}

export default App;
