import * as React from 'react';
import { Provider } from 'react-redux';
import Actions from './actions';
import Button from './component/Button';
import Label from './component/Label';
import List, { IList } from './component/List';
import TextInput from './component/TextInput';
import AddNoteContainer from './elements/AddNote/container';
import TestCounterContainer from './elements/TestCounter/container';
import logo from './logo.svg';
import store from './reducers/store';
import './test.css';
import { LOG } from './utils';

const listData: IList = {
    list: [
        {text: 'text', time: 0},
        {text: 'text2', time: 123456798},
    ],
};

store.dispatch({type: Actions.INIT});

const Test = () =>
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
        <AddNoteContainer/>
    </Provider>
    <hr/>
    <Provider store={store}>
        <TestCounterContainer/>
    </Provider>
    <hr/>
</div>;

export default Test;
