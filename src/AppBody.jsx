import React from 'react';

import TodoForm from './TodoForm';

import './App.css';

class AppBody extends React.Component {
  constructor(props) {
    super(props);
    this.state = {todos: []};

    this.addTodo = this.addTodo.bind(this);
  }

  addTodo(todo) {
    // TODO: assign ID to todo on addition
    this.setState((prevState) => ({
      todos: prevState.todos.concat(todo)
    }));
  }

  render() {
    const todoList = this.state.todos.map((todo) =>
      <li key={todo.title}>
        <strong>{todo.title}</strong>
        <br />
        {todo.description}
      </li>
    );

    return (
      <div className="App-body">
        <TodoForm addTodo={this.addTodo} />
        <ul className="Todo-list">
          {todoList}
        </ul>
      </div>
    );
  }

}

export default AppBody;
