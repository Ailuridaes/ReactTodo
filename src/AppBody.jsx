import React from 'react';

import TodoForm from './TodoForm';
import Todo from './Todo';

import { Grid, Row, Col } from 'react-bootstrap';

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
      <Todo title={todo.title} description={todo.description} priority={todo.priority} key={todo.title} />
    );

    return (
      <Grid style={{"padding-top": 30}}>
        <Row className="show-grid">
          <Col md={4}>
            <TodoForm addTodo={this.addTodo} />
          </Col>
          <Col md={8}>
            <ul className="Todo-list">
              {todoList}
            </ul>
          </Col>
        </Row>
      </Grid>
    );
  }

}

export default AppBody;
