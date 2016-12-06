import { connect } from 'react-redux';
import { setSortProperty } from '../actions';
import Button from '../components/Button';

const mapStateToProps = (state, ownProps) => {
  return {
    active: ownProps.propertyName === state.sortProperty
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(setSortProperty(ownProps.propertyName));
    }
  };
}

const SortButton = connect(
  mapStateToProps,
  mapDispatchToProps
)(Button);

export default SortButton;
