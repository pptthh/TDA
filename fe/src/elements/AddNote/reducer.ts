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
    case: (state: IAddNoteState = init, {type, payload}: IActions<unknown>): IAddNoteState => {
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
    },

    [Actions.TEXT_CHANGED]: (prop: IAddNoteSwtch) => ({
        ...prop.state,
        text: CHK.str(prop.payload),
    }),

    [Actions.ADD_TODO]: (prop: IAddNoteSwtch) => ({
        ...prop.state,
        text: '',
    }),
};

export default swtch.case;
