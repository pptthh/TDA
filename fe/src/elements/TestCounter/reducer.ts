import Actions, { IActions } from '../../actions';
import { CHK, LOG } from '../../utils';
import ICounterState from './state';

const init: ICounterState = {
    counter: 0,
};

interface ITestCounterswtch {
    state: ICounterState;
    payload: unknown;
}

const swtch = {
    case: (state: ICounterState = init, {type, payload}: IActions<unknown>): ICounterState => {
        LOG('', payload, '\t', type, 'TestCounterswtch');
        try {
            return swtch[type]({state, payload} as ITestCounterswtch);
        } catch (e) {
            if (e instanceof TypeError) {
                return state;
            } else {
                throw(e);
            }
        }
    },
};

swtch[Actions.INCREMENT_COUNTER] =
swtch[Actions.DECREMENT_COUNTER] =
    (prop: ITestCounterswtch) => ({
        ...prop.state,
        counter: CHK.int(prop.payload),
    });

const TestCounterReducer = swtch.case;
export default TestCounterReducer;
