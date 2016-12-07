import { connect } from 'react-redux';
import { toggleTodo } from '../actions';
import Todo from '../components/Todo';

const mapStateToProps = (state, ownProps) => {
  return ownProps;
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onChecked: () => {
      dispatch(toggleTodo(ownProps.id));
    }
  }
};

const TodoDisplay = connect(
  mapStateToProps,
  mapDispatchToProps
)(Todo);

export default TodoDisplay;
