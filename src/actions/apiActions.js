import { GET_TODOS_REQUEST, GET_TODOS_SUCCESS, GET_TODOS_FAILURE } from '../actionTypes';

export const getTodosRequest = () => (
  {
    type: GET_TODOS_REQUEST,
    payload: {}
  }
);

export const getTodosSuccess = () => (
  {
    type: GET_TODOS_SUCCESS,
    payload: {
      todos: json.data.children.map(child => child.data),
      receivedAt: Date.now()
    }
  }
);
