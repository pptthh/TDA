import { connect } from 'react-redux';
import TodoList from '.';
import IState from '../../state';

const mapStateToProps = (state: IState) => state.todoListState;

const mapDispatchToProps = (dispatch: Function) => ({
    done: () => dispatch(),
    edit: () => dispatch(),
});

const TodoListContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(TodoList);

export default TodoListContainer;
