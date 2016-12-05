import { connect } from 'react-redux';
import { toggleTodo } from '../actions';
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
  return {
    todos: todos.sort((a,b) => sortFunction(a, b, sortProperty))
  }
}

const mapStateToProps = (state) => {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
    // todos: getSortedTodos(getVisibleTodos(state.todos, state.visibilityFilter), state.sortProperty)
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick: (id) => {
      dispatch(toggleTodo(id))
    }
  }
};

const ArrangedTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);

export default ArrangedTodoList;
