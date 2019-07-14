import { DELETE_ITEM, ADD_ITEM, UPDATE_TOTAL } from "./types";

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
    default:
      return {
        ...state
      };
  }
};
