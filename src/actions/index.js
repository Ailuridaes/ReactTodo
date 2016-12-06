let nextTodoId = 0;

export const addTodo = (todo) => {
  return {
    type: 'ADD_TODO',
    payload: {
      id: nextTodoId++,
      title: todo.title,
      description: todo.description,
      priority: todo.priority
    }
  }
}

export const toggleTodo = (id) => {
  return {
    type: 'TOGGLE_TODO',
    payload: { id: id }
  }
}

export const setVisibilityFilter = (filter) => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    payload: { filter: filter }
  }
}

export const setSortProperty = (property) => {
  return {
    type: 'SET_SORT_PROPERTY',
    payload: { property: property }
  }
}
