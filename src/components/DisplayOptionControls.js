import React from 'react';
import SortButton from '../containers/SortButton';
import { ButtonToolbar } from 'react-bootstrap';

const DisplayOptionControls = () => (
  <ButtonToolbar style={{marginBottom: 20}}>
    <SortButton propertyName="title">
      Sort Alphabetically
    </SortButton>
    <SortButton propertyName="priority">
      Sort by Priority
    </SortButton>
  </ButtonToolbar>
);

export default DisplayOptionControls;
