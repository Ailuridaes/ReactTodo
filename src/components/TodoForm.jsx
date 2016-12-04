import React from 'react';
import { Button, ControlLabel, FormControl, FormGroup, Well } from 'react-bootstrap';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      priority: '2',
      titleError: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
    // can clear titleError when title is edited
    if (this.state.titleError && e.target.name === 'title') {
      this.setState({
        titleError: ''
      })
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    // validate that title is filled out
    if (this.state.title.length > 0) {
      // send new todo to callback provided by AppBody
      this.props.addTodo({
        title: this.state.title,
        description: this.state.description,
        priority: this.state.priority
      });
      // clear form
      this.setState({
        title: '',
        description: '',
        priority: '2'
      });
    } else {
      this.setState({
        titleError: 'Please fill in the task name!'
      });
    }
  }

  render() {
    return (
      <Well>
        <form>
          <legend>Add New Todo</legend>
          <FormGroup>
            <ControlLabel>Title</ControlLabel>
            <FormControl type="text" name="title" value={this.state.title} onChange={this.handleChange} placeholder="Task name" />
            { this.state.titleError && <p>{this.state.titleError}</p> }
          </FormGroup>
          <FormGroup>
            <ControlLabel>Description</ControlLabel>
            <FormControl componentClass="textarea" name="description" value={this.state.description} onChange={this.handleChange} placeholder="Enter a description..." />
          </FormGroup>
          <FormGroup>
            <ControlLabel>Priority</ControlLabel>
            <FormControl componentClass="select" name="priority" value={this.state.priority} onChange={this.handleChange}>
              <option value="1">High</option>
              <option value="2">Medium</option>
              <option value="3">Low</option>
            </FormControl>
          </FormGroup>
          <Button type="submit" onClick={this.handleSubmit} bsStyle="primary">Submit</Button>
        </form>
      </Well>
    );
  }
}

export default TodoForm;
