import React, { Fragment, useState, useContext, useEffect } from "react";
import { MdSend } from "react-icons/md";
import ExpenseContext from "../context/expenseContext";
import uuid from "uuid";

const ExpenseForm = () => {
  const [expenseDetails, setExpenseDetails] = useState({
    charge: "",
    amount: ""
  });
  const expenseContext = useContext(ExpenseContext);
  const { addItem, currentItem, updateExpenses, clearCurrent } = expenseContext;

  useEffect(() => {
    if (currentItem) {
      setExpenseDetails(currentItem[0]);
    }
  }, [currentItem]);

  const { amount, charge } = expenseDetails;

  const onChange = e =>
    setExpenseDetails({ ...expenseDetails, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    expenseDetails.id = uuid.v4();
    expenseDetails.amount = parseInt(expenseDetails.amount);
    if (currentItem) {
      expenseDetails.id = currentItem[0].id;
      updateExpenses(expenseDetails);
      clearCurrent();
    } else {
      addItem(expenseDetails);
    }

    setExpenseDetails({
      charge: "",
      amount: ""
    });
  };

  return (
    <Fragment>
      <form onSubmit={onSubmit}>
        <div className="form-center">
          <div className="form-group">
            <label htmlFor="charge"> charge</label>
            <input
              type="text"
              className="form-control"
              name="charge"
              id="charge"
              placeholder="e.g rent"
              value={charge}
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="amount">amount</label>
            <input
              type="text"
              className="form-control"
              name="amount"
              id="amount"
              placeholder="e.g 1000"
              value={amount}
              onChange={onChange}
            />
          </div>
        </div>
        <button type="submit" className="btn">
          {currentItem ? "Update Item" : "Add Item"}
          <MdSend className="btn-icon" />
        </button>
      </form>
    </Fragment>
  );
};

export default ExpenseForm;
