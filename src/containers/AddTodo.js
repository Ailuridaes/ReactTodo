import { connect } from 'react-redux';
import { addTodo } from '../actions';
import TodoForm from '../components/TodoForm';

const mapStateToProps = (state) => {
  return {};
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (todo) => {
      dispatch(addTodo(todo))
    }
  }
};

const AddTodo = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoForm);

export default AddTodo;
