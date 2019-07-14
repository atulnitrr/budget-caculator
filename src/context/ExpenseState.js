import React, { useReducer } from "react";

import ExpenseContext from "./expenseContext";
import expenseReducer from "./expenseReducer";
import { ADD_ITEM } from "./types";

const ExpenseState = props => {
  const initialState = {
    expenses: [],
    current: null
  };
  const [state, dispatch] = useReducer(expenseReducer, initialState);

  const addItem = expenseDetatil => {
    dispatch({ type: ADD_ITEM, payload: expenseDetatil });
  };

  return (
    <ExpenseContext.Provider
      value={{
        expenses: state.expenses,
        current: state.current,
        addItem
      }}
    >
      {props.children}
    </ExpenseContext.Provider>
  );
};

export default ExpenseState;
