import { GET_TODOS_REQUEST, GET_TODOS_SUCCESS, POST_TODO_SUCCESS, UPDATE_TODO_SUCCESS } from '../actions/actionTypes';

const todo = (state = {}, action) => {
  switch (action.type) {
    case POST_TODO_SUCCESS:
      // Keep this in todo, so can handle request-state for individual todos
      return action.payload;
    case UPDATE_TODO_SUCCESS:
      if (state.taskId !== action.payload.taskId) {
        return state;
      }
      return Object.assign({}, state, action.payload);
    default:
      return state;
  }
}

const items = (state = [], action) => {
  switch (action.type) {
    case POST_TODO_SUCCESS:
      return [
        ...state,
        todo(undefined, action)
      ];
    case UPDATE_TODO_SUCCESS:
      return state.map(t => todo(t, action));
    default:
      return state;
  }
}

// redefining todos as object with list of todo items, and API request status
const todos = (state = {
  items: [],
  isFetching: false,
  didInvalidate: false
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
        items: action.payload.todos,
        lastUpdated: action.payload.receivedAt
      });
    case POST_TODO_SUCCESS:
    case UPDATE_TODO_SUCCESS:
      return Object.assign({}, state, {
        items: items(state.items, action)
      });
    default:
      return state;
  }
}

export default todos;
