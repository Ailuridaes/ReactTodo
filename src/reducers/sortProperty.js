import { SET_SORT_PROPERTY } from '../actions/actionTypes';

const sortProperty = (state = 'title', action) => {
  switch (action.type) {
    case SET_SORT_PROPERTY:
      return action.payload.property;
    default:
      return state;
  }
}

export default sortProperty;
