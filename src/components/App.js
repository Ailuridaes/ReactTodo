import React from 'react';
import ArrangedTodoList from '../containers/ArrangedTodoList';
import AddTodo from '../containers/AddTodo';
import { Grid, Row, Col } from 'react-bootstrap';
import logo from '../logo.svg';
import '../App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>React Todo</h1>
        </div>
        <Grid style={{paddingTop: 30}}>
          <Row className="show-grid">
            <Col md={4}>
              <AddTodo />
            </Col>
            <Col md={8}>
              <ArrangedTodoList />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
