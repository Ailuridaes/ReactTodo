import React from 'react';
import { Panel } from 'react-bootstrap';

class Todo extends React.Component {
  render () {
    return (
      <Panel header={this.props.title} collapsible>
        {this.props.description}
      </Panel>
    )
  }
}

export default Todo;
