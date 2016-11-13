import React from 'react'

class Todo extends React.Component {
  render () {
    return (
      <li>
        <strong>{this.props.title}</strong>
        <br />
        {this.props.description}
      </li>
    )
  }
}

export default Todo;
