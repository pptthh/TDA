import Actions, { IActions } from '../../actions';
import { CHK, LOG } from '../../utils';
import ITodoListState from './state';

const init: ITodoListState = {
    list: [],
};

interface ITodoListSwitch {
    state: ITodoListState;
    payload: unknown;
}

const swtch = {
    [Actions.ADD_TODO]: ({state, payload}: ITodoListSwitch) => ({
        ...state,
        list: state.list.concat(CHK.str(payload)),
    }),
};

const TodoListReducer = (state: ITodoListState = init, {type, payload}: IActions<unknown>): ITodoListState => {
    LOG('', payload, '\t', type, 'ITodoListSwitch');
    try {
        return swtch[type]({state, payload} as ITodoListSwitch);
    } catch (e) {
        if (e instanceof TypeError) {
            return state;
        } else {
            throw(e);
        }
    }
};

export default TodoListReducer;
