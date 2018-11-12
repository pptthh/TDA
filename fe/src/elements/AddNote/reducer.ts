import Actions from '../../actions';
import createReducer, { ISwitch } from '../../reducers/createReducer';
import { CHK } from '../../utils';
import IAddNoteState from './state';

const init: IAddNoteState = {
    text: '',
};

const SWITCH: ISwitch<IAddNoteState> = {
    [Actions.TEXT_CHANGED]: ({state, payload}) => ({
        ...state,
        text: CHK.str(payload),
    }),

    [Actions.ADD_TODO]: ({state}) => ({
        ...state,
        text: '',
    }),
};

const AddNoteReducer = createReducer(SWITCH, init);

export default AddNoteReducer;
