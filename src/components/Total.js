import React, { useContext } from "react";
import ExpenseContext from "../context/expenseContext";

const Total = () => {
  const expenseContext = useContext(ExpenseContext);
  const { total } = expenseContext;
  return (
    <h1>
      Total Expenses : <span className="total"> ${total}</span>
    </h1>
  );
};

export default Total;
