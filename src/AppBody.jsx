import React from 'react';
import ReactDOM from 'react-dom';

import TodoForm from './TodoForm';

import './App.css';

class AppBody extends React.Component {
  constructor(props) {
    super(props);
    this.state = {todos: []};

    this.addTodo = this.addTodo.bind(this);
  }

  addTodo(todo) {
    this.setState((prevState) => ({
      todos: prevState.todos.concat(todo)
    }));
  }

  render() {
    return (
      <div className="App-body">
        <TodoForm addTodo={this.addTodo} />
      </div>
    );
  }

}

export default AppBody;
