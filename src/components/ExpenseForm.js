import React, { Fragment } from "react";
import { MdSend } from "react-icons/md";

const ExpenseForm = () => {
  return (
    <Fragment>
      <form>
        <div className="form-center">
          <div className="form-group">
            <label htmlFor="charge"> charge</label>
            <input
              type="text"
              className="form-control"
              name="charge"
              id="charge"
              placeholder="e.g rent"
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
