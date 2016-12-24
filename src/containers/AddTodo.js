import { connect } from 'react-redux';
import { postTodo } from '../actions/apiActions';
import TodoForm from '../components/TodoForm';

const mapStateToProps = (state) => {
  return {};
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (todo) => {
      dispatch(postTodo(todo));
    }
  }
};

const AddTodo = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoForm);

export default AddTodo;
