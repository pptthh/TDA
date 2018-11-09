import Actions, { IActions } from '../../actions';
import { CHK, LOG } from '../../utils';
import IAddNoteState from './state';

const init: IAddNoteState = {
    text: '',
};

interface IAddNoteSwtch {
    state: IAddNoteState;
    payload: unknown;
}

const swtch = {
    [Actions.TEXT_CHANGED]: ({state, payload}: IAddNoteSwtch) => ({
        ...state,
        text: CHK.str(payload),
    }),

    [Actions.ADD_TODO]: ({state}: IAddNoteSwtch) => ({
        ...state,
        text: '',
    }),
};

const AddNoteReducer = (state: IAddNoteState = init, {type, payload}: IActions<unknown>): IAddNoteState => {
    LOG('', payload, '\t', type, 'TestCounterswtch');
    try {
        return swtch[type]({state, payload} as IAddNoteSwtch);
    } catch (e) {
        if (e instanceof TypeError) {
            return state;
        } else {
            throw(e);
        }
    }
};

export default AddNoteReducer;
