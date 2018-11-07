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
