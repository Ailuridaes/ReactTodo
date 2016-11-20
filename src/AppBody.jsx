import React from 'react';

import TodoForm from './TodoForm';
import Todo from './Todo';

import { Button, ButtonToolbar, Grid, Row, Col } from 'react-bootstrap';

class AppBody extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      sortProperty: 'title'
    };

    this.addTodo = this.addTodo.bind(this);
    this.changeSort = this.changeSort.bind(this);
  }

  addTodo(todo) {
    // TODO: only add if doesn't already exist
    this.setState((prevState) => ({
      todos: prevState.todos.concat(todo)
    }));
  }

  changeSort(sortProperty) {
    this.setState({
      sortProperty: sortProperty
    });
  }

  sortFunction(todoA, todoB) {
    let sortBy = this.state.sortProperty;
    let a = null;
    let b = null;

    // make sort case-insensitive for strings
    if (typeof todoA[sortBy] === 'string') {
      a = todoA[sortBy].toUpperCase();
      b = todoB[sortBy].toUpperCase();
    } else {
      a = todoA[sortBy];
      b = todoB[sortBy];
    }

    if (a < b) {
      return -1;
    } else if (a > b) {
      return 1;
    } else {
      return 0;
    }
  }

  render() {
    const todoList = this.state.todos
      .sort((a,b) => this.sortFunction(a, b))
      .map((todo) =>
        <Todo title={todo.title} description={todo.description} priority={todo.priority} key={todo.title} />
      );

    return (
      <Grid style={{paddingTop: 30}}>
        <Row className="show-grid">
          <Col md={4}>
            <TodoForm addTodo={this.addTodo} />
          </Col>
          <Col md={8}>
            <ButtonToolbar style={{marginBottom: 20}}>
              <Button bsStyle="primary" onClick={() => this.changeSort('title')}>
                Sort Alphabetically
              </Button>
              <Button bsStyle="primary" onClick={() => this.changeSort('priority')}>
                Sort by Priority
              </Button>
            </ButtonToolbar>
            {todoList}
          </Col>
        </Row>
      </Grid>
    );
  }

}

export default AppBody;
