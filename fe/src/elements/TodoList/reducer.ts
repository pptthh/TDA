import Actions from '../../actions';
import createReducer, { ICase, ISwitch } from '../../reducers/createReducer';
import { CHK } from '../../utils';
import ITodoListState from './state';

const init: ITodoListState = {
    list: [],
};
const addTodo = ({state, payload}: ICase<ITodoListState>) => ({
    ...state,
    list: state.list.concat([{
        id: new Date().getTime(),
        note: CHK.str(payload),
    }]),
});

const doneTodo = ({state, payload}: ICase<ITodoListState>) => ({
    ...state,
    list: state.list.filter(({id}) => id !== payload),
});

const SWITCH: ISwitch<ITodoListState> = {
    [Actions.ADD_TODO]: addTodo,
    [Actions.DONE_TODO]: doneTodo,
};

export default createReducer(SWITCH, init);
