import * as React from 'react';
import Button from '../../component/Button';
import ICounterState from './state';

interface ITestCounter extends ICounterState {
    increment: (data: number) => void;
    decrement: (data: number) => void;
}

const TestCounter = ({
    counter,
    increment,
    decrement,
}: ITestCounter) =>
    <div className='testCounter'>
        <Button label='+' onClick={() => increment(counter)}/>
        {counter}
        <Button label='-' onClick={() => decrement(counter)}/>
    </div>;

export default TestCounter;
