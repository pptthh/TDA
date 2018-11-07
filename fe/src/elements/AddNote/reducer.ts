import Actions, { IActions } from 'src/actions';
import { CHK, LOG } from 'src/utils';
import IAddNoteState from './state';

export const init: IAddNoteState = {
    text: '',
};

export const onChange = (data: string): IActions<string> =>
    ({type: Actions.TEXT_CHANGED, payload: data});

export const onClick = (data: string): IActions<string> =>
    ({type: Actions.ADD_TODO, payload: data});

const AddNoteReducer = (state: IAddNoteState = init, action: IActions<string>): IAddNoteState => {
    LOG(action.payload, '\t', action.type, 'AddNoteReducer');
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
            };
        }
    }
    return state;
};

export default AddNoteReducer;
