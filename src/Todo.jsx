import React from 'react';
import { Panel } from 'react-bootstrap';

class Todo extends React.Component {
  render () {
    let priorityClass = '';
    let priorityText = '';

    switch (this.props.priority) {
      case '1':
        priorityClass = "danger";
        priorityText = "high"
        break;
      case '3':
        priorityClass = "success";
        priorityText = "low";
        break;
      case '2':
      default:
        priorityClass = "warning";
        priorityText = "medium";
        break;
    }

    return (
      <Panel header={this.props.title} bsStyle={priorityClass} collapsible>
        <p>{this.props.description}</p>
        <strong>This task is {priorityText} priority.</strong>
      </Panel>
    )
  }
}

export default Todo;
