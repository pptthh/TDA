import { IActions } from '../actions';

interface ICase<T> {
    state: T;
    payload?: unknown;
}

export interface ISwitch<T> {
    [s: string]: ({state, payload}: ICase<T>) => T;
}

export const createReducer = <T>(
    Switch: ISwitch<T>,
    stateInit: T,
) => (
    (
        state: T = stateInit,
        {type, payload}: IActions<unknown>,
    ): T => {
        try {
            return Switch[type]({state, payload}) as T;
        } catch (e) {
            if (e instanceof TypeError) {
                return state;
            }
            throw(e);
        }
    }
);

export default createReducer;
