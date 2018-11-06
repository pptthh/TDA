import Actions, { IActions } from 'src/actions';
import ICounterState from './state';

const defaultState: ICounterState = {
    counter: 0,
};

export const increment = (data: number): IActions<number> =>
    ({type: Actions.INCREMENT_COUNTER, payload: data ++});

export const decrement = (data: number): IActions<number> =>
    ({type: Actions.DECREMENT_COUNTER, payload: data --});

const TestCounterReducer = (state: ICounterState = defaultState, action: IActions<unknown>): ICounterState => {
    switch (action.type) {
        case Actions.INCREMENT_COUNTER: {
            return {
                ...state,
                counter: state.counter + 1,
            };
        }
        case Actions.DECREMENT_COUNTER: {
            return {
                ...state,
                counter: state.counter - 1,
            };
        }
    }
    return state;
};

export default TestCounterReducer;
