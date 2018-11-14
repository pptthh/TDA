enum Actions {
    ADD_TODO = 'addTodo',
    DONE_TODO = 'doneTodo',
    EDIT_TODO = 'editTodo',
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
