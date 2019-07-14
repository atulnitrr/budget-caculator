import React, { Fragment, useState } from "react";
import "./App.css";
import ExpenseForm from "./components/ExpenseForm";
import Alert from "./components/Alert";
import ExpnesList from "./components/ExpenseList";
import uuid from "uuid";

const App = () => {
  const inittialExpenses = [
    { id: uuid.v4(), charge: "rent", amount: 1200 },
    { id: uuid.v4(), charge: "bike", amount: 100 },
    { id: uuid.v4(), charge: "electricity", amount: 1200 }
  ];

  const [expenses, setExpenses] = useState(inittialExpenses);
  console.log(expenses);

  return (
    <Fragment>
      <Alert />
      <h1>budget calculator</h1>
      <main className="App">
        <ExpenseForm />
        <ExpnesList expenses={expenses} />
      </main>
      <h1>
        Total expenses :{" "}
        <span className="total">
          $
          {expenses.reduce((acc, curr) => {
            return (acc += curr.amount);
          }, 0)}
        </span>
      </h1>
    </Fragment>
  );
};

export default App;
