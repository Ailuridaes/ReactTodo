import { ADD_TODO, TOGGLE_TODO } from '../actions/actionTypes';

const todo = (state = {}, action) => {
  switch (action.type) {
    case ADD_TODO:
      return Object.assign({}, action.payload, { completed: false });
    case TOGGLE_TODO:
      if (state.id !== action.payload.id) {
        return state;
      }
      return Object.assign({}, state, { completed: !state.completed });
    default:
      return state;
  }
}

const todos = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        todo(undefined, action)
      ];
    case TOGGLE_TODO:
      return state.map(t => todo(t, action));
    default:
      return state;
  }
}

export default todos;
