import React from "react";
import ExpenseItem from "./ExpenseItem";
import PropTypes from "prop-types";

const ExpenseList = ({ expenses }) => {
  return (
    <div>
      <h2>Hello from expense List</h2>
      <ExpenseItem />
    </div>
  );
};

ExpenseList.propTypes = {
  expenses: PropTypes.array.isRequired
};
export default ExpenseList;
