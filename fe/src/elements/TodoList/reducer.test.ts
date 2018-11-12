import { configure } from 'enzyme';
import * as ReactSixteenAdapter from 'enzyme-adapter-react-16';
import Actions from '../../actions';
import TodoListReducer from './reducer';
import ITodoListState from './state';

configure({adapter: new ReactSixteenAdapter()});

describe('describe TodoList Switch cases', () => {
    const ITEM = 'ITEM';
    const initState: ITodoListState = {
        list: ['rtyu', 'tyui', 'yuio', ITEM, 'fghj'],
    };

    it('check DONE_TODO action ' + Actions.DONE_TODO, () => {
        const newState = () => TodoListReducer(
            initState,
            {
                payload: ITEM,
                type: Actions.DONE_TODO,
            },
        );
        const expectedState: ITodoListState = {
            list: ['rtyu', 'tyui', 'yuio', 'fghj'],
        };

        expect(newState()).toEqual(expectedState);
    });

});
