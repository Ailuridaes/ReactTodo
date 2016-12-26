import React from 'react';
import SortButton from '../containers/SortButton';
import FilterButton from '../containers/FilterButton';
import { ButtonGroup, ButtonToolbar } from 'react-bootstrap';

const DisplayOptionControls = () => (
  <ButtonToolbar>
    <ButtonGroup style={{marginBottom: 20}}>
      <SortButton propertyName="title">
	      Sort Alphabetically
      </SortButton>
      <SortButton propertyName="priority">
	      Sort by Priority
      </SortButton>
    </ButtonGroup>
    <ButtonGroup style={{marginBottom: 20}}>
      <FilterButton propertyName="SHOW_ALL">
	      Show All
      </FilterButton>
      <FilterButton propertyName="SHOW_ACTIVE">
	      Show Active
      </FilterButton>
      <FilterButton propertyName="SHOW_COMPLETED">
	      Show Completed
      </FilterButton>
    </ButtonGroup>
  </ButtonToolbar>
);

export default DisplayOptionControls;
