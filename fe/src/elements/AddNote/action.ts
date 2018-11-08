import Actions, { IActions } from '../../actions';
import store from '../../reducers/store';
import IAddNoteState from './state';

const st = (): IAddNoteState => store.getState().addNoteState;

const Action = {
    onChange: (data: React.ChangeEvent<HTMLInputElement>): IActions<string> =>
        ({type: Actions.TEXT_CHANGED, payload: data.target.value}),

    onClick: (): IActions<string> =>
        ({type: Actions.ADD_TODO, payload: st().text}),
};

export default Action;
