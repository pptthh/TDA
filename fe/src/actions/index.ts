enum Actions {
    ADD_TODO = 'addTodo',
    INCREMENT_COUNTER = 'incrementCounter',
    DECREMENT_COUNTER = 'decrementCounter',
    TEXT_CHANGED = 'textChanged',
    INIT = 'init',
}

export default Actions;

export interface IActions<T> {
    type: Actions;
    payload?: T;
}
