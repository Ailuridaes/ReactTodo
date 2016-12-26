import React from 'react';
import { connect } from 'react-redux';
import AddTodo from '../containers/AddTodo';
import ArrangedTodoList from '../containers/ArrangedTodoList';
import DisplayOptionControls from './DisplayOptionControls';
import Loader from './Loader';
import { Grid, Row, Col } from 'react-bootstrap';
import logo from '../logo.svg';
import '../App.css';

class App extends React.Component {
  render() {
    let listCol = null;
    if(this.props.isLoading) {
      listCol = <Loader />;
    } else {
      listCol = (
        <div>
          <DisplayOptionControls />
          <ArrangedTodoList />
        </div>
      );
    }

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
              { listCol }
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoading: state.todos.isFetching
  }
};

App = connect(mapStateToProps)(App);

export default App;
