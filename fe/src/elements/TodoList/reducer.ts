import Actions from '../../actions';
import createReducer, { ISwitch } from '../../reducers/createReducer';
import { CHK } from '../../utils';
import ITodoListState from './state';

const init: ITodoListState = {
    list: [],
};

const SWITCH: ISwitch<ITodoListState> = {
    [Actions.ADD_TODO]: ({state, payload}) => ({
        ...state,
        list: state.list.concat(CHK.str(payload)),
    }),
};

const TodoListReducer = createReducer(SWITCH, init);

export default TodoListReducer;
