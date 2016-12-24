import { GET_TODOS_REQUEST, GET_TODOS_SUCCESS, GET_TODOS_FAILURE } from './actionTypes';
import { API_URL } from '../values.js';
import fetch from 'isomorphic-fetch';

const getTodosRequest = () => (
  {
    type: GET_TODOS_REQUEST,
    payload: {}
  }
);

const getTodosSuccess = (json) => (
  {
    type: GET_TODOS_SUCCESS,
    payload: {
      todos: json.data.children.map(child => child.data),
      receivedAt: Date.now()
    }
  }
);

export const getTodos = () => (
  function(dispatch) {
    dispatch(getTodosRequest());
    return fetch(API_URL)
      .then(response => response.json)
      .then(json =>
        dispatch(getTodosSuccess(json));
      )
  }
)
