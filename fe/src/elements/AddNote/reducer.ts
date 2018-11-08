import Actions, { IActions } from '../../actions';
import { CHK, LOG } from '../../utils';
import IAddNoteState from './state';

const init: IAddNoteState = {
    text: '',
};

const switchCase = {};

const AddNoteReducer = (state: IAddNoteState = init, action: IActions<string>): IAddNoteState => {
    LOG('', action.payload, '\t', action.type, 'AddNoteReducer');

    switchCase[Actions.TEXT_CHANGED] = () => ({
        ...state,
        text: CHK.str(action.payload),
    });

    switchCase[Actions.ADD_TODO] = () => ({
        ...state,
        text: '',
    });

    try {
        return switchCase[action.type]();
    } catch (e) {
        if (e instanceof TypeError) {
            return state;
        } else { throw(e); }
    }
};

export default AddNoteReducer;
