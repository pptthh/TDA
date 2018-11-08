import Actions, { IActions } from '../../actions';
import { CHK, LOG } from '../../utils';
import IAddNoteState from './state';

const init: IAddNoteState = {
    text: '',
};

const AddNoteReducer = (state: IAddNoteState = init, action: IActions<string>): IAddNoteState => {
    LOG('', action.payload, '\t', action.type, 'AddNoteReducer');
    switch (action.type) {
        case Actions.TEXT_CHANGED: {
            return {
                ...state,
                text: CHK.str(action.payload),
            };
        }
        case Actions.ADD_TODO: {
            return {
                ...state,
                text: '',
            };
        }
    }
    return state;
};

export default AddNoteReducer;
