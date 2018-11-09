import IAddNoteState from '../elements/AddNote/state';
import ICounterState from '../elements/TestCounter/state';
import ITodoListState from '../elements/TodoList/state';

interface IState {
    addNoteState: IAddNoteState;
    counterState: ICounterState;
    todoList: ITodoListState;
}

export default IState;
