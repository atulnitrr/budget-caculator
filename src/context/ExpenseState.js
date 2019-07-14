import React, { useReducer } from "react";

import ExpenseContext from "./expenseContext";
import expenseReducer from "./expenseReducer";
import {
  ADD_ITEM,
  DELETE_ITEM,
  UPDATE_TOTAL,
  SET_CURRENT,
  UPDATE_ITEM
} from "./types";

const ExpenseState = props => {
  const initialState = {
    expenses: [],
    total: 0,
    currentItem: null
  };
  const [state, dispatch] = useReducer(expenseReducer, initialState);

  const updateTotal = () => {
    dispatch({ type: UPDATE_TOTAL });
  };
  const addItem = expenseDetatil => {
    dispatch({ type: ADD_ITEM, payload: expenseDetatil });
    updateTotal();
  };

  const updateExpenses = expenseDetatil => {
    dispatch({ type: UPDATE_ITEM, payload: expenseDetatil });
    updateTotal();
  };

  const deleteItem = id => {
    dispatch({ type: DELETE_ITEM, payload: id });
    updateTotal();
  };

  const setCurrntItem = id => {
    dispatch({ type: SET_CURRENT, payload: id });
  };
  return (
    <ExpenseContext.Provider
      value={{
        expenses: state.expenses,
        currentItem: state.currentItem,
        total: state.total,
        addItem,
        deleteItem,
        updateTotal,
        setCurrntItem,
        updateExpenses
      }}
    >
      {props.children}
    </ExpenseContext.Provider>
  );
};

export default ExpenseState;
