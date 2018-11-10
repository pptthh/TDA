import Actions, { IActions } from '../../actions';
import { CHK, LOG, SWITCH } from '../../utils';
import ITodoListState from './state';

const init: ITodoListState = {
    list: [],
};

interface ITodoListSwitch {
    state: ITodoListState;
    payload: unknown;
}

const CASES = {
    [Actions.ADD_TODO]: ({state, payload}: ITodoListSwitch): ITodoListState => ({
        ...state,
        list: state.list.concat(CHK.str(payload)),
    }),
};

const TodoListReducer = SWITCH(CASES, init);

const _TodoListReducer = (state: ITodoListState = init, {type, payload}: IActions<unknown>): ITodoListState => {
    LOG('', payload, '\t', type, 'ITodoListSwitch');
    try {
        return CASES[type]({state, payload} as ITodoListSwitch);
    } catch (e) {
        if (e instanceof TypeError) {
            return state;
        } else {
            throw(e);
        }
    }
};

LOG(_TodoListReducer);
export default TodoListReducer;
