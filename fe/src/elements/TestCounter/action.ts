import Actions, { IActions } from '../../actions';
import store from '../../reducers/store';
import ICounterState from './state';

const st = (): ICounterState => store.getState().counterState;

const action = {
    increment: (): IActions<number> =>
    ({type: Actions.INCREMENT_COUNTER, payload: st().counter + 1}),

    decrement: (): IActions<number> =>
    ({type: Actions.DECREMENT_COUNTER, payload: st().counter - 1}),
};

export default action;
