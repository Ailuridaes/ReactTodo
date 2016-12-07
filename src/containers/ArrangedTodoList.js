import { connect } from 'react-redux';
import TodoList from '../components/TodoList';

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed);
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed);
    case 'SHOW_ALL':
    default:
      return todos;
  }
};

const sortFunction = (todoA, todoB, sortProperty) => {
  let a = null;
  let b = null;

  // make sort case-insensitive for strings
  if (typeof todoA[sortProperty] === 'string') {
    a = todoA[sortProperty].toUpperCase();
    b = todoB[sortProperty].toUpperCase();
  } else {
    a = todoA[sortProperty];
    b = todoB[sortProperty];
  }

  if (a < b) {
    return -1;
  } else if (a > b) {
    return 1;
  } else {
    return 0;
  }
};

const getSortedTodos = (todos, sortProperty) => {
  return todos.slice(0).sort((a,b) => sortFunction(a, b, sortProperty));
}

const mapStateToProps = (state) => {
  return {
    todos: getSortedTodos(getVisibleTodos(state.todos, state.visibilityFilter), state.sortProperty)
    // todos: getSortedTodos(state.todos, state.sortProperty)
  }
};

const ArrangedTodoList = connect(
  mapStateToProps
)(TodoList);

export default ArrangedTodoList;
