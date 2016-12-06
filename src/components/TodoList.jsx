import React from 'react';
import Todo from './Todo';

//  TODO: move onTodoChecked into todo - pass as prop or make another container
const TodoList = ({ todos, onTodoChecked }) => (
  <ul>
    {todos.map(todo =>
      <Todo
        key={todo.id}
        {...todo}
        onChecked={() => onTodoChecked(todo.id)}
      />
    )}
  </ul>
);

export default TodoList;
