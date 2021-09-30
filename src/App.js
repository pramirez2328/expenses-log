import "./App.css";
import Expenses from "./components/Expenses";
import NewExpense from "./components/NewExpense";
function App() {
  return (
    <div id="app">
      <NewExpense />
      <section>
        <Expenses />
      </section>
    </div>
  );
}

export default App;
