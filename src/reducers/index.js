import { combineReducers } from 'redux';
import todos from './todos';
import visibilityFilter from './visibilityFilter';
import sortProperty from './sortProperty';

const todoApp = combineReducers({
  todos,
  visibilityFilter,
  sortProperty
});

export default todoApp;
