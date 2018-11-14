import Actions from '../../actions';
import createReducer, { ICase, ISwitch } from '../../reducers/createReducer';
import { CHK } from '../../utils';
import ICounterState from './state';

const init: ICounterState = {
    counter: 0,
};

const updateCounter = ({state, payload}: ICase<ICounterState>): ICounterState => ({
    ...state,
    counter: CHK.int(payload),
});

const SWITCH: ISwitch<ICounterState> = {
    [Actions.INCREMENT_COUNTER]: updateCounter,
    [Actions.DECREMENT_COUNTER]: updateCounter,
};

export default createReducer(SWITCH, init);
