import { combineReducers } from 'redux';
import AddNoteReducer from '../elements/AddNote/reducer';
import TestCounterReducer from '../elements/TestCounter/reducer';
import TodoListReducer from '../elements/TodoList/reducer';

export default combineReducers({
    addNoteState: AddNoteReducer,
    counterState: TestCounterReducer,
    todoList: TodoListReducer,
});
