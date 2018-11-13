import Actions from '../../actions';
import createReducer, { ISwitch } from '../../reducers/createReducer';
import { CHK } from '../../utils';
import ICounterState from './state';

const init: ICounterState = {
    counter: 0,
};

const SWITCH: ISwitch<ICounterState> = {};
SWITCH[Actions.INCREMENT_COUNTER] = //  fall trogh
SWITCH[Actions.DECREMENT_COUNTER] = ({state, payload}) => ({
    ...state,
    counter: CHK.int(payload),
});

export default createReducer(SWITCH, init);
