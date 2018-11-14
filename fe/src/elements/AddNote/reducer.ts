import Actions from '../../actions';
import createReducer, { ICase, ISwitch } from '../../reducers/createReducer';
import { CHK } from '../../utils';
import IAddNoteState from './state';

const init: IAddNoteState = {
    text: '',
};

const textChanged = ({state, payload}: ICase<IAddNoteState>): IAddNoteState => ({
    ...state,
    text: CHK.str(payload),
});

const addTodo = ({state}: ICase<IAddNoteState>): IAddNoteState => ({
    ...state,
    text: '',
});

const SWITCH: ISwitch<IAddNoteState> = {
    [Actions.TEXT_CHANGED]: textChanged,
    [Actions.ADD_TODO]: addTodo,
};

export default createReducer(SWITCH, init);
