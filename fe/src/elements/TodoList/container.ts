import { connect } from 'react-redux';
import TodoList from '.';
import IState from '../../state';
import Action from './action';

const mapStateToProps = (state: IState) => state.todoListState;

const mapDispatchToProps = (dispatch: Function) => ({
    done: (data: number) => dispatch(Action.done(data)),
    edit: (data: number) => dispatch(Action.edit(data)),
});

const TodoListContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(TodoList);

export default TodoListContainer;
