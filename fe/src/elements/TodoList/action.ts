import Actions, { IActions } from '../../actions';

const Action = {
    done: (data: string): IActions<string> =>
        ({type: Actions.DONE_TODO, payload: data}),
};

export default Action;
