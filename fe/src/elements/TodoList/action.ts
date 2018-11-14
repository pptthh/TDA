import Actions, { IActions } from '../../actions';

const Action = {
    done: (data: number): IActions<number> =>
        ({type: Actions.DONE_TODO, payload: data}),
    edit: (data: number): IActions<number> =>
        ({type: Actions.DONE_TODO, payload: data}),
};

export default Action;
