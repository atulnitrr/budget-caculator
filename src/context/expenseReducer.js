import {
  DELETE_ITEM,
  ADD_ITEM,
  UPDATE_TOTAL,
  SET_CURRENT,
  UPDATE_ITEM
} from "./types";

export default (state, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        expenses: [...state.expenses, action.payload]
      };
    case UPDATE_ITEM:
      return {
        ...state,
        expenses: state.expenses.map(exp =>
          exp.id === action.payload.id ? action.payload : exp
        )
      };
    case DELETE_ITEM:
      return {
        expenses: state.expenses.filter(exp => exp.id !== action.payload)
      };

    case UPDATE_TOTAL:
      return {
        ...state,
        total:
          state.expenses.length === 0
            ? 0
            : state.expenses.reduce((acc, curr) => {
                return (acc += curr.amount);
              }, 0)
      };
    case SET_CURRENT:
      return {
        ...state,
        currentItem: state.expenses.filter(exp => exp.id === action.payload)
      };
    default:
      return {
        ...state
      };
  }
};
