import React from 'react';
import TodoDisplay from '../containers/TodoDisplay';

//  TODO: move onTodoChecked into todo - pass as prop or make another container
const TodoList = ({ todos, onTodoChecked }) => (
  <ul>
    {todos.map(todo =>
      <TodoDisplay
        key={todo.taskId}
        {...todo}
      />
    )}
  </ul>
);

export default TodoList;
