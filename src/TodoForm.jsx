import React from 'react';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
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
        description: this.state.description
      });
      // clear form
      this.setState({
        title: '',
        description: ''
      });
    } else {
      this.setState({
        titleError: 'Please fill in the task name!'
      });
    }
  }

  render() {
    return (
      <form className="Todo-form">
        Todo:
        <br />
        <input type="text" name="title" value={this.state.title} onChange={this.handleChange} placeholder="Task name" />
        <br />
        { this.state.titleError && <p>{this.state.titleError}</p> }
        <input type="textarea" name="description" value={this.state.description} onChange={this.handleChange} placeholder="Enter a description..." />
        <br />
        <input type="submit" value="Submit" onClick={this.handleSubmit} />
      </form>
    );
  }
}

export default TodoForm;
