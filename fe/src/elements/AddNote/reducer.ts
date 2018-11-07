import Actions, { IActions } from 'src/actions';
import { CHK, LOG } from 'src/utils';
import IAddNoteState from './state';

const init: IAddNoteState = {
    text: '',
};

export const onChange = (data: string): IActions<string> =>
    ({type: Actions.TEXT_CHANGED, payload: data});

export const onClick = (data: string): IActions<string> =>
    ({type: Actions.ADD_TODO, payload: data});

const AddNoteReducer = (state: IAddNoteState = init, action: IActions<string>): IAddNoteState => {
    switch (action.type) {
        case Actions.TEXT_CHANGED: {
            return {
                ...state,
                text: CHK.str(action.payload),
            };
        }
        case Actions.ADD_TODO: {
            LOG(action.payload);
            return {
                ...state,
            };
        }
    }
    return state;
};

export default AddNoteReducer;
