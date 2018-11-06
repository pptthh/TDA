import * as React from 'react';
import Button from 'src/component/Button';

interface ITestCounter {
    counter: number;
    increment: () => void;
    decrement: () => void;
}

const TestCounter = ({counter, increment, decrement}: ITestCounter) =>
    <div className='testCounter'>
        <Button label='+' onClick={increment}/>
        ${counter}
        <Button label='-' onClick={decrement}/>
    </div>;

export default TestCounter;
