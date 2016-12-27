import { connect } from 'react-redux';
import { updateTodo } from '../actions/apiActions';
import Todo from '../components/Todo';

const mapStateToProps = (state, ownProps) => {
  return ownProps;
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onChecked: () => {
      dispatch(updateTodo(Object.assign({}, ownProps, {
        isCompleted: !ownProps.isCompleted
      })));
    }
  }
};

const TodoDisplay = connect(
  mapStateToProps,
  mapDispatchToProps
)(Todo);

export default TodoDisplay;
