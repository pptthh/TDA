import Actions, { IActions } from '../../actions';
import { CHK, LOG } from '../../utils';
import IAddNoteState from './state';

const init: IAddNoteState = {
    text: '',
};

const AddNoteReducer = (() => {
    return (state: IAddNoteState = init, {type, payload}: IActions<unknown>): IAddNoteState => {
        const swtch = {
            [Actions.TEXT_CHANGED]: () => ({
                ...state,
                text: CHK.str(payload),
            }),

            [Actions.ADD_TODO]: () => ({
                ...state,
                text: '',
            }),
        };

        LOG('', payload, '\t', type, 'TestCounterswtch');
        try {
            return swtch[type]();
        } catch (e) {
            if (e instanceof TypeError) {
                return state;
            } else {
                throw(e);
            }
        }
    };
})();

export default AddNoteReducer;
