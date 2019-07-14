import React, { Fragment, useState, useContext } from "react";
import { MdSend } from "react-icons/md";
import ExpenseContext from "../context/expenseContext";
import uuid from "uuid";

const ExpenseForm = () => {
  const [expenseDetails, setExpenseDetails] = useState({
    charge: "",
    amount: "",
    id: uuid.v4()
  });

  const expenseContext = useContext(ExpenseContext);
  const { addItem } = expenseContext;

  const { amount, charge } = expenseDetails;

  const onChange = e =>
    setExpenseDetails({ ...expenseDetails, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    addItem(expenseDetails);
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
          Submit
          <MdSend className="btn-icon" />
        </button>
      </form>
    </Fragment>
  );
};

export default ExpenseForm;
