import React from 'react';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    // send new todo to callback provided by AppBody
    this.props.addTodo(this.state);
    // clear form
    this.setState({
      title: '',
      description: ''
    });
  }

  render() {
    return (
      <form className="Todo-form">
        Todo:
        <br />
        <input type="text" name="title" value={this.state.title} onChange={this.handleChange} placeholder="Task name" />
        <br />
        <input type="textarea" name="description" value={this.state.description} onChange={this.handleChange} placeholder="Enter a description..." />
        <br />
        <input type="submit" value="Submit" onClick={this.handleSubmit} />
      </form>
    );
  }
}

export default TodoForm;
