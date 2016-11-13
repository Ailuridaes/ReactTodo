import React from 'react';

import TodoForm from './TodoForm';
import Todo from './Todo';

import './App.css';

class AppBody extends React.Component {
  constructor(props) {
    super(props);
    this.state = {todos: []};

    this.addTodo = this.addTodo.bind(this);
  }

  addTodo(todo) {
    // TODO: only add if doesn't already exist
    this.setState((prevState) => ({
      todos: prevState.todos.concat(todo)
    }));
  }

  render() {
    const todoList = this.state.todos.map((todo) =>
      <Todo title={todo.title} description={todo.description} key={todo.title} />
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
