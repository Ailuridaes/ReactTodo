import React from 'react';
import { Panel, Checkbox } from 'react-bootstrap';

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditMode: false,
      isExpanded: true
    }
  }

  render () {
    let priorityClass = '';
    let priorityText = '';

    switch (this.props.priority) {
      case 0:
        priorityClass = "danger";
        priorityText = "high"
        break;
      case 2:
        priorityClass = "success";
        priorityText = "low";
        break;
      case 1:
      default:
        priorityClass = "warning";
        priorityText = "medium";
        break;
    }

    const header = (
      <div>
        <Checkbox inline onClick={this.props.onChecked} style={{ verticalAlign: 'top' }} />
        <span style={{ textDecoration: this.props.completed ? 'line-through' : 'none' }}>
          {this.props.title}
        </span>
      </div>
    );

    return (
      <Panel header={header} bsStyle={this.props.completed ? 'default' : priorityClass}>
        <p>{this.props.description}</p>
        <strong>This task is {priorityText} priority.</strong>
      </Panel>
    );
  }
}

export default Todo;
