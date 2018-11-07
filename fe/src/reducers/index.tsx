import { combineReducers } from 'redux';
import AddNoteReducer from 'src/elements/AddNote/reducer';
import TestCounterReducer from 'src/elements/TestCounter/reducer';

export default combineReducers({
    addNoteState: AddNoteReducer,
    counterState: TestCounterReducer,
});
