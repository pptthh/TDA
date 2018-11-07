import { combineReducers } from 'redux';
import AddNoteReducer from '../elements/AddNote/reducer';
import TestCounterReducer from '../elements/TestCounter/reducer';

export default combineReducers({
    addNoteState: AddNoteReducer,
    counterState: TestCounterReducer,
});
