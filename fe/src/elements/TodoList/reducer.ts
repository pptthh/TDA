import { IActions } from '../../actions';
import { LOG } from '../../utils';
import ITodoListState from './state';

const init: ITodoListState = {
    list: [],
};

interface IAddNoteSwtch {
    state: ITodoListState;
    payload: unknown;
}

const swtch = {};

const TodoListReducer = (state: ITodoListState = init, {type, payload}: IActions<unknown>): ITodoListState => {
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

export default TodoListReducer;
