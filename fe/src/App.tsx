import * as React from 'react';
import './App.css';
import logo from './logo.svg';
import Button from './component/Button';
import { NOOP } from './util/util';

const App = () =>
<div className='App'>
  <header className='App-header'>
    <h1 className='App-title'><img src={logo} className='App-logo' alt='logo'/>
      Welcome your to ToDo app React</h1>
  </header>
  <p className='App-intro'>
    To get started, edit <code>src/App.tsx</code> and save to reload.
    If you havent don it yet. <br />
    <Button name='button' label='button' onClick={NOOP}/>
  </p>
</div>;

export default App;
