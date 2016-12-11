import { ADD_TODO, TOGGLE_TODO, SET_SORT_PROPERTY, SET_VISIBILITY_FILTER } from './actionTypes';

let nextTodoId = 0;

export const addTodo = (todo) => (
  {
    type: ADD_TODO,
    payload: {
      id: nextTodoId++,
      title: todo.title,
      description: todo.description,
      priority: todo.priority
    }
  }
);

export const toggleTodo = (id) => (
  {
    type: TOGGLE_TODO,
    payload: { id: id }
  }
);

export const setSortProperty = (property) => (
  {
    type: SET_SORT_PROPERTY,
    payload: { property: property }
  }
);

export const setVisibilityFilter = (filter) => (
  {
    type: SET_VISIBILITY_FILTER,
    payload: { filter: filter }
  }
);
