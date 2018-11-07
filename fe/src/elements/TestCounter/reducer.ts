import Actions, { IActions } from 'src/actions';
import { CHK } from 'src/utils';
import ICounterState from './state';

const init: ICounterState = {
    counter: 0,
};

export const increment = (data: number): IActions<number> =>
    ({type: Actions.INCREMENT_COUNTER, payload: data ++});

export const decrement = (data: number): IActions<number> =>
    ({type: Actions.DECREMENT_COUNTER, payload: data --});

const TestCounterReducer = (state: ICounterState = init, action: IActions<unknown>): ICounterState => {
    switch (action.type) {
        case Actions.DECREMENT_COUNTER:
        case Actions.INCREMENT_COUNTER: {
            return {
                ...state,
                counter: CHK.num(action.payload),
            };
        }
    }
    return state;
};

export default TestCounterReducer;
