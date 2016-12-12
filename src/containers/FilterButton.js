import { connect } from 'react-redux';
import { setVisibilityFilter } from '../actions';
import Button from '../components/Button';

const mapStateToProps = (state, ownProps) => {
  return {
    active: ownProps.propertyName === state.visibilityFilter
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(setVisibilityFilter(ownProps.propertyName));
    }
  };
}

const FilterButton = connect(
  mapStateToProps,
  mapDispatchToProps
)(Button);

export default FilterButton;
