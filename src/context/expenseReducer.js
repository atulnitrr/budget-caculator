import { DELETE_ITEM, ADD_ITEM } from "./types";

export default (state, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        expenses: [...state.expenses, action.payload]
      };
    case DELETE_ITEM:
      return {
        expenses: state.expenses.filter(exp => exp.id != action.payload)
      };
    default:
      return {
        ...state
      };
  }
};
