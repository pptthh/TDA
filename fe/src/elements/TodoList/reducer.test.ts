import { configure } from 'enzyme';
import * as ReactSixteenAdapter from 'enzyme-adapter-react-16';
import Actions from '../../actions';
import TodoListReducer from './reducer';
import ITodoListState from './state';

configure({adapter: new ReactSixteenAdapter()});

describe('describe TodoList Switch cases', () => {
    const ITEM = {note: 'ITEM', id: 222};
    const initState: ITodoListState = {
        list: [{note: 'rtyu', id: 1}, ITEM, {note: 'fghj', id: 97}],
    };
    const expectedState: ITodoListState = {
        list: [{note: 'rtyu', id: 1}, {note: 'fghj', id: 97}],
    };

    it('check DONE_TODO action ' + Actions.DONE_TODO, () => {
        const newState = () => TodoListReducer(
            initState,
            {
                payload: ITEM.id,
                type: Actions.DONE_TODO,
            },
        );

        expect(newState()).toEqual(expectedState);
    });

});
