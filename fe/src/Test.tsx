import * as React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Button from './component/Button';
import Label from './component/Label';
import List, { IList } from './component/List';
import TextInput from './component/TextInput';
import AddNote from './elements/AddNote';
import TestCounterContainer from './elements/TestCounter/container';
import logo from './logo.svg';
import reducers from './reducers';
import './Test.css';
import { LOG } from './Util';

const store = createStore(reducers); // rootReducer

const listData: IList = {
    list: [
        {text: 'text', time: 0},
        {text: 'text2', time: 123456798},
    ],
};

const App = () =>
<div className='App'>
    <header className='App-header'>
        <h1 className='App-title'><img src={logo} className='App-logo' alt='logo'/>
            Welcome your to ToDo list (written in React-Redux)</h1>
    </header>
    <p className='App-intro'>
        To get started, edit <code>src/App.tsx</code> and save to reload.
        If you havent don it yet. <br />
    </p>
    <hr/>
    <Label>test text</Label>
    <hr/>
    <Button name='button' label='test button' onClick={() => LOG('test button onClicked')}/>
    <hr/>
    <List list={listData.list}/>
    <hr/>
    <TextInput placeholder='placeholder' name='name'/>
    <hr/>
    <Provider store={store}>
        <AddNote/>
    </Provider>
    <hr/>
    <Provider store={store}>
        <TestCounterContainer/>
    </Provider>
    <hr/>
</div>;

export default App;
