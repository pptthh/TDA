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
    [Actions.DONE_TODO]: ({state, payload}) => ({
        ...state,
        list: state.list.filter(s => s !== payload),
    }),
};

export default createReducer(SWITCH, init);
