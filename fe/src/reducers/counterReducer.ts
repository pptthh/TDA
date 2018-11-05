import Actions, { IActions } from 'src/actions';

const counterReducer = (state = {}, action: IActions<unknown>) => {
    switch (action.type) {
        case Actions.INCREMENT_COUNTER: {
            return {
                ...state,
            };
        }
        case Actions.DECREMENT_COUNTER: {
            return {
                ...state,
            };
        }
    }
    return state;
};

export default counterReducer;
