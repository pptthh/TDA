import Actions, { IActions } from '../../actions';
import { CHK, LOG } from '../../utils';
import ICounterState from './state';

export const init: ICounterState = {
    counter: 0,
};

export const increment = (data: number): IActions<number> =>
    ({type: Actions.INCREMENT_COUNTER, payload: ++data});

export const decrement = (data: number): IActions<number> =>
    ({type: Actions.DECREMENT_COUNTER, payload: --data});

const TestCounterReducer = (state: ICounterState = init, action: IActions<unknown>): ICounterState => {
    LOG('', action.payload, '\t', action.type, 'TestCounterReducer');
    switch (action.type) {
        case Actions.DECREMENT_COUNTER:
        case Actions.INCREMENT_COUNTER: {
            return {
                ...state,
                counter: CHK.int(action.payload),
            };
        }
    }
    return state;
};

export default TestCounterReducer;
