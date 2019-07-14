import React, { Fragment, useContext } from "react";
import ExpenseItem from "./ExpenseItem";
import { MdDelete } from "react-icons/md";
import ExpenseContext from "../context/expenseContext";

const ExpenseList = () => {
  const expenseContext = useContext(ExpenseContext);
  const { expenses } = expenseContext;
  return (
    <Fragment>
      <ul className="list">
        {expenses.map(expense => {
          return <ExpenseItem key={expense.id} expense={expense} />;
        })}
      </ul>
      {expenses.length > 0 && (
        <button className="btn">
          clear expense
          <MdDelete className="btn-icon" />
        </button>
      )}
    </Fragment>
  );
};

export default ExpenseList;
