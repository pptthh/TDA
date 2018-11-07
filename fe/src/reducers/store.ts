import { createStore } from 'redux';
import rootReducer from '.';
// tslint:disable-next-line
const win = window as any;
const store = createStore(
    rootReducer,
    win.__REDUX_DEVTOOLS_EXTENSION__ &&
    win.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
