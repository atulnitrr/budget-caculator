import React, { useContext } from "react";
import { MdDelete, MdEdit } from "react-icons/md";
import PropTypes from "prop-types";
import ExpenseContext from "../context/expenseContext";

const ExpenseItem = ({ expense }) => {
  const expenseContext = useContext(ExpenseContext);
  const { deleteItem, setCurrntItem } = expenseContext;

  const onDelete = e => {
    deleteItem(id);
  };

  const { id, amount, charge } = expense;
  return (
    <li className="item">
      <div className="info">
        <span className="expense">{charge}</span>
        <span className="amount">${amount}</span>
      </div>
      <div>
        <button
          className="edit-btn"
          aria-label="edit button"
          onClick={() => setCurrntItem(id)}
        >
          <MdEdit />
        </button>
        <button
          className="clear-btn"
          aria-label="delete button"
          onClick={onDelete}
        >
          <MdDelete />
        </button>
      </div>
    </li>
  );
};

ExpenseItem.propTypes = {
  expense: PropTypes.object.isRequired
};

export default ExpenseItem;
