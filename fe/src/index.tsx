import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Test from './Test';

ReactDOM.render(
    <Test />,
    document.getElementById('root') as HTMLElement,
);

registerServiceWorker();
