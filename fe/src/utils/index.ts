import { IActions } from '../actions';

// tslint:disable-next-line
export const NOOP = () => {};

const c = console;
export const LOG = c.log;

export const CHK = {
    bool: (b: unknown): boolean => {
        if (typeof b === 'boolean') {
            return b as boolean;
        }
        throw new Error('boolean casting failed');
    },
    int: (n: unknown): number => {
        if (typeof n === 'number' && Number.isInteger(n)) {
            return n as number;
        }
        throw new Error('number casting failed');
    },
    str: (s: unknown): string => {
        if (typeof s === 'string') {
            return s as string;
        }
        throw new Error('string casting failed');
    },
};

export const REDUX_INIT = '@@INIT';

export interface ICase<T> {
    state: T;
    payload: undefined;
}

export interface ISwitch<T> {
    [REDUX_INIT]: ({state, payload}: ICase<T>) => T;
}

export const REDUCER = <StateType>(
    SWITCH: ISwitch<StateType>,
    init: StateType,
) => (
    (
        state: StateType = init,
        {type, payload}: IActions<unknown>,
    ): StateType => {
        try {
            return SWITCH[type]({state, payload}) as StateType;
        } catch (e) {
            if (e instanceof TypeError) {
                if (state !== undefined) {
                    return state;
                }
                return SWITCH[REDUX_INIT]();
            }
            throw(e);
        }
    }
);
