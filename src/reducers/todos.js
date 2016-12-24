import { ADD_TODO, TOGGLE_TODO, GET_TODOS_REQUEST, GET_TODOS_SUCCESS } from '../actions/actionTypes';

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

const items = (state = [], action) => {
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

// redefining todos as object with list of todo items, and API request status
const todos = (state = {
  items: [],
  isFetching: false,
  didInvalidate: true
}, action) => {
  switch (action.type) {
    case GET_TODOS_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false
      });
    case GET_TODOS_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        items: action.todos,
        lastUpdated: action.receivedAt
      });
    // case ADD_TODO:
    //   return [
    //     ...state,
    //     todo(undefined, action)
    //   ];
    // case TOGGLE_TODO:
    //   return state.map(t => todo(t, action));
    default:
      return state;
  }
}

export default todos;
