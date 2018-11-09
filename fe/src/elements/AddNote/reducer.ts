import Actions, { IActions } from '../../actions';
import { CHK, LOG } from '../../utils';
import IAddNoteState from './state';

const init: IAddNoteState = {
    text: '',
};

interface IAddNoteSwitch {
    state: IAddNoteState;
    payload: unknown;
}

const swtch = {
    [Actions.TEXT_CHANGED]: ({state, payload}: IAddNoteSwitch) => ({
        ...state,
        text: CHK.str(payload),
    }),

    [Actions.ADD_TODO]: ({state}: IAddNoteSwitch) => ({
        ...state,
        text: '',
    }),
};

const AddNoteReducer = (state: IAddNoteState = init, {type, payload}: IActions<unknown>): IAddNoteState => {
    LOG('', payload, '\t', type, 'IAddNoteSwitch');
    try {
        return swtch[type]({state, payload} as IAddNoteSwitch);
    } catch (e) {
        if (e instanceof TypeError) {
            return state;
        } else {
            throw(e);
        }
    }
};

export default AddNoteReducer;
