import Actions from '../../actions';
import { CHK, ICase, ISwitch, REDUCER, REDUX_INIT } from '../../utils';
import ITodoListState from './state';

const init: ITodoListState = {
    list: [],
};

interface ITodoListSwich<T> extends ISwitch<T> {
    [Actions.ADD_TODO]: ({}: ICase<T>) => T;
}

const SWITCH: ITodoListSwich<ITodoListState> = {
    [REDUX_INIT]: ({}: ICase<ITodoListState>) => init,

    [Actions.ADD_TODO]: ({state, payload}: ICase<ITodoListState>): ITodoListState => ({
        ...state,
        list: state.list.concat(CHK.str(payload)),
    }),
};
// SWITCH.[Actions.ADD_TODO] = ({state, payload}: ICase<ITodoListState>): ITodoListState => ({
//     ...state,
//     list: state.list.concat(CHK.str(payload)),
// });

const TodoListReducer = REDUCER(SWITCH);

export default TodoListReducer;
