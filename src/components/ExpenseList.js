import React, { Fragment } from "react";
import ExpenseItem from "./ExpenseItem";
import PropTypes from "prop-types";
import { MdDelete } from "react-icons/md";

const ExpenseList = ({ expenses }) => {
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

ExpenseList.propTypes = {
  expenses: PropTypes.array.isRequired
};
export default ExpenseList;
