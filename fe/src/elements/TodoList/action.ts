import Actions, { IActions } from '../../actions';
import store from '../../reducers/store';
import ITodoListState from './state';

const st = (): ITodoListState => store.getState().todoListState;

const Action = {
    done: (): IActions<number> =>
        ({type: Actions.DONE_TODO, payload: st() && 0}),
};

export default Action;
