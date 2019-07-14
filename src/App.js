import React, { Fragment, useState } from "react";
import "./App.css";
import ExpenseForm from "./components/ExpenseForm";
import Alert from "./components/Alert";
import ExpnesList from "./components/ExpenseList";
import Total from "./components/Total";
import uuid from "uuid";
import ExpenseState from "./context/ExpenseState";

const App = () => {
  const [expenses, setExpenses] = useState([]);

  const getExpense = expenseDetails => {
    expenseDetails.id = uuid.v4();
    setExpenses([...expenses, expenseDetails]);
  };

  return (
    <Fragment>
      <ExpenseState>
        {/* <Alert /> */}
        <h1>budget calculator</h1>
        <main className="App">
          <ExpenseForm getExpense={getExpense} />
          <ExpnesList />
        </main>
        <Total />
      </ExpenseState>
    </Fragment>
  );
};

export default App;
