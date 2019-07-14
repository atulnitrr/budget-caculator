import React, { useReducer } from "react";

import ExpenseContext from "./expenseContext";
import expenseReducer from "./expenseReducer";
import { ADD_ITEM, DELETE_ITEM, UPDATE_TOTAL } from "./types";

const ExpenseState = props => {
  const initialState = {
    expenses: [],
    total: 0,
    current: null
  };
  const [state, dispatch] = useReducer(expenseReducer, initialState);

  const updateTotal = () => {
    dispatch({ type: UPDATE_TOTAL });
  };
  const addItem = expenseDetatil => {
    dispatch({ type: ADD_ITEM, payload: expenseDetatil });
    updateTotal();
  };

  const deleteItem = id => {
    dispatch({ type: DELETE_ITEM, payload: id });
    updateTotal();
  };
  return (
    <ExpenseContext.Provider
      value={{
        expenses: state.expenses,
        current: state.current,
        total: state.total,
        addItem,
        deleteItem,
        updateTotal
      }}
    >
      {props.children}
    </ExpenseContext.Provider>
  );
};

export default ExpenseState;
