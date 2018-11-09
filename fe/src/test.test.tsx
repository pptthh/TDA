import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Test from './test';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Test />, div);
    ReactDOM.unmountComponentAtNode(div);
});
