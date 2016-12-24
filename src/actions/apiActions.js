import { GET_TODOS_REQUEST, GET_TODOS_SUCCESS, GET_TODOS_FAILURE } from './actionTypes';
import { POST_TODO_REQUEST, POST_TODO_SUCCESS, POST_TODO_FAILURE } from './actionTypes';
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
      todos: json,
      receivedAt: Date.now()
    }
  }
);

export const getTodos = () => (
  function(dispatch) {
    dispatch(getTodosRequest());
    return fetch(API_URL)
      .then(response => response.json())
      .then(json =>
        dispatch(getTodosSuccess(json))
      )
  }
);

// Doesn't do anything for now
// Eventually could show waiting status on single new todo
const postTodoRequest = () => (
  {
    type: POST_TODO_REQUEST,
    payload: {}
  }
);

const postTodoSuccess = (json) => (
  {
    type: POST_TODO_SUCCESS,
    payload: json
  }
);

export const postTodo = (todo) => (
  function(dispatch) {
    dispatch(postTodoRequest());
    const req = new Request(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(todo)
    });
    return fetch(req)
      .then(response => response.json())
      .then(json => {
        console.log(json);
        return dispatch(postTodoSuccess(json))
        }
      )
  }
);
